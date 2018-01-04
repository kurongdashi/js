/**
 * 正则RegExp对象,标准库
 */
// 1、字面量形式 以/xxx/ 双斜线包裹
var reg=/^0~9xy/;
//2、new 对象方式 传人正则表达式，修饰符
new RegExp(reg,'i')
console.log('-----------')
//3、正则对象方法
//（1）test(),返回是否匹配boolean
console.log(/hello/.test('hello world'));

//(2)exec(),返回匹配结果['字符串']
console.log(/hello/.exec('hello world'));

console.log('-----------')
//4、字符串对象的方法和正则
// （1）match()返回一个数组，成员是所有匹配的结果
var a='helloworldmytestzhengze';
console.log(a);
console.log(a.match(/he/g));
//分组匹配，可以使用() 来捕获匹配到的内容，不能使用/g模式否则不能捕获
console.log(a.match(/(.)e(.)/));

//(2)search() 返回第一个匹配字符串的位置
console.log(a.search(/he/g));

console.log(a.search('he'));

//（3）replace（）替换,建议使用正则的方式，并且是全局修饰g模式，替换所有地方，否则只替换第一次搜索到的地方
console.log(a.replace(/he/g,'**'));

console.log(a.replace('he','**'));
//（4）split()
console.log(a.split('e'))

console.log('-----------')
//5、如果正则中只表示字面含义的字符，称为字面量字符
//（1）元字符
//.表示任意字符
//^ 表示开头 $表示结束 | 表示或 \ 表示转义
//（2）提供匹配字符[],提供的字符都放在[]中
console.log(/[^aa]/.test('hello world'))
//（3）预定义参考文档，例如/d 表示0-9 的数字

//6、修饰符 g 全部匹配、i 忽略大小写 m 换行匹配