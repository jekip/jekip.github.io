var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o;import{_ as s,a as l}from"./TableAction.c25cd1f8.js";import{g as c}from"./list.2bb844ec.js";import{s as d,au as u,aH as b,d as p,Y as m,Z as f,f as y,j as k,i as h,R as v,o as w,c as j,a2 as g,b as C,be as T}from"./vendor.36b62bbc.js";import"./useDesignSetting.0ef99ad5.js";import"./index.675c56d3.js";import"./componentSetting.df76d574.js";import"./index.esm.eb3c857d.js";const x=[{title:"id",key:"id"},{title:"编码",key:"no"},{title:"名称",key:"name",width:200},{title:"头像",key:"avatar",render:e=>d(u,{size:48,src:e.avatar})},{title:"地址",key:"address",width:200},{title:"开始日期",key:"beginTime",width:200},{title:"结束日期",key:"endTime",width:200},{title:"状态",key:"status",render:e=>d(b,{type:e.status?"success":"error"},{default:()=>e.status?"启用":"禁用"})},{title:"创建时间",key:"date"},{title:"停留时间",key:"time"}];var O=p({components:{BasicTable:s},setup(){const e=m(),s=f(),u=y(),b=k({params:{pageSize:5,name:"xiaoMa"},actionColumn:{width:150,title:"操作",dataIndex:"action",fixed:"right",align:"center",render:e=>d(l,{style:"button",actions:p(e)})}});function p(e){return[{label:"删除",icon:"ic:outline-delete-outline",onClick:v.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"编辑",onClick:w.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}]}function v(t){s.info({title:"提示",content:`您想删除${t.name}`,positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{e.success("删除成功")},onNegativeClick:()=>{}})}function w(t){e.success("您点击了编辑按钮")}return j=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&r(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&r(e,a,t[a]);return e})({},h(b)),t(j,a({columns:x,actionRef:u,loadDataTable:e=>{return t=this,a=null,o=function*(){return yield c(e)},new Promise(((e,n)=>{var i=e=>{try{s(o.next(e))}catch(t){n(t)}},r=e=>{try{s(o.throw(e))}catch(t){n(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,r);s((o=o.apply(t,a)).next())}));var t,a,o},onCheckedRow:function(e){},reloadTable:function(){u.value.reload()}}));var j}});const P=T("刷新数据");O.render=function(e,t,a,o,n,i){const r=v("n-button"),s=v("BasicTable"),l=v("n-card");return w(),j(l,{bordered:!1,class:"proCard"},{default:g((()=>[C(s,{title:"表格列表",titleTooltip:"这是一个提示",columns:e.columns,request:e.loadDataTable,"row-key":e=>e.id,ref:"actionRef",actionColumn:e.actionColumn,"onUpdate:checkedRowKeys":e.onCheckedRow},{toolbar:g((()=>[C(r,{type:"primary",onClick:e.reloadTable},{default:g((()=>[P])),_:1},8,["onClick"])])),_:1},8,["columns","request","row-key","actionColumn","onUpdate:checkedRowKeys"])])),_:1})};export default O;
