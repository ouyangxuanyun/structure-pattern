let p1Pass = true;
let p2Pass = false;
let p3Pass = true;

let p1 = new Promise((resolve, reject) => {
    if (p1Pass) {
        resolve('P1 pass')
    } else {
        reject('P1 fail')
    }
})

let p2 = new Promise((resolve, reject) => {
    if (p2Pass) {
        resolve('P2 pass')
    } else {
        reject('P2 fail')
    }
})

let p3 = new Promise((resolve, reject) => {
    if (p3Pass) {
        resolve('P3 pass')
    } else {
        reject('P3 fail')
    }
})

Promise.all([p1, p2, p3]).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err)
})