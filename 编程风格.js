//字符串使用单引号或者反引号
//函数参数是对象，优先使用解构赋值 ： 
function getFullN({ firstName, lastName }) {};

function getFullName(obj) {
    const { firstName, lastName } = obj;
};

//对象尽量静态化，不随意添加新属性。Object.assign()添加                //
//对象属性名动态，使用属性表达式定义
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
};

//使用（...）拷贝数组。
const itemsCopy = [...items];

//立即执行函数使用箭头函数
(() => {
    console.log('Welcome');
})();

//不要在函数体内使用arguments变量，使用(...)
function concatenateAll(...args) {
    return args.join('');
}