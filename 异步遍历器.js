//调用next方法，返回的是一个Promise对象
// next方法会累积起来，自动按照每一步的顺序运行下去
async function f() {
    const asyncIterable = createAsyncIterable(['a', 'b']);
    const asyncIterator = asyncIterable[Symbol.asyncIterator]();
        console.log(await asyncIterator.next());
        console.log(await asyncIterator.next());
        console.log(await asyncIterator.next());
};

//await:将外部操作产生的值输入函数内部; yield命令用于将函数内部的值输出。
//for await...of:遍历异步的 Iterator 接口
(async function fun() {
    for await (const x of ['a', 'b']) {
        console.log(x);
    }
})();

//yield*语句
async function* gen1() {
    yield 'a';
    return 2;
};
async function* gen2() {
    const result = yield* gen1();
};

