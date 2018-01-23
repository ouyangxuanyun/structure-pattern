let b = 'BBBBB'
let c = 'CCCC'
console.log('module b runn')
setTimeout(() => {console.log('1s later,b run');b = 'bBbBbBbB'},1000)
module.exports = b;