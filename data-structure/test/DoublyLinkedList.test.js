const DoublyLinkedList = require('../DoublyLinkedList');

const doublyLinkedList1 = new DoublyLinkedList();
doublyLinkedList1.append("ts1");
doublyLinkedList1.append("ts2");
doublyLinkedList1.append("ts3");
doublyLinkedList1.append("ts4");
doublyLinkedList1.append("ts6");
doublyLinkedList1.insert(4,"ts5");
doublyLinkedList1.insert(4,"ts5.5");
doublyLinkedList1.insert(4,"tstemp");
doublyLinkedList1.insert(1,"ts1.5");

console.log(doublyLinkedList1.toString());
doublyLinkedList1.removeAt(2);
doublyLinkedList1.removeAt(0);
doublyLinkedList1.removeAt(doublyLinkedList1.size()-1);
console.log(doublyLinkedList1.toString());
doublyLinkedList1.removeAt(3);
console.log(doublyLinkedList1.toString());