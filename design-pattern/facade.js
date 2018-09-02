// Facade（外观）模式为子系统中的各类（或结构与方法）提供一个简明一致的界面，
// 隐藏子系统的复杂性，使子系统更加容易使用。它是为子系统中的一组接口所提供的一个一致的界面。
class Facade {
    constructor() {
        this.value = ''
    }

    get() {
        console.log('current value: ', this.value);
    }

    set(val) {
        this.value = val;
    }

    run() {
        console.log('running');
    }

    jump() {
        console.log('jumping');
    }

    facade(args) {
        this.set(args.val);
        this.get();
        if (args.run) {
            this.run()
        }
        if (args.jump) {
            this.jump()
        }

    }
}

let fa = new Facade();
fa.facade({val: 100, run: true, jump: false});