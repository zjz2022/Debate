// 下面代码的输出结果是什么

new Promise((resolve, reject) => {
  resolve(1) // fulfilled 1
})
  .then((res) => {
    console.log(res) // 1
    return 2 // fulfilled 2
  })
  .catch((err) => {
    // fulfilled 2
    return 3
  })
  .then((res) => {
    console.log(res) // fulfilled 2
  })
