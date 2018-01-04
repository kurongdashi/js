/**
 * 块级作用域
 */

// 1、let 声明，只在代码块中{}，起作用,适合for循环

{
    let a=1;
    var b=2;
}
//给for代码块使用
for(let i=0;i<10;i++){
    // console.log(i);
}
//for循环内循环变量和循环体是两个作用域
for(let i=0;i<3;i++){
    let i='abc';
    // console.log(i);

}
//2、变量不存在声明提升了，先定义后使用
{
    let a=1;
    // console.log(a);
    // console.log(c);
    var c=10;
}
//3、即是外面定义全局变量b，如果{}中有使用let，const 定义b,整个代码块暂时性死区
//暂时性死区:这个块被锁定，let变量只能先定义后使用，否则报错，typeof b 也报错

//块1已经定义了全局变量b，在下面的代码块中使用
{
    // console.log(b);
    let b=3;
}
//4、let块变量不能重复定义,下面报错
{
    let d=1;
    // var d=2;//块中已经定义了let d
    // console.log(d);
}
// 补充1：ES5只有全局、和函数作用域（立即执行函数就是形成作用域保护变量），没有块级作用域，像if{} 就没有作用域，ES6增加了{}作用域
//补充2：for(var i=0;;;) 泄露为全局变量

//5、块级作用域{}，虽然ES6中允许在块中定义函数，但是浏览器（浏览当成var 变量来处理）中还是会报错，所有避免在块中定义函数


function f() { console.log('I am outside!'); }

(function () {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    // f();
}());
//=====================================
//6、const定义常量，常量定义必须立即赋值，否则报错，不能改变常量值，

//7、let声明的全局变量，并不属于window对象,全局变量和顶层对象脱钩
var haha='haha';
console.log(window.haha);
let hehe='hehe';
console.log(window.hehe);




