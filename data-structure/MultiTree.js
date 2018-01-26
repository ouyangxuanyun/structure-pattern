class Node {
    constructor(key, parent, value) {
        this._key = key;        // 节点唯一标识
        this._value = value;    // 节点内容
        this._parents = new Set(); // 父节点 可能有多个
        this._parents.add(parent);
        this._childes = [];     // 所有子节点节点集合
    }

    get key() {
        return this._key;
    }

    set key(value) {
        this._key = value;
    }


    get childes() {
        return this._childes;
    }

    set childes(value) {
        this._childes = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get parents() {
        return this._parents;
    }

    set parents(value) {
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

const insertNode = function (root, node) {
    if (node.parents.has(root.key)) {
        // console.log("========2",root,"===========1",node);
        root.childes.push(node);
        return true;
    }
    for (let val of root.childes) {
        return insertNode(val, node);
    }
    return false;
};

class MultiTree{
    constructor(keyName) {
        this[_root] = new Node(_rootTag, null, {next: []});
        this._keyName = keyName;
        this[_funcInsertNode] = insertNode;
        // this[_funcRecursionNode] = recursion;
        this[_waitAllot] = new Map();
        this[_waitAllotSet] = new Set();
        this[_nodeHash] = new Map();
    }
    get keyName() {
        return this._keyName;
    }

    set keyName(value) {
        this._keyName = value;
    }

}

