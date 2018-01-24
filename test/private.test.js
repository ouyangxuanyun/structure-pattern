class Person1 {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

const Person2 = (function() {
    let _name = Symbol();
    class Person {
        constructor(name) {
            this[_name] = name;
        }

        get name() {
            return this[_name];
        }
    }
    return Person;
})();

const _name2 = Symbol("_name2");
class Person3 {
    constructor(name) {
        this[_name2] = name;
    }

    get name() {
        return this[_name2];
    }
}


let james = new Person1("James");
james._name = "Tom";        // Tom but not James
console.log(james); // Person1 { _name: 'Tom' }

let Tom = new Person2('Tom');
Tom.name = 'James' // Tom 根本没有name的set方法，也没办法直接访问name属性，只能通过name的get方法获取
console.log(Tom) // Person {[Symbol()]: 'Tom' }
console.log(Tom.name); // Tom

let John = new Person3("John");
John.name = "Peter";
console.log(John);// Person3 { [Symbol(_name2)]: 'John' }
John._name = "_Peter";
console.log(John); // Person3 { _name: '_Peter', [Symbol(_name2)]: 'John' }
console.log(John.name) // John