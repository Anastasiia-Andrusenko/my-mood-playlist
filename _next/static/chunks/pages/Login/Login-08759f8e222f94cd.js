(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{1475:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Login/Login",function(){return n(1378)}])},4259:function(e,t,n){"use strict";var s=n(5893);n(7294);var r=n(2175),a=n.n(r);t.Z=e=>{let{onClick:t,text:n}=e;return(0,s.jsx)("button",{onClick:t,className:a().button,children:n})}},335:function(e,t,n){"use strict";var s=n(5893),r=n(7294),a=n(9441),o=n.n(a),i=n(2175),c=n.n(i);t.Z=e=>{let{title:t,buttonText:n,onSubmit:a,showNickname:i=!1}=e,[u,l]=(0,r.useState)(""),[h,m]=(0,r.useState)(""),[d,p]=(0,r.useState)("");return(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsx)("h1",{children:t}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),a(u,h,d)},className:o().form,children:[(0,s.jsxs)("div",{className:o().inputGroup,children:[(0,s.jsx)("label",{htmlFor:"email",className:o().label,children:"Email:"}),(0,s.jsx)("input",{type:"email",placeholder:"Email",id:"email",value:u,onChange:e=>l(e.target.value),required:!0,className:o().input})]}),(0,s.jsxs)("div",{className:o().inputGroup,children:[(0,s.jsx)("label",{htmlFor:"password",className:o().label,children:"Password:"}),(0,s.jsx)("input",{type:"password",placeholder:"Password",id:"password",value:h,onChange:e=>m(e.target.value),required:!0,className:o().input})]}),i&&(0,s.jsxs)("div",{className:o().inputGroup,children:[(0,s.jsx)("label",{htmlFor:"nickname",className:o().label,children:"Nickname:"}),(0,s.jsx)("input",{type:"text",placeholder:"Nickname",id:"nickname",value:d,onChange:e=>p(e.target.value),required:!0,className:o().input})]}),(0,s.jsx)("button",{type:"submit",className:c().button,children:n})]})]})}},9511:function(e,t,n){"use strict";var s=n(5893),r=n(7294),a=n(1163),o=n(2316);t.Z=e=>t=>{let n=(0,a.useRouter)();return(0,r.useEffect)(()=>{let e=o.I.onAuthStateChanged(e=>{e&&n.push("/")});return()=>e()},[n]),(0,s.jsx)(e,{...t})}},1378:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var s=n(5893),r=n(1664),a=n.n(r),o=n(2316),i=n(8191),c=n.n(i),u=n(7294),l=n(1752),h=n.n(l),m=n(1163),d=n(9482),p=n(4173),f=n(9511),g=n(4259),x=n(335),_=()=>{let[e,t]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{let e=o.I.onAuthStateChanged(e=>{t(!!e)});return()=>e()},[]),e},y=n(2247);let{publicRuntimeConfig:b}=h()();b.basePath;var j=(0,f.Z)(()=>{let[e,t]=(0,u.useState)(""),[n,r]=(0,u.useState)(!1);_();let i=(0,m.useRouter)();(0,u.useEffect)(()=>{let e=o.I.onAuthStateChanged(e=>{e&&i.push("/")});return()=>e()},[i]);let l=async()=>{try{let e=await (0,y.Cb)();console.log(e.user),i.push("/images")}catch(e){t(e.message)}},h=async()=>{try{let e=await (0,y.eu)();console.log(e.user),i.push("/images")}catch(e){t(e.message)}},f=async(e,n)=>{r(!0);try{await (0,y.jc)(e,n),p.Am.success("User logged in successfully"),i.push("/images")}catch(e){t(e.message),p.Am.error("Login failed: ".concat(e.message))}finally{r(!1)}};return(0,s.jsxs)("div",{className:c().container,children:[n&&(0,s.jsx)(d.Z,{}),(0,s.jsx)(x.Z,{title:"Login",buttonText:"Login",onSubmit:f,showNickname:!1}),(0,s.jsxs)("div",{children:[(0,s.jsx)(g.Z,{onClick:l,text:"Log in with Google"}),(0,s.jsx)(g.Z,{onClick:h,text:"Log in with Facebook"})]}),(0,s.jsxs)("p",{children:["Don't have an account? ",(0,s.jsx)(a(),{href:"/register",className:c().link,passHref:!0,children:"Register"})]})]})})},2247:function(e,t,n){"use strict";n.d(t,{Cb:function(){return o},eu:function(){return i},hY:function(){return a},jc:function(){return c}});var s=n(2316),r=n(2370);let a=async()=>{try{return await (0,r.w7)(s.I),{success:!0}}catch(e){return console.error("Error signing out: ",e),{success:!1,error:e}}},o=async()=>{let e=new r.hJ;try{return await (0,r.rh)(s.I,e)}catch(e){throw console.error("Google login error:",e.message),e}},i=async()=>{let e=new r._O;try{return await (0,r.rh)(s.I,e)}catch(e){throw console.error("Facebook login error:",e.message),e}},c=async(e,t)=>{try{await (0,r.e5)(s.I,e,t)}catch(e){throw console.error("Email login error:",e.message),e}}},2316:function(e,t,n){"use strict";n.d(t,{I:function(){return c},db:function(){return u}});var s=n(3977),r=n(9828),a=n(2370),o=n(6650);let i=(0,s.ZF)({apiKey:"AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",authDomain:"my-mood-playlist.firebaseapp.com",projectId:"my-mood-playlist",storageBucket:"my-mood-playlist.appspot.com",messagingSenderId:"665017246127",appId:"1:665017246127:web:4906d5430fcc98efe74f5a",measurementId:"G-D0L4JFMQSC"}),c=(0,a.v0)(i),u=(0,r.ad)(i);(0,o.cF)(i)},9441:function(e){e.exports={form:"AuthForm_form__vlyAP",label:"AuthForm_label__601oW",input:"AuthForm_input__IJd0x"}},2175:function(e){e.exports={button:"Button_button__rH6MK"}},8191:function(e){e.exports={container:"Login_container__3UUjC",link:"Login_link__nSaft"}}},function(e){e.O(0,[16,48,915,212,888,774,179],function(){return e(e.s=1475)}),_N_E=e.O()}]);