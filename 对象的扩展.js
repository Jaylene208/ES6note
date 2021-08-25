//简洁表示法
const baz = {foo: foo};

//属性名表达式
let abc="123";
var obj = {
    foo: true,
    "abd":123
};

//可枚举
Object.getOwnPropertyDescriptor();  //获取该属性的描述对象

//name属性：返回函数名
func.bind().name;

//对象的扩展运算符
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
z;      // { a: 3, b: 4 }
let ab = { ...a, ...b };    
//等同于 let ab = Object.assign({}, a, b);
