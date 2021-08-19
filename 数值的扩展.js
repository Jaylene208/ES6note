// Number.isFinite()：检查一个数值是否为有限的
Number.isFinite();

//  Number.isNaN() ： 检查一个值是否为NaN(只对NaN返回true)
Number.isNaN();

// parseInt() 和  parseFloat() : 转为整数，浮点数
Number.parseInt();

// Number.isInteger(): 判断一个数值是否为整数
Number.isInteger();

// Number.isSafeInteger(): 判断一个整数是否落在这个范围之内
Number.isSafeInteger();

// Math.trunc(): 去除一个数的小数部分
Math.trunc();      //内部使用Number方法转为数值

// Math.sign(): 判断一个数是什么数，返回+1，-1，0，-0，NaN
Math.sign();

// Math.cbrt(): 计算一个数的立方根
Math.cbrt();

// Math.imul(): 相乘的结果
Math.imul(2, 4);

// Math.hypot(): 返回所有参数的平方和的平方根
Math.hypot(3, 4);

// Math.expm1(x): 返回ex - 1。  Math.exp(x) - 1
Math.expm1();

// Math.log1p(x)： 返回1 + x的自然对数。    Math.log(1 + x)

// Math.log10(x)： 以 10 为底的x的对数。    Math.lg(1 + x)

// 数据类型 BigInt ： 必须添加后缀n
typeof(1234n);
BigInt(true);
