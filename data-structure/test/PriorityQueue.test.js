const PriorityQueue = require('../PriorityQueue');

const queue = new PriorityQueue();
queue.enqueue("ts1", 4);
queue.enqueue("ts2", 2);
queue.enqueue("ts3", 3);
console.log(queue.print());