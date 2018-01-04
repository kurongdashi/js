/**
 * 对象的扩展
 */

//1、对象内方法简写，不需要键名
{
    let o={
        get(){
            return 5;
        }
    }
    console.log(o.get())
}
//2、name属性返回方法名


//3、Object.is(),比较对象是否相等
{
    let s=Object.is(NaN,NaN);
    let s1=NaN===NaN;
    console.log(s);
    console.log(s1);
}
//4、Object.assign(target,source) ,合并对象
{
    //（1）相同属性，后面的覆盖前面的
    let a={name:'zhangsan',age:'20'};
    let b={job:'famo',age:'23'};

    let c=Object.assign(b,a);
    console.log(c);
    //（2）如果对象里面还有对象，则合并时新对象是对元素对象的引用，而不是拷贝
    let d={a:{fav:'game'}};
    let f=Object.assign(b,d);
    d.a.fav=1
    console.log(f.a.fav)
//    (3)只是值得拷贝，如果对象里面有函数，则先求值，后拷贝
    let g=Object.assign({},d);
    console.log(g)
}
//5、super关键字，指向原形对象
//6、对象的扩展运算符，将对象拷贝到新的对象中
//7、传导运算符?. 判断对象是否为空