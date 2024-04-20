function test() {
  console.log('start')

  setTimeout(() => {
    console.log('children2')
    Promise.resolve().then(() => {
      console.log('children2-1')
    })
  }, 0)

  setTimeout(() => {
    console.log('children3')
    Promise.resolve().then(() => {
      console.log('children3-1')
    })
  }, 0)

  Promise.resolve().then(() => {
    console.log('children1')
  })

  console.log('end')
}
// 结果 start end children1 children2 children2-1 children3 children3-1
