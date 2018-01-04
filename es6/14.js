/**
 * 迭代器Iterator
 */
//1、Iterator 的next()方法，返回一个vaule当前值，和一个boolean值 done:遍历完成
{
    let obj={
        data:['hello','world'],
        [Symbol.iterator](){
            const self=this;
            let index=0;
            return {
                next(){
                    if(index<self.data.length){
                        return {
                            value:self.data[index++],
                            done:false
                        }
                    }else{
                        return {
                            value:undefined,
                            done:true
                        }
                    }
                }
            }
        }
    }
    console.log(...obj);
}
//2、迭代器主要是给对象增加一个可以遍历的接口
//3、使用到Iterator接口的场景
// （1）解构赋值
//（2）扩展运算符...
//(3) yield*
//4、字符串Iterator接口
{
    console.log(...'hello');
    console.log([...'hello']);
}
//5、引入方法 for...of 只要部署了Iterator接口的对象，都可以使用
{
    // (1)字符串、数组、类数组的对象 Set、Map等等，都是原生部署了接口
    (()=>{
        for(let c of 'hello world liping'){
            console.log(c);
        }
    })();
//    （2）for of只能获取值，而且是数字下标的值
    let arr=[1,3,5];
    arr.name='zhangsan';
    console.log([...arr]);
    console.log('---------------------');

//(3)如果类数组的对象不能使用for of ，可以先将其转换为数组 Array.from();
    let person={
        name:'zhangsanfen',
        age:20,
        job:'zhangmen'
    }
    // for(let p of Array.from(person)){
    //     console.log(p);
    // }
    for(let p in person){
        console.log(p);
    }

}
//6、和其他遍历方法比较，可以中途break，return，continue
// （1）forEach 是数组遍历，不能中途break，return，等
//（2）for in是对象遍历 用于获取对象的属性名