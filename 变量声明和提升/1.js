var a = 'globalA';
var obj = {
    a: 'objA',
    test
}
function test() {
    console.log(this.a)
}
obj.test(); // objA
const globalTest = obj.test;
globalTest(); // undefined | globalA
console.log('script start'); // 1
setTimeout(function() {
    console.log('setTimeout'); // 5
}, 0);
Promise.resolve().then(function() {
    console.log('promise1'); // 3
}).then(function() {
    console.log('promise2'); // 4
});
console.log('script end'); // 2
var x = +'1';
console.log(typeof x);
console.log(x)
var y = '1' + 2;
console.log(typeof y);
console.log(y);

number
1     
string
12    
<div id="father">
    <div id="child">
        123
    </div>
</div>

document.getElementById('father').addEventListener('click', function(event) {
    console.log('father');
})

document.getElementById('child').addEventListener('click', function(event) {
    console.log('child');
})
if(!("a" in window)) {
    var a = 1;
}
alert(a);    //    undefiend

// 因为 "a" 事实上是存在于 window 对象中的（因为它已经被声明了--变量提升），所以 ("a" in window) 的结果为 true。因此，a = 1 这一句并未被执行，所以 a 的值保持为 undefined。