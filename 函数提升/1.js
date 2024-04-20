foo()
var foo = function () {
  console.log('foo1')
}
foo()
var foo = function () {
  console.log('foo2')
}
foo()
function foo() {
  console.log('foo1')
}
foo()
function foo() {
  console.log('foo2')
}
foo()
//foo2 foo1 foo2 foo2 foo2
