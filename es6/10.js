/**
 * 数据结构Set，Map
 */
//1、Set类似数组，用来存放不相同的值
{
    // （1）
    let s=new Set([1,1,12,13,22,43,45,65]);
    console.log(s);//结果不重复，可以用于数组去重复
    s.add(8);
    console.log(s);//添加数据
//    （2）内部判断数值是否相等，使用了类似精确运算符===,除了NaN在精确运算符中不想等，但是在set
//    内相等的
    s.add(NaN);
    s.add(NaN);
    s.add(NaN);
    console.log(s);//添加NaN,结果只有一个NaN
    // （3）对象都是不相等的，内存地址不等
//    （4）属性和方法 add() ,delete(),has(),clear()
    console.log(s.delete(1));
    console.log(s.has(1));
    console.log(s.has(2));
    // console.log(s.clear());//清除所有值
//    （5）遍历 forEach + 回调
    s.forEach((v,k)=>console.log(k));

    console.log('---------------');
    //扩展运算符遍历
    console.log(...s);
}
//2、weakSet 用来存储对象，类似Java

//3、Map 任何值都可以作为键，不限于字符串
//（1）和对象区别{}，对象键值对是 字符串:值
{
    let m=new Map();
    //只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
    m.set({},'hello');
    let v=m.get({});
    console.log(v);//取不到值，因为键不同

    let a={};
    m.set(a,'hello');
    let v1=m.get(a);
    console.log(v1);//取到值，因为键同

//    (2)size属性返回map全部键值对数

    console.log(m.size);
    console.log(m.has(a));
    console.log(m.delete(a));
    console.log(m.clear());
//(3)遍历和set一样

}
//4、weakMap 用来存储对象