(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1364)}])},4130:function(e,t,r){"use strict";var o=r(5893);r(7294);var n=r(356),s=r.n(n);t.Z=()=>(0,o.jsx)("footer",{className:s().footer,children:(0,o.jsxs)("div",{className:s().footerContent,children:[(0,o.jsx)("div",{className:s().footerLeft,children:(0,o.jsx)("p",{children:"\xa9 2024 YourMusicApp. All rights reserved."})}),(0,o.jsx)("div",{className:s().footerRight,children:(0,o.jsxs)("ul",{className:s().footerLinks,children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/privacy",children:"Privacy Policy"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/contact",children:"Contact Us"})})]})})]})})},8798:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var o=r(5893),n=r(1664),s=r.n(n),i=r(7294),a=r(1715),c=r.n(a),l=r(1752),g=r.n(l),h=r(2316),d=r(1163),u=r(4173),_=r(2247),m=r(5675),f=r.n(m),p=r(1046),j=r.n(p);let x=["../../img/bg/01.jpg","../../img/bg/02.jpg","../../img/bg/03.jpg","../../img/bg/04.jpg","../../img/bg/05.jpg","../../img/bg/06.jpg","../../img/bg/07.jpg","../../img/bg/08.jpg","../../img/bg/09.jpg","../../img/bg/010.jpg","../../img/bg/012.jpg","../../img/bg/013.jpg","../../img/bg/014.jpg","../../img/bg/015.jpg","../../img/bg/016.jpg","../../img/bg/017.jpg","../../img/bg/018.jpg","../../img/bg/019.jpg","../../img/bg/020.jpg","../../img/bg/021.jpg","../../img/bg/022.jpg"];var w=e=>{let{text:t}=e,[r,n]=(0,i.useState)(0);(0,i.useEffect)(()=>{let e=setInterval(()=>{n(e=>(e+1)%x.length)},800);return()=>clearInterval(e)},[]);let s=t.split(" ");return(0,o.jsxs)("div",{className:j().slideshow,children:[(0,o.jsx)("div",{className:j().overlay}),x.map((e,t)=>(0,o.jsx)(f(),{width:100,height:100,src:e,className:"".concat(j().slide," ").concat(t===r?j().active:""),alt:"picture ".concat(t)},t)),(0,o.jsx)("div",{className:j().content,children:(0,o.jsx)("h2",{children:s.map((e,t)=>(0,o.jsx)("span",{className:"".concat(j().word," ").concat("heart"===e?j().heart:""),style:{animationDelay:"".concat(.5*t,"s")},children:e},t))})})]})},y=r(4130);let{publicRuntimeConfig:b}=g()();b.basePath;var v=()=>{let[e,t]=(0,i.useState)(!1),r=(0,d.useRouter)();(0,i.useEffect)(()=>{let e=h.I.onAuthStateChanged(e=>{t(!!e)});return()=>e()},[r]);let n=async()=>{(await (0,_.hY)()).success&&(u.Am.warning("You logged out"),r.push("/"))};return(0,o.jsxs)("div",{className:c().container,children:[(0,o.jsx)(w,{text:"listen to your heart"}),(0,o.jsxs)("p",{className:c().text,children:["Your life is like the best fucking movie! ",(0,o.jsx)("br",{}),"The background changes, characters appear, yesterday you were crying, and now you are laughing. What can add spice to this moment? Yes. ",(0,o.jsx)("br",{}),"A perfectly fitting soundtrack"]}),(0,o.jsx)("h1",{className:c().title,children:"listen to music that perfectly matches your mood"}),e?(0,o.jsxs)("div",{className:c().loggedIn,children:[(0,o.jsx)("p",{children:"You are already logged in."}),(0,o.jsx)("button",{onClick:n,children:"Logout"})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:c().please,children:"Please log in to access all features."}),(0,o.jsx)("nav",{className:c().nav,children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(s(),{href:"/login",passHref:!0,children:"Login"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s(),{href:"/register",passHref:!0,children:"Register"})})]})})]}),(0,o.jsx)(y.Z,{})]})}},1364:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o.default}});var o=r(8798)},2247:function(e,t,r){"use strict";r.d(t,{Cb:function(){return i},eu:function(){return a},hY:function(){return s},jc:function(){return c}});var o=r(2316),n=r(2370);let s=async()=>{try{return await (0,n.w7)(o.I),{success:!0}}catch(e){return console.error("Error signing out: ",e),{success:!1,error:e}}},i=async()=>{let e=new n.hJ;try{return await (0,n.rh)(o.I,e)}catch(e){throw console.error("Google login error:",e.message),e}},a=async()=>{let e=new n._O;try{return await (0,n.rh)(o.I,e)}catch(e){throw console.error("Facebook login error:",e.message),e}},c=async(e,t)=>{try{await (0,n.e5)(o.I,e,t)}catch(e){throw console.error("Email login error:",e.message),e}}},2316:function(e,t,r){"use strict";r.d(t,{I:function(){return c},db:function(){return l}});var o=r(3977),n=r(9828),s=r(2370),i=r(6650);let a=(0,o.ZF)({apiKey:"AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",authDomain:"my-mood-playlist.firebaseapp.com",projectId:"my-mood-playlist",storageBucket:"my-mood-playlist.appspot.com",messagingSenderId:"665017246127",appId:"1:665017246127:web:4906d5430fcc98efe74f5a",measurementId:"G-D0L4JFMQSC"}),c=(0,s.v0)(a),l=(0,n.ad)(a);(0,i.cF)(a)},356:function(e){e.exports={footer:"Footer_footer__OYoYH",footerContent:"Footer_footerContent__QQ0Yh","footer-left":"Footer_footer-left__o0loO",footerRight:"Footer_footerRight__Heu1m",footerLinks:"Footer_footerLinks__zeWoW",footerSocial:"Footer_footerSocial__qmnAy"}},1046:function(e){e.exports={slideshow:"SlideAhow_slideshow__Ve2h0",overlay:"SlideAhow_overlay__SeqUz",slide:"SlideAhow_slide__8cz3N",active:"SlideAhow_active__W7Ftn",content:"SlideAhow_content__CnwUS",word:"SlideAhow_word__7e9Gb",fadeInUp:"SlideAhow_fadeInUp__kNija",heart:"SlideAhow_heart__Hpu3V",pulse:"SlideAhow_pulse__StIqM"}},1715:function(e){e.exports={container:"Home_container__0DUdU",please:"Home_please__9cx_t",nav:"Home_nav__xZSFY",text:"Home_text__HwnzK",title:"Home_title__8Nv2J"}}},function(e){e.O(0,[16,48,915,675,212,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);