/**
 * 模块化编程module ，需要使用webpack打包工具，打包成一个浏览器能够识别的js才能测试
 */
//1、 export 命令导出文件

// (1)导出变量
// export var a=1;
//
// //（2）导出函数,类
// export function conso() {
//     console.log('hao 123')
// }
// //（3）推荐导出方式1 export { 变量名,...} ,这种写法实际上是调用上面的写法一个一个导出
// export {a,conso};
//
// //（4）默认导出方式2 export default{ 变量名,...}，这个就是在引入是可以任意给模块起个名字，而且不需要import {}
// //注意：export default 命令在一个文件中只能使用一次所以
// function food() {
//     console.log('food');
// }
// export default {food}


//2、import 命令引入文件，命令不能放在代码块中


//(1)import命令会提升到最顶，和export 相同的方式 import {变量名,...} from 文件路径（可以不带后缀名,文件名必须使用相对路径写法 ./ 或者 ../）

import {area} from './test1';
console.log('圆面积：' + area(4));

//(2)加载文件中的所有导出（包括函数，类，变量等等） import * as 别名 form 'xxx';这种方式一定要起一个别名
import * as circle from './test1';
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

//(3)加载默认导出模块，当用户 使用 export default {}
import aa from './test2';//随便起个名字都能使用
aa.foods1();
aa.foods2();

//3、import()函数， 可以放在代码块中执行
