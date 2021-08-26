function* foo(x, y) { /*···*/ };

// yield表达式如果用在另一个表达式之中，必须放在圆括号里面
'Hello' + (yield); 
let input = yield;

// 把 Generator赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口
var myIt={};
myIt[Symbol.iterator] = function* () {yield 1;};

// next()方法的参数
function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}
var a = foo(5);
console.log(a.next()); // Object{value:6, done:false}
console.log(a.next());// Object{value:NaN, done:false}
console.log(a.next()); // Object{value:NaN, done:true}
var b = foo(5);
console.log(b.next()); // { value:6, done:false }
console.log(b.next(12)); // { value:8, done:false }
console.log(b.next(13)); // { value:42, done:true }

// for...of
function* foo() {
    yield 1;
    yield 2;
    return 4;
};
for (let v of foo()) {
    console.log(v);
};

function* objectEntries() {
    let propKeys = Object.keys(this);
    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    };
};
let jane = { first: 'Jane', last: 'Doe' };  //对象jane原生不具备 Iterator 接口
jane[Symbol.iterator] = objectEntries;   //将 Generator 函数加到对象的Symbol.iterator属性上面
for (let [key, value] of jane) {
    console.log(`${key}: ${value}`);
};

//throw() 方法
var gen = function* gen(){
    try {
        yield console.log('a');
    } catch (e) {
    }
    yield console.log('b');
    yield console.log('c');
}
var g = gen();
console.log(g.next());       // a
console.log(g.throw());      // b   throw方法被捕获以后,会附带执行一次next方法。
console.log(g.next());       // c

//return() 方法
function* gen() {
    yield 1;
    yield 2;
};
var g = gen();
console.log(g.next());        // { value: 1, done: false }
console.log(g.return('foo')); // { value: "foo", done: true }

//有 try...finally,return()方法会导致立刻进入finally代码块
function* numbers () {
    yield 1;
    try {
        yield 2;
        yield 3;
    } finally {
        yield 4;
        yield 5;
    }
    yield 6;
};
var g = numbers();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.return(7)); // { value: 4, done: false }

// yield* 表达式
function* foo() {
    yield 'a';
    yield 'b';
};
function* bar() {
    yield 'x';
    yield* foo();
    yield 'y';
};
for (let v of bar()){
    console.log(v);
};

//next()获取this：用call绑定内部this
function* Fun() {
    this.a = 1;
    yield this.b = 2;
};
var obj = {};
var f = Fun.call(obj);
console.log(f.next());  // Object {value: 2, done: false}
console.log(f.next());  // Object {value: undefined, done: true}
console.log(obj.a); // 1
console.log(obj.b); // 2

