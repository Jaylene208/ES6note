//数组解构
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(bar);
let [head, ...tail] = [1, 2, 3, 4];
console.log(tail);

//Generator函数,具有 Iterator接口
function* fibs() {  
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
};
let [first, second, third, fourth] = fibs();
console.log(fourth);    // 2(？)

//对象解构标准模式
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };

//嵌套赋值
obj={};
arr=[];
( { foo: obj.prop, bar: arr[0] } 
    = { foo: 123, bar: true } );

//指定默认值
var {x, y = 3} = {x: 1};    //x=1   y=3
var {x: y = 3} = {x: 5};    //x=1   y=5

//数组对象解构
arr=[1,2,3];
let {0:a,[arr.length-1]:b}=arr;     // a=1 ; b=3

//字符串解构
const[a,b,c]="day";
//数值和布尔值解构
let{toString:s}=123;
s === Number.prototype.toString;    //true
let {toString:t} = true;
t === Boolean.prototype.toString;   //true

//函数参数解构赋值
function move1({x=0,y=0}={}){return[x,y]};  //可以解构
function move2({x,y}={x:0,y=0}){return[x,y]};   //x,y不能解构，为参数指定默认值

//圆括号使用 ： 赋值语句的非模式部分
[(b)]=[3];
( { p: (d) } = {} ); 

//Map遍历   key:键名    value：键值
map.set("a","hello");
map.set("b","world");
for(let [key,value] of map){ return key,value; };

//模板字符串``
let a = "Bob", b = "today";
` Hello ${a}, how are you ${b}? `; 
`${x} + ${y} = ${x + y}`;
`${obj.x + obj.y}` ;

//标签模板（函数参数）：function tag(stringArr, value1, value2){}
tag`Hello ${ a + b } world ${ a * b }`; 
// tag(['Hello ', ' world ', ''], 15, 50);

