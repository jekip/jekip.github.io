var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,n=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,o=(e,l)=>{for(var a in l||(l={}))r.call(l,a)&&n(e,a,l[a]);if(t)for(var a of t(l))u.call(l,a)&&n(e,a,l[a]);return e},i=(e,t)=>l(e,a(t));import{d as s,f as d,Z as c,_ as p,j as m,i as f,V as v,o as b,c as g,$ as h,b as y,bf as _,Q as V,F as k,r as P,t as w,X as C,e as T}from"./vendor.af0afcfa.js";const x={name:{required:!0,message:"请输入网站名称",trigger:"blur"},mobile:{required:!0,message:"请输入联系电话",trigger:"input"}};var S=s({setup(){const e=d(null),l=c(),a=p(),t=m({formValue:{name:"",mobile:"",icpCode:"",address:"",loginCode:0,closeText:"网站维护中，暂时无法访问！本网站正在进行系统维护和技术升级，网站暂时无法访问，敬请谅解！",systemOpen:!0}});return i(o({formRef:e},f(t)),{rules:x,formSubmit:function(a){e.value.validate((e=>{e?l.error("验证失败，请填写完整信息"):l.success("验证成功")}))},resetForm:function(){e.value.restoreValidation()},systemOpenChange:function(e){e||a.warning({title:"提示",content:"您确定要关闭系统访问吗？该操作立马生效，请慎重操作！",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{l.success("操作成功")},onNegativeClick:()=>{t.formValue.systemOpen=!0}})}})}});const O=_("开启"),U=_("关闭"),M=_("更新基本信息");S.render=function(e,l,a,t,r,u){const n=v("n-input"),o=v("n-form-item"),i=v("n-radio"),s=v("n-space"),d=v("n-radio-group"),c=v("n-switch"),p=v("n-button"),m=v("n-form"),f=v("n-grid-item"),_=v("n-grid");return b(),g(_,{cols:"2 s:2 m:2 l:3 xl:3 2xl:3",responsive:"screen"},{default:h((()=>[y(f,null,{default:h((()=>[y(m,{"label-width":80,model:e.formValue,rules:e.rules,ref:"formRef"},{default:h((()=>[y(o,{label:"网站名称",path:"name"},{default:h((()=>[y(n,{value:e.formValue.name,"onUpdate:value":l[1]||(l[1]=l=>e.formValue.name=l),placeholder:"请输入网站名称"},null,8,["value"])])),_:1}),y(o,{label:"备案编号",path:"icpCode"},{default:h((()=>[y(n,{placeholder:"请输入备案编号",value:e.formValue.icpCode,"onUpdate:value":l[2]||(l[2]=l=>e.formValue.icpCode=l)},null,8,["value"])])),_:1}),y(o,{label:"联系电话",path:"mobile"},{default:h((()=>[y(n,{placeholder:"请输入联系电话",value:e.formValue.mobile,"onUpdate:value":l[3]||(l[3]=l=>e.formValue.mobile=l)},null,8,["value"])])),_:1}),y(o,{label:"联系地址",path:"address"},{default:h((()=>[y(n,{value:e.formValue.address,"onUpdate:value":l[4]||(l[4]=l=>e.formValue.address=l),type:"textarea",placeholder:"请输入联系地址"},null,8,["value"])])),_:1}),y(o,{label:"登录验证码",path:"loginCode"},{default:h((()=>[y(d,{value:e.formValue.loginCode,"onUpdate:value":l[5]||(l[5]=l=>e.formValue.loginCode=l),name:"loginCode"},{default:h((()=>[y(s,null,{default:h((()=>[y(i,{value:1},{default:h((()=>[O])),_:1}),y(i,{value:0},{default:h((()=>[U])),_:1})])),_:1})])),_:1},8,["value"])])),_:1}),y(o,{label:"网站开启访问",path:"systemOpen"},{default:h((()=>[y(c,{size:"large",value:e.formValue.systemOpen,"onUpdate:value":[l[6]||(l[6]=l=>e.formValue.systemOpen=l),e.systemOpenChange]},null,8,["value","onUpdate:value"])])),_:1}),y(o,{label:"网站关闭提示",path:"closeText"},{default:h((()=>[y(n,{value:e.formValue.closeText,"onUpdate:value":l[7]||(l[7]=l=>e.formValue.closeText=l),type:"textarea",placeholder:"请输入网站关闭提示"},null,8,["value"])])),_:1}),y("div",null,[y(s,null,{default:h((()=>[y(p,{type:"primary",onClick:e.formSubmit},{default:h((()=>[M])),_:1},8,["onClick"])])),_:1})])])),_:1},8,["model","rules"])])),_:1})])),_:1})};const j={name:{required:!0,message:"请输入网站名称",trigger:"blur"},mobile:{required:!0,message:"请输入联系电话",trigger:"input"}},L=[{label:"左上",value:1},{label:"右上",value:2},{label:"居中",value:3},{label:"右下",value:4}],N=[{label:"2位",value:1},{label:"3位",value:2},{label:"4位",value:3}],R=[{label:"四舍五入",value:1},{label:"向上取整",value:2},{label:"向下取整",value:3}];var H=s({setup(){const e=d(null),l=c(),a=p(),t=m({formValue:{bigWidth:"",bigHeight:"",smallWidth:"",smallHeight:"",watermarkClarity:null,pricePrecise:1,isMarketPrice:!0,pricePreciseNum:null}});return i(o({formRef:e},f(t)),{pricePreciseList:R,watermarkPlaceList:L,pricePreciseNumList:N,rules:j,formSubmit:function(a){e.value.validate((e=>{e?l.error("验证失败，请填写完整信息"):l.success("验证成功")}))},resetForm:function(){e.value.restoreValidation()},systemOpenChange:function(e){e||a.warning({title:"提示",content:"您确定要关闭系统访问吗？该操作立马生效，请慎重操作！",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{l.success("操作成功")},onNegativeClick:()=>{t.formValue.systemOpen=!0}})}})}});const W=y("span",null,"宽度：",-1),q=y("span",null,"高度：",-1),z=y("span",null,"宽度：",-1),E=y("span",null,"高度：",-1),F=_("上传文件"),B=_("更新显示信息");H.render=function(e,l,a,t,r,u){const n=v("n-input"),o=v("n-space"),i=v("n-form-item"),s=v("n-input-number"),d=v("n-button"),c=v("n-upload"),p=v("n-select"),m=v("n-switch"),f=v("n-form"),_=v("n-grid-item"),V=v("n-grid");return b(),g(V,{cols:"2 s:2 m:2 l:3 xl:3 2xl:3",responsive:"screen"},{default:h((()=>[y(_,null,{default:h((()=>[y(f,{"label-width":120,model:e.formValue,rules:e.rules,ref:"formRef"},{default:h((()=>[y(i,{label:"商品图片(大)"},{default:h((()=>[y(o,{align:"center"},{default:h((()=>[W,y(n,{value:e.formValue.bigWidth,"onUpdate:value":l[1]||(l[1]=l=>e.formValue.bigWidth=l),style:{width:"80px"},placeholder:"宽度像素"},null,8,["value"]),q,y(n,{value:e.formValue.bigHeight,"onUpdate:value":l[2]||(l[2]=l=>e.formValue.bigHeight=l),style:{width:"80px"},placeholder:"高度像素"},null,8,["value"])])),_:1})])),_:1}),y(i,{label:"商品图片(小)"},{default:h((()=>[y(o,{align:"center"},{default:h((()=>[z,y(n,{value:e.formValue.smallWidth,"onUpdate:value":l[3]||(l[3]=l=>e.formValue.smallWidth=l),style:{width:"80px"},placeholder:"宽度像素"},null,8,["value"]),E,y(n,{value:e.formValue.smallHeight,"onUpdate:value":l[4]||(l[4]=l=>e.formValue.smallHeight=l),style:{width:"80px"},placeholder:"高度像素"},null,8,["value"])])),_:1})])),_:1}),y(i,{label:"水印透明度",path:"watermarkClarity"},{default:h((()=>[y(s,{value:e.formValue.watermarkClarity,"onUpdate:value":l[5]||(l[5]=l=>e.formValue.watermarkClarity=l),"show-button":!1,placeholder:"请输入水印透明度"},null,8,["value"])])),_:1}),y(i,{label:"水印图片",path:"watermarkClarity"},{default:h((()=>[y(c,{action:"http://www.mocky.io/v2/5e4bafc63100007100d8b70f"},{default:h((()=>[y(d,null,{default:h((()=>[F])),_:1})])),_:1})])),_:1}),y(i,{label:"水印位置",path:"watermarkPlace"},{default:h((()=>[y(p,{placeholder:"请选择价格精确方式",options:e.watermarkPlaceList,value:e.formValue.watermarkPlace,"onUpdate:value":l[6]||(l[6]=l=>e.formValue.watermarkPlace=l)},null,8,["options","value"])])),_:1}),y(i,{label:"价格精确位数",path:"pricePreciseNum"},{default:h((()=>[y(p,{placeholder:"请选择价格精确位数",options:e.pricePreciseNumList,value:e.formValue.pricePreciseNum,"onUpdate:value":l[7]||(l[7]=l=>e.formValue.pricePreciseNum=l)},null,8,["options","value"])])),_:1}),y(i,{label:"价格精确方式",path:"pricePrecise"},{default:h((()=>[y(p,{placeholder:"请选择价格精确方式",options:e.pricePreciseList,value:e.formValue.pricePrecise,"onUpdate:value":l[8]||(l[8]=l=>e.formValue.pricePrecise=l)},null,8,["options","value"])])),_:1}),y(i,{label:"前台显示市场价",path:"isMarketPrice"},{default:h((()=>[y(m,{size:"large",value:e.formValue.isMarketPrice,"onUpdate:value":l[9]||(l[9]=l=>e.formValue.isMarketPrice=l)},null,8,["value"])])),_:1}),y("div",null,[y(o,null,{default:h((()=>[y(d,{type:"primary",onClick:e.formSubmit},{default:h((()=>[B])),_:1},8,["onClick"])])),_:1})])])),_:1},8,["model","rules"])])),_:1})])),_:1})};const I={originator:{required:!0,message:"请输入发件人邮箱",trigger:"blur"}};var D=s({setup(){const e=d(null),l=c(),a=m({formValue:{originator:""}});return i(o({formRef:e},f(a)),{rules:I,formSubmit:function(){e.value.validate((e=>{e?l.error("验证失败，请填写完整信息"):l.success("验证成功")}))}})}});const Q=_("邮件测试"),X=_("更新邮件信息");D.render=function(e,l,a,t,r,u){const n=v("n-input"),o=v("n-form-item"),i=v("n-button"),s=v("n-space"),d=v("n-form"),c=v("n-grid-item"),p=v("n-grid");return b(),g(p,{cols:"2 s:2 m:2 l:3 xl:3 2xl:3",responsive:"screen"},{default:h((()=>[y(c,null,{default:h((()=>[y(d,{"label-width":120,model:e.formValue,rules:e.rules,ref:"formRef"},{default:h((()=>[y(o,{label:"发件人邮箱",path:"originator"},{default:h((()=>[y(n,{value:e.formValue.originator,"onUpdate:value":l[1]||(l[1]=l=>e.formValue.originator=l),placeholder:"请输入发件人邮箱"},null,8,["value"])])),_:1}),y(o,{label:"SMTP服务器地址"},{default:h((()=>[y(n,{placeholder:"请输入SMTP服务器地址"})])),_:1}),y(o,{label:"SMTP服务器端口"},{default:h((()=>[y(n,{placeholder:"请输入SMTP服务器端口"})])),_:1}),y(o,{label:"SMTP用户名"},{default:h((()=>[y(n,{placeholder:"请输入SMTP用户名"})])),_:1}),y(o,{label:"SMTP密码"},{default:h((()=>[y(n,{type:"password",placeholder:"请输入SMTP密码"})])),_:1}),y(o,{label:"邮件测试"},{default:h((()=>[y(i,null,{default:h((()=>[Q])),_:1})])),_:1}),y("div",null,[y(s,null,{default:h((()=>[y(i,{type:"primary",onClick:e.formSubmit},{default:h((()=>[X])),_:1},8,["onClick"])])),_:1})])])),_:1},8,["model","rules"])])),_:1})])),_:1})};const Z=[{name:"基本设置",desc:"系统常规设置",key:1},{name:"显示设置",desc:"系统显示设置",key:2},{name:"邮件设置",desc:"系统邮件设置",key:3}];var $=s({components:{BasicSetting:S,RevealSetting:H,EmailSetting:D},setup(){V();const e=m({type:1,typeTitle:"基本设置"});return i(o({},f(e)),{switchType:function(l){e.type=l.key,e.typeTitle=l.name},typeTabList:Z})}});const A=T(),G=A(((e,l,a,t,r,u)=>{const n=v("n-thing"),o=v("n-card"),i=v("n-grid-item"),s=v("BasicSetting"),d=v("RevealSetting"),c=v("EmailSetting"),p=v("n-grid");return b(),g("div",null,[y(p,{"x-gap":24},{default:A((()=>[y(i,{span:"6"},{default:A((()=>[y(o,{bordered:!1,size:"small",class:"proCard"},{default:A((()=>[(b(!0),g(k,null,P(e.typeTabList,(l=>(b(),g(n,{class:["thing-cell",{"thing-cell-on":e.type===l.key}],key:l.key,onClick:a=>e.switchType(l)},{header:A((()=>[_(w(l.name),1)])),description:A((()=>[_(w(l.desc),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),y(i,{span:"18"},{default:A((()=>[y(o,{bordered:!1,size:"small",title:e.typeTitle,class:"proCard"},{default:A((()=>[1===e.type?(b(),g(s,{key:0})):C("",!0),2===e.type?(b(),g(d,{key:1})):C("",!0),3===e.type?(b(),g(c,{key:2})):C("",!0)])),_:1},8,["title"])])),_:1})])),_:1})])}));$.render=G,$.__scopeId="data-v-60ab4351";export default $;
