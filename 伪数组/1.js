var obj = {
'2': 3,
'3': 4,
'length': 2,
'splice': Array.prototype.splice,
'push':
Array.prototype.push
}
obj.push(1)obj.push(2)console.log(obj)
// 结果：[,,1,2], length 为 4
// 伪数组（ArrayLike）