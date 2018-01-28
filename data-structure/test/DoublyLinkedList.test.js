const DoublyLinkedList = require('../DoublyLinkedList');

const dll = new DoublyLinkedList();
dll.append("ts1");
dll.append("ts2");
dll.append("ts3");
dll.append("ts4");
dll.append("ts6");
dll.insert(4,"ts5");
dll.insert(4,"ts5.5");
dll.insert(4,"tstemp");
dll.insert(1,"ts1.5");

console.log(dll.toString());
dll.removeAt(2);
dll.removeAt(0);
dll.removeAt(dll.size()-1);
console.log('*****', dll.toString());
dll.removeAt(5);
dll.removeAt(4);
dll.removeAt(3);
dll.removeAt(2);
dll.removeAt(1);
dll.removeAt(0);
dll.insert(4,"4444");
dll.insert(3,"3333");
console.log(dll.toString(),dll.size());