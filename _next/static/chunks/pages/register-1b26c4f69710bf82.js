(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{1752:function(e,s,a){e.exports=a(1224)},436:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return a(9601)}])},9601:function(e,s,a){"use strict";a.r(s);var t=a(5893),l=a(7294),r=a(3299),n=a(2018),o=a(7844),i=a.n(o),c=a(1752);let{publicRuntimeConfig:u}=a.n(c)()();u.basePath,s.default=()=>{let[e,s]=(0,l.useState)(""),[a,o]=(0,l.useState)(""),[c,u]=(0,l.useState)(""),[d,h]=(0,l.useState)(""),m=async()=>{let e=new r.hJ;try{let s=await (0,r.rh)(n.I,e);console.log(s.user)}catch(e){console.error("Google login error:",e.message),h(e.message)}},g=async()=>{let e=new r._O;try{let s=await (0,r.rh)(n.I,e);console.log(s.user)}catch(e){console.error("Facebook login error:",e.message),h(e.message)}},p=async s=>{s.preventDefault();try{let s=(await (0,r.Xb)(n.I,e,a)).user;s&&await (0,r.ck)(s,{displayName:c}),console.log("User registered successfully")}catch(e){h(e.message)}};return(0,t.jsxs)("div",{className:i().container,children:[(0,t.jsx)("h1",{children:"Register"}),d&&(0,t.jsx)("p",{className:i().error,children:d}),(0,t.jsxs)("form",{onSubmit:p,className:i().form,children:[(0,t.jsxs)("div",{className:i().inputGroup,children:[(0,t.jsx)("label",{htmlFor:"email",className:i().label,children:"Email:"}),(0,t.jsx)("input",{type:"email",placeholder:"Email",id:"email",value:e,onChange:e=>s(e.target.value),required:!0})]}),(0,t.jsxs)("div",{className:i().inputGroup,children:[(0,t.jsx)("label",{htmlFor:"password",className:i().label,children:"Password:"}),(0,t.jsx)("input",{type:"password",placeholder:"Password",id:"password",value:a,onChange:e=>o(e.target.value),required:!0})]}),(0,t.jsxs)("div",{className:i().inputGroup,children:[(0,t.jsx)("label",{htmlFor:"email",className:i().label,children:"Nickname:"}),(0,t.jsx)("input",{type:"text",placeholder:"Nickname",id:"nickname",value:c,onChange:e=>u(e.target.value),required:!0})]}),(0,t.jsx)("button",{type:"submit",className:i().button,children:"Register"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("button",{onClick:m,className:i().button,children:"Log in with Google"}),(0,t.jsx)("button",{onClick:g,className:i().button,children:"Log in with Facebook"})]})]})}},7844:function(e){e.exports={container:"Register_container__UUCvq",form:"Register_form__dqPe0",label:"Register_label__aahox",button:"Register_button__vkEuP"}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=436)}),_N_E=e.O()}]);