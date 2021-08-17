//数组解构
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(bar);
let [head, ...tail] = [1, 2, 3, 4];
console.log(tail);

function* fibs() {  //Generator函数,具有 Iterator接口
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
};
let [first, second, third, fourth] = fibs();
console.log(fourth);    // 2(？)

//对象解构
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
