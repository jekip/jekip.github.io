import{_ as e}from"./BasicForm.5f641f41.js";import"./index.c7a2ed8c.js";import{d as a,f as o,_ as l,p as t,a as n,X as s,o as p,c as r,b as c,e as d,bh as u}from"./vendor.753c6347.js";import"./propTypes.34968b9b.js";const m=[{field:"name",component:"NInput",label:"姓名",labelMessage:"这是一个提示",componentProps:{placeholder:"请输入姓名",onInput:e=>{}},rules:[{required:!0,message:"请输入姓名",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"手机",componentProps:{placeholder:"请输入手机号码",showButton:!1,onInput:e=>{}}},{field:"type",component:"NSelect",label:"类型",componentProps:{placeholder:"请选择类型",options:[{label:"舒适性",value:1},{label:"经济性",value:2}],onUpdateValue:e=>{}}},{field:"makeDate",component:"NDatePicker",label:"预约时间",componentProps:{type:"date",clearable:!0,defaultValue:118313526e4,onUpdateValue:e=>{}}},{field:"makeTime",component:"NTimePicker",label:"停留时间",componentProps:{clearable:!0,onUpdateValue:e=>{}}},{field:"makeProject",component:"NCheckbox",label:"预约项目",componentProps:{placeholder:"请选择预约项目",options:[{label:"种牙",value:1},{label:"补牙",value:2},{label:"根管",value:3}],onUpdateChecked:e=>{}}},{field:"makeSource",component:"NRadioGroup",label:"来源",componentProps:{options:[{label:"网上",value:1},{label:"门店",value:2}],onUpdateChecked:e=>{}}},{field:"status",label:"状态",slot:"statusSlot"}];var i=a({components:{BasicForm:e},setup(){const e=o(null),a=l();return{schemas:m,formRef:e,handleSubmit:function(e){a.success(JSON.stringify(e))},handleReset:function(e){}}}});const b=d();t("data-v-47821b48");const f={class:"n-layout-page-header"},v=u(" 基础表单，用于向用户收集表单信息 "),h={class:"BasicForm"};n();const P=b(((e,a,o,l,t,n)=>{const d=s("n-card"),u=s("n-input"),m=s("BasicForm");return p(),r("div",null,[c("div",f,[c(d,{bordered:!1,title:"基础表单"},{default:b((()=>[v])),_:1})]),c(d,{bordered:!1,class:"proCard mt-4"},{default:b((()=>[c("div",h,[c(m,{submitButtonText:"提交预约",layout:"horizontal",gridProps:{cols:1},schemas:e.schemas},{statusSlot:b((({model:e,field:a})=>[c(u,{value:e[a],"onUpdate:value":o=>e[a]=o},null,8,["value","onUpdate:value"])])),_:1},8,["schemas"])])])),_:1})])}));i.render=P,i.__scopeId="data-v-47821b48";export default i;
