const promise = new Promise((resolve, reject) => {
    resolve('success1')
    reject('error')
    resolve('success2')
})

promise
    .then((res) => {
        console.log('then: ', res)
    })
    .catch((err) => {
        console.log('catch: ', err)
    })
    // then:  success1 解释：构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用，呼应代码二结论：promise 状态一旦改变则不能再变。

Promise.resolve(1)
    .then((res) => {
        console.log(res)
        return 2
    })
    .catch((err) => {
        return 3
    })
    .then((res) => {
        console.log(res)
    })
    // 1 2 解释：promise 可以链式调用。提起链式调用我们通常会想到通过 return this 实现，不过 Promise 并不是这样实现的。promise 每次调用 .then 或者 .catch 都会返回一个新的 promise，从而实现了链式调用。


