const ArraySorts = require('../ArraySorts');

let testArr = new ArraySorts();
testArr.insert(2, 3, 7, 6, 4, 9, 1)
console.log('original: ', testArr.toString());
testArr.quickSort();
// testArr.betterBubbleSort();
// testArr.bubbleSort();
// testArr.insertionSort();
console.log('after sort: ', testArr.toString())

