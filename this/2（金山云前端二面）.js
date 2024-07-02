function makeStudent() {
  console.log('this', this)
  return {
    studentName: 'xiaoming',
    ref: this,
  }
}

let student = makeStudent()
console.log(student.ref, student.ref.studentName) //window undefined

let student2 = new makeStudent()
console.log(student2.ref, student2.ref.studentName) //makeStudent{}  undefined

// 补充：如何让student.ref.studentName打印xiaoming呢？

// 我个人觉得可以把ref写成方法的形式，不知道有没有别的
