// 讲输出步骤和内容

// 全局变量, nickname 为 'LiLei'
var nickname = 'LiLei'

// 定义一个Person构造函数，此函数有两个属性，nickname 和 sayHi
function Person(name) {
  // 在新建的对象上设置nickname，值为传入的 name
  this.nickname = name
  // 在新建的对象上设置sayHi，值为一个函数
  this.sayHi = function () {
    // 在sayHi函数中，this指向新建的对象，所以这里会输出新建对象的nickname
    console.log(this.nickname)
    // 创建一个宏任务，放入宏任务队列等待执行
    setTimeout(function () {
      // 在这个函数中，this指向全局对象，因为它是一个普通函数，不是通过对象调用的
      // 所以这里会输出全局的nickname
      console.log(this.nickname)
    }, 0)
  }
}

// 一个对象字面量，有两个属性，nickname 和 sayHi
var Male = {
  nickname: 'XiaoFang',
  sayHi: () => {
    // 这个箭头函数没有自己的this，它的this取决于它的上下文，在这个情况下，箭头函数的this指向全局对象
    console.log(this.nickname)
  },
}

// 使用Person.bind返回一个新函数，并将Male和'XiaoHong'作为参数传入，然后用new来创建一个实例，赋值给person
var person = new (Person.bind(Male, 'XiaoHong'))()

// 调用person的sayHi方法
person.sayHi()
