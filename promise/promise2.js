const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 2000)
})
const promise2 = promise1.then(() => {
    console.log('***************')
    throw new Error('error!!!')
})

console.log('promise1', promise1)
console.log('promise2', promise2)

setTimeout(() => {
    console.log('promise1', promise1)
    console.log('promise2', promise2)
}, 4000)


/**
 解释：promise 有 3 种状态：pending、fulfilled 或 rejected。
 状态改变只能是 pending->fulfilled 或者 pending->rejected，
 状态一旦改变则不能再变。上面 promise2 并不是 promise1，而是返回的一个新的 Promise 实例。
 */