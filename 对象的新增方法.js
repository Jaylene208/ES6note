//Object.is(): 比较两个值是否严格相等
Object.is('foo', 'foo');

//Object.assign(): 对象的合并。
Object.assign(target, source1);

//Object.getOwnPropertyDescriptor()：返回某个对象属性的描述对象
Object.getOwnPropertyDescriptors(obj);

//Object.setPrototypeOf(object, prototype): 设置一个对象的原型对象
Object.setPrototypeOf(obj, proto);

//Object.fromEntries():entries逆操作，键值对数组转为对象
Object.fromEntries([ ['foo', 'bar'],['baz', 42]]);
