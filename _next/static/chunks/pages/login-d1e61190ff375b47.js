(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s(640)}])},8767:function(e,t,s){"use strict";var n=s(5893);s(7294);var a=s(2175),r=s.n(a);t.Z=e=>{let{onClick:t,text:s}=e;return(0,n.jsx)("button",{onClick:t,className:r().button,children:s})}},335:function(e,t,s){"use strict";var n=s(5893),a=s(7294),r=s(9441),o=s.n(r),i=s(2175),l=s.n(i);t.Z=e=>{let{title:t,buttonText:s,onSubmit:r,showNickname:i=!1}=e,[c,u]=(0,a.useState)(""),[d,m]=(0,a.useState)(""),[h,p]=(0,a.useState)("");return(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsx)("h1",{children:t}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r(c,d,h)},className:o().form,children:[(0,n.jsxs)("div",{className:o().inputGroup,children:[(0,n.jsx)("label",{htmlFor:"email",className:o().label,children:"Email:"}),(0,n.jsx)("input",{type:"email",placeholder:"Email",id:"email",value:c,onChange:e=>u(e.target.value),required:!0,className:o().input})]}),(0,n.jsxs)("div",{className:o().inputGroup,children:[(0,n.jsx)("label",{htmlFor:"password",className:o().label,children:"Password:"}),(0,n.jsx)("input",{type:"password",placeholder:"Password",id:"password",value:d,onChange:e=>m(e.target.value),required:!0,className:o().input})]}),i&&(0,n.jsxs)("div",{className:o().inputGroup,children:[(0,n.jsx)("label",{htmlFor:"nickname",className:o().label,children:"Nickname:"}),(0,n.jsx)("input",{type:"text",placeholder:"Nickname",id:"nickname",value:h,onChange:e=>p(e.target.value),required:!0,className:o().input})]}),(0,n.jsx)("button",{type:"submit",className:l().button,children:s})]})]})}},9482:function(e,t,s){"use strict";var n=s(5893);s(7294);var a=s(4651),r=s.n(a);t.Z=()=>(0,n.jsx)("div",{className:r().loader,children:(0,n.jsx)("div",{className:r().spinner})})},9511:function(e,t,s){"use strict";var n=s(5893),a=s(7294),r=s(1163),o=s(2316);t.Z=e=>t=>{let s=(0,r.useRouter)();return(0,a.useEffect)(()=>{let e=o.I.onAuthStateChanged(e=>{e&&s.push("/")});return()=>e()},[s]),(0,n.jsx)(e,{...t})}},640:function(e,t,s){"use strict";s.r(t);var n=s(5893),a=s(1664),r=s.n(a),o=s(2370),i=s(2316),l=s(6452),c=s.n(l),u=s(7294),d=s(1752),m=s.n(d),h=s(1163),p=s(9482),g=s(4173),f=s(9511),_=s(8767),x=s(335);let{publicRuntimeConfig:j}=m()();j.basePath,t.default=(0,f.Z)(()=>{let[e,t]=(0,u.useState)(""),[s,a]=(0,u.useState)(!1),l=(0,h.useRouter)();(0,u.useEffect)(()=>{let e=i.I.onAuthStateChanged(e=>{e&&l.push("/")});return()=>e()},[l]);let d=async()=>{let e=new o.hJ;try{let t=await (0,o.rh)(i.I,e);console.log(t.user),l.push("/images")}catch(e){console.error("Google login error:",e.message),t(e.message)}},m=async()=>{let e=new o._O;try{let t=await (0,o.rh)(i.I,e);console.log(t.user),l.push("/images")}catch(e){console.error("Facebook login error:",e.message),t(e.message)}},f=async(e,s)=>{a(!0);try{await (0,o.e5)(i.I,e,s),g.Am.success("User logged in successfully"),l.push("/images")}catch(e){t(e.message),g.Am.error("Login failed: ".concat(e.message))}finally{a(!1)}};return(0,n.jsxs)("div",{className:c().container,children:[s&&(0,n.jsx)(p.Z,{}),(0,n.jsx)(x.Z,{title:"Login",buttonText:"Login",onSubmit:f,showNickname:!1}),(0,n.jsxs)("div",{children:[(0,n.jsx)(_.Z,{onClick:d,text:"Log in with Google"}),(0,n.jsx)(_.Z,{onClick:m,text:"Log in with Facebook"})]}),(0,n.jsxs)("p",{children:["Don't have an account? ",(0,n.jsx)(r(),{href:"/register",passHref:!0,children:"Register"})]})]})})},2316:function(e,t,s){"use strict";s.d(t,{I:function(){return l},db:function(){return c}});var n=s(3977),a=s(9828),r=s(2370),o=s(6650);let i=(0,n.ZF)({apiKey:"AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",authDomain:"my-mood-playlist.firebaseapp.com",projectId:"my-mood-playlist",storageBucket:"my-mood-playlist.appspot.com",messagingSenderId:"665017246127",appId:"1:665017246127:web:4906d5430fcc98efe74f5a",measurementId:"G-D0L4JFMQSC"}),l=(0,r.v0)(i),c=(0,a.ad)(i);(0,o.cF)(i)},9441:function(e){e.exports={form:"AuthForm_form__vlyAP",label:"AuthForm_label__601oW",input:"AuthForm_input__IJd0x"}},2175:function(e){e.exports={button:"Button_button__rH6MK"}},4651:function(e){e.exports={loader:"Loader_loader__GrUtG",spinner:"Loader_spinner__gZKkW",spin:"Loader_spin__I19o8"}},6452:function(e){e.exports={container:"Login_container___Kmeh"}}},function(e){e.O(0,[16,48,915,212,888,774,179],function(){return e(e.s=3236)}),_N_E=e.O()}]);