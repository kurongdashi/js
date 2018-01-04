/**
 * 数值得扩展
 */
//1、Number对象添加了新方法 Number.isNaN() ,parseInt(),parseFloat()移植到了Number对象上
{

    console.log(Number.parseInt(2));
    console.log(Number.parseInt(2.0))
    console.log(Number.isInteger(2.0))
    console.log(Number.isInteger(2.8))
    console.log(Number.isNaN(1))
}
//2、Math对象新增了数值处理函数

{
    // （1）trunc()用于移除小数部分，获取整数
    let  a=Math.trunc(1.2);
    console.log(a);
    //(2)sign()判断符号，正负
    let b=Math.sign(0)
//    （3）求平方根cbrt();
//    (4) 求几个数平方和的平方根
    let c=Math.hypot(3,4);
    console.log(c);





}