//装饰类
@testable
class A {};
function testable(target) {
    target.isTestable = true;
};

//装饰类的方法
class B {  //修改属性描述对象的enumerable属性
    @nonenumerable
    get kidCount() { return this.length; }
};
function nonenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
};

//Mixin
const Foo = {
  foo() { console.log('foo') }
};
@mixins(Foo)
class MyClass {};
let obj = new MyClass();
obj.foo();
export function mixins(...list) {   //装饰器
    return function (target) {
      Object.assign(target.prototype, ...list);
    };
  }
