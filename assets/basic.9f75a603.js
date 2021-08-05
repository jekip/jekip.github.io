var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a;import{_ as s,a as l}from"./TableAction.3dd738d3.js";import{g as c}from"./list.c702b208.js";import{s as d,av as u,u as p,d as b,Z as m,_ as f,f as y,j as k,i as h,V as v,o as w,c as j,a3 as g,b as C,bg as T}from"./vendor.c1e6e6e7.js";import"./useDesignSetting.f1c1680c.js";import"./index.73fa6b69.js";import"./propTypes.34968b9b.js";import"./componentSetting.df76d574.js";import"./index.esm.71c6e74c.js";const x=[{title:"id",key:"id"},{title:"编码",key:"no"},{title:"名称",key:"name",width:200},{title:"头像",key:"avatar",render:e=>d(u,{size:48,src:e.avatar})},{title:"地址",key:"address",width:200},{title:"开始日期",key:"beginTime",width:200},{title:"结束日期",key:"endTime",width:200},{title:"状态",key:"status",render:e=>d(p,{type:e.status?"success":"error"},{default:()=>e.status?"启用":"禁用"})},{title:"创建时间",key:"date"},{title:"停留时间",key:"time"}];var O=b({components:{BasicTable:s},setup(){const e=m(),s=f(),u=y(),p=k({params:{pageSize:5,name:"xiaoMa"},actionColumn:{width:150,title:"操作",key:"action",fixed:"right",align:"center",render:e=>d(l,{style:"button",actions:b(e)})}});function b(e){return[{label:"删除",icon:"ic:outline-delete-outline",onClick:v.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"编辑",onClick:w.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}]}function v(t){s.info({title:"提示",content:`您想删除${t.name}`,positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{e.success("删除成功")},onNegativeClick:()=>{}})}function w(t){e.success("您点击了编辑按钮")}return j=((e,t)=>{for(var o in t||(t={}))i.call(t,o)&&r(e,o,t[o]);if(a)for(var o of a(t))n.call(t,o)&&r(e,o,t[o]);return e})({},h(p)),t(j,o({columns:x,actionRef:u,loadDataTable:e=>{return t=this,o=null,a=function*(){return yield c(e)},new Promise(((e,i)=>{var n=e=>{try{s(a.next(e))}catch(t){i(t)}},r=e=>{try{s(a.throw(e))}catch(t){i(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,r);s((a=a.apply(t,o)).next())}));var t,o,a},onCheckedRow:function(e){},reloadTable:function(){u.value.reload()}}));var j}});const P=T("刷新数据");O.render=function(e,t,o,a,i,n){const r=v("n-button"),s=v("BasicTable"),l=v("n-card");return w(),j(l,{bordered:!1,class:"proCard"},{default:g((()=>[C(s,{title:"表格列表",titleTooltip:"这是一个提示",columns:e.columns,request:e.loadDataTable,"row-key":e=>e.id,ref:"actionRef",actionColumn:e.actionColumn,"onUpdate:checkedRowKeys":e.onCheckedRow},{toolbar:g((()=>[C(r,{type:"primary",onClick:e.reloadTable},{default:g((()=>[P])),_:1},8,["onClick"])])),_:1},8,["columns","request","row-key","actionColumn","onUpdate:checkedRowKeys"])])),_:1})};export default O;
