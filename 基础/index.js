
// return num = 100 时 返回值时100不是num
var obj1 = {};
obj1[obj1['first'] = 1] = 'first';
console.log(obj1);
console.log(obj1['first'] = 2); // 2
let a1 = '';
console.log(a1 = 9); // 9