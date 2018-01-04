/**
 * Promise对象
 */
//1、异步编程
{
     //(1)promise对象创建 参数是一个函数对象，参数是，成功回调函数、失败回调函数
     let promise=new Promise((success,error)=>{
         //----同步操作-------
         console.log('I am promise');
         //----同步操作结束-------
         success();
     });
    // （2）promise创建后，可以用then()设置回调函数，success回调时必填，失败回调可选
    promise.then(function () {
        console.log('success');
    },function () {
        console.log('error');
    })
    console.log('task');
    // (3)执行顺序，promise对象创建后立即执行参数函数，但是参数函数中的回调函数却是最后执行的，当所有同步操作执行完成后才执行异步
}
//2、promise的catch()方法，能够捕获promise参数函数执行异常，和回调函数里面执行异常
{
    let promise=new Promise((success,error)=>{
        //(1)必须在成功或者失败回调执行前抛出异常才能捕获,如果在之后，就无法捕获
        // success('ok');
        // error('err');
        // throw  new RangeError('立即执行异常了');//无法捕获
    });

    promise.then(()=>{throw  new RangeError('成功回调异常了')});
    promise.catch(err=>console.log(err));
}
//3、promise.all(p1,p2,...) 将多个promise对象包装成一个，必须当多个对象都success，或者一个error才会执行

//4、promise.resolve() 将一个普通对象转成promise对象
{
    const p = Promise.resolve('Hello');

    p.then(function (s){
        console.log(s)
    });
//    （1）不带参数，直接返回一个promise对象
}
//5、promise.reject() 也是返回一个promise对象，但是对象的状态时reject的
//6、隐藏方法 done(),finally(),用于promise最后都会执行的方法
//7、promise.try() 捕获同步异常