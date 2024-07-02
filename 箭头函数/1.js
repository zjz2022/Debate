// 来自高级前端面试，这题我选错了，fuck
const add = (x) => (y) => (z) => {
  console.log(x, y, z)
  return x + y + z
}
add(4)(5)(6) // 选 A

// A. 4 5 6
// B. 6 5 4
// C. 4 function function
// D. undefined undefined 6
