let fundemantalExample = () => {
    // charAt() 返回对应位置所在的字符
    let a = 'helloWorld';
    console.log(a.charAt(1)); // e

// concat() 拼接字符串
    console.log(a.concat(' Fu')); // helloWorld Fu
    console.log(a.concat(' Fu1', ' Fu2', ' Fu3')); // helloWorld Fu1 Fu2 Fu3

// slice()  截取字符串;接受2个参数,只填一个参数代表从该位置截取到最后，填两个参数代表要截取的头和尾的位置，但是取头不取尾
    console.log(a.slice(5, 10)) // World

// substring() 截取字符串;接受2个参数,只填一个参数代表从该位置截取到最后，填两个参数代表要截取的头和尾的位置，但是取头不取尾
// 注：slice和substring的区别在于他们的参数为负数的时候，slice会把负数与字符串的长度相加，而substring会把负数转化为0
    let aa = "hello";
    console.log(aa.slice(-3), aa.slice(2));  //llo;
    let bb = "hello";
    console.log(bb.substring(-3), bb.substring(0));  //hello;

// substr() 截取字符串;接受2个参数,只填一个参数代表从该位置截取到最后，填两个参数代表要截取的开始位置和长度;
    console.log(a.substr(3, 3)) // loW

// split(separator,howmany),返回一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 stringObject 分割成子串创建的。返回的数组中的字串不包括 separator 自身
    let abc = "red,blue,green,yellow";
    console.log(abc.split(',')) // [ 'red', 'blue', 'green', 'yellow' ]
    console.log(abc.split(',', 3)) // [ 'red', 'blue', 'green']

//indexOf(searchvalue,fromindex) – 返回字符串中一个子串第一处出现的索引，如果没有匹配项，返回 -1 。
//fromindex是可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。
//如省略该参数，则将从字符串的首字符开始检索,此时indexOf()跟search()方法类似。
    var str1 = "HelloStringend";
    console.log(str1.indexOf("e")); //1
    console.log(str1.indexOf("e", 2)); //11
// toLocaleUpperCase(); 字符串转大写, toLocaleLowerCase(); 字符串转小写。
    console.log(a.toLocaleUpperCase(), a.toLocaleLowerCase()) // HELLOWORLD helloworld
}


let matchExample = () => {
    /** match(searchvalue) 或 match(regexp)检查一个字符串是否匹配一个正则表达式。返回存放匹配结果的数组。
     match() 方法将检索字符串 stringObject，以找到一个或多个与 regexp 匹配的文本。这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。
     如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。如果没有找到任何匹配的文本， match() 将返回 null。否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。除了这些常规的数组元素之外，返回的数组还含有两个对象属性。index 属性声明的是匹配文本的起始字符在 stringObject 中的位置，input 属性声明的是对 stringObject 的引用。
     如果 regexp 具有标志 g，则 match() 方法将执行全局检索，找到 stringObject 中的所有匹配子字符串。若没有找到任何匹配的子串，则返回 null。如果找到了一个或多个匹配子串，则返回一个数组。不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 stringObject 中所有的匹配子串，而且也没有 index 属性或 input 属性。
     **/
    var str = "Hello world! Hello";
    console.log(str.match("lo")); //["lo"] { index: 3, input: "Hello world! Hello" }
    console.log(str.match("world")); //["world"] { index: 6, input: "Hello world! Hello" }
    console.log(str.match("world").index); //6
    console.log(str.match(/Hello/g)); //["Hello", "Hello"]
    console.log(str.match("World")); //null
    str = "1 plus 2 equal 3";
    console.log(str.match(/\d+/g)); //["1", "2", "3"]
}

let replaceExample = () => {
    /**
     replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
     stringObject.replace(regexp/substr,replacement),返回一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。
     replacement 可以是字符串，也可以是函数。如果它是字符串，那么每个匹配都将由字符串替换。但是 replacement 中的 $ 字符具有特定的含义，它说明从模式匹配得到的字符串将用于替换。
     $1、$2、...、$99----与 regexp 中的第 1 到第 99 个子表达式相匹配的文本。
     $&------------------与 regexp 相匹配的子串。
     $`------------------位于匹配子串左侧的文本。
     $'------------------位于匹配子串右侧的文本。
     $$------------------直接量符号。
     **/
    var str = "Visit HangZhou";
    console.log(str); //Visit HangZhou
    console.log(str.replace(/Hang/g, "Su")); //Visit SuZhou
    str = "1 plus 2 equal 3";
    console.log(str); //1 plus 2 equal 3
    console.log(str.replace(/(\d)/g, "*"));  //* plus * equal *

    str = "as An angle";
    console.log(str.replace(/a/, "b")); //bs An angle
    console.log(str.replace(/a/g, "b")); //bs An bngle
    console.log(str.replace(/a/gi, "b")); //bs bn angle

    str = "Karl,John";
    console.log(str.replace(/(\w+)\s*,\s*(\w+)/, "$2,$1")); //John,Karl

    str = '"ab", "b"';
    console.log(str.replace(/"([^"]*)"/g, "'$1'")); //'ab', 'b'

    str = "aaa bbb ccc";
    console.log(str.replace(/\b\w+\b/g, function (w) {
        return w.substring(0, 1).toUpperCase() + w.substring(1);
    })); //Aaa Bbb Ccc
}

let searchExample = () => {
    /**
     search() – 执行一个正则表达式匹配查找。如果查找成功，返回字符串中匹配的索引值。否则返回 -1 。
     stringObject.search(regexp) 返回stringObject 中第一个与 regexp 相匹配的子串的起始位置。
     此方法跟indexOf类似。此方法会忽略g标识
     **/
    var str = "Visit HangZhou";
    console.log(str) //Visit HangZhou
    console.log(str.search(/Hang/)); //6
    console.log(str.search(/hang/)); //-1
    console.log(str.search(/hang/i)); //6
    str = "1 plus 2 equal 3";
    console.log(str) //1 plus 2 equal 3
    console.log(str.search(/\d/g)); //0
}

fundemantalExample();
matchExample();
replaceExample();
searchExample();
