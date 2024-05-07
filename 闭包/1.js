//闭包实例代码
function fn1() {
  let a = 1
  function fn2() {
    a++
    console.log(a)
  }
  return fn2
}
const fn2 = fn1()
//闭包函数执行完后外部作用域变量仍然存在，并保持状态
fn2() //2
fn2() //3
