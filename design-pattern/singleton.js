//es5 单例模式
var SingleES5 = (function () {
    var _instance = null;

    function Single() {
        return {
            publicMethod: function () {
            },
            publicProperty: 'prop'
        }
    }

    return function () {
        if (!_instance) {
            _instance = Single();
        }
        return _instance;
    }
})

// ES6 一般单例模式
let instance = null;
class mySingleton {
    constructor() {
        if (!instance) instance = this;
        return instance;
    }
    publicMethod() {
        console.log("The public can see me!");
    }
}
let singleton1 = new mySingleton();



// ES6 单例模式（静态方法）
class Singleton {
    //constructor() {}
    static getInstance(){
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    publicMethod() {
        console.log("The public can see me!");
    }
}
var cache = mySingleton.getInstance();