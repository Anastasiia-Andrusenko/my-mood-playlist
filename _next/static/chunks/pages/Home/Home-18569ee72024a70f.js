(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{9012:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Home/Home",function(){return t(8798)}])},4130:function(e,o,t){"use strict";var s=t(5893);t(7294);var r=t(356),i=t.n(r),a=t(1664),n=t.n(a);o.Z=()=>(0,s.jsx)("footer",{className:i().footer,children:(0,s.jsxs)("div",{className:i().footerContent,children:[(0,s.jsx)("div",{className:i().footerLeft,children:(0,s.jsx)("p",{children:"\xa9 2024 YourMusicApp. All rights reserved."})}),(0,s.jsx)("div",{className:i().footerRight,children:(0,s.jsxs)("ul",{className:i().footerLinks,children:[(0,s.jsx)("li",{children:(0,s.jsx)(n(),{href:"/privacy",children:"Privacy Policy"})}),(0,s.jsx)("li",{children:(0,s.jsx)(n(),{href:"/contact",children:"Contact Us"})})]})})]})})},8798:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return N}});var s=t(5893),r=t(1664),i=t.n(r),a=t(7294),n=t(1715),l=t.n(n),c=t(1752),m=t.n(c),d=t(2316),g=t(1163),u=t(4173),h=t(2247),p=t(5675),_=t.n(p),y=t(1046),f=t.n(y);let j=["/my-mood-playlist/img/bg/01.jpg","/my-mood-playlist/img/bg/02.jpg","/my-mood-playlist/img/bg/03.jpg","/my-mood-playlist/img/bg/04.jpg","/my-mood-playlist/img/bg/05.jpg","/my-mood-playlist/img/bg/06.jpg","/my-mood-playlist/img/bg/07.jpg","/my-mood-playlist/img/bg/08.jpg","/my-mood-playlist/img/bg/09.jpg","/my-mood-playlist/img/bg/010.jpg","/my-mood-playlist/img/bg/012.jpg","/my-mood-playlist/img/bg/013.jpg","/my-mood-playlist/img/bg/014.jpg","/my-mood-playlist/img/bg/015.jpg","/my-mood-playlist/img/bg/016.jpg","/my-mood-playlist/img/bg/017.jpg","/my-mood-playlist/img/bg/018.jpg","/my-mood-playlist/img/bg/019.jpg","/my-mood-playlist/img/bg/020.jpg","/my-mood-playlist/img/bg/021.jpg","/my-mood-playlist/img/bg/022.jpg"];var x=e=>{let{text:o}=e,[t,r]=(0,a.useState)(0);(0,a.useEffect)(()=>{let e=setInterval(()=>{r(e=>(e+1)%j.length)},600);return()=>clearInterval(e)},[]);let i=o.split(" ");return(0,s.jsxs)("div",{className:f().slideshow,children:[(0,s.jsx)("div",{className:f().overlay}),j.map((e,o)=>(0,s.jsx)(_(),{width:500,height:500,src:e,className:"".concat(f().slide," ").concat(o===t?f().active:""),alt:"picture ".concat(o)},o)),(0,s.jsx)("div",{className:f().content,children:(0,s.jsx)("h2",{children:i.map((e,o)=>(0,s.jsx)("span",{className:"".concat(f().word," ").concat("heart"===e?f().heart:""),style:{animationDelay:"".concat(.5*o,"s")},children:e},o))})})]})},w=t(4130),b=t(6261);let{publicRuntimeConfig:v}=m()();v.basePath;var N=()=>{let[e,o]=(0,a.useState)(!1),t=(0,g.useRouter)();(0,a.useEffect)(()=>{let e=d.I.onAuthStateChanged(e=>{o(!!e)});return()=>e()},[t]),(0,a.useEffect)(()=>{let e=setTimeout(()=>{b.OK.scrollTo("text-section",{duration:2e3,delay:0,smooth:"easeInOutQuart",offset:-(.1*window.innerHeight)})},6e3);return()=>clearTimeout(e)},[]);let r=async()=>{try{(await (0,h.hY)()).success?(u.Am.warning("You logged out"),t.push("/")):u.Am.error("Logout failed")}catch(e){u.Am.error("An error occurred during logout")}};return(0,s.jsxs)("div",{className:l().container,children:[(0,s.jsx)(x,{text:"listen to your heart"}),(0,s.jsxs)("p",{className:l().text,id:"text-section",children:["Your life is like the best fucking movie! ",(0,s.jsx)("br",{}),"The background changes, characters appear. Yesterday you were crying, and now you are laughing. What can add spice to this moment? Yes. ",(0,s.jsx)("br",{}),"A perfectly fitting soundtrack"]}),(0,s.jsx)("h2",{className:l().comeOn,children:(0,s.jsx)(i(),{href:"/images",passHref:!0,className:l().link,children:"come on"})}),(0,s.jsx)("h1",{className:l().title,children:(0,s.jsx)(i(),{href:"/images",passHref:!0,className:l().link,children:"listen to music that perfectly matches your mood"})}),e?(0,s.jsxs)("div",{className:l().loggedIn,children:[(0,s.jsx)("p",{className:l().already,children:"You are already logged in. However, you can log out anytime"}),(0,s.jsx)("button",{onClick:r,className:l().button,children:"now"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:l().please,children:"Please log in to access all features."}),(0,s.jsx)("nav",{className:l().nav,children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/login",passHref:!0,children:"Login"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/register",passHref:!0,children:"Register"})})]})})]}),(0,s.jsx)(w.Z,{})]})}},2247:function(e,o,t){"use strict";t.d(o,{Cb:function(){return a},eu:function(){return n},hY:function(){return i},jc:function(){return l}});var s=t(2316),r=t(2370);let i=async()=>{try{return await (0,r.w7)(s.I),{success:!0}}catch(e){return console.error("Error signing out: ",e),{success:!1,error:e}}},a=async()=>{let e=new r.hJ;try{return await (0,r.rh)(s.I,e)}catch(e){throw console.error("Google login error:",e.message),e}},n=async()=>{let e=new r._O;try{return await (0,r.rh)(s.I,e)}catch(e){throw console.error("Facebook login error:",e.message),e}},l=async(e,o)=>{try{await (0,r.e5)(s.I,e,o)}catch(e){throw console.error("Email login error:",e.message),e}}},2316:function(e,o,t){"use strict";t.d(o,{I:function(){return l},db:function(){return c}});var s=t(3977),r=t(9828),i=t(2370),a=t(6650);let n=(0,s.ZF)({apiKey:"AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",authDomain:"my-mood-playlist.firebaseapp.com",projectId:"my-mood-playlist",storageBucket:"my-mood-playlist.appspot.com",messagingSenderId:"665017246127",appId:"1:665017246127:web:4906d5430fcc98efe74f5a",measurementId:"G-D0L4JFMQSC"}),l=(0,i.v0)(n),c=(0,r.ad)(n);(0,a.cF)(n)},356:function(e){e.exports={footer:"Footer_footer__OYoYH",footerContent:"Footer_footerContent__QQ0Yh","footer-left":"Footer_footer-left__o0loO",footerRight:"Footer_footerRight__Heu1m",footerLinks:"Footer_footerLinks__zeWoW",footerSocial:"Footer_footerSocial__qmnAy"}},1046:function(e){e.exports={slideshow:"SlideAhow_slideshow__Ve2h0",overlay:"SlideAhow_overlay__SeqUz",slide:"SlideAhow_slide__8cz3N",active:"SlideAhow_active__W7Ftn",content:"SlideAhow_content__CnwUS",word:"SlideAhow_word__7e9Gb",fadeInUp:"SlideAhow_fadeInUp__kNija",heart:"SlideAhow_heart__Hpu3V",pulse:"SlideAhow_pulse__StIqM"}},1715:function(e){e.exports={container:"Home_container__0DUdU",link:"Home_link__jUoAM",please:"Home_please__9cx_t",nav:"Home_nav__xZSFY",text:"Home_text__HwnzK",comeOn:"Home_comeOn__q8yKi",pulse:"Home_pulse__jmNcY",title:"Home_title__8Nv2J",already:"Home_already__9_kCE",button:"Home_button__4wVdz"}}},function(e){e.O(0,[16,48,750,675,538,888,774,179],function(){return e(e.s=9012)}),_N_E=e.O()}]);