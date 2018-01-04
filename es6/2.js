/**
 * 变量的解构和赋值
 */

//1、es6直接对数组或者对象进行解构赋值
{
    let [a,b,c]=[1,2,3];
    console.log(a);
    console.log(b);
    console.log(c);
}


//等价于以前
// let a = 1;
// let b = 2;
// let c = 3;

//2、如果右边的不完全匹配左边的任然可以赋值成功
{
    let [a,[b,c],d]=['aa',['bb'],'dd'];
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
//3、注意：右边的必须是数组或者是能够遍历的对象（具有Iterator）

//4、设置默认值,当外面没有赋值时，或者是undefined，使用默认值,
{
    let [a=1]=[];
    let [b=2]=['b'];
    console.log(a);
    console.log(b);
}
//5、对象的解构
{
    let {aa,bb}={aa:'hello',bb:'world'};
    console.log(aa);
    console.log(bb);

}
//6、字符串解构,会把右边转成一个类似数组的对象
{
    let [a,b,c,d]='hello';
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
//7、数值和布尔值也能解构


//8、函数参数解构（重要），会将参数数组的值解构成变量a,b
function add([a,b]){
    return a+b;
}
console.log(add([2,3]));

//参数数组变量设置默认值，当参数为undefined是会触发默认
function add1([a=1,b=2]){
    return a+b;
}
console.log(add1([]));

//9、解构的使用
{
//  (1)  交换变量值
    let x = 1;
    let y = 2;
    [x, y] = [y, x];

//  (2)从函数中返回多个值
//  (3) json对象转
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    let { id, status, data: aa } = jsonData;

    console.log(id, status, aa);
//  (4)函数参数，设置默认值
//   (5)遍历map
    const map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
        console.log(key + " is " + value);
    }
}