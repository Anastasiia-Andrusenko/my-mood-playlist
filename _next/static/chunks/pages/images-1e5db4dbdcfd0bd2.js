(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{5360:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/images",function(){return s(5905)}])},4130:function(e,t,s){"use strict";var r=s(5893);s(7294);var o=s(356),n=s.n(o),a=s(1664),c=s.n(a);t.Z=()=>(0,r.jsx)("footer",{className:n().footer,children:(0,r.jsxs)("div",{className:n().footerContent,children:[(0,r.jsxs)("div",{className:n().footerPrivacy,children:[(0,r.jsxs)("ul",{className:n().footerLinks,children:[(0,r.jsx)("li",{className:n().text,children:(0,r.jsx)(c(),{href:"/terms",children:"Terms of Use"})}),(0,r.jsx)("li",{className:n().text,children:(0,r.jsx)(c(),{href:"/privacy",children:"Privacy Policy"})})]}),(0,r.jsx)("p",{className:n().text,children:(0,r.jsx)(c(),{href:"/contact",children:"Contact Us"})})]}),(0,r.jsx)("p",{className:n().rights,children:"\xa9 2024 YourMusicApp. All rights reserved."})]})})},6369:function(e,t,s){"use strict";var r=s(5893),o=s(7294),n=s(2149),a=s.n(n),c=s(1664),i=s.n(c),l=s(4173),d=s(2247),u=s(1163),m=s(602),_=s(3804),h=s(8506),p=s(2088);t.Z=e=>{let{nickname:t,page:s}=e,[n,c]=(0,o.useState)(!1),f=(0,u.useRouter)();(0,o.useEffect)(()=>{n?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[n]);let x=async()=>{try{(await (0,d.hY)()).success?(l.Am.warning("You logged out"),f.push("/")):l.Am.error("Logout failed")}catch(e){l.Am.error("An error occurred during logout")}console.log("User logged out")};return(0,r.jsx)("header",{className:a().header,children:(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsx)(m.Z,{isOpen:n,onClose:()=>{c(!1)},onConfirm:()=>{c(!1),x()}}),t?(0,r.jsxs)("div",{className:a().content,children:[(0,r.jsxs)("p",{className:a().welcome,children:["How are you, ",t,"?"]}),(0,r.jsxs)("div",{className:a().nav,children:[s&&(0,r.jsx)(i(),{href:"/images",className:a().link,passHref:!0,children:(0,r.jsxs)("div",{className:a().tooltip,children:[(0,r.jsx)(p.zD9,{}),(0,r.jsx)("span",{className:a().tooltiptext,children:"back to mood list"})]})}),(0,r.jsx)(i(),{href:"/",className:a().link,passHref:!0,children:(0,r.jsxs)("div",{className:a().tooltip,children:[(0,r.jsx)(_.OUs,{}),(0,r.jsx)("span",{className:a().tooltiptext,children:"go Home page"})]})}),(0,r.jsx)("p",{onClick:()=>{c(!0)},className:a().link,children:(0,r.jsxs)("div",{className:a().tooltip,children:[(0,r.jsx)(h.VUx,{}),(0,r.jsx)("span",{className:a().tooltiptext,children:"Log Out"})]})})]})]}):(0,r.jsx)("p",{children:"Not logged in"})]})})}},602:function(e,t,s){"use strict";var r=s(5893);s(7294);var o=s(8461),n=s.n(o);t.Z=e=>{let{isOpen:t,onClose:s,onConfirm:o}=e;return t?(0,r.jsx)("div",{className:n().overlay,onClick:e=>{e.target===e.currentTarget&&s()},children:(0,r.jsxs)("div",{className:n().modal,children:[(0,r.jsx)("span",{onClick:s,className:n().close,children:"x"}),(0,r.jsx)("p",{children:"Are you sure?"}),(0,r.jsxs)("div",{className:n().buttons,children:[(0,r.jsx)("button",{onClick:o,className:n().button,children:"Yes"}),(0,r.jsx)("button",{onClick:s,className:n().button,children:"No"})]})]})}):null}},6337:function(e,t,s){"use strict";var r=s(7294),o=s(1163),n=s(2316);t.Z=()=>{let[e,t]=(0,r.useState)(null),s=(0,o.useRouter)();return(0,r.useEffect)(()=>{let e=n.I.onAuthStateChanged(e=>{e?t(e.displayName):s.push("/login")});return()=>e()},[s]),e}},3942:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var r=s(5893),o=s(7294),n=s(6369),a=s(6224),c=s.n(a),i=s(9828),l=s(2316);let d=async()=>{try{let e=(0,i.IO)((0,i.hJ)(l.db,"images"),(0,i.Xo)("order","asc"));return(await (0,i.PL)(e)).docs.map(e=>({url:e.data().url,description:e.data().description,playlistId:e.data().playlistId,order:e.data().order}))}catch(e){throw console.error("Error fetching images: ",e.message),e}};var u=s(6337),m=s(1163),_=s(9482),h=s(5675),p=s.n(h),f=s(4439),x=s.n(f),g=s(1664),j=s.n(g),y=s(1570),N=e=>{let{imgContent:t}=e;return(0,r.jsx)("div",{className:x().imageGrid,children:t.map((e,t)=>(0,r.jsxs)("div",{className:x().imgWrapper,children:[(0,r.jsx)(y.EAI,{className:x().icon}),(0,r.jsx)(p(),{width:500,height:350,src:e.url,alt:"Image ".concat(t+1),className:x().img,priority:!0}),(0,r.jsx)("div",{className:x().overlay,children:(0,r.jsx)(j(),{href:"/playlist?imgUrl=".concat(encodeURIComponent(e.url),"&description=").concat(encodeURIComponent(e.description),"&playlistId=").concat(encodeURIComponent(e.playlistId)),className:x().link,passHref:!0,children:(0,r.jsxs)("p",{className:x().description,children:[" ",e.description]})})})]},t))})},v=s(4130),w=()=>{let[e,t]=(0,o.useState)([]),[s,a]=(0,o.useState)(!0),i=(0,u.Z)();return((0,m.useRouter)(),(0,o.useEffect)(()=>{let e=async()=>{try{let e=await d();t(e)}catch(e){e instanceof Error&&console.error("Error fetching images: ",e.message)}finally{a(!1)}};i&&e()},[i]),i)?(0,r.jsxs)("div",{children:[(0,r.jsx)(n.Z,{nickname:i,page:""}),(0,r.jsxs)("main",{className:c().container,children:[(0,r.jsxs)("p",{className:c().text,children:["Sometimes no words can describe what you feel. Therefore, you have different atmospheric images in front of you. ",(0,r.jsx)("br",{}),"Click on the one that suits you best."]}),(0,r.jsx)("h2",{className:c().title,children:"Choose with your heart"}),(0,r.jsx)(o.Suspense,{fallback:(0,r.jsx)(_.Z,{}),children:(0,r.jsx)(N,{imgContent:e})})]}),(0,r.jsx)(v.Z,{})]}):null}},5905:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r.default}});var r=s(3942)},2247:function(e,t,s){"use strict";s.d(t,{Cb:function(){return a},eu:function(){return c},hY:function(){return n},jc:function(){return i}});var r=s(2316),o=s(2370);let n=async()=>{try{return await (0,o.w7)(r.I),{success:!0}}catch(e){return console.error("Error signing out: ",e),{success:!1,error:e}}},a=async()=>{let e=new o.hJ;try{return await (0,o.rh)(r.I,e)}catch(e){throw console.error("Google login error:",e.message),e}},c=async()=>{let e=new o._O;try{return await (0,o.rh)(r.I,e)}catch(e){throw console.error("Facebook login error:",e.message),e}},i=async(e,t)=>{try{await (0,o.e5)(r.I,e,t)}catch(e){throw console.error("Email login error:",e.message),e}}},2316:function(e,t,s){"use strict";s.d(t,{I:function(){return i},db:function(){return l}});var r=s(3977),o=s(9828),n=s(2370),a=s(6650);let c=(0,r.ZF)({apiKey:"AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",authDomain:"my-mood-playlist.firebaseapp.com",projectId:"my-mood-playlist",storageBucket:"my-mood-playlist.appspot.com",messagingSenderId:"665017246127",appId:"1:665017246127:web:4906d5430fcc98efe74f5a",measurementId:"G-D0L4JFMQSC"}),i=(0,n.v0)(c),l=(0,o.ad)(c);(0,a.cF)(c)},356:function(e){e.exports={footer:"Footer_footer__OYoYH",footerContent:"Footer_footerContent__QQ0Yh",footerPrivacy:"Footer_footerPrivacy__wdtSE",footerLinks:"Footer_footerLinks__zeWoW",text:"Footer_text__zmW1j",rights:"Footer_rights__fQz9c"}},2149:function(e){e.exports={header:"Header_header__MwWvM",container:"Header_container__Aasa1",welcome:"Header_welcome__qwo_o",content:"Header_content__ENXbo",nav:"Header_nav____I21",link:"Header_link__suN3m",tooltip:"Header_tooltip__cGlTs",tooltiptext:"Header_tooltiptext__Fkh_A"}},4439:function(e){e.exports={imageGrid:"ImageContent_imageGrid__q_nZj",imgWrapper:"ImageContent_imgWrapper__d2GwA",img:"ImageContent_img__uyF65",overlay:"ImageContent_overlay__a7UQ3",description:"ImageContent_description__cMUwA",icon:"ImageContent_icon__moKfM",pulse:"ImageContent_pulse__foAdY"}},8461:function(e){e.exports={overlay:"Modal_overlay__nbJY5",modal:"Modal_modal__l4yBn",buttons:"Modal_buttons__0MBpx",button:"Modal_button__uXEDR",close:"Modal_close__AOA14"}},6224:function(e){e.exports={container:"Images_container__JZhTS",title:"Images_title__Db2X2",fadeIn:"Images_fadeIn__KLzdi",pulse:"Images_pulse__FwJg7",text:"Images_text__CA5A6"}}},function(e){e.O(0,[16,48,391,838,123,127,750,800,888,774,179],function(){return e(e.s=5360)}),_N_E=e.O()}]);