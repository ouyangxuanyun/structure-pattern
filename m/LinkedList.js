class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    find(item) {
        let currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(newElement, item) {
        let newNode = new Node(newElement);
        let currNode = this.find(item);
        newNode.next = currNode.next;
        newNode.previous = currNode;
        currNode.next = newNode;
    }

    display() {
        let currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element)
            currNode = currNode.next;
        }
    }

    remove(item) {
        let currNode = this.find(item);
        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null
        }
    }

    findLast() {
    }

    dispReverse() {
    }
}

function LinkedListTests() {
    var cities = new LinkedList();
    cities.insert("Conway", "head");
    cities.insert("Russellville", "Conway");
    cities.insert("Carlisle", "Russellville");
    cities.insert("Alma", "Carlisle");
    cities.display();
    cities.remove("Carlisle");
    cities.display();
    cities.dispReverse();
}

LinkedListTests()