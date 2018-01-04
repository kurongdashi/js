/**
 * 浏览器环境对象
 *
 */

//1、window对象
//（1）、window.screenX和window.screenY属性，返回浏览器窗口左上角相对于当前屏幕左上角（(0, 0)）的水平距离和垂直距离，单位为像素
//（2）、window的navigator对象
var navi=navigator.userAgent.toLowerCase();
console.log(navi);
if(/mobi|android/.test(navi)){
    alert('当前是手机');
}
//(3)、url编码
var url='http://www.baidu.com?hello=你好'
console.log(encodeURI(url));
//(4)、弹窗alert()，prompt()，confirm()