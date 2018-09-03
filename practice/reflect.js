let a = {a: 'aaa', b: 'bbb', c: 'ccc',d:function(){}};


/*
console.log(Object.entries(a));
console.log(Object.getOwnPropertyNames(a));
console.log(Object.keys(a));
console.log(Object.values(a));

for(let i of Object.entries(a)){
  console.log(i);
}
*/

/*
console.log(a.__proto__ === Object.prototype);
console.log(a.__proto__);
console.log(a.toString === a.__proto__.toString);
*/



function func1 () {
  console.log('func1');
}
console.log(func1.prototype);
console.log(Object.entries(func1.prototype));
console.log(func1.prototype.constructor,typeof func1.prototype.constructor);
console.log(Object.entries(Object.prototype));
