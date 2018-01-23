const _items = Symbol("_items");
const _funcHashCode = Symbol("_funcHashCode");
const hashCode = (key) => {
    let code = 5381;
    if (typeof key === "object") {
        return code;
    }
    if (key instanceof Number) {
        key += "";
    }
    for (let index = 0; index < key.length; index++) {
        code = code * 33 + key.charCodeAt(index);
    }
    return code % 1013;
}

const DJBHash = (key) => {
    let code = 5381;
    if (typeof key === "object") {
        return code;
    }
    if (key instanceof Number) {
        key += "";
    }
    for (let index = 0; index < key.length; index++) {
        code = ((code << 5) + code) + key.charCodeAt(index);
    }
    return code ;
}

class HashTable {
    constructor() {
        this[_items] = [];
        this[_funcHashCode] = hashCode;
        // this[_funcHashCode] = DJBHash;
    }

    put(key,value) {
        let position = this[_funcHashCode](key);
        this[_items][position] = value;
    }

    remove(key) {
        const position = this[_funcHashCode](key);
        this[_items][position] = undefined;
    }

    get(key) {
        const position = this[_funcHashCode](key);
        return this[_items][position];
    }

    toString() {
        let data = "\n";
        let index = 0;
        for (let val of this[_items]) {
            if (val !== undefined){
                data += "key="+index+",val="+val+"\n";
            }
            index++;
        }
        return data;
    }
}

module.exports = HashTable;
