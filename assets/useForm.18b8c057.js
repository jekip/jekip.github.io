var e=(e,l,t)=>new Promise(((n,i)=>{var s=e=>{try{a(t.next(e))}catch(l){i(l)}},u=e=>{try{a(t.throw(e))}catch(l){i(l)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,u);a((t=t.apply(e,l)).next())}));import{l,m as t}from"./index.c7a2ed8c.js";import{f as n,h as i,x as s,bo as u,bt as a}from"./vendor.753c6347.js";function r(r){const o=n(null),d=n(!1);function c(){return e(this,null,(function*(){const e=s(o);return yield a(),e}))}return[function(e){i((()=>{o.value=null,d.value=null})),s(d)&&l()&&e===s(o)||(o.value=e,d.value=!0,u((()=>r),(()=>{r&&e.setProps(t(r))}),{immediate:!0,deep:!0}))},{setProps:l=>e(this,null,(function*(){const e=yield c();yield e.setProps(l)})),resetFields:()=>e(this,null,(function*(){c().then((l=>e(this,null,(function*(){yield l.resetFields()}))))})),clearValidate:l=>e(this,null,(function*(){const e=yield c();yield e.clearValidate(l)})),getFieldsValue:()=>{var e;return null==(e=s(o))?void 0:e.getFieldsValue()},setFieldsValue:l=>e(this,null,(function*(){const e=yield c();yield e.setFieldsValue(l)})),submit:()=>e(this,null,(function*(){return(yield c()).submit()})),validate:l=>e(this,null,(function*(){return(yield c()).validate(l)}))}]}export{r as u};
