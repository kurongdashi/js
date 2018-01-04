/**
 * async函数
 */
//1、异步执行Es2017解决方案
{
//    （1）类似generator yield 但是自带执行器，自动执行，当上一步执行完成后，自动执行下一步
    async function tm() {
        console.log('-----start----');
       return await 'hello';
    }
    //(2)、async函数返回一个 Promise 对象,当内部所有的await命令执行完成后，才执行.then()回调

    //(3)、await 后面是一个promise对象，如果不是会调用promise.resolve()
    // tm().then(v=>console.log(v));
}
//2、如果await 后面出现reject()则不需要返回，立即执行catch()，而且async函数会中断执行
{
    async function tm() {
        console.log('-----start----');
       await Promise.reject('错误了');
       await console.log('step1');

    }
    // tm().then({}).catch(e=>console.log(e));
}
//3、如果想继续执行reject() 或者throw err 后的代码可以使用try catch
{
    async function tm() {
        console.log('-----start----');
        try{
            await Promise.reject('错误了1');
            throw new Error('err');
        }catch (e){
            console.log(e);
        }
        await console.log('step1');

    }
    tm().then({}).catch(e=>console.log(e));
}