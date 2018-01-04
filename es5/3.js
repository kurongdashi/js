/**
 * 对象
 */
//1、对象{} 、new Object() ,Object.create()
    //    （1）对象的键名会自动转为字符串(数值类型)
var a={
    p:'haha',
    p1:'world'
}
// （2）对象的引用属于指针引用，地址指向 ,数值的引用则属于值拷贝
a.name='张三丰';
var b=a;
console.log(b.name);
//（3）代码块和对象，如果要表示对象需要加（）

console.log(({a:'hello'}));
//(4)查看所有属性object.keys()
console.log(Object.keys(a));
console.log('----------------')
//(5)delete 命令删除对象属性
delete a.name;

console.log(Object.keys(a));
//2、对象遍历 for in
