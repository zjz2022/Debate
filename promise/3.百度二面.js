var i = 0
for (i = 1; i <= 3; i++)
  setTimeout(function () {
    console.log(i)
  }, 0)
// 4 4 4
// 解释: 先执行完 for 循环, i 的值变为 4, 然后再执行宏任务
