/**
 * 数值
 */
// 1、整数和浮点数，js中根本没有整数类型，所有的数都是64位浮点数
console.log(1===1.0);
// （1）浮点数的运算会丢失精度所以,不要用浮点数的运算结果来比较
console.log(0.1+0.2);
console.log(0.1+0.2===0.3);
//（2）+0 和-0

//（3）NaN 类型是number
console.log('-------------');
console.log(typeof NaN);

console.log(NaN===NaN);//es5中是不等的

console.log(Object.is(NaN,NaN));//es6对象判断中相等
//(4)indexOf()内部使用严格相等运算 ===
//== 是判断值，不会判断类型 typeof
console.log([NaN].indexOf(NaN));

console.log(0/0);
//2、infinity 无限定义，当超出js表示范围时报错infinity

console.log(1/0);
