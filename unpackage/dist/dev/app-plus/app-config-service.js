
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/search/search","pages/me/me","pages/discovery/discovery","pages/chat/chat","pages/test/test","pages/login/login","pages/login/agreement","pages/login/forget","pages/login/reg","pages/test_report/test_report"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"爱在欧宝","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#2C405A","selectedColor":"#3F536E","borderStyle":"black","backgroundColor":"#F1F1F1","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabBar/icon_index.png","selectedIconPath":"static/tabBar/icon_index_selected.png"},{"pagePath":"pages/discovery/discovery","text":"畅所欲言","iconPath":"static/tabBar/yuyan.png","selectedIconPath":"static/tabBar/yuyan2.png"},{"pagePath":"pages/chat/chat","text":"小瓯解惑","iconPath":"static/tabBar/zixun.png","selectedIconPath":"static/tabBar/zixun_s.png"},{"pagePath":"pages/me/me","text":"个人中心","iconPath":"static/tabBar/icon_me.png","selectedIconPath":"static/tabBar/icon_me_selected.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"test_oubao","compilerVersion":"3.1.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/search/search","meta":{},"window":{}},{"path":"/pages/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/discovery/discovery","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"畅所欲言","enablePullDownRefresh":true,"titleNView":true}},{"path":"/pages/chat/chat","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"小瓯解惑","enablePullDownRefresh":false,"titleNView":true}},{"path":"/pages/test/test","meta":{},"window":{"navigationBarTitleText":"宝宝测评","enablePullDownRefresh":false}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/login/agreement","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/login/forget","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/login/reg","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/test_report/test_report","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
