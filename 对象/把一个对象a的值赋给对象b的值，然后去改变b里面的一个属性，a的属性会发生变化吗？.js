// 把一个对象a的值赋给对象b的值，然后去改变b里面的一个属性，a的属性会发生变化吗？
let obj1 = { name: '1', age: 1 }
let obj2 = {}

obj2 = obj1

console.log(obj2.name)
console.log(obj2.age)

obj2.name = '2'
obj2.age = 2

console.log(obj1.name)
console.log(obj1.age)
// 会改变
