class Point{
    constructor(x){     //构造方法
        return x
    }
    toString(){}
};
let a = new Point(2);   // 只能由new调用

//Object.assign(): 一次向类添加多个方法
Object.assign(Point.prototype, { });

//class 表达式
let person = new class{
    constructor(x){
        return x;
    }
    * [Symbol.iterator]() {     // Generator 函数
        for (let arg of this.args) {
        yield arg;
    }
}
};
person.name;    //name属性

//静态方法：不会被实例继承，而是直接通过类来调用。父类可以被子类继承
class Foo{
    static meth(){}
}
foo.meth();

//class 继承
class A{
    constructor(x){ this.x = x;this.p = 2;}     ////p是父类的实例属性，super取不到
}
class B extends A{
    constructor(x){ super(x); }  //调用super才可以使用this关键字
};

// 对象的__proto__属性：表示构造函数的继承，总是指向父类
// 构造函数的prototype属性：方法的继承
class A {};
class B extends A {};
B.__proto__ === A               // true
B.prototype.__proto__ === A.prototype // true

//原生构造函数的继承
class myArray extends Array{
    constructor(...args) {
        super(...args);
    }
}



