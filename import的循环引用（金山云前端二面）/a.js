// import的循环引用看输出
console.log('a starting')
exports.done = false
const b = require('./b.js')
console.log('in a, b.done = %j', b.done)
exports.done = true
console.log('a done')

//请输出打印结果：
// main starting
// a starting
// b starting
//     in b, a.done false
// b done
//     in a, b.done true
// a done
//     in main, a.done = true, b.done = true
