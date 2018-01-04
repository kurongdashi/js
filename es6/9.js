/**
 * symbol
 */
// ES5:数据类型补充：undefined，null,number,boolean,String,Object
//1、ES6:新数据类型symbol，表示独一无二的数据，因为引用对象时如果要保证对象的属性
//和当前对象的属性名不同，就需要symbol这个类型，由Symbol()生成类似字符串的值
{
    let a=Symbol();
    //Symbol(参数) ，传递参数是用于描述不同的symbol值，否则在console 都是相同的Symbol()
    let b=Symbol('hello');
    let c=Symbol();
    let d=Symbol('hello');

    console.log(a);
    console.log(c);
    console.log(typeof a);
    console.log( b);
    console.log( d);
    //每个Symbol()产生的值都是不同的，即是他们的参数相同，
    console.log(b===d)
    console.log(typeof b.toString());
}
//2、symbol的使用
{
    //(1)在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中
    let attr=Symbol();
    let a={
        [attr]:'zhangsan'
    }
//(2)不能使用.运算
    console.log(a[attr])

}
