;(function test() {
  console.log('start')

  setTimeout(() => {
    console.log('children2')
    Promise.resolve().then(() => {
      console.log('children2-1')
    })
  }, 0)

  setTimeout(() => {
    console.log('children3')
    Promise.resolve().then(() => {
      console.log('children3-1')
    })
  }, 0)

  Promise.resolve().then(() => {
    console.log('children1')
  })

  console.log('end')
})()
// 结果 start end children1 children2 children2-1 children3 children3-1
// 宏任务是一个执行完，再执行另一个宏任务，知道这点就可以了
