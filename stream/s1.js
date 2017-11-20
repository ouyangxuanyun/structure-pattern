// const Readable = require('stream').Readable;
// let rs = new Readable();
// rs.push('Hello ');
// rs.push('World');
// rs.push(null); // rs.push(null)的作用是告诉rs输出数据应该结束了
// rs.pipe(process.stdout);


// var Readable = require('stream').Readable;
// var rs = Readable();
//
// var c = 97;
// rs._read = function () {
//     console.log('******')
//     rs.push(String.fromCharCode(c++));
//     if (c > 'z'.charCodeAt(0)) rs.push(null);
// };
//
// rs.pipe(process.stdout);


// var Readable = require('stream').Readable;
// var rs = Readable();
//
// var c = 97 - 1;
//
// rs._read = function () {
//     if (c >= 'z'.charCodeAt(0)) return rs.push(null);
//
//     setTimeout(function () {
//         rs.push(String.fromCharCode(++c));
//     }, 100);
// };
//
// rs.pipe(process.stdout);
//
// process.on('exit', function () {
//     console.error('\n_read() called ' + (c - 97) + ' times');
// });
// process.stdout.on('error', process.exit);


// process.stdin.on('readable', function () {
//     var buf = process.stdin.read();
//     console.log(buf);
//     console.dir(buf);
// });


// process.stdin.on('readable', function () {
//     var buf = process.stdin.read(3);
//     console.dir(buf);
// });

let a = {aa:'aaaa'}
let b = {bb:'bbb'}
let c = {cc:'ccc'}

let e = {a,b,c}
console.log(e)

let str = 'a=aaa,b=bbb,c=ccc'
let strs = str.slice(0,str.length - 1)
console.log(strs)
