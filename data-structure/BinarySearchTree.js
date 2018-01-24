class Node {
    constructor(key) {
        this._key = key;
        this._left = null;
        this._right = null;
    }

    get key() {
        return this._key;
    }

    set key(value) {
        this._key = value;
    }

    get left() {
        return this._left;
    }

    set left(value) {
        this._left = value;
    }

    get right() {
        return this._left;
    }

    set right(value) {
        this._right = value;
    }
}

const _root = Symbol("_root");
const _funcInsertNode = Symbol("_funcInsertNode");
const _funcSearchNode = Symbol("_funcSearchNode");
const _funcRemoveNode = Symbol("_funcRemoveNode");
const _funcInOrderTraverse = Symbol("_funcInOrderTraverse");
const _funcPreOrderTraverse = Symbol("_funcPreOrderTraverse");
const _funcPostOrderTraverse = Symbol("_funcPostOrderTraverse");
const insertNode = (parentNode, newNode) => {
    if (newNode.key < parentNode.key) {
        if (parentNode.left === null) {
            parentNode.left = newNode;
        } else {
            insertNode(parentNode.left, newNode);
        }
    } else {
        if (parentNode.right === null) {
            parentNode.right = newNode;
        } else {
            insertNode(parentNode.right, newNode);
        }
    }
};
const searchNode = (node, key) => { // node 起始点为root
    if (!node || !key) {
        return false;
    }
    if (key < node.key) { // left
        return searchNode(node.left, key);
    } else if (key > node.key) { //right
        return searchNode(node.right, key);
    } else {
        return true;
    }
};
const removeNode = (node, key) => { // node 起始点为root, 函数返回的是删除节点后新树的根节点
    if (!node || !key) {
        return null;
    }
    if (key < node.key) { // left
        node.left = removeNode(node.left, key);
        return node;
    } else if (key > node.key) {// right
        node.right = removeNode(node.right, key);
        return node;
    } else {
        if (node.left === null && node.right === null) { // 叶节点
            node = null;
            return node;
        }
        if (node.left === null) { // 只有右节点
            node = node.right;
            return node;
        }
        if (node.right === null) { // 只有左节点
            node = node.right;
            return node;
        }
        let minNode = findMinNode(node.right) // 找到右子树的最小节点替代要删除的节点
        node.key = minNode.key; // 要删除节点的值更新为找到的值，右节点指向 删除此最小节点的新树的根节点
        node.right = removeNode(node.right, minNode.key);
        return node;
    }
};
const findMinNode = node => { // 找到最小的节点
    while (node && node.left) {
        node = node.left;
    }
    // return node ? node : null
    return node
}
const inOrderTraverse = (node, arr) => {
    if (node) {
        inOrderTraverse(node.left, arr);
        arr.push(node.key);
        inOrderTraverse(node.right, arr);
    }
    return arr;
}
const preOrderTraverseNode = (node, arr) => {
    if (node) {
        arr.push(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
    }
    return arr;
};
const postOrderTraverseNode = (node, arr) => {
    if (node) {
        postOrderTraverseNode(node.left, arr);
        postOrderTraverseNode(node.right, arr);
        arr.push(node.key);
    }
    return arr;
};
class BinarySearchTree {
    constructor() {
        this[_root] = null;
        this[_funcInsertNode] = insertNode;
        this[_funcSearchNode] = searchNode;
        this[_funcRemoveNode] = removeNode;
        this[_funcInOrderTraverse] = inOrderTraverse;
        this[_funcPreOrderTraverse] = preOrderTraverseNode;
        this[_funcPostOrderTraverse] = postOrderTraverseNode;
    }

    /**
     * 插入节点
     * @param key
     */
    insert(key) {
        const node = new Node(key);
        if (this[_root] === null) {  // 根节点
            this[_root] = node;
        } else {
            this[_funcInsertNode](this[_root], node);
        }
    }

    /**
     * 查找节点
     * @param key
     */
    search(key) {
        return this[_funcSearchNode](this[_root], key);
    }

    /**
     * 删除节点
     * @param key
     */
    remove(key) {
        this[_funcRemoveNode](this[_root], key);

    }

    inOrderTraverse() {
        this[_funcInOrderTraverse](this[_root], []);
    }

    preOrderTraverse() {
        this[_funcPreOrderTraverse](this[_root], []);
    }

    postOrderTraverse() {
        this[_funcPostOrderTraverse](this[_root], []);
    }


    min() {
        let current = this[_root];
        while (current && current.left) {
            current = current.left;
        }

        return current ? current.key : null;
    }

    max() {
        let current = this[_root];
        while (current && current.right) {
            current = current.right;
        }

        return current ? current.key : null;
    }

    /**
     * 访问方式  1 inOrderTraverse 2 preOrderTraverse
     * @param order
     * @return {*|string}
     */
    toString(order) {
        let arr;
        if (order == 2) {
            arr = this.preOrderTraverse();
        } else if (order == 3) {
            arr = this.postOrderTraverse();
        } else {
            arr = this.inOrderTraverse();
        }
        return arr.toString();
    }
}


