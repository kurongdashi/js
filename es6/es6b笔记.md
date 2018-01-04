ES6重点
1、let、const 定义变量的引入，以及代码块作用域的实现
（1）在代码块中let、const 定义的变量必须先定义后使用（没有变量提升），typeof 变量 也不行
（2）替代var、解决变量泄露风险
（3）该使用常量的地方都使用const,保证值不能改变
2、字符串新增模板引擎``,可以动态添加html,变量，js等
3、数组，扩展运算符，多种功能。拷贝、展开、赋值、复制等等
4、函数
(1)设置默认值和可变参数...rest 
(2)箭头函数
5、map，set结构
（1）键值可以是任意值，对象等
6、class 类写法，extends 继承写法
7、遍历for...of 写法
8、async function() 异步任务函数
9、新增api　模块导入导出


文档参考地址：http://es6.ruanyifeng.com/#docs/destructuring

2、es6 语法处理
（1）babel 编译器只编译es6的新语法，不会处理新的api
（2）此时需要webpack打包工具 参考：http://blog.csdn.net/u012863664/article/details/72813941
    webpack依赖于node 
3、webpack 配置
（1）全局安装webpack 
npm install -g webpack
 (2)创建webpack配置文件 webpack.config.js
 (3)安装babel相关插件 
 npm install babel
 npm install babel-cli
 npm install babel-core
 npm install babel-loader
 npm install babel-preset-es2015
 
 （4）执行打包命令$ webpack
