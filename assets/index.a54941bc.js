var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{_ as n}from"./BasicUpload.a65da583.js";import{d}from"./index.85173166.js";import{d as s,f as i,Y as m,j as p,i as f,R as c,o as v,c as b,b as g,_ as h,b8 as _}from"./vendor.735a8723.js";import"./componentSetting.df76d574.js";const y=d(),V=[{label:"种牙",value:1},{label:"补牙",value:2},{label:"根管",value:3}],U=[{label:"李医生",value:1},{label:"黄医生",value:2},{label:"张医生",value:3}],j={name:{required:!0,message:"请输入预约姓名",trigger:"blur"},remark:{required:!0,message:"请输入预约备注",trigger:"blur"},mobile:{required:!0,message:"请输入预约电话号码",trigger:["input"]},datetime:{required:!0,type:"number",message:"请选择预约时间",trigger:["blur","change"]},doctor:{required:!0,type:"number",message:"请选择预约医生",trigger:"change"}};var k=s({components:{BasicUpload:n},setup(){const e=i(null),n=m(),{uploadUrl:d}=y,s=p({formValue:{name:"",mobile:"",remark:"",sex:1,matter:null,doctor:null,datetime:[]},uploadList:["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"],uploadHeaders:{platform:"miniPrograms",timestamp:(new Date).getTime(),token:"Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo="}});return c=((e,a)=>{for(var l in a||(a={}))r.call(a,l)&&u(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&u(e,l,a[l]);return e})({},f(s)),a(c,l({formRef:e,uploadUrl:d,rules:j,doctorList:U,matterList:V,formSubmit:function(){e.value.validate((e=>{e?n.error("验证失败，请填写完整信息"):n.success("验证成功")}))},resetForm:function(){e.value.restoreValidation()},uploadChange:function(e){}}));var c}});const x={class:"n-layout-page-header"},C=_(" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。表单域标签也可支持响应式。 "),L=_("男"),O=_("女"),P={style:{"margin-left":"80px"}},w=_("提交预约"),q=_("重置");k.render=function(e,a,l,t,r,o){const u=c("n-card"),n=c("n-input"),d=c("n-form-item"),s=c("n-date-picker"),i=c("n-select"),m=c("n-radio"),p=c("n-space"),f=c("n-radio-group"),_=c("BasicUpload"),y=c("n-button"),V=c("n-form"),U=c("n-grid-item"),j=c("n-grid");return v(),b("div",null,[g("div",x,[g(u,{bordered:!1,title:"基础表单"},{default:h((()=>[C])),_:1})]),g(u,{bordered:!1,class:"proCard mt-4"},{default:h((()=>[g(j,{cols:"2 s:1 m:3 l:3 xl:3 2xl:3",responsive:"screen"},{default:h((()=>[g(U,{offset:"0 s:0 m:1 l:1 xl:1 2xl:1"},{default:h((()=>[g(V,{"label-width":80,model:e.formValue,rules:e.rules,"label-placement":"left",ref:"formRef",class:"py-8"},{default:h((()=>[g(d,{label:"预约姓名",path:"name"},{default:h((()=>[g(n,{value:e.formValue.name,"onUpdate:value":a[1]||(a[1]=a=>e.formValue.name=a),placeholder:"输入姓名"},null,8,["value"])])),_:1}),g(d,{label:"预约号码",path:"mobile"},{default:h((()=>[g(n,{placeholder:"电话号码",value:e.formValue.mobile,"onUpdate:value":a[2]||(a[2]=a=>e.formValue.mobile=a)},null,8,["value"])])),_:1}),g(d,{label:"预约时间",path:"datetime"},{default:h((()=>[g(s,{type:"datetime",value:e.formValue.datetime,"onUpdate:value":a[3]||(a[3]=a=>e.formValue.datetime=a)},null,8,["value"])])),_:1}),g(d,{label:"预约医生",path:"doctor"},{default:h((()=>[g(i,{placeholder:"请选择预约医生",options:e.doctorList,value:e.formValue.doctor,"onUpdate:value":a[4]||(a[4]=a=>e.formValue.doctor=a)},null,8,["options","value"])])),_:1}),g(d,{label:"预约事项",path:"matter"},{default:h((()=>[g(i,{placeholder:"请选择预约事项",options:e.matterList,value:e.formValue.matter,"onUpdate:value":a[5]||(a[5]=a=>e.formValue.matter=a),multiple:""},null,8,["options","value"])])),_:1}),g(d,{label:"性别",path:"sex"},{default:h((()=>[g(f,{value:e.formValue.sex,"onUpdate:value":a[6]||(a[6]=a=>e.formValue.sex=a),name:"sex"},{default:h((()=>[g(p,null,{default:h((()=>[g(m,{value:1},{default:h((()=>[L])),_:1}),g(m,{value:2},{default:h((()=>[O])),_:1})])),_:1})])),_:1},8,["value"])])),_:1}),g(d,{label:"预约备注",path:"remark"},{default:h((()=>[g(n,{value:e.formValue.remark,"onUpdate:value":a[7]||(a[7]=a=>e.formValue.remark=a),type:"textarea",placeholder:"请输入预约备注"},null,8,["value"])])),_:1}),g(d,{label:"图片",path:"img"},{default:h((()=>[g(_,{action:`${e.uploadUrl}/v1.0/files`,headers:e.uploadHeaders,data:{type:0},name:"files",width:100,height:100,onUploadChange:e.uploadChange,value:e.uploadList,"onUpdate:value":a[8]||(a[8]=a=>e.uploadList=a),helpText:"单个文件不超过20MB，最多只能上传10个文件"},null,8,["action","headers","onUploadChange","value"])])),_:1}),g("div",P,[g(p,null,{default:h((()=>[g(y,{type:"primary",onClick:e.formSubmit},{default:h((()=>[w])),_:1},8,["onClick"]),g(y,{onClick:e.resetForm},{default:h((()=>[q])),_:1},8,["onClick"])])),_:1})])])),_:1},8,["model","rules"])])),_:1})])),_:1})])),_:1})])};export default k;
