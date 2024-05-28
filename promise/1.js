async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) {
  console.log('promise1')
  resolve(1)
})
  .then(function (res) {
    console.log('promise2', res)
  })
  .then(function (res) {
    console.log('promise3', res)
  })
console.log('script end')

// async function() 是写函数，不会执行
// fn().then 则是先执行fn()，再执行fn().then
// await 是直接同步执行的，是await fn() 下面的所有代码，要放入微任务队列，等 fn()执行完再执行
