/**
 * 对象拦截器proxy（代理）
 */
//1、当访问对象不存在的属性时，可以设置拦截器，提示
{
    let Person={
        name:'zhangsan'
    }
    //(1)拦截器通过new 创建，参数1：要拦截的对象，参数2：处理对象
    let proxy=new Proxy(Person,{
        //（2）get方法获取属性 参数1：被拦截对象，参数2：要访问的属性 参数3（可选）:当前proxy对象
        get:function (target,prop) {
            if(prop in target){
                return target[prop];
            }else{
                throw new ReferenceError('访问的属性不存在！');
            }
        }
    })
//    (3)设置代理后，访问目标对象，都要通过代理去，才能拦截
    console.log(proxy.name);
    // console.log(proxy.age);
}
//2、set() 属性时，拦截，保证属性的正确性和有效性,禁止访问内部属性，以_开头的属性
{

    let handle={
        //(1)参数1：目标对象，参数2：属性名 参数3：属性值
        set(target,prop,value){
            if(prop=='age'){
                if(!Number.isInteger(value)){
                    throw new TypeError('属性必须是integer 类型');
                }
                if(value>200){
                    throw new RangeError('属性值超出范围');
                }
            }else{
                target[prop]=value;
            }
        }
    }
    let proxy=new Proxy({},handle)
   proxy.name='zhangsanfeng';
    // proxy.age=201;
}
//3、拦截函数调用apply()方法 注意：此处目标对象是一个函数

{
    let handle={
        //(1)参数1：目标对象（此处目标对象是一个函数），参数2：目标对象上下文 参数3：参数数组
        apply(target,ctx,params){
            console.log('hello proxy');
        }
    }
    function sum() {
        console.log('world proxy');
    }
    let p=new Proxy(sum,handle);
    p();
}
//4、has()方法拦截是否有属性操作hasProperty()
//5、construct() 拦截new
//6、deleteProperty() 拦截删除