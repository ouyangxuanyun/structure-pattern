const _items = Symbol('_items');

class Element {
    constructor(element, priority) {
        this._element = element;
        this._priority = priority;
    }

    get element() {
        return this._element;
    }

    set element(value) {
        this._element = value
    }

    get priority() {
        return this._priority;
    }

    set priority(value) {
        this._priority = value;
    }

    toJson() {
        let obj = {};
        obj.element = this._element;
        obj.priority = this._priority;
        return obj;
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

class PriorityQueue {
    constructor() {
        this[_items] = [];
    }

    enqueue(element, priority) {
        let queueElement = new Element(element, priority);
        if (this.isEmpty()) {
            this[_items].push(queueElement);
        } else {
            let toAdd = true;
            for (let i = 0; i < this.size(); i++) {
                if (queueElement.priority < this[_items][i].priority) {
                    toAdd = false;
                    this[_items].splice(i, 0, queueElement);
                    break;
                }
            }
            if (toAdd) {
                this[_items].push(queueElement);
            }
        }
        return 1;
    }

    // 移除队列首部的第一个元素
    dequeue() {
        return this[_items].shift();

    }
    // 查看队列的第一个元素
    peak() {
        return this[_items][0];
    }

    isEmpty() {
        return this[_items].length === 0;
    }

    size() {
        return this[_items].length;
    }

    // 返回队列的元素字符串
    print() {
        let result = [];
        this[_items].forEach((item,index)=>{
            result.push(item.toString());
        });
        return result.toString();
    }
}

module.exports = PriorityQueue;


