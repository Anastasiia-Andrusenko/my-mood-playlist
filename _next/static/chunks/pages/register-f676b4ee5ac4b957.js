(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{1752:function(e,t,s){e.exports=s(1224)},436:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return s(9601)}])},8767:function(e,t,s){"use strict";var a=s(5893);s(7294);var n=s(2175),r=s.n(n);t.Z=e=>{let{onClick:t,text:s}=e;return(0,a.jsx)("button",{onClick:t,className:r().button,children:s})}},335:function(e,t,s){"use strict";var a=s(5893),n=s(7294),r=s(9441),o=s.n(r),i=s(2175),l=s.n(i);t.Z=e=>{let{title:t,buttonText:s,onSubmit:r,showNickname:i=!1}=e,[u,c]=(0,n.useState)(""),[d,m]=(0,n.useState)(""),[p,h]=(0,n.useState)("");return(0,a.jsxs)("div",{className:o().container,children:[(0,a.jsx)("h1",{children:t}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r(u,d,p)},className:o().form,children:[(0,a.jsxs)("div",{className:o().inputGroup,children:[(0,a.jsx)("label",{htmlFor:"email",className:o().label,children:"Email:"}),(0,a.jsx)("input",{type:"email",placeholder:"Email",id:"email",value:u,onChange:e=>c(e.target.value),required:!0,className:o().input})]}),(0,a.jsxs)("div",{className:o().inputGroup,children:[(0,a.jsx)("label",{htmlFor:"password",className:o().label,children:"Password:"}),(0,a.jsx)("input",{type:"password",placeholder:"Password",id:"password",value:d,onChange:e=>m(e.target.value),required:!0,className:o().input})]}),i&&(0,a.jsxs)("div",{className:o().inputGroup,children:[(0,a.jsx)("label",{htmlFor:"nickname",className:o().label,children:"Nickname:"}),(0,a.jsx)("input",{type:"text",placeholder:"Nickname",id:"nickname",value:p,onChange:e=>h(e.target.value),required:!0,className:o().input})]}),(0,a.jsx)("button",{type:"submit",className:l().button,children:s})]})]})}},9482:function(e,t,s){"use strict";var a=s(5893);s(7294);var n=s(4651),r=s.n(n);t.Z=()=>(0,a.jsx)("div",{className:r().loader,children:(0,a.jsx)("div",{className:r().spinner})})},9511:function(e,t,s){"use strict";var a=s(5893),n=s(7294),r=s(1163),o=s(2316);t.Z=e=>t=>{let s=(0,r.useRouter)();return(0,n.useEffect)(()=>{let e=o.I.onAuthStateChanged(e=>{e&&s.push("/")});return()=>e()},[s]),(0,a.jsx)(e,{...t})}},9601:function(e,t,s){"use strict";s.r(t);var a=s(5893),n=s(7294),r=s(2370),o=s(2316),i=s(7844),l=s.n(i),u=s(1752),c=s.n(u),d=s(1163),m=s(9482),p=s(4173),h=s(9511),_=s(335),f=s(8767);let{publicRuntimeConfig:g}=c()();g.basePath,t.default=(0,h.Z)(()=>{let[e,t]=(0,n.useState)(""),[s,i]=(0,n.useState)(!1),[u,c]=(0,n.useState)(""),h=(0,d.useRouter)();(0,n.useEffect)(()=>{let e=o.I.onAuthStateChanged(e=>{e&&h.push("/")});return()=>e()},[h]);let g=async()=>{let e=new r.hJ;try{let t=await (0,r.rh)(o.I,e);console.log(t.user)}catch(e){console.error("Google login error:",e.message),t(e.message)}},x=async()=>{let e=new r._O;try{let t=await (0,r.rh)(o.I,e);console.log(t.user)}catch(e){console.error("Facebook login error:",e.message),t(e.message)}},b=async(e,s,a)=>{i(!0);try{let t=(await (0,r.Xb)(o.I,e,s)).user;console.log("User before updateProfile:",t),t&&(await (0,r.ck)(t,{displayName:a}),console.log("Profile updated:",t.displayName)),p.Am.success("User registered successfully"),h.push("/images")}catch(e){t(e.message),p.Am.error("Registration failed: ".concat(e.message))}finally{i(!1)}};return(0,a.jsxs)("div",{className:l().container,children:[s&&(0,a.jsx)(m.Z,{}),(0,a.jsx)(_.Z,{title:"Register",buttonText:"Register",onSubmit:b,showNickname:!0}),(0,a.jsxs)("div",{children:[(0,a.jsx)(f.Z,{onClick:g,text:"Log in with Google"}),(0,a.jsx)(f.Z,{onClick:x,text:"Log in with Facebook"})]})]})})},2316:function(e,t,s){"use strict";s.d(t,{I:function(){return l},db:function(){return u}});var a=s(3977),n=s(9828),r=s(2370),o=s(6650);let i=(0,a.ZF)({apiKey:"AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",authDomain:"my-mood-playlist.firebaseapp.com",projectId:"my-mood-playlist",storageBucket:"my-mood-playlist.appspot.com",messagingSenderId:"665017246127",appId:"1:665017246127:web:4906d5430fcc98efe74f5a",measurementId:"G-D0L4JFMQSC"}),l=(0,r.v0)(i),u=(0,n.ad)(i);(0,o.cF)(i)},9441:function(e){e.exports={form:"AuthForm_form__vlyAP",label:"AuthForm_label__601oW",input:"AuthForm_input__IJd0x"}},2175:function(e){e.exports={button:"Button_button__rH6MK"}},4651:function(e){e.exports={loader:"Loader_loader__GrUtG",spinner:"Loader_spinner__gZKkW",spin:"Loader_spin__I19o8"}},7844:function(e){e.exports={container:"Register_container__UUCvq",form:"Register_form__dqPe0",label:"Register_label__aahox",input:"Register_input__Rznr0",button:"Register_button__vkEuP"}}},function(e){e.O(0,[16,48,915,888,774,179],function(){return e(e.s=436)}),_N_E=e.O()}]);