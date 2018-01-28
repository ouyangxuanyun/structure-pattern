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
linkedlist.insert(0,'ts4');
console.log(linkedlist.toString(),linkedlist.size());