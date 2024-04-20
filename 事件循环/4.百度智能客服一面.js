setTimeout(function () {
  console.log('1')
})

new Promise(function (resolve) {
  console.log('2')
  resolve()
  console.log('3')
}).then(function () {
  console.log('4')
})
console.log('5')

// 输出结果是 2 3 5 4 1
// 我答错了，我回答成了2 5 4 3 1，我以为resolve会让下面的代码变成异步，结果我搞混了，异步是async await的
