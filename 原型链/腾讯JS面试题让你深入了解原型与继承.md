题目如下:

代码语言：javascript

```javascript
var F = function(){}
Object.prototype.a = function(){
console.log('a()')
}
Function.prototype.b = function(){
console.log('b()')
}
var f = new F()
F.a()
F.b()
f.a()
f.b()
```

## 主要考查的技术点: 

> 1.、原型与原型链  2、实例对象、构造函数、Object、 Function的关系

## 分析:

F是个构造函数，而f是构造函数F的一个实例。

因为F instanceof Object == true、F instanceof Function == true

由此我们可以得出结论：F是Object 和 Function两个的实例，即F既能访问到a，也能访问到b。

所以F.a() 输出 a() F.b() 输出 b()

对于f，我们先来看下下面的结果：

f并不是Function的实例，因为它本来就不是构造函数，所以就调用Function原型链上的相关属性和方法了，只能访问Object原型链。

所以f.a() 输出 a() 而f.b()就报错了。

接下来，我们具体分析下，它们是如何按路径查找的：

f.a的查找路径: f自身: 没有 ---> f.__proto__(Object.prototype): 输出a()

f.b的查找路径:  f自身: 没有 ---> f.__proto__(Object.prototype): 没有 --->  f.__proto__.__proto__ (Object.prototype.__proto__): 因为找不到，所以报错

F.a的查找路径: F自身: 没有 ---> F.__proto__(Function.prototype): 没有 ---> F.__proto__.__proto__(Object.prototype): 输出 a()

F.b的查找路径: F自身: 没有 ---> F.__proto__(Function.prototype): b()