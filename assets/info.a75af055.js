import{d as e,V as a,o as l,c as t,b as d,a3 as s,bg as n}from"./vendor.c1e6e6e7.js";const r=e({setup:()=>({})}),u={class:"n-layout-page-header"},c=n(" 基础详情，有时也用于显示只读信息。 "),i=n("收款人姓名"),o=n(" 啊俊 "),f=n("NaiveUiAdmin@qq.com"),b=n("支付宝"),m=n("NaiveUiAdmin@163.com"),p=n("￥1980.00"),_=n(" 已到账");r.render=function(e,n,r,v,g,y){const h=a("n-card"),q=a("n-descriptions-item"),A=a("n-tag"),N=a("n-descriptions");return l(),t("div",null,[d("div",u,[d(h,{bordered:!1,title:"基础详情"},{default:s((()=>[c])),_:1})]),d(h,{bordered:!1,class:"proCard mt-4",size:"small",segmented:{content:"hard"}},{default:s((()=>[d(N,{"label-placement":"left",class:"py-2"},{default:s((()=>[d(q,null,{label:s((()=>[i])),default:s((()=>[o])),_:1}),d(q,{label:"收款账户"},{default:s((()=>[f])),_:1}),d(q,{label:"付款类型"},{default:s((()=>[b])),_:1}),d(q,{label:"付款账户"},{default:s((()=>[m])),_:1}),d(q,{label:"转账金额"},{default:s((()=>[p])),_:1}),d(q,{label:"状态"},{default:s((()=>[d(A,{type:"success"},{default:s((()=>[_])),_:1})])),_:1})])),_:1})])),_:1})])};export default r;
