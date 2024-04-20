async function async1() {
  console.log('async1 start') // 出现在await之前的代码是被当做同步任务立即执行的
  await async2() //遇到了await时，会将await后面的表达式执行一遍
  console.log('async1 end') //微任务
}
async function async2() {
  console.log('async2')
}
console.log('script start') //同步任务
setTimeout(function () {
  console.log('setTimeout') //setTimeout
}, 0)
async1()
new Promise(function (resolve) {
  console.log('promise1') // Promise中的代码是被当做同步任务立即执行的
  resolve()
}).then(function () {
  console.log('promise2') //微任务
})
console.log('script end') //同步任务
