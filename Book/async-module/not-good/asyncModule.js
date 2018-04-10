const asyncModule = {};

asyncModule.initialized = false;
asyncModule.initialize = () => {
    return new Promise((rsv, rej) => {
        setTimeout(() => {
            asyncModule.initialized = true;
            rsv();
        }, 5000)
    })
}

asyncModule.tell = () => {
    return new Promise((rsv, rej) => {
        if (!asyncModule.initialized) {
            rej(new Error('no thing to say'))
        }
        rsv('current time is:' + new Date())
    })
}

module.exports = asyncModule;

