//let：声明变量块作用域，先声明后使用(or报错ReferenceError),
//var：声明全局变量，变量提升(输出undefined)
var tmp = new Date();
function f() {
    console.log(tmp);   // undefined     (闭包)
    if (false) {
    var tmp = 'hello world';
    }
};f(); 

//const : 声明一个只读的常量立即初始化,块级作用域
const a = [];
a.push('Hello'); 
console.log(a.length);    

const foo = Object.freeze({});  // Object.freeze  冻结对象
foo.prop = 123;
// 顶层对象 window; global
// var和function ：声明变量是顶层对象属性
// let、const、class ：声明不是顶层对象
var a=1;
console.log(window.a);
let b=2;
console.log(window.b); //undefined

//使用 this 在所有情况下，都取到顶层对象
// 方法一
(typeof window !== 'undefined'
? window
: (typeof process === 'object' &&
    typeof require === 'function' &&
    typeof global === 'object')
    ? global
    : this);
// 方法二
var getGlobal = function () {
if (typeof self !== 'undefined') { return self; }
if (typeof window !== 'undefined') { return window; }
if (typeof global !== 'undefined') { return global; }
throw new Error('unable to locate global object');
};   
