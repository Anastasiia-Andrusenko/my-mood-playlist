(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{6870:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MoodImg/MoodImg",function(){return r(7390)}])},4130:function(e,t,r){"use strict";var o=r(5893);r(7294);var a=r(356),s=r.n(a);t.Z=()=>(0,o.jsx)("footer",{className:s().footer,children:(0,o.jsxs)("div",{className:s().footerContent,children:[(0,o.jsx)("div",{className:s().footerLeft,children:(0,o.jsx)("p",{children:"\xa9 2024 YourMusicApp. All rights reserved."})}),(0,o.jsx)("div",{className:s().footerRight,children:(0,o.jsxs)("ul",{className:s().footerLinks,children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/privacy",children:"Privacy Policy"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/contact",children:"Contact Us"})})]})})]})})},7390:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var o=r(5893),a=r(7294),s=r(2149),n=r.n(s),i=e=>{let{nickname:t}=e;return(0,o.jsx)("header",{className:n().header,children:(0,o.jsx)("div",{className:n().container,children:t?(0,o.jsxs)("p",{className:n().welcome,children:["Welcome, ",t,"!"]}):(0,o.jsx)("p",{children:"Not logged in"})})})},c=r(6224),l=r.n(c),d=r(9828),m=r(2316);let u=async()=>{try{return(await (0,d.PL)((0,d.hJ)(m.db,"images"))).docs.map(e=>({url:e.data().url,description:e.data().description}))}catch(e){throw console.error("Error fetching images: ",e.message),e}};var _=r(1163),f=()=>{let[e,t]=(0,a.useState)(null),r=(0,_.useRouter)();return(0,a.useEffect)(()=>{let e=m.I.onAuthStateChanged(e=>{e?t(e.displayName):r.push("/login")});return()=>e()},[r]),e},h=r(9482),g=r(5675),p=r.n(g),x=r(4439),j=r.n(x),y=r(8767);let N=async()=>await u();var v=e=>{let{imgContent:t}=e,{data:r}=(0,y.useQuery)("images",N);return(0,o.jsx)("div",{className:j().imageGrid,children:t.map((e,t)=>(0,o.jsxs)("div",{className:j().imgWrapper,children:[(0,o.jsx)(p(),{width:500,height:350,src:e.url,alt:"Image ".concat(t+1),className:j().img,priority:!0}),(0,o.jsx)("div",{className:j().overlay,children:e.description})]},t))})},I=r(4130),w=()=>{let[e,t]=(0,a.useState)([]),[r,s]=(0,a.useState)(!0),n=f();return((0,_.useRouter)(),(0,a.useEffect)(()=>{let e=async()=>{try{let e=await u();t(e)}catch(e){e instanceof Error&&console.error("Error fetching images: ",e.message)}finally{s(!1)}};n&&e()},[n]),n)?(0,o.jsxs)("div",{children:[(0,o.jsx)(i,{nickname:n}),(0,o.jsxs)("main",{className:l().container,children:[(0,o.jsxs)("p",{className:l().text,children:["Sometimes no words can describe what you feel. Therefore, you have different atmospheric images in front of you. ",(0,o.jsx)("br",{}),"Click on the one that suits you best."]}),(0,o.jsx)("h2",{className:l().title,children:"Choose with your heart"}),(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(h.Z,{}),children:(0,o.jsx)(v,{imgContent:e})})]}),(0,o.jsx)(I.Z,{})]}):null}},2316:function(e,t,r){"use strict";r.d(t,{I:function(){return c},db:function(){return l}});var o=r(3977),a=r(9828),s=r(2370),n=r(6650);let i=(0,o.ZF)({apiKey:"AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",authDomain:"my-mood-playlist.firebaseapp.com",projectId:"my-mood-playlist",storageBucket:"my-mood-playlist.appspot.com",messagingSenderId:"665017246127",appId:"1:665017246127:web:4906d5430fcc98efe74f5a",measurementId:"G-D0L4JFMQSC"}),c=(0,s.v0)(i),l=(0,a.ad)(i);(0,n.cF)(i)},356:function(e){e.exports={footer:"Footer_footer__OYoYH",footerContent:"Footer_footerContent__QQ0Yh","footer-left":"Footer_footer-left__o0loO",footerRight:"Footer_footerRight__Heu1m",footerLinks:"Footer_footerLinks__zeWoW",footerSocial:"Footer_footerSocial__qmnAy"}},2149:function(e){e.exports={header:"Header_header__MwWvM",container:"Header_container__Aasa1"}},4439:function(e){e.exports={imageGrid:"ImageContent_imageGrid__q_nZj",imgWrapper:"ImageContent_imgWrapper__d2GwA",img:"ImageContent_img__uyF65",overlay:"ImageContent_overlay__a7UQ3"}},6224:function(e){e.exports={container:"Images_container__JZhTS",title:"Images_title__Db2X2",fadeIn:"Images_fadeIn__KLzdi",pulse:"Images_pulse__FwJg7",text:"Images_text__CA5A6"}}},function(e){e.O(0,[16,48,915,675,888,774,179],function(){return e(e.s=6870)}),_N_E=e.O()}]);