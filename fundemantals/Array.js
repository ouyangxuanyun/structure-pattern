let fundamentalExample = () => {
    /**
     *  shift:删除原数组的第一项，返回删除元素的值；如果数组为空则返回undefined
     *  unshift:将参数添加到原数组开头，返回数组的/长度/(ie6下返回undefined)
     *  pop:删除原数组的最后一项，返回数组删除的值；如果数组为空则返回undefined
     *  push:将参数添加到原数组的末尾，返回数组的/长度/
     */

        // splice(start,deleteCount,val1,val2,...):从start位置开始删除原数组deleteCount项，并从该位置起插入val1,val2,...，返回删除的项组成的新数组
    let arr = [1, 2, 3, 4, 5];
    let out = arr.splice(2, 2, 7, 8, 9, 10);
    console.log(arr); // [1,2,7,8,9,10,5]
    console.log(out); // [3,4]

    //slice(start,end):返回从原数组中指定start到end(不包含该元素)之间的项组成的新数组,如只有一个参数，则从start到数组末尾
    arr = [1, 2, 3, 4, 5, 6, 7, 8];
    out = arr.slice(2, 3);
    console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8]
    console.log(out); //[3]

    // reverse:将原数组倒序
    arr = ['a', 1, {}, [2, 3]];
    console.log(arr); //['a', 1, {}, [2, 3]]
    out = arr.reverse();
    console.log(arr); //[[2,3],{},1,'a']
    console.log(out); //[[2,3],{},1,'a']

    // join(separator):将数组的元素组成一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符
    arr = [1, 2, 3, 4, 5, 6];
    out = arr.join();
    console.log(arr); //[1, 2, 3, 4, 5, 6]
    console.log(out); //1,2,3,4,5,6
    out = arr.join("");
    console.log(out); //123456
    out = arr.join("&");
    console.log(out); //1&2&3&4&5&6

    // array.sort
    let a = [1, 2, 7, 6, 5, 4]
    console.log(a.sort((a, b) => b - a)) // [ 7, 6, 5, 4, 2, 1 ]

    // array.fill(value [,statrt = 0[, end = this.length]]) 将数组中指定区间的所有元素的值，都替换成value
    let fillarr = new Array(10).fill(-1);
    console.log(fillarr) // [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]

    // array.includes(searchElement, [, fromIndex]) 用来判断当前数组是否包含某指定的值，如果是，则返回true，否则false
    let inclusarr = ['aaa', 'bbb', 'ccc']
    console.log(inclusarr.includes('ccc')) // true
}

let traverseExample = () => {
    /**
     * array.forEach((v, i, a) => {})
     * 让数组的每一项都执行一次给定的函数
     * v表示当前项的值，i表示当前索引，a表示数组本身
     * forEach遍历的范围在第一次调用 callback前就会确定。调用forEach后添加到数组中的项不会被 callback访问到。如果已经存在的值被改变，
     * 则传递给 callback的值是 forEach遍历到他们那一刻的值。已删除的项不会被遍历到。
     */

    /**
     * array.every(callback(v, i, a){})  array.every()返回一个布尔值，即对每个元素的callback函数结果作逻辑“&”操作
     * array.some() 对每个元素的callback函数结果作逻辑“||”操作
     * array.filter((v, i, a) => {}) 使用指定的函数测试所有元素，并创建一个包含所有测试通过的元素的新数组 callback函数返回一个布尔值，true即通过测试
     * array.find((v, i, a) =>{}) 返回数组中满足测试条件的第一个元素，如果没有满足条件的元素，则返回undefined
     * array.map((v, i, a) => {}) 返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组
     */


    // array.entries() 返回一个Array Iterator对象，该对象包含数组中每一个索引的键值对
    var arr = ["a", "b", "c", "d", "e"];
    var eArr = arr.entries();
    console.log(eArr.next().value); // [0, "a"]
    console.log(eArr.next().value); // [1, "b"]
    console.log(eArr.next().value); // [2, "c"]

    for (let [v, i] of eArr) {
        console.log(v, i); // 3 'd' 4 'e' 因为前面已经遍历到了c
    }
    // array.keys() 返回一个数组索引的迭代器（类似于array.entries()方法）

    /**
     * array.reduce(callback[, initialValue]) 或者 array.reduceRight()
     * 该方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值
     * callback参数：
     * previousValue:上一次调用回调返回的值，或者是提供的初始值（initialValue）
     * currentValue: 数组中当前被处理的元素
     * index： index
     * array： 调用的数组
     * 如果 initialValue 在调用 reduce 时被提供，那么第一个 previousValue 等于 initialValue ，并且currentValue 等于数组中的第一个值；
     * 如果initialValue 未被提供，那么previousValue 等于数组中的第一个值，currentValue等于数组中的第二个值。
     */
    let redarr = [0, 1, 2, 3, 4, 5].reduce((p, v, i, a) => {
        return p + v
    })
    console.log(redarr); // 15
    // 数组扁平
    let flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => {
        return a.concat(b)
    })
    console.log(flattened); // [0, 1, 2, 3, 4, 5]
}

fundamentalExample();
traverseExample();