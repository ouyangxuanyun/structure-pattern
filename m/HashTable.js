class HashTable {
    constructor() {
        this.table = new Array(137);
    }

    put(data) {
        let pos = this.betterHash(data);
        this.table[pos] = data;
    }

    betterHash(str) {
        const H = 37;
        let total = 0;
        for (let i = 0; i < str.length; i++) {
            total += H * total + str.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }

    show() {
        let n = 0;
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`${i} : ${this.table[i]}`)
            }

        }
    }
}

let hashTableTests = () => {
    var someNames = ["David", "Jennifer", "Donnie", "Raymond",
        "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
    var hTable = new HashTable();
    for (var i = 0; i < someNames.length; ++i) {
        hTable.put(someNames[i]);
    }
    hTable.show();
}

hashTableTests()