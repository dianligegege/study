var _a;
function greet(person) {
    return 'hello' + person;
}
;
console.log(greet('TS'));
// 布尔，数字。字符串类型
var isBoolean = true;
var isNumber = 12;
var isString = '字符串';
// Symbol 类型
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = 'semlinker',
    _a);
console.log(obj[sym]);
// Array 类型
var arr1 = [1, 2, 3];
var arr2 = [3, 2, 1];
console.log(arr1, arr2);
// 枚举类型
// 数值枚举
{
    var Direction = void 0;
    (function (Direction) {
        Direction[Direction["NORTH"] = 0] = "NORTH";
        Direction[Direction["SOUTH"] = 1] = "SOUTH";
        Direction[Direction["EAST"] = 2] = "EAST";
        Direction[Direction["WEST"] = 3] = "WEST";
    })(Direction || (Direction = {}));
    var dir = Direction.NORTH;
    console.log(Direction);
    console.log(dir); // 0
}
// 字符串枚举
{
    var Direction = void 0;
    (function (Direction) {
        Direction["NORTH"] = "NORST";
        Direction["SOUTH"] = "SOUTH";
        Direction["EAST"] = "EAST";
        Direction["WEST"] = "WEST";
    })(Direction || (Direction = {}));
    var dir = Direction.NORTH;
    console.log(Direction);
    console.log(dir); // NORST
}
// 常量枚举
// 不会编译生成为js
{
    var dir = "NORST" /* NORTH */;
    console.log(dir); // NORST
}
// 异构枚举
// 包含常量枚举和数字枚举,数字枚举相对字符串枚举多了 “反向映射”：
{
    var Direction = void 0;
    (function (Direction) {
        Direction[Direction["a"] = 0] = "a";
        Direction[Direction["b"] = 9] = "b";
        Direction["c"] = "c";
        Direction[Direction["d"] = 5] = "d";
        Direction[Direction["f"] = 6] = "f";
    })(Direction || (Direction = {}));
    var dir = Direction.f;
    console.log(dir); // 6
    console.log(Direction);
}
// Any 类型 一种顶级类型
// 使用 any 类型可以不受限制,所有类型都可以赋值为any
{
    var value = void 0;
    value = '121313';
    value = 121;
    // value(); 这样写编译时不会报错，但是运行肯定就不行了
    console.log(value); // 121
    var value2 = value; // any 类型的值可以赋值给 其他类型
    var value3 = value;
    var value4 = value;
    console.log(value2); // 121
    console.log(value3); // 121
    console.log(value4); // 121
}
// Unknown 类型，一种顶级类型
// unknown 类型的值只能赋值给 any 和 unknow,并且不能进行各种处理
{
    var value = void 0;
    value = '121313';
    value = 121;
    // value(); // 这样写编译就会报错
    console.log(value); // 121
    // let value2: String = value; // 报错
    // let value3: Boolean = value; // 报错
    // let value4: Array<number> = value; // 报错
}
// Tuple 元组 类型
{
    var tupleType = void 0;
    tupleType = ['semlinker', true];
    console.log(tupleType[0]);
    console.log(tupleType);
}
