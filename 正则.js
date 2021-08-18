//String.raw():专用于模板字符串的标签函数
String.raw({ raw: ['foo', 'bar'] }, 1 + 2);

str=tag`First line\nSecond line`;   
str.raw[0];     // \n被转义为\\n

//codePointAt() :正确处理 4 个字节储存的字符,返回码点十进制值
s = "𠮷";
s.codePointAt(2)

//normalize() : Unicode 正规化
'\u004F\u030C'.normalize('NFC').length;

//确定字符串是否包含在另一个字符串中
// includes() ： 是否找到了参数字符串
// startsWith() ： 参数字符串是否在原字符串的头部
// endsWith() ： 字符串是否在原字符串的尾部
s = 'Hello world!';
s.startsWith('Hello');
s.endsWith('!');
s.includes('o');

//repeat() : 返回一个新字符串，重复(n)次。小数取整，负数报错
"x".repeat(2)

//padStart() : 头部补全 。 为数值补全指定位数
//padEnd() : 尾部补全
'x'.padStart(5, 'ab');
'x'.padEnd(4, 'ab')

//trimStart(): 消除字符串头部的空格
//trimEnd() ： 消除尾部的空格
s = '  abc  ';
s.trim();
s.trimStart();
s.trimEnd();

//replace() ：只替换第一个匹配
'aabbcc'.replace('b', '_');
'aabbcc'.replace(/b/g, '_');    //使用正则表达式的g修饰符可以替换所有的匹配
'aabbcc'.replaceAll('b', () => '_');    //函数替换全部参数

//y修饰符：粘连（sticky）修饰符
r2 = /a+/y;
r2.sticky;

/abc/ig.source;     //abc
/abc/ig.flags;      //ig

//s修饰符
re = /foo.bar/s;
re.dotAll;  //dotAll模式

