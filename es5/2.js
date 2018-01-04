/**
 * 字符串
 */
//1、字符串可以被视为字符串数组
var a='hello';

console.log(a[0],a[1],a[2]);

//2、base64 主要不是加密，而是防止出现特殊字符 btoa() atob() 不能加密中文
console.log(btoa(a));

console.log(atob(btoa(a)));

//3.字符串和boolean相互转换
console.log(!'');