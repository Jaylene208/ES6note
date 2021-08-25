//数组扩展:扩展运算符 ...()
arr1.push(...arr2);     //push的参数不能是数组

const [first, ...rest] = [1, 2, 3, 4, 5];
//用于数组赋值时，只能放在参数最后一位

//Array.from()&Array.of()
let arr2 = Array.from(array);
Array.of(3, 11, 8);

//find(): 找出第一个符合条件的数组成员
// findIndex()： 返回第一个符合条件的数组成员的位置
x.find();
y.findIndex();

//fill(填充值，起始位置，结束位置): 填充一个数组
[].fill();

//keys()：对键名的遍历, values()：对键值的遍历, entries()：键值对的遍历
['a', 'b'].keys();
['a', 'b'].values();
['a', 'b'].entries();

//Array.prototype.includes():某个数组是否包含给定的值
[].includes();

//Array.prototype.flat(): 返回一个新数组 
[].flat();
