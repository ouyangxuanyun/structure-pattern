const LinkedList = require('../LinkedList');

const linkedlist = new LinkedList();
linkedlist.append("ts1");
linkedlist.append("ts2");
linkedlist.append("ts3");
linkedlist.append("ts4");
console.log(linkedlist.toString(),linkedlist.size());
console.log(linkedlist.removeAt(3));
console.log(linkedlist.indexOf("ts4"));
console.log(linkedlist.toString(),linkedlist.size());

console.log(linkedlist.remove('ts2'));
// console.log(linkedlist.remove('ts1'));
// console.log(linkedlist.remove('ts3'));
// console.log(linkedlist.remove('ts3'));
// linkedlist.insert(2,'ts4');
linkedlist.insert(0,'ts4');
console.log(linkedlist.toString(),linkedlist.size());