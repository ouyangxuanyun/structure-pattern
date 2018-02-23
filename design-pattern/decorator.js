/**
 * 装饰模式是只针对一个基本的对象，添加一些修饰。如下面的是对MacBook，加内存（Memory函数装饰）增加75美元，
 * 雕刻（Engraving函数装饰）增加200美元，买保险（Insurance函数装饰）增加250美元。
 */
class MacBook {
  constructor () {}

  cost () {
    return 1000;
  }

  screensize () {
    return 11.6;
  }
}

// Decorator 1
const Memory = macbook => {
  let v = macbook.cost();
  macbook.cost = () => {
    return v + 100;
  };
};

// Decorator 2
const Engraving = macbook => {
  let v = macbook.cost();
  macbook.cost = () => {
    return v + 200;
  };
};

// Decorator 3
const Insurance = macbook => {
  let v = macbook.cost();
  macbook.cost = () => {
    return v + 300;
  };
};

let mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);

console.log(mb.cost());// outputs: 1600
console.log(mb.screensize());// outputs: 11.6