webpackJsonp([0],{"/8Br":function(t,i){},"0nyg":function(t,i){},"31BR":function(t,i,s){var e={"./brand":"eMhh","./brand/":"eMhh","./brand/index":"eMhh","./brand/index.1":"EjvP","./brand/index.1.vue":"EjvP","./brand/index.vue":"eMhh","./components/brandtitleitem":"S0di","./components/brandtitleitem.vue":"S0di","./components/consulttitleitem":"8wdT","./components/consulttitleitem.vue":"8wdT","./components/medicalnavitem":"F3+O","./components/medicalnavitem.vue":"F3+O","./components/titleitem":"gwl6","./components/titleitem.vue":"gwl6","./components/watchitem":"rtwt","./components/watchitem.vue":"rtwt","./components/worditem":"edI4","./components/worditem.vue":"edI4","./consult":"Q0dR","./consult/":"Q0dR","./consult/index":"Q0dR","./consult/index.vue":"Q0dR","./contact":"xLcW","./contact/":"xLcW","./contact/index":"xLcW","./contact/index.vue":"xLcW","./copyright":"ITGQ","./copyright/":"ITGQ","./copyright/index":"ITGQ","./copyright/index.vue":"ITGQ","./data":"bhns","./data/":"bhns","./data/index":"bhns","./data/index.vue":"bhns","./demo":"xxzw","./demo.vue":"xxzw","./friends":"hgdI","./friends/":"hgdI","./friends/index":"hgdI","./friends/index.vue":"hgdI","./gelatin":"Nqcv","./gelatin/":"Nqcv","./gelatin/index":"Nqcv","./gelatin/index.vue":"Nqcv","./index":"Qt9A","./index/":"Qt9A","./index/index":"Qt9A","./index/index.vue":"Qt9A","./medical":"Cng2","./medical/":"Cng2","./medical/index":"Cng2","./medical/index.vue":"Cng2","./product":"taF9","./product/":"taF9","./product/index":"taF9","./product/index.vue":"taF9","./service":"bznk","./service/":"bznk","./service/index":"bznk","./service/index.vue":"bznk","./skill":"etXi","./skill/":"etXi","./skill/index":"etXi","./skill/index.vue":"etXi","./watch":"ypod","./watch/":"ypod","./watch/index":"ypod","./watch/index.vue":"ypod"};function a(t){return s(n(t))}function n(t){var i=e[t];if(!(i+1))throw new Error("Cannot find module '"+t+"'.");return i}a.keys=function(){return Object.keys(e)},a.resolve=n,t.exports=a,a.id="31BR"},"3Bxj":function(t,i){},"3cPI":function(t,i){},"5GVj":function(t,i){},"8wdT":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"consulttitle",data:function(){return{}},props:{title:String},mounted:function(){}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"titleitem"},[i("div",{staticClass:"titleitem_head"},[i("div",{staticClass:"titleitem_head_title"},[this._v(this._s(this.title))])])])},staticRenderFns:[]};var n=s("C7Lr")(e,a,!1,function(t){s("veKa")},"data-v-7c5c1da9",null);i.default=n.exports},Cng2:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"medical",data:function(){return{naturaltherapylist:[],tst0:"",tst1:"",tst2:"",tst3:"",diymedicallist:[],swotlist:[],aginglist:[]}},components:{medicalNavItem:s("F3+O").default},updated:function(){this.naturaltherapylist=this.$t("m.medical.naturaltherapy"),this.diymedicallist=this.$t("m.medical.diymedical"),this.swotlist=this.$t("m.medical.swot"),this.aginglist=this.$t("m.medical.aging"),this.tst0=this.naturaltherapylist[0].text,this.tst1=this.naturaltherapylist[1].text,this.tst2=this.naturaltherapylist[2].text,this.tst3=this.naturaltherapylist[3].text},created:function(){this.naturaltherapylist=this.$t("m.medical.naturaltherapy"),this.diymedicallist=this.$t("m.medical.diymedical"),this.swotlist=this.$t("m.medical.swot"),this.aginglist=this.$t("m.medical.aging"),this.tst0=this.naturaltherapylist[0].text,this.tst1=this.naturaltherapylist[1].text,this.tst2=this.naturaltherapylist[2].text,this.tst3=this.naturaltherapylist[3].text},methods:{}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"medical"},[s("div",{staticClass:"medicalbanner"},[t._m(0),t._v(" "),s("div",{staticClass:"medicalbanner_box"},[s("div",{staticClass:"medical_banner_info_left"},[t._v("\n        "+t._s(t.$t("m.medical.antiaging"))+"\n      ")]),t._v(" "),s("div",{staticClass:"medical_banner_info_right"},[s("div",{staticClass:"medical_banner_info_right_title"},[t._v(t._s(t.$t("m.medical.howtoface")))]),t._v(" "),t._l(t.naturaltherapylist,function(i){return s("div",{key:i.key,staticClass:"medical_banner_info_right_list"},[t._v("\n          "+t._s(i.id)+".  "+t._s(i.text)+"\n        ")])})],2)])]),t._v(" "),s("div",{staticClass:"medicalcontent"},[s("medical-nav-item",{attrs:{tst:t.tst0}}),t._v(" "),s("div",{staticClass:"medicalcontent_info"},[t._l(t.diymedicallist,function(i){return s("div",{key:i.key,staticClass:"medicalcontentbox"},[s("div",{staticClass:"medicalcontenticon"},[s("img",{attrs:{src:i.bgicon,alt:""}})]),t._v(" "),s("div",{staticClass:"medicalcontenttext"},[t._v(t._s(i.text))])])}),t._v(" "),s("div",{staticClass:"medicalcontentline"})],2),t._v(" "),s("div",{staticClass:"medicalcontentgene"},[t._v(t._s(t.$t("m.medical.gene")))]),t._v(" "),s("medical-nav-item",{attrs:{tst:t.tst1}}),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"medical__enginery"},[s("div",{staticClass:"medical__enginery__text"},[t._v(t._s(t.$t("m.medical.enginery")))]),t._v(" "),s("div",{staticClass:"medical__enginery__desc"},[t._v(t._s(t.$t("m.medical.purify")))])]),t._v(" "),s("div",{staticClass:"medical__exp"},[s("div",{staticClass:"medical__exp__title"},[t._v(t._s(t.$t("m.medical.exp")))]),t._v(" "),s("div",{staticClass:"medical__exp__desc"},[t._v(t._s(t.$t("m.medical.expdesc")))])]),t._v(" "),s("medical-nav-item",{attrs:{tst:t.tst2}}),t._v(" "),s("div",{staticClass:"medical__repair"},[t._v("\n       "+t._s(t.$t("m.medical.repair"))+"\n     ")]),t._v(" "),s("div",{staticClass:"medical__swot"},[t._l(t.swotlist,function(i){return s("div",{key:i.key,staticClass:"medical__swot__box"},[s("div",{staticClass:"medical__swot__box__content",style:i.descborder},[s("div",{staticClass:"medical__swot__box__title",style:i.bgc},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"medical__swot__box__desc"},[t._v(t._s(i.desc))])])])}),t._v(" "),s("div",{staticClass:"medical__swot__logo"},[t._v("\n         SWOT\n       ")])],2),t._v(" "),s("medical-nav-item",{attrs:{tst:t.tst3}}),t._v(" "),s("div",{staticClass:"medical__aging"},t._l(t.aginglist,function(i){return s("div",{key:i.key,staticClass:"medical__aging__desc"},[s("div",{staticClass:"medical__aging__desc_point"}),s("div",[t._v(t._s(i.text))]),i.price?s("div",{style:i.color},[t._v(t._s(i.price))]):t._e()])}))],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("img",{attrs:{src:"https://index.cuican520.com/medicalbanner.png",alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"medicalrecuperation"},[i("div",{staticClass:"medicalrecuperationleftimg"}),this._v(" "),i("div",{staticClass:"medicalrecuperationrightimg"})])}]};var n=s("C7Lr")(e,a,!1,function(t){s("3Bxj")},"data-v-7a3da9f9",null);i.default=n.exports},EjvP:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"brand",data:function(){return{brand:{},t:[],part2:"",part3:"",cuicanApp:[]}},components:{brandTitleItem:s("S0di").default},created:function(){this.brand=this.$t("m.brand"),this.part2=this.$t("m.brand.brand__origin.part2"),this.part3=this.$t("m.brand.brand__origin.part3");for(var t=this.brand.brand__title,i=0;i<t.length;i++)this.t.push(t[i].title);for(var s=this.brand.cuicanApp,e=0;e<s.length;e++)this.cuicanApp.push(s[e].text)},updated:function(){this.brand=this.$t("m.brand"),this.part2=this.$t("m.brand.brand__origin.part2"),this.part3=this.$t("m.brand.brand__origin.part3");for(var t=this.brand.brand__title,i=0;i<t.length;i++)this.t.push(t[i].title);for(var s=this.brand.cuicanApp,e=0;e<s.length;e++)this.cuicanApp.push(s[e].text)},methods:{}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"brand"},[s("div",{staticClass:"brand__banner"},[s("div",{staticClass:"brand__banner__box"},[s("div",{staticClass:"brand__banner__box__title"},[t._v(t._s(t.$t("m.brand.banner__title")))]),t._v(" "),s("div",{staticClass:"brand__banner__box__desc"},[t._v(t._s(t.$t("m.brand.banner__desc")))])]),t._v(" "),s("div",{staticClass:"brand__banner__square"})]),t._v(" "),s("brand-title-item",{attrs:{title:t.t[0]}}),t._v(" "),s("div",{staticClass:"brand__origin"},[s("div",{staticClass:"brand__origin__box"},[t._m(0),t._v(" "),s("div",{staticClass:"brand__origin__box__part2"},[t._v(t._s(t.part2))]),t._v(" "),s("div",{staticClass:"brand__origin__box__part3"},[s("div",{staticClass:"brand__origin__box__part3__info"},[t._v(t._s(t.part3))]),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"brand__origin__line"})]),t._v(" "),s("brand-title-item",{attrs:{title:t.t[1]}}),t._v(" "),s("div",{staticClass:"brand__cuicanApp"},[t._l(t.cuicanApp,function(i){return s("div",{key:i.key},[t._v(t._s(i))])}),t._v(" "),s("div",{staticClass:"brand__cuicanApp__code2"},[s("div",{staticStyle:{display:"inline-block"}},[s("img",{attrs:{src:"https://index.cuican520.com/code2.png",alt:""}}),t._v(" "),s("div",{staticClass:"brand__cuicanApp__code2__scanme"},[t._v(t._s(t.$t("m.brand.scanme")))])])])],2)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"brand__origin__box__part1"},[i("img",{attrs:{src:"https://index.cuican520.com/brand1.png",alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"brand__origin__box__part3__img"},[i("img",{attrs:{src:"https://index.cuican520.com/brand2.png",alt:""}})])}]};var n=s("C7Lr")(e,a,!1,function(t){s("WJii")},"data-v-e3499b34",null);i.default=n.exports},"F3+O":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={data:function(){return{}},props:{tst:String}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"medicalnavitem"},[i("div",{staticClass:"medicalnavitem_text"},[this._v(this._s(this.tst))])])},staticRenderFns:[]};var n=s("C7Lr")(e,a,!1,function(t){s("XW+9")},"data-v-3de1f1df",null);i.default=n.exports},G4J4:function(t,i){},ITGQ:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("gwl6"),a=s("edI4"),n={name:"copyright",data:function(){return{copyrightlist:[],title:"",othertitle:""}},components:{titleItem:e.default,wordItem:a.default},created:function(){this.title=this.$t("m.copyright.title"),this.othertitle=this.$t("m.copyright.othertitle"),this.copyrightlist=this.$t("m.copyright.copyrightlist")},updated:function(){this.title=this.$t("m.copyright.title"),this.othertitle=this.$t("m.copyright.othertitle"),this.copyrightlist=this.$t("m.copyright.copyrightlist")}},c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"copyright"},[i("title-item",{attrs:{title:this.title}}),this._v(" "),i("word-item",{attrs:{othertitle:this.othertitle,list:this.copyrightlist}})],1)},staticRenderFns:[]};var _=s("C7Lr")(n,c,!1,function(t){s("JdDc")},"data-v-6d00e106",null);i.default=_.exports},JdDc:function(t,i){},KziX:function(t,i){},Nqcv:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"gelatin",data:function(){return{title:[],materiel:[]}},components:{consultTitleItem:s("8wdT").default},created:function(){this.title=this.$t("m.product.productshowarray").gelatin__title;var t=this.$t("m.product.productshowarray").materiel[0].children;for(var i in t)this.materiel.push(t[i])},updated:function(){this.title=this.$t("m.product.productshowarray").gelatin__title;var t=this.$t("m.product.productshowarray").materiel[0].children;for(var i in t)this.materiel.push(t[i])},methods:{}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"gelatin"},[t._m(0),t._v(" "),s("div",{staticClass:"gelatin__content"},[s("consult-title-item",{attrs:{title:t.title[0]}}),t._v(" "),s("div",{staticClass:"mod1"},[s("div",{staticClass:"mod1__title"},[t._v(t._s(t.materiel[0].title))]),t._v(" "),s("div",{staticClass:"consult__content__advantage"},t._l(t.materiel[0].list,function(i){return s("div",{key:i.key,staticClass:"consult__content__advantage__box"},[s("div",[s("div",{staticClass:"consult__content__advantage__box__title"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"consult__content__advantage__box__text"},[t._v(t._s(i.desc))])])])}))]),t._v(" "),s("consult-title-item",{attrs:{title:t.title[1]}}),t._v(" "),s("div",{staticClass:"mod2"},t._l(t.materiel[1],function(i){return s("div",{key:i.key,staticClass:"mod2__img"},[s("img",{attrs:{src:i.img,alt:""}}),t._v(" "),s("div",[t._v(t._s(i.title))])])})),t._v(" "),s("consult-title-item",{attrs:{title:t.title[2]}}),t._v(" "),s("div",{staticClass:"mod3"},t._l(t.materiel[2],function(t){return s("div",{key:t.key,staticClass:"mod3__img"},[s("img",{attrs:{src:t.img,alt:""}})])})),t._v(" "),s("consult-title-item",{attrs:{title:t.title[3]}}),t._v(" "),s("div",{staticClass:"mod4"},t._l(t.materiel[3],function(t){return s("div",{key:t.key,staticClass:"mod4__img"},[s("img",{attrs:{src:t.img,alt:""}})])})),t._v(" "),s("consult-title-item",{attrs:{title:t.title[4]}}),t._v(" "),s("div",{staticClass:"mod5"},t._l(t.materiel[4],function(i){return s("div",{key:i.key,staticClass:"mod5__img"},[s("img",{attrs:{src:i.img,alt:""}}),t._v(" "),s("div",[t._v(t._s(i.title))])])})),t._v(" "),s("consult-title-item",{attrs:{title:t.title[5]}}),t._v(" "),s("div",{staticClass:"mod6"},t._l(t.materiel[5],function(t){return s("div",{key:t.key,staticClass:"mod6__img"},[s("img",{attrs:{src:t.img,alt:""}})])})),t._v(" "),s("consult-title-item",{attrs:{title:t.title[6]}}),t._v(" "),s("div",{staticClass:"mod7"},t._l(t.materiel[6],function(t){return s("div",{key:t.key,staticClass:"mod7__img"},[s("img",{attrs:{src:t.img,alt:""}})])}))],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"gelatin__banner"},[i("img",{attrs:{src:"https://index.cuican520.com/gelatin__banner.png",alt:""}})])}]};var n=s("C7Lr")(e,a,!1,function(t){s("G4J4")},"data-v-c96b14da",null);i.default=n.exports},Q0dR:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"consult",data:function(){return{consult__titlt__list:[],t:[],newcastleimglist:[],showStrength:[],advantage:[]}},components:{consultTitleItem:s("8wdT").default},updated:function(){this.consult__titlt__list=this.$t("m.consult.consult_title_list");for(var t=0;t<this.consult__titlt__list.length;t++)this.t.push(this.consult__titlt__list[t].text);this.newcastleimglist=this.$t("m.consult.newcastleimglist"),this.showStrength=this.$t("m.consult.showStrength"),this.advantage=this.$t("m.consult.advantage")},created:function(){this.consult__titlt__list=this.$t("m.consult.consult_title_list");for(var t=0;t<this.consult__titlt__list.length;t++)this.t.push(this.consult__titlt__list[t].text);this.newcastleimglist=this.$t("m.consult.newcastleimglist"),this.showStrength=this.$t("m.consult.showStrength"),this.advantage=this.$t("m.consult.advantage")},methods:{}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"consult"},[t._m(0),t._v(" "),s("div",{staticClass:"consult__content"},[s("consult-title-item",{attrs:{title:t.t[0]}}),t._v(" "),s("div",{staticClass:"consult__content__produce"},[s("span",{staticStyle:{color:"red"}},[t._v(t._s(t.$t("m.consult.immigrantproduce1")))]),t._v(" "),s("span",[t._v(t._s(t.$t("m.consult.immigrantproduce2")))]),t._v(" "),s("span",{staticStyle:{color:"red"}},[t._v(t._s(t.$t("m.consult.immigrantproduce3")))]),t._v(" "),s("span",[t._v(t._s(t.$t("m.consult.immigrantproduce4")))]),t._v(" "),s("span",{staticStyle:{color:"red"}},[t._v(t._s(t.$t("m.consult.immigrantproduce5")))]),t._v(" "),s("span",[t._v(t._s(t.$t("m.consult.immigrantproduce6")))])]),t._v(" "),s("consult-title-item",{attrs:{title:t.t[1]}}),t._v(" "),s("div",{staticClass:"consult__content__germany"},[s("div",{staticClass:"whycheckGermany1"},[t._v(t._s(t.$t("m.consult.whycheckGermany1")))]),t._v(" "),s("div",{staticClass:"whycheckGermany2"},[t._v(t._s(t.$t("m.consult.whycheckGermany2")))])]),t._v(" "),s("consult-title-item",{attrs:{title:t.t[2]}}),t._v(" "),s("div",{staticClass:"consult__content__invest"},[s("div",{staticClass:"consult__content__invest__info"},[t._v(t._s(t.$t("m.consult.newcastle")))]),t._v(" "),s("div",{staticClass:"consult__content__invest__imglist"},[s("div",{staticClass:"consult__content__invest__imglist__item"},t._l(t.newcastleimglist,function(i,e){return e<2?s("div",{key:i.key},[s("img",{attrs:{src:i.img,alt:""}}),t._v(" "),s("div",{staticClass:"consult__content__invest__imglist__item__desc"},[s("div",[t._v(t._s(i.desc))])])]):t._e()})),t._v(" "),s("div",{staticClass:"consult__content__invest__imglist__item"},t._l(t.newcastleimglist,function(i,e){return e>=2?s("div",{key:i.key},[s("img",{attrs:{src:i.img,alt:""}})]):t._e()}))])]),t._v(" "),s("consult-title-item",{attrs:{title:t.t[3]}}),t._v(" "),s("div",{staticClass:"consult__content__flow"},[t._v("\n      "+t._s(t.$t("m.consult.flow"))+"\n    ")]),t._v(" "),s("consult-title-item",{attrs:{title:t.t[4]}}),t._v(" "),s("div",{staticClass:"consult__content__showStrength"},[s("div",{staticClass:"consult__content__showStrength__box"},t._l(t.showStrength,function(i,e){return e%2==0?s("div",{key:i.key,staticClass:"consult__content__showStrength__box__position"},[s("div",{staticClass:"consult__content__showStrength__box__position__border"},[s("div",{staticClass:"consult__content__showStrength__box__position__border__title"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"consult__content__showStrength__box__position__border__desc"},[t._v(t._s(i.desc))])]),t._v(" "),s("div",{staticClass:"consult__content__showStrength__box__position__img"},[s("img",{attrs:{src:i.img,alt:""}})])]):t._e()})),t._v(" "),s("div",{staticClass:"consult__content__showStrength__box"},t._l(t.showStrength,function(i,e){return e%2!=0?s("div",{key:i.key,staticClass:"consult__content__showStrength__box__position"},[s("div",{staticClass:"consult__content__showStrength__box__position__border"},[s("div",{staticClass:"consult__content__showStrength__box__position__border__title"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"consult__content__showStrength__box__position__border__desc"},[t._v(t._s(i.desc))])]),t._v(" "),s("div",{staticClass:"consult__content__showStrength__box__position__img"},[s("img",{attrs:{src:i.img,alt:""}})])]):t._e()}))]),t._v(" "),s("consult-title-item",{attrs:{title:t.t[5]}}),t._v(" "),s("div",{staticClass:"consult__content__advantage"},t._l(t.advantage,function(i){return s("div",{key:i.key,staticClass:"consult__content__advantage__box"},[s("div",[s("div",{staticClass:"consult__content__advantage__box__title"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"consult__content__advantage__box__text"},[t._v(t._s(i.text))])])])})),t._v(" "),s("div",{staticClass:"consult__content__mark"},[t._v("\n        "+t._s(t.$t("m.consult.mark"))+"\n      ")])],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"consult__banner"},[i("img",{attrs:{src:"https://index.cuican520.com/consultbanner.png",alt:""}})])}]};var n=s("C7Lr")(e,a,!1,function(t){s("s2SY")},"data-v-199b22a8",null);i.default=n.exports},Qt9A:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"sclbanner",on:{click:function(i){t.naveto("brand")}}},[s("img",{attrs:{src:"https://index.cuican520.com/banner.png",alt:""}})]),t._v(" "),s("div",{staticClass:"contentbox"},[s("div",{staticClass:"news"},[t._v(t._s(t.$t("m.news")))]),t._v(" "),s("div",{staticClass:"probox"},t._l(t.menulist,function(i){return s("div",{key:i.key,staticClass:"pro"},[s("div",{staticClass:"protitle",on:{click:function(s){t.naveto(i.path)}}},[s("div",{staticClass:"pointfront"},[s("div",{staticClass:"proline"}),t._v(" "),s("div",{staticClass:"protext"},[t._v(t._s(i.title))])]),t._v(" "),s("div",{staticClass:"proicon"},[t._v(">>")])]),t._v(" "),s("div",{staticClass:"prodesc"},[t._v("\n          "+t._s(i.desc)+"\n        ")]),t._v(" "),s("div",{staticClass:"proimg"},[s("img",{attrs:{src:i.images,alt:""}}),t._v(" "),s("div",{staticClass:"proimgline"})])])}))])])},staticRenderFns:[]};var a=s("C7Lr")({name:"xxx",data:function(){return{menulist:""}},computed:{},created:function(){this.menulist=this.$t("m.area1")},updated:function(){this.menulist=this.$t("m.area1")},methods:{naveto:function(t){this.$router.push({path:t})}}},e,!1,function(t){s("vWkC")},"data-v-da0ba27a",null);i.default=a.exports},S0di:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"brandtitleitem",data:function(){return{}},props:{title:String},mounted:function(){}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"titleitem"},[i("div",{staticClass:"titleitem_head"},[i("div",{staticClass:"titleitem_head_title"},[this._v(this._s(this.title))])])])},staticRenderFns:[]};var n=s("C7Lr")(e,a,!1,function(t){s("r4G3")},"data-v-57f6c690",null);i.default=n.exports},WJii:function(t,i){},"XW+9":function(t,i){},bhns:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("gwl6"),a=s("edI4"),n={name:"dota",data:function(){return{datalist:[],title:"",othertitle:""}},components:{titleItem:e.default,wordItem:a.default},updated:function(){this.title=this.$t("m.data.title"),this.othertitle=this.$t("m.data.othertitle"),this.datalist=this.$t("m.data.datalist")},created:function(){this.title=this.$t("m.data.title"),this.othertitle=this.$t("m.data.othertitle"),this.datalist=this.$t("m.data.datalist")}},c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"data"},[i("title-item",{attrs:{title:this.title}}),this._v(" "),i("word-item",{attrs:{othertitle:this.othertitle,list:this.datalist}})],1)},staticRenderFns:[]};var _=s("C7Lr")(n,c,!1,function(t){s("gf6q")},"data-v-304870b0",null);i.default=_.exports},bjIt:function(t,i){},bznk:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"service"},[s("div",{staticClass:"content"},[s("div",{staticClass:"service_title"},[t._v(t._s(t.$t("m.service.title")))]),t._v(" "),t._l(t.servicelist,function(i){return s("div",{key:i.key,staticClass:"service_moudle"},[i.id%2==1?s("div",{staticClass:"mdeven"},[s("div",{staticClass:"leftmd"}),t._v(" "),s("div",{staticClass:"rightmd"},[s("div",{staticClass:"serviceid"},[t._v("0"+t._s(i.id))]),t._v(" "),s("div",{staticClass:"servicetext"},[t._v(t._s(i.text))]),t._v(" "),s("div",{staticClass:"servicedesc"},[t._v(t._s(i.desc))]),t._v(" "),i.desc2?s("div",{staticClass:"servicedesc"},[t._v(t._s(i.desc2))]):t._e(),t._v(" "),s("div",{staticClass:"servicemore",on:{click:function(s){t.naveto(i.path)}}},[t._v(t._s(t.$t("m.service.more")))])])]):t._e(),t._v(" "),i.id%2==0?s("div",{staticClass:"mdodd"},[s("div",{staticClass:"leftmd"},[s("div",{staticClass:"serviceid"},[t._v("0"+t._s(i.id))]),t._v(" "),s("div",{staticClass:"servicetext"},[t._v(t._s(i.text))]),t._v(" "),s("div",{staticClass:"servicedesc"},[t._v(t._s(i.desc))]),t._v(" "),s("div",{staticClass:"servicemore",on:{click:function(s){t.naveto(i.path)}}},[t._v(t._s(t.$t("m.service.more")))])]),t._v(" "),s("div",{staticClass:"rightmd"})]):t._e()])})],2)])},staticRenderFns:[]};var a=s("C7Lr")({name:"service",data:function(){return{servicelist:""}},created:function(){this.servicelist=this.$t("m.service.servicelist")},updated:function(){this.servicelist=this.$t("m.service.servicelist")},methods:{naveto:function(t){this.$router.push({path:t})}}},e,!1,function(t){s("bjIt")},"data-v-17c48192",null);i.default=a.exports},cbfe:function(t,i){},cue3:function(t,i){},eMhh:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"brand"},[s("div",{staticClass:"brand__banner"},[s("div",{staticClass:"brand__banner__box"},[s("div",{staticClass:"brand__banner__box__title"},[t._v(t._s(t.$t("m.brand.banner__title")))])]),t._v(" "),s("div",{staticClass:"brand__banner__square"})]),t._v(" "),s("div",{staticClass:"brand__content"},[s("div",{staticClass:"brand__content__box"},[s("div",{staticClass:"brand__content__box__leftpart"},[t._m(0),t._v(" "),s("div",{staticClass:"leftpart__desc"},[t._v(t._s(t.part2))]),t._v(" "),s("div",{staticStyle:{"margin-top":"34px"}},[s("div",{staticClass:"brand__cuicanApp__code2"},[s("div",{staticStyle:{display:"inline-block"}},[s("img",{attrs:{src:"https://index.cuican520.com/code2.png",alt:""}}),t._v(" "),s("div",{staticClass:"brand__cuicanApp__code2__scanme"},[t._v(t._s(t.$t("m.brand.scanme")))])])])])]),t._v(" "),s("div",{staticClass:"brand__content__box__rightpart"},[s("div",[s("div",{staticClass:"rightpart__title"},[t._v(t._s(t.t[0]))]),t._v(" "),s("div",{staticClass:"rightpart__desc"},[t._v(t._s(t.$t("m.brand.banner__desc")))])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"rightpart__info"},[s("div",{staticClass:"rightpart__title"},[t._v(t._s(t.t[1]))]),t._v(" "),t._l(t.cuicanApp,function(i){return s("div",{key:i.key,staticClass:"rightpart__info__desc"},[t._v(t._s(i))])})],2)])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"leftpart__img"},[i("img",{attrs:{src:"https://index.cuican520.com/brand__b1.png",alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("img",{attrs:{src:"https://index.cuican520.com/brand__b2.png",alt:""}})])}]};var a=s("C7Lr")({name:"brand",data:function(){return{brand:{},t:[],part2:"",part3:"",cuicanApp:[]}},created:function(){this.brand=this.$t("m.brand"),this.part2=this.$t("m.brand.brand__origin.part2"),this.part3=this.$t("m.brand.brand__origin.part3");for(var t=this.brand.brand__title,i=0;i<t.length;i++)this.t.push(t[i].title);for(var s=this.brand.cuicanApp,e=0;e<s.length;e++)this.cuicanApp.push(s[e].text)},updated:function(){this.brand=this.$t("m.brand"),this.part2=this.$t("m.brand.brand__origin.part2"),this.part3=this.$t("m.brand.brand__origin.part3");for(var t=this.brand.brand__title,i=0;i<t.length;i++)this.t.push(t[i].title);for(var s=this.brand.cuicanApp,e=0;e<s.length;e++)this.cuicanApp.push(s[e].text)},methods:{}},e,!1,function(t){s("3cPI")},"data-v-89e5dd8a",null);i.default=a.exports},edI4:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"worditem",data:function(){return{}},props:{list:Array,othertitle:String},mounted:function(){}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"worditem"},[s("div",{staticClass:"worditem_box"},[s("div",{staticClass:"worditem_box_ohtertitle"},[t._v(" "+t._s(t.othertitle))]),t._v(" "),t._l(t.list,function(i){return s("div",{key:i.key,staticClass:"worditem_info"},[void 0===i.title?s("div",[s("span",{staticClass:"worditem_no"},[t._v(t._s(i.id)+".  ")]),t._v(t._s(i.text))]):t._e(),t._v(" "),void 0!==i.title?s("div",[s("div",{staticClass:"worditem_no"},[t._v(t._s(i.title)+".  ")]),s("div",{staticClass:"worditem_info_text"},[t._v(t._s(i.text))])]):t._e()])})],2)])},staticRenderFns:[]};var n=s("C7Lr")(e,a,!1,function(t){s("gUlP")},"data-v-6624ba7c",null);i.default=n.exports},etXi:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"skill"},[s("div",{staticClass:"skill__banner"},[s("div",{staticClass:"skill__banner__title"},[t._v(t._s(t.skill.title))])]),t._v(" "),s("div",{staticClass:"skill__content"},[s("div",{staticClass:"skill__content__desc"},[t._v(t._s(t.skill.desc.title))]),t._v(" "),s("ul",{staticClass:"skill__content__list"},t._l(t.skill.desc.list,function(i){return s("li",{key:i.key},[t._v("\n        "+t._s(i.text)+"\n      ")])})),t._v(" "),s("div",{staticClass:"overseas"},[s("div",{staticClass:"overseas__title"},[t._v(t._s(t.skill.overseas.title))]),t._v(" "),s("div",{staticClass:"overseas__desc"},[t._v(t._s(t.skill.overseas.desc))]),t._v(" "),s("div",{staticClass:"overseas__service"},[t._v(t._s(t.skill.overseas.service))]),t._v(" "),s("ol",{staticClass:"overseas__list"},t._l(t.skill.overseas.list,function(i){return s("li",{key:i.key},[t._v("\n          "+t._s(i.text)+"\n        ")])}))])])])},staticRenderFns:[]};var a=s("C7Lr")({name:"skill",data:function(){return{skill:""}},created:function(){this.skill=this.$t("m.skill")},updated:function(){this.skill=this.$t("m.skill")},methods:{}},e,!1,function(t){s("cue3")},"data-v-6d60f37e",null);i.default=a.exports},ezFu:function(t,i){},gUlP:function(t,i){},gf6q:function(t,i){},gwl6:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"titleitem",data:function(){return{}},props:{title:String},mounted:function(){}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"titleitem"},[i("div",{staticClass:"titleitem_head"},[i("div",{staticClass:"titleitem_head_title"},[this._v(this._s(this.title))])])])},staticRenderFns:[]};var n=s("C7Lr")(e,a,!1,function(t){s("ezFu")},"data-v-7724b806",null);i.default=n.exports},hgdI:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"friends",data:function(){return{friendslist:"",title:""}},components:{titleItem:s("gwl6").default},updated:function(){this.title=this.$t("m.friends.title"),this.friendslist=this.$t("m.friends.friendslist")},created:function(){this.title=this.$t("m.friends.title"),this.friendslist=this.$t("m.friends.friendslist")}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"friends"},[i("title-item",{attrs:{title:this.title}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("div",[this._v("上海极朗实业有限公司")])])}]};var n=s("C7Lr")(e,a,!1,function(t){s("KziX")},"data-v-19a5ee20",null);i.default=n.exports},jSrs:function(t,i){},r4G3:function(t,i){},rtwt:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"itempanel",data:function(){return{}},props:{list:Array},mounted:function(){console.log(this.list)}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"item"},t._l(t.list,function(i){return s("div",{key:i.key,staticClass:"item__panel"},[s("div",{staticClass:"item__panel__title"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"item__panel__content"},[""===i.showimg?s("div",{staticClass:"item__panel__content__img"},[s("div",{staticClass:"item__panel__content__img__top"},[s("img",{attrs:{src:i.imglist[0],alt:""}}),t._v(" "),""!==i.hasstyle?s("img",{style:i.hasstyle,attrs:{src:i.imglist[1],alt:""}}):t._e()]),t._v(" "),s("div",{staticClass:"item__panel__content__img__bottom"},[s("img",{attrs:{src:i.imglist[2],alt:""}})])]):t._e(),t._v(" "),""!==i.showimg?s("div",{staticClass:"item__panel__content__img"},[s("div",{staticClass:"item__panel__content__img__showimg"},[s("img",{attrs:{src:i.showimg,alt:""}})]),t._v(" "),""!==i.showimg2?s("div",{staticClass:"item__panel__content__img__showimg2"},[s("img",{attrs:{src:i.showimg2,alt:""}})]):t._e()]):t._e(),t._v(" "),s("div",{staticClass:"item__panel__content__info"},[t._v(t._s(i.desc))])])])}))},staticRenderFns:[]};var n=s("C7Lr")(e,a,!1,function(t){s("0nyg")},"data-v-1965a0af",null);i.default=n.exports},s2SY:function(t,i){},taF9:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"product"},[s("div",{staticClass:"producttypes"},[s("div",{staticClass:"product_types_title"},[t._v(t._s(t.$t("m.product.producttype")))]),t._v(" "),s("div",{staticClass:"product_types_line"}),t._v(" "),s("div",{staticClass:"product_types_group"},t._l(t.productlist,function(i,e){return s("div",{key:i.key,staticClass:"product_types_item",class:{active:t.ind===e},on:{click:function(i){t.changeproduct(e)}}},[s("div",[t._v(t._s(i.text))])])})),t._v(" "),s("div",{staticClass:"product_types_title"},[t._v(t._s(t.$t("m.product.productshow")))]),t._v(" "),s("div",{staticClass:"product_types_line"}),t._v(" "),s("div",{staticClass:"productShow"},t._l(t.productshowlist,function(i,e){return s("div",{key:i.key,staticClass:"productshowgroup"},[s("div",{staticClass:"productshowitem",class:{active:t.proind===e},on:{click:function(i){t.changeproduc(e)}}},[s("img",{attrs:{src:i.images,alt:""}}),t._v(" "),s("div",{staticClass:"productshowtext",on:{click:function(s){t.navto(i.path,i.id)}}},[t._v(t._s(i.text))])])])}))])])},staticRenderFns:[]};var a=s("C7Lr")({name:"product",data:function(){return{productlist:"",ind:0,productshowlist:[],proind:0}},created:function(){this.productlist=this.$t("m.product.productlist"),this.changeproduct(0)},updated:function(){this.productlist=this.$t("m.product.productlist")},methods:{changeproduct:function(t){switch(t){case 0:this.productshowlist=this.$t("m.product.productshowarray").materiel;break;case 1:this.productshowlist=this.$t("m.product.productshowarray").germanybrand;break;case 2:this.productshowlist=this.$t("m.product.productshowarray").mybrand}this.ind=t},changeproduc:function(t){this.proind=t},navto:function(t,i){this.$router.push({path:t,query:{id:i}})}}},e,!1,function(t){s("/8Br")},"data-v-b4f7c654",null);i.default=a.exports},vWkC:function(t,i){},veKa:function(t,i){},xLcW:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"contact"},[s("div",{staticClass:"lineone"}),t._v(" "),s("div",{staticClass:"contact_box"},[s("div",{staticClass:"contact_title"},[s("div",{staticClass:"contact_text"},[t._v(t._s(t.$t("m.contact.title")))]),t._v(" "),s("div",{staticClass:"block blockone"}),t._v(" "),s("div",{staticClass:"block blocktwo"})])])]),t._v(" "),s("div",{staticClass:"contact_type"},t._l(t.contacttype,function(i){return s("div",{key:i.key,staticClass:"contact_type_box"},[s("div",{staticClass:"contact_type_content"},[s("div",[t._v(t._s(i.title)+":")]),t._v(" "),s("div",[t._v(t._s(i.content))])])])}))])},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"contact_banner"},[s("img",{attrs:{src:"https://index.cuican520.com/contact.png",alt:""}}),t._v(" "),s("div",{staticClass:"contact_info"},[s("div",{staticClass:"contact_info_left"},[s("div",{staticClass:"contact_info_left_title_one"},[t._v("CONTACT  US")]),t._v(" "),s("div",{staticClass:"contact_info_left_title_two"},[t._v("STRAHLEND")])]),t._v(" "),s("div",{staticClass:"contact_info_line"}),t._v(" "),s("div",{staticClass:"contact_info_right"},[t._v("\n        strong technical force\n        "),s("br"),t._v("\n        Advanced equipment\n        "),s("br"),t._v("\n        Strict quality management system\n        "),s("br"),t._v("\n        Professional services\n        "),s("br"),t._v("\n        competitive price\n      ")])])])}]};var a=s("C7Lr")({name:"contact",data:function(){return{contacttype:""}},updated:function(){this.contacttype=this.$t("m.contact.contacttype")},created:function(){this.contacttype=this.$t("m.contact.contacttype")}},e,!1,function(t){s("jSrs")},"data-v-94f1282a",null);i.default=a.exports},xxzw:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("ul",[i("li",[this._v("item1")]),i("li",[this._v("item2")]),i("li",[this._v("item3")]),i("div",{staticStyle:{color:"red"},attrs:{id:"shaprt"}},[this._v("hello vue "+this._s(this.name))]),i("div",{staticClass:"btn btn__icon btn__text btn__icon__success"},[this._v("hello")])])},staticRenderFns:[]};var a=s("C7Lr")({name:"demo",data:function(){return{name:"lol",list:[{title:"first title"},{title:"sec title"},{title:"thrid title"}]}}},e,!1,function(t){s("cbfe")},"data-v-91e92102",null);i.default=a.exports},ypod:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"watch",data:function(){return{list:[]}},components:{watchItem:s("rtwt").default},created:function(){var t=this.$route.query.id;console.log(t),this.list=this.$t("m.product.productshowarray.germanybrand["+t+"].children")},updated:function(){var t=this.$route.query.id;console.log(t),this.list=this.$t("m.product.productshowarray.germanybrand["+t+"].children")},methods:{}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"panel"},[i("watch-item",{attrs:{list:this.list}})],1)},staticRenderFns:[]};var n=s("C7Lr")(e,a,!1,function(t){s("5GVj")},"data-v-04545ac2",null);i.default=n.exports}});
//# sourceMappingURL=0.71be7ae452aaa8341b6b.js.map