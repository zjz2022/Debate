const p = new Promise(resolve => {
    console.log(0) // 1
    resolve()
  })
p.then(res => {
  console.log(1) // 2
}).then(res => {
  console.log(2) // 6
}).then(res => {
  console.log(3) // 7
})
p.then(res => {
  console.log(4) //3
})
p.then(res => {
  console.log(5) // 4
})
p.then(res => {
  console.log(6) //5
})
example 1
var a={}, b='123', c=123;
a[b]='b';
a[c]='c';
console.log(a[b]);
---------------------
example 2
var a={}, b=Symbol('123'), c=Symbol('123');
a[b]='b';
a[c]='c';
console.log(a[b]);
---------------------
example 3
var a={}, b={key:'123'}, c={key:'456'};
a[b]='b';a[c]='c';
console.log(a[b]);
// 答：
// 1. 对象的键名只能是字符串和 Symbol 类型。
// 2. 其他类型的键名会被转换成字符串类型。
// 3. 对象转字符串默认会调用 toString 方法。