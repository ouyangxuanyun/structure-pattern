const _items = Symbol("_items");

class Stack {
    constructor() {
        this[_items] = [];
    }

    // 添加一个或多个元素到栈顶
    push() {
        this[_items].push(...arguments);
    }

    // 弹出栈顶元素
    pop() {
        return this[_items].pop();
    }

    // 查看栈顶元素
    peek() {
        return this[_items][this.size() - 1];
    }

    // 判断栈是否为空
    isEmpty() {
        return this.size() === 0;
    }

    // 清空栈
    clear() {
        this[_items] = [];
        return true;
    }

    // 查看栈的长度
    size() {
        return this[_items].length;
    }

    // 输出栈元素
    print() {
        return this[_items].toString();
    }

    /**
     * 按从上到下返回数组
     */
    toArray() {
        return this[_items];
    }
}

module.exports = Stack;