//export: 规定模块对外接口
//import： 输入其他模块提供的功能
//package.json指定模块的入口文件：main和exports
//type为model：是ES6模块
//CommonJS 模块使用require()和module.exports
//ES6 模块使用import和export
//Node.js内置模块可以整体加载，也可以加载指定的输出项
//ES6加载路径必须完整，不能省略后缀名
//CommonJS加载原理：require加载执行，生成对象，在export取值，再加载只返回第一次执行结果
//循环加载：ES6是动态引用，函数有提升作用。