//  事件循环输出

// 首先立即执行，输出1
console.log(1)

// 创建一个宏任务，放入事件队列等待执行
setTimeout(() => {
  // 当上述宏任务轮到执行时，立即输出2
  console.log(2)
  // 立即执行并输出3
  new Promise((resolve) => {
    console.log(3)
    resolve()
    // 取得Promise的resolve后将.then方法放入微任务队列等待执行
  }).then(() => {
    console.log(4)
  })
})

// 创建一个Promise并立即执行，输出5
new Promise((resolve) => {
  console.log(5)
  resolve()
  // resolve后将.then方法放入微任务队列等待执行，然后立即输出6
  console.log(6)
  // 创建一个宏任务，放入事件队列等待执行
  setTimeout(() => {
    console.log(7)
  })
  // 当Promise的resolve执行后，将.then方法放入微任务队列等待执行
}).then(() => {
  console.log(8)
})
