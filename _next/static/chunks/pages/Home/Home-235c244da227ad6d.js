(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{9012:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Home/Home",function(){return o(8798)}])},4130:function(e,t,o){"use strict";var s=o(5893);o(7294);var r=o(356),i=o.n(r);t.Z=()=>(0,s.jsx)("footer",{className:i().footer,children:(0,s.jsxs)("div",{className:i().footerContent,children:[(0,s.jsx)("div",{className:i().footerLeft,children:(0,s.jsx)("p",{children:"\xa9 2024 YourMusicApp. All rights reserved."})}),(0,s.jsx)("div",{className:i().footerRight,children:(0,s.jsxs)("ul",{className:i().footerLinks,children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/privacy",children:"Privacy Policy"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/contact",children:"Contact Us"})})]})})]})})},8798:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return v}});var s=o(5893),r=o(1664),i=o.n(r),a=o(7294),n=o(1715),l=o.n(n),c=o(1752),m=o.n(c),d=o(2316),g=o(1163),h=o(4173),p=o(2247),u=o(5675),y=o.n(u),_=o(1046),f=o.n(_);let j=["/my-mood-playlist/img/bg/01.jpg","/my-mood-playlist/img/bg/02.jpg","/my-mood-playlist/img/bg/03.jpg","/my-mood-playlist/img/bg/04.jpg","/my-mood-playlist/img/bg/05.jpg","/my-mood-playlist/img/bg/06.jpg","/my-mood-playlist/img/bg/07.jpg","/my-mood-playlist/img/bg/08.jpg","/my-mood-playlist/img/bg/09.jpg","/my-mood-playlist/img/bg/010.jpg","/my-mood-playlist/img/bg/012.jpg","/my-mood-playlist/img/bg/013.jpg","/my-mood-playlist/img/bg/014.jpg","/my-mood-playlist/img/bg/015.jpg","/my-mood-playlist/img/bg/016.jpg","/my-mood-playlist/img/bg/017.jpg","/my-mood-playlist/img/bg/018.jpg","/my-mood-playlist/img/bg/019.jpg","/my-mood-playlist/img/bg/020.jpg","/my-mood-playlist/img/bg/021.jpg","/my-mood-playlist/img/bg/022.jpg"];var x=e=>{let{text:t}=e,[o,r]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=setInterval(()=>{r(e=>(e+1)%j.length)},800);return()=>clearInterval(e)},[]);let i=t.split(" ");return(0,s.jsxs)("div",{className:f().slideshow,children:[(0,s.jsx)("div",{className:f().overlay}),j.map((e,t)=>(0,s.jsx)(y(),{width:500,height:500,src:e,className:"".concat(f().slide," ").concat(t===o?f().active:""),alt:"picture ".concat(t)},t)),(0,s.jsx)("div",{className:f().content,children:(0,s.jsx)("h2",{children:i.map((e,t)=>(0,s.jsx)("span",{className:"".concat(f().word," ").concat("heart"===e?f().heart:""),style:{animationDelay:"".concat(.5*t,"s")},children:e},t))})})]})},w=o(4130);let{publicRuntimeConfig:b}=m()();b.basePath;var v=()=>{let[e,t]=(0,a.useState)(!1),o=(0,g.useRouter)();(0,a.useEffect)(()=>{let e=d.I.onAuthStateChanged(e=>{t(!!e)});return()=>e()},[o]);let r=async()=>{(await (0,p.hY)()).success&&(h.Am.warning("You logged out"),o.push("/"))};return(0,s.jsxs)("div",{className:l().container,children:[(0,s.jsx)(x,{text:"listen to your heart"}),(0,s.jsxs)("p",{className:l().text,children:["Your life is like the best fucking movie! ",(0,s.jsx)("br",{}),"The background changes, characters appear, yesterday you were crying, and now you are laughing. What can add spice to this moment? Yes. ",(0,s.jsx)("br",{}),"A perfectly fitting soundtrack"]}),(0,s.jsx)("h1",{className:l().title,children:"listen to music that perfectly matches your mood"}),e?(0,s.jsxs)("div",{className:l().loggedIn,children:[(0,s.jsx)("p",{children:"You are already logged in. However, you can log out anytime"}),(0,s.jsx)("button",{onClick:r,className:l().button,children:"now"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:l().please,children:"Please log in to access all features."}),(0,s.jsx)("nav",{className:l().nav,children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/login",passHref:!0,children:"Login"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/register",passHref:!0,children:"Register"})})]})})]}),(0,s.jsx)(w.Z,{})]})}},2247:function(e,t,o){"use strict";o.d(t,{Cb:function(){return a},eu:function(){return n},hY:function(){return i},jc:function(){return l}});var s=o(2316),r=o(2370);let i=async()=>{try{return await (0,r.w7)(s.I),{success:!0}}catch(e){return console.error("Error signing out: ",e),{success:!1,error:e}}},a=async()=>{let e=new r.hJ;try{return await (0,r.rh)(s.I,e)}catch(e){throw console.error("Google login error:",e.message),e}},n=async()=>{let e=new r._O;try{return await (0,r.rh)(s.I,e)}catch(e){throw console.error("Facebook login error:",e.message),e}},l=async(e,t)=>{try{await (0,r.e5)(s.I,e,t)}catch(e){throw console.error("Email login error:",e.message),e}}},2316:function(e,t,o){"use strict";o.d(t,{I:function(){return l},db:function(){return c}});var s=o(3977),r=o(9828),i=o(2370),a=o(6650);let n=(0,s.ZF)({apiKey:"AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",authDomain:"my-mood-playlist.firebaseapp.com",projectId:"my-mood-playlist",storageBucket:"my-mood-playlist.appspot.com",messagingSenderId:"665017246127",appId:"1:665017246127:web:4906d5430fcc98efe74f5a",measurementId:"G-D0L4JFMQSC"}),l=(0,i.v0)(n),c=(0,r.ad)(n);(0,a.cF)(n)},356:function(e){e.exports={footer:"Footer_footer__OYoYH",footerContent:"Footer_footerContent__QQ0Yh","footer-left":"Footer_footer-left__o0loO",footerRight:"Footer_footerRight__Heu1m",footerLinks:"Footer_footerLinks__zeWoW",footerSocial:"Footer_footerSocial__qmnAy"}},1046:function(e){e.exports={slideshow:"SlideAhow_slideshow__Ve2h0",overlay:"SlideAhow_overlay__SeqUz",slide:"SlideAhow_slide__8cz3N",active:"SlideAhow_active__W7Ftn",content:"SlideAhow_content__CnwUS",word:"SlideAhow_word__7e9Gb",fadeInUp:"SlideAhow_fadeInUp__kNija",heart:"SlideAhow_heart__Hpu3V",pulse:"SlideAhow_pulse__StIqM"}},1715:function(e){e.exports={container:"Home_container__0DUdU",please:"Home_please__9cx_t",nav:"Home_nav__xZSFY",text:"Home_text__HwnzK",title:"Home_title__8Nv2J",button:"Home_button__4wVdz"}}},function(e){e.O(0,[16,48,915,675,212,888,774,179],function(){return e(e.s=9012)}),_N_E=e.O()}]);