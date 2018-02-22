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