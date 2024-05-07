// 在全局作用域中定义fullName:
const fullName = 'Oluwatobi Sofela'

// 嵌套函数包含2个fullName变量
function profile() {
  const fullName = 'Tobi Sho'
  function sayName() {
    const fullName = 'Oluwa Sofe'
    function writeName() {
      return fullName
    }
    return writeName()
  }
  return sayName()
}

console.log(profile())
