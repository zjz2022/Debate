const promise = new Promise((resolve, reject) => {
  console.log(1)
  console.log(2)
})

promise.then(() => {
  console.log(3)
})

console.log(4)

/*

解析：

和【Promise第二题】相似，只不过在promise中并没有resolve或者reject
因此promise.then并不会执行，它只有在被改变了状态之后才会执行。
答案：1、2、4
*/
