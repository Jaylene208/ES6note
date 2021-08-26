// 函数声明
async function fo() {};     

// 函数表达式
const foo = async function () {}; 
let obj = { async foo() {} };

//对象方法
obj.foo().then(...args);  

//箭头函数
const fun = async () => {};     

async function f() {
    return 'hello world';
};
f().then(v => console.log(v));

//await命令
// await 后面对象定义了then方法，也看作Promise对象
class A{
    constructor(){}
    then(){}
};
(async () => {
    const B = await new A(1000);
    console.log(B);
})();

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
    try {   //前一个失败也不中断后面异步操作
        await Promise.reject('出错了');
    } catch(e) {
    };
    return await Promise.resolve('hello world');
}
f()
.then(v => console.log(v))
.catch(e => console.log(e));

//错误处理
async function myFun(){
    try{
        await Promise();
    }catch(err){console.log(err);}
};
//或者： 
async function myFun(){
    await Promise().catch(err => console.log(err));
};

//没有继发关系，同时触发
async function test(){
    let [foo, bar] = await Promise.all([getFoo(), getBar()]);
};

//按顺序完成异步:
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
}
