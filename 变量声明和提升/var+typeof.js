var name = 'a'
;(function () {
  if (typeof name === 'undefined') {
    var name = 'b'
    console.log(name + '11')
  } else {
    console.log(name + '22')
  }
})()
// 在立即执行函数内部：
// typeof name 返回 'undefined'，因为在当前作用域中存在一个名为 name 的变量，但它还未赋值。
// 然后，内部通过 var name = 'b'; 声明了一个局部变量 name，并赋值为 'b'。
// 接着执行 console.log(name + '11');
// 故结果：输出 'b11'。
