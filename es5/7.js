/**
 * 标准库对象,js原生提供的对象
 */
//1、Object对象
//（1）部署方法到对象本身,属于静态方法
Object.show=function () {
    console.log('show yi show 1');
}

Object.show();

//(2)所有对象都有prototype属性，指向原形对象，可以将方法部署到原形对象上
Object.prototype.show=function () {
    console.log('show yi show 2');
}
var o2=new Object();
o2.show();
//（3）Object.getOwnPropertyNames()

//（4）valueOf() 返回
console.log(o2.valueOf());
//（5）toString()
console.log(o2.toString());


//2、Array对象
//(1)方法同数组方法
console.log('----------包装对象----------')

//3、包装对象，就是通过Number(),Boolean(),String()，将不是对象的转换为对象

//(1)自动包装对象，js在数据类型需要使用对象形态是，自动包装成对象，使用后立即销毁临时对象
console.log('hello'.length)

//（2）数字包装对象需要使用(123) 包起来
console.log((123).toFixed(2));

console.log('---------Number-----------')


//4、Number 对象
// （1）Number.MAX_VALUE 最大正数
console.log(Number.MAX_VALUE);
//(2)最大正整数
console.log(Number.MAX_SAFE_INTEGER);
//(3)toFixed(小数点个数)

console.log('---------String-----------')


//5、String 对象

//（1）subString(start,end) 和substr(start,len)、slice()
console.log('javaScript'.substring(1,4));

console.log('javaScript'.substr(1,4));

console.log('javaScript'.slice(1,4));

//(2)indexOf 从头开始匹配 和lastIndexOf从尾开始匹配
console.log('javaScript'.indexOf('a'));
console.log('javaScript'.lastIndexOf('a'));

//(3)trim(),toLowerCase() toUpperCase()

//(4)match(),serach() 从字符串里找字符串

//6、Math对象
/*
 Math.abs()：绝对值
 Math.ceil()：向上取整
 Math.floor()：向下取整
 Math.max()：最大值
 Math.min()：最小值
 Math.pow()：指数运算
 Math.sqrt()：平方根
 Math.log()：自然对数
 Math.exp()：e的指数
 Math.round()：四舍五入
 Math.random()：随机数
 */


//7、Date对象，精确到毫秒

//（1）对象方法Date(),返回时间对象格式
//（2）new Date(),返回时间对象格式
/**
 * getTime()：返回距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
 getDate()：返回实例对象对应每个月的几号（从1开始）。
 getDay()：返回星期几，星期日为0，星期一为1，以此类推。
 getYear()：返回距离1900的年数。
 getFullYear()：返回四位的年份。
 getMonth()：返回月份（0表示1月，11表示12月）。
 getHours()：返回小时（0-23）。
 getMilliseconds()：返回毫秒（0-999）。
 getMinutes()：返回分钟（0-59）。
 getSeconds()：返回秒（0-59）。
 getTimezoneOffset()：返回当前时间与UTC的时区差异，以分钟表示，返回结果考虑到了夏令时因素。
 */
//8、正则，看8.js
//9、json对象 ，看9.js
//10、console对象
//11、用来描述一个对象的属性的行为，属性描述对象
//（1）获取Object.getOwnPropertyDescriptor()

