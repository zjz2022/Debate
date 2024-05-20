function Animal (){
const cat = new Animal ()
Animal.prototype = { bark: true }
const dog = new Animal ()
console.log (cat.bark) // undefine
console.log (dog.bark) // true
//创建对象后原型链会锁定