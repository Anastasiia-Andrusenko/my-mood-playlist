(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{5360:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/images",function(){return t(5223)}])},5223:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a=t(5893),s=t(7294),i=t(1163),r=t(9828),c=t(2316),o=e=>{let{nickname:n}=e;return(0,a.jsx)("header",{children:n?(0,a.jsxs)("p",{children:["Welcome, ",n,"!"]}):(0,a.jsx)("p",{children:"Not logged in"})})},u=t(9639),d=t.n(u),m=()=>{let[e,n]=(0,s.useState)(null),[t,u]=(0,s.useState)([]),m=(0,i.useRouter)();(0,s.useEffect)(()=>{let e=c.I.onAuthStateChanged(e=>{e?(n(e.displayName),l()):m.push("/login")});return()=>e()},[]);let l=async()=>{try{let e=(await (0,r.PL)((0,r.hJ)(c.db,"images"))).docs.map(e=>e.data().url);u(e)}catch(e){console.error("Error fetching images: ",e.message)}};return(0,a.jsxs)("div",{children:[(0,a.jsx)(o,{nickname:e}),(0,a.jsxs)("main",{children:[(0,a.jsx)("h1",{children:"Choose an Image"}),(0,a.jsx)("div",{className:d().imageGrid,children:t.map((e,n)=>(0,a.jsx)("img",{src:e,alt:"Image ".concat(n+1),className:d().img},n))})]})]})}},2316:function(e,n,t){"use strict";t.d(n,{I:function(){return o},db:function(){return u}});var a=t(3977),s=t(9828),i=t(2370),r=t(6650);let c=(0,a.ZF)({apiKey:"AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",authDomain:"my-mood-playlist.firebaseapp.com",projectId:"my-mood-playlist",storageBucket:"my-mood-playlist.appspot.com",messagingSenderId:"665017246127",appId:"1:665017246127:web:4906d5430fcc98efe74f5a",measurementId:"G-D0L4JFMQSC"}),o=(0,i.v0)(c),u=(0,s.ad)(c);(0,r.cF)(c)},9639:function(e){e.exports={imageGrid:"Images_imageGrid__zIW9N",img:"Images_img__DdpSY"}},1163:function(e,n,t){e.exports=t(9090)}},function(e){e.O(0,[16,48,915,888,774,179],function(){return e(e.s=5360)}),_N_E=e.O()}]);