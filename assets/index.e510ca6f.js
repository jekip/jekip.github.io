var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(a,l,r)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[l]=r;import{_ as s}from"./BasicUpload.0280efb6.js";import{d as u}from"./index.a9229e8f.js";import{d as i,f as m,Y as d,j as p,i as f,y as c,R as g,o as b,c as v,b as h,_ as y,b8 as j}from"./vendor.735a8723.js";import"./componentSetting.df76d574.js";const U=u(),_={name:{required:!0,message:"请输入预约姓名",trigger:"blur"},remark:{required:!0,message:"请输入预约备注",trigger:"blur"},images:{required:!0,type:"array",message:"请上传病例图片",trigger:"change"}};var V=i({components:{BasicUpload:s},setup(){const e=m(null),s=d(),{uploadUrl:u}=U,i=p({formValue:{name:"",mobile:"",images:["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"]},uploadHeaders:{platform:"miniPrograms",timestamp:(new Date).getTime(),token:"Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo="}});return g=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&n(e,l,a[l]);if(r)for(var l of r(a))t.call(a,l)&&n(e,l,a[l]);return e})({},f(i)),a(g,l({formRef:e,uploadUrl:u,rules:_,formSubmit:function(){e.value.validate((e=>{e?s.error("验证失败，请填写完整信息"):s.success("验证成功")}))},resetForm:function(){e.value.restoreValidation()},uploadChange:function(e){i.formValue.images=c(e)}}));var g}});const C={class:"n-layout-page-header"},k=j(" 上传图片，用于向用户收集图片信息 "),O={style:{"margin-left":"80px"}},x=j("提交预约"),P=j("重置");V.render=function(e,a,l,r,o,t){const n=g("n-card"),s=g("n-input"),u=g("n-form-item"),i=g("BasicUpload"),m=g("n-button"),d=g("n-space"),p=g("n-form"),f=g("n-grid-item"),c=g("n-grid");return b(),v("div",null,[h("div",C,[h(n,{bordered:!1,title:"上传图片"},{default:y((()=>[k])),_:1})]),h(n,{bordered:!1,class:"proCard mt-4"},{default:y((()=>[h(c,{cols:"2 s:1 m:3 l:3 xl:3 2xl:3",responsive:"screen"},{default:y((()=>[h(f,{offset:"0 s:0 m:1 l:1 xl:1 2xl:1"},{default:y((()=>[h(p,{"label-width":80,model:e.formValue,rules:e.rules,"label-placement":"left",ref:"formRef",class:"py-8"},{default:y((()=>[h(u,{label:"预约姓名",path:"name"},{default:y((()=>[h(s,{value:e.formValue.name,"onUpdate:value":a[1]||(a[1]=a=>e.formValue.name=a),placeholder:"输入姓名"},null,8,["value"])])),_:1}),h(u,{label:"预约号码",path:"mobile"},{default:y((()=>[h(s,{placeholder:"电话号码",value:e.formValue.mobile,"onUpdate:value":a[2]||(a[2]=a=>e.formValue.mobile=a)},null,8,["value"])])),_:1}),h(u,{label:"病例图片",path:"images"},{default:y((()=>[h(i,{action:`${e.uploadUrl}/v1.0/files`,headers:e.uploadHeaders,data:{type:0},name:"files",width:100,height:100,onUploadChange:e.uploadChange,value:e.formValue.images,"onUpdate:value":a[3]||(a[3]=a=>e.formValue.images=a),helpText:"单个文件不超过2MB，最多只能上传10个文件"},null,8,["action","headers","onUploadChange","value"])])),_:1}),h("div",O,[h(d,null,{default:y((()=>[h(m,{type:"primary",onClick:e.formSubmit},{default:y((()=>[x])),_:1},8,["onClick"]),h(m,{onClick:e.resetForm},{default:y((()=>[P])),_:1},8,["onClick"])])),_:1})])])),_:1},8,["model","rules"])])),_:1})])),_:1})])),_:1})])};export default V;
