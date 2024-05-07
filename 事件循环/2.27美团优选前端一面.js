setTimeout(() => {
  console.log(0)
}, 0)

new Promise(() => {
  console.log(1)
}).then(() => {
  console.log(2)
})

// 1
// 0

// 这段代码的运行结果可能会让人意外。尽管 setTimeout 的延迟时间设置为 0，但 console.log(0) 依然在 console.log(1) 后面打印。这是因为 JavaScript 的事件循环和任务队列的工作方式。

// 这是因为 Promise 构造函数在 Promise 创建时就立即执行。同时，.then() 中的回调函数会被放入到微任务队列，而 setTimeout 的回调则会被放入宏任务队列。微任务队列的优先级高于宏任务队列，所以 console.log(0) 在所有微任务（包括 .then() 的回调）完成执行后，才会执行。

// 而在你的代码中，由于 new Promise 函数中并未触发解析（调用 resolve 函数），所以 .then() 中的回调并未被放入微任务队列，所以未能执行 console.log(2)。
