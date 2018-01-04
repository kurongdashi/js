/**
 * 函数
 */
//1、闭包
//（1）读取函数内部变量，因为子函数能获取父函数的内部变量
function a(){
    var cc='zhangsan';
    return function () {
        return cc;
    }
}
console.log(a.cc);

console.log(a()());

//(2)让变量一直在内存中,所以内存开销很大

//（3）封装私有变量

//2、eval() 将字符串当作函数执行，很危险




