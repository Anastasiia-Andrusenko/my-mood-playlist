(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{4130:function(e,t,s){"use strict";var l=s(5893);s(7294);var o=s(356),a=s.n(o),r=s(1664),i=s.n(r);t.Z=()=>(0,l.jsx)("footer",{className:a().footer,children:(0,l.jsxs)("div",{className:a().footerContent,children:[(0,l.jsxs)("div",{className:a().footerPrivacy,children:[(0,l.jsxs)("ul",{className:a().footerLinks,children:[(0,l.jsx)("li",{className:a().text,children:(0,l.jsx)(i(),{href:"/terms",children:"Terms of Use"})}),(0,l.jsx)("li",{className:a().text,children:(0,l.jsx)(i(),{href:"/privacy",children:"Privacy Policy"})})]}),(0,l.jsx)("p",{className:a().text,children:(0,l.jsx)(i(),{href:"/contact",children:"Contact Us"})})]}),(0,l.jsx)("p",{className:a().rights,children:"\xa9 2024 YourMusicApp. All rights reserved."})]})})},6369:function(e,t,s){"use strict";var l=s(5893),o=s(7294),a=s(2149),r=s.n(a),i=s(1664),n=s.n(i),c=s(4173),d=s(2247),u=s(1163),_=s(602),m=s(3804),h=s(8506),p=s(2088),y=s(8773);t.Z=e=>{let{nickname:t,page:s}=e,[a,i]=(0,o.useState)(!1),x=(0,u.useRouter)();(0,o.useEffect)(()=>{a?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[a]);let f=async()=>{try{(await (0,d.hY)()).success?(c.Am.warning("You logged out"),x.push("/")):c.Am.error("Logout failed")}catch(e){c.Am.error("An error occurred during logout")}console.log("User logged out")};return(0,l.jsx)("header",{className:r().header,children:(0,l.jsxs)("div",{className:r().container,children:[(0,l.jsx)(_.Z,{isOpen:a,onClose:()=>{i(!1)},onConfirm:()=>{i(!1),f()}}),t?(0,l.jsxs)("div",{className:r().content,children:[(0,l.jsxs)("div",{className:r().nav,children:[s&&(0,l.jsx)(n(),{href:"/images",className:r().link,passHref:!0,children:(0,l.jsxs)("div",{className:r().tooltip,children:[(0,l.jsx)(p.zD9,{}),(0,l.jsx)("span",{className:r().tooltiptext,children:"back to mood list"})]})}),(0,l.jsx)(n(),{href:"/",className:r().link,passHref:!0,children:(0,l.jsxs)("div",{className:r().tooltip,children:[(0,l.jsx)(m.OUs,{}),(0,l.jsx)("span",{className:r().tooltiptext,children:"go Home page"})]})}),(0,l.jsx)("p",{onClick:()=>{i(!0)},className:r().link,children:(0,l.jsxs)("div",{className:r().tooltip,children:[(0,l.jsx)(h.VUx,{}),(0,l.jsx)("span",{className:r().tooltiptext,children:"Log Out"})]})})]}),(0,l.jsxs)("p",{className:r().welcome,children:["How are you, \xa0",(0,l.jsx)(n(),{href:"/cabinet",className:r().nickname,passHref:!0,children:(0,l.jsxs)("div",{className:r().tooltip,children:["\xa0",t,"\xa0\xa0",(0,l.jsx)(y.q1E,{}),(0,l.jsx)("span",{className:r().tooltipText,children:"to personal account"})]})}),"\xa0?"]})]}):(0,l.jsxs)("div",{className:r().notLogin,children:[(0,l.jsx)(n(),{href:"/",className:r().link,passHref:!0,children:(0,l.jsxs)("div",{className:r().tooltip,children:[(0,l.jsx)(m.OUs,{}),(0,l.jsx)("span",{className:r().tooltiptext,children:"go Home page"})]})}),(0,l.jsx)("p",{children:"Not logged in"})]})]})})}},602:function(e,t,s){"use strict";var l=s(5893),o=s(7294),a=s(8461),r=s.n(a);t.Z=e=>{let{isOpen:t,onClose:s,onConfirm:a}=e;return((0,o.useEffect)(()=>(t?(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden"):(document.documentElement.style.overflow="",document.body.style.overflow=""),()=>{document.documentElement.style.overflow="",document.body.style.overflow=""}),[t]),t)?(0,l.jsx)("div",{className:r().overlay,onClick:e=>{e.target===e.currentTarget&&s()},children:(0,l.jsxs)("div",{className:r().modal,children:[(0,l.jsx)("span",{onClick:s,className:r().close,children:"x"}),(0,l.jsx)("p",{children:"Are you sure?"}),(0,l.jsxs)("div",{className:r().buttons,children:[(0,l.jsx)("button",{onClick:a,className:r().button,children:"Yes"}),(0,l.jsx)("button",{onClick:s,className:r().button,children:"No"})]})]})}):null}},6337:function(e,t,s){"use strict";var l=s(7294),o=s(1163),a=s(2018);t.Z=()=>{let[e,t]=(0,l.useState)(null),s=(0,o.useRouter)();return(0,l.useEffect)(()=>{let e=a.I.onAuthStateChanged(e=>{e?t(e.displayName):s.push("/login")});return()=>e()},[s]),e}},3884:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var l=s(5893),o=s(7294),a=s(6369),r=s(4130),i=s(822),n=s.n(i),c=s(6337),d=s(5675),u=s.n(d),_=s(1163),m=s(2142),h=s.n(m),p=e=>{let{playlistId:t}=e;return(0,l.jsx)("div",{className:h().youtubePlayer,children:(0,l.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/videoseries?list=".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"YouTube Playlist Player"})})},y=s(7066);let x=async e=>{try{let t=await y.Z.get("https://www.googleapis.com/youtube/v3/playlistItems",{params:{part:"snippet",playlistId:e,maxResults:200,key:"AIzaSyBnfAVfFl5Pq6JVk-2ETn_yLG81fSw2yu8"}});return console.log(t.data.items),t.data.items}catch(e){var t;throw console.error("Error fetching playlist items: ",(null===(t=e.response)||void 0===t?void 0:t.data)||e.message),e}};var f=s(9482),j=s(2018),v=s(3299),g=s(109),N=s(9732),w=()=>{let e=(0,c.Z)(),{imgUrl:t,description:s,playlistId:i}=(0,_.useRouter)().query,[d,m]=(0,o.useState)([]),[h,y]=(0,o.useState)(null);(0,o.useEffect)(()=>{i&&(async()=>{try{let e=await x(i);m(e)}catch(e){console.error("Error fetching playlist items: ",e)}})()},[i]),(0,o.useEffect)(()=>{let e=(0,v.Aj)(j.I,e=>{e?y(e.uid):y(null)});return()=>e()},[]);let w=async()=>{if(!h){alert("Please log in to save your favorite playlists.");return}let e=(0,g.JU)(j.db,"users",h,"favorites",i);try{(await (0,g.QT)(e)).exists()?alert("This playlist is already in your favorites!"):(await (0,g.pl)(e,{playlistId:i,timestamp:(0,g.Bt)()}),alert("Playlist added to favorites!"))}catch(e){console.error("Error adding playlist to favorites: ",e)}};return(0,l.jsxs)("div",{children:[(0,l.jsx)(a.Z,{nickname:e,page:"playlist"}),(0,l.jsxs)("div",{className:n().imgWrapper,children:[t&&(0,l.jsx)(u(),{width:500,height:500,src:t,alt:"Selected image",className:n().img,priority:!0}),(0,l.jsx)("div",{className:n().overlay})]}),(0,l.jsx)(o.Suspense,{fallback:(0,l.jsx)(f.Z,{}),children:(0,l.jsxs)("main",{className:n().container,children:[(0,l.jsx)("h2",{className:n().title,children:"listen and enjoy"}),(0,l.jsx)("p",{className:n().description,children:"Here you can listen to the playlist that we created especially for your mood."}),(0,l.jsxs)("div",{className:n().content,children:[(0,l.jsxs)("div",{className:n().playerContainer,children:[i&&(0,l.jsx)(p,{playlistId:i}),(0,l.jsx)("div",{className:n().likeButton,children:(0,l.jsxs)("div",{className:n().tooltip,onClick:w,children:[(0,l.jsx)(N.qPX,{}),(0,l.jsx)("span",{className:n().tooltipText,children:"Add to favorites"})]})})]}),(0,l.jsx)("div",{className:n().listContainer,children:(0,l.jsx)("ul",{className:n().list,children:d.map((e,t)=>(0,l.jsx)("li",{className:n().item,children:e.snippet.title},t))})})]})]})}),(0,l.jsx)(r.Z,{})]})}},2247:function(e,t,s){"use strict";s.d(t,{Cb:function(){return r},eu:function(){return i},hY:function(){return a},jc:function(){return n}});var l=s(2018),o=s(3299);let a=async()=>{try{return await (0,o.w7)(l.I),{success:!0}}catch(e){return console.error("Error signing out: ",e),{success:!1,error:e}}},r=async()=>{let e=new o.hJ;try{return await (0,o.rh)(l.I,e)}catch(e){throw console.error("Google login error:",e.message),e}},i=async()=>{let e=new o._O;try{return await (0,o.rh)(l.I,e)}catch(e){throw console.error("Facebook login error:",e.message),e}},n=async(e,t)=>{try{await (0,o.e5)(l.I,e,t)}catch(e){throw console.error("Email login error:",e.message),e}}},356:function(e){e.exports={footer:"Footer_footer__OYoYH",footerContent:"Footer_footerContent__QQ0Yh",footerPrivacy:"Footer_footerPrivacy__wdtSE",footerLinks:"Footer_footerLinks__zeWoW",text:"Footer_text__zmW1j",rights:"Footer_rights__fQz9c"}},2149:function(e){e.exports={header:"Header_header__MwWvM",container:"Header_container__Aasa1",welcome:"Header_welcome__qwo_o",content:"Header_content__ENXbo",nav:"Header_nav____I21",link:"Header_link__suN3m",tooltip:"Header_tooltip__cGlTs",tooltiptext:"Header_tooltiptext__Fkh_A",tooltipText:"Header_tooltipText__p5UUj",nickname:"Header_nickname__eVO0V",notLogin:"Header_notLogin__UARzv"}},8461:function(e){e.exports={overlay:"Modal_overlay__nbJY5",modal:"Modal_modal__l4yBn",buttons:"Modal_buttons__0MBpx",button:"Modal_button__uXEDR",close:"Modal_close__AOA14"}},2142:function(e){e.exports={youtubePlayer:"YouTubePlayer_youtubePlayer__SdDMh"}},822:function(e){e.exports={container:"Playlist_container__Uc3dO",content:"Playlist_content__eB2PT",title:"Playlist_title__UP45L",description:"Playlist_description__5lRs7",imgWrapper:"Playlist_imgWrapper__Bilmy",img:"Playlist_img__aCJac",overlay:"Playlist_overlay__dBXDp",playerContainer:"Playlist_playerContainer__twh2_",listContainer:"Playlist_listContainer__Ru20_",list:"Playlist_list__LiDQR",item:"Playlist_item__u_A_4",ImgPlay:"Playlist_ImgPlay__OBLkM",likeButton:"Playlist_likeButton__Cyl6_",tooltip:"Playlist_tooltip__KVBaQ",tooltipText:"Playlist_tooltipText__hf9YH"}}}]);