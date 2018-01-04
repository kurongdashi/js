/**
 * Generator（生产者）函数
 */
//1、generator函数内部封装了多种状态
{
//    （1）定义　function* 函数名　
    function* hello(){
    //    （2）内部使用yield表示一个状态
        yield 'a';
        yield 'b';
        return 'c';
    }
    //(3)执行使用，他返回的是一个Iterator迭代器
    let h=hello();
    console.log(h);
    console.log(...h);
    //(4)每次调用next()，执行完一条yield表达式就暂停，直到遇到return 或者执行结束
    console.log(h.next());
}
//2、普通对象如果想遍历，就必须添加Symbol.iterator属性对应的迭代器,generator函数能够产生迭代器对象
{
    let Person={
        name:'zhangsanfen',
        age:129,
        job:'zhangmen',

    }
    function* bianli(obj) {
        let keys=Reflect.ownKeys(obj);
        for(let k of keys){
            yield [k,obj[k]];
        }
    }

    console.log(...bianli(Person));

}
//3、yield* generator函数，可以在一个对象里引用另一个对象

//4、作为obj={}属性简写 *mygenerator(){}


//5、应用主要用于处理异步操作
{
    function * loadUI() {
        console.log('加载ui');
        yield console.log('加载数据');
        console.log('刷新ui');
    }
    let load=loadUI();

    load.next();
    load.next();


}