//Iterator:接口机制,为各种不同的数据结构提供统一的访问机制
//默认的 Iterator接口:Symbol.iterator属性
//字符串的接口
let iterable = {
    0: 'a',
    1: 'b',
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
    console.log(item); 
};

//for..of循环:读取键值;只返回具有数字索引的属性
//for...in循环:读取键名,遍历对象
let array = [3, 5, 7];
array.foo = 'hello';
for (let i in array) {
    console.log(i);      
};
for (let i of array) {
    console.log(i);      
};

