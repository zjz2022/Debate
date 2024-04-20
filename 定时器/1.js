// 循环i 一次性定时器中输出什么，如何解决？

// 下面的代码期望输出0-9，但实际上输出了10个9，原因是setTimeout是异步的，而var这个时候是全局变量，所以打印10个9

// 方法一：
for (var i = 0; i < 10; i++) {
  setTimeout(
    (i) => {
      console.log(i)
    },
    1000,
    i
  )
}

// 方法二：
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

// 方法三：
for (var i = 0; i < 10; i++) {
  ;((i) => {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  })(i)
}

// 方法四：
for (var i = 0; i < 10; i++) {
  setTimeout(console.log(i), 1000)
}
for (var i = 0; i < 10; i++) {
  setTimeout((() => console.log(i))(), 1000)
}

// 方法五：
for (var i = 0; i < 10; i++) {
  try {
    throw i
  } catch (i) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}
