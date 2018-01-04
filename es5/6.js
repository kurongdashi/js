/**
 * 数值类型转换
 */
//1、Number() ,parseInt()
var a='10 hello';
//转换字符串中的数字，忽略其他
console.log(parseInt(a));

console.log(Number(a));
//2、String()
console.log(String([1,5,2,6]));

//3、Boolean()
//4、自动转换
// （1） 数字+字符

//(2) 字符数字+字符数字