class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
class B extends A {
    constructor(x, y, color) {
        super(x, y);             //调用super才可以使用this关键字
        this.color = color;      // 正确
    }
};

//Object.getPrototypeOf: 从子类上获取父类


class A {
    p() {
        return 1;
    }
    constructor() {
        this.p = 2;     //p是父类的实例属性，super取不到
    }
};
class B extends A {
    constructor() {
        super();
        console.log(super.p());     // 1
    }
    get m() {
        return super.p;
    }
};
let b = new B();
console.log(b.m); // undefined