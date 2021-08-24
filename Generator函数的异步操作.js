function* gen(x) {
    var y = yield x + 2;
    return y;
};
var g = gen(1);
console.log(g.next());      // { value: 3, done: false }
console.log(g.next());       // { value: undefined, done: true }

//Thunk 函数
var thunk = function () {
    return x + 5;
};
function f(thunk) {
    return thunk() * 2;
};
console.log(f());