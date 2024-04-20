// var 的作用域
var tester = 'hey hi'
function newFunction() {
  var hello = 'hello' // 当在函数中声明var时，作用域是局部的。这意味着它只能在函数内访问
}
console.log(hello) // error: hello is not defined

// var 变量可以重新声明和修改
var greeter = 'hey hi'
var greeter = 'say Hello instead'
// or
var greeter = 'hey hi'
greeter = 'say Hello instead'

// var 的变量提升(变量提升是 JavaScript 的一种机制:在执行代码之前，变量和函数声明会移至其作用域的顶部)
// 将var声明的变量会被提升到其作用域的顶部，并使用 undefined 值对其进行初始化.
console.log(greeter)
var greeter = 'say hello'
// 上面的代码会被解释为:
var greeter
console.log(greeter) // greeter is undefined
greeter = 'say hello'
