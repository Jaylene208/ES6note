function* gen(x) {
    var y = yield x + 2;
    return y;
};
var g = gen(1);
console.log(g.next());      // { value: 3, done: false }
console.log(g.next());       // { value: undefined, done: true }

//Thunk 函数 : 传名调用实现中的临时函数
var thunk = function () {
    return x + 5;
};
function f(thunk) {
    return thunk() * 2;
};
console.log(f());

//转换器
const  Thunk = function(fn){
    return function(...args){
        return function(callback){
            return fn.call(this,...args,callback);
        }
    };
};
var readFileThunk = Thunk(fs.readFileThunk);
readFileThunk(fileA)(callback);

//Thunkify 模块: 含有检查机制，Thunk运行一次
function f(a, b, callback){
    var sum = a + b;
    callback(sum);
    callback(sum);
};
var ft = thunkify(f);
var print = console.log.bind(console);
ft(1, 2)(print);   //只输出一行  3

//Generator自动流程管理
var gen = function* (){}
var g = gen();
var r1 = g.next();
r1.value(function (err, data) { //将同一个回调函数，反复传入next方法的value属性
    if (err) throw err;
    var r2 = g.next(data);
    r2.value(function (err, data) { //用递归来自动完成
        if (err) throw err;
        g.next(data);
    });
});


//Thunk函数自动流程管理
function run(fn){
    var gen = fn();
    function next(err,data){    //thunk回调函数
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    };
    next();
};
var g = function* (){};
run(g);

//co模块: 将两种自动执行器（Thunk 函数和 Promise 对象），包装成一个模块
var gen = function* (){};
co(gen);

//基于Promise 对象的自动执行

//处理并发的异步操作
co(function* (){ 
    var value; 
    yield value.map(something);
});
function* something(x){};

//async 函数：generator的改进，自带执行器。返回一个 Promise 对象。
async function fo() {};     // 函数声明
const foo = async function () {};       // 函数表达式
let obj = { async foo() {} };
obj.foo().then(...args);    //对象方法
const fun = async () => {};     //箭头函数

async function f() {
    return 'hello world';
};
f().then(v => console.log(v));

//await命令
async () => {
    const sleepTime = await new Sleep(1000);
    console.log(sleepTime);
};

//休眠效果
function sleep(interval) {
    return new Promise(resolve => {
        setTimeout(resolve, interval);
    })
};
async function one2FiveInAsync() {
    for(let i = 1; i <= 5; i++) {
        console.log(i);
        await sleep(1000);
    }
};  
one2FiveInAsync();
async function f() {    //没有try..catch就不会执行第二个await
    try {            //前一个失败也不中断后面异步操作
        await Promise.reject('出错了');
    } catch(e) {
    };
    return await Promise.resolve('hello world');
}
f()
.then(v => console.log(v));


//错误处理
async function myFun(){
    try{
        await Promise();
    }catch(err){console.log(err);}
};
async function myFun(){
    await Promise().catch(err => console.log(err));
};

//没有继发关系，同时触发
async function test(){
    let [foo, bar] = await Promise.all([getFoo(), getBar()]);
};

//按顺序完成异步
//依次远程读取一组 URL，然后按照读取的顺序输出结果。
async function logInOrder(urls) {
    // 并发读取远程URL ，map是并发执行的，async内部是继发执行
    const textPromises = urls.map(async url => {
        const response = await fetch(url);
        return response.text();
    });
    // 按次序输出
    for (const textPromise of textPromises) {
        console.log(await textPromise);
    };
};

