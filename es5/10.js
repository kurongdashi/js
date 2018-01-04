/**
 * 面向ES5对象
 */
//1、es5使用的构造函数+new 来创建对象
// （1） 构造函数就是普通函数，但是内部使用this,代表当前对象，所有属性和方法都是在this上
function Person(){
    this.name='zhangsan';
    this.age=20;
    this.fn=function () {
        console.log(this.name)
    }
}
var p=new Person();
p.fn();

//2、this的理解，this指向调用此方法或者属性所在的对象，就近。

//（1）当 A 对象的方法被赋予 B 对象，该方法中的this就从指向 A 对象变成了指向 B 对象。

//3、JavaScript提供了call、apply、bind这三个方法，来切换/固定this的指向。
console.log('-------固定this的指向----------')
// （1）call(obj) 将当前方法的this，指向obj对象，并运行当前方法，相当于方法嫁接
var p1={
    name:"张三丰",
    age:20,
    job:'zhangmen',
    fav:'太极',
    fn:function () {
        console.log(this);
    }
};
var p2={
    name:'张无忌'
}
var p3={
    name:"张三丰",
    age:20,
    job:'zhangmen',
    fav:'太极',
    length:5
}
function show() {
    console.log(this)
}

p1.fn();

show();

show.call(p1);

p1.fn.call(p2);

console.log('-------利用嫁接----------');
//(2)利用嫁接，可以将原来没有的方法嫁接到对象上

// p3.forEach(i=>console.log(i));//报错

var np=Array.prototype.slice.apply(p3)

np.forEach(i=>console.log(i))

//(2)带参数 call(obj,param) ,参数是调用方法的参数

// 4、apply() 和call() 一样但是参数是一个数组
console.log('-------apply----------');

var a=[1,4,51,6,22];

console.log(Math.max.apply(null,a));


console.log('-------bind----------');
//5、bind() ,绑定this,但是不执行方法，而是返回新方法,用于将对象的内部方法赋值给其他变量
var d=new Date();

var p=d.getTime.bind(d);
console.log(p());

var ns=show.bind(p1);
ns();
//(2) 参数和上面类似，只是是绑定参数，不执行方法

//（3）bind()方法可以固定回调函数里的this,从而使用时不报错