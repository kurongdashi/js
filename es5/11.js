/**
 * 原形链，万物皆对象
 */
//1、每个对象都有一个原形对象，而原形也是对象性，所以追溯到最顶端的Object.prototype === null

//2、原形对象的constructor
var MyArray = function () {};

MyArray.prototype = new Array();
// MyArray.prototype.constructor = MyArray;

var mine = new MyArray();

mine.push(1, 2, 3);

console.log(mine.length) // 3
console.log(mine instanceof Array) // 3

//3、instanceOf 就是检查左边的对象是不是通过右边的对象的构造方法生成的

//4、Object.getPrototypeOf()，获取原形对象