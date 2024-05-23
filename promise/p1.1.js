// 下面代码的输出结果是什么
const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

// pro1状态是pending，还没fulfilled或者rejected时，then是不会执行的，OK？有点常识可以吗？

// 由于pro1是fulfilled <1>，但是这里是catch，得是then才会执行
// 如果pro1是rejected <1>，这里catch就会执行了
// 所以 pro2里面全部不会执行
// pro2 变成 fulfilled 1 （跟pro1一模一样，具体原因看规则，只要是catch或者then了，就会一样，除非里面return了别的，并且执行了，才会改变值）
const pro2 = pro1.catch((data) => {
  console.log(data)
  return data + 1
})

const pro3 = pro2.then((data) => {
  console.log(data)
})

console.log(pro1, pro2, pro3)

setTimeout(() => {
  console.log(pro1, pro2, pro3)
}, 2000)

/* 
Promise { <pending> } Promise { <pending> } Promise { <pending> }
1
2
Promise { 1 } Promise { 2 } Promise { undefined } 
*/
