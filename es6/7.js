/**
 * 数组的扩展
 */
//1、扩展运算符...将数组[1,2,3] 转成用逗号分隔的参数列表

// (1)调用函数传参数
{
    let arg=[1,2,3];
    //参数rest写法
    function add(...params) {
        let sum=0;
        // for of 遍历数组
        for(let i of params){
            sum+=i;
        }
        return sum;
    }
    //调用写法：扩展运算符...
    console.log(add(...arg));
}
//（2）数组复制
{
    let arg=[1,2,3];
    let newarg=[...arg];
    console.log(newarg);
}
// (3)数组合并
{
    let arg=[1,2,3];
    let newarg=[...arg,3,4,5];
    console.log(newarg);
}
//(4)字符串变数组
{
    let h='hello world';
    //不加[]，直接将字符串，扩展为字符列表
    console.log(...h);
    //加上[]，直接变成字符数组
    console.log([...h]);
}
// （5）、扩展运算符内部调用Iterator接口，所以只要实现该接口的对象都可以展开

//2、array.form() 可以将有length属性的类数组对象，转为数组

//3、Array.of() 将一组列表转换为数组
{
    //    区别于new Array() ,1个参数指定长度
    let arr=Array.of(1,3,5,7);
    console.log(arr);
    //Array.find()
    let a=arr.find(function (cv,index,arr) {
        //返回满足条件的第一个值
        return cv>3;
    })
    console.log(a);

    //Array.findIndex()
    let b=arr.findIndex(function (cv,index,arr) {
        //返回满足条件的第一个值的位置
        return cv>3;
    })
    console.log(b);

}
//4、新增keys(),values() ,entries()：遍历实体
//5、includes(),是否包涵某个值，返回boolean值
{
    let arr=Array.of(1,3,5,7);
    let flag=arr.includes(3);
    console.log(flag);
}
//6、数组空位，定义为undefined