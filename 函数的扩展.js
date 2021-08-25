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
function f() {
    let m = 1;
    return g(m);
};
f();

//尾递归：尾调用自身
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
