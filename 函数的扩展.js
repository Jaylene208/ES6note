//对比组
function foo( {x, y = 5} ) {      //对象解构赋值
    console.log(x, y);
};
foo({});           // undefined 5
//foo()报错
foo({x: 1});       // 1 5

function func( {x, y = 5}={} ){
    console.log(x, y);
};
func();         // undefined   5

//参数默认值位置
function f(x=1,y){
    return[x,y];
};
f(2);   //[2,undefined]
f(undefined,1);     //[1,1] 
//传入undefined触发默认值。传入null值就是null

//函数的length属性: 函数的参数个数 - 指定了默认值的参数个数
(function(s){}).length;     //1
(function (a, b=1, c) {}).length;       // 1
// 如果设置了默认值的参数不是尾参数，length属性不再计入后面参数

//作用域
let x = 1;
function f(y = x) {
    let x = 2;      //只作用在花括号内
    console.log(y);
};
console.log(f());       //1

//rest 参数(...变量名)
const sortNumbers = (...numbers) => numbers.sort();

//箭头函数
var sum = (num1,num2)=>num1+num2;
const numbers = (...nums) => nums;

//尾调用：某个函数的最后一步是调用另一个函数
//尾递归：尾调用自身

//数组扩展:扩展运算符 ...()
arr1.push(...arr2);     //push的参数不能是数组

const [first, ...rest] = [1, 2, 3, 4, 5];
//用于数组赋值时，只能放在参数最后一位

//Array.from()&Array.of()
let arr2 = Array.from(array);
Array.of(3, 11, 8);

//find(): 找出第一个符合条件的数组成员
// findIndex()： 返回第一个符合条件的数组成员的位置
x.find();
y.findIndex();

//fill(填充值，起始位置，结束位置): 填充一个数组
[].fill();

//Array.prototype.includes():某个数组是否包含给定的值
[].includes();

//Array.prototype.flat(): 返回一个新数组 
[].flat();

//keys()：对键名的遍历, values()：对键值的遍历, entries()：键值对的遍历
['a', 'b'].keys();
['a', 'b'].values();
['a', 'b'].entries();

//name属性：返回函数名
func.bind().name;

//对象的扩展运算符
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
z;      // { a: 3, b: 4 }
let ab = { ...a, ...b };    
//等同于 let ab = Object.assign({}, a, b);

//Object.is(): 比较两个值是否严格相等
Object.is('foo', 'foo');

//Object.assign(): 对象的合并。
Object.assign(target, source1);

//Object.getOwnPropertyDescriptor()：返回某个对象属性的描述对象
Object.getOwnPropertyDescriptors(obj);

//Object.setPrototypeOf(object, prototype): 设置一个对象的原型对象
Object.setPrototypeOf(obj, proto);

//Object.fromEntries():entries逆操作，键值对数组转为对象
Object.fromEntries([ ['foo', 'bar'],['baz', 42]]);

//运算符扩展
a **= 2;    // 等同于 a = a * a;
a?.[x];     // 等同于 a == null ? undefined : a[x]
x ||= y;    // 等同于 x || (x = y)
x &&= y;    // 等同于 x && (x = y)
x ??= y;     // 等同于 x ?? (x = y)