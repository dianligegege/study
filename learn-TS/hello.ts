function greet(person: string) {
    return 'hello' + person;
};
console.log(greet('TS'));

// 布尔，数字。字符串类型
const isBoolean : boolean = true;
const isNumber : number = 12;
const isString : string = '字符串';

// Symbol 类型
const sym = Symbol();
const obj = {
    [sym]: 'semlinker',
};
console.log(obj[sym]);

// Array 类型
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [3, 2, 1];
console.log(arr1, arr2);

// 枚举类型
// 数值枚举
{
    enum Direction {
        NORTH, // 不设置默认值的话初始值为0
        SOUTH,
        EAST,
        WEST,
    }
    let dir: Direction = Direction.NORTH;
    console.log(Direction);
    console.log(dir); // 0
}
// 字符串枚举
{
    enum Direction {
        NORTH =  'NORST',
        SOUTH = 'SOUTH',
        EAST = 'EAST',
        WEST = 'WEST',
    }
    let dir: Direction = Direction.NORTH;
    console.log(Direction);
    console.log(dir); // NORST
}
// 常量枚举
// 不会编译生成为js
{
    const enum Direction {
        NORTH =  'NORST',
        SOUTH = 'SOUTH',
        EAST = 'EAST',
        WEST = 'WEST',
    }
    let dir: Direction = Direction.NORTH;
    console.log(dir); // NORST
}
// 异构枚举
// 包含常量枚举和数字枚举,数字枚举相对字符串枚举多了 “反向映射”：
{
    enum Direction {
        a,
        b = 9,
        c = 'c',
        d = 5,
        f,
    }
    let dir: Direction = Direction.f;
    console.log(dir); // 6
    console.log(Direction);
}

// Any 类型 一种顶级类型
// 使用 any 类型可以不受限制,所有类型都可以赋值为any
{
    let value: any;
    value = '121313';
    value = 121;
    // value(); 这样写编译时不会报错，但是运行肯定就不行了
    console.log(value); // 121
    let value2: String = value; // any 类型的值可以赋值给 其他类型
    let value3: Boolean = value;
    let value4: Array<number> = value;
    console.log(value2); // 121
    console.log(value3); // 121
    console.log(value4); // 121
}

// Unknown 类型，一种顶级类型
// unknown 类型的值只能赋值给 any 和 unknow,并且不能进行各种处理
{
    let value: unknown;
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
    let tupleType: [string, boolean];
    tupleType = ['semlinker', true];
    console.log(tupleType[0]);
    console.log(tupleType);
}

// Never 类型 赋值给 never类型的值会编译出错，可以用来保证代码的安全
