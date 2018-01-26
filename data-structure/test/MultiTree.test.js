const multiTree = require('../MultiTree');

let tree = new multiTree('code');
let data = [
  {
    'code': '001',
    'type': 'w',
    'name': 'AA',
    'user_id': '01',
    'user_title': '市',
    'province_code': '350000000000',
    'parent': '000'
  },
  {
    'code': '002',
    'type': 'p',
    'name': 'A',
    'user_id': '01',
    'user_title': '镇',
    'province_code': '350000000000',
    'parent': '35000000001'
  },
  {
    'code': '003',
    'type': 'p',
    'name': 'A1',
    'user_id': '01',
    'user_title': '镇',
    'province_code': '350000000000',
    'parent': '001'
  },
  {
    'code': '004',
    'type': 'p',
    'name': 'A2',
    'user_id': '01',
    'user_title': '镇',
    'province_code': '350000000000',
    'parent': '002'
  },
  {
    'code': '004',
    'type': 'p',
    'name': 'A2',
    'user_id': '01',
    'user_title': '镇',
    'province_code': '350000000000',
    'parent': '003'
  },
  {
    'code': '000',
    'type': 'w',
    'name': 'A0',
    'user_id': '01',
    'user_title': '省',
    'province_code': '350000000000',
    'parent': null
  }
];

for (let val of data) {
  tree.insert(val);
}

console.log(JSON.stringify(tree.toArray()));

/*
*           000
*           001
*        002   003
*        004   004
**/