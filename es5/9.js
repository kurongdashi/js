/**
 * Josn对象,标准库
 */
//1、json对象和普通对象区别

// 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。

// 简单类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）。

// 字符串必须使用双引号表示，不能使用单引号。

// 对象的键名必须放在双引号里面。

// 数组或对象最后一个成员的后面，不能加逗号。

//json键值只能是 ：字符串、数值（必须以十进制表示）、布尔值和null

//2、方法JSON.stringify():将对象转为字符串，用于发送  JSON.parse()：将字符串解析为对象，用于接收处理
var json={
    "name":"zhangsan",
    "age":20,
    "job":"掌门"
}
var obj={
    name:'zhangsan',
    age:20,
    job:'掌门',
    fn:function () {

    }
}
console.log(typeof json);
console.log(json);
console.log('------------');
console.log(obj);
//对象和json字符串有区别
console.log(JSON.stringify(obj));
//（2）stringify() 参数1：对象 参数2：指定要转哪些属性的字符数组['name','age']; 参数3
var m=['name','age'];
console.log(JSON.stringify(obj,m));
//(3)参数3：如果是数字表示在转换后的键前面加多少个空格，如果是字符串表示加入字符串

console.log(JSON.stringify(obj,m,3));
console.log(JSON.stringify(obj,m,'=='));
//（4）此方法调用时，会忽略那些不能转换的键值，比如函数等等