/**
 * 确保实例化或者说是创建对象的时候只实例化/创建一次。
 */
//es5 单例模式
var SingleES5 = (function () {
    var _instance = null;

    function Single() {
        return {
            publicMethod: function () {},
            publicProperty: 'prop'
        }
    }

    return function () {
        if (!_instance) {
            _instance = Single();
        }
        return _instance;
    }
})()

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
var cache = Singleton.getInstance();


/*

var Singleton = (function () {
    var instantiated;
    function init() {
        /!*这里定义单例代码*!/
        return {
            publicMethod: function () {
                console.log('hello world');
            },
            publicProperty: 'test'
        };
    }

    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };
})();

/!*调用公有的方法来获取实例:*!/
Singleton.getInstance().publicMethod();

*/
