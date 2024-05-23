// 下面代码的输出结果是什么
const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

// pro1状态是pending，还没fulfilled或者rejected时，then是不会执行的，OK？有点常识可以吗？

const pro2 = pro1.then((data) => {
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
