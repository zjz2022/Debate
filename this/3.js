async function async1() {
  console.log('async1 start') // 1
  await async2()
  console.log('async1 end') // 5
}
async function async2() {
  console.log('async2') // 2
}
console.log('script start') // 0
setTimeout(function () {
  console.log('setTimeout') // 7
}, 0)
async1()
new Promise(function (resolve) {
  console.log('promise1') // 3
  resolve()
}).then(function () {
  console.log('promise2') // 6
})
console.log('script end') // 4
const obj = {
  name: 'yy',
  getInfo() {
    return {
      name: 'll',
      getName() {
        console.log(this.name)
      },
    }
  },
}

obj.getInfo().getName() // ll
function bar() {
  console.log(myName) // 快手
}

function foo() {
  var myName = '快手'
  bar()
}

var myName = '用户增长'
foo()

function bar() {
  console.log(this.myName) // 快手
}

function foo() {
  this.myName = '快手'
  bar.call(this)
}

var myName = '用户增长'
foo()
var name = 'window'
const person1 = {
  name: 'person1',
  sayName: () => {
    console.log(this.name)
  },
}
person1.sayName()

// 在JavaScript中，箭头函数并没有自己的this，它会捕获自己在定义时所处的上下文的this值，并在其作用域内使用。你的代码中，箭头函数是在全局上下文中定义的，所以this会指向全局对象。在浏览器环境中，全局对象是window，在Node.js环境中，全局对象是global。

// 所以，person1.sayName()的输出取决于你的运行环境和this.name在全局作用域下的值。在浏览器环境中，如果没有在全局作用域下定义name，那么输出应该是undefined。如果你在全局作用域下定义了name（比如var name = 'window'），那么输出就应该是'window'。

// 在Node.js环境中，全局变量需要使用global.name进行定义，所以即使你用var name = 'window'，输出还是undefined，因为var name在Node.js环境下并不会绑定到全局对象global。

// 总的来说，你的代码中person1.sayName()的输出有可能是'window'或者undefined，具体取决于运行环境和全局作用域下name变量的定义。
