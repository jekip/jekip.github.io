var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,i=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&s(e,o,t[o]);if(r)for(var o of r(t))n.call(t,o)&&s(e,o,t[o]);return e},l=(e,r)=>t(e,o(r)),c=(e,t,o)=>new Promise(((r,a)=>{var n=e=>{try{i(o.next(e))}catch(t){a(t)}},s=e=>{try{i(o.throw(e))}catch(t){a(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(n,s);i((o=o.apply(e,t)).next())}));import{d as u,p as m,a as d,o as p,c as h,b as g,t as f,F as _,r as b,w as v,v as T,e as y,f as E,g as k,h as L,i as R,j as O,k as S,l as I,m as w,E as P,n as A,q as D,s as M,N as C,W as x,D as j,u as U,P as N,T as V,C as B,S as G,O as $,x as q,y as F,z,A as H,B as K,G as W,L as Y,H as X,U as Z,I as J,J as Q,K as ee,M as te,Q as oe,R as re,V as ae,X as ne,Y as se,Z as ie,_ as le,$ as ce,a0 as ue,a1 as me,a2 as de,a3 as pe,a4 as he,a5 as ge,a6 as fe,a7 as _e,a8 as be,a9 as ve,aa as Te,ab as ye,ac as Ee,ad as ke,ae as Le,af as Re,ag as Oe,ah as Se,ai as Ie,aj as we,ak as Pe,al as Ae,am as De,an as Me,ao as Ce,ap as xe,aq as je,ar as Ue,as as Ne,at as Ve,au as Be,av as Ge,aw as $e,ax as qe,ay as Fe,az as ze,aA as He,aB as Ke,aC as We,aD as Ye,aE as Xe,aF as Ze,aG as Je,aH as Qe,aI as et,aJ as tt,aK as ot,aL as rt,aM as at,aN as nt,aO as st,aP as it,aQ as lt,aR as ct,aS as ut,aT as mt,aU as dt,aV as pt,aW as ht,aX as gt,aY as ft,aZ as _t,a_ as bt,a$ as vt,b0 as Tt,b1 as yt,b2 as Et,b3 as kt,b4 as Lt,b5 as Rt,b6 as Ot,b7 as St,b8 as It,b9 as wt,ba as Pt}from"./vendor.af0afcfa.js";var At,Dt,Mt,Ct,xt,jt;(Dt=At||(At={}))[Dt.SUCCESS=200]="SUCCESS",Dt[Dt.ERROR=-1]="ERROR",Dt[Dt.TIMEOUT=10042]="TIMEOUT",Dt.TYPE="success",(Ct=Mt||(Mt={})).GET="GET",Ct.POST="POST",Ct.PATCH="PATCH",Ct.PUT="PUT",Ct.DELETE="DELETE",(jt=xt||(xt={})).JSON="application/json;charset=UTF-8",jt.TEXT="text/plain;charset=UTF-8",jt.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",jt.FORM_DATA="multipart/form-data;charset=UTF-8";var Ut=u({name:"HuaweiCharge",props:{battery:{type:Object,default:()=>({})},calcDischargingTime:{type:String,default:""},batteryStatus:{type:String,validator:e=>["充电中","已充满","已断开电源"].includes(e)}}});const Nt=y();m("data-v-578dc66e");const Vt={class:"container"},Bt={class:"number"},Gt={class:"contrast"},$t=g("div",{class:"circle"},null,-1),qt={class:"bubbles"},Ft={class:"charging"};d();const zt=Nt(((e,t,o,r,a,n)=>(p(),h("div",Vt,[g("div",Bt,f(e.battery.level)+"%",1),g("div",Gt,[$t,g("ul",qt,[(p(),h(_,null,b(15,(e=>g("li",{key:e}))),64))])]),g("div",Ft,[g("div",null,f(e.batteryStatus),1),v(g("div",null," 剩余可使用时间："+f(e.calcDischargingTime),513),[[T,Number.isFinite(e.battery.dischargingTime)&&0!=e.battery.dischargingTime]]),v(g("span",null," 距离电池充满需要："+f(e.calcDischargingTime),513),[[T,Number.isFinite(e.battery.chargingTime)&&0!=e.battery.chargingTime]])])]))));Ut.render=zt,Ut.__scopeId="data-v-578dc66e";const Ht=()=>{const e=O({battery:{charging:!1,chargingTime:0,dischargingTime:0,level:100}}),t=t=>{for(const o in e.battery)e.battery[o]=t[o];e.battery.level=100*e.battery.level},o=S((()=>`${~~(e.battery.dischargingTime/3600)}小时${~~(e.battery.dischargingTime/60%60)}分钟`)),r=S((()=>e.battery.charging&&e.battery.level>=100?"已充满":e.battery.charging?"充电中":"已断开电源"));return k((()=>c(this,null,(function*(){const e=yield window.navigator.getBattery();t(e),e.onchargingchange=({target:e})=>{t(e)},e.onchargingtimechange=({target:e})=>{t(e)},e.ondischargingtimechange=({target:e})=>{t(e)},e.onlevelchange=({target:e})=>{t(e)}})))),l(i({},R(e)),{batteryStatus:r,calcDischargingTime:o})},Kt="Tabs-Routes",Wt=({prefixKey:e="",storage:t=localStorage}={})=>new class{constructor(){this.storage=t,this.prefixKey=e}getKey(e){return`${this.prefixKey}${e}`.toUpperCase()}set(e,t,o=604800){const r=JSON.stringify({value:t,expire:null!==o?(new Date).getTime()+1e3*o:null});this.storage.setItem(this.getKey(e),r)}get(e,t=null){const o=this.storage.getItem(this.getKey(e));if(o)try{const t=JSON.parse(o),{value:r,expire:a}=t;if(null===a||a>=Date.now())return r;this.remove(this.getKey(e))}catch(r){return t}return t}remove(e){this.storage.removeItem(this.getKey(e))}clear(){this.storage.clear()}setCookie(e,t,o=604800){document.cookie=`${this.getKey(e)}=${t}; Max-Age=${o}`}getCookie(e){const t=document.cookie.split("; ");for(let o=0,r=t.length;o<r;o++){const r=t[o].split("=");if(r[0]===this.getKey(e))return r[1]}return""}removeCookie(e){this.setCookie(e,1,-1)}clearCookie(){const e=document.cookie.match(/[^ =;]+(?==)/g);if(e)for(let t=e.length;t--;)document.cookie=e[t]+"=0;expire="+new Date(0).toUTCString()}},Yt=Wt(),Xt=Yt.get("Is-Lockscreen",!1),Zt=I({id:"app-lockscreen",state:()=>({isLock:!0===Xt,lockTime:"true"==Xt?3600:0}),getters:{},actions:{setLock(e){this.isLock=e,Yt.set("Is-Lockscreen",this.isLock)},setLockTime(e=3600){this.lockTime=e}}}),Jt=w();const Qt=Object.prototype.toString;function eo(e,t){return Qt.call(e)===`[object ${t}]`}function to(e){return eo(e,"Function")}function oo(e){return eo(e,"Number")}function ro(e){return eo(e,"String")}function ao(e){return eo(e,"Boolean")}function no(e){return e&&Array.isArray(e)}let so=new Map;const io=e=>[e.method,e.url,P.stringify(e.data),P.stringify(e.params)].join("&");class lo{addPending(e){this.removePending(e);const t=io(e);e.cancelToken=e.cancelToken||new A.CancelToken((e=>{so.has(t)||so.set(t,e)}))}removeAllPending(){so.forEach((e=>{e&&to(e)&&e()})),so.clear()}removePending(e){const t=io(e);if(so.has(t)){const e=so.get(t);e&&e(t),so.delete(t)}}reset(){so=new Map}}function co(e,t=!1){if(!e)return t?"":{};const o=(new Date).getTime();return t?`?_t=${o}`:{_t:o}}function uo(e){var t;if("[object Object]"===Object.prototype.toString.call(e))for(const r in e){if(e[r]&&e[r]._isAMomentObject&&(e[r]=e[r].format("YYYY-MM-DD HH:mm")),ro(r)){const t=e[r];if(t)try{e[r]=ro(t)?t.trim():t}catch(o){throw new Error(o)}}null!==(t=e[r])&&eo(t,"Object")&&uo(e[r])}}const mo=()=>{const{VITE_GLOB_APP_TITLE:e,VITE_GLOB_API_URL:t,VITE_GLOB_APP_SHORT_NAME:o,VITE_GLOB_API_URL_PREFIX:r,VITE_GLOB_UPLOAD_URL:a,VITE_GLOB_PROD_MOCK:n,VITE_GLOB_IMG_URL:s}=function(){const e="__PRODUCTION__AdminPro__CONF__".toUpperCase().replace(/\s/g,""),t=window[e],{VITE_GLOB_APP_TITLE:o,VITE_GLOB_API_URL:r,VITE_GLOB_APP_SHORT_NAME:a,VITE_GLOB_API_URL_PREFIX:n,VITE_GLOB_UPLOAD_URL:s,VITE_GLOB_PROD_MOCK:i,VITE_GLOB_IMG_URL:l}=t;return/^[a-zA-Z\_]*$/.test(a),{VITE_GLOB_APP_TITLE:o,VITE_GLOB_API_URL:r,VITE_GLOB_APP_SHORT_NAME:a,VITE_GLOB_API_URL_PREFIX:n,VITE_GLOB_UPLOAD_URL:s,VITE_GLOB_PROD_MOCK:i,VITE_GLOB_IMG_URL:l}}();/[a-zA-Z\_]*/.test(o);return{title:e,apiUrl:t,shortName:o,urlPrefix:r,uploadUrl:a,prodMock:n,imgUrl:s}};let po;const ho={},go=function(e,t){if(!t)return e();if(void 0===po){const e=document.createElement("link").relList;po=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in ho)return;ho[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":po,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},fo=()=>go((()=>import("./index.52ab8297.js")),["/assets/index.52ab8297.js","/assets/index.e8b6a201.css","/assets/vendor.af0afcfa.js","/assets/logo.472200b6.js","/assets/useDesignSetting.dc32ca88.js"]);var _o,bo;function vo(e){return()=>M(C,null,{default:()=>M(e)})}function To(e){return e.filter((e=>1!=e.meta.hidden&&!["/:path(.*)*","/",_o.REDIRECT,_o.BASE_LOGIN].includes(e.path))).map((e=>{const t=l(i(i({},e),e.meta),{label:e.meta.title,key:e.name});return e.children&&e.children.length>0&&(t.children=To(e.children)),t}))}(bo=_o||(_o={})).BASE_LOGIN="/login",bo.BASE_LOGIN_NAME="Login",bo.REDIRECT="/redirect",bo.REDIRECT_NAME="Redirect",bo.BASE_HOME="/dashboard",bo.BASE_HOME_REDIRECT="/dashboard/console",bo.ERROR_PAGE_NAME="ErrorPage";const yo=(e,t)=>{const o=e;return o.install=r=>{r.component(o.name||o.displayName,e),t&&(r.config.globalProperties[t]=e)},e};let Eo=null;function ko(e,t){return e.map((e=>{e.key===t?Eo=e:e.children&&e.children.length&&ko(e.children,t)})),Eo}let Lo=[];function Ro(e){return e.map((e=>{Lo.push(e.key),e.children&&e.children.length&&Ro(e.children)})),Lo}const Oo=[{path:"/comp",name:"comp",redirect:"/comp/console",component:fo,meta:{title:"组件示例",icon:vo(x),sort:8},children:[{path:"table",name:"comp_table",meta:{title:"表格"},component:()=>go((()=>import("./list.997b677f.js")),["/assets/list.997b677f.js","/assets/TableAction.2911f338.js","/assets/TableAction.c92916cf.css","/assets/vendor.af0afcfa.js","/assets/useDesignSetting.dc32ca88.js","/assets/componentSetting.df76d574.js","/assets/list.85ddab9f.js"])},{path:"upload",name:"comp_upload",meta:{title:"上传"},component:()=>go((()=>import("./index.99ab9a1d.js")),["/assets/index.99ab9a1d.js","/assets/BasicUpload.d3acfcfa.js","/assets/BasicUpload.7f65059b.css","/assets/vendor.af0afcfa.js","/assets/componentSetting.df76d574.js"])}]}];var So=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oo});const Io=[{path:"/dashboard",name:"dashboard",redirect:"/dashboard/console",component:fo,meta:{title:"Dashboard",icon:vo(j),permission:["dashboard_console","dashboard_console","dashboard_workplace"],sort:0},children:[{path:"console",name:"dashboard_console",meta:{title:"主控台",permission:["dashboard_console"]},component:()=>go((()=>import("./console.724b4def.js")),["/assets/console.724b4def.js","/assets/vendor.af0afcfa.js"])},{path:"workplace",name:"dashboard_workplace",meta:{title:"工作台",keepAlive:!0,permission:["dashboard_workplace"]},component:()=>go((()=>import("./workplace.6eb85ce0.js")),["/assets/workplace.6eb85ce0.js","/assets/workplace.c0e5a46a.css","/assets/vendor.af0afcfa.js"])}]}];var wo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Io});const Po=[{path:"/exception",name:"Exception",redirect:"/exception/403",component:fo,meta:{title:"异常页面",icon:vo(U),sort:3},children:[{path:"403",name:"exception-403",meta:{title:"403"},component:()=>go((()=>import("./403.03d0dbf3.js")),["/assets/403.03d0dbf3.js","/assets/403.275465c9.css","/assets/vendor.af0afcfa.js"])},{path:"404",name:"exception-404",meta:{title:"404"},component:()=>go((()=>import("./404.ef295479.js")),["/assets/404.ef295479.js","/assets/404.c43cb1e6.css","/assets/vendor.af0afcfa.js"])},{path:"500",name:"exception-500",meta:{title:"500"},component:()=>go((()=>import("./500.a25e4ec1.js")),["/assets/500.a25e4ec1.js","/assets/500.497b9791.css","/assets/vendor.af0afcfa.js"])}]}];var Ao=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Po});const Do=[{path:"/form",name:"Form",redirect:"/form/basic-form",component:fo,meta:{title:"表单页面",icon:vo(N),sort:1},children:[{path:"basic-form",name:"form-basic-form",meta:{title:"基础表单"},component:()=>go((()=>import("./index.3c876153.js")),["/assets/index.3c876153.js","/assets/BasicUpload.d3acfcfa.js","/assets/BasicUpload.7f65059b.css","/assets/vendor.af0afcfa.js","/assets/componentSetting.df76d574.js"])},{path:"step-form",name:"form-step-form",meta:{title:"分步表单"},component:()=>go((()=>import("./stepForm.076c1f4a.js")),["/assets/stepForm.076c1f4a.js","/assets/stepForm.58ac4a23.css","/assets/vendor.af0afcfa.js"])},{path:"detail",name:"form-detail",meta:{title:"表单详情"},component:()=>go((()=>import("./index.38f4062a.js")),["/assets/index.38f4062a.js","/assets/vendor.af0afcfa.js"])}]}];var Mo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Do});const Co=[{path:"/list",name:"List",redirect:"/list/basic-list",component:fo,meta:{title:"列表页面",icon:vo(V),sort:1},children:[{path:"basic-list",name:"basic-list",meta:{title:"基础列表"},component:()=>go((()=>import("./index.d6b2208f.js")),["/assets/index.d6b2208f.js","/assets/TableAction.2911f338.js","/assets/TableAction.c92916cf.css","/assets/vendor.af0afcfa.js","/assets/useDesignSetting.dc32ca88.js","/assets/componentSetting.df76d574.js","/assets/list.85ddab9f.js"])},{path:"basic-info/:id?",name:"basic-info",meta:{title:"基础详情",hidden:!0},component:()=>go((()=>import("./info.91aae925.js")),["/assets/info.91aae925.js","/assets/vendor.af0afcfa.js"])}]}];var xo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Co});const jo=[{path:"/result",name:"Result",redirect:"/result/success",component:fo,meta:{title:"结果页面",icon:vo(B),sort:4},children:[{path:"success",name:"result-success",meta:{title:"成功页"},component:()=>go((()=>import("./success.024d2f6d.js")),["/assets/success.024d2f6d.js","/assets/success.680fd6fe.css","/assets/vendor.af0afcfa.js"])},{path:"fail",name:"result-fail",meta:{title:"失败页"},component:()=>go((()=>import("./fail.3eb9c7ed.js")),["/assets/fail.3eb9c7ed.js","/assets/fail.1f631c83.css","/assets/vendor.af0afcfa.js"])},{path:"info",name:"result-info",meta:{title:"信息页"},component:()=>go((()=>import("./info.1daa11eb.js")),["/assets/info.1daa11eb.js","/assets/info.11e1a3e6.css","/assets/vendor.af0afcfa.js"])}]}];var Uo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jo});const No=[{path:"/setting",name:"Setting",redirect:"/setting/account",component:fo,meta:{title:"设置页面",icon:vo(G),sort:5},children:[{path:"account",name:"setting-account",meta:{title:"个人设置"},component:()=>go((()=>import("./account.9f4c0c80.js")),["/assets/account.9f4c0c80.js","/assets/account.8fe08d7a.css","/assets/vendor.af0afcfa.js"])},{path:"system",name:"setting-system",meta:{title:"系统设置"},component:()=>go((()=>import("./system.22ee55bc.js")),["/assets/system.22ee55bc.js","/assets/system.d8ec38f0.css","/assets/vendor.af0afcfa.js"])}]}];var Vo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:No});const Bo=[{path:"/system",name:"System",redirect:"/system/menu",component:fo,meta:{title:"系统设置",icon:vo($),sort:1},children:[{path:"menu",name:"system_menu",meta:{title:"菜单权限管理"},component:()=>go((()=>import("./menu.af6ed8c3.js")),["/assets/menu.af6ed8c3.js","/assets/vendor.af0afcfa.js"])},{path:"role",name:"system_role",meta:{title:"角色权限管理"},component:()=>go((()=>import("./role.38892064.js")),["/assets/role.38892064.js","/assets/TableAction.2911f338.js","/assets/TableAction.c92916cf.css","/assets/vendor.af0afcfa.js","/assets/useDesignSetting.dc32ca88.js","/assets/componentSetting.df76d574.js"])}]}];var Go=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bo});const $o={path:"/:path(.*)*",name:"ErrorPage",component:fo,meta:{title:"ErrorPage",hideBreadcrumb:!0},children:[{path:"/:path(.*)*",name:"ErrorPage",component:()=>go((()=>import("./404.ef295479.js")),["/assets/404.ef295479.js","/assets/404.c43cb1e6.css","/assets/vendor.af0afcfa.js"]),meta:{title:"ErrorPage",hideBreadcrumb:!0}}]},qo={path:"/redirect",name:"Redirect",component:fo,meta:{title:"Redirect",hideBreadcrumb:!0},children:[{path:"/redirect/:path(.*)",name:"Redirect",component:()=>go((()=>import("./index.073cadec.js")),["/assets/index.073cadec.js","/assets/vendor.af0afcfa.js"]),meta:{title:"Redirect",hideBreadcrumb:!0}}]};function Fo(e){return Lr.request({url:"/menu/list",method:"GET",params:e})}const zo={Layout:()=>go((()=>import("./index.52ab8297.js")),["/assets/index.52ab8297.js","/assets/index.e8b6a201.css","/assets/vendor.af0afcfa.js","/assets/logo.472200b6.js","/assets/useDesignSetting.dc32ca88.js"]),DashboardConsole:()=>go((()=>import("./console.724b4def.js")),["/assets/console.724b4def.js","/assets/vendor.af0afcfa.js"]),DashboardMonitor:()=>go((()=>import("./monitor.88671212.js")),["/assets/monitor.88671212.js","/assets/vendor.af0afcfa.js"]),DashboardWorkplace:()=>go((()=>import("./workplace.6eb85ce0.js")),["/assets/workplace.6eb85ce0.js","/assets/workplace.c0e5a46a.css","/assets/vendor.af0afcfa.js"])},Ho={DashboardOutlined:vo(j)},Ko=(e,t)=>e.map((e=>{const o={path:`${t&&t.path||""}/${e.path}`,name:e.name||"",component:zo[e.component],meta:l(i({},e.meta),{label:e.meta.title,icon:Ho[e.meta.icon]||null,permission:e.meta.permission||null})};return o.path=o.path.replace("//","/"),e.redirect&&(o.redirect=e.redirect),e.children&&e.children.length>0&&(o.children=Ko(e.children,o)),o})),Wo=()=>new Promise(((e,t)=>{Lr.request({url:"/menus",method:"GET"}).then((t=>{const o=Ko(t),r=[...fr,...o];r.forEach((e=>{_r.addRoute(e)})),e(r)})).catch((e=>{t(e)}))})),{navMode:Yo,navTheme:Xo,headerSetting:Zo,showFooter:Jo,menuSetting:Qo,multiTabsSetting:er,crumbsSetting:tr,permissionMode:or}={navMode:"vertical",navTheme:"dark",headerSetting:{bgColor:"#fff",fixed:!0,isReload:!0},showFooter:!0,multiTabsSetting:{bgColor:"#fff",show:!0,fixed:!0},menuSetting:{minMenuWidth:64,menuWidth:200,fixed:!0},crumbsSetting:{show:!0,showIcon:!1},permissionMode:"ROLE"},rr=I({id:"app-project-setting",state:()=>({navMode:Yo,navTheme:Xo,headerSetting:Zo,showFooter:Jo,menuSetting:Qo,multiTabsSetting:er,crumbsSetting:tr,permissionMode:or}),getters:{getNavMode(){return this.navMode},getNavTheme(){return this.navTheme},getHeaderSetting(){return this.headerSetting},getShowFooter(){return this.showFooter},getMenuSetting(){return this.menuSetting},getMultiTabsSetting(){return this.multiTabsSetting},getCrumbsSetting(){return this.multiTabsSetting},getPermissionMode(){return this.permissionMode}},actions:{setNavTheme(e){this.navTheme=e}}});function ar(){const e=rr();return{getNavMode:S((()=>e.navMode)),getNavTheme:S((()=>e.navTheme)),getHeaderSetting:S((()=>e.headerSetting)),getMultiTabsSetting:S((()=>e.multiTabsSetting)),getMenuSetting:S((()=>e.menuSetting)),getCrumbsSetting:S((()=>e.crumbsSetting)),getPermissionMode:S((()=>e.permissionMode)),getShowFooter:S((()=>e.showFooter))}}const nr={id:"id",children:"children",pid:"pid"};function sr(e,t,o={}){const r=(o=(e=>Object.assign({},nr,e))(o)).children;return function e(o){return o.map((e=>i({},e))).filter((o=>(o[r]=o[r]&&e(o[r]),t(o)||o[r]&&o[r].length)))}(e)}const ir=I({id:"app-async-route",state:()=>({menus:[],routers:fr,addRouters:[],keepAliveComponents:[],isDynamicAddedRoute:!1}),getters:{getMenus(){return this.menus},getIsDynamicAddedRoute(){return this.isDynamicAddedRoute}},actions:{getRouters(){return q(this.addRouters)},setDynamicAddedRoute(e){this.isDynamicAddedRoute=e},setRouters(e){this.addRouters=e,this.routers=fr.concat(e)},setMenus(e){this.menus=e},setKeepAliveComponents(e){this.keepAliveComponents=e},generateRoutes(e){return c(this,null,(function*(){let t;const o=e.roles||[],r=e=>{const{meta:t}=e,{permission:r}=t||{};return!r||o.some((e=>r.includes(e.value)))},{getPermissionMode:a}=ar();if("BACK"===F(a))try{t=yield Wo()}catch(n){}else try{t=sr([...gr,...fr],r)}catch(n){}return t=t.filter(r),this.setRouters(t),this.setMenus(t),q(t)}))}}});function lr(){return ir(Jt)}z.configure({showSpinner:!1});const cr=_o.BASE_LOGIN,ur=[cr];const mr={"./modules/comp.ts":So,"./modules/dashboard.ts":wo,"./modules/exception.ts":Ao,"./modules/form.ts":Mo,"./modules/list.ts":xo,"./modules/result.ts":Uo,"./modules/setting.ts":Vo,"./modules/system.ts":Go},dr=[];Object.keys(mr).forEach((e=>{const t=mr[e].default||{},o=Array.isArray(t)?[...t]:[t];dr.push(...o)})),dr.sort((function(e,t){return(e.meta.sort||0)-(t.meta.sort||0)}));const pr={path:"/",name:"Root",redirect:_o.BASE_HOME,meta:{title:"Root"}},hr={path:"/login",name:"Login",component:()=>go((()=>import("./index.f8716dd9.js")),["/assets/index.f8716dd9.js","/assets/index.863504d5.css","/assets/vendor.af0afcfa.js","/assets/logo.472200b6.js"]),meta:{title:"登录"}},gr=[$o,...dr],fr=[hr,pr,qo],_r=K({history:W(""),routes:fr,strict:!0,scrollBehavior:()=>({left:0,top:0})});function br(e){e.use(_r),function(e){const t=Sr(),o=lr();e.beforeEach(((r,a,n)=>c(this,null,(function*(){if(z.start(),a.path===cr&&"errorPage"===r.name)return void n(_o.BASE_HOME);if(ur.includes(r.path))return void n();if(!Yt.get("Access-Token")){if(r.meta.ignoreAuth)return void n();const e={path:cr,replace:!0};return r.path&&(e.query=l(i({},e.query),{redirect:r.path})),void n(e)}if(o.getIsDynamicAddedRoute)return void n();const s=yield t.GetInfo();(yield o.generateRoutes(s)).forEach((t=>{e.addRoute(t)}));const c=a.query.redirect||r.path,u=decodeURIComponent(c),m=r.path===u?l(i({},r),{replace:!0}):{path:u};o.setDynamicAddedRoute(!0),n(m),z.done()})))),e.afterEach(((e,t,o)=>{var r,a,n,s;document.title=(null==(r=null==e?void 0:e.meta)?void 0:r.title)||document.title,H(o);const i=lr(),l=i.keepAliveComponents,c=null==(a=e.matched.find((t=>t.name==e.name)))?void 0:a.name;if(c&&!l.includes(c)&&(null==(n=e.meta)?void 0:n.keepAlive))l.push(c);else if(!(null==(s=e.meta)?void 0:s.keepAlive)||"Redirect"==e.name){const e=i.keepAliveComponents.findIndex((e=>e==c));-1!=e&&l.splice(e,1)}i.setKeepAliveComponents(l),z.done()})),e.onError((e=>{}))}(_r)}const vr=mo(),Tr=vr.urlPrefix||"",{$message:yr,$dialog:Er}=window,kr={transformRequestData:(e,t)=>{const{isTransformRequestResult:o,isShowMessage:r=!0,isShowErrorMessage:a,isShowSuccessMessage:n,successMessageText:s,errorMessageText:i}=t,l=Promise.reject,{data:c}=e,{code:u,result:m,message:d}=c,p=c&&Reflect.has(c,"code")&&u===At.SUCCESS;if(r&&(p&&(s||n)?yr.success(s||d||"操作成功！"):p||!i&&!a?p||"modal"!==t.errorMessageMode||Er.confirm({title:"错误提示",content:d}):yr.error(d||i||"操作失败！")),!o)return e.data;if(!c)return l(c);if(u===At.SUCCESS)return m;if(u===At.ERROR){if(d)yr.error(c.message),Promise.reject(new Error(d));else{const e="操作失败,系统异常!";yr.error(e),Promise.reject(new Error(e))}return l()}if(u===At.TIMEOUT){if("login"==_r.currentRoute.value.name)return;const e="登录超时,请重新登录!";return Er.destroyAll(),Er.warning({title:"提示",content:"登录身份已失效,请重新登录!",onOk:()=>{_r.replace({name:"login",query:{redirect:_r.currentRoute.value.fullPath}}),Yt.clear()}}),l(new Error(e))}return p?c:l(new Error(d))},beforeRequestHook:(e,t)=>{var o;const{apiUrl:r,joinPrefix:a,joinParamsToUrl:n,formatDate:s,joinTime:i=!0}=t;a&&(e.url=`${Tr}${e.url}`),r&&ro(r)&&(e.url=`${r}${e.url}`);const l=e.params||{};return(null==(o=e.method)?void 0:o.toUpperCase())===Mt.GET?ro(l)?(e.url=e.url+l+`${co(i,!0)}`,e.params=void 0):e.params=Object.assign(l||{},co(i,!1)):ro(l)?(e.url=e.url+l,e.params=void 0):(s&&uo(l),e.data=l,e.params=void 0,n&&(e.url=function(e,t){let o="",r="";for(const a in t)o+=a+"="+encodeURIComponent(t[a])+"&";return o=o.replace(/&$/,""),r=/\?$/.test(e)?e+o:e.replace(/\/?$/,"?")+o,r}(e.url,e.data))),e},requestInterceptors:e=>{const t=Sr().getToken;return t&&(e.headers.token=t),e},responseInterceptorsCatch:e=>{const{response:t,code:o,message:r}=e||{},a=t&&t.data&&t.data.error?t.data.error.message:"",n=e.toString();try{if("ECONNABORTED"===o&&-1!==r.indexOf("timeout"))return void yr.error("接口请求超时,请刷新页面重试!");if(n&&n.includes("Network Error"))return void Er.confirm({title:"网络异常",content:"请检查您的网络连接是否正常!"})}catch(s){throw new Error(s)}return A.isCancel(e)||function(e,t){const o=window.$message;switch(Wt(),e){case 400:o.error(`${t}`);break;case 401:o.error("用户没有权限（令牌、用户名、密码错误）!");break;case 403:o.error("用户得到授权，但是访问是被禁止的。!");break;case 404:o.error("网络请求错误,未找到该资源!");break;case 405:o.error("网络请求错误,请求方法未允许!");break;case 408:o.error("网络请求超时!");break;case 500:o.error("服务器错误,请联系管理员!");break;case 501:o.error("网络未实现!");break;case 502:o.error("网络错误!");break;case 503:o.error("服务不可用，服务器暂时过载或维护!");break;case 504:o.error("网络超时!");break;case 505:o.error("http版本不支持该请求!");break;default:o.error(t)}}(e.response&&e.response.status,a),e}},Lr=new class{constructor(e){this.options=e,this.axiosInstance=A.create(e),this.setupInterceptors()}createAxios(e){this.axiosInstance=A.create(e)}getTransform(){const{transform:e}=this.options;return e}getAxios(){return this.axiosInstance}configAxios(e){this.axiosInstance&&this.createAxios(e)}setHeader(e){this.axiosInstance&&Object.assign(this.axiosInstance.defaults.headers,e)}setupInterceptors(){const e=this.getTransform();if(!e)return;const{requestInterceptors:t,requestInterceptorsCatch:o,responseInterceptors:r,responseInterceptorsCatch:a}=e,n=new lo;this.axiosInstance.interceptors.request.use((e=>{const{headers:{ignoreCancelToken:o}={ignoreCancelToken:!1}}=e;return!o&&n.addPending(e),t&&to(t)&&(e=t(e)),e}),void 0),o&&to(o)&&this.axiosInstance.interceptors.request.use(void 0,o),this.axiosInstance.interceptors.response.use((e=>(e&&n.removePending(e.config),r&&to(r)&&(e=r(e)),e)),void 0),a&&to(a)&&this.axiosInstance.interceptors.response.use(void 0,a)}request(e,t){let o=D(e);const r=this.getTransform(),{requestOptions:a}=this.options,n=Object.assign({},a,t),{beforeRequestHook:s,requestCatch:i,transformRequestData:l}=r||{};return s&&to(s)&&(o=s(o,n)),new Promise(((e,t)=>{this.axiosInstance.request(o).then((o=>{const r=A.isCancel(o);if(l&&to(l)&&!r){const t=l(o,n);return e(t)}t(o)})).catch((e=>{i&&to(i)?t(i(e)):t(e)}))}))}}({timeout:15e3,headers:{"Content-Type":xt.FORM_URLENCODED},transform:kr,requestOptions:{joinPrefix:!0,isTransformRequestResult:!0,joinParamsToUrl:!1,formatDate:!0,errorMessageMode:"none",apiUrl:vr.apiUrl},withCredentials:!1});const Rr=Wt({storage:localStorage}),Or=I({id:"app-user",state:()=>({token:Rr.get("Access-Token",""),username:"",welcome:"",avatar:"",roles:[],info:Rr.get("Current-User",{})}),getters:{getToken(){return this.token},getAvatar(){return this.avatar},getNickname(){return this.username},getRoles(){return this.roles},getUserInfo(){return this.info}},actions:{setToken(e){this.token=e},setAvatar(e){this.avatar=e},setRoles(e){this.roles=e},setUserInfo(e){this.info=e},login(e){return c(this,null,(function*(){try{const o=yield(t=e,Lr.request({url:"/login",method:"POST",params:t},{isTransformRequestResult:!1})),{result:r,code:a,message:n}=o;if(a===At.SUCCESS){const e=6048e5;Yt.set("Access-Token",r.token,e),Yt.set("Current-User",r,e),Yt.set("Is-Lockscreen",!1),this.setToken(r.token),this.setUserInfo(r)}return Promise.resolve(o)}catch(o){return Promise.reject(o)}var t}))},GetInfo(){let e=this;return new Promise(((t,o)=>{Lr.request({url:"/admin_info",method:"get"}).then((r=>{const a=r;if(a.roles&&a.roles.length){const t=a.roles;e.setRoles(t),e.setUserInfo(a)}else o(new Error("getInfo: roles must be a non-null array !"));e.setAvatar(a.avatar),t(r)})).catch((e=>{o(e)}))}))},logout(){return c(this,null,(function*(){return this.setRoles([]),this.setUserInfo(""),Yt.remove("Access-Token"),Yt.remove("Current-User"),Promise.resolve("")}))}}});function Sr(){return Or(Jt)}var Ir=u({name:"Lockscreen",components:{LockOutlined:Y,LoadingOutlined:X,UnlockOutlined:Z,UserOutlined:J,ArrowRightOutlined:Q,ApiOutlined:ee,WifiOutlined:te,recharge:Ut},setup(e,{emit:t}){const o=Zt(),r=Or(),{month:a,day:n,hour:s,minute:u,second:m,week:d}=function(){let e;const t=E(0),o=E(0),r=E(""),a=E(0),n=E(0),s=E(0),i=E(0),l=()=>{var e,l;const c=new Date;t.value=c.getFullYear(),o.value=c.getMonth()+1,r.value="日一二三四五六".charAt(c.getDay()),a.value=c.getDate(),n.value=(null==(e=c.getHours()+"")?void 0:e.padStart(2,"0"))||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(c.getHours()),s.value=(null==(l=c.getMinutes()+"")?void 0:l.padStart(2,"0"))||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(c.getMinutes()),i.value=c.getSeconds()};return l(),k((()=>{clearInterval(e),e=setInterval((()=>l()),1e3)})),L((()=>{clearInterval(e)})),{month:o,day:a,hour:n,minute:s,second:i,week:r}}(),{online:p}=function(){const e=E(!0),t=t=>{e.value="boolean"==typeof t?t:t.target.online};return navigator.onLine?t(!0):t(!1),k((()=>{window.addEventListener("online",t),window.addEventListener("offline",t)})),L((()=>{window.removeEventListener("online",t),window.removeEventListener("offline",t)})),{online:e}}(),h=oe(),g=re(),{battery:f,batteryStatus:_,calcDischargingTime:b}=Ht(),{username:v}=r.getUserInfo||{},T=O({showLogin:!1,loginLoading:!1,isLoginError:!1,errorMsg:"密码错误",loginParams:{username:v||"",password:""}}),y=e=>T.showLogin=e;return l(i({},R(T)),{online:p,month:a,day:n,hour:s,minute:u,second:m,week:d,battery:f,batteryStatus:_,calcDischargingTime:b,onLockLogin:y,onLogin:()=>c(this,null,(function*(){if(!T.loginParams.password.trim())return;const e=i({isLock:!0},T.loginParams);T.loginLoading=!0;const{code:t,result:a,message:n}=yield r.login(e);t===At.SUCCESS?(y(!1),o.setLock(!1)):(T.errorMsg=n,T.isLoginError=!0),T.loginLoading=!1})),goLogin:()=>{y(!1),o.setLock(!1),h.replace({path:"/login",query:{redirect:g.fullPath}})}})}});const wr=y();m("data-v-7317ed39");const Pr={class:"lock-box"},Ar={class:"lock"},Dr={class:"local-time"},Mr={class:"time"},Cr={class:"date"},xr={class:"computer-status"},jr={key:1,class:"login-box"},Ur={class:"username"},Nr={key:0,class:"w-full flex"},Vr={class:"text-red-500"},Br={class:"w-full mt-1 flex justify-around"};d();const Gr=wr(((e,t,o,r,a,n)=>{const s=ae("lock-outlined"),i=ae("n-icon"),l=ae("recharge"),c=ae("wifi-outlined"),u=ae("api-outlined"),m=ae("user-outlined"),d=ae("n-avatar"),b=ae("LoadingOutlined"),v=ae("arrow-right-outlined"),T=ae("n-input");return p(),h("div",{class:[{onLockLogin:e.showLogin},"lockscreen"],onKeyup:t[6]||(t[6]=t=>e.onLockLogin(!0)),onMousedown:t[7]||(t[7]=se((()=>{}),["stop"])),onContextmenu:t[8]||(t[8]=se((()=>{}),["prevent"]))},[e.showLogin?ne("",!0):(p(),h(_,{key:0},[g("div",Pr,[g("div",Ar,[g("span",{class:"lock-icon",title:"解锁屏幕",onClick:t[1]||(t[1]=t=>e.onLockLogin(!0))},[g(i,null,{default:wr((()=>[g(s)])),_:1})])])]),g(l,{battery:e.battery,"battery-status":e.batteryStatus,"calc-discharging-time":e.calcDischargingTime},null,8,["battery","battery-status","calc-discharging-time"]),g("div",Dr,[g("div",Mr,f(e.hour)+":"+f(e.minute),1),g("div",Cr,f(e.month)+"月"+f(e.day)+"号，星期"+f(e.week),1)]),g("div",xr,[g("span",{class:[{offline:!e.online},"network"]},[g(c,{class:"network"})],2),g(u)])],64)),e.showLogin?(p(),h("div",jr,[g(d,{size:128},{default:wr((()=>[g(i,null,{default:wr((()=>[g(m)])),_:1})])),_:1}),g("div",Ur,f(e.loginParams.username),1),g(T,{type:"password",autofocus:"",value:e.loginParams.password,"onUpdate:value":t[2]||(t[2]=t=>e.loginParams.password=t),placeholder:"请输入登录密码"},{suffix:wr((()=>[g(i,{onClick:e.onLogin,style:{cursor:"pointer"}},{default:wr((()=>[e.loginLoading?(p(),h(b,{key:0})):(p(),h(v,{key:1}))])),_:1},8,["onClick"])])),_:1},8,["value"]),e.isLoginError?(p(),h("div",Nr,[g("span",Vr,f(e.errorMsg),1)])):ne("",!0),g("div",Br,[g("div",null,[g("a",{onClick:t[3]||(t[3]=t=>e.showLogin=!1)},"返回")]),g("div",null,[g("a",{onClick:t[4]||(t[4]=(...t)=>e.goLogin&&e.goLogin(...t))},"重新登录")]),g("div",null,[g("a",{onClick:t[5]||(t[5]=(...t)=>e.onLogin&&e.onLogin(...t))},"进入系统")])])])):ne("",!0)],34)}));Ir.render=Gr,Ir.__scopeId="data-v-7317ed39";var $r={name:"MessageContent",setup(){window.$message=ie()}};$r.render=function(e,t,o,r,a,n){return null};var qr={name:"DialogContent",setup(){window.$dialog=le()}};qr.render=function(e,t,o,r,a,n){return null};var Fr=u({name:"Application",components:{MessageContent:$r,DialogContent:qr},setup:()=>({})});Fr.render=function(e,t,o,r,a,n){const s=ae("DialogContent"),i=ae("MessageContent"),l=ae("n-message-provider"),c=ae("n-notification-provider"),u=ae("n-dialog-provider");return p(),h(u,null,{default:ce((()=>[g(s),g(c,null,{default:ce((()=>[g(l,null,{default:ce((()=>[g(i),ue(e.$slots,"default",{slot:"default"})])),_:3})])),_:1})])),_:1})};const zr={darkTheme:!1,appTheme:"#2d8cf0",appThemeList:["#2d8cf0","#0960bd","#0084f4","#009688","#536dfe","#ff5c93","#ee4f12","#0096c7","#9c27b0","#ff9800"]},{darkTheme:Hr,appTheme:Kr,appThemeList:Wr}=zr,Yr=I({id:"app-design-setting",state:()=>({darkTheme:Hr,appTheme:Kr,appThemeList:Wr}),getters:{getDarkTheme(){return this.darkTheme},getAppTheme(){return this.appTheme},getAppThemeList(){return this.appThemeList}},actions:{}});var Xr=u({name:"App",components:{LockScreen:Ir,AppProvider:Fr},setup(){const e=re(),t=Zt(),o=Yr(),r=S((()=>t.isLock)),a=S((()=>t.lockTime)),n=S((()=>({common:{primaryColor:o.appTheme,primaryColorHover:"#57a3f3"}}))),s=S((()=>o.darkTheme?fe:void 0));let i;const l=()=>{clearInterval(i),"login"==e.name||r.value||(t.setLock(!1),t.setLockTime(),i=setInterval((()=>{if(t.setLockTime(a.value-1),a.value<=0)return t.setLock(!0),clearInterval(i)}),1e3))};return k((()=>{document.addEventListener("mousedown",l)})),L((()=>{document.removeEventListener("mousedown",l)})),{darkTheme:me([he,ge]),getDarkTheme:s,zhCN:de,dateZhCN:pe,isLock:r,getThemeOverrides:n}}});Xr.render=function(e,t,o,r,a,n){const s=ae("RouterView"),i=ae("AppProvider"),l=ae("NConfigProvider"),c=ae("LockScreen");return p(),h(_,null,[e.isLock?ne("",!0):(p(),h(l,{key:0,locale:e.zhCN,theme:e.getDarkTheme,"theme-overrides":e.getThemeOverrides,"date-locale":e.dateZhCN},{default:ce((()=>[g(i,null,{default:ce((()=>[g(s)])),_:1})])),_:1},8,["locale","theme","theme-overrides","date-locale"])),e.isLock&&"login"!=e.$route.name?(p(),h(_e,{key:1,name:"slide-up"},{default:ce((()=>[g(c)])),_:1})):ne("",!0)],64)};const Zr=be({components:[ve,Te,ye,Ee,ke,Le,Re,Oe,Se,C,Ie,we,Pe,Ae,De,Me,Ce,xe,je,Ue,Ne,Ve,Be,Ge,$e,qe,Fe,ze,He,Ke,We,Ye,Xe,Ze,Je,Qe,et,tt,ot,rt,at,nt,st,it,lt,ct,ut,mt,dt,pt,ht,gt,ft,_t,bt,vt,Tt,yt,Et,kt,Lt,Rt]});function Jr(){const e=Or();return{hasPermission:function(t){return!t||!t.length||function(t){return e.getRoles.some((e=>{const{value:o}=e;return t.includes(o)}))}(t)},hasEveryPermission:function(t){const o=e.getRoles;if(Array.isArray(t))return t.every((e=>!!o[e]));throw new Error(`[hasEveryPermission]: ${t} should be a array !`)},hasSomePermission:function(t){const o=e.getRoles;if(Array.isArray(t))return t.some((e=>!!o[e]));throw new Error(`[hasSomePermission]: ${t} should be a array !`)}}}const Qr={mounted(e,t,o){if(null==t.value)return;const{action:r,effect:a}=t.value,{hasPermission:n}=Jr();n(r)||("disabled"==a?(e.disabled=!0,e.style.disabled="disabled",e.classList.add("n-button--disabled")):e.remove())}};function ea(e,{message:t="ok"}={}){return Ot.mock({code:200,result:e,message:t,type:"success"})}function ta(e,t,o){const r=(e-1)*Number(t);return r+Number(t)>=o.length?o.slice(r,o.length):o.slice(r,r+Number(t))}function oa(e,t){let o=-1;for(;++o<e;)t(o)}var ra=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",resultSuccess:ea,resultPageSuccess:function(e,t,o,{message:r="ok"}={}){const a=ta(e,t,o);return l(i({},ea({page:e,pageSize:t,pageCount:o.length,list:a})),{message:r})},resultError:function(e="Request failed",{code:t=-1,result:o=null}={}){return{code:t,result:o,message:e,type:"error"}},pagination:ta,doCustomTimes:oa,getRequestToken:function({headers:e}){return null==e?void 0:e.token}});const aa={visits:{dayVisits:St.exports.Random.float(1e4,99999,2,2),rise:St.exports.Random.float(10,99),decline:St.exports.Random.float(10,99),amount:St.exports.Random.float(99999,999999,3,5)},saleroom:{weekSaleroom:St.exports.Random.float(1e4,99999,2,2),amount:St.exports.Random.float(99999,999999,2,2),degree:St.exports.Random.float(10,99)},orderLarge:{weekLarge:St.exports.Random.float(1e4,99999,2,2),rise:St.exports.Random.float(10,99),decline:St.exports.Random.float(10,99),amount:St.exports.Random.float(99999,999999,2,2)},volume:{weekLarge:St.exports.Random.float(1e4,99999,2,2),rise:St.exports.Random.float(10,99),decline:St.exports.Random.float(10,99),amount:St.exports.Random.float(99999,999999,2,2)}};var na=[{url:"/api/dashboard/console",timeout:1e3,method:"get",response:()=>ea(aa)}],sa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:na});var ia=[{url:"/api/menu/list",timeout:1e3,method:"get",response:()=>ea({list:[{label:"Dashboard",key:"dashboard",type:1,subtitle:"dashboard",openType:1,auth:"dashboard",path:"/dashboard",children:[{label:"主控台",key:"console",type:1,subtitle:"console",openType:1,auth:"console",path:"/dashboard/console"},{label:"工作台",key:"workplace",type:1,subtitle:"workplace",openType:1,auth:"workplace",path:"/dashboard/workplace"}]},{label:"表单管理",key:"form",type:1,subtitle:"form",openType:1,auth:"form",path:"/form",children:[{label:"基础表单",key:"basic-form",type:1,subtitle:"basic-form",openType:1,auth:"basic-form",path:"/form/basic-form"},{label:"分步表单",key:"step-form",type:1,subtitle:"step-form",openType:1,auth:"step-form",path:"/form/step-form"},{label:"表单详情",key:"detail",type:1,subtitle:"detail",openType:1,auth:"detail",path:"/form/detail"}]}]})}],la=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ia});function ca(){let e=["dashboard","console","workplace","basic-form","step-form","detail"],t=[];return oa(parseInt(6*Math.random()),(()=>{let o=e[Math.floor(Math.random()*e.length)];t.push(o)})),Array.from(new Set(t))}var ua=[{url:"/api/role/list",timeout:1e3,method:"get",response:({query:e})=>{const{page:t=1,pageSize:o=10}=e,r=(e=>{const t=[];return oa(e,(()=>{t.push({id:"@integer(10,100)",name:"@cname()",explain:"@cname()",isDefault:"@boolean()",menu_keys:ca(),create_date:"@date('yyyy-MM-dd hh:mm:ss')","status|1":["normal","enable","disable"]})})),t})(Number(o));return ea({page:Number(t),pageSize:Number(o),pageCount:60,list:r})}}],ma=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ua});var da=[{url:"/api/table/list",timeout:1e3,method:"get",response:({query:e})=>{const{page:t=1,pageSize:o=10}=e,r=(e=>{const t=[];return oa(e,(()=>{t.push({id:"@integer(10,100)",beginTime:"@datetime",endTime:"@datetime",address:"@city()",name:"@cname()",avatar:St.exports.Random.image("400x400",St.exports.Random.color(),St.exports.Random.color(),St.exports.Random.first()),date:"@date('yyyy-MM-dd')",time:"@time('HH:mm')","no|100000-10000000":1e5,"status|1":["normal","enable","disable"]})})),t})(Number(o));return ea({page:Number(t),pageSize:Number(o),pageCount:60,list:r})}}],pa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:da});const ha=[{path:"/dashboard",name:"Dashboard",component:"Layout",redirect:"/dashboard/console",meta:{icon:"DashboardOutlined",title:"Dashboard"},children:[{path:"console",name:"dashboard_console",component:"DashboardConsole",meta:{title:"主控台"}},{path:"monitor",name:"dashboard_monitor",component:"DashboardMonitor",meta:{title:"监控页"}},{path:"workplace",name:"dashboard_workplace",component:"DashboardWorkplace",meta:{hidden:!0,title:"工作台"}}]}];var ga=[{url:"/api/menus",timeout:1e3,method:"get",response:()=>ea(ha)}],fa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ga});const _a=Ot.Random,ba=_a.string("upper",32,32),va={userId:"1",username:"admin",realName:"Admin",avatar:_a.image(),desc:"manager",password:_a.string("upper",4,16),token:ba,roles:[{roleName:"主控台",value:"dashboard_console"},{roleName:"监控页",value:"dashboard_monitor"},{roleName:"工作台",value:"dashboard_workplace"},{roleName:"基础列表",value:"basic_list"},{roleName:"基础列表删除",value:"basic_list_delete"}]};var Ta=[{url:"/api/login",timeout:1e3,method:"post",response:()=>ea({token:ba})},{url:"/api/admin_info",timeout:1e3,method:"get",response:()=>ea(va)}];const ya={"./_util.ts":ra,"./dashboard/console.ts":sa,"./system/menu.ts":la,"./system/role.ts":ma,"./table/list.ts":pa,"./user/menus.ts":fa,"./user/user.ts":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ta})},Ea=[];Object.keys(ya).forEach((e=>{e.includes("/_")||Ea.push(...ya[e].default)})),function(){c(this,null,(function*(){const e=wt(Xr);e.use(Pt),function(e){e.use(Zr)}(e),function(e){e.directive("permission",Qr)}(e),function(e){e.use(Jt)}(e),yield br(e),yield _r.isReady(),e.mount("#app",!0)}))}(),It(Ea);export{Lr as A,_o as P,At as R,Kt as T,Jr as a,ro as b,ao as c,to as d,Yr as e,mo as f,oo as g,Fo as h,no as i,ko as j,Ro as k,ar as l,ir as m,rr as n,To as o,Zt as p,vo as r,Yt as s,Or as u,yo as w};
