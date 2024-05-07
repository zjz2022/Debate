async function asyncFun1() {
  console.log('async1 start') // 2
  await asyncFun2()
  // 由于promise被resolve了，所以这个被放到了微任务队列的尾部
  console.log('async1 end') // 9
}

async function asyncFun2() {
  console.log('async2 start') // 3
  return new Promise((resolve) => {
    resolve()
    console.log('async2 end') // 4
  })
}

console.log('script start') // 1

setTimeout(() => {
  console.log('setTimeOut') // 10
}, 0)

asyncFun1()

new Promise((resolve) => {
  console.log('Promise1') // 5
  resolve()
})
  .then(() => {
    console.log('promise2') // 7
  })
  .then(() => {
    console.log('promise3') // 8
  })

console.log('script end') // 6
