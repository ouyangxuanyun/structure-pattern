// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2)
// })
//
// promise.then(() => {
//     console.log(3);
// })
// console.log(4);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})
console.log(promise)
promise
    .then(() => {
        console.log(promise)
        throw new Error('error!!!')
    })
    .catch(err => {
        console.log(promise)
    })