/**
 * class 类的定义
 */
//1、和java 类差不多了，类的方法前面没有关键词修饰
{
    class Person{
        //(1) 构造函数名固定为constructor
        constructor(name){
            this.name=name;
        }
        //方法没有关键词修饰
        chifan(){
            console.log(this.name+'在吃饭');
        }
    }
    new Person('zhangsanfen').chifan();
    //(3)类实际上就是函数类型
    console.log(typeof Person);
//    （4）类中所有方法都是绑定在原形prototype上的
//        this.name 是定义在当前类上的，不是定义在原形上的
//    （5）类的内部就是严格模式，所以不需要显示定义
//    （6）必须使用new

}
//2、class 表达式定义
{
    const p=class Person{}
//    (1)立即执行类
    const p1=new class {

    constructor(name){
        this.name=name;
    }
        show(){
            console.log(this.name+'  在睡觉');
        }
    }('张三丰');

    p1.show();

}
//3、类定义不存在，变量提升，定义提升，必须先定义后使用

//4、ES6 不提供私有方法，所以类中的方法都是共有的
{
//    （1）将私有方法定义在类的外面，使用call()改变this指向

    class person{
        constructor(name){
            this.name=name;
        }
        chifan(){
            console.log(this.name+'  在吃饭');
        }
        shuijiao(){
            console.log(this.name+'  在睡觉');
        }
        runSiyo(){
            siyou.call(this);
        }

    }

    function siyou() {
        console.log(this.name+'  的私有方法');
    }
    let p=new person('张三丰');
    p.runSiyo();

}
//5、ES6 不提供私有属性，有提案用#表示私有,但是目前无法使用

//6、静态方法static关键字修饰
{
    class  person{
        //(1)注意：js的静态方法只能被类调用，如果实例调用报错，和java不同
        static show(){
            console.log('在睡觉');
        }
    }
    person.show();
}
//7、ES6没有静态属性,所有属性都是通过  this.attr来定义

//8、new.target用于返回当前类，如果是子类继承父类，这返回子类