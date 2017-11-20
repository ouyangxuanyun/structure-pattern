const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('once')
        resolve('success')
    }, 1000)
})

console.log('promise:', promise)

const start = Date.now()
promise.then((res) => {
    console.log(res, Date.now() - start)
})
promise.then((res) => {
    console.log(res, Date.now() - start)
})