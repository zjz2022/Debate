// 下面代码的输出结果是什么

new Promise((resolve, reject) => {
  resolve() // fulfilled undenfied
})
  .then((res) => {
    console.log(res.toString()) // 报错 rejected reason
    return 2
  })
  .catch((err) => {
    return 3 // fulfilled 3
  })
  .then((res) => {
    console.log(res) // fulfilled undenfied 记住这里没有return值
  })
