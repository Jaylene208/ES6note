//Reflect对象静态方法（大部分和object对象方法相同）
//Reflect.get():查找并返回target对象的name属性
Reflect.get(myObject, 'foo')

//Reflect.set(): 设置target对象的name属性等于value
Reflect.set(myObject, 'bar', 3)

Reflect.has(myObject, 'foo');

//Reflect.deleteProperty(): 删除对象的属性
Reflect.deleteProperty(myObject, 'foo')

//Reflect.setPrototypeOf():设置目标对象的原型。相当于Object.setPrototypeOf(obj, newProto)
//Reflect.getPrototypeOf：读取对象的__proto__属性。相当于Object.getPrototypeOf(obj)
//Reflect.defineProperty：为对象定义属性,等同于Object.defineProperty
//Reflect.getOwnPropertyDescriptor: 得到指定属性的描述对象.等同于Object.getOwnPropertyDescriptor
//Reflect.ownKeys():返回对象的所有属性.等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和
Reflect.ownKeys(myObj);