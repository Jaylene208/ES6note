const buf = new ArrayBuffer(32);
//byteLength:返回所分配的内存区域的字节长度
console.log(buf.byteLength);    

//byteLength:返回所分配的内存区域的字节长度
const newBuffer = buf.slice(0, 3);     

//DataView视图
const dataView = new DataView(buf);     
console.log(dataView.getUint8(0));

// 创建一个指向b的Int16视图，开始于字节2，长度为2
const v = new Int16Array(buf, 2, 2);   

//byteOffset:返回 TypedArray 数组从底层ArrayBuffer对象的哪个字节开始
console.log(v.byteOffset);             

//生成一个 8 个成员的Float64Array数组
const f64a = new Float64Array(8);            

//另一个TypedArray实例作为参数
const typedArray = new Int8Array(new Uint8Array(4));   

//set():复制数组
const a = new Uint16Array(8);
const b = new Uint16Array(8);
b.set(a);

//length ：成员长度
a.length; 


