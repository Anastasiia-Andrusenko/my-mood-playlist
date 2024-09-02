(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return w},G6:function(){return S},L:function(){return u},LL:function(){return R},P0:function(){return m},Pz:function(){return v},Sg:function(){return _},ZR:function(){return N},aH:function(){return y},b$:function(){return T},eu:function(){return k},hl:function(){return A},m9:function(){return q},ne:function(){return U},pd:function(){return M},q4:function(){return g},ru:function(){return I},tV:function(){return c},uI:function(){return E},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],o=n[s];if(D(r)&&D(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},w1:function(){return C},xO:function(){return L},xb:function(){return P},z$:function(){return b},zd:function(){return x}});var r=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},s=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4,h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,l=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==l)throw new a;let u=i<<2|s>>4;if(r.push(u),64!==o){let e=s<<4&240|o>>2;if(r.push(e),64!==l){let e=o<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return o.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},h=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&c(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{let t=g(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function I(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function T(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function C(){let e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S(){return!function(){var e;let t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"==typeof indexedDB}catch(e){return!1}}function k(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(O,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new N(r,o,n)}}let O=/\{\$([^}]+)}/g;function P(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function x(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function M(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function U(e,t){let n=new F(e,t);return n.subscribe.bind(n)}class F{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return e&&e._delegate?e._delegate:e}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8421)}])},2711:function(e,t,n){"use strict";var r=n(5893);n(7294);var i=n(8037),s=n.n(i);t.Z=()=>(0,r.jsx)("div",{className:s().loader,children:(0,r.jsx)("div",{className:s().spinner})})},1761:function(e,t,n){"use strict";n.d(t,{H:function(){return c},a:function(){return u}});var r=n(5893),i=n(7294),s=n(2443),o=n(3299),a=n(4173);let l=(0,i.createContext)(void 0),u=()=>(0,i.useContext)(l),c=e=>{let{children:t}=e,[n,u]=(0,i.useState)(null),[c,h]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=(0,o.Aj)(s.I,e=>{e?e.emailVerified?(u(e),h(!0)):(a.Am.warn("Please verify your email address before proceeding.",{autoClose:!1}),(0,o.w7)(s.I)):(u(null),h(!1))});return()=>e()},[]),(0,r.jsx)(l.Provider,{value:{currentUser:n,isAuthenticated:c,logout:()=>{(0,o.w7)(s.I),u(null),h(!1)},updateDisplayName:e=>{n&&u({...n,displayName:e})}},children:t})}},8421:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893);n(2877),n(2130);var i=n(4173),s=n(7294),o=n(1163),a=n(2711),l=n(8767);let u=new l.QueryClient;var c=n(1761),h=e=>{let{Component:t,pageProps:n}=e,h=(0,o.useRouter)();return(0,s.useEffect)(()=>{let e=e=>{"/images"===e||e.startsWith("/playlist")?localStorage.setItem("lastPath",e):localStorage.removeItem("lastPath")};return h.events.on("routeChangeComplete",e),()=>{h.events.off("routeChangeComplete",e)}},[h]),(0,r.jsx)(c.H,{children:(0,r.jsx)(l.QueryClientProvider,{client:u,children:(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(a.Z,{}),children:[(0,r.jsx)(t,{...n}),(0,r.jsx)(i.Ix,{})]})})})}},2443:function(e,t,n){"use strict";n.d(t,{I:function(){return N},db:function(){return R}});var r,i,s,o,a=n(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,a.KN)("firebase","10.12.0","app");var l=n(109),u=n(3299),c=n(4444),h=n(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="firebasestorage.googleapis.com";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends c.ZR{constructor(e,t,n=0){super(p(e),`Firebase Storage: ${t} (${p(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return p(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function p(e){return"storage/"+e}function g(e){return new f(s.INVALID_ARGUMENT,e)}function m(){return new f(s.APP_DELETED,"The Firebase app was deleted.")}(r=s||(s={})).UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=y.makeFromUrl(e,t)}catch(t){return new y(e,"")}if(""===n.path)return n;throw new f(s.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null,r="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),l=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:RegExp(`^https?://${t===d?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<l.length;t++){let r=l[t],i=r.regex.exec(e);if(i){let e=i[r.indices.bucket],t=i[r.indices.path];t||(t=""),n=new y(e,t),r.postModify(n);break}}if(null==n)throw new f(s.INVALID_URL,"Invalid URL '"+e+"'.");return n}}class v{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function w(e,t,n,r){if(r<t)throw g(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw g(`Invalid value for '${e}'. Expected ${n} or less.`)}(i=o||(o={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t,n,r,i,s,o,a,l,u,c,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==i){let e=new f(s.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");e.serverResponse=i.getErrorText(),r(this.errorCallback_?this.errorCallback_(i,e):e)}else r(t.canceled?this.appDelete_?m():new f(s.CANCELED,"User canceled the upload/download."):new f(s.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))};this.canceled_?e(!1,new b(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){let r=1,i=null,s=null,o=!1,a=0,l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function c(t){i=setTimeout(()=>{i=null,e(d,2===a)},t)}function h(){s&&clearTimeout(s)}function d(e,...t){let n;if(l){h();return}if(e||2===a||o){h(),u.call(null,e,...t);return}r<64&&(r*=2),1===a?(a=2,n=0):n=(r+Math.random())*1e3,c(n)}let f=!1;function p(e){!f&&(f=!0,h(),!l&&(null!==i?(e||(a=2),clearTimeout(i),c(0)):e||(a=1)))}return c(0),s=setTimeout(()=>{o=!0,p(!0)},n),p}((e,t)=>{if(t){e(!1,new b(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let r=e=>{let t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;let t=n.getErrorCode()===o.NO_ERROR,i=n.getStatus();if(!t||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}(i,this.additionalRetryCodes_)&&this.retry){e(!1,new b(!1,null,n.getErrorCode()===o.ABORT));return}e(!0,new b(-1!==this.successCodes_.indexOf(i),n))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class b{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this._service=e,t instanceof y?this._location=t:this._location=y.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new E(e,t)}get root(){let e=new y(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");return -1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;let t=new y(this._location.bucket,e);return new E(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new f(s.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function I(e,t){let n=null==t?void 0:t.storageBucket;return null==n?null:y.makeFromBucketSpec(n,e)}class T{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=d,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=r?this._bucket=y.makeFromBucketSpec(r,this._host):this._bucket=I(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=y.makeFromBucketSpec(this._url,e):this._bucket=I(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){w("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){w("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new E(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new v(m());{let s=function(e,t,n,r,i,s,o=!0){let a=function(e){let t=encodeURIComponent,n="?";for(let r in e)e.hasOwnProperty(r)&&(n=n+(t(r)+"=")+t(e[r])+"&");return n.slice(0,-1)}(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return t&&(u["X-Firebase-GMPID"]=t),null!==n&&n.length>0&&(u.Authorization="Firebase "+n),u["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),null!==r&&(u["X-Firebase-AppCheck"]=r),new _(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}let C="@firebase/storage",S="0.12.5",A="storage";(0,a.Xd)(new h.wA(A,function(e,{instanceIdentifier:t}){return new T(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t,a.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,a.KN)(C,S,""),(0,a.KN)(C,S,"esm2017");let k=(0,a.ZF)({apiKey:"AIzaSyATUXcfqBg3IZYQc9Q0hINGt6oVjNLoZB8",authDomain:"my-mood-playlist.firebaseapp.com",projectId:"my-mood-playlist",storageBucket:"my-mood-playlist.appspot.com",messagingSenderId:"665017246127",appId:"1:665017246127:web:4906d5430fcc98efe74f5a",measurementId:"G-D0L4JFMQSC"}),N=(0,u.v0)(k),R=(0,l.ad)(k);!function(e=(0,a.Mq)(),t){e=(0,c.m9)(e);let n=(0,a.qX)(e,A).getImmediate({identifier:void 0}),r=(0,c.P0)("storage");r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";let{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:(0,c.Sg)(i,e.app.options.projectId))}(e,t,n,r)}(n,...r)}(k)},1876:function(e){!function(){var t={675:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),n=t[0],r=t[1];return(n+r)*3/4-r},t.toByteArray=function(e){var t,n,s=l(e),o=s[0],a=s[1],u=new i((o+a)*3/4-a),c=0,h=a>0?o-4:o;for(n=0;n<h;n+=4)t=r[e.charCodeAt(n)]<<18|r[e.charCodeAt(n+1)]<<12|r[e.charCodeAt(n+2)]<<6|r[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;return 2===a&&(t=r[e.charCodeAt(n)]<<2|r[e.charCodeAt(n+1)]>>4,u[c++]=255&t),1===a&&(t=r[e.charCodeAt(n)]<<10|r[e.charCodeAt(n+1)]<<4|r[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t),u},t.fromByteArray=function(e){for(var t,r=e.length,i=r%3,s=[],o=0,a=r-i;o<a;o+=16383)s.push(function(e,t,r){for(var i,s=[],o=t;o<r;o+=3)s.push(n[(i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return s.join("")}(e,o,o+16383>a?a:o+16383));return 1===i?s.push(n[(t=e[r-1])>>2]+n[t<<4&63]+"=="):2===i&&s.push(n[(t=(e[r-2]<<8)+e[r-1])>>10]+n[t>>4&63]+n[t<<2&63]+"="),s.join("")};for(var n=[],r=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,a=s.length;o<a;++o)n[o]=s[o],r[s.charCodeAt(o)]=o;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");-1===n&&(n=t);var r=n===t?0:4-n%4;return[n,r]}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},72:function(e,t,n){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var r=n(675),i=n(783),s="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function o(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,n){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return c(e)}return l(e,t,n)}function l(e,t,n){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!a.isEncoding(t))throw TypeError("Unknown encoding: "+t);var n=0|f(e,t),r=o(n),i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}(e,t);if(ArrayBuffer.isView(e))return h(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(N(e,ArrayBuffer)||e&&N(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(N(e,SharedArrayBuffer)||e&&N(e.buffer,SharedArrayBuffer)))return function(e,t,n){var r;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),a.prototype),r}(e,t,n);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return a.from(r,t,n);var i=function(e){if(a.isBuffer(e)){var t,n=0|d(e.length),r=o(n);return 0===r.length||e.copy(r,0,0,n),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?o(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return a.from(e[Symbol.toPrimitive]("string"),t,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return u(e),o(e<0?0:0|d(e))}function h(e){for(var t=e.length<0?0:0|d(e.length),n=o(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function d(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function f(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||N(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return C(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return A(e).length;default:if(i)return r?-1:C(e).length;t=(""+t).toLowerCase(),i=!0}}function p(e,t,n){var i,s,o=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||(n>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",s=t;s<n;++s)i+=R[e[s]];return i}(this,t,n);case"utf8":case"utf-8":return v(this,t,n);case"ascii":return function(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}(this,t,n);case"latin1":case"binary":return function(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}(this,t,n);case"base64":return i=t,s=n,0===i&&s===this.length?r.fromByteArray(this):r.fromByteArray(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,n){for(var r=e.slice(t,n),i="",s=0;s<r.length;s+=2)i+=String.fromCharCode(r[s]+256*r[s+1]);return i}(this,t,n);default:if(o)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}function g(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function m(e,t,n,r,i){var s;if(0===e.length)return -1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(s=n=+n)!=s&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return -1;n=e.length-1}else if(n<0){if(!i)return -1;n=0}if("string"==typeof t&&(t=a.from(t,r)),a.isBuffer(t))return 0===t.length?-1:y(e,t,n,r,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):y(e,[t],n,r,i);throw TypeError("val must be string, number or Buffer")}function y(e,t,n,r,i){var s,o=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var c=-1;for(s=n;s<a;s++)if(u(e,s)===u(t,-1===c?0:s-c)){if(-1===c&&(c=s),s-c+1===l)return c*o}else -1!==c&&(s-=s-c),c=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){for(var h=!0,d=0;d<l;d++)if(u(e,s+d)!==u(t,d)){h=!1;break}if(h)return s}return -1}function v(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var s,o,a,l,u=e[i],c=null,h=u>239?4:u>223?3:u>191?2:1;if(i+h<=n)switch(h){case 1:u<128&&(c=u);break;case 2:(192&(s=e[i+1]))==128&&(l=(31&u)<<6|63&s)>127&&(c=l);break;case 3:s=e[i+1],o=e[i+2],(192&s)==128&&(192&o)==128&&(l=(15&u)<<12|(63&s)<<6|63&o)>2047&&(l<55296||l>57343)&&(c=l);break;case 4:s=e[i+1],o=e[i+2],a=e[i+3],(192&s)==128&&(192&o)==128&&(192&a)==128&&(l=(15&u)<<18|(63&s)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(c=l)}null===c?(c=65533,h=1):c>65535&&(c-=65536,r.push(c>>>10&1023|55296),c=56320|1023&c),r.push(c),i+=h}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}function w(e,t,n){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>n)throw RangeError("Trying to access beyond buffer length")}function _(e,t,n,r,i,s){if(!a.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(n+r>e.length)throw RangeError("Index out of range")}function b(e,t,n,r,i,s){if(n+r>e.length||n<0)throw RangeError("Index out of range")}function E(e,t,n,r,s){return t=+t,n>>>=0,s||b(e,t,n,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,n,r,23,4),n+4}function I(e,t,n,r,s){return t=+t,n>>>=0,s||b(e,t,n,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,n,r,52,8),n+8}t.Buffer=a,t.SlowBuffer=function(e){return+e!=e&&(e=0),a.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,a.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(e,t,n){return l(e,t,n)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(e,t,n){return(u(e),e<=0)?o(e):void 0!==t?"string"==typeof n?o(e).fill(t,n):o(e).fill(t):o(e)},a.allocUnsafe=function(e){return c(e)},a.allocUnsafeSlow=function(e){return c(e)},a.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==a.prototype},a.compare=function(e,t){if(N(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),N(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a.alloc(0);if(void 0===t)for(n=0,t=0;n<e.length;++n)t+=e[n].length;var n,r=a.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var s=e[n];if(N(s,Uint8Array)&&(s=a.from(s)),!a.isBuffer(s))throw TypeError('"list" argument must be an Array of Buffers');s.copy(r,i),i+=s.length}return r},a.byteLength=f,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?v(this,0,e):p.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===a.compare(this,e)},a.prototype.inspect=function(){var e="",n=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(e+=" ... "),"<Buffer "+e+">"},s&&(a.prototype[s]=a.prototype.inspect),a.prototype.compare=function(e,t,n,r,i){if(N(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return -1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;for(var s=i-r,o=n-t,l=Math.min(s,o),u=this.slice(r,i),c=e.slice(t,n),h=0;h<l;++h)if(u[h]!==c[h]){s=u[h],o=c[h];break}return s<o?-1:o<s?1:0},a.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n)},a.prototype.indexOf=function(e,t,n){return m(this,e,t,n,!0)},a.prototype.lastIndexOf=function(e,t,n){return m(this,e,t,n,!1)},a.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,s,o,a,l,u,c,h,d,f,p,g,m=this.length-t;if((void 0===n||n>m)&&(n=m),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var y=!1;;)switch(r){case"hex":return function(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var s=t.length;r>s/2&&(r=s/2);for(var o=0;o<r;++o){var a=parseInt(t.substr(2*o,2),16);if(a!=a)break;e[n+o]=a}return o}(this,e,t,n);case"utf8":case"utf-8":return l=t,u=n,k(C(e,this.length-l),this,l,u);case"ascii":return c=t,h=n,k(S(e),this,c,h);case"latin1":case"binary":return i=this,s=e,o=t,a=n,k(S(s),i,o,a);case"base64":return d=t,f=n,k(A(e),this,d,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return p=t,g=n,k(function(e,t){for(var n,r,i=[],s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i.push(n%256),i.push(r);return i}(e,this.length-p),this,p,g);default:if(y)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),y=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},a.prototype.slice=function(e,t){var n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,a.prototype),r},a.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||w(e,t,this.length);for(var r=this[e],i=1,s=0;++s<t&&(i*=256);)r+=this[e+s]*i;return r},a.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||w(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},a.prototype.readUInt8=function(e,t){return e>>>=0,t||w(e,1,this.length),this[e]},a.prototype.readUInt16LE=function(e,t){return e>>>=0,t||w(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUInt16BE=function(e,t){return e>>>=0,t||w(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUInt32LE=function(e,t){return e>>>=0,t||w(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUInt32BE=function(e,t){return e>>>=0,t||w(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||w(e,t,this.length);for(var r=this[e],i=1,s=0;++s<t&&(i*=256);)r+=this[e+s]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},a.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||w(e,t,this.length);for(var r=t,i=1,s=this[e+--r];r>0&&(i*=256);)s+=this[e+--r]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return(e>>>=0,t||w(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},a.prototype.readInt16LE=function(e,t){e>>>=0,t||w(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},a.prototype.readInt16BE=function(e,t){e>>>=0,t||w(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},a.prototype.readInt32LE=function(e,t){return e>>>=0,t||w(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e>>>=0,t||w(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e>>>=0,t||w(e,4,this.length),i.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e>>>=0,t||w(e,4,this.length),i.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e>>>=0,t||w(e,8,this.length),i.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e>>>=0,t||w(e,8,this.length),i.read(this,e,!1,52,8)},a.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){var i=Math.pow(2,8*n)-1;_(this,e,t,n,i,0)}var s=1,o=0;for(this[t]=255&e;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+n},a.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){var i=Math.pow(2,8*n)-1;_(this,e,t,n,i,0)}var s=n-1,o=1;for(this[t+s]=255&e;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+n},a.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||_(this,e,t,1,255,0),this[t]=255&e,t+1},a.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||_(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||_(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||_(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},a.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||_(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);_(this,e,t,n,i-1,-i)}var s=0,o=1,a=0;for(this[t]=255&e;++s<n&&(o*=256);)e<0&&0===a&&0!==this[t+s-1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n},a.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);_(this,e,t,n,i-1,-i)}var s=n-1,o=1,a=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)e<0&&0===a&&0!==this[t+s+1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n},a.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||_(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||_(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||_(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||_(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||_(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeFloatLE=function(e,t,n){return E(this,e,t,!0,n)},a.prototype.writeFloatBE=function(e,t,n){return E(this,e,t,!1,n)},a.prototype.writeDoubleLE=function(e,t,n){return I(this,e,t,!0,n)},a.prototype.writeDoubleBE=function(e,t,n){return I(this,e,t,!1,n)},a.prototype.copy=function(e,t,n,r){if(!a.isBuffer(e))throw TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,n,r);else if(this===e&&n<t&&t<r)for(var s=i-1;s>=0;--s)e[s+t]=this[s+n];else Uint8Array.prototype.set.call(e,this.subarray(n,r),t);return i},a.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!a.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===e.length){var i,s=e.charCodeAt(0);("utf8"===r&&s<128||"latin1"===r)&&(e=s)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError("Out of range index");if(n<=t)return this;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{var o=a.isBuffer(e)?e:a.from(e,r),l=o.length;if(0===l)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=o[i%l]}return this};var T=/[^+/0-9A-Za-z-_]/g;function C(e,t){t=t||1/0;for(var n,r=e.length,i=null,s=[],o=0;o<r;++o){if((n=e.charCodeAt(o))>55295&&n<57344){if(!i){if(n>56319||o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return s}function S(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}function A(e){return r.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(T,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function k(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length)&&!(i>=e.length);++i)t[i+n]=e[i];return i}function N(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var R=function(){for(var e="0123456789abcdef",t=Array(256),n=0;n<16;++n)for(var r=16*n,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t}()},783:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,n,r,i){var s,o,a=8*i-r-1,l=(1<<a)-1,u=l>>1,c=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-c)-1,f>>=-c,c+=a;c>0;s=256*s+e[t+h],h+=d,c-=8);for(o=s&(1<<-c)-1,s>>=-c,c+=r;c>0;o=256*o+e[t+h],h+=d,c-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=u}return(f?-1:1)*o*Math.pow(2,s-r)},t.write=function(e,t,n,r,i,s){var o,a,l,u=8*s-i-1,c=(1<<u)-1,h=c>>1,d=23===i?5960464477539062e-23:0,f=r?0:s-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(o++,l/=2),o+h>=c?(a=0,o=c):o+h>=1?(a=(t*l-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[n+f]=255&o,f+=p,o/=256,u-=8);e[n+f-p]|=128*g}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,r),o=!1}finally{o&&delete n[e]}return s.exports}r.ab="//";var i=r(72);e.exports=i}()},8037:function(e){e.exports={loader:"Loader_loader__7ZWW3",spinner:"Loader_spinner__MYaai",spin:"Loader_spin__nOAL5"}},2130:function(){},2877:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],u=!1,c=-1;function h(){u&&r&&(u=!1,r.length?l=r.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(r=l,l=[];++c<t;)r&&r[c].run();c=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},o=!0;try{t[e](s,s.exports,r),o=!1}finally{o&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},1163:function(e,t,n){e.exports=n(9090)},6747:function(e,t,n){"use strict";n.d(t,{QueryClient:function(){return r.S}});var r=n(1705),i=n(6755);n.o(i,"QueryClientProvider")&&n.d(t,{QueryClientProvider:function(){return i.QueryClientProvider}})},1909:function(e,t,n){"use strict";n.d(t,{E:function(){return s},j:function(){return i}});var r=console;function i(){return r}function s(e){r=e}},101:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(2288),i=new(function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(e){e()},this.batchNotifyFn=function(e){e()}}var t=e.prototype;return t.batch=function(e){var t;this.transactions++;try{t=e()}finally{this.transactions--,this.transactions||this.flush()}return t},t.schedule=function(e){var t=this;this.transactions?this.queue.push(e):(0,r.A4)(function(){t.notifyFn(e)})},t.batchCalls=function(e){var t=this;return function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];t.schedule(function(){e.apply(void 0,r)})}},t.flush=function(){var e=this,t=this.queue;this.queue=[],t.length&&(0,r.A4)(function(){e.batchNotifyFn(function(){t.forEach(function(t){e.notifyFn(t)})})})},t.setNotifyFunction=function(e){this.notifyFn=e},t.setBatchNotifyFunction=function(e){this.batchNotifyFn=e},e}())},1705:function(e,t,n){"use strict";n.d(t,{S:function(){return E}});var r=n(7462),i=n(2288);function s(e,t){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,s(e,t)}var a=n(101),l=n(1909),u=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(e){var t=this,n=e||function(){};return this.listeners.push(n),this.onSubscribe(),function(){t.listeners=t.listeners.filter(function(e){return e!==n}),t.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),c=new(function(e){function t(){var t;return(t=e.call(this)||this).setup=function(e){var t;if(!i.sk&&(null==(t=window)?void 0:t.addEventListener)){var n=function(){return e()};return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),function(){window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}},t}o(t,e);var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}},n.setEventListener=function(e){var t,n=this;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(function(e){"boolean"==typeof e?n.setFocused(e):n.onFocus()})},n.setFocused=function(e){this.focused=e,e&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(e){e()})},n.isFocused=function(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)},t}(u)),h=new(function(e){function t(){var t;return(t=e.call(this)||this).setup=function(e){var t;if(!i.sk&&(null==(t=window)?void 0:t.addEventListener)){var n=function(){return e()};return window.addEventListener("online",n,!1),window.addEventListener("offline",n,!1),function(){window.removeEventListener("online",n),window.removeEventListener("offline",n)}}},t}o(t,e);var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}},n.setEventListener=function(e){var t,n=this;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(function(e){"boolean"==typeof e?n.setOnline(e):n.onOnline()})},n.setOnline=function(e){this.online=e,e&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(e){e()})},n.isOnline=function(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine},t}(u));function d(e){return Math.min(1e3*Math.pow(2,e),3e4)}function f(e){return"function"==typeof(null==e?void 0:e.cancel)}var p=function(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent};function g(e){return e instanceof p}var m=function(e){var t,n,r,s,o=this,a=!1;this.abort=e.abort,this.cancel=function(e){return null==t?void 0:t(e)},this.cancelRetry=function(){a=!0},this.continueRetry=function(){a=!1},this.continue=function(){return null==n?void 0:n()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(e,t){r=e,s=t});var l=function(t){o.isResolved||(o.isResolved=!0,null==e.onSuccess||e.onSuccess(t),null==n||n(),r(t))},u=function(t){o.isResolved||(o.isResolved=!0,null==e.onError||e.onError(t),null==n||n(),s(t))};!function r(){var s;if(!o.isResolved){try{s=e.fn()}catch(e){s=Promise.reject(e)}t=function(e){if(!o.isResolved&&(u(new p(e)),null==o.abort||o.abort(),f(s)))try{s.cancel()}catch(e){}},o.isTransportCancelable=f(s),Promise.resolve(s).then(l).catch(function(t){if(!o.isResolved){var s,l,f=null!=(s=e.retry)?s:3,p=null!=(l=e.retryDelay)?l:d,g="function"==typeof p?p(o.failureCount,t):p,m=!0===f||"number"==typeof f&&o.failureCount<f||"function"==typeof f&&f(o.failureCount,t);if(a||!m){u(t);return}o.failureCount++,null==e.onFail||e.onFail(o.failureCount,t),(0,i.Gh)(g).then(function(){if(!c.isFocused()||!h.isOnline())return new Promise(function(t){n=t,o.isPaused=!0,null==e.onPause||e.onPause()}).then(function(){n=void 0,o.isPaused=!1,null==e.onContinue||e.onContinue()})}).then(function(){a?u(t):r()})}})}}()},y=function(){function e(e){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=e.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(e){var t;this.options=(0,r.Z)({},this.defaultOptions,e),this.meta=null==e?void 0:e.meta,this.cacheTime=Math.max(this.cacheTime||0,null!=(t=this.options.cacheTime)?t:3e5)},t.setDefaultOptions=function(e){this.defaultOptions=e},t.scheduleGc=function(){var e=this;this.clearGcTimeout(),(0,i.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){e.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){!this.observers.length&&(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(e,t){var n,r,s=this.state.data,o=(0,i.SE)(e,s);return(null==(n=(r=this.options).isDataEqual)?void 0:n.call(r,s,o))?o=s:!1!==this.options.structuralSharing&&(o=(0,i.Q$)(s,o)),this.dispatch({data:o,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt}),o},t.setState=function(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})},t.cancel=function(e){var t,n=this.promise;return null==(t=this.retryer)||t.cancel(e),n?n.then(i.ZT).catch(i.ZT):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(e){return!1!==e.options.enabled})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(e){return e.getCurrentResult().isStale})},t.isStaleByTime=function(e){return void 0===e&&(e=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,i.Kp)(this.state.dataUpdatedAt,e)},t.onFocus=function(){var e,t=this.observers.find(function(e){return e.shouldFetchOnWindowFocus()});t&&t.refetch(),null==(e=this.retryer)||e.continue()},t.onOnline=function(){var e,t=this.observers.find(function(e){return e.shouldFetchOnReconnect()});t&&t.refetch(),null==(e=this.retryer)||e.continue()},t.addObserver=function(e){-1===this.observers.indexOf(e)&&(this.observers.push(e),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))},t.removeObserver=function(e){-1!==this.observers.indexOf(e)&&(this.observers=this.observers.filter(function(t){return t!==e}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:e}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(e,t){var n,r,s,o,a,u,c=this;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(null==t?void 0:t.cancelRefetch))this.cancel({silent:!0});else if(this.promise)return null==(n=this.retryer)||n.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){var h=this.observers.find(function(e){return e.options.queryFn});h&&this.setOptions(h.options)}var d=(0,i.mc)(this.queryKey),f=(0,i.G9)(),p={queryKey:d,pageParam:void 0,meta:this.meta};Object.defineProperty(p,"signal",{enumerable:!0,get:function(){if(f)return c.abortSignalConsumed=!0,f.signal}});var y={fetchOptions:t,options:this.options,queryKey:d,state:this.state,fetchFn:function(){return c.options.queryFn?(c.abortSignalConsumed=!1,c.options.queryFn(p)):Promise.reject("Missing queryFn")},meta:this.meta};return(null==(o=this.options.behavior)?void 0:o.onFetch)&&(null==(r=this.options.behavior)||r.onFetch(y)),this.revertState=this.state,this.state.isFetching&&this.state.fetchMeta===(null==(a=y.fetchOptions)?void 0:a.meta)||this.dispatch({type:"fetch",meta:null==(s=y.fetchOptions)?void 0:s.meta}),this.retryer=new m({fn:y.fetchFn,abort:null==f?void 0:null==(u=f.abort)?void 0:u.bind(f),onSuccess:function(e){c.setData(e),null==c.cache.config.onSuccess||c.cache.config.onSuccess(e,c),0===c.cacheTime&&c.optionalRemove()},onError:function(e){g(e)&&e.silent||c.dispatch({type:"error",error:e}),g(e)||(null==c.cache.config.onError||c.cache.config.onError(e,c),(0,l.j)().error(e)),0===c.cacheTime&&c.optionalRemove()},onFail:function(){c.dispatch({type:"failed"})},onPause:function(){c.dispatch({type:"pause"})},onContinue:function(){c.dispatch({type:"continue"})},retry:y.options.retry,retryDelay:y.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(e){var t=this;this.state=this.reducer(this.state,e),a.V.batch(function(){t.observers.forEach(function(t){t.onQueryUpdate(e)}),t.cache.notify({query:t,type:"queryUpdated",action:e})})},t.getDefaultState=function(e){var t="function"==typeof e.initialData?e.initialData():e.initialData,n=void 0!==e.initialData?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0,r=void 0!==t;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?null!=n?n:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:r?"success":"idle"}},t.reducer=function(e,t){var n,i;switch(t.type){case"failed":return(0,r.Z)({},e,{fetchFailureCount:e.fetchFailureCount+1});case"pause":return(0,r.Z)({},e,{isPaused:!0});case"continue":return(0,r.Z)({},e,{isPaused:!1});case"fetch":return(0,r.Z)({},e,{fetchFailureCount:0,fetchMeta:null!=(n=t.meta)?n:null,isFetching:!0,isPaused:!1},!e.dataUpdatedAt&&{error:null,status:"loading"});case"success":return(0,r.Z)({},e,{data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!=(i=t.dataUpdatedAt)?i:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var s=t.error;if(g(s)&&s.revert&&this.revertState)return(0,r.Z)({},this.revertState);return(0,r.Z)({},e,{error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return(0,r.Z)({},e,{isInvalidated:!0});case"setState":return(0,r.Z)({},e,t.state);default:return e}},e}(),v=function(e){function t(t){var n;return(n=e.call(this)||this).config=t||{},n.queries=[],n.queriesMap={},n}o(t,e);var n=t.prototype;return n.build=function(e,t,n){var r,s=t.queryKey,o=null!=(r=t.queryHash)?r:(0,i.Rm)(s,t),a=this.get(o);return a||(a=new y({cache:this,queryKey:s,queryHash:o,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(s),meta:t.meta}),this.add(a)),a},n.add=function(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"queryAdded",query:e}))},n.remove=function(e){var t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(function(t){return t!==e}),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"queryRemoved",query:e}))},n.clear=function(){var e=this;a.V.batch(function(){e.queries.forEach(function(t){e.remove(t)})})},n.get=function(e){return this.queriesMap[e]},n.getAll=function(){return this.queries},n.find=function(e,t){var n=(0,i.I6)(e,t)[0];return void 0===n.exact&&(n.exact=!0),this.queries.find(function(e){return(0,i._x)(n,e)})},n.findAll=function(e,t){var n=(0,i.I6)(e,t)[0];return Object.keys(n).length>0?this.queries.filter(function(e){return(0,i._x)(n,e)}):this.queries},n.notify=function(e){var t=this;a.V.batch(function(){t.listeners.forEach(function(t){t(e)})})},n.onFocus=function(){var e=this;a.V.batch(function(){e.queries.forEach(function(e){e.onFocus()})})},n.onOnline=function(){var e=this;a.V.batch(function(){e.queries.forEach(function(e){e.onOnline()})})},t}(u),w=function(){function e(e){this.options=(0,r.Z)({},e.defaultOptions,e.options),this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.observers=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0},this.meta=e.meta}var t=e.prototype;return t.setState=function(e){this.dispatch({type:"setState",state:e})},t.addObserver=function(e){-1===this.observers.indexOf(e)&&this.observers.push(e)},t.removeObserver=function(e){this.observers=this.observers.filter(function(t){return t!==e})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(i.ZT).catch(i.ZT)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var e,t=this,n="loading"===this.state.status,r=Promise.resolve();return n||(this.dispatch({type:"loading",variables:this.options.variables}),r=r.then(function(){null==t.mutationCache.config.onMutate||t.mutationCache.config.onMutate(t.state.variables,t)}).then(function(){return null==t.options.onMutate?void 0:t.options.onMutate(t.state.variables)}).then(function(e){e!==t.state.context&&t.dispatch({type:"loading",context:e,variables:t.state.variables})})),r.then(function(){return t.executeMutation()}).then(function(n){e=n,null==t.mutationCache.config.onSuccess||t.mutationCache.config.onSuccess(e,t.state.variables,t.state.context,t)}).then(function(){return null==t.options.onSuccess?void 0:t.options.onSuccess(e,t.state.variables,t.state.context)}).then(function(){return null==t.options.onSettled?void 0:t.options.onSettled(e,null,t.state.variables,t.state.context)}).then(function(){return t.dispatch({type:"success",data:e}),e}).catch(function(e){return null==t.mutationCache.config.onError||t.mutationCache.config.onError(e,t.state.variables,t.state.context,t),(0,l.j)().error(e),Promise.resolve().then(function(){return null==t.options.onError?void 0:t.options.onError(e,t.state.variables,t.state.context)}).then(function(){return null==t.options.onSettled?void 0:t.options.onSettled(void 0,e,t.state.variables,t.state.context)}).then(function(){throw t.dispatch({type:"error",error:e}),e})})},t.executeMutation=function(){var e,t=this;return this.retryer=new m({fn:function(){return t.options.mutationFn?t.options.mutationFn(t.state.variables):Promise.reject("No mutationFn found")},onFail:function(){t.dispatch({type:"failed"})},onPause:function(){t.dispatch({type:"pause"})},onContinue:function(){t.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(e){var t=this;this.state=function(e,t){switch(t.type){case"failed":return(0,r.Z)({},e,{failureCount:e.failureCount+1});case"pause":return(0,r.Z)({},e,{isPaused:!0});case"continue":return(0,r.Z)({},e,{isPaused:!1});case"loading":return(0,r.Z)({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return(0,r.Z)({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return(0,r.Z)({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return(0,r.Z)({},e,t.state);default:return e}}(this.state,e),a.V.batch(function(){t.observers.forEach(function(t){t.onMutationUpdate(e)}),t.mutationCache.notify(t)})},e}(),_=function(e){function t(t){var n;return(n=e.call(this)||this).config=t||{},n.mutations=[],n.mutationId=0,n}o(t,e);var n=t.prototype;return n.build=function(e,t,n){var r=new w({mutationCache:this,mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:n,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0,meta:t.meta});return this.add(r),r},n.add=function(e){this.mutations.push(e),this.notify(e)},n.remove=function(e){this.mutations=this.mutations.filter(function(t){return t!==e}),e.cancel(),this.notify(e)},n.clear=function(){var e=this;a.V.batch(function(){e.mutations.forEach(function(t){e.remove(t)})})},n.getAll=function(){return this.mutations},n.find=function(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(function(t){return(0,i.X7)(e,t)})},n.findAll=function(e){return this.mutations.filter(function(t){return(0,i.X7)(e,t)})},n.notify=function(e){var t=this;a.V.batch(function(){t.listeners.forEach(function(t){t(e)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var e=this.mutations.filter(function(e){return e.state.isPaused});return a.V.batch(function(){return e.reduce(function(e,t){return e.then(function(){return t.continue().catch(i.ZT)})},Promise.resolve())})},t}(u);function b(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}var E=function(){function e(e){void 0===e&&(e={}),this.queryCache=e.queryCache||new v,this.mutationCache=e.mutationCache||new _,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var e=this;this.unsubscribeFocus=c.subscribe(function(){c.isFocused()&&h.isOnline()&&(e.mutationCache.onFocus(),e.queryCache.onFocus())}),this.unsubscribeOnline=h.subscribe(function(){c.isFocused()&&h.isOnline()&&(e.mutationCache.onOnline(),e.queryCache.onOnline())})},t.unmount=function(){var e,t;null==(e=this.unsubscribeFocus)||e.call(this),null==(t=this.unsubscribeOnline)||t.call(this)},t.isFetching=function(e,t){var n=(0,i.I6)(e,t)[0];return n.fetching=!0,this.queryCache.findAll(n).length},t.isMutating=function(e){return this.mutationCache.findAll((0,r.Z)({},e,{fetching:!0})).length},t.getQueryData=function(e,t){var n;return null==(n=this.queryCache.find(e,t))?void 0:n.state.data},t.getQueriesData=function(e){return this.getQueryCache().findAll(e).map(function(e){return[e.queryKey,e.state.data]})},t.setQueryData=function(e,t,n){var r=(0,i._v)(e),s=this.defaultQueryOptions(r);return this.queryCache.build(this,s).setData(t,n)},t.setQueriesData=function(e,t,n){var r=this;return a.V.batch(function(){return r.getQueryCache().findAll(e).map(function(e){var i=e.queryKey;return[i,r.setQueryData(i,t,n)]})})},t.getQueryState=function(e,t){var n;return null==(n=this.queryCache.find(e,t))?void 0:n.state},t.removeQueries=function(e,t){var n=(0,i.I6)(e,t)[0],r=this.queryCache;a.V.batch(function(){r.findAll(n).forEach(function(e){r.remove(e)})})},t.resetQueries=function(e,t,n){var s=this,o=(0,i.I6)(e,t,n),l=o[0],u=o[1],c=this.queryCache,h=(0,r.Z)({},l,{active:!0});return a.V.batch(function(){return c.findAll(l).forEach(function(e){e.reset()}),s.refetchQueries(h,u)})},t.cancelQueries=function(e,t,n){var r=this,s=(0,i.I6)(e,t,n),o=s[0],l=s[1],u=void 0===l?{}:l;return void 0===u.revert&&(u.revert=!0),Promise.all(a.V.batch(function(){return r.queryCache.findAll(o).map(function(e){return e.cancel(u)})})).then(i.ZT).catch(i.ZT)},t.invalidateQueries=function(e,t,n){var s,o,l,u=this,c=(0,i.I6)(e,t,n),h=c[0],d=c[1],f=(0,r.Z)({},h,{active:null==(s=null!=(o=h.refetchActive)?o:h.active)||s,inactive:null!=(l=h.refetchInactive)&&l});return a.V.batch(function(){return u.queryCache.findAll(h).forEach(function(e){e.invalidate()}),u.refetchQueries(f,d)})},t.refetchQueries=function(e,t,n){var s=this,o=(0,i.I6)(e,t,n),l=o[0],u=o[1],c=Promise.all(a.V.batch(function(){return s.queryCache.findAll(l).map(function(e){return e.fetch(void 0,(0,r.Z)({},u,{meta:{refetchPage:null==l?void 0:l.refetchPage}}))})})).then(i.ZT);return(null==u?void 0:u.throwOnError)||(c=c.catch(i.ZT)),c},t.fetchQuery=function(e,t,n){var r=(0,i._v)(e,t,n),s=this.defaultQueryOptions(r);void 0===s.retry&&(s.retry=!1);var o=this.queryCache.build(this,s);return o.isStaleByTime(s.staleTime)?o.fetch(s):Promise.resolve(o.state.data)},t.prefetchQuery=function(e,t,n){return this.fetchQuery(e,t,n).then(i.ZT).catch(i.ZT)},t.fetchInfiniteQuery=function(e,t,n){var r=(0,i._v)(e,t,n);return r.behavior={onFetch:function(e){e.fetchFn=function(){var t,n,r,s,o,a,l,u=null==(t=e.fetchOptions)?void 0:null==(n=t.meta)?void 0:n.refetchPage,c=null==(r=e.fetchOptions)?void 0:null==(s=r.meta)?void 0:s.fetchMore,h=null==c?void 0:c.pageParam,d=(null==c?void 0:c.direction)==="forward",p=(null==c?void 0:c.direction)==="backward",g=(null==(o=e.state.data)?void 0:o.pages)||[],m=(null==(a=e.state.data)?void 0:a.pageParams)||[],y=(0,i.G9)(),v=null==y?void 0:y.signal,w=m,_=!1,E=e.options.queryFn||function(){return Promise.reject("Missing queryFn")},I=function(e,t,n,r){return w=r?[t].concat(w):[].concat(w,[t]),r?[n].concat(e):[].concat(e,[n])},T=function(t,n,r,i){if(_)return Promise.reject("Cancelled");if(void 0===r&&!n&&t.length)return Promise.resolve(t);var s=E({queryKey:e.queryKey,signal:v,pageParam:r,meta:e.meta}),o=Promise.resolve(s).then(function(e){return I(t,r,e,i)});return f(s)&&(o.cancel=s.cancel),o};if(g.length){if(d){var C=void 0!==h,S=C?h:b(e.options,g);l=T(g,C,S)}else if(p){var A,k=void 0!==h,N=k?h:null==(A=e.options).getPreviousPageParam?void 0:A.getPreviousPageParam(g[0],g);l=T(g,k,N,!0)}else!function(){w=[];var t=void 0===e.options.getNextPageParam;l=!u||!g[0]||u(g[0],0,g)?T([],t,m[0]):Promise.resolve(I([],m[0],g[0]));for(var n=function(n){l=l.then(function(r){if(!u||!g[n]||u(g[n],n,g)){var i=t?m[n]:b(e.options,r);return T(r,t,i)}return Promise.resolve(I(r,m[n],g[n]))})},r=1;r<g.length;r++)n(r)}()}else l=T([]);var R=l.then(function(e){return{pages:e,pageParams:w}});return R.cancel=function(){_=!0,null==y||y.abort(),f(l)&&l.cancel()},R}}},this.fetchQuery(r)},t.prefetchInfiniteQuery=function(e,t,n){return this.fetchInfiniteQuery(e,t,n).then(i.ZT).catch(i.ZT)},t.cancelMutations=function(){var e=this;return Promise.all(a.V.batch(function(){return e.mutationCache.getAll().map(function(e){return e.cancel()})})).then(i.ZT).catch(i.ZT)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(e){return this.mutationCache.build(this,e).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(e){this.defaultOptions=e},t.setQueryDefaults=function(e,t){var n=this.queryDefaults.find(function(t){return(0,i.yF)(e)===(0,i.yF)(t.queryKey)});n?n.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})},t.getQueryDefaults=function(e){var t;return e?null==(t=this.queryDefaults.find(function(t){return(0,i.to)(e,t.queryKey)}))?void 0:t.defaultOptions:void 0},t.setMutationDefaults=function(e,t){var n=this.mutationDefaults.find(function(t){return(0,i.yF)(e)===(0,i.yF)(t.mutationKey)});n?n.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})},t.getMutationDefaults=function(e){var t;return e?null==(t=this.mutationDefaults.find(function(t){return(0,i.to)(e,t.mutationKey)}))?void 0:t.defaultOptions:void 0},t.defaultQueryOptions=function(e){if(null==e?void 0:e._defaulted)return e;var t=(0,r.Z)({},this.defaultOptions.queries,this.getQueryDefaults(null==e?void 0:e.queryKey),e,{_defaulted:!0});return!t.queryHash&&t.queryKey&&(t.queryHash=(0,i.Rm)(t.queryKey,t)),t},t.defaultQueryObserverOptions=function(e){return this.defaultQueryOptions(e)},t.defaultMutationOptions=function(e){return(null==e?void 0:e._defaulted)?e:(0,r.Z)({},this.defaultOptions.mutations,this.getMutationDefaults(null==e?void 0:e.mutationKey),e,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}()},6755:function(){},2288:function(e,t,n){"use strict";n.d(t,{A4:function(){return b},G9:function(){return E},Gh:function(){return _},I6:function(){return h},Kp:function(){return u},PN:function(){return a},Q$:function(){return function e(t,n){if(t===n)return t;var r=Array.isArray(t)&&Array.isArray(n);if(r||y(t)&&y(n)){for(var i=r?t.length:Object.keys(t).length,s=r?n:Object.keys(n),o=s.length,a=r?[]:{},l=0,u=0;u<o;u++){var c=r?u:s[u];a[c]=e(t[c],n[c]),a[c]===t[c]&&l++}return i===o&&l===i?t:a}return n}},Rm:function(){return p},SE:function(){return o},X7:function(){return f},ZT:function(){return s},_v:function(){return c},_x:function(){return d},mc:function(){return l},sk:function(){return i},to:function(){return m},yF:function(){return g}});var r=n(7462),i="undefined"==typeof window;function s(){}function o(e,t){return"function"==typeof e?e(t):e}function a(e){return"number"==typeof e&&e>=0&&e!==1/0}function l(e){return Array.isArray(e)?e:[e]}function u(e,t){return Math.max(e+(t||0)-Date.now(),0)}function c(e,t,n){return w(e)?"function"==typeof t?(0,r.Z)({},n,{queryKey:e,queryFn:t}):(0,r.Z)({},t,{queryKey:e}):e}function h(e,t,n){return w(e)?[(0,r.Z)({},t,{queryKey:e}),n]:[e||{},t]}function d(e,t){var n=e.active,r=e.exact,i=e.fetching,s=e.inactive,o=e.predicate,a=e.queryKey,l=e.stale;if(w(a)){if(r){if(t.queryHash!==p(a,t.options))return!1}else if(!m(t.queryKey,a))return!1}var u=!0===n&&!0===s||null==n&&null==s?"all":!1===n&&!1===s?"none":(null!=n?n:!s)?"active":"inactive";if("none"===u)return!1;if("all"!==u){var c=t.isActive();if("active"===u&&!c||"inactive"===u&&c)return!1}return("boolean"!=typeof l||t.isStale()===l)&&("boolean"!=typeof i||t.isFetching()===i)&&(!o||!!o(t))}function f(e,t){var n=e.exact,r=e.fetching,i=e.predicate,s=e.mutationKey;if(w(s)){if(!t.options.mutationKey)return!1;if(n){if(g(t.options.mutationKey)!==g(s))return!1}else if(!m(t.options.mutationKey,s))return!1}return("boolean"!=typeof r||"loading"===t.state.status===r)&&(!i||!!i(t))}function p(e,t){return((null==t?void 0:t.queryKeyHashFn)||g)(e)}function g(e){return JSON.stringify(l(e),function(e,t){return y(t)?Object.keys(t).sort().reduce(function(e,n){return e[n]=t[n],e},{}):t})}function m(e,t){return function e(t,n){return t===n||typeof t==typeof n&&!!t&&!!n&&"object"==typeof t&&"object"==typeof n&&!Object.keys(n).some(function(r){return!e(t[r],n[r])})}(l(e),l(t))}function y(e){if(!v(e))return!1;var t=e.constructor;if(void 0===t)return!0;var n=t.prototype;return!!(v(n)&&n.hasOwnProperty("isPrototypeOf"))}function v(e){return"[object Object]"===Object.prototype.toString.call(e)}function w(e){return"string"==typeof e||Array.isArray(e)}function _(e){return new Promise(function(t){setTimeout(t,e)})}function b(e){Promise.resolve().then(e).catch(function(e){return setTimeout(function(){throw e})})}function E(){if("function"==typeof AbortController)return new AbortController}},8767:function(e,t,n){"use strict";n.d(t,{QueryClient:function(){return r.QueryClient},QueryClientProvider:function(){return i.QueryClientProvider}});var r=n(6747);n.o(r,"QueryClientProvider")&&n.d(t,{QueryClientProvider:function(){return r.QueryClientProvider}});var i=n(1373)},1373:function(e,t,n){"use strict";n.d(t,{QueryClientProvider:function(){return c}});var r=n(101),i=n(3935).unstable_batchedUpdates;r.V.setBatchNotifyFunction(i);var s=n(1909),o=console;(0,s.E)(o);var a=n(7294),l=a.createContext(void 0),u=a.createContext(!1),c=function(e){var t=e.client,n=e.contextSharing,r=void 0!==n&&n,i=e.children;a.useEffect(function(){return t.mount(),function(){t.unmount()}},[t]);var s=r&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=l),window.ReactQueryClientContext):l;return a.createElement(u.Provider,{value:r},a.createElement(s.Provider,{value:t},i))}},7462:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},5816:function(e,t,n){"use strict";let r,i,s;n.d(t,{Jn:function(){return U},qX:function(){return D},rh:function(){return L},Xd:function(){return P},Mq:function(){return V},ZF:function(){return F},KN:function(){return q}});var o=n(8463),a=n(3333),l=n(4444);let u=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(m(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),m(c.get(this))}:function(...e){return m(t.apply(y(this),e))}:function(e,...n){let r=t.call(y(this),e,...n);return d.set(r,e.sort?e.sort():[e]),m(r)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});h.set(e,t)}(t),u(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return n!==e&&(f.set(e,n),p.set(n,e)),n}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],_=new Map;function b(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(_.get(t))return _.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return _.set(t,s),s}g={...s=g,get:(e,t,n)=>b(e,t)||s.get(e,t,n),has:(e,t)=>!!b(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let I="@firebase/app",T="0.10.3",C=new a.Yd("@firebase/app"),S="[DEFAULT]",A={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},k=new Map,N=new Map,R=new Map;function O(e,t){try{e.container.addComponent(t)}catch(n){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function P(e){let t=e.name;if(R.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(R.set(t,e),k.values()))O(n,e);for(let t of N.values())O(t,e);return!0}function D(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function L(e){return void 0!==e.settings}let x=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U="10.12.0";function F(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:S,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw x.create("bad-app-name",{appName:String(i)});if(n||(n=(0,l.aH)()),!n)throw x.create("no-options");let s=k.get(i);if(s){if((0,l.vZ)(n,s.options)&&(0,l.vZ)(r,s.config))return s;throw x.create("duplicate-app",{appName:i})}let a=new o.H0(i);for(let e of R.values())a.addComponent(e);let u=new M(n,r,a);return k.set(i,u),u}function V(e=S){let t=k.get(e);if(!t&&e===S&&(0,l.aH)())return F();if(!t)throw x.create("no-app",{appName:e});return t}function q(e,t,n){var r;let i=null!==(r=A[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),C.warn(e.join(" "));return}P(new o.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let B="firebase-heartbeat-store",j=null;function $(){return j||(j=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=m(o);return r&&o.addEventListener("upgradeneeded",e=>{r(m(o.result),e.oldVersion,e.newVersion,m(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(B)}catch(e){console.warn(e)}}}).catch(e=>{throw x.create("idb-open",{originalErrorMessage:e.message})})),j}async function z(e){try{let t=(await $()).transaction(B),n=await t.objectStore(B).get(H(e));return await t.done,n}catch(e){if(e instanceof l.ZR)C.warn(e.message);else{let t=x.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});C.warn(t.message)}}}async function K(e,t){try{let n=(await $()).transaction(B,"readwrite"),r=n.objectStore(B);await r.put(t,H(e)),await n.done}catch(e){if(e instanceof l.ZR)C.warn(e.message);else{let t=x.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});C.warn(t.message)}}}function H(e){return`${e.name}!${e.options.appId}`}class G{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new W(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Q();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=Q(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),X(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),X(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,l.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Q(){return new Date().toISOString().substring(0,10)}class W{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await z(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return K(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return K(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function X(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}P(new o.wA("platform-logger",e=>new E(e),"PRIVATE")),P(new o.wA("heartbeat",e=>new G(e),"PRIVATE")),q(I,T,""),q(I,T,"esm2017"),q("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return a},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return c},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},3299:function(e,t,n){"use strict";n.d(t,{w9:function(){return eQ},_O:function(){return eY},hJ:function(){return eJ},Xb:function(){return tn},v0:function(){return nm},Aj:function(){return tu},aF:function(){return te},w$:function(){return ti},e5:function(){return tr},rh:function(){return tq},w7:function(){return tc},gQ:function(){return ta},ck:function(){return to}});var r,i=n(5816),s=n(4444),o=n(3333);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}"function"==typeof SuppressedError&&SuppressedError;var l=n(8463);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new s.LL("auth","Firebase",u()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o.in.ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw y(e,...t)}function p(e,...t){return y(e,...t)}function g(e,t,n){let r=Object.assign(Object.assign({},u()),{[t]:n});return new s.LL("auth","Firebase",r).create(t,{appName:e.name})}function m(e){return g(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function w(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function b(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){var n;this.shortDelay=e,this.longDelay=t,n="Short delay should be less than long delay!",t>e||w(n),this.isMobile=(0,s.uI)()||(0,s.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===b()||"https:"===b()||(0,s.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){var n,r;n=e.emulator,r="Emulator should always be set here",n||w(r);let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},S=new E(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function k(e,t,n,r,i={}){return N(e,i,async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});let a=(0,s.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),T.fetch()(O(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))})}async function N(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},C),t);try{let t=new P(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw D(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let[t,n]=(i.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw D(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw D(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw D(e,"user-disabled",s);let o=r[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(n)throw g(e,o,n);f(e,o)}}catch(t){if(t instanceof s.ZR)throw t;f(e,"network-request-failed",{message:String(t)})}}async function R(e,t,n,r,i={}){let s=await k(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function O(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?I(e.config,i):`${e.config.apiScheme}://${i}`}class P{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function D(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=p(e,t,r);return i.customData._tokenResponse=n,i}function L(e){return void 0!==e&&void 0!==e.enterprise}class x{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function M(e,t){return k(e,"GET","/v2/recaptchaConfig",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return k(e,"POST","/v1/accounts:delete",t)}async function F(e,t){return k(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function q(e,t=!1){let n=(0,s.m9)(e),r=await n.getIdToken(t),i=j(r);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");let o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:V(B(i.auth_time)),issuedAtTime:V(B(i.iat)),expirationTime:V(B(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function B(e){return 1e3*Number(e)}function j(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,s.tV)(n);if(!e)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function $(e){let t=j(e);return v(t,"internal-error"),v(void 0!==t.exp,"internal-error"),v(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof s.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e){var t;let n=e.auth,r=await e.getIdToken(),i=await z(e,F(n,{idToken:r}));v(null==i?void 0:i.users.length,n,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?W(s.providerUserInfo):[],a=[...e.providerData.filter(e=>!o.some(t=>t.providerId===e.providerId)),...o],l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new H(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&u})}async function Q(e){let t=(0,s.m9)(e);await G(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function W(e){return e.map(e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t){let n=await N(e,{},async()=>{let n=(0,s.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=O(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Y(e,t){return k(e,"POST","/v2/accounts:revokeToken",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(void 0!==e.idToken,"internal-error"),v(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):$(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){v(0!==e.length,"internal-error");let t=$(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(v(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await X(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new J;return n&&(v("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(v("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(v("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new J,this.toJSON())}_performRefresh(){return w("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e,t){v("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ee{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new H(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await z(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new ee(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await G(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,i.rh)(this.auth.app))return Promise.reject(m(this.auth));let e=await this.getIdToken();return await z(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;let c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:I}=t;v(w&&I,e,"internal-error");let T=J.fromJSON(this.name,I);v("string"==typeof w,e,"internal-error"),Z(c,e.name),Z(h,e.name),v("boolean"==typeof _,e,"internal-error"),v("boolean"==typeof b,e,"internal-error"),Z(d,e.name),Z(f,e.name),Z(p,e.name),Z(g,e.name),Z(m,e.name),Z(y,e.name);let C=new ee({uid:w,auth:e,email:h,emailVerified:_,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(C.providerData=E.map(e=>Object.assign({},e))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){let r=new J;r.updateFromServerResponse(t);let i=new ee({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await G(i),i}static async _fromGetAccountInfoResponse(e,t,n){let r=t.users[0];v(void 0!==r.localId,"internal-error");let i=void 0!==r.providerUserInfo?W(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(null==i?void 0:i.length),o=new J;o.updateFromIdToken(n);let a=new ee({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s});return Object.assign(a,{uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new H(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null==i?void 0:i.length)}),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et=new Map;function en(e){var t,n;t="Expected a class definition",e instanceof Function||w(t);let r=et.get(e);return r?(n="Instance stored in cache mismatched with class",r instanceof e||w(n)):(r=new e,et.set(e,r)),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e,t,n){return`firebase:${e}:${t}:${n}`}er.type="NONE";class es{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=ei(this.userKey,r.apiKey,i),this.fullPersistenceKey=ei("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?ee._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new es(en(er),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||en(er),s=ei(n,e.config.apiKey,e.name),o=null;for(let n of t)try{let t=await n._get(s);if(t){let r=ee._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}let a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new es(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ec(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ea(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ed(t))return"Blackberry";if(ef(t))return"Webos";if(el(t))return"Safari";if((t.includes("chrome/")||eu(t))&&!t.includes("edge/"))return"Chrome";if(eh(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function ea(e=(0,s.z$)()){return/firefox\//i.test(e)}function el(e=(0,s.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function eu(e=(0,s.z$)()){return/crios\//i.test(e)}function ec(e=(0,s.z$)()){return/iemobile/i.test(e)}function eh(e=(0,s.z$)()){return/android/i.test(e)}function ed(e=(0,s.z$)()){return/blackberry/i.test(e)}function ef(e=(0,s.z$)()){return/webos/i.test(e)}function ep(e=(0,s.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function eg(e=(0,s.z$)()){return ep(e)||eh(e)||ef(e)||ed(e)||/windows phone/i.test(e)||ec(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e,t=[]){let n;switch(e){case"Browser":n=eo((0,s.z$)());break;case"Worker":n=`${eo((0,s.z$)())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let r=e(t);n(r)}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(e,t={}){return k(e,"GET","/v2/passwordPolicy",A(e,t))}class ew{constructor(e){var t,n,r,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eE(this),this.idTokenSubscription=new eE(this),this.beforeStateQueue=new ey(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=en(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await F(this,{idToken:e}),n=await ee._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,i.rh)(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let n=await this.assertedPersistence.getCurrentUser(),r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!n||n===i)&&(null==o?void 0:o.user)&&(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await G(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,i.rh)(this.app))return Promise.reject(m(this));let t=e?(0,s.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,i.rh)(this.app)?Promise.reject(m(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,i.rh)(this.app)?Promise.reject(m(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new ew(await ev(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new s.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await Y(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&en(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[en(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{let n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=em(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){h.logLevel<=o.in.WARN&&h.warn(`Auth (${i.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function eb(e){return(0,s.m9)(e)}class eE{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,s.ne)(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eI={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eT(e){return`__${e}${Math.floor(1e6*Math.random())}`}class eC{constructor(e){this.type="recaptcha-enterprise",this.auth=eb(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{M(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0===r.recaptchaKey)n(Error("recaptcha Enterprise site key undefined"));else{let n=new x(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function r(t,n,r){let i=window.grecaptcha;L(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&L(window.grecaptcha))r(n,e,i);else{var s;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=eI.recaptchaEnterpriseScript;0!==t.length&&(t+=n),(s=t,eI.loadJS(s)).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function eS(e,t,n,r=!1){let i;let s=new eC(e);try{i=await s.verify(n)}catch(e){i=await s.verify(n,!0)}let o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function eA(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await eS(e,t,n,"getOobCode"===n);return r(e,i)}});{let i=await eS(e,t,n,"getOobCode"===n);return r(e,i)}}function ek(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eN(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}async function eO(e,t){return k(e,"POST","/v1/accounts:update",t)}async function eP(e,t){return k(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(e,t){return R(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}async function eL(e,t){return k(e,"POST","/v1/accounts:sendOobCode",A(e,t))}async function ex(e,t){return eL(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function eU(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF extends eR{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new eF(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new eF(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eA(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",eD);case"emailLink":return eM(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eA(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eP);case"emailLink":return eU(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eV(e,t){return R(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class eq extends eR{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eq(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new eq(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return eV(e,this.buildRequest())}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,eV(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eV(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,s.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eB(e,t){return k(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function ej(e,t){return R(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function e$(e,t){let n=await R(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw D(e,"account-exists-with-different-credential",n);return n}let ez={USER_NOT_FOUND:"user-not-found"};async function eK(e,t){return R(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ez)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH extends eR{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eH({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eH({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ej(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return e$(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eK(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new eH({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class eG{constructor(e){var t,n,r,i,o,a;let l=(0,s.zd)((0,s.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(n=l.oobCode)&&void 0!==n?n:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);v(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(i=l.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,s.zd)((0,s.pd)(e)).link,n=t?(0,s.zd)((0,s.pd)(t)).deep_link_id:null,r=(0,s.zd)((0,s.pd)(e)).deep_link_id;return(r?(0,s.zd)((0,s.pd)(r)).link:null)||r||n||t||e}(e);try{return new eG(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(){this.providerId=eQ.PROVIDER_ID}static credential(e,t){return eF._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=eG.parseLink(t);return v(n,"argument-error"),eF._fromEmailAndCode(e,n.code,n.tenantId)}}eQ.PROVIDER_ID="password",eQ.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eQ.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eX extends eW{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eY extends eX{constructor(){super("facebook.com")}static credential(e){return eq._fromParams({providerId:eY.PROVIDER_ID,signInMethod:eY.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eY.credentialFromTaggedObject(e)}static credentialFromError(e){return eY.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eY.credential(e.oauthAccessToken)}catch(e){return null}}}eY.FACEBOOK_SIGN_IN_METHOD="facebook.com",eY.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ extends eX{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eq._fromParams({providerId:eJ.PROVIDER_ID,signInMethod:eJ.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eJ.credentialFromTaggedObject(e)}static credentialFromError(e){return eJ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return eJ.credential(t,n)}catch(e){return null}}}eJ.GOOGLE_SIGN_IN_METHOD="google.com",eJ.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ extends eX{constructor(){super("github.com")}static credential(e){return eq._fromParams({providerId:eZ.PROVIDER_ID,signInMethod:eZ.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eZ.credentialFromTaggedObject(e)}static credentialFromError(e){return eZ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eZ.credential(e.oauthAccessToken)}catch(e){return null}}}eZ.GITHUB_SIGN_IN_METHOD="github.com",eZ.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends eX{constructor(){super("twitter.com")}static credential(e,t){return eq._fromParams({providerId:e0.PROVIDER_ID,signInMethod:e0.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return e0.credentialFromTaggedObject(e)}static credentialFromError(e){return e0.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return e0.credential(t,n)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(e,t){return R(e,"POST","/v1/accounts:signUp",A(e,t))}e0.TWITTER_SIGN_IN_METHOD="twitter.com",e0.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){return new e2({user:await ee._fromIdTokenResponse(e,n,r),providerId:e4(n),_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){return await e._updateTokensIfNecessary(n,!0),new e2({user:e,providerId:e4(n),_tokenResponse:n,operationType:t})}}function e4(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9 extends s.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,e9.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new e9(e,t,n,r)}}function e6(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw e9._fromErrorAndOperation(e,n,t,r);throw n})}async function e5(e,t,n=!1){let r=await z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return e2._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e3(e,t,n=!1){let{auth:r}=e;if((0,i.rh)(r.app))return Promise.reject(m(r));let s="reauthenticate";try{let i=await z(e,e6(r,s,t,e),n);v(i.idToken,r,"internal-error");let o=j(i.idToken);v(o,r,"internal-error");let{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),e2._forOperation(e,s,i)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&f(r,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e7(e,t,n=!1){if((0,i.rh)(e.app))return Promise.reject(m(e));let r="signIn",s=await e6(e,r,t),o=await e2._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(o.user),o}async function e8(e,t){return e7(eb(e),t)}async function te(e,t){return e3((0,s.m9)(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e){let t=eb(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function tn(e,t,n){if((0,i.rh)(e.app))return Promise.reject(m(e));let r=eb(e),s=eA(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",e1),o=await s.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tt(e),t}),a=await e2._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function tr(e,t,n){return(0,i.rh)(e.app)?Promise.reject(m(e)):e8((0,s.m9)(e),eQ.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tt(e),t})}async function ti(e,t){let n=(0,s.m9)(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};if(t){var i,o;i=n.auth,v((null===(o=t.url)||void 0===o?void 0:o.length)>0,i,"invalid-continue-uri"),v(void 0===t.dynamicLinkDomain||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),r.continueUrl=t.url,r.dynamicLinkDomain=t.dynamicLinkDomain,r.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(v(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),r.iOSBundleId=t.iOS.bundleId),t.android&&(v(t.android.packageName.length>0,i,"missing-android-pkg-name"),r.androidInstallApp=t.android.installApp,r.androidMinimumVersionCode=t.android.minimumVersion,r.androidPackageName=t.android.packageName)}let{email:a}=await ex(n.auth,r);a!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e,t){return k(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;let r=(0,s.m9)(e),i=await r.getIdToken(),o=await z(r,ts(r.auth,{idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0}));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;let a=r.providerData.find(({providerId:e})=>"password"===e);a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ta(e,t){return tl((0,s.m9)(e),null,t)}async function tl(e,t,n){let{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);let s=await z(e,eO(r,i));await e._updateTokensIfNecessary(s,!0)}function tu(e,t,n,r){return(0,s.m9)(e).onAuthStateChanged(t,n,r)}function tc(e){return(0,s.m9)(e).signOut()}new WeakMap;let th="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(th,"1"),this.storage.removeItem(th),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class tf extends td{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,s.z$)();return el(e)||ep(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let r=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);(0,s.w1)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tf.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends td{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tp.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new tg(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(i).map(async t=>t(e.origin,r)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}tg.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=tm("",20);s.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},n);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(u),clearTimeout(r),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(){return void 0!==tv().WorkerGlobalScope&&"function"==typeof tv().importScripts}async function t_(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tb="firebaseLocalStorageDb",tE="firebaseLocalStorage",tI="fbase_key";class tT{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tC(e,t){return e.transaction([tE],t?"readwrite":"readonly").objectStore(tE)}function tS(){let e=indexedDB.open(tb,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(tE,{keyPath:tI})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(tE)?t(n):(n.close(),await new tT(indexedDB.deleteDatabase(tb)).toPromise(),t(await tS()))})})}async function tA(e,t,n){return new tT(tC(e,!0).put({[tI]:t,value:n})).toPromise()}async function tk(e,t){let n=tC(e,!1).get(t),r=await new tT(n).toPromise();return void 0===r?null:r.value}function tN(e,t){return new tT(tC(e,!0).delete(t)).toPromise()}class tR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await tS()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tg._getInstance(tw()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await t_(),!this.activeServiceWorker)return;this.sender=new ty(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await tS();return await tA(e,th,"1"),await tN(e,th),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>tA(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>tk(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tN(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new tT(tC(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;if(0!==e.length)for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function tO(e,t,n){var r,i,s;let o=await n.verify();try{let a;if(v("string"==typeof o,e,"argument-error"),v("recaptcha"===n.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a)return v("enroll"===t.type,e,"internal-error"),(await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},k(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,i)))).phoneSessionInfo.sessionInfo;{v("signin"===t.type,e,"internal-error");let n=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid;return v(n,e,"missing-multi-factor-info"),(await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}},k(e,"POST","/v2/accounts/mfaSignIn:start",A(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await eB(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}tR.type="LOCAL",eT("rcb"),new E(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.providerId=tP.PROVIDER_ID,this.auth=eb(e)}verifyPhoneNumber(e,t){return tO(this.auth,e,(0,s.m9)(t))}static credential(e,t){return eH._fromVerification(e,t)}static credentialFromResult(e){return tP.credentialFromTaggedObject(e)}static credentialFromError(e){return tP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?eH._fromTokenResponse(t,n):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(e,t){return t?en(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}tP.PROVIDER_ID="phone",tP.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL extends eR{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eV(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eV(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eV(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tx(e){return e7(e.auth,new tL(e),e.bypassAuthState)}function tM(e){let{auth:t,user:n}=e;return v(n,t,"internal-error"),e3(n,new tL(e),e.bypassAuthState)}async function tU(e){let{auth:t,user:n}=e;return v(n,t,"internal-error"),e5(n,new tL(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tx;case"linkViaPopup":case"linkViaRedirect":return tU;case"reauthViaPopup":case"reauthViaRedirect":return tM;default:f(this.auth,"internal-error")}}resolve(e){var t,n;t=this.pendingPromise,n="Pending promise was never set",t||w(n),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){var t,n;t=this.pendingPromise,n="Pending promise was never set",t||w(n),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tV=new E(2e3,1e4);async function tq(e,t,n){if((0,i.rh)(e.app))return Promise.reject(p(e,"operation-not-supported-in-this-environment"));let r=eb(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&f(e,"argument-error"),g(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,eW);let s=tD(r,n);return new tB(r,"signInViaPopup",t,s).executeNotNull()}class tB extends tF{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,tB.currentPopupAction&&tB.currentPopupAction.cancel(),tB.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){var e,t;e=1===this.filter.length,t="Popup operations only handle one event",e||w(t);let n=tm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tB.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tV.get())};e()}}tB.currentPopupAction=null;let tj=new Map;class t$ extends tF{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=tj.get(this.auth._key());if(!e){try{let t=await tz(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}tj.set(this.auth._key(),e)}return this.bypassAuthState||tj.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tz(e,t){let n=ei("pendingRedirect",t.config.apiKey,t.name),r=en(e._redirectPersistence);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}function tK(e,t){tj.set(e._key(),t)}async function tH(e,t,n=!1){if((0,i.rh)(e.app))return Promise.reject(m(e));let r=eb(e),s=tD(r,t),o=new t$(r,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class tG{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tW(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tW(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tQ(e))}saveEventToCache(e){this.cachedEventUids.add(tQ(e)),this.lastProcessedEventTime=Date.now()}}function tQ(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tW({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tX(e,t={}){return k(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tY=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tJ=/^https?/;async function tZ(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tX(e);for(let e of t)try{if(function(e){let t=_(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tJ.test(n))return!1;if(tY.test(e))return r===e;let i=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}(e))return}catch(e){}f(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t0=new E(3e4,6e4);function t1(){let e=tv().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let t2=null,t4=new E(5e3,15e3),t9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function t5(e){let t=await (t2=t2||new Promise((t,n)=>{var r,i,s,o;function a(){t1(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{t1(),n(p(e,"network-request-failed"))},timeout:t0.get()})}if(null===(i=null===(r=tv().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=tv().gapi)||void 0===s?void 0:s.load)a();else{let t=eT("iframefcb");return tv()[t]=()=>{gapi.load?a():n(p(e,"network-request-failed"))},(o=`${eI.gapiScript}?onload=${t}`,eI.loadJS(o)).catch(e=>n(e))}}).catch(e=>{throw t2=null,e})),n=tv().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;v(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?I(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=t6.get(e.config.apiHost);o&&(r.eid=o);let a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,s.xO)(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t9,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=tv().setTimeout(()=>{r(i)},t4.get());function o(){tv().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class t7{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let t8=encodeURIComponent("fac");async function ne(e,t,n,r,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:i.Jn,eventId:o};if(t instanceof eW)for(let[n,r]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,s.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[n]=r;if(t instanceof eX){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let u=await e._getAppCheckToken(),c=u?`#${t8}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?I(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,s.xO)(l).slice(1)}${c}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt="webStorageSupport";class nn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tp,this._completeRedirectFn=tH,this._overrideRedirectResult=tK}async _openPopup(e,t,n,r){var i,o,a;o=null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,a="_initialize() not called before _openPopup()",o||w(a);let l=await ne(e,t,n,_(),r);return function(e,t,n,r=500,i=600){let o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),l="",u=Object.assign(Object.assign({},t3),{width:r.toString(),height:i.toString(),top:o,left:a}),c=(0,s.z$)().toLowerCase();n&&(l=eu(c)?"_blank":n),ea(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,s.z$)()){var t;return ep(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",l),new t7(null);let d=window.open(t||"",l,h);v(d,e,"popup-blocked");try{d.focus()}catch(e){}return new t7(d)}(e,l,tm())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=await ne(e,t,n,_(),r),tv().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){var n;let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(n="If manager is not set, promise should be",r||w(n),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await t5(e),n=new tG(e);return t.register("authEvent",t=>(v(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nt,{type:nt},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[nt];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tZ(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eg()||el()||ep()}}class nr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class ni extends nr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ni(e)}_finalizeEnroll(e,t,n){return k(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return k(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class ns{constructor(){}static assertion(e){return ni._fromCredential(e)}}ns.FACTOR_ID="phone";class no{static assertionForEnrollment(e,t){return na._fromSecret(e,t)}static assertionForSignIn(e,t){return na._fromEnrollmentId(e,t)}static async generateSecret(e){var t,n;v(void 0!==(null===(t=e.user)||void 0===t?void 0:t.auth),"internal-error");let r=await k(n=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",A(n,{idToken:e.credential,totpEnrollmentInfo:{}}));return nl._fromStartTotpMfaEnrollmentResponse(r,e.user.auth)}}no.FACTOR_ID="totp";class na extends nr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new na(t,void 0,e)}static _fromEnrollmentId(e,t){return new na(t,e)}async _finalizeEnroll(e,t,n){return v(void 0!==this.secret,e,"argument-error"),k(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let n={verificationCode:this.otp};return k(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}class nl{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new nl(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(nu(e)||nu(t))&&(r=!0),r&&(nu(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),nu(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function nu(e){return void 0===e||(null==e?void 0:e.length)===0}var nc="@firebase/auth",nh="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let nf=(0,s.Pz)("authIdTokenMaxAge")||300,np=null,ng=e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nf)return;let i=null==n?void 0:n.token;np!==i&&(np=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nm(e=(0,i.Mq)()){let t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let n=(0,i.qX)(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if((0,s.vZ)(r,null!=t?t:{}))return e;f(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:nn,persistence:[tR,tf,tp]}),r=(0,s.Pz)("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(r,location.origin);if(location.origin===e.origin){var o,a;let t=ng(e.toString());o=()=>t(n.currentUser),(0,s.m9)(n).beforeAuthStateChanged(t,o),a=e=>t(e),(0,s.m9)(n).onIdTokenChanged(a,void 0,void 0)}}let l=(0,s.q4)("auth");return l&&function(e,t,n){let r=eb(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");let i=ek(t),{host:s,port:o}=function(e){let t=ek(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:eN(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:eN(t)}}}(t),a=null===o?"":`:${o}`;r.config.emulator={url:`${i}//${s}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${l}`),n}eI={loadJS:e=>new Promise((t,n)=>{var r,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=p("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},r="Browser",(0,i.Xd)(new l.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});let l=new e_(n,i,s,{apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:em(r)});return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),(0,i.Xd)(new l.wA("auth-internal",e=>new nd(eb(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(nc,nh,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(r)),(0,i.KN)(nc,nh,"esm2017")},109:function(e,t,n){"use strict";n.d(t,{hJ:function(){return iB},oe:function(){return sT},JU:function(){return ij},QT:function(){return s_},PL:function(){return sE},ad:function(){return iK},Xo:function(){return sh},IO:function(){return sa},Bt:function(){return sS},pl:function(){return sI}});var r,i,s,o,a,l,u,c,h,d,f,p,g,m,y,v=n(5816),w=n(8463),_=n(3333),b=n(4444),E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},I={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=s+(i^(t=n+(o<<7&4294967295|o>>>25))&(n^i))+r[1]+3905402710&4294967295,o=i+(n^(s=t+(o<<12&4294967295|o>>>20))&(t^n))+r[2]+606105819&4294967295,o=n+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+r[3]+3250441966&4294967295,o=t+(s^(n=i+(o<<22&4294967295|o>>>10))&(i^s))+r[4]+4118548399&4294967295,o=s+(i^(t=n+(o<<7&4294967295|o>>>25))&(n^i))+r[5]+1200080426&4294967295,o=i+(n^(s=t+(o<<12&4294967295|o>>>20))&(t^n))+r[6]+2821735955&4294967295,o=n+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+r[7]+4249261313&4294967295,o=t+(s^(n=i+(o<<22&4294967295|o>>>10))&(i^s))+r[8]+1770035416&4294967295,o=s+(i^(t=n+(o<<7&4294967295|o>>>25))&(n^i))+r[9]+2336552879&4294967295,o=i+(n^(s=t+(o<<12&4294967295|o>>>20))&(t^n))+r[10]+4294925233&4294967295,o=n+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+r[11]+2304563134&4294967295,o=t+(s^(n=i+(o<<22&4294967295|o>>>10))&(i^s))+r[12]+1804603682&4294967295,o=s+(i^(t=n+(o<<7&4294967295|o>>>25))&(n^i))+r[13]+4254626195&4294967295,o=i+(n^(s=t+(o<<12&4294967295|o>>>20))&(t^n))+r[14]+2792965006&4294967295,o=n+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,o=t+((n=i+(o<<20&4294967295|o>>>12))^i^s)+r[5]+4294588738&4294967295,o=s+((t=n+(o<<4&4294967295|o>>>28))^n^i)+r[8]+2272392833&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^n)+r[11]+1839030562&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^t)+r[14]+4259657740&4294967295,o=t+((n=i+(o<<23&4294967295|o>>>9))^i^s)+r[1]+2763975236&4294967295,o=s+((t=n+(o<<4&4294967295|o>>>28))^n^i)+r[4]+1272893353&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^n)+r[7]+4139469664&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^t)+r[10]+3200236656&4294967295,o=t+((n=i+(o<<23&4294967295|o>>>9))^i^s)+r[13]+681279174&4294967295,o=s+((t=n+(o<<4&4294967295|o>>>28))^n^i)+r[0]+3936430074&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^n)+r[3]+3572445317&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^t)+r[6]+76029189&4294967295,o=t+((n=i+(o<<23&4294967295|o>>>9))^i^s)+r[9]+3654602809&4294967295,o=s+((t=n+(o<<4&4294967295|o>>>28))^n^i)+r[12]+3873151461&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^n)+r[15]+530742520&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function n(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(e,n){void 0===n&&(n=e.length);for(var r=n-this.blockSize,i=this.B,s=this.h,o=0;o<n;){if(0==s)for(;o<=r;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<n;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<n;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=n},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var s,o={};function a(e){var t;return -128<=e&&128>e?(t=function(e){return new n([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(o,e)?o[e]:o[e]=t(e)):new n([0|e],0>e?-1:0)}function l(e){if(isNaN(e)||!isFinite(e))return u;if(0>e)return p(l(-e));for(var t=[],r=1,i=0;e>=r;i++)t[i]=e/r|0,r*=4294967296;return new n(t,0)}var u=a(0),c=a(1),h=a(16777216);function d(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function f(e){return -1==e.h}function p(e){for(var t=e.g.length,r=[],i=0;i<t;i++)r[i]=~e.g[i];return new n(r,~e.h).add(c)}function g(e,t){return e.add(p(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function v(e,t){if(d(t))throw Error("division by zero");if(d(e))return new y(u,u);if(f(e))return t=v(p(e),t),new y(p(t.g),p(t.h));if(f(t))return t=v(e,p(t)),new y(p(t.g),t.h);if(30<e.g.length){if(f(e)||f(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;0>=r.l(e);)n=w(n),r=w(r);var i=_(n,1),s=_(r,1);for(r=_(r,2),n=_(n,2);!d(r);){var o=s.add(r);0>=o.l(e)&&(i=i.add(n),s=o),r=_(r,1),n=_(n,1)}return t=g(e,i.j(t)),new y(i,t)}for(i=u;0<=e.l(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,r-48),o=(s=l(n)).j(t);f(o)||0<o.l(e);)n-=r,o=(s=l(n)).j(t);d(s)&&(s=c),i=i.add(s),e=g(e,o)}return new y(i,e)}function w(e){for(var t=e.g.length+1,r=[],i=0;i<t;i++)r[i]=e.i(i)<<1|e.i(i-1)>>>31;return new n(r,e.h)}function _(e,t){var r=t>>5;t%=32;for(var i=e.g.length-r,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+r)>>>t|e.i(o+r+1)<<32-t:e.i(o+r);return new n(s,e.h)}(s=n.prototype).m=function(){if(f(this))return-p(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},s.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(d(this))return"0";if(f(this))return"-"+p(this).toString(e);for(var t=l(Math.pow(e,6)),n=this,r="";;){var i=v(n,t).g,s=((0<(n=g(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(d(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},s.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},s.l=function(e){return f(e=g(this,e))?-1:d(e)?0:1},s.abs=function(){return f(this)?p(this):this},s.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,r[s]=a<<16|o}return new n(r,-2147483648&r[r.length-1]?-1:0)},s.j=function(e){if(d(this)||d(e))return u;if(f(this))return f(e)?p(this).j(p(e)):p(p(this).j(e));if(f(e))return p(this.j(p(e)));if(0>this.l(h)&&0>e.l(h))return l(this.m()*e.m());for(var t=this.g.length+e.g.length,r=[],i=0;i<2*t;i++)r[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var o=this.i(i)>>>16,a=65535&this.i(i),c=e.i(s)>>>16,g=65535&e.i(s);r[2*i+2*s]+=a*g,m(r,2*i+2*s),r[2*i+2*s+1]+=o*g,m(r,2*i+2*s+1),r[2*i+2*s+1]+=a*c,m(r,2*i+2*s+1),r[2*i+2*s+2]+=o*c,m(r,2*i+2*s+2)}for(i=0;i<t;i++)r[i]=r[2*i+1]<<16|r[2*i];for(i=t;i<2*t;i++)r[i]=0;return new n(r,0)},s.A=function(e){return v(this,e).h},s.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)&e.i(i);return new n(r,this.h&e.h)},s.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)|e.i(i);return new n(r,this.h|e.h)},s.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],i=0;i<t;i++)r[i]=this.i(i)^e.i(i);return new n(r,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,i=I.Md5=e,n.prototype.add=n.prototype.add,n.prototype.multiply=n.prototype.j,n.prototype.modulo=n.prototype.A,n.prototype.compare=n.prototype.l,n.prototype.toNumber=n.prototype.m,n.prototype.toString=n.prototype.toString,n.prototype.getBits=n.prototype.i,n.fromNumber=l,n.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return p(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=l(Math.pow(n,8)),i=u,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=l(Math.pow(n,o)),i=i.j(o).add(l(a))):i=(i=i.j(r)).add(l(a))}return i},r=I.Integer=n}).apply(void 0!==E?E:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},C={};(function(){var e,t,n,r="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof T&&T];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var n=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in n))break e;n=n[o]}(t=t(s=n[e=e[e.length-1]]))!=s&&null!=t&&r(n,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,n,r,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),n=0,r=!1,(i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var p=p||{},g=this||self;function m(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function y(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function v(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return(_=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w).apply(null,arguments)}function b(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function I(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function S(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(m(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}class A{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function k(e){return/^[\s\xa0]*$/.test(e)}function N(){var e=g.navigator;return e&&(e=e.userAgent)?e:""}function R(e){return R[" "](e),e}R[" "]=function(){};var O=-1!=N().indexOf("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&-1==N().indexOf("Edge"))&&!(-1!=N().indexOf("Trident")||-1!=N().indexOf("MSIE"))&&-1==N().indexOf("Edge");function P(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function D(e){let t={};for(let n in e)t[n]=e[n];return t}let L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<L.length;t++)n=L[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}class M{constructor(){this.h=this.g=null}add(e,t){let n=U.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var U=new A(()=>new F,e=>e.reset());class F{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let V,q=!1,B=new M,j=()=>{let e=g.Promise.resolve(void 0);V=()=>{e.then($)}};var $=()=>{let e;for(var t;e=null,B.g&&(e=B.g,B.g=B.g.next,B.g||(B.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){g.setTimeout(()=>{throw e},0)}(e)}U.j(t),100>U.h&&(U.h++,t.next=U.g,U.g=t)}q=!1};function z(){this.s=this.s,this.C=this.C}function K(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},K.prototype.h=function(){this.defaultPrevented=!0};var H=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};g.addEventListener("test",e,t),g.removeEventListener("test",e,t)}catch(e){}return e}();function G(e,t){if(K.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(O){e:{try{R(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.aa.h.call(this)}}E(G,K);var Q={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),X=0;function Y(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++X,this.da=this.fa=!1}function J(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Z(e){this.src=e,this.g={},this.h=0}function ee(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(J(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function et(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}Z.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=et(e,t,r,i);return -1<o?(t=e[o],n||(t.fa=!1)):((t=new Y(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var en="closure_lm_"+(1e6*Math.random()|0),er={};function ei(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=y(i)?!!i.capture:!!i,a=el(e);if(a||(e[en]=a=new Z(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function e(t){return ea.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)H||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(eo(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function es(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[W])ee(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(eo(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=el(t))?(ee(n,e),0==n.h&&(n.src=null,t[en]=null)):J(e)}}}function eo(e){return e in er?er[e]:er[e]="on"+e}function ea(e,t){if(e.da)e=!0;else{t=new G(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&es(e),e=n.call(r,t)}return e}function el(e){return(e=e[en])instanceof Z?e:null}var eu="__closure_events_fn_"+(1e9*Math.random()>>>0);function ec(e){return"function"==typeof e?e:(e[eu]||(e[eu]=function(t){return e.handleEvent(t)}),e[eu])}function eh(){z.call(this),this.i=new Z(this),this.M=this,this.F=null}function ed(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new K(t,e);else if(t instanceof K)t.target=t.target||e;else{var i=t;x(t=new K(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ef(o,r,!0,t)&&i}if(i=ef(o=t.g=e,r,!0,t)&&i,i=ef(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ef(o=t.g=n[s],r,!1,t)&&i}function ef(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&ee(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}function ep(e,t,n){if("function"==typeof e)n&&(e=_(e,n));else if(e&&"function"==typeof e.handleEvent)e=_(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:g.setTimeout(e,t||0)}E(eh,z),eh.prototype[W]=!0,eh.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else(i=y(i)?!!i.capture:!!i,r=ec(r),t&&t[W])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=et(o=t.g[n],r,i,s))&&(J(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=el(t))&&(n=t.g[n.toString()],t=-1,n&&(t=et(n,r,i,s)),(r=-1<t?n[t]:null)&&es(r))}(this,e,t,n,r)},eh.prototype.N=function(){if(eh.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)J(n[r]);delete t.g[e],t.h--}}this.F=null},eh.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},eh.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class eg extends z{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=ep(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function em(e){z.call(this),this.h=e,this.g={}}E(em,z);var ey=[];function ev(e){P(e.g,function(e,t){this.g.hasOwnProperty(t)&&es(e)},e),e.g={}}em.prototype.N=function(){em.aa.N.call(this),ev(this)},em.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ew=g.JSON.stringify,e_=g.JSON.parse,eb=class{stringify(e){return g.JSON.stringify(e,void 0)}parse(e){return g.JSON.parse(e,void 0)}};function eE(){}function eI(e){return e.h||(e.h=e.i())}function eT(){}eE.prototype.h=null;var eC={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eS(){K.call(this,"d")}function eA(){K.call(this,"c")}E(eS,K),E(eA,K);var ek={},eN=null;function eR(){return eN=eN||new eh}function eO(e){K.call(this,ek.La,e)}function eP(e){let t=eR();ed(t,new eO(t))}function eD(e,t){K.call(this,ek.STAT_EVENT,e),this.stat=t}function eL(e){let t=eR();ed(t,new eD(t,e))}function ex(e,t){K.call(this,ek.Ma,e),this.size=t}function eM(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){e()},t)}function eU(){this.g=!0}function eF(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return ew(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}ek.La="serverreachability",E(eO,K),ek.STAT_EVENT="statevent",E(eD,K),ek.Ma="timingevent",E(ex,K),eU.prototype.xa=function(){this.g=!1},eU.prototype.info=function(){};var eV={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eq={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eB(){}function ej(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new em(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new e$}function e$(){this.i=null,this.g="",this.h=!1}E(eB,eE),eB.prototype.g=function(){return new XMLHttpRequest},eB.prototype.i=function(){return{}},t=new eB;var ez={},eK={};function eH(e,t,n){e.L=1,e.v=ta(tn(t)),e.m=n,e.P=!0,eG(e,null)}function eG(e,t){e.F=Date.now(),eW(e),e.A=tn(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),t_(n.i,"t",r),e.C=0,n=e.j.J,e.h=new e$,e.g=t5(e.j,n?t:null,!e.m),0<e.O&&(e.M=new eg(_(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ey[0]=i.toString()),i=ey);for(var s=0;s<i.length;s++){var o=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=ec(r),t&&t[W]?t.L(n,r,y(i)?!!i.capture:!!i,s):ei(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=ec(r),t&&t[W]?t.K(n,r,y(i)?!!i.capture:!!i,s):ei(t,n,r,!1,i,s)}(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?D(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),eP(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eQ(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function eW(e){e.S=Date.now()+e.I,eX(e,e.I)}function eX(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eM(_(e.ba,e),t)}function eY(e){e.B&&(g.clearTimeout(e.B),e.B=null)}function eJ(e){0==e.j.G||e.J||t1(e.j,e)}function eZ(e){eY(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ev(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function e0(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||e6(n.h,e))){if(!e.K&&e6(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)t0(n),tz(n);else break e}tY(n),eL(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=eM(_(n.Za,n),6e3));if(1>=e9(n.h)&&n.ca){try{n.ca()}catch(e){}n.ca=void 0}}else t4(n,11)}else if((e.K||n.g==e)&&t0(n),!k(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(n.T=a[0],a=a[1],2==n.G){if("c"==a[0]){n.K=a[1],n.ia=a[2];let t=a[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));let i=a[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e5(s,s.h),s.h=null))}if(r.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,to(r.I,r.D,e))}}if(n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),(r=n).qa=t6(r,r.J?r.ia:null,r.W),e.K){e3(r.h,e);var o=r.L;o&&(e.I=o),e.B&&(eY(e),eW(e)),r.g=e}else tX(r);0<n.i.length&&tH(n)}else"stop"!=a[0]&&"close"!=a[0]||t4(n,7)}else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t4(n,7):t$(n):"noop"!=a[0]&&n.l&&n.l.ta(a),n.v=0)}}eP(4)}catch(e){}}ej.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tV(e)?t.j():this.Y(e)},ej.prototype.Y=function(e){try{if(e==this.g)e:{let h=tV(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||tq(this.g)))){this.J||4!=h||7==t||(8==t||0>=d?eP(3):eP(2)),eY(this);var n=this.g.Z();this.X=n;t:if(eQ(this)){var r=tq(this.g);e="";var i=r.length,s=4==tV(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eZ(this),eJ(this);var o="";break t}this.h.i=new g.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,h,n),this.o){if(this.T&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(a)){var u=a;break t}}u=null}if(n=u)eF(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,e0(this,n);else{this.o=!1,this.s=3,eL(12),eZ(this),eJ(this);break e}}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;)if((e=function(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?eK:isNaN(n=Number(t.substring(n,r)))?ez:(r+=1)+n>t.length?eK:(t=t.slice(r,r+n),e.C=r+n,t)}(this,o))==eK){4==h&&(this.s=4,eL(14),n=!1),eF(this.i,this.l,null,"[Incomplete Response]");break}else if(e==ez){this.s=4,eL(15),eF(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}else eF(this.i,this.l,e,null),e0(this,e);if(eQ(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=o.length||this.h.h||(this.s=1,eL(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),tJ(c),c.M=!0,eL(11))}}else eF(this.i,this.l,o,"[Invalid Chunked Response]"),eZ(this),eJ(this)}else eF(this.i,this.l,o,null),e0(this,o);4==h&&eZ(this),this.o&&!this.J&&(4==h?t1(this.j,this):(this.o=!1,eW(this)))}else(function(e){let t={};e=(e.g&&2<=tV(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(k(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,eL(12)):(this.s=0,eL(13)),eZ(this),eJ(this)}}}catch(e){}finally{}},ej.prototype.cancel=function(){this.J=!0,eZ(this)},ej.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(eP(),eL(17)),eZ(this),this.s=2,eJ(this)):eX(this,this.S-e)};var e1=class{constructor(e,t){this.g=e,this.map=t}};function e2(e){this.l=e||10,e=g.PerformanceNavigationTiming?0<(e=g.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function e4(e){return!!e.h||!!e.g&&e.g.size>=e.j}function e9(e){return e.h?1:e.g?e.g.size:0}function e6(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e5(e,t){e.g?e.g.add(t):e.h=t}function e3(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e7(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return I(e.i)}function e8(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(m(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(m(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(m(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}e2.prototype.cancel=function(){if(this.i=e7(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var te=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof tt){this.h=e.h,tr(this,e.j),this.o=e.o,this.g=e.g,ti(this,e.s),this.l=e.l;var t=e.i,n=new tm;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ts(this,n),this.m=e.m}else e&&(t=String(e).match(te))?(this.h=!1,tr(this,t[1]||"",!0),this.o=tl(t[2]||""),this.g=tl(t[3]||"",!0),ti(this,t[4]),this.l=tl(t[5]||"",!0),ts(this,t[6]||"",!0),this.m=tl(t[7]||"")):(this.h=!1,this.i=new tm(null,this.h))}function tn(e){return new tt(e)}function tr(e,t,n){e.j=n?tl(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ti(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function ts(e,t,n){var r,i;t instanceof tm?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(ty(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tv(this,t),t_(this,n,e))},r)),r.j=i):(n||(t=tu(t,tp)),e.i=new tm(t,e.h))}function to(e,t,n){e.i.set(t,n)}function ta(e){return to(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tl(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tu(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tc(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tu(t,th,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(tu(t,th,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tu(n,"/"==n.charAt(0)?tf:td,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",tu(n,tg)),e.join("")};var th=/[#\/\?@]/g,td=/[#\?:]/g,tf=/[#\?]/g,tp=/[#\?@]/g,tg=/#/g;function tm(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ty(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tv(e,t){ty(e),t=tb(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tw(e,t){return ty(e),t=tb(e,t),e.g.has(t)}function t_(e,t,n){tv(e,t),0<n.length&&(e.i=null,e.g.set(tb(e,t),I(n)),e.h+=n.length)}function tb(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tE(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function tI(){this.g=new eb}function tT(e){this.l=e.Ub||null,this.j=e.eb||!1}function tC(e,t){eh.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tS(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tA(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tk(e)}function tk(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tN(e){let t="";return P(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function tR(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tN(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):to(e,t,n))}function tO(e){eh.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(n=tm.prototype).add=function(e,t){ty(this),this.i=null,e=tb(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},n.forEach=function(e,t){ty(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},n.na=function(){ty(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},n.V=function(e){ty(this);let t=[];if("string"==typeof e)tw(this,e)&&(t=t.concat(this.g.get(tb(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},n.set=function(e,t){return ty(this),this.i=null,tw(this,e=tb(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},n.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},E(tT,eE),tT.prototype.g=function(){return new tC(this.l,this.j)},tT.prototype.i=(e={},function(){return e}),E(tC,eh),(n=tC.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tk(this)},n.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||g).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tA(this)),this.readyState=0},n.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tk(this)),this.g&&(this.readyState=3,tk(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==g.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tS(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},n.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tA(this):tk(this),3==this.readyState&&tS(this)}},n.Ra=function(e){this.g&&(this.response=this.responseText=e,tA(this))},n.Qa=function(e){this.g&&(this.response=e,tA(this))},n.ga=function(){this.g&&tA(this)},n.setRequestHeader=function(e,t){this.u.append(e,t)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tC.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),E(tO,eh);var tP=/^https?$/i,tD=["POST","PUT"];function tL(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tx(e),tU(e)}function tx(e){e.A||(e.A=!0,ed(e,"complete"),ed(e,"error"))}function tM(e){if(e.h&&void 0!==p&&(!e.v[1]||4!=tV(e)||2!=e.Z())){if(e.u&&4==tV(e))ep(e.Ea,0,e);else if(ed(e,"readystatechange"),4==tV(e)){e.h=!1;try{let o=e.Z();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===o){var i=String(e.D).match(te)[1]||null;!i&&g.self&&g.self.location&&(i=g.self.location.protocol.slice(0,-1)),n=!tP.test(i?i.toLowerCase():"")}t=n}if(t)ed(e,"complete"),ed(e,"success");else{e.m=6;try{var s=2<tV(e)?e.g.statusText:""}catch(e){s=""}e.l=s+" ["+e.Z()+"]",tx(e)}}finally{tU(e)}}}}function tU(e,t){if(e.g){tF(e);let n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ed(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function tF(e){e.I&&(g.clearTimeout(e.I),e.I=null)}function tV(e){return e.g?e.g.readyState:0}function tq(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tB(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tj(e){this.Aa=0,this.i=[],this.j=new eU,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tB("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tB("baseRetryDelayMs",5e3,e),this.cb=tB("retryDelaySeedMs",1e4,e),this.Wa=tB("forwardChannelMaxRetries",2,e),this.wa=tB("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new e2(e&&e.concurrentRequestLimit),this.Da=new tI,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function t$(e){if(tK(e),3==e.G){var t=e.U++,n=tn(e.I);if(to(n,"SID",e.K),to(n,"RID",t),to(n,"TYPE","terminate"),tQ(e,n),(t=new ej(e,e.j,t)).L=2,t.v=ta(tn(n)),n=!1,g.navigator&&g.navigator.sendBeacon)try{n=g.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&g.Image&&((new Image).src=t.v,n=!0),n||(t.g=t5(t.j,null),t.g.ea(t.v)),t.F=Date.now(),eW(t)}t9(e)}function tz(e){e.g&&(tJ(e),e.g.cancel(),e.g=null)}function tK(e){tz(e),e.u&&(g.clearTimeout(e.u),e.u=null),t0(e),e.h.cancel(),e.s&&("number"==typeof e.s&&g.clearTimeout(e.s),e.s=null)}function tH(e){if(!e4(e.h)&&!e.s){e.s=!0;var t=e.Ga;V||j(),q||(V(),q=!0),B.add(t,e),e.B=0}}function tG(e,t){var n;n=t?t.l:e.U++;let r=tn(e.I);to(r,"SID",e.K),to(r,"RID",n),to(r,"AID",e.T),tQ(e,r),e.m&&e.o&&tR(r,e.m,e.o),n=new ej(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tW(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e5(e.h,n),eH(n,r,t)}function tQ(e,t){e.H&&P(e.H,function(e,n){to(t,n,e)}),e.l&&e8({},function(e,n){to(t,n,e)})}function tW(e,t,n){n=Math.min(e.i.length,n);var r=e.l?_(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g,a=i[o].map;if(0>(n-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{e8(e,function(e,n){let i=e;y(e)&&(i=ew(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tX(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;V||j(),q||(V(),q=!0),B.add(t,e),e.v=0}}function tY(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eM(_(e.Fa,e),t2(e,e.v)),e.v++,!0)}function tJ(e){null!=e.A&&(g.clearTimeout(e.A),e.A=null)}function tZ(e){e.g=new ej(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=tn(e.qa);to(t,"RID","rpc"),to(t,"SID",e.K),to(t,"AID",e.T),to(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&to(t,"TO",e.ja),to(t,"TYPE","xmlhttp"),tQ(e,t),e.m&&e.o&&tR(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ta(tn(t)),n.m=null,n.P=!0,eG(n,e)}function t0(e){null!=e.C&&(g.clearTimeout(e.C),e.C=null)}function t1(e,t){var n=null;if(e.g==t){t0(e),tJ(e),e.g=null;var r=2}else{if(!e6(e.h,t))return;n=t.D,e3(e.h,t),r=1}if(0!=e.G){if(t.o){if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;ed(r=eR(),new ex(r,n)),tH(e)}else tX(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==r&&(i=t,!(e9(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eM(_(e.Ga,e,i),t2(e,e.B)),e.B++,!0)))||2==r&&tY(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),s){case 1:t4(e,5);break;case 4:t4(e,10);break;case 3:t4(e,6);break;default:t4(e,2)}}}function t2(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function t4(e,t){if(e.j.info("Error code "+t),2==t){var n=_(e.fb,e),r=e.Xa;let t=!r;r=new tt(r||"//www.google.com/images/cleardot.gif"),g.location&&"http"==g.location.protocol||tr(r,"https"),ta(r),t?function(e,t){let n=new eU;if(g.Image){let r=new Image;r.onload=b(tE,n,"TestLoadImage: loaded",!0,t,r),r.onerror=b(tE,n,"TestLoadImage: error",!1,t,r),r.onabort=b(tE,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=b(tE,n,"TestLoadImage: timeout",!1,t,r),g.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){let n=new eU,r=new AbortController,i=setTimeout(()=>{r.abort(),tE(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(i),e.ok?tE(n,"TestPingServer: ok",!0,t):tE(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tE(n,"TestPingServer: error",!1,t)})}(r.toString(),n)}else eL(2);e.G=0,e.l&&e.l.sa(t),t9(e),tK(e)}function t9(e){if(e.G=0,e.ka=[],e.l){let t=e7(e.h);(0!=t.length||0!=e.i.length)&&(S(e.ka,t),S(e.ka,e.i),e.h.i.length=0,I(e.i),e.i.length=0),e.l.ra()}}function t6(e,t,n){var r=n instanceof tt?tn(n):new tt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ti(r,r.s);else{var i=g.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new tt(null);r&&tr(s,r),t&&(s.g=t),i&&ti(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&to(r,n,t),to(r,"VER",e.la),tQ(e,r),r}function t5(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tO(e.Ca&&!e.pa?new tT({eb:n}):e.pa)).Ha(e.J),t}function t3(){}function t7(){}function t8(e,t){eh.call(this),this.g=new tj(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!k(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!k(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nn(this)}function ne(e){eS.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nt(){eA.call(this),this.status=1}function nn(e){this.g=e}(n=tO.prototype).Ha=function(e){this.J=e},n.ea=function(e,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);n=n?n.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?eI(this.o):eI(t),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(n,String(e),!0),this.B=!1}catch(e){tL(this,e);return}if(e=r||"",r=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)r.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())r.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,o]of(i=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),s=g.FormData&&e instanceof g.FormData,!(0<=Array.prototype.indexOf.call(tD,n,void 0))||i||s||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(t,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tF(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tL(this,e)}},n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ed(this,"complete"),ed(this,"abort"),tU(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tU(this,!0)),tO.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tM(this):this.bb())},n.bb=function(){tM(this)},n.isActive=function(){return!!this.g},n.Z=function(){try{return 2<tV(this)?this.g.status:-1}catch(e){return -1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},n.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),e_(t)}},n.Ba=function(){return this.m},n.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(n=tj.prototype).la=8,n.G=1,n.connect=function(e,t,n,r){eL(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=t6(this,null,this.W),tH(this)},n.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new ej(this,this.j,e),s=this.o;if(this.S&&(s?x(s=D(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tW(this,i,t),to(n=tn(this.I),"RID",e),to(n,"CVER",22),this.D&&to(n,"X-HTTP-Session-Id",this.D),tQ(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(tN(s)))+"&"+t:this.m&&tR(n,this.m,s)),e5(this.h,i),this.Ua&&to(n,"TYPE","init"),this.P?(to(n,"$req",t),to(n,"SID","null"),i.T=!0,eH(i,n,null)):eH(i,n,t),this.G=2}}else 3==this.G&&(e?tG(this,e):0==this.i.length||e4(this.h)||tG(this))}},n.Fa=function(){if(this.u=null,tZ(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eM(_(this.ab,this),e)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eL(10),tz(this),tZ(this))},n.Za=function(){null!=this.C&&(this.C=null,tz(this),tY(this),eL(19))},n.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eL(2)):(this.j.info("Failed to ping google.com"),eL(1))},n.isActive=function(){return!!this.l&&this.l.isActive(this)},(n=t3.prototype).ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){},t7.prototype.g=function(e,t){return new t8(e,t)},E(t8,eh),t8.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t8.prototype.close=function(){t$(this.g)},t8.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ew(e),e=n);t.i.push(new e1(t.Ya++,e)),3==t.G&&tH(t)},t8.prototype.N=function(){this.g.l=null,delete this.j,t$(this.g),delete this.g,t8.aa.N.call(this)},E(ne,eS),E(nt,eA),E(nn,t3),nn.prototype.ua=function(){ed(this.g,"a")},nn.prototype.ta=function(e){ed(this.g,new ne(e))},nn.prototype.sa=function(e){ed(this.g,new nt)},nn.prototype.ra=function(){ed(this.g,"b")},t7.prototype.createWebChannel=t7.prototype.g,t8.prototype.send=t8.prototype.o,t8.prototype.open=t8.prototype.m,t8.prototype.close=t8.prototype.close,f=C.createWebChannelTransport=function(){return new t7},d=C.getStatEventTarget=function(){return eR()},h=C.Event=ek,c=C.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eV.NO_ERROR=0,eV.TIMEOUT=8,eV.HTTP_ERROR=6,u=C.ErrorCode=eV,eq.COMPLETE="complete",l=C.EventType=eq,eT.EventType=eC,eC.OPEN="a",eC.CLOSE="b",eC.ERROR="c",eC.MESSAGE="d",eh.prototype.listen=eh.prototype.K,a=C.WebChannel=eT,o=C.FetchXmlHttpFactory=tT,tO.prototype.listenOnce=tO.prototype.L,tO.prototype.getLastError=tO.prototype.Ka,tO.prototype.getLastErrorCode=tO.prototype.Ba,tO.prototype.getStatus=tO.prototype.Z,tO.prototype.getResponseJson=tO.prototype.Oa,tO.prototype.getResponseText=tO.prototype.oa,tO.prototype.send=tO.prototype.ea,tO.prototype.setWithCredentials=tO.prototype.Ha,s=C.XhrIo=tO}).apply(void 0!==T?T:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),n(3454);var S=n(1876).Buffer;let A="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}k.UNAUTHENTICATED=new k(null),k.GOOGLE_CREDENTIALS=new k("google-credentials-uid"),k.FIRST_PARTY=new k("first-party-uid"),k.MOCK_USER=new k("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N="10.12.0",R=new _.Yd("@firebase/firestore");function O(){return R.logLevel}function P(e,...t){if(R.logLevel<=_.in.DEBUG){let n=t.map(x);R.debug(`Firestore (${N}): ${e}`,...n)}}function D(e,...t){if(R.logLevel<=_.in.ERROR){let n=t.map(x);R.error(`Firestore (${N}): ${e}`,...n)}}function L(e,...t){if(R.logLevel<=_.in.WARN){let n=t.map(x);R.warn(`Firestore (${N}): ${e}`,...n)}}function x(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e="Unexpected state"){let t=`FIRESTORE (${N}) INTERNAL ASSERTION FAILED: `+e;throw D(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends b.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(k.UNAUTHENTICATED))}shutdown(){}}class j{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ${constructor(e){this.t=e,this.currentUser=k.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new V;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new V,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new V)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||M(),new q(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||M(),new k(e)}}class z{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=k.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class K{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new z(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(k.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class H{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,P("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||M(),this.R=e.token,new H(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function W(e,t){return e<t?-1:e>t?1:0}function X(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new Y(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Y(0,0))}static max(){return new J(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,n){void 0===t?t=0:t>e.length&&M(),void 0===n?n=e.length-t:n>e.length-t&&M(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Z.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof Z?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ee extends Z{construct(e,t,n){return new ee(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new F(U.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}let et=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends Z{construct(e,t,n){return new en(e,t,n)}static isValidIdentifier(e){return et.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new en(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new F(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new F(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new F(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new F(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(t)}static emptyPath(){return new en([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.path=e}static fromPath(e){return new er(ee.fromString(e))}static fromName(e){return new er(ee.fromString(e).popFirst(5))}static empty(){return new er(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ee.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new er(new ee(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ei.UNKNOWN_ID=-1;class es{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new es(J.min(),er.empty(),-1)}static max(){return new es(J.max(),er.empty(),-1)}}class eo{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(e){if(e.code!==U.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new el((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof el?t:el.resolve(t)}catch(e){return el.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):el.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):el.reject(t)}static resolve(e){return new el((t,n)=>{t(e)})}static reject(e){return new el((t,n)=>{n(e)})}static waitFor(e){return new el((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=el.resolve(!1);for(let n of e)t=t.next(e=>e?el.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new el((n,r)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new el((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function eu(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function eh(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ef(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ep(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}ec.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t){this.comparator=e,this.root=t||ey.EMPTY}insert(e,t){return new eg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ey.BLACK,null,null))}remove(e){return new eg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ey.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new em(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new em(this.root,e,this.comparator,!1)}getReverseIterator(){return new em(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new em(this.root,e,this.comparator,!0)}}class em{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ey{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ey.RED,this.left=null!=r?r:ey.EMPTY,this.right=null!=i?i:ey.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ey(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ey.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ey.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ey.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ey.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();let e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}ey.EMPTY=null,ey.RED=!0,ey.BLACK=!1,ey.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ey(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.comparator=e,this.data=new eg(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ew(this.data.getIterator())}getIteratorFrom(e){return new ew(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ev)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new ev(this.comparator);return t.data=e,t}}class ew{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new e_([])}unionWith(e){let t=new ev(en.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new e_(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return X(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.binaryString=e}static fromBase64String(e){return new eE(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eb("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new eE(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}eE.EMPTY_BYTE_STRING=new eE("");let eI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eT(e){if(e||M(),"string"==typeof e){let t=0,n=eI.exec(e);if(n||M(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:eC(e.seconds),nanos:eC(e.nanos)}}function eC(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eS(e){return"string"==typeof e?eE.fromBase64String(e):eE.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ek(e){let t=e.mapValue.fields.__previous_value__;return eA(t)?ek(t):t}function eN(e){let t=eT(e.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t,n,r,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class eO{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new eO("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof eO&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eP={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function eD(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eA(e)?4:eH(e)?9007199254740991:10:M()}function eL(e,t){if(e===t)return!0;let n=eD(e);if(n!==eD(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eN(e).isEqual(eN(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eT(e.timestampValue),r=eT(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eS(e.bytesValue).isEqual(eS(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eC(e.geoPointValue.latitude)===eC(t.geoPointValue.latitude)&&eC(e.geoPointValue.longitude)===eC(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eC(e.integerValue)===eC(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=eC(e.doubleValue),r=eC(t.doubleValue);return n===r?eh(n)===eh(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return X(e.arrayValue.values||[],t.arrayValue.values||[],eL);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ed(n)!==ed(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eL(n[e],r[e])))return!1;return!0}(e,t);default:return M()}}function ex(e,t){return void 0!==(e.values||[]).find(e=>eL(e,t))}function eM(e,t){if(e===t)return 0;let n=eD(e),r=eD(t);if(n!==r)return W(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=eC(e.integerValue||e.doubleValue),r=eC(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eU(e.timestampValue,t.timestampValue);case 4:return eU(eN(e),eN(t));case 5:return W(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eS(e),r=eS(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=W(n[e],r[e]);if(0!==t)return t}return W(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=W(eC(e.latitude),eC(t.latitude));return 0!==n?n:W(eC(e.longitude),eC(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=eM(n[e],r[e]);if(t)return t}return W(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===eP.mapValue&&t===eP.mapValue)return 0;if(e===eP.mapValue)return 1;if(t===eP.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=W(r[e],s[e]);if(0!==t)return t;let o=eM(n[r[e]],i[s[e]]);if(0!==o)return o}return W(r.length,s.length)}(e.mapValue,t.mapValue);default:throw M()}}function eU(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return W(e,t);let n=eT(e),r=eT(t),i=W(n.seconds,r.seconds);return 0!==i?i:W(n.nanos,r.nanos)}function eF(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eT(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eS(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,er.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eF(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${eF(e.fields[i])}`;return n+"}"}(e.mapValue):M()}function eV(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eq(e){return!!e&&"integerValue"in e}function eB(e){return!!e&&"arrayValue"in e}function ej(e){return!!e&&"nullValue"in e}function e$(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ez(e){return!!e&&"mapValue"in e}function eK(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ef(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eK(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eK(e.arrayValue.values[n]);return t}return Object.assign({},e)}function eH(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(e){this.value=e}static empty(){return new eG({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!ez(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eK(t)}setAll(e){let t=en.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eK(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());ez(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eL(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ez(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(ef(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eG(eK(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new eQ(e,0,J.min(),J.min(),J.min(),eG.empty(),0)}static newFoundDocument(e,t,n,r){return new eQ(e,1,t,J.min(),n,r,0)}static newNoDocument(e,t){return new eQ(e,2,t,J.min(),J.min(),eG.empty(),0)}static newUnknownDocument(e,t){return new eQ(e,3,t,J.min(),J.min(),eG.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(J.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eG.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eG.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eQ&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eQ(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e,t){this.position=e,this.inclusive=t}}function eX(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(r=s.field.isKeyField()?er.comparator(er.fromName(o.referenceValue),n.key):eM(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function eY(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eL(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eZ{}class e0 extends eZ{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new e9(e,t,n):"array-contains"===t?new e7(e,n):"in"===t?new e8(e,n):"not-in"===t?new te(e,n):"array-contains-any"===t?new tt(e,n):new e0(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new e6(e,n):new e5(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eM(t,this.value)):null!==t&&eD(this.value)===eD(t)&&this.matchesComparison(eM(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e1 extends eZ{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new e1(e,t)}matches(e){return e2(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function e2(e){return"and"===e.op}function e4(e){for(let t of e.filters)if(t instanceof e1)return!1;return!0}class e9 extends e0{constructor(e,t,n){super(e,t,n),this.key=er.fromName(n.referenceValue)}matches(e){let t=er.comparator(e.key,this.key);return this.matchesComparison(t)}}class e6 extends e0{constructor(e,t){super(e,"in",t),this.keys=e3("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class e5 extends e0{constructor(e,t){super(e,"not-in",t),this.keys=e3("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function e3(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>er.fromName(e.referenceValue))}class e7 extends e0{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eB(t)&&ex(t.arrayValue,this.value)}}class e8 extends e0{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ex(this.value.arrayValue,t)}}class te extends e0{constructor(e,t){super(e,"not-in",t)}matches(e){if(ex(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ex(this.value.arrayValue,t)}}class tt extends e0{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eB(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ex(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function tr(e,t=null,n=[],r=[],i=null,s=null,o=null){return new tn(e,t,n,r,i,s,o)}function ti(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof e0)return t.field.canonicalString()+t.op.toString()+eF(t.value);if(e4(t)&&e2(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eF(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eF(e)).join(",")),e.ue=t}return e.ue}function ts(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof e0?n instanceof e0&&t.op===n.op&&t.field.isEqual(n.field)&&eL(t.value,n.value):t instanceof e1?n instanceof e1&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void M()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eY(e.startAt,t.startAt)&&eY(e.endAt,t.endAt)}function to(e){return er.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tu(e){return null!==e.collectionGroup}function tc(e){if(null===e.ce){let t;e.ce=[];let n=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new ev(en.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.ce.push(new eJ(t,r))}),n.has(en.keyField().canonicalString())||e.ce.push(new eJ(en.keyField(),r))}return e.ce}function th(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return tr(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eJ(e.field,t)});let n=e.endAt?new eW(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eW(e.startAt.position,e.startAt.inclusive):null;return tr(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,tc(e))),e.le}function td(e,t){let n=e.filters.concat([t]);return new ta(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tf(e,t,n){return new ta(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tp(e,t){return ts(th(e),th(t))&&e.limitType===t.limitType}function tg(e){return`${ti(th(e))}|lt:${e.limitType}`}function tm(e){var t;let n;return`Query(target=${n=(t=th(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof e0?`${t.field.canonicalString()} ${t.op} ${eF(t.value)}`:t instanceof e1?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eF(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eF(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function ty(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):er.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of tc(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=eX(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tc(e),t))&&(!e.endAt||!!function(e,t,n){let r=eX(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tc(e),t))}function tv(e){return(t,n)=>{let r=!1;for(let i of tc(e)){let e=function(e,t,n){let r=e.field.isKeyField()?er.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?eM(r,i):M()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return M()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ef(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return ep(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t_=new eg(er.comparator),tb=new eg(er.comparator);function tE(...e){let t=tb;for(let n of e)t=t.insert(n.key,n);return t}function tI(e){let t=tb;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tT(){return new tw(e=>e.toString(),(e,t)=>e.isEqual(t))}let tC=new eg(er.comparator),tS=new ev(er.comparator);function tA(...e){let t=tS;for(let n of e)t=t.add(n);return t}let tk=new ev(W);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eh(t)?"-0":t}}function tR(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(){this._=void 0}}function tP(e,t){return e instanceof tF?eq(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tD extends tO{}class tL extends tO{constructor(e){super(),this.elements=e}}function tx(e,t){let n=tq(t);for(let t of e.elements)n.some(e=>eL(e,t))||n.push(t);return{arrayValue:{values:n}}}class tM extends tO{constructor(e){super(),this.elements=e}}function tU(e,t){let n=tq(t);for(let t of e.elements)n=n.filter(e=>!eL(e,t));return{arrayValue:{values:n}}}class tF extends tO{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function tV(e){return eC(e.integerValue||e.doubleValue)}function tq(e){return eB(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(e,t){this.field=e,this.transform=t}}class tj{constructor(e,t){this.version=e,this.transformResults=t}}class t${constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new t$}static exists(e){return new t$(void 0,e)}static updateTime(e){return new t$(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tz(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tK{}function tH(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new t0(e.key,t$.none()):new tW(e.key,e.data,t$.none());{let n=e.data,r=eG.empty(),i=new ev(en.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new tX(e.key,r,new e_(i.toArray()),t$.none())}}function tG(e,t,n,r){return e instanceof tW?function(e,t,n,r){if(!tz(e.precondition,t))return n;let i=e.value.clone(),s=tZ(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof tX?function(e,t,n,r){if(!tz(e.precondition,t))return n;let i=tZ(e.fieldTransforms,r,t),s=t.data;return(s.setAll(tY(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tz(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tQ(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&X(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tL&&r instanceof tL||n instanceof tM&&r instanceof tM?X(n.elements,r.elements,eL):n instanceof tF&&r instanceof tF?eL(n.Pe,r.Pe):n instanceof tD&&r instanceof tD)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tW extends tK{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tX extends tK{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tY(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function tJ(e,t,n){var r;let i=new Map;e.length===n.length||M();for(let s=0;s<n.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(r=n[s],a instanceof tL?tx(a,l):a instanceof tM?tU(a,l):r))}return i}function tZ(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tD?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eA(t)&&(t=ek(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof tL?tx(e,s):e instanceof tM?tU(e,s):function(e,t){let n=tP(e,t),r=tV(n)+tV(e.Pe);return eq(n)&&eq(e.Pe)?tR(r):tN(e.serializer,r)}(e,s))}return r}class t0 extends tK{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t1 extends tK{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof tW?function(e,t,n){let r=e.value.clone(),i=tJ(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof tX?function(e,t,n){if(!tz(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tJ(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(tY(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tG(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tG(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tT();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=tH(s,o=t.has(r.key)?null:o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(J.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tA())}isEqual(e){return this.batchId===e.batchId&&X(this.mutations,e.mutations,(e,t)=>tQ(e,t))&&X(this.baseMutations,e.baseMutations,(e,t)=>tQ(e,t))}}class t4{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||M();let r=tC,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new t4(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t9{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e,t){this.count=e,this.unchangedNames=t}}function t5(e){if(void 0===e)return D("GRPC error has no .code"),U.UNKNOWN;switch(e){case p.OK:return U.OK;case p.CANCELLED:return U.CANCELLED;case p.UNKNOWN:return U.UNKNOWN;case p.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case p.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case p.INTERNAL:return U.INTERNAL;case p.UNAVAILABLE:return U.UNAVAILABLE;case p.UNAUTHENTICATED:return U.UNAUTHENTICATED;case p.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case p.NOT_FOUND:return U.NOT_FOUND;case p.ALREADY_EXISTS:return U.ALREADY_EXISTS;case p.PERMISSION_DENIED:return U.PERMISSION_DENIED;case p.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case p.ABORTED:return U.ABORTED;case p.OUT_OF_RANGE:return U.OUT_OF_RANGE;case p.UNIMPLEMENTED:return U.UNIMPLEMENTED;case p.DATA_LOSS:return U.DATA_LOSS;default:return M()}}(g=p||(p={}))[g.OK=0]="OK",g[g.CANCELLED=1]="CANCELLED",g[g.UNKNOWN=2]="UNKNOWN",g[g.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",g[g.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",g[g.NOT_FOUND=5]="NOT_FOUND",g[g.ALREADY_EXISTS=6]="ALREADY_EXISTS",g[g.PERMISSION_DENIED=7]="PERMISSION_DENIED",g[g.UNAUTHENTICATED=16]="UNAUTHENTICATED",g[g.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",g[g.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",g[g.ABORTED=10]="ABORTED",g[g.OUT_OF_RANGE=11]="OUT_OF_RANGE",g[g.UNIMPLEMENTED=12]="UNIMPLEMENTED",g[g.INTERNAL=13]="INTERNAL",g[g.UNAVAILABLE=14]="UNAVAILABLE",g[g.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t3=new r([4294967295,4294967295],0);function t7(e){let t=(new TextEncoder).encode(e),n=new i;return n.update(t),new Uint8Array(n.digest())}function t8(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class ne{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nt(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new nt(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nt(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=r.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(r.fromNumber(n)));return 1===i.compare(t3)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;let[t,n]=t8(t7(e));for(let e=0;e<this.hashCount;e++){let r=this.Ee(t,n,e);if(!this.de(r))return!1}return!0}static create(e,t,n){let r=new ne(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ie)return;let[t,n]=t8(t7(e));for(let e=0;e<this.hashCount;e++){let r=this.Ee(t,n,e);this.Ae(r)}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nn(J.min(),r,new eg(W),t_,tA())}}class nr{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nr(n,t,tA(),tA(),tA())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class ns{constructor(e,t){this.targetId=e,this.me=t}}class no{constructor(e,t,n=eE.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class na{constructor(){this.fe=0,this.ge=nc(),this.pe=eE.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=tA(),t=tA(),n=tA();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:M()}}),new nr(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=nc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||M()}Ne(){this.we=!0,this.ye=!0}}class nl{constructor(e){this.Le=e,this.Be=new Map,this.ke=t_,this.qe=nu(),this.Qe=new eg(W)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,n)=>{this.ze(n)&&t(n)})}He(e){let t=e.targetId,n=e.me.count,r=this.Je(t);if(r){let i=r.target;if(to(i)){if(0===n){let e=new er(i.path);this.Ue(t,e,eQ.newNoDocument(e,J.min()))}else 1===n||M()}else{let r=this.Ye(t);if(r!==n){let n=this.Ze(e),i=n?this.Xe(n,e,r):1;0!==i&&(this.je(t),this.Qe=this.Qe.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Ze(e){let t,n;let r=e.me.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=r;try{t=eS(i).toUint8Array()}catch(e){if(e instanceof eb)return L("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new ne(t,s,o)}catch(e){return L(e instanceof nt?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ie?null:n}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){let n=this.Le.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)}),r}rt(e){let t=new Map;this.Be.forEach((n,r)=>{let i=this.Je(r);if(i){if(n.current&&to(i.target)){let t=new er(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,eQ.newNoDocument(t,e))}n.be&&(t.set(r,n.Ce()),n.ve())}});let n=tA();this.qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ke.forEach((t,n)=>n.setReadTime(e));let r=new nn(e,t,this.Qe,this.ke,n);return this.ke=t_,this.qe=nu(),this.Qe=new eg(W),r}$e(e,t){if(!this.ze(e))return;let n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;let r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new na,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ev(W),this.qe=this.qe.insert(e,t)),t}ze(e){let t=null!==this.Je(e);return t||P("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new na),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function nu(){return new eg(er.comparator)}function nc(){return new eg(er.comparator)}let nh={asc:"ASCENDING",desc:"DESCENDING"},nd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nf={and:"AND",or:"OR"};class np{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ng(e,t){return e.useProto3Json||null==t?t:{value:t}}function nm(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ny(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nv(e){return e||M(),J.fromTimestamp(function(e){let t=eT(e);return new Y(t.seconds,t.nanos)}(e))}function nw(e,t){return n_(e,t).canonicalString()}function n_(e,t){let n=new ee(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function nb(e){let t=ee.fromString(e);return nR(t)||M(),t}function nE(e,t){return nw(e.databaseId,t.path)}function nI(e,t){let n=nb(t);if(n.get(1)!==e.databaseId.projectId)throw new F(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new F(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new er(nS(n))}function nT(e,t){return nw(e.databaseId,t)}function nC(e){return new ee(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nS(e){return e.length>4&&"documents"===e.get(4)||M(),e.popFirst(5)}function nA(e,t,n){return{name:nE(e,t),fields:n.value.mapValue.fields}}function nk(e){return{fieldPath:e.canonicalString()}}function nN(e){return en.fromServerFormat(e.fieldPath)}function nR(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,t,n,r,i=J.min(),s=J.min(),o=eE.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new nO(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nO(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nO(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nO(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.ct=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(eC(e.integerValue));else if("doubleValue"in e){let n=eC(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),eh(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n&&(n=eT(n)),t.At(`${n.seconds||""}`),t.dt(n.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(eS(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?eH(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):M()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let n=e.fields||{};for(let e of(this.Et(t,55),Object.keys(n)))this.Rt(e,t),this.It(n[e],t)}wt(e,t){let n=e.values||[];for(let e of(this.Et(t,50),n))this.It(e,t)}gt(e,t){this.Et(t,37),er.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}nD.bt=new nD;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(){this._n=new nx}addToCollectionParentIndex(e,t){return this._n.add(t),el.resolve()}getCollectionParents(e,t){return el.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return el.resolve()}deleteFieldIndex(e,t){return el.resolve()}deleteAllFieldIndexes(e){return el.resolve()}createTargetIndexes(e,t){return el.resolve()}getDocumentsMatchingTarget(e,t){return el.resolve(null)}getIndexType(e,t){return el.resolve(0)}getFieldIndexes(e,t){return el.resolve([])}getNextCollectionGroupToUpdate(e){return el.resolve(null)}getMinOffset(e,t){return el.resolve(es.min())}getMinOffsetFromCollectionGroup(e,t){return el.resolve(es.min())}updateCollectionGroup(e,t,n){return el.resolve()}updateIndexEntries(e,t){return el.resolve()}}class nx{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ev(ee.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ev(ee.comparator)).toArray()}}new Uint8Array(0);class nM{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new nM(e,nM.DEFAULT_COLLECTION_PERCENTILE,nM.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nM.DEFAULT_COLLECTION_PERCENTILE=10,nM.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nM.DEFAULT=new nM(41943040,nM.DEFAULT_COLLECTION_PERCENTILE,nM.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nM.DISABLED=new nM(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new nU(0)}static Ln(){return new nU(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(){this.changes=new tw(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eQ.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?el.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tG(n.mutation,e,e_.empty(),Y.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tA()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tA()){let r=tT();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tE();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tT();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tA()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=t_,s=tT(),o=tT();return t.forEach((e,t)=>{let o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof tX)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),tG(o.mutation,t,o.mutation.getFieldMask(),Y.now())):s.set(t.key,e_.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new nV(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){let n=tT(),r=new eg((e,t)=>e-t),i=tA();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=n.get(e)||e_.empty();o=i.applyToLocalView(s,o),n.set(e,o);let a=(r.get(i.batchId)||tA()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{let s=[],o=r.getReverseIterator();for(;o.hasNext();){let r=o.getNext(),a=r.key,l=r.value,u=tT();l.forEach(e=>{if(!i.has(e)){let r=tH(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return el.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return er.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):el.resolve(tT()),o=-1,a=i;return s.next(t=>el.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?el.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,tA())).next(e=>({batchId:o,changes:tI(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new er(t)).next(e=>{let t=tE();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tE();return this.indexManager.getCollectionParents(e,i).next(o=>el.forEach(o,o=>{let a=new ta(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,eQ.newInvalidDocument(r)))});let n=tE();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&tG(s.mutation,r,e_.empty(),Y.now()),ty(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return el.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:nv(t.createTime)}),el.resolve()}getNamedQuery(e,t){return el.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=nb(e);return 4===t.length?ee.emptyPath():nS(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){1===s||M();let e=i.from[0];e.allDescendants?o=e.collectionId:r=r.child(e.collectionId)}let a=[];i.where&&(a=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nN(e.unaryFilter.field);return e0.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nN(e.unaryFilter.field);return e0.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nN(e.unaryFilter.field);return e0.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nN(e.unaryFilter.field);return e0.create(i,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):void 0!==t.fieldFilter?e0.create(nN(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?e1.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op)):M()}(e);return n instanceof e1&&e4(t=n)&&e2(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new eJ(nN(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new eW(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new eW(e.values||[],t)}(i.endAt)),new ta(r,o,l,a,u,"F",c,h)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tf(t,t.limit,"L"):t}(t.bundledQuery),readTime:nv(t.readTime)}),el.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(){this.overlays=new eg(er.comparator),this.hr=new Map}getOverlay(e,t){return el.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tT();return el.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),el.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.hr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(n)),el.resolve()}getOverlaysForCollection(e,t,n){let r=tT(),i=t.length+1,s=new er(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return el.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new eg((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tT(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=tT(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return el.resolve(o)}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new t9(t,n));let i=this.hr.get(t);void 0===i&&(i=tA(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n${constructor(){this.Pr=new ev(nz.Ir),this.Tr=new ev(nz.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let n=new nz(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new nz(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new er(new ee([])),n=new nz(t,e),r=new nz(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Ar(e),i.push(e.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new er(new ee([])),n=new nz(t,e),r=new nz(t,e+1),i=tA();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new nz(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nz{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return er.comparator(e.key,t.key)||W(e.pr,t.pr)}static Er(e,t){return W(e.pr,t.pr)||er.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new ev(nz.Ir)}checkEmpty(e){return el.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new t2(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.wr=this.wr.add(new nz(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return el.resolve(s)}lookupMutationBatch(e,t){return el.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.br(t+1),r=n<0?0:n;return el.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return el.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return el.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nz(t,0),r=new nz(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],e=>{let t=this.Sr(e.pr);i.push(t)}),el.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ev(W);return t.forEach(e=>{let t=new nz(e,0),r=new nz(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],e=>{n=n.add(e.pr)})}),el.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;er.isDocumentKey(i)||(i=i.child(""));let s=new nz(new er(i),0),o=new ev(W);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.pr)),!0)},s),el.resolve(this.Dr(o))}Dr(e){let t=[];return e.forEach(e=>{let n=this.Sr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Cr(t.batchId,"removed")||M(),this.mutationQueue.shift();let n=this.wr;return el.forEach(t.mutations,r=>{let i=new nz(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){let n=new nz(t,0),r=this.wr.firstAfterOrEqual(n);return el.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,el.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(e){this.vr=e,this.docs=new eg(er.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return el.resolve(n?n.document.mutableCopy():eQ.newInvalidDocument(t))}getEntries(e,t){let n=t_;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eQ.newInvalidDocument(e))}),el.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=t_,s=t.path,o=new er(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=er.comparator(e.documentKey,t.documentKey))?n:W(e.largestBatchId,t.largestBatchId)}(new es(o.readTime,o.key,-1),n)||(r.has(o.key)||ty(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return el.resolve(i)}getAllFromCollectionGroup(e,t,n,r){M()}Fr(e,t){return el.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nG(this)}getSize(e){return el.resolve(this.size)}}class nG extends nF{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)}),el.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nQ{constructor(e){this.persistence=e,this.Mr=new tw(e=>ti(e),ts),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Or=0,this.Nr=new n$,this.targetCount=0,this.Lr=nU.Nn()}forEachTarget(e,t){return this.Mr.forEach((e,n)=>t(n)),el.resolve()}getLastRemoteSnapshotVersion(e){return el.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return el.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),el.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),el.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new nU(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,el.resolve()}updateTargetData(e,t){return this.qn(t),el.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,el.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Mr.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),el.waitFor(i).next(()=>r)}getTargetCount(e){return el.resolve(this.targetCount)}getTargetData(e,t){let n=this.Mr.get(t)||null;return el.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),el.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),el.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),el.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Nr.gr(t);return el.resolve(n)}containsKey(e,t){return el.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{constructor(e,t){this.Br={},this.overlays={},this.kr=new ec(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new nQ(this),this.indexManager=new nL,this.remoteDocumentCache=new nH(e=>this.referenceDelegate.Kr(e)),this.serializer=new nP(t),this.$r=new nB(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nj,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new nK(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){P("MemoryPersistence","Starting transaction:",e);let r=new nX(this.kr.next());return this.referenceDelegate.Ur(),n(r).next(e=>this.referenceDelegate.Wr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gr(e,t){return el.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,t)))}}class nX extends eo{constructor(e){super(),this.currentSequenceNumber=e}}class nY{constructor(e){this.persistence=e,this.zr=new n$,this.jr=null}static Hr(e){return new nY(e)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),el.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),el.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),el.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return el.forEach(this.Jr,n=>{let r=er.fromPath(n);return this.Yr(e,r).next(e=>{e||t.removeEntry(r,J.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return el.or([()=>el.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=tA(),r=tA();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new nJ(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,b.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,b.z$)())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ji(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Hi(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new nZ;return this.Ji(e,t,n).next(r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)})}).next(()=>i.result)}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(O()<=_.in.DEBUG&&P("QueryEngine","SDK will not create cache indexes for query:",tm(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),el.resolve()):(O()<=_.in.DEBUG&&P("QueryEngine","Query:",tm(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(O()<=_.in.DEBUG&&P("QueryEngine","The SDK decides to create cache indexes for query:",tm(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,th(t))):el.resolve())}ji(e,t){if(tl(t))return el.resolve(null);let n=th(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=th(t=tf(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tA(...r);return this.zi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,tf(t,null,"F")):this.es(e,s,t,n)}))})))}Hi(e,t,n,r){return tl(t)||r.isEqual(J.min())?el.resolve(null):this.zi.getDocuments(e,n).next(i=>{let s=this.Zi(t,i);return this.Xi(t,s,n,r)?el.resolve(null):(O()<=_.in.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tm(t)),this.es(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new es(J.fromTimestamp(1e9===r?new Y(n+1,0):new Y(n,r)),er.empty(),-1)}(r,0)).next(e=>e))})}Zi(e,t){let n=new ev(tv(e));return t.forEach((t,r)=>{ty(e,r)&&(n=n.add(r))}),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return O()<=_.in.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",tm(t)),this.zi.getDocumentsMatchingQuery(e,t,es.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new eg(W),this.rs=new tw(e=>ti(e),ts),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nq(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}async function n2(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],o=tA();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(n,o).next(e=>({us:e,removedBatchIds:i,addedBatchIds:s}))})})}function n4(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}async function n9(e,t,n){let r=e.ns.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!eu(e))throw e;P("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ns=e.ns.remove(t),e.rs.delete(r.target)}function n6(e,t,n){let r=J.min(),i=tA();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.rs.get(n);return void 0!==r?el.resolve(e.ns.get(r)):e.Qr.getTargetData(t,n)})(e,s,th(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ts.getDocumentsMatchingQuery(s,t,n?r:J.min(),n?i:tA())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ss.get(r)||J.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ss.set(r,s),{documents:n,hs:i}}))}class n5{constructor(){this.activeTargetIds=tk}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class n3{constructor(){this.no=new n5,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new n5,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){for(let e of(P("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))e(0)}ao(){for(let e of(P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let re=null;function rt(){return null===re?re=268435456+Math.round(2147483648*Math.random()):re++,"0x"+re.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri="WebChannelConnection";class rs extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.wo=t+"://"+e.host,this.So=`projects/${n}/databases/${r}`,this.bo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Do(){return!1}Co(e,t,n,r,i){let s=rt(),o=this.vo(e,t.toUriEncodedString());P("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);let a={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(a,r,i),this.Mo(e,o,a,n).then(t=>(P("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw L("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}xo(e,t,n,r,i,s){return this.Co(e,t,n,r,i)}Fo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+N}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}vo(e,t){let n=rn[e];return`${this.wo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,n,r){let i=rt();return new Promise((o,a)=>{let c=new s;c.setWithCredentials(!0),c.listenOnce(l.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case u.NO_ERROR:let t=c.getResponseJson();P(ri,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),o(t);break;case u.TIMEOUT:P(ri,`RPC '${e}' ${i} timed out`),a(new F(U.DEADLINE_EXCEEDED,"Request time out"));break;case u.HTTP_ERROR:let n=c.getStatus();if(P(ri,`RPC '${e}' ${i} failed with status:`,n,"response text:",c.getResponseText()),n>0){let e=c.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(t)>=0?t:U.UNKNOWN}(t.status);a(new F(e,t.message))}else a(new F(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(U.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{P(ri,`RPC '${e}' ${i} completed.`)}});let h=JSON.stringify(r);P(ri,`RPC '${e}' ${i} sending request:`,r),c.send(t,"POST",h,n,15)})}Oo(e,t,n){let r=rt(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=f(),l=d(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;void 0!==g&&(u.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(u.xmlHttpFactory=new o({})),this.Fo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;let m=i.join("");P(ri,`Creating RPC '${e}' stream ${r}: ${m}`,u);let y=s.createWebChannel(m,u),v=!1,w=!1,_=new rr({lo:t=>{w?P(ri,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(v||(P(ri,`Opening RPC '${e}' stream ${r} transport.`),y.open(),v=!0),P(ri,`RPC '${e}' stream ${r} sending:`,t),y.send(t))},ho:()=>y.close()}),b=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return b(y,a.EventType.OPEN,()=>{w||(P(ri,`RPC '${e}' stream ${r} transport opened.`),_.mo())}),b(y,a.EventType.CLOSE,()=>{w||(w=!0,P(ri,`RPC '${e}' stream ${r} transport closed`),_.po())}),b(y,a.EventType.ERROR,t=>{w||(w=!0,L(ri,`RPC '${e}' stream ${r} transport errored:`,t),_.po(new F(U.UNAVAILABLE,"The operation could not be completed")))}),b(y,a.EventType.MESSAGE,t=>{var n;if(!w){let i=t.data[0];i||M();let s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){P(ri,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=p[e];if(void 0!==t)return t5(t)}(t),i=s.message;void 0===n&&(n=U.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),w=!0,_.po(new F(n,i)),y.close()}else P(ri,`RPC '${e}' stream ${r} received:`,i),_.yo(i)}}),b(l,h.STAT_EVENT,t=>{t.stat===c.PROXY?P(ri,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===c.NOPROXY&&P(ri,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function ro(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){return new np(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.No=n,this.Lo=r,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();let t=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),r=Math.max(0,t-n);r>0&&P("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){null!==this.qo&&(this.qo.skipDelay(),this.qo=null)}cancel(){null!==this.qo&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,n,r,i,s,o,a){this.oi=e,this.Go=n,this.zo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new rl(e,t)}Zo(){return 1===this.state||5===this.state||this.Xo()}Xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&null===this.Ho&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,4!==e?this.Yo.reset():t&&t.code===U.RESOURCE_EXHAUSTED?(D(t.toString()),D("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===U.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;let e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.jo===t&&this.u_(e,n)},t=>{e(()=>{let e=new F(U.UNKNOWN,"Fetching auth token failed: "+t.message);return this.c_(e)})})}u_(e,t){let n=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{n(()=>this.listener.Po())}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(e=>{n(()=>this.c_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rc extends ru{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:M(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||M(),eE.fromBase64String(i||"")):(void 0===i||i instanceof S||i instanceof Uint8Array||M(),eE.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new no(s,o,a,l&&new F(void 0===l.code?U.UNKNOWN:t5(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nI(e,r.document.name),s=nv(r.document.updateTime),o=r.document.createTime?nv(r.document.createTime):J.min(),a=new eG({mapValue:{fields:r.document.fields}}),l=eQ.newFoundDocument(i,s,o,a);n=new ni(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nI(e,r.document),s=r.readTime?nv(r.readTime):J.min(),o=eQ.newNoDocument(i,s);n=new ni([],r.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nI(e,r.document);n=new ni([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return M();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new t6(r,i);n=new ns(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return J.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?J.min():t.readTime?nv(t.readTime):J.min()}(e);return this.listener.h_(t,n)}P_(e){let t={};t.database=nC(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=to(r)?{documents:{documents:[nT(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=nT(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof e0?function(e){if("=="===e.op){if(e$(e.value))return{unaryFilter:{field:nk(e.field),op:"IS_NAN"}};if(ej(e.value))return{unaryFilter:{field:nk(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(e$(e.value))return{unaryFilter:{field:nk(e.field),op:"IS_NOT_NAN"}};if(ej(e.value))return{unaryFilter:{field:nk(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nk(e.field),op:nd[e.op],value:e.value}}}(t):t instanceof e1?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:nf[t.op],filters:n}}}(t):M()}(e1.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:nk(e.field),direction:nh[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=ng(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{_t:s,parent:i}}(e,r)._t}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ny(e,t.resumeToken);let r=ng(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(J.min())>0){n.readTime=nm(e,t.snapshotVersion.toTimestamp());let r=ng(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.i_(t)}I_(e){let t={};t.database=nC(this.serializer),t.removeTarget=e,this.i_(t)}}class rh extends ru{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||M(),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||M(),t.map(e=>{let t;return(t=e.updateTime?nv(e.updateTime):nv(n)).isEqual(J.min())&&(t=nv(n)),new tj(t,e.transformResults||[])})):[]),i=nv(e.commitTime);return this.listener.A_(i,r)}return e.writeResults&&0!==e.writeResults.length&&M(),this.T_=!0,this.listener.R_()}V_(){let e={};e.database=nC(this.serializer),this.i_(e)}d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tW)r={update:nA(e,t.key,t.value)};else if(t instanceof t0)r={delete:nE(e,t.key)};else if(t instanceof tX)r={update:nA(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof t1))return M();r={verify:nE(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tD)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tL)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tM)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tF)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw M()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nm(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:M()),r})(this.serializer,e))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.m_=!1}f_(){if(this.m_)throw new F(U.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,n,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Co(e,n_(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new F(U.UNKNOWN,e.toString())})}xo(e,t,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.xo(e,n_(t,n),r,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new F(U.UNKNOWN,e.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class rf{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,"Online"===e&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(D(t),this.y_=!1):P("OnlineStateTracker",t)}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(e=>{n.enqueueAndForget(async()=>{rI(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.M_.add(4),await rm(e),e.N_.set("Unknown"),e.M_.delete(4),await rg(e)}(this))})}),this.N_=new rf(n,r)}}async function rg(e){if(rI(e))for(let t of e.x_)await t(!0)}async function rm(e){for(let t of e.x_)await t(!1)}function ry(e,t){e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),rE(e)?rb(e):rV(e).Xo()&&rw(e,t))}function rv(e,t){let n=rV(e);e.F_.delete(t),n.Xo()&&r_(e,t),0===e.F_.size&&(n.Xo()?n.n_():rI(e)&&e.N_.set("Unknown"))}function rw(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}rV(e).P_(t)}function r_(e,t){e.L_.xe(t),rV(e).I_(t)}function rb(e){e.L_=new nl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),rV(e).start(),e.N_.w_()}function rE(e){return rI(e)&&!rV(e).Zo()&&e.F_.size>0}function rI(e){return 0===e.M_.size}async function rT(e){e.N_.set("Online")}async function rC(e){e.F_.forEach((t,n)=>{rw(e,t)})}async function rS(e,t){e.L_=void 0,rE(e)?(e.N_.D_(t),rb(e)):e.N_.set("Unknown")}async function rA(e,t,n){if(e.N_.set("Online"),t instanceof no&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.F_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.F_.delete(r),e.L_.removeTarget(r))}(e,t)}catch(n){P("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rk(e,n)}else if(t instanceof ni?e.L_.Ke(t):t instanceof ns?e.L_.He(t):e.L_.We(t),!n.isEqual(J.min()))try{let t=await n4(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.L_.rt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.F_.get(r);i&&e.F_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.F_.get(t);if(!r)return;e.F_.set(t,r.withResumeToken(eE.EMPTY_BYTE_STRING,r.snapshotVersion)),r_(e,t);let i=new nO(r.target,t,n,r.sequenceNumber);rw(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){P("RemoteStore","Failed to raise snapshot:",t),await rk(e,t)}}async function rk(e,t,n){if(!eu(t))throw t;e.M_.add(1),await rm(e),e.N_.set("Offline"),n||(n=()=>n4(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await rg(e)})}function rN(e,t){return t().catch(n=>rk(e,n,t))}async function rR(e){let t=rq(e),n=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;rI(e)&&e.v_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.v_.length&&t.n_();break}n=r.batchId,function(e,t){e.v_.push(t);let n=rq(e);n.Xo()&&n.E_&&n.d_(t.mutations)}(e,r)}catch(t){await rk(e,t)}rO(e)&&rP(e)}function rO(e){return rI(e)&&!rq(e).Zo()&&e.v_.length>0}function rP(e){rq(e).start()}async function rD(e){rq(e).V_()}async function rL(e){let t=rq(e);for(let n of e.v_)t.d_(n.mutations)}async function rx(e,t,n){let r=e.v_.shift(),i=t4.from(r,t,n);await rN(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await rR(e)}async function rM(e,t){t&&rq(e).E_&&await async function(e,t){var n;if(function(e){switch(e){default:return M();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}(n=t.code)&&n!==U.ABORTED){let n=e.v_.shift();rq(e).t_(),await rN(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await rR(e)}}(e,t),rO(e)&&rP(e)}async function rU(e,t){e.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");let n=rI(e);e.M_.add(3),await rm(e),n&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await rg(e)}async function rF(e,t){t?(e.M_.delete(2),await rg(e)):t||(e.M_.add(2),await rm(e),e.N_.set("Unknown"))}function rV(e){var t,n,r;return e.B_||(e.B_=(t=e.datastore,n=e.asyncQueue,r={Po:rT.bind(null,e),To:rC.bind(null,e),Ao:rS.bind(null,e),h_:rA.bind(null,e)},t.f_(),new rc(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.x_.push(async t=>{t?(e.B_.t_(),rE(e)?rb(e):e.N_.set("Unknown")):(await e.B_.stop(),e.L_=void 0)})),e.B_}function rq(e){var t,n,r;return e.k_||(e.k_=(t=e.datastore,n=e.asyncQueue,r={Po:()=>Promise.resolve(),To:rD.bind(null,e),Ao:rM.bind(null,e),R_:rL.bind(null,e),A_:rx.bind(null,e)},t.f_(),new rh(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.x_.push(async t=>{t?(e.k_.t_(),await rR(e)):(await e.k_.stop(),e.v_.length>0&&(P("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new V,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new rB(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new F(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rj(e,t){if(D("AsyncQueue",`${t}: ${e}`),eu(e))return new F(U.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(e){this.comparator=e?(t,n)=>e(t,n)||er.comparator(t.key,n.key):(e,t)=>er.comparator(e.key,t.key),this.keyedMap=tE(),this.sortedSet=new eg(this.comparator)}static emptySet(e){return new r$(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof r$)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new r$;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(){this.q_=new eg(er.comparator)}track(e){let t=e.doc.key,n=this.q_.get(t);n?0!==e.type&&3===n.type?this.q_=this.q_.insert(t,e):3===e.type&&1!==n.type?this.q_=this.q_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.q_=this.q_.remove(t):1===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):M():this.q_=this.q_.insert(t,e)}Q_(){let e=[];return this.q_.inorderTraversal((t,n)=>{e.push(n)}),e}}class rK{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new rK(e,t,r$.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tp(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rH{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class rG{constructor(){this.queries=new tw(e=>tg(e),tp),this.onlineState="Unknown",this.z_=new Set}}async function rQ(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.W_()&&t.G_()&&(n=2):(i=new rH,n=t.G_()?0:1);try{switch(n){case 0:i.K_=await e.onListen(r,!0);break;case 1:i.K_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=rj(n,`Initialization of query '${tm(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.U_.push(t),t.j_(e.onlineState),i.K_&&t.H_(i.K_)&&rJ(e)}async function rW(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.U_.indexOf(t);e>=0&&(i.U_.splice(e,1),0===i.U_.length?r=t.G_()?0:1:!i.W_()&&t.G_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function rX(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.U_)e.H_(r)&&(n=!0);i.K_=r}}n&&rJ(e)}function rY(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.U_)e.onError(n);e.queries.delete(t)}function rJ(e){e.z_.forEach(e=>{e.next()})}(y=m||(m={})).J_="default",y.Cache="cache";class rZ{constructor(e,t,n){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new rK(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){return!(e.fromCache&&this.G_())||(!this.options.ra||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ea(e){if(e.docChanges.length>0)return!0;let t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}na(e){e=rK.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==m.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.key=e}}class r1{constructor(e){this.key=e}}class r2{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=tA(),this.mutatedKeys=tA(),this.Ia=tv(e),this.Ta=new r$(this.Ia)}get Ea(){return this.la}da(e,t){let n=t?t.Aa:new rz,r=t?t.Ta:this.Ta,i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1,a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=ty(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Ra(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Ia(c,a)>0||l&&0>this.Ia(c,l))&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ta:s,Aa:n,Xi:o,mutatedKeys:i}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;let s=e.Aa.Q_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return n(e)-n(t)})(e.type,t.type)||this.Ia(e.doc,t.doc)),this.Va(n),r=null!=r&&r;let o=t&&!r?this.ma():[],a=0===this.Pa.size&&this.current&&!r?1:0,l=a!==this.ha;return(this.ha=a,0!==s.length||l)?{snapshot:new rK(this.query,e.Ta,i,s,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:o}:{fa:o}}j_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new rz,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(e=>this.la=this.la.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=e.current)}ma(){if(!this.current)return[];let e=this.Pa;this.Pa=tA(),this.Ta.forEach(e=>{this.ga(e.key)&&(this.Pa=this.Pa.add(e.key))});let t=[];return e.forEach(e=>{this.Pa.has(e)||t.push(new r1(e))}),this.Pa.forEach(n=>{e.has(n)||t.push(new r0(n))}),t}pa(e){this.la=e.hs,this.Pa=tA();let t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return rK.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,0===this.ha,this.hasCachedResults)}}class r4{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class r9{constructor(e){this.key=e,this.wa=!1}}class r6{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new tw(e=>tg(e),tp),this.Da=new Map,this.Ca=new Set,this.va=new eg(er.comparator),this.Fa=new Map,this.Ma=new n$,this.xa={},this.Oa=new Map,this.Na=nU.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return!0===this.La}}async function r5(e,t,n=!0){let r;let i=iw(e),s=i.ba.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ya()):r=await r7(i,t,n,!0),r}async function r3(e,t){let n=iw(e);await r7(n,t,!0,!1)}async function r7(e,t,n,r){var i,s;let o;let a=await (i=e.localStore,s=th(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Qr.getTargetData(e,s).next(n=>n?(t=n,el.resolve(t)):i.Qr.allocateTargetId(e).next(n=>(t=new nO(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.ns.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.ns=i.ns.insert(e.targetId,e),i.rs.set(s,e.targetId)),e})),l=a.targetId,u=n?e.sharedClientState.addLocalQueryTarget(l):"not-current";return r&&(o=await r8(e,t,l,"current"===u,a.resumeToken)),e.isPrimaryClient&&n&&ry(e.remoteStore,a),o}async function r8(e,t,n,r,i){e.Ba=(t,n,r)=>(async function(e,t,n,r){let i=t.view.da(n);i.Xi&&(i=await n6(e.localStore,t.query,!1).then(({documents:e})=>t.view.da(e,i)));let s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return ip(e,t.targetId,a.fa),a.snapshot})(e,t,n,r);let s=await n6(e.localStore,t,!0),o=new r2(t,s.hs),a=o.da(s.documents),l=nr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);ip(e,n,u.fa);let c=new r4(t,n,o);return e.ba.set(t,c),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),u.snapshot}async function ie(e,t,n){let r=e.ba.get(t),i=e.Da.get(r.targetId);if(i.length>1)return e.Da.set(r.targetId,i.filter(e=>!tp(e,t))),void e.ba.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await n9(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&rv(e.remoteStore,r.targetId),ih(e,r.targetId)}).catch(ea)):(ih(e,r.targetId),await n9(e.localStore,r.targetId,!0))}async function it(e,t){let n=e.ba.get(t),r=e.Da.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),rv(e.remoteStore,n.targetId))}async function ir(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=ia.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=il.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=Y.now(),s=t.reduce((e,t)=>e.add(t.key),tA());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=t_,l=tA();return e.os.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tP(r.transform,e||null);null!=i&&(null===n&&(n=eG.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new tX(e.key,t,function e(t){let n=[];return ef(t.fields,(t,r)=>{let i=new en([t]);if(ez(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new e_(n)}(t.value.mapValue),t$.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tI(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.xa[i.currentUser.toKey()])||(e=new eg(W)),e=e.insert(r,n),i.xa[i.currentUser.toKey()]=e,await im(i,s.changes),await rR(i.remoteStore)}catch(t){let e=rj(t,"Failed to persist write");n.reject(e)}}async function ii(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let o,a;let l=e.os.newChangeBuffer({trackRemovals:!0});r=e.ns;let u=[];t.targetChanges.forEach((s,o)=>{var a;let l=r.get(o);if(!l)return;u.push(e.Qr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Qr.addMatchingKeys(i,s.addedDocuments,o)));let c=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(eE.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(o,c),a=c,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Qr.updateTargetData(i,c))});let c=t_,h=tA();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,o=tA(),a=tA(),s.forEach(e=>o=o.add(e)),l.getEntries(i,o).next(e=>{let t=t_;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(n)),r.isNoDocument()&&r.version.isEqual(J.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):P("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{cs:t,ls:a}})).next(e=>{c=e.cs,h=e.ls})),!n.isEqual(J.min())){let t=e.Qr.getLastRemoteSnapshotVersion(i).next(t=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return el.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(t=>(e.ns=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Fa.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||M(),t.addedDocuments.size>0?r.wa=!0:t.modifiedDocuments.size>0?r.wa||M():t.removedDocuments.size>0&&(r.wa||M(),r.wa=!1))}),await im(e,n,t)}catch(e){await ea(e)}}function is(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ba.forEach((e,n)=>{let r=n.view.j_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.U_)e.j_(t)&&(n=!0)}),n&&rJ(r),i.length&&e.Sa.h_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function io(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Fa.get(t),i=r&&r.key;if(i){let n=new eg(er.comparator);n=n.insert(i,eQ.newNoDocument(i,J.min()));let r=tA().add(i),s=new nn(J.min(),new Map,new eg(W),n,r);await ii(e,s),e.va=e.va.remove(i),e.Fa.delete(t),ig(e)}else await n9(e.localStore,t,!1).then(()=>ih(e,t,n)).catch(ea)}async function ia(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),o=el.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||M(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tA();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});ic(e,r,null),iu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await im(e,i)}catch(e){await ea(e)}}async function il(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||M(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});ic(e,t,n),iu(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await im(e,i)}catch(e){await ea(e)}}function iu(e,t){(e.Oa.get(t)||[]).forEach(e=>{e.resolve()}),e.Oa.delete(t)}function ic(e,t,n){let r=e.xa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.xa[e.currentUser.toKey()]=r}}function ih(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Da.get(t)))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Vr(t).forEach(t=>{e.Ma.containsKey(t)||id(e,t)})}function id(e,t){e.Ca.delete(t.path.canonicalString());let n=e.va.get(t);null!==n&&(rv(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),ig(e))}function ip(e,t,n){for(let r of n)r instanceof r0?(e.Ma.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(P("SyncEngine","New document in limbo: "+n),e.Ca.add(r),ig(e))}(e,r)):r instanceof r1?(P("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||id(e,r.key)):M()}function ig(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){let t=e.Ca.values().next().value;e.Ca.delete(t);let n=new er(ee.fromString(t)),r=e.Na.next();e.Fa.set(r,new r9(n)),e.va=e.va.insert(n,r),ry(e.remoteStore,new nO(th(new ta(n.path)),r,"TargetPurposeLimboResolution",ec.oe))}}async function im(e,t,n){let r=[],i=[],s=[];e.ba.isEmpty()||(e.ba.forEach((o,a)=>{s.push(e.Ba(a,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=nJ.Ki(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Sa.h_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>el.forEach(t,t=>el.forEach(t.qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>el.forEach(t.Qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!eu(e))throw e;P("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ns.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.ns=e.ns.insert(t,i)}}}(e.localStore,i))}async function iy(e,t){var n;if(!e.currentUser.isEqual(t)){P("SyncEngine","User change. New user:",t.toKey());let r=await n2(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Oa.forEach(e=>{e.forEach(e=>{e.reject(new F(U.CANCELLED,n))})}),e.Oa.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await im(e,r.us)}}function iv(e,t){let n=e.Fa.get(t);if(n&&n.wa)return tA().add(n.key);{let n=tA(),r=e.Da.get(t);if(!r)return n;for(let t of r){let r=e.ba.get(t);n=n.unionWith(r.view.Ea)}return n}}function iw(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=ii.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=io.bind(null,e),e.Sa.h_=rX.bind(null,e.eventManager),e.Sa.ka=rY.bind(null,e.eventManager),e}class i_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ra(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new n1(t,new n0,e.initialUser,this.serializer)}createPersistence(e){return new nW(nY.Hr,this.serializer)}createSharedClientState(e){return new n3}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ib{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>is(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=iy.bind(null,this.syncEngine),await rF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rG}createDatastore(e){let t=ra(e.databaseInfo.databaseId),n=new rs(e.databaseInfo);return new rd(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new rp(t,this.datastore,e.asyncQueue,e=>is(this.syncEngine,e,0),n8.D()?new n8:new n7)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){let a=new r6(e,t,n,r,i,s);return o&&(a.La=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){P("RemoteStore","RemoteStore shutting down."),e.M_.add(5),await rm(e),e.O_.shutdown(),e.N_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):D("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=k.UNAUTHENTICATED,this.clientId=Q.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{P("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(P("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new V;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rj(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function iT(e,t){e.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await n2(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function iC(e,t){e.asyncQueue.verifyOperationInProgress();let n=await iS(e);P("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>rU(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rU(t.remoteStore,n)),e._onlineComponents=t}async function iS(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await iT(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;L("Error using user provided cache. Falling back to memory cache: "+t),await iT(e,new i_)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await iT(e,new i_)}return e._offlineComponents}async function iA(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await iC(e,e._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await iC(e,new ib))),e._onlineComponents}async function ik(e){let t=await iA(e),n=t.eventManager;return n.onListen=r5.bind(null,t.syncEngine),n.onUnlisten=ie.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=r3.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=it.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iR=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(e,t,n){if(!n)throw new F(U.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function iP(e){if(!er.isDocumentKey(e))throw new F(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function iD(e){if(er.isDocumentKey(e))throw new F(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function iL(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":M()}function ix(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new F(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=iL(e);throw new F(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new F(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new F(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new F(U.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iN(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iU{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iM({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new F(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iM(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new B;switch(e.type){case"firstParty":return new K(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new F(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=iR.get(e);t&&(P("ComponentProvider","Removing Datastore"),iR.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new iF(this.firestore,e,this._query)}}class iV{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new iq(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new iV(this.firestore,e,this._key)}}class iq extends iF{constructor(e,t,n){super(e,t,new ta(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new iV(this.firestore,null,new er(e))}withConverter(e){return new iq(this.firestore,e,this._path)}}function iB(e,t,...n){if(e=(0,b.m9)(e),iO("collection","path",t),e instanceof iU){let r=ee.fromString(t,...n);return iD(r),new iq(e,null,r)}{if(!(e instanceof iV||e instanceof iq))throw new F(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(ee.fromString(t,...n));return iD(r),new iq(e.firestore,null,r)}}function ij(e,t,...n){if(e=(0,b.m9)(e),1==arguments.length&&(t=Q.newId()),iO("doc","path",t),e instanceof iU){let r=ee.fromString(t,...n);return iP(r),new iV(e,null,new er(r))}{if(!(e instanceof iV||e instanceof iq))throw new F(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(ee.fromString(t,...n));return iP(r),new iV(e.firestore,e instanceof iq?e.converter:null,new er(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new rl(this,"async_queue_retry"),this.hu=()=>{let e=ro();e&&P("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};let e=ro();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;let t=ro();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});let t=new V;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!eu(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){let t=this.iu.then(()=>(this.uu=!0,e().catch(e=>{let t;throw this.au=e,this.uu=!1,D("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.uu=!1,e))));return this.iu=t,t}enqueueAfterDelay(e,t,n){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);let r=rB.createAndSchedule(this,e,t,n,e=>this.Eu(e));return this._u.push(r),r}Pu(){this.au&&M()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(let t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{for(let t of(this._u.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this._u))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){let t=this._u.indexOf(e);this._u.splice(t,1)}}class iz extends iU{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new i$,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iG(this),this._firestoreClient.terminate()}}function iK(e,t){let n="object"==typeof e?e:(0,v.Mq)(),r=(0,v.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,b.P0)("firestore");e&&function(e,t,n,r={}){var i;let s=(e=ix(e,iU))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&L("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=k.MOCK_USER;else{t=(0,b.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new F(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new k(s)}e._authCredentials=new j(new q(t,n))}}(r,...e)}return r}function iH(e){return e._firestoreClient||iG(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function iG(e){var t,n,r,i;let s=e._freezeSettings(),o=(i=e._databaseId,new eR(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,iN(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new iI(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iQ{constructor(e){this._byteString=e}static fromBase64String(e){try{return new iQ(eE.fromBase64String(e))}catch(e){throw new F(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new iQ(eE.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iW{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new F(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iX{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iY{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iJ=/^__.*__$/;class iZ{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new tX(e,this.data,this.fieldMask,t,this.fieldTransforms):new tW(e,this.data,t,this.fieldTransforms)}}function i0(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class i1{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new i1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.wu(e),r}Su(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return st(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(0===e.length)throw this.Du("Document fields must not be empty");if(i0(this.fu)&&iJ.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class i2{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ra(e)}Fu(e,t,n,r=!1){return new i1({fu:e,methodName:t,vu:n,path:en.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function i4(e){let t=e._freezeSettings(),n=ra(e._databaseId);return new i2(e._databaseId,!!t.ignoreUndefinedProperties,n)}class i9 extends iX{_toFieldTransform(e){return new tB(e.path,new tD)}isEqual(e){return e instanceof i9}}function i6(e,t){if(i3(e=(0,b.m9)(e)))return i7("Unsupported field value:",t,e),i5(e,t);if(e instanceof iX)return function(e,t){if(!i0(t.fu))throw t.Du(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Du(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&4!==t.fu)throw t.Du("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=i6(i,t.bu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,b.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!eh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tR(r):tN(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=Y.fromDate(e);return{timestampValue:nm(t.serializer,n)}}if(e instanceof Y){let n=new Y(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nm(t.serializer,n)}}if(e instanceof iY)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof iQ)return{bytesValue:ny(t.serializer,e._byteString)};if(e instanceof iV){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Du(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:nw(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Du(`Unsupported field value: ${iL(e)}`)}(e,t)}function i5(e,t){let n={};return ep(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ef(e,(e,r)=>{let i=i6(r,t.pu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function i3(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Y||e instanceof iY||e instanceof iQ||e instanceof iV||e instanceof iX)}function i7(e,t,n){if(!i3(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=iL(n);throw"an object"===r?t.Du(e+" a custom object"):t.Du(e+" "+r)}}let i8=RegExp("[~\\*/\\[\\]]");function se(e,t,n){if(t.search(i8)>=0)throw st(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new iW(...t.split("."))._internalPath}catch(r){throw st(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function st(e,t,n,r,i){let s=r&&!r.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(U.INVALID_ARGUMENT,a+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new iV(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new sr(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(si("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class sr extends sn{data(){return super.data()}}function si(e,t){return"string"==typeof t?se(e,t):t instanceof iW?t._internalPath:t._delegate._internalPath}class ss{}class so extends ss{}function sa(e,t,...n){let r=[];for(let i of(t instanceof ss&&r.push(t),function(e){let t=e.filter(e=>e instanceof su).length,n=e.filter(e=>e instanceof sl).length;if(t>1||t>0&&n>0)throw new F(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class sl extends so{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new sl(e,t,n)}_apply(e){let t=this._parse(e);return sp(e._query,t),new iF(e.firestore,e.converter,td(e._query,t))}_parse(e){let t=i4(e.firestore);return function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new F(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){sf(o,s);let t=[];for(let n of o)t.push(sd(r,e,n));a={arrayValue:{values:t}}}else a=sd(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||sf(o,s),a=function(e,t,n,r=!1){return i6(n,e.Fu(r?4:3,t))}(n,t,o,"in"===s||"not-in"===s);return e0.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class su extends ss{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new su(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:e1.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())sp(n,e),n=td(n,e)}(e._query,t),new iF(e.firestore,e.converter,td(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class sc extends so{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sc(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new F(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new F(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new eJ(t,n)}(e._query,this._field,this._direction);return new iF(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new ta(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function sh(e,t="asc"){let n=si("orderBy",e);return sc._create(n,t)}function sd(e,t,n){if("string"==typeof(n=(0,b.m9)(n))){if(""===n)throw new F(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tu(t)&&-1!==n.indexOf("/"))throw new F(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(ee.fromString(n));if(!er.isDocumentKey(r))throw new F(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return eV(e,new er(r))}if(n instanceof iV)return eV(e,n._key);throw new F(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${iL(n)}.`)}function sf(e,t){if(!Array.isArray(e)||0===e.length)throw new F(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function sp(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new F(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class sg{convertValue(e,t="none"){switch(eD(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eC(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eS(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return ef(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new iY(eC(e.latitude),eC(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=ek(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eN(e));default:return null}}convertTimestamp(e){let t=eT(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=ee.fromString(e);nR(n)||M();let r=new eO(n.get(1),n.get(3)),i=new er(n.popFirst(5));return r.isEqual(t)||D(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sy extends sn{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new sv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(si("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class sv extends sy{data(e={}){return super.data(e)}}class sw{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new sm(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new sv(this._firestore,this._userDataWriter,n.key,n,new sm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new sv(e._firestore,e._userDataWriter,n.doc.key,n.doc,new sm(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new sv(e._firestore,e._userDataWriter,t.doc.key,t.doc,new sm(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(e){e=ix(e,iV);let t=ix(e.firestore,iz);return(function(e,t,n={}){let r=new V;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new iE({next:s=>{t.enqueueAndForget(()=>rW(e,o));let a=s.docs.has(n);!a&&s.fromCache?i.reject(new F(U.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new F(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new rZ(new ta(n.path),s,{includeMetadataChanges:!0,ra:!0});return rQ(e,o)})(await ik(e),e.asyncQueue,t,n,r)),r.promise})(iH(t),e._key).then(n=>(function(e,t,n){let r=n.docs.get(t._key),i=new sb(e);return new sy(e,i,t._key,r,new sm(n.hasPendingWrites,n.fromCache),t.converter)})(t,e,n))}class sb extends sg{constructor(e){super(),this.firestore=e}convertBytes(e){return new iQ(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new iV(this.firestore,null,t)}}function sE(e){e=ix(e,iF);let t=ix(e.firestore,iz),n=iH(t),r=new sb(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new F(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new V;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new rZ(n,new iE({next:n=>{t.enqueueAndForget(()=>rW(e,s)),n.fromCache&&"server"===r.source?i.reject(new F(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,ra:!0});return rQ(e,s)})(await ik(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new sw(t,r,e,n)))}function sI(e,t,n){var r;e=ix(e,iV);let i=ix(e.firestore,iz),s=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return sC(i,[(function(e,t,n,r,i,s={}){let o,a;let l=e.Fu(s.merge||s.mergeFields?2:0,t,n,i);i7("Data must be an object, but it was:",l,r);let u=i5(r,l);if(s.merge)o=new e_(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=function(e,t,n){if((t=(0,b.m9)(t))instanceof iW)return t._internalPath;if("string"==typeof t)return se(e,t);throw st("Field path arguments must be of type string or ",e,!1,void 0,n)}(t,r,n);if(!l.contains(i))throw new F(U.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}o=new e_(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new iZ(new eG(u),o,a)})(i4(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,t$.none())])}function sT(e){return sC(ix(e.firestore,iz),[new t0(e._key,t$.none())])}function sC(e,t){return function(e,t){let n=new V;return e.asyncQueue.enqueueAndForget(async()=>ir(await iA(e).then(e=>e.syncEngine),t,n)),n.promise}(iH(e),t)}function sS(){return new i9("serverTimestamp")}new WeakMap,function(e=!0){N=v.Jn,(0,v.Xd)(new w.wA("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new iz(new $(t.getProvider("auth-internal")),new G(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new F(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eO(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,v.KN)(A,"4.6.2",void 0),(0,v.KN)(A,"4.6.2","esm2017")}()},4173:function(e,t,n){"use strict";n.d(t,{Ix:function(){return L},Am:function(){return S}});var r=n(7294),i=function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t)){var s=t.length;for(n=0;n<s;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r)}else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(r&&(r+=" "),r+=t);return r};let s=e=>"number"==typeof e&&!isNaN(e),o=e=>"string"==typeof e,a=e=>"function"==typeof e,l=e=>o(e)||a(e)?e:null,u=e=>(0,r.isValidElement)(e)||o(e)||a(e)||s(e);function c(e){let{enter:t,exit:n,appendPosition:i=!1,collapse:s=!0,collapseDuration:o=300}=e;return function(e){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:d,playToast:f}=e,p=i?`${t}--${l}`:t,g=i?`${n}--${l}`:n,m=(0,r.useRef)(0);return(0,r.useLayoutEffect)(()=>{let e=h.current,t=p.split(" "),n=r=>{r.target===h.current&&(f(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===m.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,r.useEffect)(()=>{let e=h.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}(e,c,o):c()};d||(u?t():(m.current=1,e.className+=` ${g}`,e.addEventListener("animationend",t)))},[d]),r.createElement(r.Fragment,null,a)}}function h(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let d=new Map,f=[],p=new Set,g=e=>p.forEach(t=>t(e)),m=()=>d.size>0;function y(e,t){var n;if(t)return!(null==(n=d.get(t))||!n.isToastActive(e));let r=!1;return d.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function v(e,t){u(e)&&(m()||f.push({content:e,options:t}),d.forEach(n=>{n.buildToast(e,t)}))}function w(e,t){d.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function _(e){let{delay:t,isRunning:n,closeToast:s,type:o="default",hide:l,className:u,style:c,controlledProgress:h,progress:d,rtl:f,isIn:p,theme:g}=e,m=l||h&&0===d,y={...c,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};h&&(y.transform=`scaleX(${d})`);let v=i("Toastify__progress-bar",h?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":f}),w=a(u)?u({rtl:f,type:o,defaultClassName:v}):i(v,u);return r.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},r.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${o}`}),r.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:w,style:y,[h&&d>=1?"onTransitionEnd":"onAnimationEnd"]:h&&d<1?null:()=>{p&&s()}}))}let b=1,E=()=>""+b++;function I(e,t){return v(e,t),t.toastId}function T(e,t){return{...t,type:t&&t.type||e,toastId:t&&(o(t.toastId)||s(t.toastId))?t.toastId:E()}}function C(e){return(t,n)=>I(t,T(e,n))}function S(e,t){return I(e,T("default",t))}S.loading=(e,t)=>I(e,T("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),S.promise=function(e,t,n){let r,{pending:i,error:s,success:l}=t;i&&(r=o(i)?S.loading(i,n):S.loading(i.render,{...n,...i}));let u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(e,t,i)=>{if(null==t)return void S.dismiss(r);let s={type:e,...u,...n,data:i},a=o(t)?{render:t}:t;return r?S.update(r,{...s,...a}):S(a.render,{...s,...a}),i},h=a(e)?e():e;return h.then(e=>c("success",l,e)).catch(e=>c("error",s,e)),h},S.success=C("success"),S.info=C("info"),S.error=C("error"),S.warning=C("warning"),S.warn=S.warning,S.dark=(e,t)=>I(e,T("default",{theme:"dark",...t})),S.dismiss=function(e){!function(e){var t;if(m()){if(null==e||o(t=e)||s(t))d.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=d.get(e.containerId);t?t.removeToast(e.id):d.forEach(t=>{t.removeToast(e.id)})}}else f=f.filter(t=>null!=e&&t.options.toastId!==e)}(e)},S.clearWaitingQueue=function(e){void 0===e&&(e={}),d.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},S.isActive=y,S.update=function(e,t){void 0===t&&(t={});let n=((e,t)=>{var n;let{containerId:r}=t;return null==(n=d.get(r||1))?void 0:n.toasts.get(e)})(e,t);if(n){let{props:r,content:i}=n,s={delay:100,...r,...t,toastId:t.toastId||e,updateId:E()};s.toastId!==e&&(s.staleId=e);let o=s.render||i;delete s.render,I(o,s)}},S.done=e=>{S.update(e,{progress:1})},S.onChange=function(e){return p.add(e),()=>{p.delete(e)}},S.play=e=>w(!0,e),S.pause=e=>w(!1,e);let A="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,k=e=>{let{theme:t,type:n,isLoading:i,...s}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},N={info:function(e){return r.createElement(k,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(k,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(k,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(k,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}},R=e=>{let{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:o,playToast:l}=function(e){var t,n;let[i,s]=(0,r.useState)(!1),[o,a]=(0,r.useState)(!1),l=(0,r.useRef)(null),u=(0,r.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:h,closeToast:f,onClick:p,closeOnClick:g}=e;function m(){s(!0)}function y(){s(!1)}function v(t){let n=l.current;u.canDrag&&n&&(u.didMove=!0,i&&y(),u.delta="x"===e.draggableDirection?t.clientX-u.start:t.clientY-u.start,u.start!==t.clientX&&(u.canCloseOnClick=!1),n.style.transform=`translate3d(${"x"===e.draggableDirection?`${u.delta}px, var(--y)`:`0, calc(${u.delta}px + var(--y))`},0)`,n.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function w(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",w);let t=l.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return a(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(n=d.get((t={id:e.toastId,containerId:e.containerId,fn:s}).containerId||1))||n.setToggle(t.id,t.fn),(0,r.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||y(),window.addEventListener("focus",m),window.addEventListener("blur",y),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",y)}},[e.pauseOnFocusLoss]);let _={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){u.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",w);let n=l.current;u.canCloseOnClick=!0,u.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(u.start=t.clientX,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=t.clientY,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:n,bottom:r,left:i,right:s}=l.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=s&&t.clientY>=n&&t.clientY<=r?y():m()}};return c&&h&&(_.onMouseEnter=y,e.stacked||(_.onMouseLeave=m)),g&&(_.onClick=e=>{p&&p(e),u.canCloseOnClick&&f()}),{playToast:m,pauseToast:y,isRunning:i,preventExitTransition:o,toastRef:l,eventHandlers:_}}(e),{closeButton:u,children:c,autoClose:h,onClick:f,type:p,hideProgressBar:g,closeToast:m,transition:y,position:v,className:w,style:b,bodyClassName:E,bodyStyle:I,progressClassName:T,progressStyle:C,updateId:S,role:A,progress:k,rtl:R,toastId:O,deleteToast:P,isIn:D,isLoading:L,closeOnClick:x,theme:M}=e,U=i("Toastify__toast",`Toastify__toast-theme--${M}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":x}),F=a(w)?w({rtl:R,position:v,type:p,defaultClassName:U}):i(U,w),V=function(e){let{theme:t,type:n,isLoading:i,icon:s}=e,o=null,l={theme:t,type:n};return!1===s||(a(s)?o=s({...l,isLoading:i}):(0,r.isValidElement)(s)?o=(0,r.cloneElement)(s,l):i?o=N.spinner():n in N&&(o=N[n](l))),o}(e),q=!!k||!h,B={closeToast:m,type:p,theme:M},j=null;return!1===u||(j=a(u)?u(B):(0,r.isValidElement)(u)?(0,r.cloneElement)(u,B):function(e){let{closeToast:t,theme:n,ariaLabel:i="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":i},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(B)),r.createElement(y,{isIn:D,done:P,position:v,preventExitTransition:n,nodeRef:s,playToast:l},r.createElement("div",{id:O,onClick:f,"data-in":D,className:F,...o,style:b,ref:s},r.createElement("div",{...D&&{role:A},className:a(E)?E({type:p}):i("Toastify__toast-body",E),style:I},null!=V&&r.createElement("div",{className:i("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!L})},V),r.createElement("div",null,c)),j,r.createElement(_,{...S&&!q?{key:`pb-${S}`}:{},rtl:R,theme:M,delay:h,isRunning:t,isIn:D,closeToast:m,hide:g,type:p,style:C,className:T,controlledProgress:q,progress:k||0})))},O=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},P=c(O("bounce",!0)),D=(c(O("slide",!0)),c(O("zoom")),c(O("flip")),{position:"top-right",transition:P,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function L(e){let t={...D,...e},n=e.stacked,[c,p]=(0,r.useState)(!0),m=(0,r.useRef)(null),{getToastToRender:w,isToastActive:_,count:b}=function(e){let{subscribe:t,getSnapshot:n,setProps:i}=(0,r.useRef)(function(e){let t=e.containerId||1;return{subscribe(n){let i=function(e,t,n){let i=1,c=0,d=[],f=[],p=[],g=t,m=new Map,y=new Set,v=()=>{p=Array.from(m.values()),y.forEach(e=>e())},w=e=>{f=null==e?[]:f.filter(t=>t!==e),v()},_=e=>{let{toastId:t,onOpen:i,updateId:s,children:o}=e.props,l=null==s;e.staleId&&m.delete(e.staleId),m.set(t,e),f=[...f,e.props.toastId].filter(t=>t!==e.staleId),v(),n(h(e,l?"added":"updated")),l&&a(i)&&i((0,r.isValidElement)(o)&&o.props)};return{id:e,props:g,observe:e=>(y.add(e),()=>y.delete(e)),toggle:(e,t)=>{m.forEach(n=>{null!=t&&t!==n.props.toastId||a(n.toggle)&&n.toggle(e)})},removeToast:w,toasts:m,clearQueue:()=>{c-=d.length,d=[]},buildToast:(t,f)=>{var p,y;if((t=>{let{containerId:n,toastId:r,updateId:i}=t,s=m.has(r)&&null==i;return(n?n!==e:1!==e)||s})(f))return;let{toastId:b,updateId:E,data:I,staleId:T,delay:C}=f,S=()=>{w(b)},A=null==E;A&&c++;let k={...g,style:g.toastStyle,key:i++,...Object.fromEntries(Object.entries(f).filter(e=>{let[t,n]=e;return null!=n})),toastId:b,updateId:E,data:I,closeToast:S,isIn:!1,className:l(f.className||g.toastClassName),bodyClassName:l(f.bodyClassName||g.bodyClassName),progressClassName:l(f.progressClassName||g.progressClassName),autoClose:!f.isLoading&&(p=f.autoClose,y=g.autoClose,!1===p||s(p)&&p>0?p:y),deleteToast(){let e=m.get(b),{onClose:t,children:i}=e.props;a(t)&&t((0,r.isValidElement)(i)&&i.props),n(h(e,"removed")),m.delete(b),--c<0&&(c=0),d.length>0?_(d.shift()):v()}};k.closeButton=g.closeButton,!1===f.closeButton||u(f.closeButton)?k.closeButton=f.closeButton:!0===f.closeButton&&(k.closeButton=!u(g.closeButton)||g.closeButton);let N=t;(0,r.isValidElement)(t)&&!o(t.type)?N=(0,r.cloneElement)(t,{closeToast:S,toastProps:k,data:I}):a(t)&&(N=t({closeToast:S,toastProps:k,data:I}));let R={content:N,props:k,staleId:T};g.limit&&g.limit>0&&c>g.limit&&A?d.push(R):s(C)?setTimeout(()=>{_(R)},C):_(R)},setProps(e){g=e},setToggle:(e,t)=>{m.get(e).toggle=t},isToastActive:e=>f.some(t=>t===e),getSnapshot:()=>g.newestOnTop?p.reverse():p}}(t,e,g);d.set(t,i);let c=i.observe(n);return f.forEach(e=>v(e.content,e.options)),f=[],()=>{c(),d.delete(t)}},setProps(e){var n;null==(n=d.get(t))||n.setProps(e)},getSnapshot(){var e;return null==(e=d.get(t))?void 0:e.getSnapshot()}}}(e)).current;i(e);let c=(0,r.useSyncExternalStore)(t,n,n);return{getToastToRender:function(e){if(!c)return[];let t=new Map;return c.forEach(e=>{let{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)}),Array.from(t,t=>e(t[0],t[1]))},isToastActive:y,count:null==c?void 0:c.length}}(t),{className:E,style:I,rtl:T,containerId:C}=t;function k(){n&&(p(!0),S.play())}return A(()=>{if(n){var e;let n=m.current.querySelectorAll('[data-in="true"]'),r=null==(e=t.position)?void 0:e.includes("top"),i=0,s=0;Array.from(n).reverse().forEach((e,t)=>{e.classList.add("Toastify__toast--stacked"),t>0&&(e.dataset.collapsed=`${c}`),e.dataset.pos||(e.dataset.pos=r?"top":"bot");let n=i*(c?.2:1)+(c?0:12*t);e.style.setProperty("--y",`${r?n:-1*n}px`),e.style.setProperty("--g","12"),e.style.setProperty("--s",""+(1-(c?s:0))),i+=e.offsetHeight,s+=.025})}},[c,b,n]),r.createElement("div",{ref:m,className:"Toastify",id:C,onMouseEnter:()=>{n&&(p(!1),S.pause())},onMouseLeave:k},w((e,t)=>{let s=t.length?{...I}:{...I,pointerEvents:"none"};return r.createElement("div",{className:function(e){let t=i("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":T});return a(E)?E({position:e,rtl:T,defaultClassName:t}):i(t,l(E))}(e),style:s,key:`container-${e}`},t.map(e=>{let{content:t,props:i}=e;return r.createElement(R,{...i,stacked:n,collapseAll:k,isIn:_(i.toastId,i.containerId),style:i.style,key:`toast-${i.key}`},t)}))}))}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9090)}),_N_E=e.O()}]);