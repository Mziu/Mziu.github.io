webpackJsonp([2],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o=(e("R4rm"),{render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"move-fade-right-to-left"}},[n("router-view",{staticClass:"app-router-view"})],1)],1)},staticRenderFns:[]});var p=e("VU/8")({name:"app",components:{}},o,!1,function(t){e("rZcP")},null,null).exports,r=e("/ocq"),i=function(t){return function(n){return e.e(0).then(function(){var a=[e("31BR")("./"+t)];n.apply(null,a)}.bind(this)).catch(e.oe)}};a.default.use(r.a);var c=new r.a({routes:[{path:"/index",name:"main",component:i("index"),children:[{path:"/index",component:i("components/ymHome/ymContent"),name:"index"},{path:"/order",component:i("order"),name:"order"},{path:"/patient",component:i("patient"),name:"patient"},{path:"/doctor",component:i("doctor"),name:"doctor"},{path:"/eva",component:i("eva"),name:"eva"},{path:"/package",component:i("package"),name:"package"},{path:"/sign",component:i("sign"),name:"sign"}]},{path:"/",name:"login",component:i("login")}]}),m=e("mwE6"),d=e.n(m),u=(e("cU5d"),e("9rMa")),s=e("ukYY"),l=e.n(s),h=e("mUbh"),g=e.n(h);a.default.use(u.a);var f=new u.a.Store({state:{navList:[{name:"首页",pathId:"index",index:0},{name:"订单管理",pathId:"order",index:1},{name:"患者管理",pathId:"patient",index:2},{name:"医生管理",pathId:"doctor",index:3},{name:"评价管理",pathId:"eva",index:4},{name:"套餐活动",pathId:"package",index:5},{name:"登录注册",pathId:"sign",index:6}],servicesList:[{name:"订单管理",url:"http://p2fkgzxqv.bkt.clouddn.com/icon01.png",pathId:"order"},{name:"患者管理",url:"http://p2fkgzxqv.bkt.clouddn.com/icon02.png",pathId:"patient"},{name:"医生管理",url:"http://p2fkgzxqv.bkt.clouddn.com/icon03.png",pathId:"doctor"},{name:"评价管理",url:"http://p2fkgzxqv.bkt.clouddn.com/icon04.png",pathId:"eva"},{name:"套餐活动",url:"http://p2fkgzxqv.bkt.clouddn.com/icon05.png",pathId:"package"},{name:"关于我们",url:"http://p2fkgzxqv.bkt.clouddn.com/icon06.png",pathId:"about"},{name:"医院介绍",url:"http://p2fkgzxqv.bkt.clouddn.com/icon07.png",pathId:"hospital"},{name:"账户结算",url:"http://p2fkgzxqv.bkt.clouddn.com/icon08.png",pathId:"account"}],tableBarList:[{text:"全部"},{text:"挂号待就诊"},{text:"套餐购买成功待就诊"},{text:"待二次付费"},{text:"待复诊"}],tableTitleList:[{prop:"dName",name:"昵称"},{prop:"name",name:"真实姓名"},{prop:"age",name:"年龄"},{prop:"phone",name:"联系电话"},{prop:"payStyle",name:"支付方式"},{prop:"price",name:"实付金额"},{prop:"doctor",name:"预约医生"},{prop:"orederTime",name:"下单时间"},{prop:"FirstTime",name:"初诊时间"},{prop:"count",name:"复诊次数"},{prop:"sick",name:"急诊"},{prop:"endTime",name:"剩余时间"}]},getters:{getNavList:function(t){return t.navList},getServiceList:function(t){return t.servicesList},getTableBarList:function(t){return t.tableBarList},getTableTitleList:function(t){return t.tableTitleList}},mutations:l.a,actions:g.a});a.default.config.productionTip=!1,a.default.use(d.a),new a.default({el:"#app",router:c,store:f,template:"<App/>",components:{App:p}})},R4rm:function(t,n){},cU5d:function(t,n){},mUbh:function(t,n){},rZcP:function(t,n){},ukYY:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.ee9a2de715839040fa90.js.map