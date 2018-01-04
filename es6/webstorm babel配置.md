# webstorm babel配置自动编译ES6

1. 使用npm 或者cnpm 下载babel-cli 安装到全局
> npm install -g babel-cli
2. 安装babel-cli的插件 babel-preset-es2015 安装到项目目录，因为后续要编译的js都将在项目目录中
3. 在根目录下新建一个.babelrc文件 json文件，配置如下
    {  
      "presets": [  
        "es2015"  
      ]  
    }  
4. webstorm 配置
* 1 File-->Settings-->Languages&Frameworks-->JavaScript  选择ECMAScript 6.
* 2 File-->Settings-->Tools-->Files Watchers 中加上Babel 监视文件
* 3 双击babel打开配置 ,将编译文件生成在原文件同一目录下
## Arguments:
 >$FilePathRelativeToProjectRoot$ --out-file $FileDir$\$FileNameWithoutExtension$-compile.js --source-maps --presets es2015

## Output paths to refresh:
> $FileDir$\$FileNameWithoutExtension$-compile.js:$FileDir$\$FileNameWithoutExtension$-compile.js.map    