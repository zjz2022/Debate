console.log({} == {})
console.log({} === {})

// 回答这俩的结果：都是错的
// 因为，对象使用 = 进行比较的时候是比较两个对象的引用
// 由于这两个对象是独立创建的，无论是全等比较还是内容相等的比较都不成立
