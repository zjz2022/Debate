async function func1() {
  console.log('h1')
  await func2()
  console.log('h2')
}

async function func2() {
  console.log('h2')
}

console.log('start')
setTimeout(() => {
  console.log('Timeout')
}, 0)
new Promise((resolve) => {
  console.log('promise')
  resolve(1)
}).then(() => {
  console.log('finish')
})
console.log('finish')
func1()
