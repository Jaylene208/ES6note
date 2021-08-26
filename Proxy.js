//Proxy代理器 : 修改某些操作的默认行为
var proxy = new Proxy({}, {
    get: function(target, propKey) {
        return 35;
    }
});

//作为其他对象的原型
let obj = Object.create(proxy); 

//get（target, key, receiver）：用于拦截某个属性的读取操作
//set(obj, prop, value, receiver): 用来拦截某个属性的赋值操作
const handler = {
    get (target, key) {
        invariant(key, 'get');
        return target[key];
    },
    set (target, key, value) {
        invariant(key, 'set');
        target[key] = value;
        return true;
    }
};

//apply (target, ctx, args):拦截函数的调用
var hand = {
    apply: function () {    //拦截
        return 'I am the proxy';
    }
};

//has (target, key)：用来拦截HasProperty，隐藏某些属性。只对in运算符生效


//construct (target, args, newTarget)：用于拦截new命令。
const p = new Proxy(function () {}, {
    construct: function(target, args) {
        console.log('called: ' + args.join(', '));
        return { value: args[0] * 10 };     //返回必须是一个对象
    }
});

//deleteProperty：用于拦截delete操作
var handler = {
    deleteProperty (target, key) {
        invariant(key, 'delete');
        delete target[key];
        return true;    //抛错或返回false就无法delete删除
    }
};

//defineProperty():拦截Object.defineProperty()
var handler = {
    defineProperty (target, key, descriptor) {
        return false;
    }
};

//getPrototypeOf()： 拦截获取对象原型。返回值必须是对象或者null
var p = new Proxy({}, {
    getPrototypeOf(target) {
        return proto;
    },
});

//ownKeys(): 拦截对象自身属性的读取操作
let handler2 = {
    ownKeys(target) {
        return ['a'];
    }
};

