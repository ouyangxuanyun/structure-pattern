const multiTree = require('../MultiTree');

let tree = new multiTree('code');
let data = [
  {
    'code': '35000000001',
    'type': 'watershed',
    'name': '闽江福州段',
    'user_id': '01',
    'user_title': '市级河长',
    'province_code': '350000000000',
    'parent': '350000001'
  },
  {
    'code': '35000000002',
    'type': 'reach',
    'name': '淮溪',
    'user_id': '01',
    'user_title': '镇级河长',
    'province_code': '350000000000',
    'parent': '35000000001'
  },
  {
    'code': '35000000003',
    'type': 'reach',
    'name': '淮溪1',
    'user_id': '01',
    'user_title': '镇级河长',
    'province_code': '350000000000',
    'parent': '35000000001'
  },
  {
    'code': '35000000004',
    'type': 'reach',
    'name': '淮溪2',
    'user_id': '01',
    'user_title': '镇级河长',
    'province_code': '350000000000',
    'parent': '35000000002'
  },
  {
    'code': '35000000004',
    'type': 'reach',
    'name': '淮溪2',
    'user_id': '01',
    'user_title': '镇级河长',
    'province_code': '350000000000',
    'parent': '35000000003'
  },
  {
    'code': '350000001',
    'type': 'watershed',
    'name': '闽江流域',
    'user_id': '01',
    'user_title': '省级河长',
    'province_code': '350000000000',
    'parent': null
  }
];

for (let val of data) {
  tree.insert(val);
}

console.log(JSON.stringify(tree.toArray()));