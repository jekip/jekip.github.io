var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,o,l)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[o]=l,i=(e,a)=>{for(var o in a||(a={}))t.call(a,o)&&r(e,o,a[o]);if(l)for(var o of l(a))n.call(a,o)&&r(e,o,a[o]);return e};import{_ as s,a as d}from"./TableAction.3dd738d3.js";import{_ as u}from"./BasicForm.7095d3d0.js";import{u as c}from"./useForm.c86c0d55.js";import{g as m}from"./list.c702b208.js";import{s as p,av as f,d as b,bI as h,Q as v,f as y,Z as g,j as k,i as w,V as P,o as C,c as _,a3 as j,b as S,bg as T}from"./vendor.c1e6e6e7.js";import"./useDesignSetting.f1c1680c.js";import"./index.73fa6b69.js";import"./propTypes.34968b9b.js";import"./componentSetting.df76d574.js";import"./index.esm.71c6e74c.js";const R=[{title:"id",key:"id"},{title:"名称",key:"name"},{title:"头像",key:"avatar",render:e=>p(f,{size:48,src:e.avatar})},{title:"地址",key:"address",auth:["basic_list"],ifShow:e=>!0},{title:"开始日期",key:"beginTime"},{title:"结束日期",key:"endTime"},{title:"创建时间",key:"date"}],U={name:{required:!0,trigger:["blur","input"],message:"请输入名称"},address:{required:!0,trigger:["blur","input"],message:"请输入地址"},date:{type:"number",required:!0,trigger:["blur","change"],message:"请选择日期"}},O=[{field:"name",labelMessage:"这是一个提示",component:"NInput",label:"姓名",componentProps:{placeholder:"请输入姓名",onInput:e=>{}},rules:[{required:!0,message:"请输入姓名",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"手机",componentProps:{placeholder:"请输入手机号码",showButton:!1,onInput:e=>{}}},{field:"type",component:"NSelect",label:"类型",componentProps:{placeholder:"请选择类型",options:[{label:"舒适性",value:1},{label:"经济性",value:2}],onUpdateValue:e=>{}}},{field:"makeDate",component:"NDatePicker",label:"预约时间",componentProps:{type:"date",clearable:!0,defaultValue:118313526e4,onUpdateValue:e=>{}}},{field:"makeTime",component:"NTimePicker",label:"停留时间",componentProps:{clearable:!0,onUpdateValue:e=>{}}},{field:"status",label:"状态",slot:"statusSlot"},{field:"makeProject",component:"NCheckbox",label:"预约项目",componentProps:{placeholder:"请选择预约项目",options:[{label:"种牙",value:1},{label:"补牙",value:2},{label:"根管",value:3}],onUpdateChecked:e=>{}}},{field:"makeSource",component:"NRadioGroup",label:"来源",componentProps:{options:[{label:"网上",value:1},{label:"门店",value:2}],onUpdateChecked:e=>{}}}];var B=b({components:{BasicTable:s,PlusOutlined:h,TableAction:d,BasicForm:u},setup(){const e=v(),l=y(null),t=g(),n=y(),r=k({showModal:!1,formBtnLoading:!1,formParams:{},params:{pageSize:5,name:"xiaoMa"},actionColumn:{width:250,title:"操作",key:"action",fixed:"right",render:e=>p(d,{style:"button",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:b.bind(null,e),ifShow:()=>!0,auth:["basic_list"]},{label:"编辑",onClick:f.bind(null,e),ifShow:()=>!0,auth:["basic_list"]}],dropDownActions:[{label:"启用",key:"enabled",ifShow:()=>!0},{label:"禁用",key:"disabled",ifShow:()=>!0}],select:e=>{t.info(`您点击了，${e} 按钮`)}})}}),[s,{}]=c({gridProps:{cols:5},labelWidth:80,schemas:O});function u(){n.value.reload()}function f(a){e.push({name:"basic-info",params:{id:a.id}})}function b(e){t.info("点击了删除")}return h=i({},w(r)),a(h,o({formRef:l,columns:R,rules:U,actionRef:n,register:s,confirmForm:function(e){e.preventDefault(),r.formBtnLoading=!0,l.value.validate((e=>{e?t.error("请填写完整信息"):(t.success("新建成功"),setTimeout((()=>{r.showModal=!1,u()}))),r.formBtnLoading=!1}))},loadDataTable:e=>{return a=this,o=null,l=function*(){let a=i(i({},e),r.formParams);return yield m(a)},new Promise(((e,t)=>{var n=e=>{try{i(l.next(e))}catch(a){t(a)}},r=e=>{try{i(l.throw(e))}catch(a){t(a)}},i=a=>a.done?e(a.value):Promise.resolve(a.value).then(n,r);i((l=l.apply(a,o)).next())}));var a,o,l},onCheckedRow:function(e){},reloadTable:u,addTable:function(){r.showModal=!0},handleEdit:f,handleDelete:b,handleOpen:function(e){t.info("点击了删除")},handleSubmit:function(e){r.formParams=e,u()},handleReset:function(e){}}));var h}});const x=T(" 新建 "),D=T("刷新数据"),M=T("取消"),N=T("确定");B.render=function(e,a,o,l,t,n){const r=P("n-input"),i=P("BasicForm"),s=P("PlusOutlined"),d=P("n-icon"),u=P("n-button"),c=P("BasicTable"),m=P("n-form-item"),p=P("n-date-picker"),f=P("n-form"),b=P("n-space"),h=P("n-modal"),v=P("n-card");return C(),_(v,{bordered:!1,class:"proCard"},{default:j((()=>[S(i,{onRegister:e.register,onSubmit:e.handleSubmit,onReset:e.handleReset},{statusSlot:j((({model:e,field:a})=>[S(r,{value:e[a],"onUpdate:value":o=>e[a]=o},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit","onReset"]),S(c,{columns:e.columns,request:e.loadDataTable,"row-key":e=>e.id,ref:"actionRef",actionColumn:e.actionColumn,"onUpdate:checkedRowKeys":e.onCheckedRow},{tableTitle:j((()=>[S(u,{type:"primary",onClick:e.addTable},{icon:j((()=>[S(d,null,{default:j((()=>[S(s)])),_:1})])),default:j((()=>[x])),_:1},8,["onClick"])])),toolbar:j((()=>[S(u,{type:"primary",onClick:e.reloadTable},{default:j((()=>[D])),_:1},8,["onClick"])])),_:1},8,["columns","request","row-key","actionColumn","onUpdate:checkedRowKeys"]),S(h,{show:e.showModal,"onUpdate:show":a[5]||(a[5]=a=>e.showModal=a),"show-icon":!1,preset:"dialog",title:"新建"},{action:j((()=>[S(b,null,{default:j((()=>[S(u,{onClick:a[4]||(a[4]=()=>e.showModal=!1)},{default:j((()=>[M])),_:1}),S(u,{type:"info",loading:e.formBtnLoading,onClick:e.confirmForm},{default:j((()=>[N])),_:1},8,["loading","onClick"])])),_:1})])),default:j((()=>[S(f,{model:e.formParams,rules:e.rules,ref:"formRef","label-placement":"left","label-width":80,class:"py-4"},{default:j((()=>[S(m,{label:"名称",path:"name"},{default:j((()=>[S(r,{placeholder:"请输入名称",value:e.formParams.name,"onUpdate:value":a[1]||(a[1]=a=>e.formParams.name=a)},null,8,["value"])])),_:1}),S(m,{label:"地址",path:"address"},{default:j((()=>[S(r,{type:"textarea",placeholder:"请输入地址",value:e.formParams.address,"onUpdate:value":a[2]||(a[2]=a=>e.formParams.address=a)},null,8,["value"])])),_:1}),S(m,{label:"日期",path:"date"},{default:j((()=>[S(p,{type:"datetime",placeholder:"请选择日期",value:e.formParams.date,"onUpdate:value":a[3]||(a[3]=a=>e.formParams.date=a)},null,8,["value"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["show"])])),_:1})};export default B;
