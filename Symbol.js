Symbol('foo');  //独一无二的值

//Object.getOwnPropertySymbols(): 获取指定对象的所有 Symbol 属性名
Object.getOwnPropertySymbols(obj);     //[Symbol( )]

//Reflect.ownKeys(): 返回对象所有类型的键名
Reflect.ownKeys(object);

//Singleton模式：调用一个类，任何时候返回的都是同一个实例

//Symbol.hasInstance:当其他对象使用instanceof判断是否为该对象的实例时会调用这个方法
class MyClass {
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }
};
[1, 2, 3] instanceof new MyClass();

//Symbol.isConcatSpreadable:用于Array.prototype.concat()时，是否可以展开
let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e');  

//Symbol.species: 指向一个构造函数,创建衍生对象就不是上层的实例，直接是继承的实例
class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
};
const a = new MyArray();
const b = a.map(x => x);
b instanceof MyArray ;      // false
b instanceof Array;         // true

//Symbol.replace:调用String.prototype.replace,会返回该方法的返回值
const x = {};
x[Symbol.replace] = (...s) => console.log(s);
console.log('Hello'.replace(x, 'World') );

//Symbol.search:调用search()方法时返回方法的返回值
//Symbol.split：调用.split()方法时返回方法的值
//Symbol.toStringTag:定制[object Object]或[object Array]中object后面的那个字符串
// {[Symbol.toStringTag]: 'Foo'}.toString();    // "[object Foo]"




