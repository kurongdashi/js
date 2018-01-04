/**
 * Reflect对象
 */
//1、Reflect对象能获取Object内部的方法
{
//    （1）让操作都变成函数形式
    console.log('assign' in Object);
    console.log(Reflect.has(Object,'assign'));
//    (2)和Proxy对象方法一一对应
}
