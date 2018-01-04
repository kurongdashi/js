/**
 * 函数的扩展
 */
//**1、允许函数参数，设置默认值，不建议使用解构方式设置
{
    //注意：默认值得位置必须是尾参数
    function show(x,y='haha'){
        // let x='watch'; 参数的变量是声明的let ,不能重复声明
        console.log(x,y);
    }
    show('zhangsan');
}

//2、函数的length属性，返回函数的参数个数，除去默认值得个数
{
    let len=(function add(x,a,y='haha'){}).length;
    console.log(len);
}
//3、用于没有传值，判断


//4、可变参数rest，写法 ...变量名,rest是一个数组，和arguments相比可以完全使用数组的方法
{
    function show(...items) {
        let sum=0;
        for(let i of items){
            sum+=i;
        }
        return sum;
    }
    let a=show(1,2,3,4);
    console.log(a);
}
//5、严格模式问题，ES6中如果使用解构赋值，或者函数默认值，都不能在函数体中定义严格模式
//因为函数参数，先于函数体执行，如果要从函数体中获取是否是严格模式，这就不合理


//6、函数的name属性，可以获取函数的名

//**7、箭头函数
{
//    (1)箭头函数省略关键字function ，参数使用(参数，参数，..)
    let f=(a,b)=>a*b;
    console.log(f(3,4));

    // (2)如果只有一句代码可以不要{},不要return，多于一条代码就要{}要return
    let f1=(a,b)=>{return a+b;}
    console.log(f1(3,4));

    // (3)如果箭头函数直接返回对象，需要在对象外面加上(),不然会被解析成代码块
    let f2=()=>({a:'zhangsan',b:20,c:'work'});
    console.log(f2());

//    (4)单个参数的情况下还可以省略()
    let f3=x=>x*x;
    console.log(f3(3));
}
//8、箭头函数注意点

// ES5补充：this关键字，指向的调用函数的对象，因为js中函数和对象有区别，new一个函数，函数才是对象，否则就是函数，其中的
    function Person(){
        console.log(this);
    }
    // var p=new Person();//new 创建成对象，this指向当前对象
    // Person();//直接调用那就是函数,是window对象的函数,this指向window对象



//(1)箭头函数内的this，指定的是定义该箭头函数时的对象,因为箭头函数本身没有this,所以引用外层对象的
    function Person1() {
        //此时调用此句代码的对象时Person1,
        console.log(this)

        //setTimeou是window对象的函数，所以在此时指向的是window对象
        setTimeout(function () {
            console.log(this)
        },0);
        //因为箭头函数中this被固定指向定义时所在的对象，所以this指向Person1
        setTimeout(()=>console.log(this),1000);

    }
    // var p1=new Person1();

//(2)因为箭头函数没有this，所以不能作为对象使用，不能使用new

//9、尾调优化，只有在严格模式下，才有效，因为函数内存在两个默认变量

// （1）其实就是return f(); 函数在嵌套调用时，会不停的入栈，call stack ,如果下一个函数的调用是在上一个
// 函数的最后实现的，那么上一函数在内存中就可以出栈了，内存中就只保留下一个函数，实现了内存优化
    //   正确的尾调用
    function f1(){
        let a=1;
        let b=2;
        return g1(a,b);
    }
    function g1(a,b) {
        return a+b;
    }
    f1();

    //注意：尾调用时，不再使用上一个函数的属性，否则无法实现内存优化
    function f2(){
        let a=1;
        let b=2;

        function g2() {
            return a+b;
        }
        return g2();//执行g2()时，使用到了上层函数的东西，内存不会优化
    }
    f2();
//（2）尾调用实现递归（每次只有一帧在内存中），递归超过100000次可能内存溢出,所有用到的变量改写成参数,判断数字用===
    //理想状态
    function sum(n,total){
        'use strict'
       if(n===1){
           return total;
       }else{
           return sum(n-1,total+n);
       }

    }
    console.log(sum(100000,1));
//10、函数最后一个参数允许有逗号