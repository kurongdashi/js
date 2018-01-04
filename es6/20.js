/**
 * module加载实现
 */
//1、浏览器加载js
// defer：渲染完页面加载js
// <script src="path/to/myModule.js" defer></script>
//async 和defer相反
// <script src="path/to/myModule.js" async></script>

//2、es6加载模块 添加了type="module" 等同于defer
//<script type="module" src="./foo.js"></script>