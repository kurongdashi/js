/**
 * class 类的继承
 */
//1、extends 继承父类
{
    class Point{
            constructor(x,y){
                //new.target 如果new的是子类就返回子类
                console.log(new.target.name);
                this.x=x;
                this.y=y;
            }
            show(){
                console.log(this.x,this.y);
            }
    }
    class my extends Point{
        //(1)子类不需要显示，定义构造函数，会默认执行下面的代码，如果子类重写了构造方法，就一定要
        //使用super()调用父类构造方法，并且在构造方法的第一行代码

        // constructor(x,y){
        //     super(x,y);
        // }
        showtime(){
            super.show();
            console.log('welcome me showtime');
        }
    }
    let me=new my(1,2);
        me.show();
        me.showtime();
    console.log('--------------------')
    let p=new Point(3,4)
        p.show();
    //（2）、判断两个类是否是继承,Object方法getPrototypeOf(my) 获取父类
    console.log(Object.getPrototypeOf(my)===Point);


//    （3）super() 函数调用，调用父类构造方法，如果在子类内部调用父类其他方法，需要显示指定super.fn()
}
//2、对象
{
    class person{
       static show(){
            console.log(Object.getPrototypeOf(person));
        }
    }
    person.show();

}
