const HashTable = require('../HashTable');

let HashTable1 = new HashTable();
HashTable1.put("ts1",111);
HashTable1.put("ts2",222);
HashTable1.put("ts3",333);
console.log(HashTable1.get("ts1"),HashTable1.get("as1"));
console.log(HashTable1.toString());