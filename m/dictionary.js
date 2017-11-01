class Dictionary {
    constructor() {
        this.dataStore = new Array();
    }

    add(key, value) {
        this.dataStore[key] = value;
    }

    find(key) {
        return this.dataStore[key]
    }

    remove(key) {
        delete this.dataStore[key]
    }

    showAll() {
        for (var key in Object.keys(this.dataStore)) {
            console.log(`${key} -> ${this.dataStore[key]}`)
        }
    }
}