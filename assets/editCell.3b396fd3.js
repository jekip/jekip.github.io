var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,r=(e,t,n)=>new Promise(((o,a)=>{var i=e=>{try{r(n.next(e))}catch(t){a(t)}},l=e=>{try{r(n.throw(e))}catch(t){a(t)}},r=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,l);r((n=n.apply(e,t)).next())}));import{_ as d,a as c}from"./TableAction.5dbbaf3e.js";import{g as s}from"./list.4442789d.js";import{s as u,aw as p,d as m,f as b,j as y,i as f,X as v,o as k,c as h,a4 as C,b as w,bh as g}from"./vendor.753c6347.js";import"./useDesignSetting.54915fd4.js";import"./index.c7a2ed8c.js";import"./propTypes.34968b9b.js";import"./componentSetting.df76d574.js";import"./index.esm.0d4307b1.js";const j=[{title:"id",key:"id"},{title:"编码",key:"no"},{title:"名称",key:"name",editComponent:"NInput",editRule:!0,edit:!0,width:200},{title:"头像",key:"avatar",render:e=>u(p,{size:48,src:e.avatar})},{title:"地址",key:"address",editComponent:"NSelect",editComponentProps:{options:[{label:"广东省",value:1},{label:"浙江省",value:2}]},edit:!0,width:200},{title:"开始日期",key:"beginTime",edit:!0,width:250,editComponent:"NDatePicker",editComponentProps:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss"}},{title:"结束日期",key:"endTime",width:200},{title:"创建时间",key:"date"},{title:"停留时间",key:"time"}];var E=m({components:{BasicTable:d},setup(){const e=b(),d=b(""),p=y({params:{pageSize:5,name:"xiaoMa"},actionColumn:{width:150,title:"操作",key:"action",fixed:"right",align:"center",render:e=>u(c,{style:"button",actions:h(e)})}});function m(e){var t;d.value=e.key,null==(t=e.onEdit)||t.call(e,!0)}function v(e){var t;d.value="",null==(t=e.onEdit)||t.call(e,!1,!1)}function k(e){return r(this,null,(function*(){var t;(yield null==(t=e.onEdit)?void 0:t.call(e,!1,!0))&&(d.value="")}))}function h(e){return e.editable?[{label:"保存",onClick:k.bind(null,e)},{label:"取消",onClick:v.bind(null,e)}]:[{label:"编辑",onClick:m.bind(null,e)}]}return C=((e,t)=>{for(var n in t||(t={}))a.call(t,n)&&l(e,n,t[n]);if(o)for(var n of o(t))i.call(t,n)&&l(e,n,t[n]);return e})({},f(p)),t(C,n({columns:j,actionRef:e,loadDataTable:e=>r(this,null,(function*(){return yield s(e)})),onCheckedRow:function(e){},reloadTable:function(){e.value.reload()},editEnd:function({record:e,index:t,key:n,value:o}){},onEditChange:function({column:e,value:t,record:n}){"id"===e.key&&(n.editValueRefs.name4.value=`${t}`)}}));var C}});const T=g("刷新数据");E.render=function(e,t,n,o,a,i){const l=v("n-button"),r=v("BasicTable"),d=v("n-card");return k(),h(d,{bordered:!1,class:"proCard"},{default:C((()=>[w(r,{title:"表格列表",titleTooltip:"这是一个提示",columns:e.columns,request:e.loadDataTable,"row-key":e=>e.id,ref:"actionRef",actionColumn:e.actionColumn,onEditEnd:e.editEnd,onEditChange:e.onEditChange,"onUpdate:checkedRowKeys":e.onCheckedRow},{toolbar:C((()=>[w(l,{type:"primary",onClick:e.reloadTable},{default:C((()=>[T])),_:1},8,["onClick"])])),_:1},8,["columns","request","row-key","actionColumn","onEditEnd","onEditChange","onUpdate:checkedRowKeys"])])),_:1})};export default E;
