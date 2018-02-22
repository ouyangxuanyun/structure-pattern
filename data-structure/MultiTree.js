class Node {
  constructor (key, parent, value) {
    this._key = key;        // 节点唯一标识
    this._value = value;    // 节点内容
    this._parents = new Set(); // 父节点 可能有多个
    this._parents.add(parent);
    this._children = [];     // 所有子节点节点集合
  }

  get key () {
    return this._key;
  }

  set key (value) {
    this._key = value;
  }

  get children () {
    return this._children;
  }

  set children (value) {
    this._children = value;
  }

  get value () {
    return this._value;
  }

  set value (value) {
    this._value = value;
  }

  get parents () {
    return this._parents;
  }

  set parents (value) {
    this._parents = value;
  }
}

// 根节点
const _root = Symbol('_root');
// 根节点对应的标识符号
const _rootTag = Symbol('_rootTag');
// 插入节点函数
const _funcInsertNode = Symbol('_funcInsertNode');
// 递归树函数
const _funcRecursionNode = Symbol('_funcRecursionNode');

const _waitAllot = Symbol('_waitAllot');
// 待分配节点队列
const _waitAllotSet = Symbol('_waitAllotSet');
// 根据code对应node的映射
const _nodeHash = Symbol('_nodeHash');

const insertNode = (root, node) => {
  if (node.parents.has(root.key)) {
    root.children.push(node);
    return true;
  }
  for (let val of root.children) {
    return insertNode(val, node);
  }
  return false;
};

const recursion = (list, children) => { //把所有的子节点加入到list中
  let index = 0;
  for (let v of children) {
    let parse = JSON.parse(JSON.stringify(v.value));
    list.push(parse);
    recursion(list[index].next, v.children);// 此处 给每个节点添加了next属性
    // recursion([], v.children);
    index++;
  }
};

class MultiTree {
  constructor (keyName) {
    this[_root] = new Node(_rootTag, null, {next: []});
    this._keyName = keyName;
    this[_funcInsertNode] = insertNode;
    this[_funcRecursionNode] = recursion;
    this[_waitAllot] = new Map();
    this[_waitAllotSet] = new Set();
    this[_nodeHash] = new Map();
  }

  get keyName () {
    return this._keyName;
  }

  set keyName (value) {
    this._keyName = value;
  }

  insert(data) {
    if (!(this._keyName in data) || !('parent' in data)) {
      return false;
    }
    if (this[_nodeHash].has(data[this.keyName])) {
      const getNode = this[_nodeHash].get(data[this.keyName]);
      if (getNode.parents.has(data.parent)) {   // 重复数据 不添加
        console.error(`${this.keyName}=${data[this.keyName]} and parent=${data.parent} is repeat`);
      } else {
        getNode.parents.add(data.parent);
        // 多个父节点时  往value[this.keyName]对应的父节点的children添加节点
        if (this[_nodeHash].has(data.parent)) {
          this[_nodeHash].get(data.parent).children.push(getNode);
          // console.log(value.parent,this[_node_hash].get(value.parent));
        } else {

        }
      }
      return true;
    }
    let dataCopy = JSON.parse(JSON.stringify(data));
    dataCopy.next = [];
    let node = new Node(data[this.keyName], data.parent, dataCopy);
    this[_nodeHash].set(data[this.keyName], node);
    if (!dataCopy.parent) { //一级
      node.parents.add(this[_root]);
      this[_root].children.push(node);
    } else {
      let newVar = this[_funcInsertNode](this[_root], node);
      if (!newVar) {
        this[_waitAllotSet].add(node); // 添加到待分配中
      }
    }
    this.clearWait(node); // 每次需要把待分配队列递归遍历
    return true;
  }

  clearWait (node) {
    let isRecursion = false;
    let nodeList = [];
    for (let value of this[_waitAllotSet]) {
      if (value.parents.has(node.key)) {
        this[_funcInsertNode](node, value);
        this[_waitAllotSet].delete(value);
        isRecursion = true;
        nodeList.push(value);
      }
    }
    if (isRecursion && this[_waitAllotSet].size !== 0) {
      for (let val of nodeList) {
        this.clearWait(val);
      }
    }
  }

  toArray () {
    let list = [];
    this[_funcRecursionNode](list, this[_root].children); // 意义是把root节点的所有子节点添加到list中
    console.log(this[_root]);
    return list;
  }
}

module.exports = MultiTree;
