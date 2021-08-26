//Promise:获取异步操作的消息
function A(){
    return new Promise()
}

//then():为 Promise实例添加状态改变时的回调函数
new Promise ((resolve,reject)=>{})
.then()

//Promise.prototype.catch():指定发生错误时的回调函数
const promise = new Promise(function(resolve, reject) {
    throw new Error('test');
});
promise.catch(function(error) {
    console.log(error);
}); 

//finally():不管最后状态都会执行


//Promise.all():用于将多个 Promise 实例，包装成一个新的 Promise 实例
//Promise.any():只有一个变成fulfilled,全部变成fulfilled; 所有变成rejected才会变rejected

//Promise.resolve():将现有对象转为 Promise 对象
let thenable = {
    then: function(resolve, reject) {
        resolve(42);
    }
};
let p1 = Promise.resolve(thenable);

//Promise.reject(reason):返回实例状态为rejected
Promise.reject('出错了')
.catch(e => {
console.log(e === '出错了')
});


