//对象的内部属性：obj.[[Prototype]]
//  F.[[Call]](V, argumentsList)
//[[Call]]:它的内部方法;  F.[[call]]():表示运行
//V表示[[Call]]运行时this的值; argumentsList则是调用时传入函数的参数

//数组的空位：
//空位也有自己的位置
const a1 = [undefined, undefined, undefined];
const a2 = [, , ,];
Object.keys(a1);        // ["0", "1", "2"]
Object.keys(a2);         // []
a1.map(n => 1);            // [1, 1, 1]
a2.map(n => 1);          // [, , ,]