var num = 1
;(function () {
  console.log(num)
  num = 2
  console.log(window.num)
  var num = 3
  console.log(num)
})()

/*
这段代码涉及到JavaScript的变量提升（Hoisting）和作用域规则。这是一段立即执行函数表达式（Immediately Invoked Function Expression，IIFE），在该函数块中的变量会有自己的作用域。这是这段代码运行的步骤：

1. var num = 1 在全局作用域中声明并初始化了一个变量，名为 num，值为 1。
2. 然后，一个立即执行的函数被调用。在该函数范围内，任何声明的变量都不会影响到外部的同名变量。
3. 在调用这个函数时，尽管有 console.log(num) 代码，但是正下方有 var num = 3 ，所以根据JavaScript的变量提升机制，这段代码实际上看起来是这样的：

;(function () {
  var num 
  console.log(num)
  num = 2
  console.log(window.num)
  num = 3
  console.log(num)
})()


因此，第一个 console.log(num) 将会输出 undefined。
4. 然后 num = 2 给函数作用域内的 num 变量赋值为 2。
5. 接下来， console.log(window.num) 运行，因为 window.num 引用的是全局作用域的 num，所以这里会打印出 1。
6. 最后，num = 3 运行，给函数作用域的 num 变量重新赋值为 3， console.log(num) 运行，打印出 3。

所以这段代码的输出将会是 undefined、1 和 3。
*/
