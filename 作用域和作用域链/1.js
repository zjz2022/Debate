// 定义一个全局变量:
const fullName = 'Oluwatobi Sofela'

// 定义多层嵌套函数:
function profile() {
  function sayName() {
    function writeName() {
      return fullName
    }
    return writeName()
  }
  return sayName()
}

// 打印结果:
console.log(profile()) // 'Oluwatobi Sofela'
