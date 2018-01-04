/**
 * 字符串的扩展
 */
//1、字符串的遍历
{
    for (let codePoint of 'foo') {
        console.log(codePoint)
    }
}
//2、查找字符的方法 includes(),startsWith(),endsWith(),都是返回boolean
{
    let a='hello world!';
    console.log(a.includes('r'));
    console.log(a.startsWith('r'));
    console.log(a.endsWith('r'));

}
//3、重复字符方法repeat(重复次数)
{
    let a='1';
    console.log(a.repeat(3));
    // 参数如果小数，会先进行取整，然后重复
    console.log(a.repeat(3.9));
//    如果是负数<-1则报错，在-1<num<0,会先取整变成0

}
//4、按长度补全字符串 padStart(len,str);  padEnd()
{
    //长度不足则返回原始串，超过则截取
    let  a='a';
    console.log(a.padStart(5,'cd'));
    console.log(a.padEnd(5,'cd'));
}
//5、模板字符串使用``
{
//    (1)可以当作普通字符串
//   （2）可以嵌入变量，${变量}
    let name='hello';
    let a=`<div> <a href="http://www.baidu.com">去百度</a> <span>${name}</span></div>`;
    console.log(a);
//    (3)如果要在模板中使用`(反引号)需要转义
    let b=`\`aaa\``;
    console.log(b);
    // (4)模板字符串中的空格会被原样保留，如果要去空格需要使用trim();
    console.log(a.trim());
    // （5）${}中可以写js表达式,可以调用函数
    function hello() {
        return 'hello';
    }
    let c=`${hello()} world!${3+5}`;
    console.log(c);
    // (6)模板可以嵌套
    let d=`hello`+`world`;
    console.log(d);

}
//6、模板字符串使用函数,称为标签函数
{
    // 函数名+模板字符串就等于将模板字符串传递给函数，作为参数
    function hello(str) {
        return 'hello'+str;

    }
    console.log(hello` world`)
    console.log`你好`;
}
//7、String对象的raw()方法，用于处理模板字符串，将模板中的变量全部计算出来
{
    let name='zhansan';
    console.log(String.raw`hello ${name}`);

}