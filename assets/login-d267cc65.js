import{d as y,u as b,r as u,a as k,c as I,b as e,w as a,o as S,e as i,f as F,l as N,g as c,v as f,h as T,i as B,j as C,k as R,E as q,m as z,p as U,n as M,q as O,_ as j}from"./index-65e0748e.js";import{E as A,a as D,b as K}from"./el-input-fa36113f.js";const L=r=>(U("data-v-fea87619"),r=r(),M(),r),P={id:"Login"},$=L(()=>O("h3",null,"can后台管理系统",-1)),G=y({__name:"login",setup(r){const v=b(),t=u(!1),g=()=>{t.value=!t.value},s=u({username:"admin",password:"admin"}),m=u(),w=u({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:20,message:"用户名长度为5-20位",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:20,message:"密码长度为5-20位",trigger:"blur"}]}),p=k(),x=()=>{m.value.validate((_,o)=>{_?R(s.value).then(l=>{l.code==200&&(p.SET_TOKEN(l.data.token),p.SET_USERINFO(l.data),v.push({name:"index"}))}):console.log("error submit!",o)})};return(_,o)=>{const l=D,d=K,E=q,h=z,V=A;return S(),I("div",P,[e(V,{ref_key:"ruleFormRef",ref:m,class:"form",model:s.value,rules:w.value},{default:a(()=>[$,e(d,{prop:"username"},{default:a(()=>[e(l,{size:"large","prefix-icon":i(F),modelValue:s.value.username,"onUpdate:modelValue":o[0]||(o[0]=n=>s.value.username=n),modelModifiers:{trim:!0},placeholder:"请输入用户名"},null,8,["prefix-icon","modelValue"])]),_:1}),e(d,{prop:"password"},{default:a(()=>[e(l,{type:t.value?"text":"password",size:"large","prefix-icon":i(N),modelValue:s.value.password,"onUpdate:modelValue":o[1]||(o[1]=n=>s.value.password=n),modelModifiers:{trim:!0},placeholder:"请输入密码"},{suffix:a(()=>[e(E,{onClick:g},{default:a(()=>[c(e(i(T),null,null,512),[[f,!t.value]]),c(e(i(B),null,null,512),[[f,t.value]])]),_:1})]),_:1},8,["type","prefix-icon","modelValue"])]),_:1}),e(d,null,{default:a(()=>[e(h,{onClick:o[2]||(o[2]=n=>x()),size:"large",type:"primary",style:{width:"100%"}},{default:a(()=>[C("登录")]),_:1})]),_:1})]),_:1},8,["model","rules"])])}}});const Q=j(G,[["__scopeId","data-v-fea87619"]]);export{Q as default};
