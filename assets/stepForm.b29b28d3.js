import{d as e,f as t,_ as l,X as a,o as n,c as u,a4 as r,b as s,bh as o,R as c,p as i,a as p,e as d,Y as m}from"./vendor.753c6347.js";const f=[{label:"NaiveUiAdmin@163.com",value:1},{label:"NaiveUiAdmin@qq.com",value:2}],v=[{label:"微信",value:1},{label:"支付宝",value:2}];var y=e({emits:["nextStep"],setup(e,{emit:a}){const n=t(null),u=l(),r=t(1);return{form1Ref:n,current:r,formValue:t({accountType:1,myAccount:null,account:"xioama@qq.com",money:"1980",name:"Ah jung"}),rules:{name:{required:!0,message:"请输入收款人姓名",trigger:"blur"},account:{required:!0,message:"请输入收款账户",trigger:"blur"},money:{required:!0,message:"请输入转账金额",trigger:"blur"},myAccount:{required:!0,type:"number",message:"请选择付款账户",trigger:"change"}},myAccountList:f,accountTypeList:v,formSubmit(){n.value.validate((e=>{e?u.error("验证失败，请填写完整信息"):a("nextStep")}))},resetForm(){n.value.restoreValidation()}}}});const _=s("span",{class:"text-gray-400"},"￥",-1),b={style:{"margin-left":"80px"}},x=o("下一步");y.render=function(e,t,l,o,c,i){const p=a("n-select"),d=a("n-form-item"),m=a("n-input"),f=a("n-input-group"),v=a("n-button"),y=a("n-space"),h=a("n-form");return n(),u(h,{"label-width":90,model:e.formValue,rules:e.rules,"label-placement":"left",ref:"form1Ref",style:{"max-width":"500px",margin:"40px auto 0 80px"}},{default:r((()=>[s(d,{label:"付款账户",path:"myAccount"},{default:r((()=>[s(p,{placeholder:"请选择付款账户",options:e.myAccountList,value:e.formValue.myAccount,"onUpdate:value":t[1]||(t[1]=t=>e.formValue.myAccount=t)},null,8,["options","value"])])),_:1}),s(d,{label:"收款账户",path:"account"},{default:r((()=>[s(f,null,{default:r((()=>[s(p,{placeholder:"请选择",options:e.accountTypeList,style:{width:"20%"},value:e.formValue.accountType,"onUpdate:value":t[2]||(t[2]=t=>e.formValue.accountType=t)},null,8,["options","value"]),s(m,{placeholder:"请输入收款账户",style:{width:"80%"},value:e.formValue.account,"onUpdate:value":t[3]||(t[3]=t=>e.formValue.account=t)},null,8,["value"])])),_:1})])),_:1}),s(d,{label:"收款人姓名",path:"name"},{default:r((()=>[s(m,{placeholder:"请输入收款人姓名",value:e.formValue.name,"onUpdate:value":t[4]||(t[4]=t=>e.formValue.name=t)},null,8,["value"])])),_:1}),s(d,{label:"转账金额",path:"money"},{default:r((()=>[s(m,{placeholder:"请输入转账金额",value:e.formValue.money,"onUpdate:value":t[5]||(t[5]=t=>e.formValue.money=t)},{prefix:r((()=>[_])),_:1},8,["value"])])),_:1}),s("div",b,[s(y,null,{default:r((()=>[s(v,{type:"primary",onClick:e.formSubmit},{default:r((()=>[x])),_:1},8,["onClick"])])),_:1})])])),_:1},8,["model","rules"])};var h=e({emits:["prevStep","nextStep"],setup(e,{emit:a}){const n=t(null),u=l(),r=t(!1);return{form2Ref:n,loading:r,formValue:t({password:"086611"}),rules:{password:{required:!0,message:"请输入支付密码",trigger:"blur"}},prevStep:function(){a("prevStep")},formSubmit:function(){r.value=!0,n.value.validate((e=>{e?u.error("验证失败，请填写完整信息"):setTimeout((()=>{a("nextStep")}),1500)}))}}}});const S=s("span",null,"NaiveUiAdmin@163.com",-1),g=s("span",null,"NaiveUiAdmin@qq.com",-1),V=s("span",null,"Ah jung",-1),A=s("span",null,"￥1980",-1),k={style:{"margin-left":"80px"}},q=o("提交"),w=o("上一步");h.render=function(e,t,l,o,c,i){const p=a("n-form-item"),d=a("n-divider"),m=a("n-input"),f=a("n-button"),v=a("n-space"),y=a("n-form");return n(),u(y,{"label-width":90,model:e.formValue,rules:e.rules,"label-placement":"left",ref:"form2Ref",style:{"max-width":"500px",margin:"40px auto 0 80px"}},{default:r((()=>[s(p,{label:"付款账户",path:"myAccount"},{default:r((()=>[S])),_:1}),s(p,{label:"收款账户",path:"account"},{default:r((()=>[g])),_:1}),s(p,{label:"收款人姓名",path:"name"},{default:r((()=>[V])),_:1}),s(p,{label:"转账金额",path:"money"},{default:r((()=>[A])),_:1}),s(d),s(p,{label:"支付密码",path:"password"},{default:r((()=>[s(m,{type:"password",value:e.formValue.password,"onUpdate:value":t[1]||(t[1]=t=>e.formValue.password=t)},null,8,["value"])])),_:1}),s("div",k,[s(v,null,{default:r((()=>[s(f,{type:"primary",loading:e.loading,onClick:e.formSubmit},{default:r((()=>[q])),_:1},8,["loading","onClick"]),s(f,{onClick:e.prevStep},{default:r((()=>[w])),_:1},8,["onClick"])])),_:1})])])),_:1},8,["model","rules"])};var C=e({emits:["finish","prevStep"],setup(e,{emit:t}){const l=c();return{prevStep:function(){t("prevStep")},finish:function(){t("finish")},toOrderList:function(){l.push("/form/step-form")}}}});const T=d();i("data-v-2d350897");const U={class:"information"},N=o("付款账户："),j=o("NaiveUiAdmin@163.com"),L=o("收款账户："),R=o("xiaoma@qq.com"),P=o("收款人姓名："),F=o("啊俊"),I=o("转账金额："),O=o("￥"),X=s("span",{class:"money"},"1980",-1),Y=o(" 元"),z={class:"flex justify-center"},B=o("再转一笔"),D=o("查看账单");p();const E=T(((e,t,l,r,o,c)=>{const i=a("n-gi"),p=a("n-grid"),d=a("n-button"),m=a("n-result");return n(),u("div",null,[s(m,{status:"success",title:"操作成功",description:"预计两小时内到账",class:"step-result"},{default:T((()=>[s("div",U,[s(p,{cols:"2 s:2 m:3 l:3 xl:3 2xl:3",responsive:"screen",class:"my-1"},{default:T((()=>[s(i,null,{default:T((()=>[N])),_:1}),s(i,null,{default:T((()=>[j])),_:1})])),_:1}),s(p,{cols:"2 s:2 m:3 l:3 xl:3 2xl:3",responsive:"screen",class:"my-1"},{default:T((()=>[s(i,null,{default:T((()=>[L])),_:1}),s(i,null,{default:T((()=>[R])),_:1})])),_:1}),s(p,{cols:"2 s:2 m:3 l:3 xl:3 2xl:3",responsive:"screen",class:"my-1"},{default:T((()=>[s(i,null,{default:T((()=>[P])),_:1}),s(i,null,{default:T((()=>[F])),_:1})])),_:1}),s(p,{cols:"2 s:2 m:3 l:3 xl:3 2xl:3",responsive:"screen",class:"my-1"},{default:T((()=>[s(i,null,{default:T((()=>[I])),_:1}),s(i,null,{default:T((()=>[O,X,Y])),_:1})])),_:1})])])),footer:T((()=>[s("div",z,[s(d,{type:"primary",onClick:e.finish,class:"mr-4"},{default:T((()=>[B])),_:1},8,["onClick"]),s(d,{onClick:e.prevStep},{default:T((()=>[D])),_:1},8,["onClick"])])])),_:1})])}));C.render=E,C.__scopeId="data-v-2d350897";const G=e({components:{step1:y,step2:h,step3:C},setup(){const e=t(1),l=t("process");return{currentTab:e,currentStatus:l,nextStep:function(){e.value<3&&(e.value+=1)},prevStep:function(){e.value>1&&(e.value-=1)},finish:function(){e.value=1}}}}),H=d();i("data-v-1057c0c6");const J={class:"n-layout-page-header"},K=o(" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 ");p();const M=H(((e,t,l,r,o,c)=>{const i=a("n-card"),p=a("n-step"),d=a("n-steps"),f=a("step1"),v=a("step2"),y=a("step3"),_=a("n-space");return n(),u("div",null,[s("div",J,[s(i,{bordered:!1,title:"分步表单"},{default:H((()=>[K])),_:1})]),s(i,{bordered:!1,class:"proCard mt-4"},{default:H((()=>[s(_,{vertical:"",class:"steps",justify:"center"},{default:H((()=>[s(d,{current:e.currentTab,status:e.currentStatus},{default:H((()=>[s(p,{title:"填写转账信息",description:"确保填写正确"}),s(p,{title:"确认转账信息",description:"确认转账信息"}),s(p,{title:"完成转账",description:"恭喜您，转账成功"})])),_:1},8,["current","status"]),1===e.currentTab?(n(),u(f,{key:0,onNextStep:e.nextStep},null,8,["onNextStep"])):m("",!0),2===e.currentTab?(n(),u(v,{key:1,onNextStep:e.nextStep,onPrevStep:e.prevStep},null,8,["onNextStep","onPrevStep"])):m("",!0),3===e.currentTab?(n(),u(y,{key:2,onPrevStep:e.prevStep,onFinish:e.finish},null,8,["onPrevStep","onFinish"])):m("",!0)])),_:1})])),_:1})])}));G.render=M,G.__scopeId="data-v-1057c0c6";export default G;
