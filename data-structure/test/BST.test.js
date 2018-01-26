const BST = require('../BinarySearchTree');

const tree = new BST();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

console.log('Inorder: ',tree.toString(1));
console.log('Preorder: ',tree.toString(2));
console.log('Postorder: ',tree.toString(3));
console.log('search: ',tree.search(11),tree.search(30));
console.log('max: ',tree.max());
console.log('min: ',tree.min());

console.log('************************************')
tree.remove(6);
console.log('Inorder: ',tree.toString(1));
tree.remove(5);
console.log('Inorder: ',tree.toString(1));
tree.remove(15);
console.log('Inorder: ',tree.toString(1));