var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,i=(e,t)=>{for(var l in t||(t={}))r.call(t,l)&&n(e,l,t[l]);if(a)for(var l of a(t))s.call(t,l)&&n(e,l,t[l]);return e},u=(e,a)=>t(e,l(a));import{d as o,f as d,Z as m,j as p,i as c,V as f,o as y,c as g,$ as b,b as _,b7 as v,F as h,r as x,t as k,X as V,e as w}from"./vendor.eec3232e.js";const S={name:{required:!0,message:"请输入昵称",trigger:"blur"},email:{required:!0,message:"请输入邮箱",trigger:"blur"},mobile:{required:!0,message:"请输入联系电话",trigger:"input"}};var O=o({setup(){const e=d(null),t=m(),l=p({formValue:{name:"",mobile:"",email:"",address:""}});return u(i({formRef:e},c(l)),{rules:S,formSubmit:function(){e.value.validate((e=>{e?t.error("验证失败，请填写完整信息"):t.success("验证成功")}))}})}});const j=v("更新基本信息");O.render=function(e,t,l,a,r,s){const n=f("n-input"),i=f("n-form-item"),u=f("n-button"),o=f("n-space"),d=f("n-form"),m=f("n-grid-item"),p=f("n-grid");return y(),g(p,{cols:"2 s:2 m:2 l:3 xl:3 2xl:3",responsive:"screen"},{default:b((()=>[_(m,null,{default:b((()=>[_(d,{"label-width":80,model:e.formValue,rules:e.rules,ref:"formRef"},{default:b((()=>[_(i,{label:"昵称",path:"name"},{default:b((()=>[_(n,{value:e.formValue.name,"onUpdate:value":t[1]||(t[1]=t=>e.formValue.name=t),placeholder:"请输入昵称"},null,8,["value"])])),_:1}),_(i,{label:"邮箱",path:"email"},{default:b((()=>[_(n,{placeholder:"请输入备案编号",value:e.formValue.email,"onUpdate:value":t[2]||(t[2]=t=>e.formValue.email=t)},null,8,["value"])])),_:1}),_(i,{label:"联系电话",path:"mobile"},{default:b((()=>[_(n,{placeholder:"请输入联系电话",value:e.formValue.mobile,"onUpdate:value":t[3]||(t[3]=t=>e.formValue.mobile=t)},null,8,["value"])])),_:1}),_(i,{label:"联系地址",path:"address"},{default:b((()=>[_(n,{value:e.formValue.address,"onUpdate:value":t[4]||(t[4]=t=>e.formValue.address=t),type:"textarea",placeholder:"请输入联系地址"},null,8,["value"])])),_:1}),_("div",null,[_(o,null,{default:b((()=>[_(u,{type:"primary",onClick:e.formSubmit},{default:b((()=>[j])),_:1},8,["onClick"])])),_:1})])])),_:1},8,["model","rules"])])),_:1})])),_:1})};const T={name:{required:!0,message:"请输入昵称",trigger:"blur"},email:{required:!0,message:"请输入邮箱",trigger:"blur"},mobile:{required:!0,message:"请输入联系电话",trigger:"input"}};var q=o({setup(){const e=d(null),t=m(),l=p({formValue:{name:"",mobile:"",email:"",address:""}});return u(i({formRef:e},c(l)),{rules:T,formSubmit:function(){e.value.validate((e=>{e?t.error("验证失败，请填写完整信息"):t.success("验证成功")}))}})}});const C=v("修改"),P=_("span",{class:"text-gray-400"},"绑定手机和邮箱，并设置密码，帐号更安全",-1),U=v("修改"),R=_("span",{class:"text-gray-400"},"已绑定手机号：+86189****4877",-1),z=v("设置"),B=_("span",{class:"text-gray-400"},"未设置密保问题，密保问题可有效保护账户安全",-1),I=v("修改"),L=_("span",{class:"text-gray-400"},"已绑定域名：https://www.naiveui.com",-1);q.render=function(e,t,l,a,r,s){const n=f("n-button"),i=f("n-thing"),u=f("n-list-item"),o=f("n-list"),d=f("n-grid-item"),m=f("n-grid");return y(),g(m,{cols:"1",responsive:"screen",class:"-mt-5"},{default:b((()=>[_(d,null,{default:b((()=>[_(o,null,{default:b((()=>[_(u,null,{suffix:b((()=>[_(n,{type:"primary",text:""},{default:b((()=>[C])),_:1})])),default:b((()=>[_(i,{title:"账户密码"},{description:b((()=>[P])),_:1})])),_:1}),_(u,null,{suffix:b((()=>[_(n,{type:"primary",text:""},{default:b((()=>[U])),_:1})])),default:b((()=>[_(i,{title:"绑定手机"},{description:b((()=>[R])),_:1})])),_:1}),_(u,null,{suffix:b((()=>[_(n,{type:"primary",text:""},{default:b((()=>[z])),_:1})])),default:b((()=>[_(i,{title:"密保问题"},{description:b((()=>[B])),_:1})])),_:1}),_(u,null,{suffix:b((()=>[_(n,{type:"primary",text:""},{default:b((()=>[I])),_:1})])),default:b((()=>[_(i,{title:"个性域名"},{description:b((()=>[L])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})};const D=[{name:"基本设置",desc:"个人账户信息设置",key:1},{name:"安全设置",desc:"密码，邮箱等设置",key:2}];var E=o({components:{BasicSetting:O,SafetySetting:q},setup(){const e=p({type:1,typeTitle:"基本设置"});return u(i({},c(e)),{switchType:function(t){e.type=t.key,e.typeTitle=t.name},typeTabList:D})}});const F=w(),X=F(((e,t,l,a,r,s)=>{const n=f("n-thing"),i=f("n-card"),u=f("n-grid-item"),o=f("BasicSetting"),d=f("SafetySetting"),m=f("n-grid");return y(),g("div",null,[_(m,{"x-gap":24},{default:F((()=>[_(u,{span:"6"},{default:F((()=>[_(i,{bordered:!1,size:"small",class:"proCard"},{default:F((()=>[(y(!0),g(h,null,x(e.typeTabList,(t=>(y(),g(n,{class:["thing-cell",{"thing-cell-on":e.type===t.key}],key:t.key,onClick:l=>e.switchType(t)},{header:F((()=>[v(k(t.name),1)])),description:F((()=>[v(k(t.desc),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),_(u,{span:"18"},{default:F((()=>[_(i,{bordered:!1,size:"small",title:e.typeTitle,class:"proCard"},{default:F((()=>[1===e.type?(y(),g(o,{key:0})):V("",!0),2===e.type?(y(),g(d,{key:1})):V("",!0)])),_:1},8,["title"])])),_:1})])),_:1})])}));E.render=X,E.__scopeId="data-v-e89c9818";export default E;
