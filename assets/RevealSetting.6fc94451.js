var h=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var f=(u,e,t)=>e in u?h(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,E=(u,e)=>{for(var t in e||(e={}))P.call(e,t)&&f(u,t,e[t]);if(c)for(var t of c(e))y.call(e,t)&&f(u,t,e[t]);return u},C=(u,e)=>k(u,w(e));import{d as N,r as U,u as $,D as H,b as L,a7 as W,s as M,o as R,E as S,w as n,i as l,j as v,a as i,_ as T,ac as j,k as q,ai as z,m as O,cF as G,aj as I,ak as J,n as K,cy as Q,cz as X}from"./index.693e80b0.js";const Y={name:{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",trigger:"blur"},mobile:{required:!0,message:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",trigger:"input"}},Z=[{label:"\u5DE6\u4E0A",value:1},{label:"\u53F3\u4E0A",value:2},{label:"\u5C45\u4E2D",value:3},{label:"\u53F3\u4E0B",value:4}],x=[{label:"2\u4F4D",value:1},{label:"3\u4F4D",value:2},{label:"4\u4F4D",value:3}],uu=[{label:"\u56DB\u820D\u4E94\u5165",value:1},{label:"\u5411\u4E0A\u53D6\u6574",value:2},{label:"\u5411\u4E0B\u53D6\u6574",value:3}],eu=N({setup(){const u=U(null),e=$(),t=H(),p=L({formValue:{bigWidth:"",bigHeight:"",smallWidth:"",smallHeight:"",watermarkClarity:null,pricePrecise:1,isMarketPrice:!0,pricePreciseNum:null}});function F(s){s||t.warning({title:"\u63D0\u793A",content:"\u60A8\u786E\u5B9A\u8981\u5173\u95ED\u7CFB\u7EDF\u8BBF\u95EE\u5417\uFF1F\u8BE5\u64CD\u4F5C\u7ACB\u9A6C\u751F\u6548\uFF0C\u8BF7\u614E\u91CD\u64CD\u4F5C\uFF01",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{e.success("\u64CD\u4F5C\u6210\u529F")},onNegativeClick:()=>{p.formValue.systemOpen=!0}})}function _(){u.value.validate(s=>{s?e.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):e.success("\u9A8C\u8BC1\u6210\u529F")})}function r(){u.value.restoreValidation()}return C(E({formRef:u},W(p)),{pricePreciseList:uu,watermarkPlaceList:Z,pricePreciseNumList:x,rules:Y,formSubmit:_,resetForm:r,systemOpenChange:F})}}),lu=i("span",null,"\u5BBD\u5EA6\uFF1A",-1),au=i("span",null,"\u9AD8\u5EA6\uFF1A",-1),nu=i("span",null,"\u5BBD\u5EA6\uFF1A",-1),tu=i("span",null,"\u9AD8\u5EA6\uFF1A",-1);function ou(u,e,t,p,F,_){const r=T,s=j,o=q,B=z,d=O,g=G,m=I,D=J,b=K,A=Q,V=X;return R(),S(V,{cols:"2 s:2 m:2 l:3 xl:3 2xl:3",responsive:"screen"},{default:n(()=>[l(A,null,{default:n(()=>[l(b,{"label-width":120,model:u.formValue,rules:u.rules,ref:"formRef"},{default:n(()=>[l(o,{label:"\u5546\u54C1\u56FE\u7247(\u5927)"},{default:n(()=>[l(s,{align:"center"},{default:n(()=>[lu,l(r,{value:u.formValue.bigWidth,"onUpdate:value":e[0]||(e[0]=a=>u.formValue.bigWidth=a),style:{width:"80px"},placeholder:"\u5BBD\u5EA6\u50CF\u7D20"},null,8,["value"]),au,l(r,{value:u.formValue.bigHeight,"onUpdate:value":e[1]||(e[1]=a=>u.formValue.bigHeight=a),style:{width:"80px"},placeholder:"\u9AD8\u5EA6\u50CF\u7D20"},null,8,["value"])]),_:1})]),_:1}),l(o,{label:"\u5546\u54C1\u56FE\u7247(\u5C0F)"},{default:n(()=>[l(s,{align:"center"},{default:n(()=>[nu,l(r,{value:u.formValue.smallWidth,"onUpdate:value":e[2]||(e[2]=a=>u.formValue.smallWidth=a),style:{width:"80px"},placeholder:"\u5BBD\u5EA6\u50CF\u7D20"},null,8,["value"]),tu,l(r,{value:u.formValue.smallHeight,"onUpdate:value":e[3]||(e[3]=a=>u.formValue.smallHeight=a),style:{width:"80px"},placeholder:"\u9AD8\u5EA6\u50CF\u7D20"},null,8,["value"])]),_:1})]),_:1}),l(o,{label:"\u6C34\u5370\u900F\u660E\u5EA6",path:"watermarkClarity"},{default:n(()=>[l(B,{value:u.formValue.watermarkClarity,"onUpdate:value":e[4]||(e[4]=a=>u.formValue.watermarkClarity=a),"show-button":!1,placeholder:"\u8BF7\u8F93\u5165\u6C34\u5370\u900F\u660E\u5EA6"},null,8,["value"])]),_:1}),l(o,{label:"\u6C34\u5370\u56FE\u7247",path:"watermarkClarity"},{default:n(()=>[l(g,{action:"http://www.mocky.io/v2/5e4bafc63100007100d8b70f"},{default:n(()=>[l(d,null,{default:n(()=>[v("\u4E0A\u4F20\u6587\u4EF6")]),_:1})]),_:1})]),_:1}),l(o,{label:"\u6C34\u5370\u4F4D\u7F6E",path:"watermarkPlace"},{default:n(()=>[l(m,{placeholder:"\u8BF7\u9009\u62E9\u4EF7\u683C\u7CBE\u786E\u65B9\u5F0F",options:u.watermarkPlaceList,value:u.formValue.watermarkPlace,"onUpdate:value":e[5]||(e[5]=a=>u.formValue.watermarkPlace=a)},null,8,["options","value"])]),_:1}),l(o,{label:"\u4EF7\u683C\u7CBE\u786E\u4F4D\u6570",path:"pricePreciseNum"},{default:n(()=>[l(m,{placeholder:"\u8BF7\u9009\u62E9\u4EF7\u683C\u7CBE\u786E\u4F4D\u6570",options:u.pricePreciseNumList,value:u.formValue.pricePreciseNum,"onUpdate:value":e[6]||(e[6]=a=>u.formValue.pricePreciseNum=a)},null,8,["options","value"])]),_:1}),l(o,{label:"\u4EF7\u683C\u7CBE\u786E\u65B9\u5F0F",path:"pricePrecise"},{default:n(()=>[l(m,{placeholder:"\u8BF7\u9009\u62E9\u4EF7\u683C\u7CBE\u786E\u65B9\u5F0F",options:u.pricePreciseList,value:u.formValue.pricePrecise,"onUpdate:value":e[7]||(e[7]=a=>u.formValue.pricePrecise=a)},null,8,["options","value"])]),_:1}),l(o,{label:"\u524D\u53F0\u663E\u793A\u5E02\u573A\u4EF7",path:"isMarketPrice"},{default:n(()=>[l(D,{size:"large",value:u.formValue.isMarketPrice,"onUpdate:value":e[8]||(e[8]=a=>u.formValue.isMarketPrice=a)},null,8,["value"])]),_:1}),i("div",null,[l(s,null,{default:n(()=>[l(d,{type:"primary",onClick:u.formSubmit},{default:n(()=>[v("\u66F4\u65B0\u663E\u793A\u4FE1\u606F")]),_:1},8,["onClick"])]),_:1})])]),_:1},8,["model","rules"])]),_:1})]),_:1})}const iu=M(eu,[["render",ou]]);export{iu as default};
