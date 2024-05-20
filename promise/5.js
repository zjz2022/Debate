var name = "222"
var a = {
        name: "111",
    say: function(){
    console.info(this.name);
}
}
var fun = a.say;
fun(); // undefined
a.say(); // 111

var b = {
    name: "333",
    say: function(fun) {
        fun();
    }
}
b.say(a.say); // undefined
b.say = a.say;
b.say(); // 333
for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
} // 5 5 5 5 5
for(var i = 0; i < 5; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        },1000);
    })(i);
}
console.log(i); // 5 0 1 2 3 4
new Promise((resolve, reject) => {
    reject(1);
    console.log(6); // 1
}).catch(() => {
    console.log(2); // 3
}).then(() => console.log(3), // 4
    (v) => console.log(v))
    .then(console.log)
console.log(5); // 2
console.log([] == []) //false
console.log([] === []) //false
["1", "2", "3"].map(parseInt)

// A. ["1", "2", "3"]
// B. [1, 2, 3]
// C. [0, 1, 2]
// D. other

在JavaScript中，`Array.prototype.map`方法会把数组中的每个元素都执行给定的函数，并返回一个新数组。然而，使用`parseInt`函数可能不会像您想象的那样工作，原因是`map`函数为它提供了三个参数：当前元素、元素的索引和原始数组，而`parseInt`接受两个参数：字符串和基数。

因此，对于数组['1', '2', '3']，执行`.map(parseInt)`将产生以下结果：

- 对于元素 '1', `parseInt('1', 0)`，0表示将根据字符串决定基数，对于字符串开头为'1'到'9'，基数为10，所以返回1。
- 对于元素 '2', `parseInt('2', 1)`，1是非法的基数，所以返回NaN。
- 对于元素 '3', `parseInt('3', 2)`，2是有效的基数，但'3'在二进制中是非法的，所以返回NaN。

所以，输出是 `[1, NaN, NaN]`。