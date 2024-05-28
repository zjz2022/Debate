// 下面代码的输出结果是什么

new Promise((resolve, reject) => {
  throw new Error(1) // rejected Error(1)
})
  .then((res) => {
    // rejected Error(1)
    console.log(res)
    return new Error('2')
  })
  .catch((err) => {
    // 这里err是导入的值
    throw err // rejected Error(1)
  })
  .then((res) => {
    // rejected err
    console.log(res)
  })
