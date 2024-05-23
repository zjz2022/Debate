const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
})

console.log('1', promise1)

/*
解析：

从上至下，先遇到new Promise，执行该构造函数中的代码promise1
然后执行同步代码1，此时promise1没有被resolve或者reject，因此状态还是pending

答案：
promise1
1 Promise { <pending> }

作者：CoderBin
链接：https://juejin.cn/post/7151636219036696613
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/
