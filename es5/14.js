/**
 * 浏览器其他对象
 */
//1、History对象，保存浏览器访问记录的对象
/*
 history.back();
 history.forward();
 history.go(-2);
 */
//2、Cookie对象， 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。

// （1）设置cookie,设置值必须是键值对 document.cookie 可读写
document.cookie='test1=hello';
//(2)（一次可以读出全部 Cookie，但是只能写入一个 Cookie），与服务器与浏览器之间的 Cookie 通信格式有关
//  Set-Cookie字段是服务器写入浏览器的 Cookie，一行一个。

//(3)获取当前网页的所有的cookie，非同源政策下的都不能方法
var cooks=document.cookie;
console.log(cooks);

//3、cookie限制
//（1）浏览器对 Cookie 数量的限制，规定不一样。目前，Firefox 是每个域名最多设置50个 Cookie，而 Safari 和 Chrome 没有域名数量的限制。
//（2）所有 Cookie 的累加长度限制为4KB。超过这个长度的 Cookie，将被忽略，不会被设置。


//4、web storage 类似cookie用于储存数据
// sessionStorage保存的数据用于浏览器的一次会话，当会话结束（通常是该窗口关闭），数据被清空；
// localStorage保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的属性和方法完全一样。

//（1）读取：setItem(key,value) getItme(key)
//(2) 销毁：removeItem(key)
//（3）storage 事件，当一个页面的storage改变时，会触发其他页面（共享storage的页面）该事件，本页面不触发，利用这个可以实现
//浏览器多页面间的通信
localStorage.setItem('key1','hello');
localStorage.setItem('key2','world');
console.log(localStorage.getItem('key1'));

//5、同源政策，同协议，同域名，同端口
//（1）目的：安全性，同一个域名下的才能操作自己的cookie，和storage ,DOM,ajax
//（2）共享cookie,storage 当A 网页 http://w1.example.com/a.html B网页 http://w1.example.com/b.html
//   A:  document.domain='localhost'; document.cookie='test1=hello'; B:var cooks=document.cookie;


//6、设置 Cookie 的时候，如果服务器加上了HttpOnly属性，则这个 Cookie 无法被 JavaScript 读取（即document.cookie不会返回这个Cookie的值），只用于向服务器发送

// 7、同源政策完整版
/*
 （1）同源政策规定，AJAX请求只能发给同源的网址，否则就报错。
 除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制
 jsonp：
 websocket: ws:


  */

