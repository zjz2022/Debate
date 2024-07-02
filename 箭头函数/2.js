// 来自高级前端面试，这题我做对了，但是还是写下来
var status = 'a'

setTimeout(() => {
  const status = 'b'

  const data = {
    status: '',
    getStatus() {
      return this.status
    },
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)

// 选B，这里是箭头函数
// A. '' and 'b'
// B. '' and 'a'
// C. 'b' and 'a'
// D. 'a' and 'a'
