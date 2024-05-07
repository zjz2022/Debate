async function async1() {
  console.log('async1 start') // 2
  await async2()
  // 然而当一个 Promise 被 resolve 后，它的 then 方法会创建一个新的微任务，并会在当前的事件循环结束，并在处理微任务队列之前把这个新的微任务加入到微任务队列的尾部。
  // 所以，这里的async1 end 被放到了微任务队列的尾部
  console.log('async1 end') // 9
}

async function async2() {
  console.log('async2 start') // 3
  // 记住这里，async2里面返回了一个 Promise。
  // async2 函数确实返回了一个 Promise，并且这个 Promise 会立即解析。当你在 async1 函数中调用 await async2() 时，JavaScript 将停止同步代码的执行，待 async2() 中的 Promise 解析完毕后，再将 'async1 end' 放入微任务队列尾部。
  return new Promise((resolve) => {
    resolve()
    console.log('async2 end') // 4
  })
}

setTimeout(() => {
  console.log('setTimeout') // 10
}, 0)

console.log('script start') // 1

async1()

new Promise((resolve) => {
  resolve()
  console.log('promise1') // 5
})
  .then(() => {
    console.log('then1') // 7
  })
  .then(() => {
    console.log('then2') // 8
  })

console.log('script end') // 6
