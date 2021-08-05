import{_ as e}from"./BasicForm.7095d3d0.js";import{u as o}from"./useForm.c86c0d55.js";import{d as a,f as l,Z as t,p as s,a as n,V as r,o as p,c as i,b as d,e as c,bg as u}from"./vendor.c1e6e6e7.js";import"./index.73fa6b69.js";import"./propTypes.34968b9b.js";const m=[{field:"name",component:"NInput",label:"姓名",labelMessage:"这是一个提示",giProps:{span:1},componentProps:{placeholder:"请输入姓名",onInput:e=>{}},rules:[{required:!0,message:"请输入姓名",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"手机",componentProps:{placeholder:"请输入手机号码",showButton:!1,onInput:e=>{}}},{field:"type",component:"NSelect",label:"类型",giProps:{},componentProps:{placeholder:"请选择类型",options:[{label:"舒适性",value:1},{label:"经济性",value:2}],onUpdateValue:e=>{}}},{field:"makeDate",component:"NDatePicker",label:"预约时间",giProps:{},componentProps:{type:"date",clearable:!0,defaultValue:118313526e4,onUpdateValue:e=>{}}},{field:"makeTime",component:"NTimePicker",label:"停留时间",giProps:{},componentProps:{clearable:!0,onUpdateValue:e=>{}}},{field:"makeProject",component:"NCheckbox",label:"预约项目",giProps:{},componentProps:{placeholder:"请选择预约项目",options:[{label:"种牙",value:1},{label:"补牙",value:2},{label:"根管",value:3}],onUpdateChecked:e=>{}}},{field:"makeSource",component:"NRadioGroup",label:"来源",giProps:{},componentProps:{options:[{label:"网上",value:1},{label:"门店",value:2}],onUpdateChecked:e=>{}}},{field:"status",label:"状态",giProps:{},slot:"statusSlot"}];var b=a({components:{BasicForm:e},setup(){const e=l(null),a=t(),[s,{setFieldsValue:n}]=o({gridProps:{cols:1},collapsedRows:3,labelWidth:120,layout:"horizontal",submitButtonText:"提交预约",schemas:m});return{register:s,formRef:e,handleSubmit:function(e){a.success(JSON.stringify(e))},handleReset:function(e){},setName:function(){n({name:"小马哥"})}}}});const f=c();s("data-v-e190af38");const g={class:"n-layout-page-header"},v=u(" useForm 表单，用于向用户收集表单信息 "),P={class:"BasicForm"};n();const h=f(((e,o,a,l,t,s)=>{const n=r("n-card"),c=r("n-input"),u=r("BasicForm");return p(),i("div",null,[d("div",g,[d(n,{bordered:!1,title:"基础表单"},{default:f((()=>[v])),_:1})]),d(n,{bordered:!1,class:"proCard mt-4"},{default:f((()=>[d("div",P,[d(u,{onRegister:e.register,onSubmit:e.handleSubmit,onReset:e.handleReset},{statusSlot:f((({model:e,field:o})=>[d(c,{value:e[o],"onUpdate:value":a=>e[o]=a},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit","onReset"])])])),_:1})])}));b.render=h,b.__scopeId="data-v-e190af38";export default b;
