/**
 * 数组
 */
//1、join('&') 将数组插入分割符，变成字符串
var a=[10,3,5,6,1,50];
console.log(a.join('&'));
//2、sort() 排序 reverse() 反转
console.log(a.sort());


console.log(a.sort().reverse());

//3、slice() 从数组中选值，返回新数组（不改变原来数组） 参数start,end,
//表示从1开始选4个，不包括第4个
console.log(a.slice(1,4));

//4、splice()从数组中删除元素,并添加（改变原来数组）

//表示从位置1开始删除4个元素，并返回被删除的元素，如果后面有参数表示添加元素
// 第二个参数为0表示不删除
console.log([1,2,3,4,5,6].splice(1,4,22,33));

//5、数组遍历forEach()
var b=[10,3,5,6,1,50];
b.forEach((item)=>console.log(item));

//6、类数组对象，转数组
// call()

//7、遍历数组map，所有元素调用某个方法后，并返回新数组,回调函数必须return
var c=b.map(function (i) {
    return i+2;
})
console.log(c)
//8、遍历数组filter()
var d=b.filter(function (i) {
    return i>5;
})
console.log(d)
