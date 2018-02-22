/**
 * 工厂模式就是创建一个大型的制作工厂，然后其它的对象从这个工厂中产生
 */
class VehicleFactory {
    constructor() {
        this.vehicleClass = Car;
    }

    createVehicle(options) {
        if (options.vehicleClass === 'car') {
            this.vehicleClass = Car;
        } else {
            this.vehicleClass = Truck;
        }
        return new this.vehicleClass(options);
    }
}

class Car {
    constructor(options) {
        options = options || '';
        this.doors = options.doors || 4;
        this.state = options.state || 'brand new';
        this.color = options.color || 'silver'
    }
}

class Truck {
    constructor(options) {
        options = options || '';
        this.doors = options.doors || 8;
        this.wheelSize = options.wheelSize || 'large';
        this.state = options.state || 'used';
        this.color = options.color || 'blue';
    }
}

function factoryTests() {
    let carFactory = new VehicleFactory();
    let car = carFactory.createVehicle({
        vehicleType: "car",
        color: "yellow",
        doors: 6
    });
    console.log(car)
}

factoryTests();

//其实工厂方法也很常用，工厂方法相当于一个new XXX的函数，这样如果我们需要频繁的new对象的时候可以写个工厂方法包装new对象这个操作

class Song {
    constructor({id, singer, name, album, duration, image, url}) {
        this.id = id;
        this.singer = singer;
        this.name = name;
        this.album = album;
        this.duration = duration;
        this.image = image;
        this.url = url;
    }

    getLyric() {
        //...
    }
}

// 定义工厂方法，这样不用每次都new一个song对象
function createSong(data) {
    return new Song({
        id: data.id,
        singer: data.singer,
        name: data.name,
        album: data.album,
        duration: data.interval,
        image: `http://asdf/asdf//asdf`,
        url: `http://eee/ddd/rrr`
    })
}