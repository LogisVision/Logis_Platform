var Ll={};/**
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
 */const wd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vy=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],c=r[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,c=a?r[i+1]:0,u=i+2<r.length,h=u?r[i+2]:0,d=s>>2,m=(s&3)<<4|c>>4;let p=(c&15)<<2|h>>6,w=h&63;u||(w=64,a||(p=64)),n.push(t[d],t[m],t[p],t[w])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(wd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Vy(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new My;const p=s<<2|c>>4;if(n.push(p),h!==64){const w=c<<4&240|h>>2;if(n.push(w),m!==64){const v=h<<6&192|m;n.push(v)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class My extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xy=function(r){const e=wd(r);return Ed.encodeByteArray(e,!0)},Ss=function(r){return xy(r).replace(/\./g,"")},Id=function(r){try{return Ed.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ly(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $y=()=>Ly().__FIREBASE_DEFAULTS__,Fy=()=>{if(typeof process>"u"||typeof Ll>"u")return;const r=Ll.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Uy=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Id(r[1]);return e&&JSON.parse(e)},Ys=()=>{try{return $y()||Fy()||Uy()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},bd=r=>{var e,t;return(t=(e=Ys())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Ad=r=>{const e=bd(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Sd=()=>{var r;return(r=Ys())===null||r===void 0?void 0:r.config},Rd=r=>{var e;return(e=Ys())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class By{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Pd(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ss(JSON.stringify(t)),Ss(JSON.stringify(a)),""].join(".")}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function qy(){var r;const e=(r=Ys())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hy(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wy(){const r=Ge();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ky(){return!qy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qy(){try{return typeof indexedDB=="object"}catch{return!1}}function Xy(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Jy="FirebaseError";class Pt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Jy,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}}class vi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Yy(s,n):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Pt(i,c,n)}}function Yy(r,e){return r.replace(Zy,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Zy=/\{\$([^}]+)}/g;function e_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Rs(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if($l(s)&&$l(a)){if(!Rs(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function $l(r){return r!==null&&typeof r=="object"}/**
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
 */function Ti(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function t_(r,e){const t=new r_(r,e);return t.subscribe.bind(t)}class r_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");n_(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Xo),i.error===void 0&&(i.error=Xo),i.complete===void 0&&(i.complete=Xo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n_(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Xo(){}/**
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
 */function Oe(r){return r&&r._delegate?r._delegate:r}class ar{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class i_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new By;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o_(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s_(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s_(r){return r===wr?void 0:r}function o_(r){return r.instantiationMode==="EAGER"}/**
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
 */class a_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new i_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Z||(Z={}));const c_={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},u_=Z.INFO,l_={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},h_=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=l_[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pc{constructor(e){this.name=e,this._logLevel=u_,this._logHandler=h_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const f_=(r,e)=>e.some(t=>r instanceof t);let Fl,Ul;function d_(){return Fl||(Fl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p_(){return Ul||(Ul=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cd=new WeakMap,Ra=new WeakMap,Od=new WeakMap,Jo=new WeakMap,gc=new WeakMap;function g_(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(ir(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Cd.set(t,r)}).catch(()=>{}),gc.set(e,r),e}function m_(r){if(Ra.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});Ra.set(r,e)}let Pa={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ra.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Od.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ir(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function y_(r){Pa=r(Pa)}function __(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Yo(this),e,...t);return Od.set(n,e.sort?e.sort():[e]),ir(n)}:p_().includes(r)?function(...e){return r.apply(Yo(this),e),ir(Cd.get(this))}:function(...e){return ir(r.apply(Yo(this),e))}}function v_(r){return typeof r=="function"?__(r):(r instanceof IDBTransaction&&m_(r),f_(r,d_())?new Proxy(r,Pa):r)}function ir(r){if(r instanceof IDBRequest)return g_(r);if(Jo.has(r))return Jo.get(r);const e=v_(r);return e!==r&&(Jo.set(r,e),gc.set(e,r)),e}const Yo=r=>gc.get(r);function T_(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),c=ir(a);return n&&a.addEventListener("upgradeneeded",u=>{n(ir(a.result),u.oldVersion,u.newVersion,ir(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const w_=["get","getKey","getAll","getAllKeys","count"],E_=["put","add","delete","clear"],Zo=new Map;function Bl(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Zo.get(e))return Zo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=E_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||w_.includes(t)))return;const s=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return Zo.set(e,s),s}y_(r=>({...r,get:(e,t,n)=>Bl(e,t)||r.get(e,t,n),has:(e,t)=>!!Bl(e,t)||r.has(e,t)}));/**
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
 */class I_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(b_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function b_(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ca="@firebase/app",jl="0.10.15";/**
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
 */const Ut=new pc("@firebase/app"),A_="@firebase/app-compat",S_="@firebase/analytics-compat",R_="@firebase/analytics",P_="@firebase/app-check-compat",C_="@firebase/app-check",O_="@firebase/auth",D_="@firebase/auth-compat",k_="@firebase/database",N_="@firebase/data-connect",V_="@firebase/database-compat",M_="@firebase/functions",x_="@firebase/functions-compat",L_="@firebase/installations",$_="@firebase/installations-compat",F_="@firebase/messaging",U_="@firebase/messaging-compat",B_="@firebase/performance",j_="@firebase/performance-compat",q_="@firebase/remote-config",z_="@firebase/remote-config-compat",H_="@firebase/storage",G_="@firebase/storage-compat",W_="@firebase/firestore",K_="@firebase/vertexai",Q_="@firebase/firestore-compat",X_="firebase",J_="11.0.1";/**
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
 */const Oa="[DEFAULT]",Y_={[Ca]:"fire-core",[A_]:"fire-core-compat",[R_]:"fire-analytics",[S_]:"fire-analytics-compat",[C_]:"fire-app-check",[P_]:"fire-app-check-compat",[O_]:"fire-auth",[D_]:"fire-auth-compat",[k_]:"fire-rtdb",[N_]:"fire-data-connect",[V_]:"fire-rtdb-compat",[M_]:"fire-fn",[x_]:"fire-fn-compat",[L_]:"fire-iid",[$_]:"fire-iid-compat",[F_]:"fire-fcm",[U_]:"fire-fcm-compat",[B_]:"fire-perf",[j_]:"fire-perf-compat",[q_]:"fire-rc",[z_]:"fire-rc-compat",[H_]:"fire-gcs",[G_]:"fire-gcs-compat",[W_]:"fire-fst",[Q_]:"fire-fst-compat",[K_]:"fire-vertex","fire-js":"fire-js",[X_]:"fire-js-all"};/**
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
 */const Ps=new Map,Z_=new Map,Da=new Map;function ql(r,e){try{r.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Or(r){const e=r.name;if(Da.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Da.set(e,r);for(const t of Ps.values())ql(t,r);for(const t of Z_.values())ql(t,r);return!0}function Zs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function tr(r){return r.settings!==void 0}/**
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
 */const ev={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new vi("app","Firebase",ev);/**
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
 */class tv{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=J_;function Dd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Oa,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(t||(t=Sd()),!t)throw sr.create("no-options");const s=Ps.get(i);if(s){if(Rs(t,s.options)&&Rs(n,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const a=new a_(i);for(const u of Da.values())a.addComponent(u);const c=new tv(t,n,a);return Ps.set(i,c),c}function mc(r=Oa){const e=Ps.get(r);if(!e&&r===Oa&&Sd())return Dd();if(!e)throw sr.create("no-app",{appName:r});return e}function wt(r,e,t){var n;let i=(n=Y_[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}Or(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const rv="firebase-heartbeat-database",nv=1,li="firebase-heartbeat-store";let ea=null;function kd(){return ea||(ea=T_(rv,nv,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(li)}catch(t){console.warn(t)}}}}).catch(r=>{throw sr.create("idb-open",{originalErrorMessage:r.message})})),ea}async function iv(r){try{const t=(await kd()).transaction(li),n=await t.objectStore(li).get(Nd(r));return await t.done,n}catch(e){if(e instanceof Pt)Ut.warn(e.message);else{const t=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function zl(r,e){try{const n=(await kd()).transaction(li,"readwrite");await n.objectStore(li).put(e,Nd(r)),await n.done}catch(t){if(t instanceof Pt)Ut.warn(t.message);else{const n=sr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(n.message)}}}function Nd(r){return`${r.name}!${r.options.appId}`}/**
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
 */const sv=1024,ov=30*24*60*60*1e3;class av{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uv(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=ov}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Ut.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hl(),{heartbeatsToSend:n,unsentEntries:i}=cv(this._heartbeatsCache.heartbeats),s=Ss(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ut.warn(t),""}}}function Hl(){return new Date().toISOString().substring(0,10)}function cv(r,e=sv){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Gl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Gl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class uv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qy()?Xy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return zl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return zl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gl(r){return Ss(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function lv(r){Or(new ar("platform-logger",e=>new I_(e),"PRIVATE")),Or(new ar("heartbeat",e=>new av(e),"PRIVATE")),wt(Ca,jl,r),wt(Ca,jl,"esm2017"),wt("fire-js","")}lv("");var hv="firebase",fv="11.0.1";/**
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
 */wt(hv,fv,"app");var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,Vd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(I,S,R){for(var T=Array(arguments.length-2),J=2;J<arguments.length;J++)T[J-2]=arguments[J];return y.prototype[S].apply(I,T)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,_){_||(_=0);var I=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)I[S]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(S=0;16>S;++S)I[S]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],S=b.g[2];var R=b.g[3],T=y+(R^_&(S^R))+I[0]+3614090360&4294967295;y=_+(T<<7&4294967295|T>>>25),T=R+(S^y&(_^S))+I[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=S+(_^R&(y^_))+I[2]+606105819&4294967295,S=R+(T<<17&4294967295|T>>>15),T=_+(y^S&(R^y))+I[3]+3250441966&4294967295,_=S+(T<<22&4294967295|T>>>10),T=y+(R^_&(S^R))+I[4]+4118548399&4294967295,y=_+(T<<7&4294967295|T>>>25),T=R+(S^y&(_^S))+I[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=S+(_^R&(y^_))+I[6]+2821735955&4294967295,S=R+(T<<17&4294967295|T>>>15),T=_+(y^S&(R^y))+I[7]+4249261313&4294967295,_=S+(T<<22&4294967295|T>>>10),T=y+(R^_&(S^R))+I[8]+1770035416&4294967295,y=_+(T<<7&4294967295|T>>>25),T=R+(S^y&(_^S))+I[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=S+(_^R&(y^_))+I[10]+4294925233&4294967295,S=R+(T<<17&4294967295|T>>>15),T=_+(y^S&(R^y))+I[11]+2304563134&4294967295,_=S+(T<<22&4294967295|T>>>10),T=y+(R^_&(S^R))+I[12]+1804603682&4294967295,y=_+(T<<7&4294967295|T>>>25),T=R+(S^y&(_^S))+I[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=S+(_^R&(y^_))+I[14]+2792965006&4294967295,S=R+(T<<17&4294967295|T>>>15),T=_+(y^S&(R^y))+I[15]+1236535329&4294967295,_=S+(T<<22&4294967295|T>>>10),T=y+(S^R&(_^S))+I[1]+4129170786&4294967295,y=_+(T<<5&4294967295|T>>>27),T=R+(_^S&(y^_))+I[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=S+(y^_&(R^y))+I[11]+643717713&4294967295,S=R+(T<<14&4294967295|T>>>18),T=_+(R^y&(S^R))+I[0]+3921069994&4294967295,_=S+(T<<20&4294967295|T>>>12),T=y+(S^R&(_^S))+I[5]+3593408605&4294967295,y=_+(T<<5&4294967295|T>>>27),T=R+(_^S&(y^_))+I[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=S+(y^_&(R^y))+I[15]+3634488961&4294967295,S=R+(T<<14&4294967295|T>>>18),T=_+(R^y&(S^R))+I[4]+3889429448&4294967295,_=S+(T<<20&4294967295|T>>>12),T=y+(S^R&(_^S))+I[9]+568446438&4294967295,y=_+(T<<5&4294967295|T>>>27),T=R+(_^S&(y^_))+I[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=S+(y^_&(R^y))+I[3]+4107603335&4294967295,S=R+(T<<14&4294967295|T>>>18),T=_+(R^y&(S^R))+I[8]+1163531501&4294967295,_=S+(T<<20&4294967295|T>>>12),T=y+(S^R&(_^S))+I[13]+2850285829&4294967295,y=_+(T<<5&4294967295|T>>>27),T=R+(_^S&(y^_))+I[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=S+(y^_&(R^y))+I[7]+1735328473&4294967295,S=R+(T<<14&4294967295|T>>>18),T=_+(R^y&(S^R))+I[12]+2368359562&4294967295,_=S+(T<<20&4294967295|T>>>12),T=y+(_^S^R)+I[5]+4294588738&4294967295,y=_+(T<<4&4294967295|T>>>28),T=R+(y^_^S)+I[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=S+(R^y^_)+I[11]+1839030562&4294967295,S=R+(T<<16&4294967295|T>>>16),T=_+(S^R^y)+I[14]+4259657740&4294967295,_=S+(T<<23&4294967295|T>>>9),T=y+(_^S^R)+I[1]+2763975236&4294967295,y=_+(T<<4&4294967295|T>>>28),T=R+(y^_^S)+I[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=S+(R^y^_)+I[7]+4139469664&4294967295,S=R+(T<<16&4294967295|T>>>16),T=_+(S^R^y)+I[10]+3200236656&4294967295,_=S+(T<<23&4294967295|T>>>9),T=y+(_^S^R)+I[13]+681279174&4294967295,y=_+(T<<4&4294967295|T>>>28),T=R+(y^_^S)+I[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=S+(R^y^_)+I[3]+3572445317&4294967295,S=R+(T<<16&4294967295|T>>>16),T=_+(S^R^y)+I[6]+76029189&4294967295,_=S+(T<<23&4294967295|T>>>9),T=y+(_^S^R)+I[9]+3654602809&4294967295,y=_+(T<<4&4294967295|T>>>28),T=R+(y^_^S)+I[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=S+(R^y^_)+I[15]+530742520&4294967295,S=R+(T<<16&4294967295|T>>>16),T=_+(S^R^y)+I[2]+3299628645&4294967295,_=S+(T<<23&4294967295|T>>>9),T=y+(S^(_|~R))+I[0]+4096336452&4294967295,y=_+(T<<6&4294967295|T>>>26),T=R+(_^(y|~S))+I[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=S+(y^(R|~_))+I[14]+2878612391&4294967295,S=R+(T<<15&4294967295|T>>>17),T=_+(R^(S|~y))+I[5]+4237533241&4294967295,_=S+(T<<21&4294967295|T>>>11),T=y+(S^(_|~R))+I[12]+1700485571&4294967295,y=_+(T<<6&4294967295|T>>>26),T=R+(_^(y|~S))+I[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=S+(y^(R|~_))+I[10]+4293915773&4294967295,S=R+(T<<15&4294967295|T>>>17),T=_+(R^(S|~y))+I[1]+2240044497&4294967295,_=S+(T<<21&4294967295|T>>>11),T=y+(S^(_|~R))+I[8]+1873313359&4294967295,y=_+(T<<6&4294967295|T>>>26),T=R+(_^(y|~S))+I[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=S+(y^(R|~_))+I[6]+2734768916&4294967295,S=R+(T<<15&4294967295|T>>>17),T=_+(R^(S|~y))+I[13]+1309151649&4294967295,_=S+(T<<21&4294967295|T>>>11),T=y+(S^(_|~R))+I[4]+4149444226&4294967295,y=_+(T<<6&4294967295|T>>>26),T=R+(_^(y|~S))+I[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=S+(y^(R|~_))+I[2]+718787259&4294967295,S=R+(T<<15&4294967295|T>>>17),T=_+(R^(S|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+R&4294967295}n.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,I=this.B,S=this.h,R=0;R<y;){if(S==0)for(;R<=_;)i(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<y;)if(I[S++]=b.charCodeAt(R++),S==this.blockSize){i(this,I),S=0;break}}else for(;R<y;)if(I[S++]=b[R++],S==this.blockSize){i(this,I),S=0;break}}this.h=S,this.o+=y},n.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var I=0;32>I;I+=8)b[_++]=this.g[y]>>>I&255;return b};function s(b,y){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function a(b,y){this.h=y;for(var _=[],I=!0,S=b.length-1;0<=S;S--){var R=b[S]|0;I&&R==y||(_[S]=R,I=!1)}this.g=_}var c={};function u(b){return-128<=b&&128>b?s(b,function(y){return new a([y|0],0>y?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return E(h(-b));for(var y=[],_=1,I=0;b>=_;I++)y[I]=b/_|0,_*=4294967296;return new a(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return E(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),I=m,S=0;S<b.length;S+=8){var R=Math.min(8,b.length-S),T=parseInt(b.substring(S,S+R),y);8>R?(R=h(Math.pow(y,R)),I=I.j(R).add(h(T))):(I=I.j(_),I=I.add(h(T)))}return I}var m=u(0),p=u(1),w=u(16777216);r=a.prototype,r.m=function(){if(A(this))return-E(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var I=this.i(_);b+=(0<=I?I:4294967296+I)*y,y*=4294967296}return b},r.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(v(this))return"0";if(A(this))return"-"+E(this).toString(b);for(var y=h(Math.pow(b,6)),_=this,I="";;){var S=M(_,y).g;_=k(_,S.j(y));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=S,v(_))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},r.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function v(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function A(b){return b.h==-1}r.l=function(b){return b=k(this,b),A(b)?-1:v(b)?0:1};function E(b){for(var y=b.g.length,_=[],I=0;I<y;I++)_[I]=~b.g[I];return new a(_,~b.h).add(p)}r.abs=function(){return A(this)?E(this):this},r.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0,S=0;S<=y;S++){var R=I+(this.i(S)&65535)+(b.i(S)&65535),T=(R>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);I=T>>>16,R&=65535,T&=65535,_[S]=T<<16|R}return new a(_,_[_.length-1]&-2147483648?-1:0)};function k(b,y){return b.add(E(y))}r.j=function(b){if(v(this)||v(b))return m;if(A(this))return A(b)?E(this).j(E(b)):E(E(this).j(b));if(A(b))return E(this.j(E(b)));if(0>this.l(w)&&0>b.l(w))return h(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<b.g.length;S++){var R=this.i(I)>>>16,T=this.i(I)&65535,J=b.i(S)>>>16,se=b.i(S)&65535;_[2*I+2*S]+=T*se,C(_,2*I+2*S),_[2*I+2*S+1]+=R*se,C(_,2*I+2*S+1),_[2*I+2*S+1]+=T*J,C(_,2*I+2*S+1),_[2*I+2*S+2]+=R*J,C(_,2*I+2*S+2)}for(I=0;I<y;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=y;I<2*y;I++)_[I]=0;return new a(_,0)};function C(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function D(b,y){this.g=b,this.h=y}function M(b,y){if(v(y))throw Error("division by zero");if(v(b))return new D(m,m);if(A(b))return y=M(E(b),y),new D(E(y.g),E(y.h));if(A(y))return y=M(b,E(y)),new D(E(y.g),y.h);if(30<b.g.length){if(A(b)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var _=p,I=y;0>=I.l(b);)_=L(_),I=L(I);var S=$(_,1),R=$(I,1);for(I=$(I,2),_=$(_,2);!v(I);){var T=R.add(I);0>=T.l(b)&&(S=S.add(_),R=T),I=$(I,1),_=$(_,1)}return y=k(b,S.j(y)),new D(S,y)}for(S=m;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=h(_),T=R.j(y);A(T)||0<T.l(b);)_-=I,R=h(_),T=R.j(y);v(R)&&(R=p),S=S.add(R),b=k(b,T)}return new D(S,b)}r.A=function(b){return M(this,b).h},r.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)&b.i(I);return new a(_,this.h&b.h)},r.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)|b.i(I);return new a(_,this.h|b.h)},r.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)^b.i(I);return new a(_,this.h^b.h)};function L(b){for(var y=b.g.length+1,_=[],I=0;I<y;I++)_[I]=b.i(I)<<1|b.i(I-1)>>>31;return new a(_,b.h)}function $(b,y){var _=y>>5;y%=32;for(var I=b.g.length-_,S=[],R=0;R<I;R++)S[R]=0<y?b.i(R+_)>>>y|b.i(R+_+1)<<32-y:b.i(R+_);return new a(S,b.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Vd=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Ar=a}).apply(typeof Wl<"u"?Wl:typeof self<"u"?self:typeof window<"u"?window:{});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Md,Jn,xd,ds,ka,Ld,$d,Fd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,f){return o==Array.prototype||o==Object.prototype||(o[l]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zi=="object"&&Zi];for(var l=0;l<o.length;++l){var f=o[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function i(o,l){if(l)e:{var f=n;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in f))break e;f=f[P]}o=o[o.length-1],g=f[o],l=l(g),l!=g&&l!=null&&e(f,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var f=0,g=!1,P={next:function(){if(!g&&f<o.length){var O=f++;return{value:l(O,o[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function d(o,l,f){return o.call.apply(o.bind,arguments)}function m(o,l,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(l,P)}}return function(){return o.apply(l,arguments)}}function p(o,l,f){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:m,p.apply(null,arguments)}function w(o,l){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function v(o,l){function f(){}f.prototype=l.prototype,o.aa=l.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,P,O){for(var x=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)x[ue-2]=arguments[ue];return l.prototype[P].apply(g,x)}}function A(o){const l=o.length;if(0<l){const f=Array(l);for(let g=0;g<l;g++)f[g]=o[g];return f}return[]}function E(o,l){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const P=o.length||0,O=g.length||0;o.length=P+O;for(let x=0;x<O;x++)o[P+x]=g[x]}else o.push(g)}}class k{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function C(o){return/^[\s\xa0]*$/.test(o)}function D(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function M(o){return M[" "](o),o}M[" "]=function(){};var L=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function $(o,l,f){for(const g in o)l.call(f,o[g],g,o)}function b(o,l){for(const f in o)l.call(void 0,o[f],f,o)}function y(o){const l={};for(const f in o)l[f]=o[f];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,l){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)o[f]=g[f];for(let O=0;O<_.length;O++)f=_[O],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function S(o){var l=1;o=o.split(":");const f=[];for(;0<l&&o.length;)f.push(o.shift()),l--;return o.length&&f.push(o.join(":")),f}function R(o){c.setTimeout(()=>{throw o},0)}function T(){var o=nt;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class J{constructor(){this.h=this.g=null}add(l,f){const g=se.get();g.set(l,f),this.h?this.h.next=g:this.g=g,this.h=g}}var se=new k(()=>new te,o=>o.reset());class te{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,Ye=!1,nt=new J,U=()=>{const o=c.Promise.resolve(void 0);we=()=>{o.then(z)}};var z=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(f){R(f)}var l=se;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Ye=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,l),c.removeEventListener("test",f,l)}catch{}return o}();function Ee(o,l){if(X.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(L){e:{try{M(l.nodeName);var P=!0;break e}catch{}P=!1}P||(l=null)}}else f=="mouseover"?l=o.fromElement:f=="mouseout"&&(l=o.toElement);this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Se[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ee.aa.h.call(this)}}v(Ee,X);var Se={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),it=0;function ut(o,l,f,g,P){this.listener=o,this.proxy=null,this.src=l,this.type=f,this.capture=!!g,this.ha=P,this.key=++it,this.da=this.fa=!1}function Ze(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ie(o){this.src=o,this.g={},this.h=0}Ie.prototype.add=function(o,l,f,g,P){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var x=Ke(o,l,g,P);return-1<x?(l=o[x],f||(l.fa=!1)):(l=new ut(l,this.src,O,!!g,P),l.fa=f,o.push(l)),l};function Fe(o,l){var f=l.type;if(f in o.g){var g=o.g[f],P=Array.prototype.indexOf.call(g,l,void 0),O;(O=0<=P)&&Array.prototype.splice.call(g,P,1),O&&(Ze(l),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Ke(o,l,f,g){for(var P=0;P<o.length;++P){var O=o[P];if(!O.da&&O.listener==l&&O.capture==!!f&&O.ha==g)return P}return-1}var lt="closure_lm_"+(1e6*Math.random()|0),dt={};function Ur(o,l,f,g,P){if(Array.isArray(l)){for(var O=0;O<l.length;O++)Ur(o,l[O],f,g,P);return null}return f=Bu(f),o&&o[De]?o.K(l,f,h(g)?!!g.capture:!!g,P):sy(o,l,f,!1,g,P)}function sy(o,l,f,g,P,O){if(!l)throw Error("Invalid event type");var x=h(P)?!!P.capture:!!P,ue=ko(o);if(ue||(o[lt]=ue=new Ie(o)),f=ue.add(l,f,g,x,O),f.proxy)return f;if(g=oy(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)pe||(P=x),P===void 0&&(P=!1),o.addEventListener(l.toString(),g,P);else if(o.attachEvent)o.attachEvent(Uu(l.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function oy(){function o(f){return l.call(o.src,o.listener,f)}const l=ay;return o}function Fu(o,l,f,g,P){if(Array.isArray(l))for(var O=0;O<l.length;O++)Fu(o,l[O],f,g,P);else g=h(g)?!!g.capture:!!g,f=Bu(f),o&&o[De]?(o=o.i,l=String(l).toString(),l in o.g&&(O=o.g[l],f=Ke(O,f,g,P),-1<f&&(Ze(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete o.g[l],o.h--)))):o&&(o=ko(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ke(l,f,g,P)),(f=-1<o?l[o]:null)&&Do(f))}function Do(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[De])Fe(l.i,o);else{var f=o.type,g=o.proxy;l.removeEventListener?l.removeEventListener(f,g,o.capture):l.detachEvent?l.detachEvent(Uu(f),g):l.addListener&&l.removeListener&&l.removeListener(g),(f=ko(l))?(Fe(f,o),f.h==0&&(f.src=null,l[lt]=null)):Ze(o)}}}function Uu(o){return o in dt?dt[o]:dt[o]="on"+o}function ay(o,l){if(o.da)o=!0;else{l=new Ee(l,this);var f=o.listener,g=o.ha||o.src;o.fa&&Do(o),o=f.call(g,l)}return o}function ko(o){return o=o[lt],o instanceof Ie?o:null}var No="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bu(o){return typeof o=="function"?o:(o[No]||(o[No]=function(l){return o.handleEvent(l)}),o[No])}function Ue(){Q.call(this),this.i=new Ie(this),this.M=this,this.F=null}v(Ue,Q),Ue.prototype[De]=!0,Ue.prototype.removeEventListener=function(o,l,f,g){Fu(this,o,l,f,g)};function Qe(o,l){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=l.type||l,typeof l=="string")l=new X(l,o);else if(l instanceof X)l.target=l.target||o;else{var P=l;l=new X(g,o),I(l,P)}if(P=!0,f)for(var O=f.length-1;0<=O;O--){var x=l.g=f[O];P=Li(x,g,!0,l)&&P}if(x=l.g=o,P=Li(x,g,!0,l)&&P,P=Li(x,g,!1,l)&&P,f)for(O=0;O<f.length;O++)x=l.g=f[O],P=Li(x,g,!1,l)&&P}Ue.prototype.N=function(){if(Ue.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var f=o.g[l],g=0;g<f.length;g++)Ze(f[g]);delete o.g[l],o.h--}}this.F=null},Ue.prototype.K=function(o,l,f,g){return this.i.add(String(o),l,!1,f,g)},Ue.prototype.L=function(o,l,f,g){return this.i.add(String(o),l,!0,f,g)};function Li(o,l,f,g){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var P=!0,O=0;O<l.length;++O){var x=l[O];if(x&&!x.da&&x.capture==f){var ue=x.listener,Me=x.ha||x.src;x.fa&&Fe(o.i,x),P=ue.call(Me,g)!==!1&&P}}return P&&!g.defaultPrevented}function ju(o,l,f){if(typeof o=="function")f&&(o=p(o,f));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function qu(o){o.g=ju(()=>{o.g=null,o.i&&(o.i=!1,qu(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class cy extends Q{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:qu(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vn(o){Q.call(this),this.h=o,this.g={}}v(Vn,Q);var zu=[];function Hu(o){$(o.g,function(l,f){this.g.hasOwnProperty(f)&&Do(l)},o),o.g={}}Vn.prototype.N=function(){Vn.aa.N.call(this),Hu(this)},Vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vo=c.JSON.stringify,uy=c.JSON.parse,ly=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Mo(){}Mo.prototype.h=null;function Gu(o){return o.h||(o.h=o.i())}function Wu(){}var Mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xo(){X.call(this,"d")}v(xo,X);function Lo(){X.call(this,"c")}v(Lo,X);var mr={},Ku=null;function $i(){return Ku=Ku||new Ue}mr.La="serverreachability";function Qu(o){X.call(this,mr.La,o)}v(Qu,X);function xn(o){const l=$i();Qe(l,new Qu(l))}mr.STAT_EVENT="statevent";function Xu(o,l){X.call(this,mr.STAT_EVENT,o),this.stat=l}v(Xu,X);function Xe(o){const l=$i();Qe(l,new Xu(l,o))}mr.Ma="timingevent";function Ju(o,l){X.call(this,mr.Ma,o),this.size=l}v(Ju,X);function Ln(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function $n(){this.g=!0}$n.prototype.xa=function(){this.g=!1};function hy(o,l,f,g,P,O){o.info(function(){if(o.g)if(O)for(var x="",ue=O.split("&"),Me=0;Me<ue.length;Me++){var oe=ue[Me].split("=");if(1<oe.length){var Be=oe[0];oe=oe[1];var je=Be.split("_");x=2<=je.length&&je[1]=="type"?x+(Be+"="+oe+"&"):x+(Be+"=redacted&")}}else x=null;else x=O;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+l+`
`+f+`
`+x})}function fy(o,l,f,g,P,O,x){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+l+`
`+f+`
`+O+" "+x})}function Br(o,l,f,g){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+py(o,f)+(g?" "+g:"")})}function dy(o,l){o.info(function(){return"TIMEOUT: "+l})}$n.prototype.info=function(){};function py(o,l){if(!o.g)return l;if(!l)return null;try{var f=JSON.parse(l);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var x=1;x<P.length;x++)P[x]=""}}}}return Vo(f)}catch{return l}}var Fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$o;function Ui(){}v(Ui,Mo),Ui.prototype.g=function(){return new XMLHttpRequest},Ui.prototype.i=function(){return{}},$o=new Ui;function Gt(o,l,f,g){this.j=o,this.i=l,this.l=f,this.R=g||1,this.U=new Vn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zu}function Zu(){this.i=null,this.g="",this.h=!1}var el={},Fo={};function Uo(o,l,f){o.L=1,o.v=zi(Dt(l)),o.m=f,o.P=!0,tl(o,null)}function tl(o,l){o.F=Date.now(),Bi(o),o.A=Dt(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),gl(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Zu,o.g=Nl(o.j,f?l:null,!o.m),0<o.O&&(o.M=new cy(p(o.Y,o,o.g),o.O)),l=o.U,f=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(zu[0]=P.toString()),P=zu);for(var O=0;O<P.length;O++){var x=Ur(f,P[O],g||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),xn(),hy(o.i,o.u,o.A,o.l,o.R,o.m)}Gt.prototype.ca=function(o){o=o.target;const l=this.M;l&&kt(o)==3?l.j():this.Y(o)},Gt.prototype.Y=function(o){try{if(o==this.g)e:{const je=kt(this.g);var l=this.g.Ba();const zr=this.g.Z();if(!(3>je)&&(je!=3||this.g&&(this.h.h||this.g.oa()||El(this.g)))){this.J||je!=4||l==7||(l==8||0>=zr?xn(3):xn(2)),Bo(this);var f=this.g.Z();this.X=f;t:if(rl(this)){var g=El(this.g);o="";var P=g.length,O=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),Fn(this);var x="";break t}this.h.i=new c.TextDecoder}for(l=0;l<P;l++)this.h.h=!0,o+=this.h.i.decode(g[l],{stream:!(O&&l==P-1)});g.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=f==200,fy(this.i,this.u,this.A,this.l,this.R,je,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(ue)){var oe=ue;break t}}oe=null}if(f=oe)Br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jo(this,f);else{this.o=!1,this.s=3,Xe(12),yr(this),Fn(this);break e}}if(this.P){f=!0;let pt;for(;!this.J&&this.C<x.length;)if(pt=gy(this,x),pt==Fo){je==4&&(this.s=4,Xe(14),f=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==el){this.s=4,Xe(15),Br(this.i,this.l,x,"[Invalid Chunk]"),f=!1;break}else Br(this.i,this.l,pt,null),jo(this,pt);if(rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),je!=4||x.length!=0||this.h.h||(this.s=1,Xe(16),f=!1),this.o=this.o&&f,!f)Br(this.i,this.l,x,"[Invalid Chunked Response]"),yr(this),Fn(this);else if(0<x.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Ko(Be),Be.M=!0,Xe(11))}}else Br(this.i,this.l,x,null),jo(this,x);je==4&&yr(this),this.o&&!this.J&&(je==4?Cl(this.j,this):(this.o=!1,Bi(this)))}else ky(this.g),f==400&&0<x.indexOf("Unknown SID")?(this.s=3,Xe(12)):(this.s=0,Xe(13)),yr(this),Fn(this)}}}catch{}finally{}};function rl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function gy(o,l){var f=o.C,g=l.indexOf(`
`,f);return g==-1?Fo:(f=Number(l.substring(f,g)),isNaN(f)?el:(g+=1,g+f>l.length?Fo:(l=l.slice(g,g+f),o.C=g+f,l)))}Gt.prototype.cancel=function(){this.J=!0,yr(this)};function Bi(o){o.S=Date.now()+o.I,nl(o,o.I)}function nl(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ln(p(o.ba,o),l)}function Bo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Gt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(dy(this.i,this.A),this.L!=2&&(xn(),Xe(17)),yr(this),this.s=2,Fn(this)):nl(this,this.S-o)};function Fn(o){o.j.G==0||o.J||Cl(o.j,o)}function yr(o){Bo(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Hu(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function jo(o,l){try{var f=o.j;if(f.G!=0&&(f.g==o||qo(f.h,o))){if(!o.K&&qo(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Xi(f),Ki(f);else break e;Wo(f),Xe(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ln(p(f.Za,f),6e3));if(1>=ol(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else vr(f,11)}else if((o.K||f.g==o)&&Xi(f),!C(l))for(P=f.Da.g.parse(l),l=0;l<P.length;l++){let oe=P[l];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const Be=oe[3];Be!=null&&(f.la=Be,f.j.info("VER="+f.la));const je=oe[4];je!=null&&(f.Aa=je,f.j.info("SVER="+f.Aa));const zr=oe[5];zr!=null&&typeof zr=="number"&&0<zr&&(g=1.5*zr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const pt=o.g;if(pt){const Yi=pt.g?pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yi){var O=g.h;O.g||Yi.indexOf("spdy")==-1&&Yi.indexOf("quic")==-1&&Yi.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(zo(O,O.h),O.h=null))}if(g.D){const Qo=pt.g?pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qo&&(g.ya=Qo,he(g.I,g.D,Qo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var x=o;if(g.qa=kl(g,g.J?g.ia:null,g.W),x.K){al(g.h,x);var ue=x,Me=g.L;Me&&(ue.I=Me),ue.B&&(Bo(ue),Bi(ue)),g.g=x}else Rl(g);0<f.i.length&&Qi(f)}else oe[0]!="stop"&&oe[0]!="close"||vr(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?vr(f,7):Go(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}xn(4)}catch{}}var my=class{constructor(o,l){this.g=o,this.map=l}};function il(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ol(o){return o.h?1:o.g?o.g.size:0}function qo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function zo(o,l){o.g?o.g.add(l):o.h=l}function al(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}il.prototype.cancel=function(){if(this.i=cl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function cl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const f of o.g.values())l=l.concat(f.D);return l}return A(o.i)}function yy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],f=o.length,g=0;g<f;g++)l.push(o[g]);return l}l=[],f=0;for(g in o)l[f++]=o[g];return l}function _y(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var f=0;f<o;f++)l.push(f);return l}l=[],f=0;for(const g in o)l[f++]=g;return l}}}function ul(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var f=_y(o),g=yy(o),P=g.length,O=0;O<P;O++)l.call(void 0,g[O],f&&f[O],o)}var ll=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vy(o,l){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),P=null;if(0<=g){var O=o[f].substring(0,g);P=o[f].substring(g+1)}else O=o[f];l(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function _r(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof _r){this.h=o.h,ji(this,o.j),this.o=o.o,this.g=o.g,qi(this,o.s),this.l=o.l;var l=o.i,f=new jn;f.i=l.i,l.g&&(f.g=new Map(l.g),f.h=l.h),hl(this,f),this.m=o.m}else o&&(l=String(o).match(ll))?(this.h=!1,ji(this,l[1]||"",!0),this.o=Un(l[2]||""),this.g=Un(l[3]||"",!0),qi(this,l[4]),this.l=Un(l[5]||"",!0),hl(this,l[6]||"",!0),this.m=Un(l[7]||"")):(this.h=!1,this.i=new jn(null,this.h))}_r.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Bn(l,fl,!0),":");var f=this.g;return(f||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Bn(l,fl,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Bn(f,f.charAt(0)=="/"?Ey:wy,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Bn(f,by)),o.join("")};function Dt(o){return new _r(o)}function ji(o,l,f){o.j=f?Un(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function qi(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function hl(o,l,f){l instanceof jn?(o.i=l,Ay(o.i,o.h)):(f||(l=Bn(l,Iy)),o.i=new jn(l,o.h))}function he(o,l,f){o.i.set(l,f)}function zi(o){return he(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Un(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Bn(o,l,f){return typeof o=="string"?(o=encodeURI(o).replace(l,Ty),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ty(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var fl=/[#\/\?@]/g,wy=/[#\?:]/g,Ey=/[#\?]/g,Iy=/[#\?@]/g,by=/#/g;function jn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Wt(o){o.g||(o.g=new Map,o.h=0,o.i&&vy(o.i,function(l,f){o.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}r=jn.prototype,r.add=function(o,l){Wt(this),this.i=null,o=jr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(l),this.h+=1,this};function dl(o,l){Wt(o),l=jr(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function pl(o,l){return Wt(o),l=jr(o,l),o.g.has(l)}r.forEach=function(o,l){Wt(this),this.g.forEach(function(f,g){f.forEach(function(P){o.call(l,P,g,this)},this)},this)},r.na=function(){Wt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),f=[];for(let g=0;g<l.length;g++){const P=o[g];for(let O=0;O<P.length;O++)f.push(l[g])}return f},r.V=function(o){Wt(this);let l=[];if(typeof o=="string")pl(this,o)&&(l=l.concat(this.g.get(jr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)l=l.concat(o[f])}return l},r.set=function(o,l){return Wt(this),this.i=null,o=jr(this,o),pl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function gl(o,l,f){dl(o,l),0<f.length&&(o.i=null,o.g.set(jr(o,l),A(f)),o.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var f=0;f<l.length;f++){var g=l[f];const O=encodeURIComponent(String(g)),x=this.V(g);for(g=0;g<x.length;g++){var P=O;x[g]!==""&&(P+="="+encodeURIComponent(String(x[g]))),o.push(P)}}return this.i=o.join("&")};function jr(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Ay(o,l){l&&!o.j&&(Wt(o),o.i=null,o.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(dl(this,g),gl(this,P,f))},o)),o.j=l}function Sy(o,l){const f=new $n;if(c.Image){const g=new Image;g.onload=w(Kt,f,"TestLoadImage: loaded",!0,l,g),g.onerror=w(Kt,f,"TestLoadImage: error",!1,l,g),g.onabort=w(Kt,f,"TestLoadImage: abort",!1,l,g),g.ontimeout=w(Kt,f,"TestLoadImage: timeout",!1,l,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else l(!1)}function Ry(o,l){const f=new $n,g=new AbortController,P=setTimeout(()=>{g.abort(),Kt(f,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:g.signal}).then(O=>{clearTimeout(P),O.ok?Kt(f,"TestPingServer: ok",!0,l):Kt(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),Kt(f,"TestPingServer: error",!1,l)})}function Kt(o,l,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function Py(){this.g=new ly}function Cy(o,l,f){const g=f||"";try{ul(o,function(P,O){let x=P;h(P)&&(x=Vo(P)),l.push(g+O+"="+encodeURIComponent(x))})}catch(P){throw l.push(g+"type="+encodeURIComponent("_badmap")),P}}function Hi(o){this.l=o.Ub||null,this.j=o.eb||!1}v(Hi,Mo),Hi.prototype.g=function(){return new Gi(this.l,this.j)},Hi.prototype.i=function(o){return function(){return o}}({});function Gi(o,l){Ue.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(Gi,Ue),r=Gi.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,zn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qn(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ml(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ml(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?qn(this):zn(this),this.readyState==3&&ml(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,qn(this))},r.Qa=function(o){this.g&&(this.response=o,qn(this))},r.ga=function(){this.g&&qn(this)};function qn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,zn(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=l.next();return o.join(`\r
`)};function zn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function yl(o){let l="";return $(o,function(f,g){l+=g,l+=":",l+=f,l+=`\r
`}),l}function Ho(o,l,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=yl(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):he(o,l,f))}function ye(o){Ue.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(ye,Ue);var Oy=/^https?$/i,Dy=["POST","PUT"];r=ye.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$o.g(),this.v=this.o?Gu(this.o):Gu($o),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(O){_l(this,O);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Dy,l,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,x]of f)this.g.setRequestHeader(O,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wl(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){_l(this,O)}};function _l(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,vl(o),Wi(o)}function vl(o){o.A||(o.A=!0,Qe(o,"complete"),Qe(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Qe(this,"complete"),Qe(this,"abort"),Wi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wi(this,!0)),ye.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Tl(this):this.bb())},r.bb=function(){Tl(this)};function Tl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||kt(o)!=4||o.Z()!=2)){if(o.u&&kt(o)==4)ju(o.Ea,0,o);else if(Qe(o,"readystatechange"),kt(o)==4){o.h=!1;try{const x=o.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var g;if(g=x===0){var P=String(o.D).match(ll)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!Oy.test(P?P.toLowerCase():"")}f=g}if(f)Qe(o,"complete"),Qe(o,"success");else{o.m=6;try{var O=2<kt(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",vl(o)}}finally{Wi(o)}}}}function Wi(o,l){if(o.g){wl(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Qe(o,"ready");try{f.onreadystatechange=g}catch{}}}function wl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function kt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),uy(l)}};function El(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ky(o){const l={};o=(o.g&&2<=kt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(C(o[g]))continue;var f=S(o[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=l[P]||[];l[P]=O,O.push(f)}b(l,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(o,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||l}function Il(o){this.Aa=0,this.i=[],this.j=new $n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hn("baseRetryDelayMs",5e3,o),this.cb=Hn("retryDelaySeedMs",1e4,o),this.Wa=Hn("forwardChannelMaxRetries",2,o),this.wa=Hn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new il(o&&o.concurrentRequestLimit),this.Da=new Py,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Il.prototype,r.la=8,r.G=1,r.connect=function(o,l,f,g){Xe(0),this.W=o,this.H=l||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=kl(this,null,this.W),Qi(this)};function Go(o){if(bl(o),o.G==3){var l=o.U++,f=Dt(o.I);if(he(f,"SID",o.K),he(f,"RID",l),he(f,"TYPE","terminate"),Gn(o,f),l=new Gt(o,o.j,l),l.L=2,l.v=zi(Dt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=l.v,f=!0),f||(l.g=Nl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Bi(l)}Dl(o)}function Ki(o){o.g&&(Ko(o),o.g.cancel(),o.g=null)}function bl(o){Ki(o),o.u&&(c.clearTimeout(o.u),o.u=null),Xi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Qi(o){if(!sl(o.h)&&!o.s){o.s=!0;var l=o.Ga;we||U(),Ye||(we(),Ye=!0),nt.add(l,o),o.B=0}}function Ny(o,l){return ol(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ln(p(o.Ga,o,l),Ol(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Gt(this,this.j,o);let O=this.o;if(this.S&&(O?(O=y(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,4096<l){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=Sl(this,P,l),f=Dt(this.I),he(f,"RID",o),he(f,"CVER",22),this.D&&he(f,"X-HTTP-Session-Id",this.D),Gn(this,f),O&&(this.O?l="headers="+encodeURIComponent(String(yl(O)))+"&"+l:this.m&&Ho(f,this.m,O)),zo(this.h,P),this.Ua&&he(f,"TYPE","init"),this.P?(he(f,"$req",l),he(f,"SID","null"),P.T=!0,Uo(P,f,null)):Uo(P,f,l),this.G=2}}else this.G==3&&(o?Al(this,o):this.i.length==0||sl(this.h)||Al(this))};function Al(o,l){var f;l?f=l.l:f=o.U++;const g=Dt(o.I);he(g,"SID",o.K),he(g,"RID",f),he(g,"AID",o.T),Gn(o,g),o.m&&o.o&&Ho(g,o.m,o.o),f=new Gt(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Sl(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),zo(o.h,f),Uo(f,g,l)}function Gn(o,l){o.H&&$(o.H,function(f,g){he(l,g,f)}),o.l&&ul({},function(f,g){he(l,g,f)})}function Sl(o,l,f){f=Math.min(o.i.length,f);var g=o.l?p(o.l.Na,o.l,o):null;e:{var P=o.i;let O=-1;for(;;){const x=["count="+f];O==-1?0<f?(O=P[0].g,x.push("ofs="+O)):O=0:x.push("ofs="+O);let ue=!0;for(let Me=0;Me<f;Me++){let oe=P[Me].g;const Be=P[Me].map;if(oe-=O,0>oe)O=Math.max(0,P[Me].g-100),ue=!1;else try{Cy(Be,x,"req"+oe+"_")}catch{g&&g(Be)}}if(ue){g=x.join("&");break e}}}return o=o.i.splice(0,f),l.D=o,g}function Rl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;we||U(),Ye||(we(),Ye=!0),nt.add(l,o),o.v=0}}function Wo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ln(p(o.Fa,o),Ol(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ln(p(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xe(10),Ki(this),Pl(this))};function Ko(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Pl(o){o.g=new Gt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Dt(o.qa);he(l,"RID","rpc"),he(l,"SID",o.K),he(l,"AID",o.T),he(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&he(l,"TO",o.ja),he(l,"TYPE","xmlhttp"),Gn(o,l),o.m&&o.o&&Ho(l,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=zi(Dt(l)),f.m=null,f.P=!0,tl(f,o)}r.Za=function(){this.C!=null&&(this.C=null,Ki(this),Wo(this),Xe(19))};function Xi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Cl(o,l){var f=null;if(o.g==l){Xi(o),Ko(o),o.g=null;var g=2}else if(qo(o.h,l))f=l.D,al(o.h,l),g=1;else return;if(o.G!=0){if(l.o)if(g==1){f=l.m?l.m.length:0,l=Date.now()-l.F;var P=o.B;g=$i(),Qe(g,new Ju(g,f)),Qi(o)}else Rl(o);else if(P=l.s,P==3||P==0&&0<l.X||!(g==1&&Ny(o,l)||g==2&&Wo(o)))switch(f&&0<f.length&&(l=o.h,l.i=l.i.concat(f)),P){case 1:vr(o,5);break;case 4:vr(o,10);break;case 3:vr(o,6);break;default:vr(o,2)}}}function Ol(o,l){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*l}function vr(o,l){if(o.j.info("Error code "+l),l==2){var f=p(o.fb,o),g=o.Xa;const P=!g;g=new _r(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ji(g,"https"),zi(g),P?Sy(g.toString(),f):Ry(g.toString(),f)}else Xe(2);o.G=0,o.l&&o.l.sa(l),Dl(o),bl(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function Dl(o){if(o.G=0,o.ka=[],o.l){const l=cl(o.h);(l.length!=0||o.i.length!=0)&&(E(o.ka,l),E(o.ka,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.ra()}}function kl(o,l,f){var g=f instanceof _r?Dt(f):new _r(f);if(g.g!="")l&&(g.g=l+"."+g.g),qi(g,g.s);else{var P=c.location;g=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;var O=new _r(null);g&&ji(O,g),l&&(O.g=l),P&&qi(O,P),f&&(O.l=f),g=O}return f=o.D,l=o.ya,f&&l&&he(g,f,l),he(g,"VER",o.la),Gn(o,g),g}function Nl(o,l,f){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ye(new Hi({eb:f})):new ye(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vl(){}r=Vl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ji(){}Ji.prototype.g=function(o,l){return new st(o,l)};function st(o,l){Ue.call(this),this.g=new Il(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!C(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!C(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new qr(this)}v(st,Ue),st.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},st.prototype.close=function(){Go(this.g)},st.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Vo(o),o=f);l.i.push(new my(l.Ya++,o)),l.G==3&&Qi(l)},st.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,st.aa.N.call(this)};function Ml(o){xo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const f in l){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}v(Ml,xo);function xl(){Lo.call(this),this.status=1}v(xl,Lo);function qr(o){this.g=o}v(qr,Vl),qr.prototype.ua=function(){Qe(this.g,"a")},qr.prototype.ta=function(o){Qe(this.g,new Ml(o))},qr.prototype.sa=function(o){Qe(this.g,new xl)},qr.prototype.ra=function(){Qe(this.g,"b")},Ji.prototype.createWebChannel=Ji.prototype.g,st.prototype.send=st.prototype.o,st.prototype.open=st.prototype.m,st.prototype.close=st.prototype.close,Fd=function(){return new Ji},$d=function(){return $i()},Ld=mr,ka={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,ds=Fi,Yu.COMPLETE="complete",xd=Yu,Wu.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",Ue.prototype.listen=Ue.prototype.K,Jn=Wu,ye.prototype.listenOnce=ye.prototype.L,ye.prototype.getLastError=ye.prototype.Ka,ye.prototype.getLastErrorCode=ye.prototype.Ba,ye.prototype.getStatus=ye.prototype.Z,ye.prototype.getResponseJson=ye.prototype.Oa,ye.prototype.getResponseText=ye.prototype.oa,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Ha,Md=ye}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});const Kl="@firebase/firestore";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let vn="11.0.0";/**
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
 */const Dr=new pc("@firebase/firestore");function Qr(){return Dr.logLevel}function F(r,...e){if(Dr.logLevel<=Z.DEBUG){const t=e.map(yc);Dr.debug(`Firestore (${vn}): ${r}`,...t)}}function Bt(r,...e){if(Dr.logLevel<=Z.ERROR){const t=e.map(yc);Dr.error(`Firestore (${vn}): ${r}`,...t)}}function cn(r,...e){if(Dr.logLevel<=Z.WARN){const t=e.map(yc);Dr.warn(`Firestore (${vn}): ${r}`,...t)}}function yc(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function q(r="Unexpected state"){const e=`FIRESTORE (${vn}) INTERNAL ASSERTION FAILED: `+r;throw Bt(e),new Error(e)}function ce(r,e){r||q()}function K(r,e){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ft{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ud{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ze.UNAUTHENTICATED))}shutdown(){}}class pv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gv{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0);let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ft,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ft)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(ce(typeof n.accessToken=="string"),new Ud(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new ze(e)}}class mv{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yv{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new mv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _v{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ce(this.o===void 0);const n=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string"),this.R=t.token,new _v(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Tv(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Bd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Tv(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function ne(r,e){return r<e?-1:r>e?1:0}function un(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}/**
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
 */class Ce{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ce(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Ce(0,0))}static max(){return new G(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class hi{constructor(e,t,n){t===void 0?t=0:t>e.length&&q(),n===void 0?n=e.length-t:n>e.length-t&&q(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class de extends hi{construct(e,t,n){return new de(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new de(t)}static emptyPath(){return new de([])}}const wv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends hi{construct(e,t,n){return new Le(e,t,n)}static isValidIdentifier(e){return wv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Le(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(s(),i++)}if(s(),a)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(t)}static emptyPath(){return new Le([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(de.fromString(e))}static fromName(e){return new j(de.fromString(e).popFirst(5))}static empty(){return new j(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new de(e.slice()))}}function Ev(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=G.fromTimestamp(n===1e9?new Ce(t+1,0):new Ce(t,n));return new cr(i,j.empty(),e)}function Iv(r){return new cr(r.readTime,r.key,-1)}class cr{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new cr(G.min(),j.empty(),-1)}static max(){return new cr(G.max(),j.empty(),-1)}}function bv(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(r.documentKey,e.documentKey),t!==0?t:ne(r.largestBatchId,e.largestBatchId))}/**
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
 */const Av="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Tn(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Av)throw r;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,n)=>{t(e)})}static reject(e){return new N((t,n)=>{n(e)})}static waitFor(e){return new N((t,n)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},u=>n(u))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const n of e)t=t.next(i=>i?N.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new N((n,i)=>{const s=e.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(d=>{a[h]=d,++c,c===s&&n(a)},d=>i(d))}})}static doWhile(e,t){return new N((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}function Rv(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wn(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class eo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}eo.oe=-1;function to(r){return r==null}function Cs(r){return r===0&&1/r==-1/0}function Pv(r){return typeof r=="number"&&Number.isInteger(r)&&!Cs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Cv(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ql(e)),e=Ov(r.get(t),e);return Ql(e)}function Ov(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Ql(r){return r+""}/**
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
 */function Xl(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function dr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function jd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class me{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??xe.RED,this.left=i??xe.EMPTY,this.right=s??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new xe(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,n,i,s){return this}insert(e,t,n){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jl(this.data.getIterator())}getIteratorFrom(e){return new Jl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class Jl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ot{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new ot([])}unionWith(e){let t=new Ve(Le.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return un(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class qd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qd("Invalid base64 string: "+s):s}}(e);return new $e(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new $e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const Dv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(r){if(ce(!!r),typeof r=="string"){let e=0;const t=Dv.exec(r);if(ce(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:be(r.seconds),nanos:be(r.nanos)}}function be(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function lr(r){return typeof r=="string"?$e.fromBase64String(r):$e.fromUint8Array(r)}/**
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
 */function _c(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ro(r){const e=r.mapValue.fields.__previous_value__;return _c(e)?ro(e):e}function fi(r){const e=ur(r.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class kv{constructor(e,t,n,i,s,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class di{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ts={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?_c(r)?4:Vv(r)?9007199254740991:Nv(r)?10:11:q()}function St(r,e){if(r===e)return!0;const t=hr(r);if(t!==hr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return fi(r).isEqual(fi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=ur(i.timestampValue),c=ur(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return lr(i.bytesValue).isEqual(lr(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=be(i.doubleValue),c=be(s.doubleValue);return a===c?Cs(a)===Cs(c):isNaN(a)&&isNaN(c)}return!1}(r,e);case 9:return un(r.arrayValue.values||[],e.arrayValue.values||[],St);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Xl(a)!==Xl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!St(a[u],c[u])))return!1;return!0}(r,e);default:return q()}}function pi(r,e){return(r.values||[]).find(t=>St(t,e))!==void 0}function ln(r,e){if(r===e)return 0;const t=hr(r),n=hr(e);if(t!==n)return ne(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(r.booleanValue,e.booleanValue);case 2:return function(s,a){const c=be(s.integerValue||s.doubleValue),u=be(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(r,e);case 3:return Yl(r.timestampValue,e.timestampValue);case 4:return Yl(fi(r),fi(e));case 5:return ne(r.stringValue,e.stringValue);case 6:return function(s,a){const c=lr(s),u=lr(a);return c.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const d=ne(c[h],u[h]);if(d!==0)return d}return ne(c.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const c=ne(be(s.latitude),be(a.latitude));return c!==0?c:ne(be(s.longitude),be(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Zl(r.arrayValue,e.arrayValue);case 10:return function(s,a){var c,u,h,d;const m=s.fields||{},p=a.fields||{},w=(c=m.value)===null||c===void 0?void 0:c.arrayValue,v=(u=p.value)===null||u===void 0?void 0:u.arrayValue,A=ne(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((d=v==null?void 0:v.values)===null||d===void 0?void 0:d.length)||0);return A!==0?A:Zl(w,v)}(r.mapValue,e.mapValue);case 11:return function(s,a){if(s===ts.mapValue&&a===ts.mapValue)return 0;if(s===ts.mapValue)return 1;if(a===ts.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const p=ne(u[m],d[m]);if(p!==0)return p;const w=ln(c[u[m]],h[d[m]]);if(w!==0)return w}return ne(u.length,d.length)}(r.mapValue,e.mapValue);default:throw q()}}function Yl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ne(r,e);const t=ur(r),n=ur(e),i=ne(t.seconds,n.seconds);return i!==0?i:ne(t.nanos,n.nanos)}function Zl(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=ln(t[i],n[i]);if(s)return s}return ne(t.length,n.length)}function hn(r){return Na(r)}function Na(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=ur(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return lr(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return j.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Na(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${Na(t.fields[a])}`;return i+"}"}(r.mapValue):q()}function ps(r){switch(hr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ro(r);return e?16+ps(e):16;case 5:return 2*r.stringValue.length;case 6:return lr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+ps(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return dr(n.fields,(s,a)=>{i+=s.length+ps(a)}),i}(r.mapValue);default:throw q()}}function Va(r){return!!r&&"integerValue"in r}function vc(r){return!!r&&"arrayValue"in r}function eh(r){return!!r&&"nullValue"in r}function th(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function gs(r){return!!r&&"mapValue"in r}function Nv(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ti(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return dr(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ti(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ti(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Vv(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!gs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(t)}setAll(e){let t=Le.emptyPath(),n={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=c.popLast()}a?n[c.lastSegment()]=ti(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());gs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];gs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){dr(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new rt(ti(this.value))}}function zd(r){const e=[];return dr(r.fields,(t,n)=>{const i=new Le([t]);if(gs(n)){const s=zd(n.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new ot(e)}/**
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
 */class He{constructor(e,t,n,i,s,a,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new He(e,0,G.min(),G.min(),G.min(),rt.empty(),0)}static newFoundDocument(e,t,n,i){return new He(e,1,t,G.min(),n,i,0)}static newNoDocument(e,t){return new He(e,2,t,G.min(),G.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,G.min(),G.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Os{constructor(e,t){this.position=e,this.inclusive=t}}function rh(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=j.comparator(j.fromName(a.referenceValue),t.key):n=ln(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function nh(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!St(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ds{constructor(e,t="asc"){this.field=e,this.dir=t}}function Mv(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Hd{}class Pe extends Hd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Lv(e,t,n):t==="array-contains"?new Uv(e,n):t==="in"?new Bv(e,n):t==="not-in"?new jv(e,n):t==="array-contains-any"?new qv(e,n):new Pe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new $v(e,n):new Fv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ln(t,this.value)):t!==null&&hr(this.value)===hr(t)&&this.matchesComparison(ln(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends Hd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Rt(e,t)}matches(e){return Gd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Gd(r){return r.op==="and"}function Wd(r){return xv(r)&&Gd(r)}function xv(r){for(const e of r.filters)if(e instanceof Rt)return!1;return!0}function Ma(r){if(r instanceof Pe)return r.field.canonicalString()+r.op.toString()+hn(r.value);if(Wd(r))return r.filters.map(e=>Ma(e)).join(",");{const e=r.filters.map(t=>Ma(t)).join(",");return`${r.op}(${e})`}}function Kd(r,e){return r instanceof Pe?function(n,i){return i instanceof Pe&&n.op===i.op&&n.field.isEqual(i.field)&&St(n.value,i.value)}(r,e):r instanceof Rt?function(n,i){return i instanceof Rt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,c)=>s&&Kd(a,i.filters[c]),!0):!1}(r,e):void q()}function Qd(r){return r instanceof Pe?function(t){return`${t.field.canonicalString()} ${t.op} ${hn(t.value)}`}(r):r instanceof Rt?function(t){return t.op.toString()+" {"+t.getFilters().map(Qd).join(" ,")+"}"}(r):"Filter"}class Lv extends Pe{constructor(e,t,n){super(e,t,n),this.key=j.fromName(n.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class $v extends Pe{constructor(e,t){super(e,"in",t),this.keys=Xd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Fv extends Pe{constructor(e,t){super(e,"not-in",t),this.keys=Xd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>j.fromName(n.referenceValue))}class Uv extends Pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vc(t)&&pi(t.arrayValue,this.value)}}class Bv extends Pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&pi(this.value.arrayValue,t)}}class jv extends Pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!pi(this.value.arrayValue,t)}}class qv extends Pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>pi(this.value.arrayValue,n))}}/**
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
 */class zv{constructor(e,t=null,n=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function ih(r,e=null,t=[],n=[],i=null,s=null,a=null){return new zv(r,e,t,n,i,s,a)}function Tc(r){const e=K(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ma(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),to(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>hn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>hn(n)).join(",")),e.ue=t}return e.ue}function wc(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Mv(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Kd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!nh(r.startAt,e.startAt)&&nh(r.endAt,e.endAt)}function xa(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class no{constructor(e,t=null,n=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hv(r,e,t,n,i,s,a,c){return new no(r,e,t,n,i,s,a,c)}function Ec(r){return new no(r)}function sh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Gv(r){return r.collectionGroup!==null}function ri(r){const e=K(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ve(Le.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ds(s,n))}),t.has(Le.keyField().canonicalString())||e.ce.push(new Ds(Le.keyField(),n))}return e.ce}function Et(r){const e=K(r);return e.le||(e.le=Wv(e,ri(r))),e.le}function Wv(r,e){if(r.limitType==="F")return ih(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ds(i.field,s)});const t=r.endAt?new Os(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Os(r.startAt.position,r.startAt.inclusive):null;return ih(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function La(r,e,t){return new no(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function io(r,e){return wc(Et(r),Et(e))&&r.limitType===e.limitType}function Jd(r){return`${Tc(Et(r))}|lt:${r.limitType}`}function Xr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Qd(i)).join(", ")}]`),to(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>hn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>hn(i)).join(",")),`Target(${n})`}(Et(r))}; limitType=${r.limitType})`}function so(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of ri(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(a,c,u){const h=rh(a,c,u);return a.inclusive?h<=0:h<0}(n.startAt,ri(n),i)||n.endAt&&!function(a,c,u){const h=rh(a,c,u);return a.inclusive?h>=0:h>0}(n.endAt,ri(n),i))}(r,e)}function Kv(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Yd(r){return(e,t)=>{let n=!1;for(const i of ri(r)){const s=Qv(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Qv(r,e,t){const n=r.field.isKeyField()?j.comparator(e.key,t.key):function(s,a,c){const u=a.data.field(s),h=c.data.field(s);return u!==null&&h!==null?ln(u,h):q()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return q()}}/**
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
 */class Mr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){dr(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return jd(this.inner)}size(){return this.innerSize}}/**
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
 */const Xv=new me(j.comparator);function jt(){return Xv}const Zd=new me(j.comparator);function Yn(...r){let e=Zd;for(const t of r)e=e.insert(t.key,t);return e}function ep(r){let e=Zd;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function br(){return ni()}function tp(){return ni()}function ni(){return new Mr(r=>r.toString(),(r,e)=>r.isEqual(e))}const Jv=new me(j.comparator),Yv=new Ve(j.comparator);function ee(...r){let e=Yv;for(const t of r)e=e.add(t);return e}const Zv=new Ve(ne);function eT(){return Zv}/**
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
 */function Ic(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cs(e)?"-0":e}}function rp(r){return{integerValue:""+r}}function tT(r,e){return Pv(e)?rp(e):Ic(r,e)}/**
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
 */class oo{constructor(){this._=void 0}}function rT(r,e,t){return r instanceof gi?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&_c(s)&&(s=ro(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):r instanceof mi?ip(r,e):r instanceof yi?sp(r,e):function(i,s){const a=np(i,s),c=oh(a)+oh(i.Pe);return Va(a)&&Va(i.Pe)?rp(c):Ic(i.serializer,c)}(r,e)}function nT(r,e,t){return r instanceof mi?ip(r,e):r instanceof yi?sp(r,e):t}function np(r,e){return r instanceof ks?function(n){return Va(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class gi extends oo{}class mi extends oo{constructor(e){super(),this.elements=e}}function ip(r,e){const t=op(e);for(const n of r.elements)t.some(i=>St(i,n))||t.push(n);return{arrayValue:{values:t}}}class yi extends oo{constructor(e){super(),this.elements=e}}function sp(r,e){let t=op(e);for(const n of r.elements)t=t.filter(i=>!St(i,n));return{arrayValue:{values:t}}}class ks extends oo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function oh(r){return be(r.integerValue||r.doubleValue)}function op(r){return vc(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class iT{constructor(e,t){this.field=e,this.transform=t}}function sT(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof mi&&i instanceof mi||n instanceof yi&&i instanceof yi?un(n.elements,i.elements,St):n instanceof ks&&i instanceof ks?St(n.Pe,i.Pe):n instanceof gi&&i instanceof gi}(r.transform,e.transform)}class oT{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ms(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ao{}function ap(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new bc(r.key,mt.none()):new wi(r.key,r.data,mt.none());{const t=r.data,n=rt.empty();let i=new Ve(Le.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new pr(r.key,n,new ot(i.toArray()),mt.none())}}function aT(r,e,t){r instanceof wi?function(i,s,a){const c=i.value.clone(),u=ch(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):r instanceof pr?function(i,s,a){if(!ms(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=ch(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(cp(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ii(r,e,t,n){return r instanceof wi?function(s,a,c,u){if(!ms(s.precondition,a))return c;const h=s.value.clone(),d=uh(s.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof pr?function(s,a,c,u){if(!ms(s.precondition,a))return c;const h=uh(s.fieldTransforms,u,a),d=a.data;return d.setAll(cp(s)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(r,e,t,n):function(s,a,c){return ms(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,e,t)}function cT(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=np(n.transform,i||null);s!=null&&(t===null&&(t=rt.empty()),t.set(n.field,s))}return t||null}function ah(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&un(n,i,(s,a)=>sT(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class wi extends ao{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pr extends ao{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cp(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function ch(r,e,t){const n=new Map;ce(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,c=e.data.field(s.field);n.set(s.field,nT(a,c,t[i]))}return n}function uh(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,rT(s,a,e))}return n}class bc extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uT extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lT{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aT(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ii(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ii(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=tp();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const u=ap(a,c);u!==null&&n.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(G.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&un(this.mutations,e.mutations,(t,n)=>ah(t,n))&&un(this.baseMutations,e.baseMutations,(t,n)=>ah(t,n))}}class Ac{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){ce(e.mutations.length===n.length);let i=function(){return Jv}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new Ac(e,t,n,i)}}/**
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
 */class hT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ae,re;function dT(r){switch(r){default:return q();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function up(r){if(r===void 0)return Bt("GRPC error has no .code"),V.UNKNOWN;switch(r){case Ae.OK:return V.OK;case Ae.CANCELLED:return V.CANCELLED;case Ae.UNKNOWN:return V.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return V.INTERNAL;case Ae.UNAVAILABLE:return V.UNAVAILABLE;case Ae.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ae.NOT_FOUND:return V.NOT_FOUND;case Ae.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ae.ABORTED:return V.ABORTED;case Ae.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ae.DATA_LOSS:return V.DATA_LOSS;default:return q()}}(re=Ae||(Ae={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pT(){return new TextEncoder}/**
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
 */const gT=new Ar([4294967295,4294967295],0);function lh(r){const e=pT().encode(r),t=new Vd;return t.update(e),new Uint8Array(t.digest())}function hh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ar([t,n],0),new Ar([i,s],0)]}class Sc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Zn(`Invalid padding: ${t}`);if(n<0)throw new Zn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Zn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Zn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ar.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(Ar.fromNumber(n)));return i.compare(gT)===1&&(i=new Ar([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=lh(e),[n,i]=hh(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);if(!this.de(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Sc(s,i,t);return n.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=lh(e),[n,i]=hh(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class co{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Ei.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new co(G.min(),i,new me(ne),jt(),ee())}}class Ei{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ei(n,t,ee(),ee(),ee())}}/**
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
 */class ys{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class lp{constructor(e,t){this.targetId=e,this.me=t}}class hp{constructor(e,t,n=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class fh{constructor(){this.fe=0,this.ge=ph(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),n=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:q()}}),new Ei(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=ph()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mT{constructor(e){this.Le=e,this.Be=new Map,this.ke=jt(),this.qe=dh(),this.Qe=new me(ne)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(xa(s))if(n===0){const a=new j(s.path);this.Ue(t,a,He.newNoDocument(a,G.min()))}else ce(n===1);else{const a=this.Ye(t);if(a!==n){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=lr(n).toUint8Array()}catch(u){if(u instanceof qd)return cn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Sc(a,i,s)}catch(u){return cn(u instanceof Zn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const c=this.Je(a);if(c){if(s.current&&xa(c.target)){const u=new j(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,He.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let n=ee();this.qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new co(e,t,this.Qe,this.ke,n);return this.ke=jt(),this.qe=dh(),this.Qe=new me(ne),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new fh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ve(ne),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new fh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function dh(){return new me(j.comparator)}function ph(){return new me(j.comparator)}const yT={asc:"ASCENDING",desc:"DESCENDING"},_T={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vT={and:"AND",or:"OR"};class TT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $a(r,e){return r.useProto3Json||to(e)?e:{value:e}}function Ns(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fp(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function wT(r,e){return Ns(r,e.toTimestamp())}function It(r){return ce(!!r),G.fromTimestamp(function(t){const n=ur(t);return new Ce(n.seconds,n.nanos)}(r))}function Rc(r,e){return Fa(r,e).canonicalString()}function Fa(r,e){const t=function(i){return new de(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function dp(r){const e=de.fromString(r);return ce(_p(e)),e}function Ua(r,e){return Rc(r.databaseId,e.path)}function ta(r,e){const t=dp(e);if(t.get(1)!==r.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new j(gp(t))}function pp(r,e){return Rc(r.databaseId,e)}function ET(r){const e=dp(r);return e.length===4?de.emptyPath():gp(e)}function Ba(r){return new de(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function gp(r){return ce(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function gh(r,e,t){return{name:Ua(r,e),fields:t.value.mapValue.fields}}function IT(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,d){return h.useProto3Json?(ce(d===void 0||typeof d=="string"),$e.fromBase64String(d||"")):(ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),$e.fromUint8Array(d||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const d=h.code===void 0?V.UNKNOWN:up(h.code);return new B(d,h.message||"")}(a);t=new hp(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=ta(r,n.document.name),s=It(n.document.updateTime),a=n.document.createTime?It(n.document.createTime):G.min(),c=new rt({mapValue:{fields:n.document.fields}}),u=He.newFoundDocument(i,s,a,c),h=n.targetIds||[],d=n.removedTargetIds||[];t=new ys(h,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=ta(r,n.document),s=n.readTime?It(n.readTime):G.min(),a=He.newNoDocument(i,s),c=n.removedTargetIds||[];t=new ys([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=ta(r,n.document),s=n.removedTargetIds||[];t=new ys([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new fT(i,s),c=n.targetId;t=new lp(c,a)}}return t}function bT(r,e){let t;if(e instanceof wi)t={update:gh(r,e.key,e.value)};else if(e instanceof bc)t={delete:Ua(r,e.key)};else if(e instanceof pr)t={update:gh(r,e.key,e.data),updateMask:NT(e.fieldMask)};else{if(!(e instanceof uT))return q();t={verify:Ua(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){const c=a.transform;if(c instanceof gi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof yi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ks)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw q()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(r,e.precondition)),t}function AT(r,e){return r&&r.length>0?(ce(e!==void 0),r.map(t=>function(i,s){let a=i.updateTime?It(i.updateTime):It(s);return a.isEqual(G.min())&&(a=It(s)),new oT(a,i.transformResults||[])}(t,e))):[]}function ST(r,e){return{documents:[pp(r,e.path)]}}function RT(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=pp(r,i);const s=function(h){if(h.length!==0)return yp(Rt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(d=>function(p){return{field:Jr(p.field),direction:OT(p.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=$a(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function PT(r){let e=ET(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){ce(n===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(m){const p=mp(m);return p instanceof Rt&&Wd(p)?p.getFilters():[p]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(p=>function(v){return new Ds(Yr(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(t.orderBy));let c=null;t.limit&&(c=function(m){let p;return p=typeof m=="object"?m.value:m,to(p)?null:p}(t.limit));let u=null;t.startAt&&(u=function(m){const p=!!m.before,w=m.values||[];return new Os(w,p)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const p=!m.before,w=m.values||[];return new Os(w,p)}(t.endAt)),Hv(e,i,a,s,c,"F",u,h)}function CT(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mp(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Yr(t.unaryFilter.field);return Pe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Yr(t.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yr(t.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yr(t.unaryFilter.field);return Pe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(r):r.fieldFilter!==void 0?function(t){return Pe.create(Yr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Rt.create(t.compositeFilter.filters.map(n=>mp(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(r):q()}function OT(r){return yT[r]}function DT(r){return _T[r]}function kT(r){return vT[r]}function Jr(r){return{fieldPath:r.canonicalString()}}function Yr(r){return Le.fromServerFormat(r.fieldPath)}function yp(r){return r instanceof Pe?function(t){if(t.op==="=="){if(th(t.value))return{unaryFilter:{field:Jr(t.field),op:"IS_NAN"}};if(eh(t.value))return{unaryFilter:{field:Jr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(th(t.value))return{unaryFilter:{field:Jr(t.field),op:"IS_NOT_NAN"}};if(eh(t.value))return{unaryFilter:{field:Jr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(t.field),op:DT(t.op),value:t.value}}}(r):r instanceof Rt?function(t){const n=t.getFilters().map(i=>yp(i));return n.length===1?n[0]:{compositeFilter:{op:kT(t.op),filters:n}}}(r):q()}function NT(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _p(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class rr{constructor(e,t,n,i,s=G.min(),a=G.min(),c=$e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VT{constructor(e){this.ct=e}}function MT(r){const e=PT({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?La(e,e.limit,"L"):e}/**
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
 */class xT{constructor(){this.un=new LT}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(cr.min())}updateCollectionGroup(e,t,n){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class LT{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Ve(de.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Ve(de.comparator)).toArray()}}/**
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
 */const mh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class tt{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new tt(e,tt.DEFAULT_COLLECTION_PERCENTILE,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */tt.DEFAULT_COLLECTION_PERCENTILE=10,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tt.DEFAULT=new tt(41943040,tt.DEFAULT_COLLECTION_PERCENTILE,tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tt.DISABLED=new tt(-1,0,0);/**
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
 */class fn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new fn(0)}static kn(){return new fn(-1)}}/**
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
 */function yh([r,e],[t,n]){const i=ne(r,t);return i===0?ne(e,n):i}class $T{constructor(e){this.Un=e,this.buffer=new Ve(yh),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();yh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class FT{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){F("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wn(t)?F("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Tn(t)}await this.Hn(3e5)})}}class UT{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return N.resolve(eo.oe);const n=new $T(t);return this.Jn.forEachTarget(e,i=>n.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>n.zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(mh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,i,s,a,c,u,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(n=m,c=Date.now(),this.removeTargets(e,n,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(h=Date.now(),Qr()<=Z.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function BT(r,e){return new UT(r,e)}/**
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
 */class jT{constructor(){this.changes=new Mr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?N.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class zT{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&ii(n.mutation,i,ot.empty(),Ce.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ee()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ee()){const i=br();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let a=Yn();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=br();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ee()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,n,i){let s=jt();const a=ni(),c=function(){return ni()}();return t.forEach((u,h)=>{const d=n.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof pr)?s=s.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ii(d.mutation,h,d.mutation.getFieldMask(),Ce.now())):a.set(h.key,ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>{var m;return c.set(h,new qT(d,(m=a.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const n=ni();let i=new me((a,c)=>a-c),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let d=n.get(u)||ot.empty();d=c.applyToLocalView(h,d),n.set(u,d);const m=(i.get(c.batchId)||ee()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,d=u.value,m=tp();d.forEach(p=>{if(!s.has(p)){const w=ap(t.get(p),n.get(p));w!==null&&m.set(p,w),s=s.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return N.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):N.resolve(br());let c=-1,u=s;return a.next(h=>N.forEach(h,(d,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(d=>({batchId:c,changes:ep(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(n=>{let i=Yn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=Yn();return this.indexManager.getCollectionParents(e,s).next(c=>N.forEach(c,u=>{const h=function(m,p){return new no(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(d=>{d.forEach((m,p)=>{a=a.insert(m,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(a=>{s.forEach((u,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,He.newInvalidDocument(d)))});let c=Yn();return a.forEach((u,h)=>{const d=s.get(u);d!==void 0&&ii(d.mutation,h,ot.empty(),Ce.now()),so(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class HT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:It(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:MT(i.bundledQuery),readTime:It(i.readTime)}}(t)),N.resolve()}}/**
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
 */class GT{constructor(){this.overlays=new me(j.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const n=br();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),N.resolve()}getOverlaysForCollection(e,t,n){const i=br(),s=t.length+1,a=new j(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new me((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let d=s.get(h.largestBatchId);d===null&&(d=br(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=br(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=i)););return N.resolve(c)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new hT(t,n));let s=this.Ir.get(t);s===void 0&&(s=ee(),this.Ir.set(t,s)),this.Ir.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class WT{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Pc{constructor(){this.Tr=new Ve(Ne.Er),this.dr=new Ve(Ne.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Ne(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Ne(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new j(new de([])),n=new Ne(t,e),i=new Ne(t,e+1),s=[];return this.dr.forEachInRange([n,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new j(new de([])),n=new Ne(t,e),i=new Ne(t,e+1);let s=ee();return this.dr.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Ne(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ne{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return j.comparator(e.key,t.key)||ne(e.wr,t.wr)}static Ar(e,t){return ne(e.wr,t.wr)||j.comparator(e.key,t.key)}}/**
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
 */class KT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ve(Ne.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lT(s,t,n,i);this.mutationQueue.push(a);for(const c of i)this.br=this.br.add(new Ne(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ne(t,0),i=new Ne(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],a=>{const c=this.Dr(a.wr);s.push(c)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ve(ne);return t.forEach(i=>{const s=new Ne(i,0),a=new Ne(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],c=>{n=n.add(c.wr)})}),N.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;j.isDocumentKey(s)||(s=s.child(""));const a=new Ne(new j(s),0);let c=new Ve(ne);return this.br.forEachWhile(u=>{const h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.wr)),!0)},a),N.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ce(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return N.forEach(t.mutations,i=>{const s=new Ne(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Ne(t,0),i=this.br.firstAfterOrEqual(n);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class QT{constructor(e){this.Mr=e,this.docs=function(){return new me(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return N.resolve(n?n.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let n=jt();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():He.newInvalidDocument(i))}),N.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=jt();const a=t.path,c=new j(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||bv(Iv(d),n)<=0||(i.has(d.key)||so(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,n,i){q()}Or(e,t){return N.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new XT(this)}getSize(e){return N.resolve(this.size)}}class XT extends jT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class JT{constructor(e){this.persistence=e,this.Nr=new Mr(t=>Tc(t),wc),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Pc,this.targetCount=0,this.kr=fn.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new fn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return N.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),N.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return N.resolve(n)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
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
 */class vp{constructor(e,t){this.qr={},this.overlays={},this.Qr=new eo(0),this.Kr=!1,this.Kr=!0,this.$r=new WT,this.referenceDelegate=e(this),this.Ur=new JT(this),this.indexManager=new xT,this.remoteDocumentCache=function(i){return new QT(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new VT(t),this.Gr=new HT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new GT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new KT(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){F("MemoryPersistence","Starting transaction:",e);const i=new YT(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return N.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class YT extends Sv{constructor(e){super(),this.currentSequenceNumber=e}}class Cc{constructor(e){this.persistence=e,this.Jr=new Pc,this.Yr=null}static Zr(e){return new Cc(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),N.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,n=>{const i=j.fromPath(n);return this.ei(e,i).next(s=>{s||t.removeEntry(i,G.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}class Vs{constructor(e,t){this.persistence=e,this.ti=new Mr(n=>Cv(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=BT(this,t)}static Zr(e,t){return new Vs(e,t)}zr(){}jr(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Yn(e){const t=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}Zn(e,t){return N.forEach(this.ti,(n,i)=>this.nr(e,n,i).next(s=>s?N.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,a=>this.nr(e,a,t).next(c=>{c||(n++,s.removeEntry(a,G.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ti.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ti.set(n,e.currentSequenceNumber),N.resolve()}removeReference(e,t,n){return this.ti.set(n,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.ti.set(t,e.currentSequenceNumber),N.resolve()}Wr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ps(e.data.value)),t}nr(e,t,n){return N.or([()=>this.persistence.Hr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ti.get(t);return N.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Oc{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=ee(),i=ee();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Oc(e,t.fromCache,n,i)}}/**
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
 */class ZT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ew{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ky()?8:Rv(Ge())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new ZT;return this.Xi(e,t,a).next(c=>{if(s.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>s.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(Qr()<=Z.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Xr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(Qr()<=Z.DEBUG&&F("QueryEngine","Query:",Xr(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Qr()<=Z.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Xr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Et(t))):N.resolve())}Yi(e,t){if(sh(t))return N.resolve(null);let n=Et(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=La(t,null,"F"),n=Et(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const a=ee(...s);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,n).next(u=>{const h=this.ts(t,c);return this.ns(t,h,a,u.readTime)?this.Yi(e,La(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,n,i){return sh(t)||i.isEqual(G.min())?N.resolve(null):this.Ji.getDocuments(e,n).next(s=>{const a=this.ts(t,s);return this.ns(t,a,n,i)?N.resolve(null):(Qr()<=Z.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xr(t)),this.rs(e,a,t,Ev(i,-1)).next(c=>c))})}ts(e,t){let n=new Ve(Yd(e));return t.forEach((i,s)=>{so(e,s)&&(n=n.add(s))}),n}ns(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,n){return Qr()<=Z.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Xr(t)),this.Ji.getDocumentsMatchingQuery(e,t,cr.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class tw{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new me(ne),this._s=new Mr(s=>Tc(s),wc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function rw(r,e,t,n){return new tw(r,e,t,n)}async function Tp(r,e){const t=K(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],c=[];let u=ee();for(const h of i){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of s){c.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(n,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function nw(r,e){const t=K(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,d){const m=h.batch,p=m.keys();let w=N.resolve();return p.forEach(v=>{w=w.next(()=>d.getEntry(u,v)).next(A=>{const E=h.docVersions.get(v);ce(E!==null),A.version.compareTo(E)<0&&(m.applyToRemoteDocument(A,h),A.isValidDocument()&&(A.setReadTime(h.commitVersion),d.addEntry(A)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let u=ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function wp(r){const e=K(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function iw(r,e){const t=K(r),n=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const c=[];e.targetChanges.forEach((d,m)=>{const p=i.get(m);if(!p)return;c.push(t.Ur.removeMatchingKeys(s,d.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,d.addedDocuments,m)));let w=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken($e.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,n)),i=i.insert(m,w),function(A,E,k){return A.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(p,w,d)&&c.push(t.Ur.updateTargetData(s,w))});let u=jt(),h=ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),c.push(sw(s,a,e.documentUpdates).next(d=>{u=d.Ps,h=d.Is})),!n.isEqual(G.min())){const d=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));c.push(d)}return N.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.os=i,s))}function sw(r,e,t){let n=ee(),i=ee();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let a=jt();return t.forEach((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function ow(r,e){const t=K(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function aw(r,e){const t=K(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Ur.getTargetData(n,e).next(s=>s?(i=s,N.resolve(i)):t.Ur.allocateTargetId(n).next(a=>(i=new rr(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function ja(r,e,t){const n=K(r),i=n.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!wn(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function _h(r,e,t){const n=K(r);let i=G.min(),s=ee();return n.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,d){const m=K(u),p=m._s.get(d);return p!==void 0?N.resolve(m.os.get(p)):m.Ur.getTargetData(h,d)}(n,a,Et(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>n.ss.getDocumentsMatchingQuery(a,e,t?i:G.min(),t?s:ee())).next(c=>(cw(n,Kv(e),c),{documents:c,Ts:s})))}function cw(r,e,t){let n=r.us.get(e)||G.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.us.set(e,n)}class vh{constructor(){this.activeTargetIds=eT()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uw{constructor(){this.so=new vh,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new vh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lw{_o(e){}shutdown(){}}/**
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
 */class Th{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rs=null;function ra(){return rs===null?rs=function(){return 268435456+Math.round(2147483648*Math.random())}():rs++,"0x"+rs.toString(16)}/**
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
 */const hw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fw{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const qe="WebChannelConnection";class dw extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,n,i,s,a){const c=ra(),u=this.xo(t,n.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(t,u,h,i).then(d=>(F("RestConnection",`Received RPC '${t}' ${c}: `,d),d),d=>{throw cn("RestConnection",`RPC '${t}' ${c} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(t,n,i,s,a,c){return this.Mo(t,n,i,s,a)}Oo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,n){const i=hw[t];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const s=ra();return new Promise((a,c)=>{const u=new Md;u.setWithCredentials(!0),u.listenOnce(xd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ds.NO_ERROR:const d=u.getResponseJson();F(qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),a(d);break;case ds.TIMEOUT:F(qe,`RPC '${e}' ${s} timed out`),c(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case ds.HTTP_ERROR:const m=u.getStatus();if(F(qe,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const w=p==null?void 0:p.error;if(w&&w.status&&w.message){const v=function(E){const k=E.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(k)>=0?k:V.UNKNOWN}(w.status);c(new B(v,w.message))}else c(new B(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(V.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{F(qe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);F(qe,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,n,15)})}Bo(e,t,n){const i=ra(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Fd(),c=$d(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const d=s.join("");F(qe,`Creating RPC '${e}' stream ${i}: ${d}`,u);const m=a.createWebChannel(d,u);let p=!1,w=!1;const v=new fw({Io:E=>{w?F(qe,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(p||(F(qe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),p=!0),F(qe,`RPC '${e}' stream ${i} sending:`,E),m.send(E))},To:()=>m.close()}),A=(E,k,C)=>{E.listen(k,D=>{try{C(D)}catch(M){setTimeout(()=>{throw M},0)}})};return A(m,Jn.EventType.OPEN,()=>{w||(F(qe,`RPC '${e}' stream ${i} transport opened.`),v.yo())}),A(m,Jn.EventType.CLOSE,()=>{w||(w=!0,F(qe,`RPC '${e}' stream ${i} transport closed`),v.So())}),A(m,Jn.EventType.ERROR,E=>{w||(w=!0,cn(qe,`RPC '${e}' stream ${i} transport errored:`,E),v.So(new B(V.UNAVAILABLE,"The operation could not be completed")))}),A(m,Jn.EventType.MESSAGE,E=>{var k;if(!w){const C=E.data[0];ce(!!C);const D=C,M=D.error||((k=D[0])===null||k===void 0?void 0:k.error);if(M){F(qe,`RPC '${e}' stream ${i} received error:`,M);const L=M.status;let $=function(_){const I=Ae[_];if(I!==void 0)return up(I)}(L),b=M.message;$===void 0&&($=V.INTERNAL,b="Unknown error status: "+L+" with message "+M.message),w=!0,v.So(new B($,b)),m.close()}else F(qe,`RPC '${e}' stream ${i} received:`,C),v.bo(C)}}),A(c,Ld.STAT_EVENT,E=>{E.stat===ka.PROXY?F(qe,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===ka.NOPROXY&&F(qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.wo()},0),v}}function na(){return typeof document<"u"?document:null}/**
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
 */function uo(r){return new TT(r,!0)}/**
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
 */class Ep{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Ip{constructor(e,t,n,i,s,a,c,u){this.ui=e,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ep(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Bt(t.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===t&&this.P_(n,i)},n=>{e(()=>{const i=new B(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pw extends Ip{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=IT(this.serializer,e),n=function(s){if(!("targetChange"in s))return G.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?It(a.readTime):G.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Ba(this.serializer),t.addTarget=function(s,a){let c;const u=a.target;if(c=xa(u)?{documents:ST(s,u)}:{query:RT(s,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=fp(s,a.resumeToken);const h=$a(s,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(G.min())>0){c.readTime=Ns(s,a.snapshotVersion.toTimestamp());const h=$a(s,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=CT(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Ba(this.serializer),t.removeTarget=e,this.a_(t)}}class gw extends Ip{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=AT(e.writeResults,e.commitTime),n=It(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Ba(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>bT(this.serializer,n))};this.a_(t)}}/**
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
 */class mw extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Fa(t,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(V.UNKNOWN,s.toString())})}Lo(e,t,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Fa(t,n),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class yw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Bt(t),this.D_=!1):F("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _w{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{n.enqueueAndForget(async()=>{xr(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=K(u);h.L_.add(4),await Ii(h),h.q_.set("Unknown"),h.L_.delete(4),await lo(h)}(this))})}),this.q_=new yw(n,i)}}async function lo(r){if(xr(r))for(const e of r.B_)await e(!0)}async function Ii(r){for(const e of r.B_)await e(!1)}function bp(r,e){const t=K(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Vc(t)?Nc(t):En(t).r_()&&kc(t,e))}function Dc(r,e){const t=K(r),n=En(t);t.N_.delete(e),n.r_()&&Ap(t,e),t.N_.size===0&&(n.r_()?n.o_():xr(t)&&t.q_.set("Unknown"))}function kc(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}En(r).A_(e)}function Ap(r,e){r.Q_.xe(e),En(r).R_(e)}function Nc(r){r.Q_=new mT({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),En(r).start(),r.q_.v_()}function Vc(r){return xr(r)&&!En(r).n_()&&r.N_.size>0}function xr(r){return K(r).L_.size===0}function Sp(r){r.Q_=void 0}async function vw(r){r.q_.set("Online")}async function Tw(r){r.N_.forEach((e,t)=>{kc(r,e)})}async function ww(r,e){Sp(r),Vc(r)?(r.q_.M_(e),Nc(r)):r.q_.set("Unknown")}async function Ew(r,e,t){if(r.q_.set("Online"),e instanceof hp&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(r,e)}catch(n){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ms(r,n)}else if(e instanceof ys?r.Q_.Ke(e):e instanceof lp?r.Q_.He(e):r.Q_.We(e),!t.isEqual(G.min()))try{const n=await wp(r.localStore);t.compareTo(n)>=0&&await function(s,a){const c=s.Q_.rt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(h);d&&s.N_.set(h,d.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken($e.EMPTY_BYTE_STRING,d.snapshotVersion)),Ap(s,u);const m=new rr(d.target,u,h,d.sequenceNumber);kc(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){F("RemoteStore","Failed to raise snapshot:",n),await Ms(r,n)}}async function Ms(r,e,t){if(!wn(e))throw e;r.L_.add(1),await Ii(r),r.q_.set("Offline"),t||(t=()=>wp(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await lo(r)})}function Rp(r,e){return e().catch(t=>Ms(r,t,e))}async function ho(r){const e=K(r),t=fr(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Iw(e);)try{const i=await ow(e.localStore,n);if(i===null){e.O_.length===0&&t.o_();break}n=i.batchId,bw(e,i)}catch(i){await Ms(e,i)}Pp(e)&&Cp(e)}function Iw(r){return xr(r)&&r.O_.length<10}function bw(r,e){r.O_.push(e);const t=fr(r);t.r_()&&t.V_&&t.m_(e.mutations)}function Pp(r){return xr(r)&&!fr(r).n_()&&r.O_.length>0}function Cp(r){fr(r).start()}async function Aw(r){fr(r).p_()}async function Sw(r){const e=fr(r);for(const t of r.O_)e.m_(t.mutations)}async function Rw(r,e,t){const n=r.O_.shift(),i=Ac.from(n,e,t);await Rp(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await ho(r)}async function Pw(r,e){e&&fr(r).V_&&await async function(n,i){if(function(a){return dT(a)&&a!==V.ABORTED}(i.code)){const s=n.O_.shift();fr(n).s_(),await Rp(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ho(n)}}(r,e),Pp(r)&&Cp(r)}async function wh(r,e){const t=K(r);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const n=xr(t);t.L_.add(3),await Ii(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await lo(t)}async function Cw(r,e){const t=K(r);e?(t.L_.delete(2),await lo(t)):e||(t.L_.add(2),await Ii(t),t.q_.set("Unknown"))}function En(r){return r.K_||(r.K_=function(t,n,i){const s=K(t);return s.w_(),new pw(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:vw.bind(null,r),Ro:Tw.bind(null,r),mo:ww.bind(null,r),d_:Ew.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),Vc(r)?Nc(r):r.q_.set("Unknown")):(await r.K_.stop(),Sp(r))})),r.K_}function fr(r){return r.U_||(r.U_=function(t,n,i){const s=K(t);return s.w_(),new gw(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Aw.bind(null,r),mo:Pw.bind(null,r),f_:Sw.bind(null,r),g_:Rw.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await ho(r)):(await r.U_.stop(),r.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class Mc{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,c=new Mc(e,t,a,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xc(r,e){if(Bt("AsyncQueue",`${e}: ${r}`),wn(r))return new B(V.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class tn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||j.comparator(t.key,n.key):(t,n)=>j.comparator(t.key,n.key),this.keyedMap=Yn(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new tn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new tn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Eh{constructor(){this.W_=new me(j.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class dn{constructor(e,t,n,i,s,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new dn(e,t,tn.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&io(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Ow{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Dw{constructor(){this.queries=Ih(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const i=K(t),s=i.queries;i.queries=Ih(),s.forEach((a,c)=>{for(const u of c.j_)u.onError(n)})})(this,new B(V.ABORTED,"Firestore shutting down"))}}function Ih(){return new Mr(r=>Jd(r),io)}async function Op(r,e){const t=K(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(n=2):(s=new Ow,n=e.J_()?0:1);try{switch(n){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=xc(a,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Lc(t)}async function Dp(r,e){const t=K(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function kw(r,e){const t=K(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.j_)c.X_(i)&&(n=!0);a.z_=i}}n&&Lc(t)}function Nw(r,e,t){const n=K(r),i=n.queries.get(e);if(i)for(const s of i.j_)s.onError(t);n.queries.delete(e)}function Lc(r){r.Y_.forEach(e=>{e.next()})}var qa,bh;(bh=qa||(qa={})).ea="default",bh.Cache="cache";class kp{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new dn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qa.Cache}}/**
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
 */class Np{constructor(e){this.key=e}}class Vp{constructor(e){this.key=e}}class Vw{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=Yd(e),this.Ra=new tn(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new Eh,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,m)=>{const p=i.get(d),w=so(this.query,m)?m:null,v=!!p&&this.mutatedKeys.has(p.key),A=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let E=!1;p&&w?p.data.isEqual(w.data)?v!==A&&(n.track({type:3,doc:w}),E=!0):this.ga(p,w)||(n.track({type:2,doc:w}),E=!0,(u&&this.Aa(w,u)>0||h&&this.Aa(w,h)<0)&&(c=!0)):!p&&w?(n.track({type:0,doc:w}),E=!0):p&&!w&&(n.track({type:1,doc:p}),E=!0,(u||h)&&(c=!0)),E&&(w?(a=a.add(w),s=A?s.add(d):s.delete(d)):(a=a.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),s=s.delete(d.key),n.track({type:1,doc:d})}return{Ra:a,fa:n,ns:c,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((d,m)=>function(w,v){const A=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return A(w)-A(v)}(d.type,m.type)||this.Aa(d.doc,m.doc)),this.pa(n),i=i!=null&&i;const c=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new dn(this.query,e.Ra,s,a,e.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Eh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Vp(n))}),this.da.forEach(n=>{e.has(n)||t.push(new Np(n))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return dn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Mw{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class xw{constructor(e){this.key=e,this.va=!1}}class Lw{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Mr(c=>Jd(c),io),this.Ma=new Map,this.xa=new Set,this.Oa=new me(j.comparator),this.Na=new Map,this.La=new Pc,this.Ba={},this.ka=new Map,this.qa=fn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $w(r,e,t=!0){const n=Up(r);let i;const s=n.Fa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Mp(n,e,t,!0),i}async function Fw(r,e){const t=Up(r);await Mp(t,e,!0,!1)}async function Mp(r,e,t,n){const i=await aw(r.localStore,Et(e)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,t);let c;return n&&(c=await Uw(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&bp(r.remoteStore,i),c}async function Uw(r,e,t,n,i){r.Ka=(m,p,w)=>async function(A,E,k,C){let D=E.view.ma(k);D.ns&&(D=await _h(A.localStore,E.query,!1).then(({documents:b})=>E.view.ma(b,D)));const M=C&&C.targetChanges.get(E.targetId),L=C&&C.targetMismatches.get(E.targetId)!=null,$=E.view.applyChanges(D,A.isPrimaryClient,M,L);return Sh(A,E.targetId,$.wa),$.snapshot}(r,m,p,w);const s=await _h(r.localStore,e,!0),a=new Vw(e,s.Ts),c=a.ma(s.documents),u=Ei.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=a.applyChanges(c,r.isPrimaryClient,u);Sh(r,t,h.wa);const d=new Mw(e,t,a);return r.Fa.set(e,d),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function Bw(r,e,t){const n=K(r),i=n.Fa.get(e),s=n.Ma.get(i.targetId);if(s.length>1)return n.Ma.set(i.targetId,s.filter(a=>!io(a,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ja(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Dc(n.remoteStore,i.targetId),za(n,i.targetId)}).catch(Tn)):(za(n,i.targetId),await ja(n.localStore,i.targetId,!0))}async function jw(r,e){const t=K(r),n=t.Fa.get(e),i=t.Ma.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Dc(t.remoteStore,n.targetId))}async function qw(r,e,t){const n=Xw(r);try{const i=await function(a,c){const u=K(a),h=Ce.now(),d=c.reduce((w,v)=>w.add(v.key),ee());let m,p;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let v=jt(),A=ee();return u.cs.getEntries(w,d).next(E=>{v=E,v.forEach((k,C)=>{C.isValidDocument()||(A=A.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,v)).next(E=>{m=E;const k=[];for(const C of c){const D=cT(C,m.get(C.key).overlayedDocument);D!=null&&k.push(new pr(C.key,D,zd(D.value.mapValue),mt.exists(!0)))}return u.mutationQueue.addMutationBatch(w,h,k,c)}).next(E=>{p=E;const k=E.applyToLocalDocumentSet(m,A);return u.documentOverlayCache.saveOverlays(w,E.batchId,k)})}).then(()=>({batchId:p.batchId,changes:ep(m)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new me(ne)),h=h.insert(c,u),a.Ba[a.currentUser.toKey()]=h}(n,i.batchId,t),await bi(n,i.changes),await ho(n.remoteStore)}catch(i){const s=xc(i,"Failed to persist write");t.reject(s)}}async function xp(r,e){const t=K(r);try{const n=await iw(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ce(a.va):i.removedDocuments.size>0&&(ce(a.va),a.va=!1))}),await bi(t,n,e)}catch(n){await Tn(n)}}function Ah(r,e,t){const n=K(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Fa.forEach((s,a)=>{const c=a.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=K(a);u.onlineState=c;let h=!1;u.queries.forEach((d,m)=>{for(const p of m.j_)p.Z_(c)&&(h=!0)}),h&&Lc(u)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function zw(r,e,t){const n=K(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Na.get(e),s=i&&i.key;if(s){let a=new me(j.comparator);a=a.insert(s,He.newNoDocument(s,G.min()));const c=ee().add(s),u=new co(G.min(),new Map,new me(ne),a,c);await xp(n,u),n.Oa=n.Oa.remove(s),n.Na.delete(e),$c(n)}else await ja(n.localStore,e,!1).then(()=>za(n,e,t)).catch(Tn)}async function Hw(r,e){const t=K(r),n=e.batch.batchId;try{const i=await nw(t.localStore,e);$p(t,n,null),Lp(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await bi(t,i)}catch(i){await Tn(i)}}async function Gw(r,e,t){const n=K(r);try{const i=await function(a,c){const u=K(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(ce(m!==null),d=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(n.localStore,e);$p(n,e,t),Lp(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await bi(n,i)}catch(i){await Tn(i)}}function Lp(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function $p(r,e,t){const n=K(r);let i=n.Ba[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function za(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Fp(r,n)})}function Fp(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(Dc(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),$c(r))}function Sh(r,e,t){for(const n of t)n instanceof Np?(r.La.addReference(n.key,e),Ww(r,n)):n instanceof Vp?(F("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Fp(r,n.key)):q()}function Ww(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(F("SyncEngine","New document in limbo: "+t),r.xa.add(n),$c(r))}function $c(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new j(de.fromString(e)),n=r.qa.next();r.Na.set(n,new xw(t)),r.Oa=r.Oa.insert(t,n),bp(r.remoteStore,new rr(Et(Ec(t.path)),n,"TargetPurposeLimboResolution",eo.oe))}}async function bi(r,e,t){const n=K(r),i=[],s=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((c,u)=>{a.push(n.Ka(u,e,t).then(h=>{var d;if((h||t)&&n.isPrimaryClient){const m=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Oc.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(a),n.Ca.d_(i),await async function(u,h){const d=K(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>N.forEach(h,p=>N.forEach(p.$i,w=>d.persistence.referenceDelegate.addReference(m,p.targetId,w)).next(()=>N.forEach(p.Ui,w=>d.persistence.referenceDelegate.removeReference(m,p.targetId,w)))))}catch(m){if(!wn(m))throw m;F("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const w=d.os.get(p),v=w.snapshotVersion,A=w.withLastLimboFreeSnapshotVersion(v);d.os=d.os.insert(p,A)}}}(n.localStore,s))}async function Kw(r,e){const t=K(r);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const n=await Tp(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(c=>{c.forEach(u=>{u.reject(new B(V.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await bi(t,n.hs)}}function Qw(r,e){const t=K(r),n=t.Na.get(e);if(n&&n.va)return ee().add(n.key);{let i=ee();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const c=t.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function Up(r){const e=K(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=xp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zw.bind(null,e),e.Ca.d_=kw.bind(null,e.eventManager),e.Ca.$a=Nw.bind(null,e.eventManager),e}function Xw(r){const e=K(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gw.bind(null,e),e}class xs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return rw(this.persistence,new ew,e.initialUser,this.serializer)}Ga(e){return new vp(Cc.Zr,this.serializer)}Wa(e){return new uw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xs.provider={build:()=>new xs};class Jw extends xs{constructor(e){super(),this.cacheSizeBytes=e}ja(e,t){ce(this.persistence.referenceDelegate instanceof Vs);const n=this.persistence.referenceDelegate.garbageCollector;return new FT(n,e.asyncQueue,t)}Ga(e){const t=this.cacheSizeBytes!==void 0?tt.withCacheSize(this.cacheSizeBytes):tt.DEFAULT;return new vp(n=>Vs.Zr(n,t),this.serializer)}}class Ha{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ah(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kw.bind(null,this.syncEngine),await Cw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Dw}()}createDatastore(e){const t=uo(e.databaseInfo.databaseId),n=function(s){return new dw(s)}(e.databaseInfo);return function(s,a,c,u){return new mw(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,a,c){return new _w(n,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Ah(this.syncEngine,t,0),function(){return Th.D()?new Th:new lw}())}createSyncEngine(e,t){return function(i,s,a,c,u,h,d){const m=new Lw(i,s,a,c,u,h);return d&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=K(i);F("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ii(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ha.provider={build:()=>new Ha};/**
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
 */class Bp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Bt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Yw{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=Bd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=xc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ia(r,e){r.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Tp(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Rh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Zw(r);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>wh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>wh(e.remoteStore,i)),r._onlineComponents=e}async function Zw(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await ia(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;cn("Error using user provided cache. Falling back to memory cache: "+t),await ia(r,new xs)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await ia(r,new Jw(void 0));return r._offlineComponents}async function jp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Rh(r,r._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Rh(r,new Ha))),r._onlineComponents}function eE(r){return jp(r).then(e=>e.syncEngine)}async function qp(r){const e=await jp(r),t=e.eventManager;return t.onListen=$w.bind(null,e.syncEngine),t.onUnlisten=Bw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Fw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jw.bind(null,e.syncEngine),t}function tE(r,e,t={}){const n=new Ft;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,h){const d=new Bp({next:p=>{d.Za(),a.enqueueAndForget(()=>Dp(s,m));const w=p.docs.has(c);!w&&p.fromCache?h.reject(new B(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&p.fromCache&&u&&u.source==="server"?h.reject(new B(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new kp(Ec(c.path),d,{includeMetadataChanges:!0,_a:!0});return Op(s,m)}(await qp(r),r.asyncQueue,e,t,n)),n.promise}function rE(r,e,t={}){const n=new Ft;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,h){const d=new Bp({next:p=>{d.Za(),a.enqueueAndForget(()=>Dp(s,m)),p.fromCache&&u.source==="server"?h.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new kp(c,d,{includeMetadataChanges:!0,_a:!0});return Op(s,m)}(await qp(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function zp(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Ph=new Map;/**
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
 */function Hp(r,e,t){if(!t)throw new B(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function nE(r,e,t,n){if(e===!0&&n===!0)throw new B(V.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ch(r){if(!j.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Oh(r){if(j.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Fc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":q()}function qt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fc(r);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class Dh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zp((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fo{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dv;switch(n.type){case"firstParty":return new yv(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ph.get(t);n&&(F("ComponentProvider","Removing Datastore"),Ph.delete(t),n.terminate())}(this),Promise.resolve()}}function iE(r,e,t,n={}){var i;const s=(r=qt(r,fo))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let c,u;if(typeof n.mockUserToken=="string")c=n.mockUserToken,u=ze.MOCK_USER;else{c=Pd(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const h=n.mockUserToken.sub||n.mockUserToken.user_id;if(!h)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ze(h)}r._authCredentials=new pv(new Ud(c,u))}}/**
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
 */class po{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new po(this.firestore,e,this._query)}}class ct{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class or extends po{constructor(e,t,n){super(e,t,Ec(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new j(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function gt(r,e,...t){if(r=Oe(r),Hp("collection","path",e),r instanceof fo){const n=de.fromString(e,...t);return Oh(n),new or(r,null,n)}{if(!(r instanceof ct||r instanceof or))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(de.fromString(e,...t));return Oh(n),new or(r.firestore,null,n)}}function ge(r,e,...t){if(r=Oe(r),arguments.length===1&&(e=Bd.newId()),Hp("doc","path",e),r instanceof fo){const n=de.fromString(e,...t);return Ch(n),new ct(r,null,new j(n))}{if(!(r instanceof ct||r instanceof or))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(de.fromString(e,...t));return Ch(n),new ct(r.firestore,r instanceof or?r.converter:null,new j(n))}}/**
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
 */class kh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ep(this,"async_queue_retry"),this.Vu=()=>{const n=na();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=na();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=na();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ft;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wn(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(n);throw Bt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Mc.createAndSchedule(this,e,t,n,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class In extends fo{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new kh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kh(e),this._firestoreClient=void 0,await e}}}function sE(r,e){const t=typeof r=="object"?r:mc(),n=typeof r=="string"?r:"(default)",i=Zs(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=Ad("firestore");s&&iE(i,...s)}return i}function Uc(r){if(r._terminated)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||oE(r),r._firestoreClient}function oE(r){var e,t,n;const i=r._freezeSettings(),s=function(c,u,h,d){return new kv(c,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,zp(d.experimentalLongPollingOptions),d.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Yw(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(r._componentsProvider))}/**
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
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn($e.fromBase64String(e))}catch(t){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pn($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class go{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mo{constructor(e){this._methodName=e}}/**
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
 */class Bc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class jc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const aE=/^__.*__$/;class cE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,t,this.fieldTransforms):new wi(e,this.data,t,this.fieldTransforms)}}class Gp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new pr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Wp(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class qc{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new qc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ls(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Wp(this.Cu)&&aE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class uE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||uo(e)}Qu(e,t,n,i=!1){return new qc({Cu:e,methodName:t,qu:n,path:Le.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kp(r){const e=r._freezeSettings(),t=uo(r._databaseId);return new uE(r._databaseId,!!e.ignoreUndefinedProperties,t)}function lE(r,e,t,n,i,s={}){const a=r.Qu(s.merge||s.mergeFields?2:0,e,t,i);Hc("Data must be an object, but it was:",a,n);const c=Qp(n,a);let u,h;if(s.merge)u=new ot(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const d=[];for(const m of s.mergeFields){const p=Ga(e,m,t);if(!a.contains(p))throw new B(V.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Jp(d,p)||d.push(p)}u=new ot(d),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new cE(new rt(c),u,h)}class Ai extends mo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ai}}class zc extends mo{_toFieldTransform(e){return new iT(e.path,new gi)}isEqual(e){return e instanceof zc}}function hE(r,e,t,n){const i=r.Qu(1,e,t);Hc("Data must be an object, but it was:",i,n);const s=[],a=rt.empty();dr(n,(u,h)=>{const d=Gc(e,u,t);h=Oe(h);const m=i.Nu(d);if(h instanceof Ai)s.push(d);else{const p=yo(h,m);p!=null&&(s.push(d),a.set(d,p))}});const c=new ot(s);return new Gp(a,c,i.fieldTransforms)}function fE(r,e,t,n,i,s){const a=r.Qu(1,e,t),c=[Ga(e,n,t)],u=[i];if(s.length%2!=0)throw new B(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)c.push(Ga(e,s[p])),u.push(s[p+1]);const h=[],d=rt.empty();for(let p=c.length-1;p>=0;--p)if(!Jp(h,c[p])){const w=c[p];let v=u[p];v=Oe(v);const A=a.Nu(w);if(v instanceof Ai)h.push(w);else{const E=yo(v,A);E!=null&&(h.push(w),d.set(w,E))}}const m=new ot(h);return new Gp(d,m,a.fieldTransforms)}function yo(r,e){if(Xp(r=Oe(r)))return Hc("Unsupported field value:",e,r),Qp(r,e);if(r instanceof mo)return function(n,i){if(!Wp(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const s=[];let a=0;for(const c of n){let u=yo(c,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tT(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ce.fromDate(n);return{timestampValue:Ns(i.serializer,s)}}if(n instanceof Ce){const s=new Ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ns(i.serializer,s)}}if(n instanceof Bc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof pn)return{bytesValue:fp(i.serializer,n._byteString)};if(n instanceof ct){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Rc(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof jc)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ic(c.serializer,u)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${Fc(n)}`)}(r,e)}function Qp(r,e){const t={};return jd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dr(r,(n,i)=>{const s=yo(i,e.Mu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function Xp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ce||r instanceof Bc||r instanceof pn||r instanceof ct||r instanceof mo||r instanceof jc)}function Hc(r,e,t){if(!Xp(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=Fc(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Ga(r,e,t){if((e=Oe(e))instanceof go)return e._internalPath;if(typeof e=="string")return Gc(r,e);throw Ls("Field path arguments must be of type string or ",r,!1,void 0,t)}const dE=new RegExp("[~\\*/\\[\\]]");function Gc(r,e,t){if(e.search(dE)>=0)throw Ls(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new go(...e.split("."))._internalPath}catch{throw Ls(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ls(r,e,t,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${n}`),a&&(u+=` in document ${i}`),u+=")"),new B(V.INVALID_ARGUMENT,c+r+u)}function Jp(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class Yp{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class pE extends Yp{data(){return super.data()}}function Zp(r,e){return typeof e=="string"?Gc(r,e):e instanceof go?e._internalPath:e._delegate._internalPath}/**
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
 */function gE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mE{convertValue(e,t="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return dr(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>be(a.doubleValue));return new jc(s)}convertGeoPoint(e){return new Bc(be(e.latitude),be(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ro(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const t=ur(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=de.fromString(e);ce(_p(n));const i=new di(n.get(1),n.get(3)),s=new j(n.popFirst(5));return i.isEqual(t)||Bt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function yE(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
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
 */class ei{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eg extends Yp{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Zp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class _s extends eg{data(e={}){return super.data(e)}}class _E{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ei(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new _s(this._firestore,this._userDataWriter,n.key,n,new ei(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new _s(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ei(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new _s(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ei(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:vE(c.type),doc:u,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function vE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function Tr(r){r=qt(r,ct);const e=qt(r.firestore,In);return tE(Uc(e),r._key).then(t=>TE(e,r,t))}class tg extends mE{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,t)}}function Hr(r){r=qt(r,po);const e=qt(r.firestore,In),t=Uc(e),n=new tg(e);return gE(r._query),rE(t,r._query).then(i=>new _E(e,n,r,i))}function ht(r,e,t,...n){r=qt(r,ct);const i=qt(r.firestore,In),s=Kp(i);let a;return a=typeof(e=Oe(e))=="string"||e instanceof go?fE(s,"updateDoc",r._key,e,t,n):hE(s,"updateDoc",r._key,e),Wc(i,[a.toMutation(r._key,mt.exists(!0))])}function Nh(r){return Wc(qt(r.firestore,In),[new bc(r._key,mt.none())])}function Wn(r,e){const t=qt(r.firestore,In),n=ge(r),i=yE(r.converter,e);return Wc(t,[lE(Kp(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,mt.exists(!1))]).then(()=>n)}function Wc(r,e){return function(n,i){const s=new Ft;return n.asyncQueue.enqueueAndForget(async()=>qw(await eE(n),i,s)),s.promise}(Uc(r),e)}function TE(r,e,t){const n=t.docs.get(e._key),i=new tg(r);return new eg(r,i,e._key,n,new ei(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function sa(){return new Ai("deleteField")}function ns(){return new zc("serverTimestamp")}(function(e,t=!0){(function(i){vn=i})(Vr),Or(new ar("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),c=new In(new gv(n.getProvider("auth-internal")),new vv(n.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(h.options.projectId,d)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),wt(Kl,"4.7.4",e),wt(Kl,"4.7.4","esm2017")})();/**
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
 */const rg="firebasestorage.googleapis.com",ng="storageBucket",wE=2*60*1e3,EE=10*60*1e3;/**
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
 */class Te extends Pt{constructor(e,t,n=0){super(oa(e),`Firebase Storage: ${t} (${oa(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return oa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ve;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ve||(ve={}));function oa(r){return"storage/"+r}function Kc(){const r="An unknown error occurred, please check the error payload for server response.";return new Te(ve.UNKNOWN,r)}function IE(r){return new Te(ve.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function bE(r){return new Te(ve.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AE(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te(ve.UNAUTHENTICATED,r)}function SE(){return new Te(ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function RE(r){return new Te(ve.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function PE(){return new Te(ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CE(){return new Te(ve.CANCELED,"User canceled the upload/download.")}function OE(r){return new Te(ve.INVALID_URL,"Invalid URL '"+r+"'.")}function DE(r){return new Te(ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function kE(){return new Te(ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ng+"' property when initializing the app?")}function NE(){return new Te(ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VE(){return new Te(ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ME(r){return new Te(ve.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wa(r){return new Te(ve.INVALID_ARGUMENT,r)}function ig(){return new Te(ve.APP_DELETED,"The Firebase app was deleted.")}function xE(r){return new Te(ve.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function si(r,e){return new Te(ve.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Kn(r){throw new Te(ve.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class at{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=at.makeFromUrl(e,t)}catch{return new at(e,"")}if(n.path==="")return n;throw DE(e)}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";function s(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),u={bucket:1,path:3};function h(M){M.path_=decodeURIComponent(M.path)}const d="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",w=new RegExp(`^https?://${m}/${d}/b/${i}/o${p}`,"i"),v={bucket:1,path:3},A=t===rg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",k=new RegExp(`^https?://${A}/${i}/${E}`,"i"),D=[{regex:c,indices:u,postModify:s},{regex:w,indices:v,postModify:h},{regex:k,indices:{bucket:1,path:2},postModify:h}];for(let M=0;M<D.length;M++){const L=D[M],$=L.regex.exec(e);if($){const b=$[L.indices.bucket];let y=$[L.indices.path];y||(y=""),n=new at(b,y),L.postModify(n);break}}if(n==null)throw OE(e);return n}}class LE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function $E(r,e,t){let n=1,i=null,s=null,a=!1,c=0;function u(){return c===2}let h=!1;function d(...E){h||(h=!0,e.apply(null,E))}function m(E){i=setTimeout(()=>{i=null,r(w,u())},E)}function p(){s&&clearTimeout(s)}function w(E,...k){if(h){p();return}if(E){p(),d.call(null,E,...k);return}if(u()||a){p(),d.call(null,E,...k);return}n<64&&(n*=2);let D;c===1?(c=2,D=0):D=(n+Math.random())*1e3,m(D)}let v=!1;function A(E){v||(v=!0,p(),!h&&(i!==null?(E||(c=2),clearTimeout(i),m(0)):E||(c=1)))}return m(0),s=setTimeout(()=>{a=!0,A(!0)},t),A}function FE(r){r(!1)}/**
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
 */function UE(r){return r!==void 0}function BE(r){return typeof r=="object"&&!Array.isArray(r)}function Qc(r){return typeof r=="string"||r instanceof String}function Vh(r){return Xc()&&r instanceof Blob}function Xc(){return typeof Blob<"u"}function Mh(r,e,t,n){if(n<e)throw Wa(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw Wa(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
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
 */function _o(r,e,t){let n=e;return t==null&&(n=`https://${e}`),`${t}://${n}/v0${r}`}function sg(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const i=e(n)+"="+e(r[n]);t=t+i+"&"}return t=t.slice(0,-1),t}var Sr;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Sr||(Sr={}));/**
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
 */function jE(r,e){const t=r>=500&&r<600,i=[408,429].indexOf(r)!==-1,s=e.indexOf(r)!==-1;return t||i||s}/**
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
 */class qE{constructor(e,t,n,i,s,a,c,u,h,d,m,p=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=m,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,v)=>{this.resolve_=w,this.reject_=v,this.start_()})}start_(){const e=(n,i)=>{if(i){n(!1,new is(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const c=s.getErrorCode()===Sr.NO_ERROR,u=s.getStatus();if(!c||jE(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Sr.ABORT;n(!1,new is(!1,null,d));return}const h=this.successCodes_.indexOf(u)!==-1;n(!0,new is(h,s))})},t=(n,i)=>{const s=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());UE(u)?s(u):s()}catch(u){a(u)}else if(c!==null){const u=Kc();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(i.canceled){const u=this.appDelete_?ig():CE();a(u)}else{const u=PE();a(u)}};this.canceled_?t(!1,new is(!1,null,!0)):this.backoffId_=$E(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class is{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function zE(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function HE(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GE(r,e){e&&(r["X-Firebase-GMPID"]=e)}function WE(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function KE(r,e,t,n,i,s,a=!0){const c=sg(r.urlParams),u=r.url+c,h=Object.assign({},r.headers);return GE(h,e),zE(h,t),HE(h,s),WE(h,n),new qE(u,r.method,h,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,i,a)}/**
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
 */function QE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XE(...r){const e=QE();if(e!==void 0){const t=new e;for(let n=0;n<r.length;n++)t.append(r[n]);return t.getBlob()}else{if(Xc())return new Blob(r);throw new Te(ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JE(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
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
 */function YE(r){if(typeof atob>"u")throw ME("base-64");return atob(r)}/**
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
 */const Tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class aa{constructor(e,t){this.data=e,this.contentType=t||null}}function ZE(r,e){switch(r){case Tt.RAW:return new aa(og(e));case Tt.BASE64:case Tt.BASE64URL:return new aa(ag(r,e));case Tt.DATA_URL:return new aa(tI(e),rI(e))}throw Kc()}function og(r){const e=[];for(let t=0;t<r.length;t++){let n=r.charCodeAt(t);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=n,a=r.charCodeAt(++t);n=65536|(s&1023)<<10|a&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function eI(r){let e;try{e=decodeURIComponent(r)}catch{throw si(Tt.DATA_URL,"Malformed data URL.")}return og(e)}function ag(r,e){switch(r){case Tt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw si(r,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Tt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw si(r,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=YE(e)}catch(i){throw i.message.includes("polyfill")?i:si(r,"Invalid character found")}const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}class cg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw si(Tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;n!=null&&(this.base64=nI(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function tI(r){const e=new cg(r);return e.base64?ag(Tt.BASE64,e.rest):eI(e.rest)}function rI(r){return new cg(r).contentType}function nI(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
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
 */class Xt{constructor(e,t){let n=0,i="";Vh(e)?(this.data_=e,n=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Vh(this.data_)){const n=this.data_,i=JE(n,e,t);return i===null?null:new Xt(i)}else{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Xt(n,!0)}}static getBlob(...e){if(Xc()){const t=e.map(n=>n instanceof Xt?n.data_:n);return new Xt(XE.apply(null,t))}else{const t=e.map(a=>Qc(a)?ZE(Tt.RAW,a).data:a.data_);let n=0;t.forEach(a=>{n+=a.byteLength});const i=new Uint8Array(n);let s=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)i[s++]=a[c]}),new Xt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function ug(r){let e;try{e=JSON.parse(r)}catch{return null}return BE(e)?e:null}/**
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
 */function iI(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function sI(r,e){const t=e.split("/").filter(n=>n.length>0).join("/");return r.length===0?t:r+"/"+t}function lg(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function oI(r,e){return e}class Je{constructor(e,t,n,i){this.server=e,this.local=t||e,this.writable=!!n,this.xform=i||oI}}let ss=null;function aI(r){return!Qc(r)||r.length<2?r:lg(r)}function hg(){if(ss)return ss;const r=[];r.push(new Je("bucket")),r.push(new Je("generation")),r.push(new Je("metageneration")),r.push(new Je("name","fullPath",!0));function e(s,a){return aI(a)}const t=new Je("name");t.xform=e,r.push(t);function n(s,a){return a!==void 0?Number(a):a}const i=new Je("size");return i.xform=n,r.push(i),r.push(new Je("timeCreated")),r.push(new Je("updated")),r.push(new Je("md5Hash",null,!0)),r.push(new Je("cacheControl",null,!0)),r.push(new Je("contentDisposition",null,!0)),r.push(new Je("contentEncoding",null,!0)),r.push(new Je("contentLanguage",null,!0)),r.push(new Je("contentType",null,!0)),r.push(new Je("metadata","customMetadata",!0)),ss=r,ss}function cI(r,e){function t(){const n=r.bucket,i=r.fullPath,s=new at(n,i);return e._makeStorageReference(s)}Object.defineProperty(r,"ref",{get:t})}function uI(r,e,t){const n={};n.type="file";const i=t.length;for(let s=0;s<i;s++){const a=t[s];n[a.local]=a.xform(n,e[a.server])}return cI(n,r),n}function fg(r,e,t){const n=ug(e);return n===null?null:uI(r,n,t)}function lI(r,e,t,n){const i=ug(e);if(i===null||!Qc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(h=>{const d=r.bucket,m=r.fullPath,p="/b/"+a(d)+"/o/"+a(m),w=_o(p,t,n),v=sg({alt:"media",token:h});return w+v})[0]}function hI(r,e){const t={},n=e.length;for(let i=0;i<n;i++){const s=e[i];s.writable&&(t[s.server]=r[s.local])}return JSON.stringify(t)}class Jc{constructor(e,t,n,i){this.url=e,this.method=t,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function dg(r){if(!r)throw Kc()}function fI(r,e){function t(n,i){const s=fg(r,i,e);return dg(s!==null),s}return t}function dI(r,e){function t(n,i){const s=fg(r,i,e);return dg(s!==null),lI(s,i,r.host,r._protocol)}return t}function pg(r){function e(t,n){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=SE():i=AE():t.getStatus()===402?i=bE(r.bucket):t.getStatus()===403?i=RE(r.path):i=n,i.status=t.getStatus(),i.serverResponse=n.serverResponse,i}return e}function gg(r){const e=pg(r);function t(n,i){let s=e(n,i);return n.getStatus()===404&&(s=IE(r.path)),s.serverResponse=i.serverResponse,s}return t}function pI(r,e,t){const n=e.fullServerUrl(),i=_o(n,r.host,r._protocol),s="GET",a=r.maxOperationRetryTime,c=new Jc(i,s,dI(r,t),a);return c.errorHandler=gg(e),c}function gI(r,e){const t=e.fullServerUrl(),n=_o(t,r.host,r._protocol),i="DELETE",s=r.maxOperationRetryTime;function a(u,h){}const c=new Jc(n,i,a,s);return c.successCodes=[200,204],c.errorHandler=gg(e),c}function mI(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function yI(r,e,t){const n=Object.assign({},t);return n.fullPath=r.path,n.size=e.size(),n.contentType||(n.contentType=mI(null,e)),n}function _I(r,e,t,n,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let D="";for(let M=0;M<2;M++)D=D+Math.random().toString().slice(2);return D}const u=c();a["Content-Type"]="multipart/related; boundary="+u;const h=yI(e,n,i),d=hI(h,t),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,p=`\r
--`+u+"--",w=Xt.getBlob(m,n,p);if(w===null)throw NE();const v={name:h.fullPath},A=_o(s,r.host,r._protocol),E="POST",k=r.maxUploadRetryTime,C=new Jc(A,E,fI(r,t),k);return C.urlParams=v,C.headers=a,C.body=w.uploadData(),C.errorHandler=pg(e),C}class vI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Sr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Sr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Sr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,i){if(this.sent_)throw Kn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Kn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Kn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Kn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Kn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TI extends vI{initXhr(){this.xhr_.responseType="text"}}function Yc(){return new TI}/**
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
 */class kr{constructor(e,t){this._service=e,t instanceof at?this._location=t:this._location=at.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new kr(e,t)}get root(){const e=new at(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lg(this._location.path)}get storage(){return this._service}get parent(){const e=iI(this._location.path);if(e===null)return null;const t=new at(this._location.bucket,e);return new kr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw xE(e)}}function wI(r,e,t){r._throwIfRoot("uploadBytes");const n=_I(r.storage,r._location,hg(),new Xt(e,!0),t);return r.storage.makeRequestWithTokens(n,Yc).then(i=>({metadata:i,ref:r}))}function EI(r){r._throwIfRoot("getDownloadURL");const e=pI(r.storage,r._location,hg());return r.storage.makeRequestWithTokens(e,Yc).then(t=>{if(t===null)throw VE();return t})}function II(r){r._throwIfRoot("deleteObject");const e=gI(r.storage,r._location);return r.storage.makeRequestWithTokens(e,Yc)}function bI(r,e){const t=sI(r._location.path,e),n=new at(r._location.bucket,t);return new kr(r.storage,n)}/**
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
 */function AI(r){return/^[A-Za-z]+:\/\//.test(r)}function SI(r,e){return new kr(r,e)}function mg(r,e){if(r instanceof Zc){const t=r;if(t._bucket==null)throw kE();const n=new kr(t,t._bucket);return e!=null?mg(n,e):n}else return e!==void 0?bI(r,e):r}function RI(r,e){if(e&&AI(e)){if(r instanceof Zc)return SI(r,e);throw Wa("To use ref(service, url), the first argument must be a Storage instance.")}else return mg(r,e)}function xh(r,e){const t=e==null?void 0:e[ng];return t==null?null:at.makeFromBucketSpec(t,r)}function PI(r,e,t,n={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:i}=n;i&&(r._overrideAuthToken=typeof i=="string"?i:Pd(i,r.app.options.projectId))}class Zc{constructor(e,t,n,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=rg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wE,this._maxUploadRetryTime=EE,this._requests=new Set,i!=null?this._bucket=at.makeFromBucketSpec(i,this._host):this._bucket=xh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=at.makeFromBucketSpec(this._url,e):this._bucket=xh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new kr(this,e)}_makeRequest(e,t,n,i,s=!0){if(this._deleted)return new LE(ig());{const a=KE(e,this._appId,n,i,t,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const Lh="@firebase/storage",$h="0.13.3";/**
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
 */const yg="storage";function CI(r,e,t){return r=Oe(r),wI(r,e,t)}function OI(r){return r=Oe(r),EI(r)}function DI(r){return r=Oe(r),II(r)}function ca(r,e){return r=Oe(r),RI(r,e)}function kI(r=mc(),e){r=Oe(r);const n=Zs(r,yg).getImmediate({identifier:e}),i=Ad("storage");return i&&NI(n,...i),n}function NI(r,e,t,n={}){PI(r,e,t,n)}function VI(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),i=r.getProvider("app-check-internal");return new Zc(t,n,i,e,Vr)}function MI(){Or(new ar(yg,VI,"PUBLIC").setMultipleInstances(!0)),wt(Lh,$h,""),wt(Lh,$h,"esm2017")}MI();function eu(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function _g(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xI=_g,vg=new vi("auth","Firebase",_g());/**
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
 */const $s=new pc("@firebase/auth");function LI(r,...e){$s.logLevel<=Z.WARN&&$s.warn(`Auth (${Vr}): ${r}`,...e)}function vs(r,...e){$s.logLevel<=Z.ERROR&&$s.error(`Auth (${Vr}): ${r}`,...e)}/**
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
 */function zt(r,...e){throw tu(r,...e)}function bt(r,...e){return tu(r,...e)}function Tg(r,e,t){const n=Object.assign(Object.assign({},xI()),{[e]:t});return new vi("auth","Firebase",n).create(e,{appName:r.name})}function Rr(r){return Tg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tu(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return vg.create(r,...e)}function H(r,e,...t){if(!r)throw tu(e,...t)}function xt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw vs(e),new Error(e)}function Ht(r,e){r||xt(e)}/**
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
 */function Ka(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function $I(){return Fh()==="http:"||Fh()==="https:"}function Fh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function FI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($I()||Hy()||"connection"in navigator)?navigator.onLine:!0}function UI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Si{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ht(t>e,"Short delay should be less than long delay!"),this.isMobile=jy()||Gy()}get(){return FI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ru(r,e){Ht(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jI=new Si(3e4,6e4);function nu(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function bn(r,e,t,n,i={}){return Eg(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const c=Ti(Object.assign({key:r.config.apiKey},a)).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:u},s);return zy()||(h.referrerPolicy="no-referrer"),wg.fetch()(Ig(r,r.config.apiHost,t,c),h)})}async function Eg(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},BI),e);try{const i=new zI(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw os(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw os(r,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw os(r,"email-already-in-use",a);if(u==="USER_DISABLED")throw os(r,"user-disabled",a);const d=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tg(r,d,h);zt(r,d)}}catch(i){if(i instanceof Pt)throw i;zt(r,"network-request-failed",{message:String(i)})}}async function qI(r,e,t,n,i={}){const s=await bn(r,e,t,n,i);return"mfaPendingCredential"in s&&zt(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Ig(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?ru(r.config,i):`${r.config.apiScheme}://${i}`}class zI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(bt(this.auth,"network-request-failed")),jI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function os(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=bt(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */async function HI(r,e){return bn(r,"POST","/v1/accounts:delete",e)}async function bg(r,e){return bn(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function oi(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GI(r,e=!1){const t=Oe(r),n=await t.getIdToken(e),i=iu(n);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:oi(ua(i.auth_time)),issuedAtTime:oi(ua(i.iat)),expirationTime:oi(ua(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ua(r){return Number(r)*1e3}function iu(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return vs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Id(t);return i?JSON.parse(i):(vs("Failed to decode base64 JWT payload"),null)}catch(i){return vs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Uh(r){const e=iu(r);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Pt&&WI(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function WI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class KI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fs(r){var e;const t=r.auth,n=await r.getIdToken(),i=await _i(r,bg(t,{idToken:n}));H(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ag(s.providerUserInfo):[],c=XI(r.providerData,a),u=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),d=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Qa(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(r,m)}async function QI(r){const e=Oe(r);await Fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XI(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Ag(r){return r.map(e=>{var{providerId:t}=e,n=eu(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function JI(r,e){const t=await Eg(r,{},async()=>{const n=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=Ig(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wg.fetch()(a,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function YI(r,e){return bn(r,"POST","/v2/accounts:revokeToken",nu(r,e))}/**
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
 */class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Uh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await JI(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new rn;return n&&(H(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(H(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
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
 */function Qt(r,e){H(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Lt{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=eu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await _i(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return GI(this,e)}reload(){return QI(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Fs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tr(this.auth.app))return Promise.reject(Rr(this.auth));const e=await this.getIdToken();return await _i(this,HI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,c,u,h,d;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,w=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,v=(a=t.photoURL)!==null&&a!==void 0?a:void 0,A=(c=t.tenantId)!==null&&c!==void 0?c:void 0,E=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,k=(h=t.createdAt)!==null&&h!==void 0?h:void 0,C=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:D,emailVerified:M,isAnonymous:L,providerData:$,stsTokenManager:b}=t;H(D&&b,e,"internal-error");const y=rn.fromJSON(this.name,b);H(typeof D=="string",e,"internal-error"),Qt(m,e.name),Qt(p,e.name),H(typeof M=="boolean",e,"internal-error"),H(typeof L=="boolean",e,"internal-error"),Qt(w,e.name),Qt(v,e.name),Qt(A,e.name),Qt(E,e.name),Qt(k,e.name),Qt(C,e.name);const _=new Lt({uid:D,auth:e,email:p,emailVerified:M,displayName:m,isAnonymous:L,photoURL:v,phoneNumber:w,tenantId:A,stsTokenManager:y,createdAt:k,lastLoginAt:C});return $&&Array.isArray($)&&(_.providerData=$.map(I=>Object.assign({},I))),E&&(_._redirectEventId=E),_}static async _fromIdTokenResponse(e,t,n=!1){const i=new rn;i.updateFromServerResponse(t);const s=new Lt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Fs(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ag(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new rn;c.updateFromIdToken(n);const u=new Lt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Qa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Bh=new Map;function $t(r){Ht(r instanceof Function,"Expected a class definition");let e=Bh.get(r);return e?(Ht(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Bh.set(r,e),e)}/**
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
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sg.type="NONE";const jh=Sg;/**
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
 */function Ts(r,e,t){return`firebase:${r}:${e}:${t}`}class nn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Ts(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ts("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new nn($t(jh),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||$t(jh);const a=Ts(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){const m=Lt._fromJSON(e,d);h!==s&&(c=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new nn(s,e,n):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new nn(s,e,n))}}/**
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
 */function qh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Og(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kg(e))return"Blackberry";if(Ng(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||Cg(e))&&!e.includes("edge/"))return"Chrome";if(Dg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Rg(r=Ge()){return/firefox\//i.test(r)}function Pg(r=Ge()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cg(r=Ge()){return/crios\//i.test(r)}function Og(r=Ge()){return/iemobile/i.test(r)}function Dg(r=Ge()){return/android/i.test(r)}function kg(r=Ge()){return/blackberry/i.test(r)}function Ng(r=Ge()){return/webos/i.test(r)}function su(r=Ge()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ZI(r=Ge()){var e;return su(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eb(){return Wy()&&document.documentMode===10}function Vg(r=Ge()){return su(r)||Dg(r)||Ng(r)||kg(r)||/windows phone/i.test(r)||Og(r)}/**
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
 */function Mg(r,e=[]){let t;switch(r){case"Browser":t=qh(Ge());break;case"Worker":t=`${qh(Ge())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vr}/${n}`}/**
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
 */class tb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,c)=>{try{const u=e(s);a(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function rb(r,e={}){return bn(r,"GET","/v2/passwordPolicy",nu(r,e))}/**
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
 */const nb=6;class ib{constructor(e){var t,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:nb,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class sb{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zh(this),this.idTokenSubscription=new zh(this),this.beforeStateQueue=new tb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bg(this,{idToken:e}),n=await Lt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tr(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tr(this.app))return Promise.reject(Rr(this));const t=e?Oe(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tr(this.app)?Promise.reject(Rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tr(this.app)?Promise.reject(Rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rb(this),t=new ib(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await YI(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&LI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ou(r){return Oe(r)}class zh{constructor(e){this.auth=e,this.observer=null,this.addObserver=t_(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let au={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ob(r){au=r}function ab(r){return au.loadJS(r)}function cb(){return au.gapiScript}function ub(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function lb(r,e){const t=Zs(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Rs(s,e??{}))return i;zt(i,"already-initialized")}return t.initialize({options:e})}function hb(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map($t);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function fb(r,e,t){const n=ou(r);H(n._canInitEmulator,n,"emulator-config-failed"),H(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=xg(e),{host:a,port:c}=db(e),u=c===null?"":`:${c}`;n.config.emulator={url:`${s}//${a}${u}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),pb()}function xg(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function db(r){const e=xg(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Hh(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:Hh(a)}}}function Hh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function pb(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Lg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,t){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}/**
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
 */async function sn(r,e){return qI(r,"POST","/v1/accounts:signInWithIdp",nu(r,e))}/**
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
 */const gb="http://localhost";class Nr extends Lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=eu(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Nr(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return sn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,sn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,sn(e,t)}buildRequest(){const e={requestUri:gb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ti(t)}return e}}/**
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
 */class $g{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ri extends $g{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jt extends Ri{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nr._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Yt.credential(t,n)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class Zt extends Ri{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
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
 */class er extends Ri{constructor(){super("twitter.com")}static credential(e,t){return Nr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return er.credential(t,n)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Lt._fromIdTokenResponse(e,n,i),a=Gh(n);return new gn({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Gh(n);return new gn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Gh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Us extends Pt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Us.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Us(e,t,n,i)}}function Fg(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Us._fromErrorAndOperation(r,s,e,n):s})}async function mb(r,e,t=!1){const n=await _i(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return gn._forOperation(r,"link",n)}/**
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
 */async function yb(r,e,t=!1){const{auth:n}=r;if(tr(n.app))return Promise.reject(Rr(n));const i="reauthenticate";try{const s=await _i(r,Fg(n,i,e,r),t);H(s.idToken,n,"internal-error");const a=iu(s.idToken);H(a,n,"internal-error");const{sub:c}=a;return H(r.uid===c,n,"user-mismatch"),gn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(n,"user-mismatch"),s}}/**
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
 */async function _b(r,e,t=!1){if(tr(r.app))return Promise.reject(Rr(r));const n="signIn",i=await Fg(r,n,e),s=await gn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function vb(r,e,t,n){return Oe(r).onIdTokenChanged(e,t,n)}function Tb(r,e,t){return Oe(r).beforeAuthStateChanged(e,t)}const Bs="__sak";/**
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
 */class Ug{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wb=1e3,Eb=10;class Bg extends Ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);eb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Eb):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bg.type="LOCAL";const Ib=Bg;/**
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
 */class jg extends Ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jg.type="SESSION";const qg=jg;/**
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
 */function bb(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new vo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(a).map(async h=>h(t.origin,s)),u=await bb(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vo.receivers=[];/**
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
 */function cu(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Ab{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{const h=cu("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(m){const p=m;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function At(){return window}function Sb(r){At().location.href=r}/**
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
 */function zg(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function Rb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pb(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Cb(){return zg()?self:null}/**
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
 */const Hg="firebaseLocalStorageDb",Ob=1,js="firebaseLocalStorage",Gg="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function To(r,e){return r.transaction([js],e?"readwrite":"readonly").objectStore(js)}function Db(){const r=indexedDB.deleteDatabase(Hg);return new Pi(r).toPromise()}function Xa(){const r=indexedDB.open(Hg,Ob);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(js,{keyPath:Gg})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(js)?e(n):(n.close(),await Db(),e(await Xa()))})})}async function Wh(r,e,t){const n=To(r,!0).put({[Gg]:e,value:t});return new Pi(n).toPromise()}async function kb(r,e){const t=To(r,!1).get(e),n=await new Pi(t).toPromise();return n===void 0?null:n.value}function Kh(r,e){const t=To(r,!0).delete(e);return new Pi(t).toPromise()}const Nb=800,Vb=3;class Wg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Vb)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vo._getInstance(Cb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Rb(),!this.activeServiceWorker)return;this.sender=new Ab(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xa();return await Wh(e,Bs,"1"),await Kh(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>kb(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=To(i,!1).getAll();return new Pi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wg.type="LOCAL";const Mb=Wg;new Si(3e4,6e4);/**
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
 */function xb(r,e){return e?$t(e):(H(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class uu extends Lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return sn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lb(r){return _b(r.auth,new uu(r),r.bypassAuthState)}function $b(r){const{auth:e,user:t}=r;return H(t,e,"internal-error"),yb(t,new uu(r),r.bypassAuthState)}async function Fb(r){const{auth:e,user:t}=r;return H(t,e,"internal-error"),mb(t,new uu(r),r.bypassAuthState)}/**
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
 */class Kg{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lb;case"linkViaPopup":case"linkViaRedirect":return Fb;case"reauthViaPopup":case"reauthViaRedirect":return $b;default:zt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ub=new Si(2e3,1e4);class en extends Kg{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ub.get())};e()}}en.currentPopupAction=null;/**
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
 */const Bb="pendingRedirect",ws=new Map;class jb extends Kg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ws.get(this.auth._key());if(!e){try{const n=await qb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ws.set(this.auth._key(),e)}return this.bypassAuthState||ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qb(r,e){const t=Gb(e),n=Hb(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function zb(r,e){ws.set(r._key(),e)}function Hb(r){return $t(r._redirectPersistence)}function Gb(r){return Ts(Bb,r.config.apiKey,r.name)}async function Wb(r,e,t=!1){if(tr(r.app))return Promise.reject(Rr(r));const n=ou(r),i=xb(n,e),a=await new jb(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Kb=10*60*1e3;class Qb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Qg(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(bt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qh(e))}saveEventToCache(e){this.cachedEventUids.add(Qh(e)),this.lastProcessedEventTime=Date.now()}}function Qh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Qg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xb(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qg(r);default:return!1}}/**
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
 */async function Jb(r,e={}){return bn(r,"GET","/v1/projects",e)}/**
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
 */const Yb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zb=/^https?/;async function e0(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Jb(r);for(const t of e)try{if(t0(t))return}catch{}zt(r,"unauthorized-domain")}function t0(r){const e=Ka(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Zb.test(t))return!1;if(Yb.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const r0=new Si(3e4,6e4);function Xh(){const r=At().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function n0(r){return new Promise((e,t)=>{var n,i,s;function a(){Xh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xh(),t(bt(r,"network-request-failed"))},timeout:r0.get()})}if(!((i=(n=At().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)a();else{const c=ub("iframefcb");return At()[c]=()=>{gapi.load?a():t(bt(r,"network-request-failed"))},ab(`${cb()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Es=null,e})}let Es=null;function i0(r){return Es=Es||n0(r),Es}/**
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
 */const s0=new Si(5e3,15e3),o0="__/auth/iframe",a0="emulator/auth/iframe",c0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function l0(r){const e=r.config;H(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ru(e,a0):`https://${r.config.authDomain}/${o0}`,n={apiKey:e.apiKey,appName:r.name,v:Vr},i=u0.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Ti(n).slice(1)}`}async function h0(r){const e=await i0(r),t=At().gapi;return H(t,r,"internal-error"),e.open({where:document.body,url:l0(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c0,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=bt(r,"network-request-failed"),c=At().setTimeout(()=>{s(a)},s0.get());function u(){At().clearTimeout(c),i(n)}n.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const f0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d0=500,p0=600,g0="_blank",m0="http://localhost";class Jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y0(r,e,t,n=d0,i=p0){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u=Object.assign(Object.assign({},f0),{width:n.toString(),height:i.toString(),top:s,left:a}),h=Ge().toLowerCase();t&&(c=Cg(h)?g0:t),Rg(h)&&(e=e||m0,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[w,v])=>`${p}${w}=${v},`,"");if(ZI(h)&&c!=="_self")return _0(e||"",c),new Jh(null);const m=window.open(e||"",c,d);H(m,r,"popup-blocked");try{m.focus()}catch{}return new Jh(m)}function _0(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const v0="__/auth/handler",T0="emulator/auth/handler",w0=encodeURIComponent("fac");async function Yh(r,e,t,n,i,s){H(r.config.authDomain,r,"auth-domain-config-required"),H(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Vr,eventId:i};if(e instanceof $g){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",e_(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(e instanceof Ri){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}r.tenantId&&(a.tid=r.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await r._getAppCheckToken(),h=u?`#${w0}=${encodeURIComponent(u)}`:"";return`${E0(r)}?${Ti(c).slice(1)}${h}`}function E0({config:r}){return r.emulator?ru(r,T0):`https://${r.authDomain}/${v0}`}/**
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
 */const la="webStorageSupport";class I0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qg,this._completeRedirectFn=Wb,this._overrideRedirectResult=zb}async _openPopup(e,t,n,i){var s;Ht((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Yh(e,t,n,Ka(),i);return y0(e,a,cu())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Yh(e,t,n,Ka(),i);return Sb(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ht(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await h0(e),n=new Qb(e);return t.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(la,{type:la},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[la];a!==void 0&&t(!!a),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=e0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vg()||Pg()||su()}}const b0=I0;var Zh="@firebase/auth",ef="1.8.0";/**
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
 */class A0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function S0(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R0(r){Or(new ar("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mg(r)},h=new sb(n,i,s,u);return hb(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Or(new ar("auth-internal",e=>{const t=ou(e.getProvider("auth").getImmediate());return(n=>new A0(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(Zh,ef,S0(r)),wt(Zh,ef,"esm2017")}/**
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
 */const P0=5*60,C0=Rd("authIdTokenMaxAge")||P0;let tf=null;const O0=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>C0)return;const i=t==null?void 0:t.token;tf!==i&&(tf=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function D0(r=mc()){const e=Zs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=lb(r,{popupRedirectResolver:b0,persistence:[Mb,Ib,qg]}),n=Rd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=O0(s.toString());Tb(t,a,()=>a(t.currentUser)),vb(t,c=>a(c))}}const i=bd("auth");return i&&fb(t,`http://${i}`),t}function k0(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}ob({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=bt("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",k0().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R0("Browser");const N0={apiKey:"AIzaSyDq9g-ISNqs1GEE4g1spwlGmpMtYMEZOc8",authDomain:"logis-vision.firebaseapp.com",projectId:"logis-vision",storageBucket:"logis-vision.firebasestorage.app",messagingSenderId:"785636684847",appId:"1:785636684847:web:36995d6037e48f4ae642da"};var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function V0(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var i=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return r[n]}})}),t}var as={},An={},Ci={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.getColorIndex=r.getColorDiffStatus=r.hexDiff=r.rgbDiff=r.deltaE94=r.rgbToCIELab=r.xyzToCIELab=r.rgbToXyz=r.hslToRgb=r.rgbToHsl=r.rgbToHex=r.hexToRgb=r.defer=r.RSHIFT=r.SIGBITS=r.DELTAE94_DIFF_STATUS=void 0,r.DELTAE94_DIFF_STATUS={NA:0,PERFECT:1,CLOSE:2,GOOD:10,SIMILAR:50},r.SIGBITS=5,r.RSHIFT=8-r.SIGBITS;function e(){var v,A,E=new Promise(function(k,C){v=k,A=C});return{resolve:v,reject:A,promise:E}}r.defer=e;function t(v){var A=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(v);return A===null?null:[A[1],A[2],A[3]].map(function(E){return parseInt(E,16)})}r.hexToRgb=t;function n(v,A,E){return"#"+((1<<24)+(v<<16)+(A<<8)+E).toString(16).slice(1,7)}r.rgbToHex=n;function i(v,A,E){v/=255,A/=255,E/=255;var k=Math.max(v,A,E),C=Math.min(v,A,E),D,M,L=(k+C)/2;if(k===C)D=M=0;else{var $=k-C;switch(M=L>.5?$/(2-k-C):$/(k+C),k){case v:D=(A-E)/$+(A<E?6:0);break;case A:D=(E-v)/$+2;break;case E:D=(v-A)/$+4;break}D/=6}return[D,M,L]}r.rgbToHsl=i;function s(v,A,E){var k,C,D;function M(b,y,_){return _<0&&(_+=1),_>1&&(_-=1),_<1/6?b+(y-b)*6*_:_<1/2?y:_<2/3?b+(y-b)*(2/3-_)*6:b}if(A===0)k=C=D=E;else{var L=E<.5?E*(1+A):E+A-E*A,$=2*E-L;k=M($,L,v+1/3),C=M($,L,v),D=M($,L,v-1/3)}return[k*255,C*255,D*255]}r.hslToRgb=s;function a(v,A,E){v/=255,A/=255,E/=255,v=v>.04045?Math.pow((v+.005)/1.055,2.4):v/12.92,A=A>.04045?Math.pow((A+.005)/1.055,2.4):A/12.92,E=E>.04045?Math.pow((E+.005)/1.055,2.4):E/12.92,v*=100,A*=100,E*=100;var k=v*.4124+A*.3576+E*.1805,C=v*.2126+A*.7152+E*.0722,D=v*.0193+A*.1192+E*.9505;return[k,C,D]}r.rgbToXyz=a;function c(v,A,E){var k=95.047,C=100,D=108.883;v/=k,A/=C,E/=D,v=v>.008856?Math.pow(v,1/3):7.787*v+16/116,A=A>.008856?Math.pow(A,1/3):7.787*A+16/116,E=E>.008856?Math.pow(E,1/3):7.787*E+16/116;var M=116*A-16,L=500*(v-A),$=200*(A-E);return[M,L,$]}r.xyzToCIELab=c;function u(v,A,E){var k=a(v,A,E),C=k[0],D=k[1],M=k[2];return c(C,D,M)}r.rgbToCIELab=u;function h(v,A){var E=1,k=1,C=1,D=v[0],M=v[1],L=v[2],$=A[0],b=A[1],y=A[2],_=D-$,I=M-b,S=L-y,R=Math.sqrt(M*M+L*L),T=Math.sqrt(b*b+y*y),J=$-D,se=T-R,te=Math.sqrt(_*_+I*I+S*S),we=Math.sqrt(te)>Math.sqrt(Math.abs(J))+Math.sqrt(Math.abs(se))?Math.sqrt(te*te-J*J-se*se):0,Ye=1+.045*R,nt=1+.015*R;return J/=E,se/=k*Ye,we/=C*nt,Math.sqrt(J*J+se*se+we*we)}r.deltaE94=h;function d(v,A){var E=u.apply(void 0,v),k=u.apply(void 0,A);return h(E,k)}r.rgbDiff=d;function m(v,A){var E=t(v),k=t(A);return d(E,k)}r.hexDiff=m;function p(v){return v<r.DELTAE94_DIFF_STATUS.NA?"N/A":v<=r.DELTAE94_DIFF_STATUS.PERFECT?"Perfect":v<=r.DELTAE94_DIFF_STATUS.CLOSE?"Close":v<=r.DELTAE94_DIFF_STATUS.GOOD?"Good":v<r.DELTAE94_DIFF_STATUS.SIMILAR?"Similar":"Wrong"}r.getColorDiffStatus=p;function w(v,A,E){return(v<<2*r.SIGBITS)+(A<<r.SIGBITS)+E}r.getColorIndex=w})(Ci);function M0(r,e){for(var t=-1,n=r==null?0:r.length,i=0,s=[];++t<n;){var a=r[t];e(a,t,r)&&(s[i++]=a)}return s}var Xg=M0;function x0(r){return function(e,t,n){for(var i=-1,s=Object(e),a=n(e),c=a.length;c--;){var u=a[r?c:++i];if(t(s[u],u,s)===!1)break}return e}}var L0=x0,$0=L0,F0=$0(),U0=F0;function B0(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}var j0=B0,q0=typeof ae=="object"&&ae&&ae.Object===Object&&ae,Jg=q0,z0=Jg,H0=typeof self=="object"&&self&&self.Object===Object&&self,G0=z0||H0||Function("return this")(),Ct=G0,W0=Ct,K0=W0.Symbol,Oi=K0,rf=Oi,Yg=Object.prototype,Q0=Yg.hasOwnProperty,X0=Yg.toString,Qn=rf?rf.toStringTag:void 0;function J0(r){var e=Q0.call(r,Qn),t=r[Qn];try{r[Qn]=void 0;var n=!0}catch{}var i=X0.call(r);return n&&(e?r[Qn]=t:delete r[Qn]),i}var Y0=J0,Z0=Object.prototype,eA=Z0.toString;function tA(r){return eA.call(r)}var rA=tA,nf=Oi,nA=Y0,iA=rA,sA="[object Null]",oA="[object Undefined]",sf=nf?nf.toStringTag:void 0;function aA(r){return r==null?r===void 0?oA:sA:sf&&sf in Object(r)?nA(r):iA(r)}var Di=aA;function cA(r){return r!=null&&typeof r=="object"}var Lr=cA,uA=Di,lA=Lr,hA="[object Arguments]";function fA(r){return lA(r)&&uA(r)==hA}var dA=fA,of=dA,pA=Lr,Zg=Object.prototype,gA=Zg.hasOwnProperty,mA=Zg.propertyIsEnumerable,yA=of(function(){return arguments}())?of:function(r){return pA(r)&&gA.call(r,"callee")&&!mA.call(r,"callee")},em=yA,_A=Array.isArray,Ot=_A,qs={exports:{}};function vA(){return!1}var TA=vA;qs.exports;(function(r,e){var t=Ct,n=TA,i=e&&!e.nodeType&&e,s=i&&!0&&r&&!r.nodeType&&r,a=s&&s.exports===i,c=a?t.Buffer:void 0,u=c?c.isBuffer:void 0,h=u||n;r.exports=h})(qs,qs.exports);var lu=qs.exports,wA=9007199254740991,EA=/^(?:0|[1-9]\d*)$/;function IA(r,e){var t=typeof r;return e=e??wA,!!e&&(t=="number"||t!="symbol"&&EA.test(r))&&r>-1&&r%1==0&&r<e}var hu=IA,bA=9007199254740991;function AA(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=bA}var fu=AA,SA=Di,RA=fu,PA=Lr,CA="[object Arguments]",OA="[object Array]",DA="[object Boolean]",kA="[object Date]",NA="[object Error]",VA="[object Function]",MA="[object Map]",xA="[object Number]",LA="[object Object]",$A="[object RegExp]",FA="[object Set]",UA="[object String]",BA="[object WeakMap]",jA="[object ArrayBuffer]",qA="[object DataView]",zA="[object Float32Array]",HA="[object Float64Array]",GA="[object Int8Array]",WA="[object Int16Array]",KA="[object Int32Array]",QA="[object Uint8Array]",XA="[object Uint8ClampedArray]",JA="[object Uint16Array]",YA="[object Uint32Array]",fe={};fe[zA]=fe[HA]=fe[GA]=fe[WA]=fe[KA]=fe[QA]=fe[XA]=fe[JA]=fe[YA]=!0;fe[CA]=fe[OA]=fe[jA]=fe[DA]=fe[qA]=fe[kA]=fe[NA]=fe[VA]=fe[MA]=fe[xA]=fe[LA]=fe[$A]=fe[FA]=fe[UA]=fe[BA]=!1;function ZA(r){return PA(r)&&RA(r.length)&&!!fe[SA(r)]}var eS=ZA;function tS(r){return function(e){return r(e)}}var du=tS,zs={exports:{}};zs.exports;(function(r,e){var t=Jg,n=e&&!e.nodeType&&e,i=n&&!0&&r&&!r.nodeType&&r,s=i&&i.exports===n,a=s&&t.process,c=function(){try{var u=i&&i.require&&i.require("util").types;return u||a&&a.binding&&a.binding("util")}catch{}}();r.exports=c})(zs,zs.exports);var pu=zs.exports,rS=eS,nS=du,af=pu,cf=af&&af.isTypedArray,iS=cf?nS(cf):rS,tm=iS,sS=j0,oS=em,aS=Ot,cS=lu,uS=hu,lS=tm,hS=Object.prototype,fS=hS.hasOwnProperty;function dS(r,e){var t=aS(r),n=!t&&oS(r),i=!t&&!n&&cS(r),s=!t&&!n&&!i&&lS(r),a=t||n||i||s,c=a?sS(r.length,String):[],u=c.length;for(var h in r)(e||fS.call(r,h))&&!(a&&(h=="length"||i&&(h=="offset"||h=="parent")||s&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||uS(h,u)))&&c.push(h);return c}var rm=dS,pS=Object.prototype;function gS(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||pS;return r===t}var gu=gS;function mS(r,e){return function(t){return r(e(t))}}var nm=mS,yS=nm,_S=yS(Object.keys,Object),vS=_S,TS=gu,wS=vS,ES=Object.prototype,IS=ES.hasOwnProperty;function bS(r){if(!TS(r))return wS(r);var e=[];for(var t in Object(r))IS.call(r,t)&&t!="constructor"&&e.push(t);return e}var AS=bS;function SS(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var $r=SS,RS=Di,PS=$r,CS="[object AsyncFunction]",OS="[object Function]",DS="[object GeneratorFunction]",kS="[object Proxy]";function NS(r){if(!PS(r))return!1;var e=RS(r);return e==OS||e==DS||e==CS||e==kS}var im=NS,VS=im,MS=fu;function xS(r){return r!=null&&MS(r.length)&&!VS(r)}var wo=xS,LS=rm,$S=AS,FS=wo;function US(r){return FS(r)?LS(r):$S(r)}var ki=US,BS=U0,jS=ki;function qS(r,e){return r&&BS(r,e,jS)}var zS=qS,HS=wo;function GS(r,e){return function(t,n){if(t==null)return t;if(!HS(t))return r(t,n);for(var i=t.length,s=e?i:-1,a=Object(t);(e?s--:++s<i)&&n(a[s],s,a)!==!1;);return t}}var WS=GS,KS=zS,QS=WS,XS=QS(KS),JS=XS,YS=JS;function ZS(r,e){var t=[];return YS(r,function(n,i,s){e(n,i,s)&&t.push(n)}),t}var eR=ZS;function tR(){this.__data__=[],this.size=0}var rR=tR;function nR(r,e){return r===e||r!==r&&e!==e}var Ni=nR,iR=Ni;function sR(r,e){for(var t=r.length;t--;)if(iR(r[t][0],e))return t;return-1}var Eo=sR,oR=Eo,aR=Array.prototype,cR=aR.splice;function uR(r){var e=this.__data__,t=oR(e,r);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():cR.call(e,t,1),--this.size,!0}var lR=uR,hR=Eo;function fR(r){var e=this.__data__,t=hR(e,r);return t<0?void 0:e[t][1]}var dR=fR,pR=Eo;function gR(r){return pR(this.__data__,r)>-1}var mR=gR,yR=Eo;function _R(r,e){var t=this.__data__,n=yR(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this}var vR=_R,TR=rR,wR=lR,ER=dR,IR=mR,bR=vR;function Sn(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Sn.prototype.clear=TR;Sn.prototype.delete=wR;Sn.prototype.get=ER;Sn.prototype.has=IR;Sn.prototype.set=bR;var Io=Sn,AR=Io;function SR(){this.__data__=new AR,this.size=0}var RR=SR;function PR(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t}var CR=PR;function OR(r){return this.__data__.get(r)}var DR=OR;function kR(r){return this.__data__.has(r)}var NR=kR,VR=Ct,MR=VR["__core-js_shared__"],xR=MR,ha=xR,uf=function(){var r=/[^.]+$/.exec(ha&&ha.keys&&ha.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function LR(r){return!!uf&&uf in r}var $R=LR,FR=Function.prototype,UR=FR.toString;function BR(r){if(r!=null){try{return UR.call(r)}catch{}try{return r+""}catch{}}return""}var sm=BR,jR=im,qR=$R,zR=$r,HR=sm,GR=/[\\^$.*+?()[\]{}|]/g,WR=/^\[object .+?Constructor\]$/,KR=Function.prototype,QR=Object.prototype,XR=KR.toString,JR=QR.hasOwnProperty,YR=RegExp("^"+XR.call(JR).replace(GR,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ZR(r){if(!zR(r)||qR(r))return!1;var e=jR(r)?YR:WR;return e.test(HR(r))}var eP=ZR;function tP(r,e){return r==null?void 0:r[e]}var rP=tP,nP=eP,iP=rP;function sP(r,e){var t=iP(r,e);return nP(t)?t:void 0}var Fr=sP,oP=Fr,aP=Ct,cP=oP(aP,"Map"),mu=cP,uP=Fr,lP=uP(Object,"create"),bo=lP,lf=bo;function hP(){this.__data__=lf?lf(null):{},this.size=0}var fP=hP;function dP(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e}var pP=dP,gP=bo,mP="__lodash_hash_undefined__",yP=Object.prototype,_P=yP.hasOwnProperty;function vP(r){var e=this.__data__;if(gP){var t=e[r];return t===mP?void 0:t}return _P.call(e,r)?e[r]:void 0}var TP=vP,wP=bo,EP=Object.prototype,IP=EP.hasOwnProperty;function bP(r){var e=this.__data__;return wP?e[r]!==void 0:IP.call(e,r)}var AP=bP,SP=bo,RP="__lodash_hash_undefined__";function PP(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=SP&&e===void 0?RP:e,this}var CP=PP,OP=fP,DP=pP,kP=TP,NP=AP,VP=CP;function Rn(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Rn.prototype.clear=OP;Rn.prototype.delete=DP;Rn.prototype.get=kP;Rn.prototype.has=NP;Rn.prototype.set=VP;var MP=Rn,hf=MP,xP=Io,LP=mu;function $P(){this.size=0,this.__data__={hash:new hf,map:new(LP||xP),string:new hf}}var FP=$P;function UP(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null}var BP=UP,jP=BP;function qP(r,e){var t=r.__data__;return jP(e)?t[typeof e=="string"?"string":"hash"]:t.map}var Ao=qP,zP=Ao;function HP(r){var e=zP(this,r).delete(r);return this.size-=e?1:0,e}var GP=HP,WP=Ao;function KP(r){return WP(this,r).get(r)}var QP=KP,XP=Ao;function JP(r){return XP(this,r).has(r)}var YP=JP,ZP=Ao;function e1(r,e){var t=ZP(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this}var t1=e1,r1=FP,n1=GP,i1=QP,s1=YP,o1=t1;function Pn(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Pn.prototype.clear=r1;Pn.prototype.delete=n1;Pn.prototype.get=i1;Pn.prototype.has=s1;Pn.prototype.set=o1;var yu=Pn,a1=Io,c1=mu,u1=yu,l1=200;function h1(r,e){var t=this.__data__;if(t instanceof a1){var n=t.__data__;if(!c1||n.length<l1-1)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new u1(n)}return t.set(r,e),this.size=t.size,this}var f1=h1,d1=Io,p1=RR,g1=CR,m1=DR,y1=NR,_1=f1;function Cn(r){var e=this.__data__=new d1(r);this.size=e.size}Cn.prototype.clear=p1;Cn.prototype.delete=g1;Cn.prototype.get=m1;Cn.prototype.has=y1;Cn.prototype.set=_1;var _u=Cn,v1="__lodash_hash_undefined__";function T1(r){return this.__data__.set(r,v1),this}var w1=T1;function E1(r){return this.__data__.has(r)}var I1=E1,b1=yu,A1=w1,S1=I1;function Hs(r){var e=-1,t=r==null?0:r.length;for(this.__data__=new b1;++e<t;)this.add(r[e])}Hs.prototype.add=Hs.prototype.push=A1;Hs.prototype.has=S1;var R1=Hs;function P1(r,e){for(var t=-1,n=r==null?0:r.length;++t<n;)if(e(r[t],t,r))return!0;return!1}var C1=P1;function O1(r,e){return r.has(e)}var D1=O1,k1=R1,N1=C1,V1=D1,M1=1,x1=2;function L1(r,e,t,n,i,s){var a=t&M1,c=r.length,u=e.length;if(c!=u&&!(a&&u>c))return!1;var h=s.get(r),d=s.get(e);if(h&&d)return h==e&&d==r;var m=-1,p=!0,w=t&x1?new k1:void 0;for(s.set(r,e),s.set(e,r);++m<c;){var v=r[m],A=e[m];if(n)var E=a?n(A,v,m,e,r,s):n(v,A,m,r,e,s);if(E!==void 0){if(E)continue;p=!1;break}if(w){if(!N1(e,function(k,C){if(!V1(w,C)&&(v===k||i(v,k,t,n,s)))return w.push(C)})){p=!1;break}}else if(!(v===A||i(v,A,t,n,s))){p=!1;break}}return s.delete(r),s.delete(e),p}var om=L1,$1=Ct,F1=$1.Uint8Array,am=F1;function U1(r){var e=-1,t=Array(r.size);return r.forEach(function(n,i){t[++e]=[i,n]}),t}var B1=U1;function j1(r){var e=-1,t=Array(r.size);return r.forEach(function(n){t[++e]=n}),t}var q1=j1,ff=Oi,df=am,z1=Ni,H1=om,G1=B1,W1=q1,K1=1,Q1=2,X1="[object Boolean]",J1="[object Date]",Y1="[object Error]",Z1="[object Map]",eC="[object Number]",tC="[object RegExp]",rC="[object Set]",nC="[object String]",iC="[object Symbol]",sC="[object ArrayBuffer]",oC="[object DataView]",pf=ff?ff.prototype:void 0,fa=pf?pf.valueOf:void 0;function aC(r,e,t,n,i,s,a){switch(t){case oC:if(r.byteLength!=e.byteLength||r.byteOffset!=e.byteOffset)return!1;r=r.buffer,e=e.buffer;case sC:return!(r.byteLength!=e.byteLength||!s(new df(r),new df(e)));case X1:case J1:case eC:return z1(+r,+e);case Y1:return r.name==e.name&&r.message==e.message;case tC:case nC:return r==e+"";case Z1:var c=G1;case rC:var u=n&K1;if(c||(c=W1),r.size!=e.size&&!u)return!1;var h=a.get(r);if(h)return h==e;n|=Q1,a.set(r,e);var d=H1(c(r),c(e),n,i,s,a);return a.delete(r),d;case iC:if(fa)return fa.call(r)==fa.call(e)}return!1}var cC=aC;function uC(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r}var cm=uC,lC=cm,hC=Ot;function fC(r,e,t){var n=e(r);return hC(r)?n:lC(n,t(r))}var um=fC;function dC(){return[]}var lm=dC,pC=Xg,gC=lm,mC=Object.prototype,yC=mC.propertyIsEnumerable,gf=Object.getOwnPropertySymbols,_C=gf?function(r){return r==null?[]:(r=Object(r),pC(gf(r),function(e){return yC.call(r,e)}))}:gC,vu=_C,vC=um,TC=vu,wC=ki;function EC(r){return vC(r,wC,TC)}var hm=EC,mf=hm,IC=1,bC=Object.prototype,AC=bC.hasOwnProperty;function SC(r,e,t,n,i,s){var a=t&IC,c=mf(r),u=c.length,h=mf(e),d=h.length;if(u!=d&&!a)return!1;for(var m=u;m--;){var p=c[m];if(!(a?p in e:AC.call(e,p)))return!1}var w=s.get(r),v=s.get(e);if(w&&v)return w==e&&v==r;var A=!0;s.set(r,e),s.set(e,r);for(var E=a;++m<u;){p=c[m];var k=r[p],C=e[p];if(n)var D=a?n(C,k,p,e,r,s):n(k,C,p,r,e,s);if(!(D===void 0?k===C||i(k,C,t,n,s):D)){A=!1;break}E||(E=p=="constructor")}if(A&&!E){var M=r.constructor,L=e.constructor;M!=L&&"constructor"in r&&"constructor"in e&&!(typeof M=="function"&&M instanceof M&&typeof L=="function"&&L instanceof L)&&(A=!1)}return s.delete(r),s.delete(e),A}var RC=SC,PC=Fr,CC=Ct,OC=PC(CC,"DataView"),DC=OC,kC=Fr,NC=Ct,VC=kC(NC,"Promise"),MC=VC,xC=Fr,LC=Ct,$C=xC(LC,"Set"),FC=$C,UC=Fr,BC=Ct,jC=UC(BC,"WeakMap"),qC=jC,Ja=DC,Ya=mu,Za=MC,ec=FC,tc=qC,fm=Di,On=sm,yf="[object Map]",zC="[object Object]",_f="[object Promise]",vf="[object Set]",Tf="[object WeakMap]",wf="[object DataView]",HC=On(Ja),GC=On(Ya),WC=On(Za),KC=On(ec),QC=On(tc),Er=fm;(Ja&&Er(new Ja(new ArrayBuffer(1)))!=wf||Ya&&Er(new Ya)!=yf||Za&&Er(Za.resolve())!=_f||ec&&Er(new ec)!=vf||tc&&Er(new tc)!=Tf)&&(Er=function(r){var e=fm(r),t=e==zC?r.constructor:void 0,n=t?On(t):"";if(n)switch(n){case HC:return wf;case GC:return yf;case WC:return _f;case KC:return vf;case QC:return Tf}return e});var So=Er,da=_u,XC=om,JC=cC,YC=RC,Ef=So,If=Ot,bf=lu,ZC=tm,eO=1,Af="[object Arguments]",Sf="[object Array]",cs="[object Object]",tO=Object.prototype,Rf=tO.hasOwnProperty;function rO(r,e,t,n,i,s){var a=If(r),c=If(e),u=a?Sf:Ef(r),h=c?Sf:Ef(e);u=u==Af?cs:u,h=h==Af?cs:h;var d=u==cs,m=h==cs,p=u==h;if(p&&bf(r)){if(!bf(e))return!1;a=!0,d=!1}if(p&&!d)return s||(s=new da),a||ZC(r)?XC(r,e,t,n,i,s):JC(r,e,u,t,n,i,s);if(!(t&eO)){var w=d&&Rf.call(r,"__wrapped__"),v=m&&Rf.call(e,"__wrapped__");if(w||v){var A=w?r.value():r,E=v?e.value():e;return s||(s=new da),i(A,E,t,n,s)}}return p?(s||(s=new da),YC(r,e,t,n,i,s)):!1}var nO=rO,iO=nO,Pf=Lr;function dm(r,e,t,n,i){return r===e?!0:r==null||e==null||!Pf(r)&&!Pf(e)?r!==r&&e!==e:iO(r,e,t,n,dm,i)}var pm=dm,sO=_u,oO=pm,aO=1,cO=2;function uO(r,e,t,n){var i=t.length,s=i,a=!n;if(r==null)return!s;for(r=Object(r);i--;){var c=t[i];if(a&&c[2]?c[1]!==r[c[0]]:!(c[0]in r))return!1}for(;++i<s;){c=t[i];var u=c[0],h=r[u],d=c[1];if(a&&c[2]){if(h===void 0&&!(u in r))return!1}else{var m=new sO;if(n)var p=n(h,d,u,r,e,m);if(!(p===void 0?oO(d,h,aO|cO,n,m):p))return!1}}return!0}var lO=uO,hO=$r;function fO(r){return r===r&&!hO(r)}var gm=fO,dO=gm,pO=ki;function gO(r){for(var e=pO(r),t=e.length;t--;){var n=e[t],i=r[n];e[t]=[n,i,dO(i)]}return e}var mO=gO;function yO(r,e){return function(t){return t==null?!1:t[r]===e&&(e!==void 0||r in Object(t))}}var mm=yO,_O=lO,vO=mO,TO=mm;function wO(r){var e=vO(r);return e.length==1&&e[0][2]?TO(e[0][0],e[0][1]):function(t){return t===r||_O(t,r,e)}}var EO=wO,IO=Di,bO=Lr,AO="[object Symbol]";function SO(r){return typeof r=="symbol"||bO(r)&&IO(r)==AO}var Tu=SO,RO=Ot,PO=Tu,CO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,OO=/^\w*$/;function DO(r,e){if(RO(r))return!1;var t=typeof r;return t=="number"||t=="symbol"||t=="boolean"||r==null||PO(r)?!0:OO.test(r)||!CO.test(r)||e!=null&&r in Object(e)}var wu=DO,ym=yu,kO="Expected a function";function Eu(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(kO);var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],s=t.cache;if(s.has(i))return s.get(i);var a=r.apply(this,n);return t.cache=s.set(i,a)||s,a};return t.cache=new(Eu.Cache||ym),t}Eu.Cache=ym;var NO=Eu,VO=NO,MO=500;function xO(r){var e=VO(r,function(n){return t.size===MO&&t.clear(),n}),t=e.cache;return e}var LO=xO,$O=LO,FO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,UO=/\\(\\)?/g,BO=$O(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(FO,function(t,n,i,s){e.push(i?s.replace(UO,"$1"):n||t)}),e}),jO=BO;function qO(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}var zO=qO,Cf=Oi,HO=zO,GO=Ot,WO=Tu,KO=1/0,Of=Cf?Cf.prototype:void 0,Df=Of?Of.toString:void 0;function _m(r){if(typeof r=="string")return r;if(GO(r))return HO(r,_m)+"";if(WO(r))return Df?Df.call(r):"";var e=r+"";return e=="0"&&1/r==-KO?"-0":e}var QO=_m,XO=QO;function JO(r){return r==null?"":XO(r)}var YO=JO,ZO=Ot,eD=wu,tD=jO,rD=YO;function nD(r,e){return ZO(r)?r:eD(r,e)?[r]:tD(rD(r))}var vm=nD,iD=Tu,sD=1/0;function oD(r){if(typeof r=="string"||iD(r))return r;var e=r+"";return e=="0"&&1/r==-sD?"-0":e}var Ro=oD,aD=vm,cD=Ro;function uD(r,e){e=aD(e,r);for(var t=0,n=e.length;r!=null&&t<n;)r=r[cD(e[t++])];return t&&t==n?r:void 0}var Tm=uD,lD=Tm;function hD(r,e,t){var n=r==null?void 0:lD(r,e);return n===void 0?t:n}var fD=hD;function dD(r,e){return r!=null&&e in Object(r)}var pD=dD,gD=vm,mD=em,yD=Ot,_D=hu,vD=fu,TD=Ro;function wD(r,e,t){e=gD(e,r);for(var n=-1,i=e.length,s=!1;++n<i;){var a=TD(e[n]);if(!(s=r!=null&&t(r,a)))break;r=r[a]}return s||++n!=i?s:(i=r==null?0:r.length,!!i&&vD(i)&&_D(a,i)&&(yD(r)||mD(r)))}var ED=wD,ID=pD,bD=ED;function AD(r,e){return r!=null&&bD(r,e,ID)}var SD=AD,RD=pm,PD=fD,CD=SD,OD=wu,DD=gm,kD=mm,ND=Ro,VD=1,MD=2;function xD(r,e){return OD(r)&&DD(e)?kD(ND(r),e):function(t){var n=PD(t,r);return n===void 0&&n===e?CD(t,r):RD(e,n,VD|MD)}}var LD=xD;function $D(r){return r}var Iu=$D;function FD(r){return function(e){return e==null?void 0:e[r]}}var UD=FD,BD=Tm;function jD(r){return function(e){return BD(e,r)}}var qD=jD,zD=UD,HD=qD,GD=wu,WD=Ro;function KD(r){return GD(r)?zD(WD(r)):HD(r)}var QD=KD,XD=EO,JD=LD,YD=Iu,ZD=Ot,ek=QD;function tk(r){return typeof r=="function"?r:r==null?YD:typeof r=="object"?ZD(r)?JD(r[0],r[1]):XD(r):ek(r)}var rk=tk,nk=Xg,ik=eR,sk=rk,ok=Ot;function ak(r,e){var t=ok(r)?nk:ik;return t(r,sk(e))}var ck=ak;Object.defineProperty(An,"__esModule",{value:!0});An.Swatch=void 0;var kf=Ci,uk=ck,lk=function(){function r(e,t){this._rgb=e,this._population=t}return r.applyFilter=function(e,t){return typeof t=="function"?uk(e,function(n){var i=n.r,s=n.g,a=n.b;return t(i,s,a,255)}):e},Object.defineProperty(r.prototype,"r",{get:function(){return this._rgb[0]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"g",{get:function(){return this._rgb[1]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"b",{get:function(){return this._rgb[2]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rgb",{get:function(){return this._rgb},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"hsl",{get:function(){if(!this._hsl){var e=this._rgb,t=e[0],n=e[1],i=e[2];this._hsl=kf.rgbToHsl(t,n,i)}return this._hsl},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"hex",{get:function(){if(!this._hex){var e=this._rgb,t=e[0],n=e[1],i=e[2];this._hex=kf.rgbToHex(t,n,i)}return this._hex},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"population",{get:function(){return this._population},enumerable:!1,configurable:!0}),r.prototype.toJSON=function(){return{rgb:this.rgb,population:this.population}},r.prototype.getRgb=function(){return this._rgb},r.prototype.getHsl=function(){return this.hsl},r.prototype.getPopulation=function(){return this._population},r.prototype.getHex=function(){return this.hex},r.prototype.getYiq=function(){if(!this._yiq){var e=this._rgb;this._yiq=(e[0]*299+e[1]*587+e[2]*114)/1e3}return this._yiq},Object.defineProperty(r.prototype,"titleTextColor",{get:function(){return this._titleTextColor||(this._titleTextColor=this.getYiq()<200?"#fff":"#000"),this._titleTextColor},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"bodyTextColor",{get:function(){return this._bodyTextColor||(this._bodyTextColor=this.getYiq()<150?"#fff":"#000"),this._bodyTextColor},enumerable:!1,configurable:!0}),r.prototype.getTitleTextColor=function(){return this.titleTextColor},r.prototype.getBodyTextColor=function(){return this.bodyTextColor},r}();An.Swatch=lk;var us={};function hk(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}var fk=hk,dk=Fr,pk=function(){try{var r=dk(Object,"defineProperty");return r({},"",{}),r}catch{}}(),wm=pk,Nf=wm;function gk(r,e,t){e=="__proto__"&&Nf?Nf(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t}var Em=gk,mk=Em,yk=Ni,_k=Object.prototype,vk=_k.hasOwnProperty;function Tk(r,e,t){var n=r[e];(!(vk.call(r,e)&&yk(n,t))||t===void 0&&!(e in r))&&mk(r,e,t)}var Im=Tk,wk=Im,Ek=Em;function Ik(r,e,t,n){var i=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var c=e[s],u=n?n(t[c],r[c],c,t,r):void 0;u===void 0&&(u=r[c]),i?Ek(t,c,u):wk(t,c,u)}return t}var Po=Ik,bk=Po,Ak=ki;function Sk(r,e){return r&&bk(e,Ak(e),r)}var Rk=Sk;function Pk(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Ck=Pk,Ok=$r,Dk=gu,kk=Ck,Nk=Object.prototype,Vk=Nk.hasOwnProperty;function Mk(r){if(!Ok(r))return kk(r);var e=Dk(r),t=[];for(var n in r)n=="constructor"&&(e||!Vk.call(r,n))||t.push(n);return t}var xk=Mk,Lk=rm,$k=xk,Fk=wo;function Uk(r){return Fk(r)?Lk(r,!0):$k(r)}var Co=Uk,Bk=Po,jk=Co;function qk(r,e){return r&&Bk(e,jk(e),r)}var zk=qk,Gs={exports:{}};Gs.exports;(function(r,e){var t=Ct,n=e&&!e.nodeType&&e,i=n&&!0&&r&&!r.nodeType&&r,s=i&&i.exports===n,a=s?t.Buffer:void 0,c=a?a.allocUnsafe:void 0;function u(h,d){if(d)return h.slice();var m=h.length,p=c?c(m):new h.constructor(m);return h.copy(p),p}r.exports=u})(Gs,Gs.exports);var Hk=Gs.exports;function Gk(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}var Wk=Gk,Kk=Po,Qk=vu;function Xk(r,e){return Kk(r,Qk(r),e)}var Jk=Xk,Yk=nm,Zk=Yk(Object.getPrototypeOf,Object),bm=Zk,eN=cm,tN=bm,rN=vu,nN=lm,iN=Object.getOwnPropertySymbols,sN=iN?function(r){for(var e=[];r;)eN(e,rN(r)),r=tN(r);return e}:nN,Am=sN,oN=Po,aN=Am;function cN(r,e){return oN(r,aN(r),e)}var uN=cN,lN=um,hN=Am,fN=Co;function dN(r){return lN(r,fN,hN)}var pN=dN,gN=Object.prototype,mN=gN.hasOwnProperty;function yN(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&mN.call(r,"index")&&(t.index=r.index,t.input=r.input),t}var _N=yN,Vf=am;function vN(r){var e=new r.constructor(r.byteLength);return new Vf(e).set(new Vf(r)),e}var bu=vN,TN=bu;function wN(r,e){var t=e?TN(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var EN=wN,IN=/\w*$/;function bN(r){var e=new r.constructor(r.source,IN.exec(r));return e.lastIndex=r.lastIndex,e}var AN=bN,Mf=Oi,xf=Mf?Mf.prototype:void 0,Lf=xf?xf.valueOf:void 0;function SN(r){return Lf?Object(Lf.call(r)):{}}var RN=SN,PN=bu;function CN(r,e){var t=e?PN(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var ON=CN,DN=bu,kN=EN,NN=AN,VN=RN,MN=ON,xN="[object Boolean]",LN="[object Date]",$N="[object Map]",FN="[object Number]",UN="[object RegExp]",BN="[object Set]",jN="[object String]",qN="[object Symbol]",zN="[object ArrayBuffer]",HN="[object DataView]",GN="[object Float32Array]",WN="[object Float64Array]",KN="[object Int8Array]",QN="[object Int16Array]",XN="[object Int32Array]",JN="[object Uint8Array]",YN="[object Uint8ClampedArray]",ZN="[object Uint16Array]",eV="[object Uint32Array]";function tV(r,e,t){var n=r.constructor;switch(e){case zN:return DN(r);case xN:case LN:return new n(+r);case HN:return kN(r,t);case GN:case WN:case KN:case QN:case XN:case JN:case YN:case ZN:case eV:return MN(r,t);case $N:return new n;case FN:case jN:return new n(r);case UN:return NN(r);case BN:return new n;case qN:return VN(r)}}var rV=tV,nV=$r,$f=Object.create,iV=function(){function r(){}return function(e){if(!nV(e))return{};if($f)return $f(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}(),sV=iV,oV=sV,aV=bm,cV=gu;function uV(r){return typeof r.constructor=="function"&&!cV(r)?oV(aV(r)):{}}var lV=uV,hV=So,fV=Lr,dV="[object Map]";function pV(r){return fV(r)&&hV(r)==dV}var gV=pV,mV=gV,yV=du,Ff=pu,Uf=Ff&&Ff.isMap,_V=Uf?yV(Uf):mV,vV=_V,TV=So,wV=Lr,EV="[object Set]";function IV(r){return wV(r)&&TV(r)==EV}var bV=IV,AV=bV,SV=du,Bf=pu,jf=Bf&&Bf.isSet,RV=jf?SV(jf):AV,PV=RV,CV=_u,OV=fk,DV=Im,kV=Rk,NV=zk,VV=Hk,MV=Wk,xV=Jk,LV=uN,$V=hm,FV=pN,UV=So,BV=_N,jV=rV,qV=lV,zV=Ot,HV=lu,GV=vV,WV=$r,KV=PV,QV=ki,XV=Co,JV=1,YV=2,ZV=4,Sm="[object Arguments]",eM="[object Array]",tM="[object Boolean]",rM="[object Date]",nM="[object Error]",Rm="[object Function]",iM="[object GeneratorFunction]",sM="[object Map]",oM="[object Number]",Pm="[object Object]",aM="[object RegExp]",cM="[object Set]",uM="[object String]",lM="[object Symbol]",hM="[object WeakMap]",fM="[object ArrayBuffer]",dM="[object DataView]",pM="[object Float32Array]",gM="[object Float64Array]",mM="[object Int8Array]",yM="[object Int16Array]",_M="[object Int32Array]",vM="[object Uint8Array]",TM="[object Uint8ClampedArray]",wM="[object Uint16Array]",EM="[object Uint32Array]",le={};le[Sm]=le[eM]=le[fM]=le[dM]=le[tM]=le[rM]=le[pM]=le[gM]=le[mM]=le[yM]=le[_M]=le[sM]=le[oM]=le[Pm]=le[aM]=le[cM]=le[uM]=le[lM]=le[vM]=le[TM]=le[wM]=le[EM]=!0;le[nM]=le[Rm]=le[hM]=!1;function Is(r,e,t,n,i,s){var a,c=e&JV,u=e&YV,h=e&ZV;if(t&&(a=i?t(r,n,i,s):t(r)),a!==void 0)return a;if(!WV(r))return r;var d=zV(r);if(d){if(a=BV(r),!c)return MV(r,a)}else{var m=UV(r),p=m==Rm||m==iM;if(HV(r))return VV(r,c);if(m==Pm||m==Sm||p&&!i){if(a=u||p?{}:qV(r),!c)return u?LV(r,NV(a,r)):xV(r,kV(a,r))}else{if(!le[m])return i?r:{};a=jV(r,m,c)}}s||(s=new CV);var w=s.get(r);if(w)return w;s.set(r,a),KV(r)?r.forEach(function(E){a.add(Is(E,e,t,E,r,s))}):GV(r)&&r.forEach(function(E,k){a.set(k,Is(E,e,t,k,r,s))});var v=h?u?FV:$V:u?XV:QV,A=d?void 0:v(r);return OV(A||r,function(E,k){A&&(k=E,E=r[k]),DV(a,k,Is(E,e,t,k,r,s))}),a}var IM=Is,bM=IM,AM=4;function SM(r){return bM(r,AM)}var RM=SM,qf;function PM(){if(qf)return us;qf=1;var r=ae&&ae.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(us,"__esModule",{value:!0});var e=r(Mm()),t=RM,n=function(){function i(s,a){a===void 0&&(a={}),this._src=s,this._opts=a,this._opts.filters=t(e.default.DefaultOpts.filters)}return i.prototype.maxColorCount=function(s){return this._opts.colorCount=s,this},i.prototype.maxDimension=function(s){return this._opts.maxDimension=s,this},i.prototype.addFilter=function(s){return this._opts.filters.push(s),this},i.prototype.removeFilter=function(s){var a=this._opts.filters.indexOf(s);return a>0&&this._opts.filters.splice(a),this},i.prototype.clearFilters=function(){return this._opts.filters=[],this},i.prototype.quality=function(s){return this._opts.quality=s,this},i.prototype.useImageClass=function(s){return this._opts.ImageClass=s,this},i.prototype.useGenerator=function(s){return this._opts.generator=s,this},i.prototype.useQuantizer=function(s){return this._opts.quantizer=s,this},i.prototype.build=function(){return new e.default(this._src,this._opts)},i.prototype.getPalette=function(s){return this.build().getPalette(s)},i.prototype.getSwatches=function(s){return this.build().getPalette(s)},i}();return us.default=n,us}var Cm={},Au={},Su={};Object.defineProperty(Su,"__esModule",{value:!0});var et=Ci,CM=function(){function r(e,t,n,i,s,a,c){this._volume=-1,this._count=-1,this.dimension={r1:e,r2:t,g1:n,g2:i,b1:s,b2:a},this.hist=c}return r.build=function(e,t){var n=1<<3*et.SIGBITS,i=new Uint32Array(n),s,a,c,u,h,d,m,p,w,v;s=c=h=0,a=u=d=Number.MAX_VALUE;for(var A=e.length/4,E=0;E<A;){var k=E*4;if(E++,m=e[k+0],p=e[k+1],w=e[k+2],v=e[k+3],v!==0){m=m>>et.RSHIFT,p=p>>et.RSHIFT,w=w>>et.RSHIFT;var C=et.getColorIndex(m,p,w);i[C]+=1,m>s&&(s=m),m<a&&(a=m),p>c&&(c=p),p<u&&(u=p),w>h&&(h=w),w<d&&(d=w)}}return new r(a,s,u,c,d,h,i)},r.prototype.invalidate=function(){this._volume=this._count=-1,this._avg=null},r.prototype.volume=function(){if(this._volume<0){var e=this.dimension,t=e.r1,n=e.r2,i=e.g1,s=e.g2,a=e.b1,c=e.b2;this._volume=(n-t+1)*(s-i+1)*(c-a+1)}return this._volume},r.prototype.count=function(){if(this._count<0){for(var e=this.hist,t=this.dimension,n=t.r1,i=t.r2,s=t.g1,a=t.g2,c=t.b1,u=t.b2,h=0,d=n;d<=i;d++)for(var m=s;m<=a;m++)for(var p=c;p<=u;p++){var w=et.getColorIndex(d,m,p);h+=e[w]}this._count=h}return this._count},r.prototype.clone=function(){var e=this.hist,t=this.dimension,n=t.r1,i=t.r2,s=t.g1,a=t.g2,c=t.b1,u=t.b2;return new r(n,i,s,a,c,u,e)},r.prototype.avg=function(){if(!this._avg){var e=this.hist,t=this.dimension,n=t.r1,i=t.r2,s=t.g1,a=t.g2,c=t.b1,u=t.b2,h=0,d=1<<8-et.SIGBITS,m=void 0,p=void 0,w=void 0;m=p=w=0;for(var v=n;v<=i;v++)for(var A=s;A<=a;A++)for(var E=c;E<=u;E++){var k=et.getColorIndex(v,A,E),C=e[k];h+=C,m+=C*(v+.5)*d,p+=C*(A+.5)*d,w+=C*(E+.5)*d}h?this._avg=[~~(m/h),~~(p/h),~~(w/h)]:this._avg=[~~(d*(n+i+1)/2),~~(d*(s+a+1)/2),~~(d*(c+u+1)/2)]}return this._avg},r.prototype.contains=function(e){var t=e[0],n=e[1],i=e[2],s=this.dimension,a=s.r1,c=s.r2,u=s.g1,h=s.g2,d=s.b1,m=s.b2;return t>>=et.RSHIFT,n>>=et.RSHIFT,i>>=et.RSHIFT,t>=a&&t<=c&&n>=u&&n<=h&&i>=d&&i<=m},r.prototype.split=function(){var e=this.hist,t=this.dimension,n=t.r1,i=t.r2,s=t.g1,a=t.g2,c=t.b1,u=t.b2,h=this.count();if(!h)return[];if(h===1)return[this.clone()];var d=i-n+1,m=a-s+1,p=u-c+1,w=Math.max(d,m,p),v=null,A,E;A=E=0;var k=null;if(w===d){k="r",v=new Uint32Array(i+1);for(var C=n;C<=i;C++){A=0;for(var D=s;D<=a;D++)for(var M=c;M<=u;M++){var L=et.getColorIndex(C,D,M);A+=e[L]}E+=A,v[C]=E}}else if(w===m){k="g",v=new Uint32Array(a+1);for(var D=s;D<=a;D++){A=0;for(var C=n;C<=i;C++)for(var M=c;M<=u;M++){var L=et.getColorIndex(C,D,M);A+=e[L]}E+=A,v[D]=E}}else{k="b",v=new Uint32Array(u+1);for(var M=c;M<=u;M++){A=0;for(var C=n;C<=i;C++)for(var D=s;D<=a;D++){var L=et.getColorIndex(C,D,M);A+=e[L]}E+=A,v[M]=E}}for(var $=-1,b=new Uint32Array(v.length),y=0;y<v.length;y++){var _=v[y];$<0&&_>E/2&&($=y),b[y]=E-_}var I=this;function S(R){var T=R+"1",J=R+"2",se=I.dimension[T],te=I.dimension[J],we=I.clone(),Ye=I.clone(),nt=$-se,U=te-$;for(nt<=U?(te=Math.min(te-1,~~($+U/2)),te=Math.max(0,te)):(te=Math.max(se,~~($-1-nt/2)),te=Math.min(I.dimension[J],te));!v[te];)te++;for(var z=b[te];!z&&v[te-1];)z=b[--te];return we.dimension[J]=te,Ye.dimension[T]=te+1,[we,Ye]}return S(k)},r}();Su.default=CM;var Ru={};Object.defineProperty(Ru,"__esModule",{value:!0});var OM=function(){function r(e){this._comparator=e,this.contents=[],this._sorted=!1}return r.prototype._sort=function(){this._sorted||(this.contents.sort(this._comparator),this._sorted=!0)},r.prototype.push=function(e){this.contents.push(e),this._sorted=!1},r.prototype.peek=function(e){return this._sort(),e=typeof e=="number"?e:this.contents.length-1,this.contents[e]},r.prototype.pop=function(){return this._sort(),this.contents.pop()},r.prototype.size=function(){return this.contents.length},r.prototype.map=function(e){return this._sort(),this.contents.map(e)},r}();Ru.default=OM;var Om=ae&&ae.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Au,"__esModule",{value:!0});var DM=An,kM=Om(Su),zf=Om(Ru),NM=.75;function Hf(r,e){for(var t=r.size();r.size()<e;){var n=r.pop();if(n&&n.count()>0){var i=n.split(),s=i[0],a=i[1];if(r.push(s),a&&a.count()>0&&r.push(a),r.size()===t)break;t=r.size()}else break}}var VM=function(r,e){if(r.length===0||e.colorCount<2||e.colorCount>256)throw new Error("Wrong MMCQ parameters");var t=kM.default.build(r),n=t.hist;Object.keys(n).length;var i=new zf.default(function(a,c){return a.count()-c.count()});i.push(t),Hf(i,NM*e.colorCount);var s=new zf.default(function(a,c){return a.count()*a.volume()-c.count()*c.volume()});return s.contents=i.contents,Hf(s,e.colorCount-s.size()),MM(s)};function MM(r){for(var e=[];r.size();){var t=r.pop(),n=t.avg();n[0],n[1],n[2],e.push(new DM.Swatch(n,t.count()))}return e}Au.default=VM;(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.WebWorker=void 0;var e=Au;Object.defineProperty(r,"MMCQ",{enumerable:!0,get:function(){return e.default}}),r.WebWorker=null})(Cm);var Dm={},Pu={};function xM(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)}var LM=xM,$M=LM,Gf=Math.max;function FM(r,e,t){return e=Gf(e===void 0?r.length-1:e,0),function(){for(var n=arguments,i=-1,s=Gf(n.length-e,0),a=Array(s);++i<s;)a[i]=n[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=n[i];return c[e]=t(a),$M(r,this,c)}}var UM=FM;function BM(r){return function(){return r}}var jM=BM,qM=jM,Wf=wm,zM=Iu,HM=Wf?function(r,e){return Wf(r,"toString",{configurable:!0,enumerable:!1,value:qM(e),writable:!0})}:zM,GM=HM,WM=800,KM=16,QM=Date.now;function XM(r){var e=0,t=0;return function(){var n=QM(),i=KM-(n-t);if(t=n,i>0){if(++e>=WM)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}var JM=XM,YM=GM,ZM=JM,ex=ZM(YM),tx=ex,rx=Iu,nx=UM,ix=tx;function sx(r,e){return ix(nx(r,e,rx),r+"")}var ox=sx,ax=Ni,cx=wo,ux=hu,lx=$r;function hx(r,e,t){if(!lx(t))return!1;var n=typeof e;return(n=="number"?cx(t)&&ux(e,t.length):n=="string"&&e in t)?ax(t[e],r):!1}var fx=hx,dx=ox,px=Ni,gx=fx,mx=Co,km=Object.prototype,yx=km.hasOwnProperty,_x=dx(function(r,e){r=Object(r);var t=-1,n=e.length,i=n>2?e[2]:void 0;for(i&&gx(e[0],e[1],i)&&(n=1);++t<n;)for(var s=e[t],a=mx(s),c=-1,u=a.length;++c<u;){var h=a[c],d=r[h];(d===void 0||px(d,km[h])&&!yx.call(r,h))&&(r[h]=s[h])}return r}),Nm=_x;Object.defineProperty(Pu,"__esModule",{value:!0});var Nt=An,Vt=Ci,vx=Nm,Tx={targetDarkLuma:.26,maxDarkLuma:.45,minLightLuma:.55,targetLightLuma:.74,minNormalLuma:.3,targetNormalLuma:.5,maxNormalLuma:.7,targetMutesSaturation:.3,maxMutesSaturation:.4,targetVibrantSaturation:1,minVibrantSaturation:.35,weightSaturation:3,weightLuma:6.5,weightPopulation:.5};function wx(r){var e=0;return r.forEach(function(t){e=Math.max(e,t.getPopulation())}),e}function Ex(r,e){return r.Vibrant===e||r.DarkVibrant===e||r.LightVibrant===e||r.Muted===e||r.DarkMuted===e||r.LightMuted===e}function Ix(r,e,t,n,i,s,a){function c(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];for(var m=0,p=0,w=0;w<h.length;w+=2){var v=h[w],A=h[w+1];m+=v*A,p+=A}return m/p}function u(h,d){return 1-Math.abs(h-d)}return c(u(r,e),a.weightSaturation,u(t,n),a.weightLuma,i/s,a.weightPopulation)}function Gr(r,e,t,n,i,s,a,c,u,h){var d=null,m=0;return e.forEach(function(p){var w=p.getHsl(),v=w[1],A=w[2];if(v>=c&&v<=u&&A>=i&&A<=s&&!Ex(r,p)){var E=Ix(v,a,A,n,p.getPopulation(),t,h);(d===null||E>m)&&(d=p,m=E)}}),d}function bx(r,e,t){var n={};return n.Vibrant=Gr(n,r,e,t.targetNormalLuma,t.minNormalLuma,t.maxNormalLuma,t.targetVibrantSaturation,t.minVibrantSaturation,1,t),n.LightVibrant=Gr(n,r,e,t.targetLightLuma,t.minLightLuma,1,t.targetVibrantSaturation,t.minVibrantSaturation,1,t),n.DarkVibrant=Gr(n,r,e,t.targetDarkLuma,0,t.maxDarkLuma,t.targetVibrantSaturation,t.minVibrantSaturation,1,t),n.Muted=Gr(n,r,e,t.targetNormalLuma,t.minNormalLuma,t.maxNormalLuma,t.targetMutesSaturation,0,t.maxMutesSaturation,t),n.LightMuted=Gr(n,r,e,t.targetLightLuma,t.minLightLuma,1,t.targetMutesSaturation,0,t.maxMutesSaturation,t),n.DarkMuted=Gr(n,r,e,t.targetDarkLuma,0,t.maxDarkLuma,t.targetMutesSaturation,0,t.maxMutesSaturation,t),n}function Ax(r,e,t){if(r.Vibrant===null&&r.DarkVibrant===null&&r.LightVibrant===null){if(r.DarkVibrant===null&&r.DarkMuted!==null){var n=r.DarkMuted.getHsl(),i=n[0],s=n[1],a=n[2];a=t.targetDarkLuma,r.DarkVibrant=new Nt.Swatch(Vt.hslToRgb(i,s,a),0)}if(r.LightVibrant===null&&r.LightMuted!==null){var c=r.LightMuted.getHsl(),i=c[0],s=c[1],a=c[2];a=t.targetDarkLuma,r.DarkVibrant=new Nt.Swatch(Vt.hslToRgb(i,s,a),0)}}if(r.Vibrant===null&&r.DarkVibrant!==null){var u=r.DarkVibrant.getHsl(),i=u[0],s=u[1],a=u[2];a=t.targetNormalLuma,r.Vibrant=new Nt.Swatch(Vt.hslToRgb(i,s,a),0)}else if(r.Vibrant===null&&r.LightVibrant!==null){var h=r.LightVibrant.getHsl(),i=h[0],s=h[1],a=h[2];a=t.targetNormalLuma,r.Vibrant=new Nt.Swatch(Vt.hslToRgb(i,s,a),0)}if(r.DarkVibrant===null&&r.Vibrant!==null){var d=r.Vibrant.getHsl(),i=d[0],s=d[1],a=d[2];a=t.targetDarkLuma,r.DarkVibrant=new Nt.Swatch(Vt.hslToRgb(i,s,a),0)}if(r.LightVibrant===null&&r.Vibrant!==null){var m=r.Vibrant.getHsl(),i=m[0],s=m[1],a=m[2];a=t.targetLightLuma,r.LightVibrant=new Nt.Swatch(Vt.hslToRgb(i,s,a),0)}if(r.Muted===null&&r.Vibrant!==null){var p=r.Vibrant.getHsl(),i=p[0],s=p[1],a=p[2];a=t.targetMutesSaturation,r.Muted=new Nt.Swatch(Vt.hslToRgb(i,s,a),0)}if(r.DarkMuted===null&&r.DarkVibrant!==null){var w=r.DarkVibrant.getHsl(),i=w[0],s=w[1],a=w[2];a=t.targetMutesSaturation,r.DarkMuted=new Nt.Swatch(Vt.hslToRgb(i,s,a),0)}if(r.LightMuted===null&&r.LightVibrant!==null){var v=r.LightVibrant.getHsl(),i=v[0],s=v[1],a=v[2];a=t.targetMutesSaturation,r.LightMuted=new Nt.Swatch(Vt.hslToRgb(i,s,a),0)}}var Sx=function(r,e){e=vx({},e,Tx);var t=wx(r),n=bx(r,t,e);return Ax(n,t,e),n};Pu.default=Sx;(function(r){Object.defineProperty(r,"__esModule",{value:!0});var e=Pu;Object.defineProperty(r,"Default",{enumerable:!0,get:function(){return e.default}})})(Dm);var Vm={},Cu={};Object.defineProperty(Cu,"__esModule",{value:!0});function Rx(r,e,t,n){return n>=125&&!(r>250&&e>250&&t>250)}Cu.default=Rx;(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.combineFilters=void 0;var e=Cu;Object.defineProperty(r,"Default",{enumerable:!0,get:function(){return e.default}});function t(n){return!Array.isArray(n)||n.length===0?null:function(i,s,a,c){if(c===0)return!1;for(var u=0;u<n.length;u++)if(!n[u](i,s,a,c))return!1;return!0}}r.combineFilters=t})(Vm);var Kf;function Mm(){if(Kf)return as;Kf=1;var r=ae&&ae.__createBinding||(Object.create?function(p,w,v,A){A===void 0&&(A=v),Object.defineProperty(p,A,{enumerable:!0,get:function(){return w[v]}})}:function(p,w,v,A){A===void 0&&(A=v),p[A]=w[v]}),e=ae&&ae.__setModuleDefault||(Object.create?function(p,w){Object.defineProperty(p,"default",{enumerable:!0,value:w})}:function(p,w){p.default=w}),t=ae&&ae.__importStar||function(p){if(p&&p.__esModule)return p;var w={};if(p!=null)for(var v in p)v!=="default"&&Object.hasOwnProperty.call(p,v)&&r(w,p,v);return e(w,p),w},n=ae&&ae.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(as,"__esModule",{value:!0});var i=An,s=n(PM()),a=t(Ci),c=t(Cm),u=t(Dm),h=t(Vm),d=Nm,m=function(){function p(w,v){this._src=w,this.opts=d({},v,p.DefaultOpts),this.opts.combinedFilter=h.combineFilters(this.opts.filters)}return p.from=function(w){return new s.default(w)},p.prototype._process=function(w,v){var A=v.quantizer,E=v.generator;return w.scaleDown(v),w.applyFilter(v.combinedFilter).then(function(k){return A(k.data,v)}).then(function(k){return i.Swatch.applyFilter(k,v.combinedFilter)}).then(function(k){return Promise.resolve(E(k))})},p.prototype.palette=function(){return this.swatches()},p.prototype.swatches=function(){return this._palette},p.prototype.getPalette=function(w){var v=this,A=new this.opts.ImageClass,E=A.load(this._src).then(function(k){return v._process(k,v.opts)}).then(function(k){return v._palette=k,A.remove(),k},function(k){throw A.remove(),k});return w&&E.then(function(k){return w(null,k)},function(k){return w(k)}),E},p.Builder=s.default,p.Quantizer=c,p.Generator=u,p.Filter=h,p.Util=a,p.Swatch=i.Swatch,p.DefaultOpts={colorCount:64,quality:5,generator:u.Default,ImageClass:null,quantizer:c.MMCQ,filters:[h.Default]},p}();return as.default=m,as}var Ou={},Oo={};Object.defineProperty(Oo,"__esModule",{value:!0});Oo.ImageBase=void 0;var Px=function(){function r(){}return r.prototype.scaleDown=function(e){var t=this.getWidth(),n=this.getHeight(),i=1;if(e.maxDimension>0){var s=Math.max(t,n);s>e.maxDimension&&(i=e.maxDimension/s)}else i=1/e.quality;i<1&&this.resize(t*i,n*i,i)},r.prototype.applyFilter=function(e){var t=this.getImageData();if(typeof e=="function")for(var n=t.data,i=n.length/4,s=void 0,a=void 0,c=void 0,u=void 0,h=void 0,d=0;d<i;d++)s=d*4,a=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],e(a,c,u,h)||(n[s+3]=0);return Promise.resolve(t)},r}();Oo.ImageBase=Px;var Dn={},Ws={exports:{}};/*! https://mths.be/punycode v1.4.1 by @mathias */Ws.exports;(function(r,e){(function(t){var n=e&&!e.nodeType&&e,i=r&&!r.nodeType&&r,s=typeof ae=="object"&&ae;(s.global===s||s.window===s||s.self===s)&&(t=s);var a,c=2147483647,u=36,h=1,d=26,m=38,p=700,w=72,v=128,A="-",E=/^xn--/,k=/[^\x20-\x7E]/,C=/[\x2E\u3002\uFF0E\uFF61]/g,D={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},M=u-h,L=Math.floor,$=String.fromCharCode,b;function y(U){throw new RangeError(D[U])}function _(U,z){for(var Q=U.length,X=[];Q--;)X[Q]=z(U[Q]);return X}function I(U,z){var Q=U.split("@"),X="";Q.length>1&&(X=Q[0]+"@",U=Q[1]),U=U.replace(C,".");var pe=U.split("."),Ee=_(pe,z).join(".");return X+Ee}function S(U){for(var z=[],Q=0,X=U.length,pe,Ee;Q<X;)pe=U.charCodeAt(Q++),pe>=55296&&pe<=56319&&Q<X?(Ee=U.charCodeAt(Q++),(Ee&64512)==56320?z.push(((pe&1023)<<10)+(Ee&1023)+65536):(z.push(pe),Q--)):z.push(pe);return z}function R(U){return _(U,function(z){var Q="";return z>65535&&(z-=65536,Q+=$(z>>>10&1023|55296),z=56320|z&1023),Q+=$(z),Q}).join("")}function T(U){return U-48<10?U-22:U-65<26?U-65:U-97<26?U-97:u}function J(U,z){return U+22+75*(U<26)-((z!=0)<<5)}function se(U,z,Q){var X=0;for(U=Q?L(U/p):U>>1,U+=L(U/z);U>M*d>>1;X+=u)U=L(U/M);return L(X+(M+1)*U/(U+m))}function te(U){var z=[],Q=U.length,X,pe=0,Ee=v,Se=w,De,it,ut,Ze,Ie,Fe,Ke,lt,dt;for(De=U.lastIndexOf(A),De<0&&(De=0),it=0;it<De;++it)U.charCodeAt(it)>=128&&y("not-basic"),z.push(U.charCodeAt(it));for(ut=De>0?De+1:0;ut<Q;){for(Ze=pe,Ie=1,Fe=u;ut>=Q&&y("invalid-input"),Ke=T(U.charCodeAt(ut++)),(Ke>=u||Ke>L((c-pe)/Ie))&&y("overflow"),pe+=Ke*Ie,lt=Fe<=Se?h:Fe>=Se+d?d:Fe-Se,!(Ke<lt);Fe+=u)dt=u-lt,Ie>L(c/dt)&&y("overflow"),Ie*=dt;X=z.length+1,Se=se(pe-Ze,X,Ze==0),L(pe/X)>c-Ee&&y("overflow"),Ee+=L(pe/X),pe%=X,z.splice(pe++,0,Ee)}return R(z)}function we(U){var z,Q,X,pe,Ee,Se,De,it,ut,Ze,Ie,Fe=[],Ke,lt,dt,Ur;for(U=S(U),Ke=U.length,z=v,Q=0,Ee=w,Se=0;Se<Ke;++Se)Ie=U[Se],Ie<128&&Fe.push($(Ie));for(X=pe=Fe.length,pe&&Fe.push(A);X<Ke;){for(De=c,Se=0;Se<Ke;++Se)Ie=U[Se],Ie>=z&&Ie<De&&(De=Ie);for(lt=X+1,De-z>L((c-Q)/lt)&&y("overflow"),Q+=(De-z)*lt,z=De,Se=0;Se<Ke;++Se)if(Ie=U[Se],Ie<z&&++Q>c&&y("overflow"),Ie==z){for(it=Q,ut=u;Ze=ut<=Ee?h:ut>=Ee+d?d:ut-Ee,!(it<Ze);ut+=u)Ur=it-Ze,dt=u-Ze,Fe.push($(J(Ze+Ur%dt,0))),it=L(Ur/dt);Fe.push($(J(it,0))),Ee=se(Q,lt,X==pe),Q=0,++X}++Q,++z}return Fe.join("")}function Ye(U){return I(U,function(z){return E.test(z)?te(z.slice(4).toLowerCase()):z})}function nt(U){return I(U,function(z){return k.test(z)?"xn--"+we(z):z})}if(a={version:"1.4.1",ucs2:{decode:S,encode:R},decode:te,encode:we,toASCII:nt,toUnicode:Ye},n&&i)if(r.exports==n)i.exports=a;else for(b in a)a.hasOwnProperty(b)&&(n[b]=a[b]);else t.punycode=a})(ae)})(Ws,Ws.exports);var Cx=Ws.exports,Ox=Error,Dx=EvalError,kx=RangeError,Nx=ReferenceError,xm=SyntaxError,Vi=TypeError,Vx=URIError,Mx=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var i=42;e[t]=i;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var s=Object.getOwnPropertySymbols(e);if(s.length!==1||s[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var a=Object.getOwnPropertyDescriptor(e,t);if(a.value!==i||a.enumerable!==!0)return!1}return!0},Qf=typeof Symbol<"u"&&Symbol,xx=Mx,Lx=function(){return typeof Qf!="function"||typeof Symbol!="function"||typeof Qf("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:xx()},pa={__proto__:null,foo:{}},$x=Object,Fx=function(){return{__proto__:pa}.foo===pa.foo&&!(pa instanceof $x)},Ux="Function.prototype.bind called on incompatible ",Bx=Object.prototype.toString,jx=Math.max,qx="[object Function]",Xf=function(e,t){for(var n=[],i=0;i<e.length;i+=1)n[i]=e[i];for(var s=0;s<t.length;s+=1)n[s+e.length]=t[s];return n},zx=function(e,t){for(var n=[],i=t,s=0;i<e.length;i+=1,s+=1)n[s]=e[i];return n},Hx=function(r,e){for(var t="",n=0;n<r.length;n+=1)t+=r[n],n+1<r.length&&(t+=e);return t},Gx=function(e){var t=this;if(typeof t!="function"||Bx.apply(t)!==qx)throw new TypeError(Ux+t);for(var n=zx(arguments,1),i,s=function(){if(this instanceof i){var d=t.apply(this,Xf(n,arguments));return Object(d)===d?d:this}return t.apply(e,Xf(n,arguments))},a=jx(0,t.length-n.length),c=[],u=0;u<a;u++)c[u]="$"+u;if(i=Function("binder","return function ("+Hx(c,",")+"){ return binder.apply(this,arguments); }")(s),t.prototype){var h=function(){};h.prototype=t.prototype,i.prototype=new h,h.prototype=null}return i},Wx=Gx,Du=Function.prototype.bind||Wx,Kx=Function.prototype.call,Qx=Object.prototype.hasOwnProperty,Xx=Du,Jx=Xx.call(Kx,Qx),Y,Yx=Ox,Zx=Dx,e2=kx,t2=Nx,mn=xm,on=Vi,r2=Vx,Lm=Function,ga=function(r){try{return Lm('"use strict"; return ('+r+").constructor;")()}catch{}},Pr=Object.getOwnPropertyDescriptor;if(Pr)try{Pr({},"")}catch{Pr=null}var ma=function(){throw new on},n2=Pr?function(){try{return arguments.callee,ma}catch{try{return Pr(arguments,"callee").get}catch{return ma}}}():ma,Wr=Lx(),i2=Fx(),ke=Object.getPrototypeOf||(i2?function(r){return r.__proto__}:null),Zr={},s2=typeof Uint8Array>"u"||!ke?Y:ke(Uint8Array),Cr={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?Y:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?Y:ArrayBuffer,"%ArrayIteratorPrototype%":Wr&&ke?ke([][Symbol.iterator]()):Y,"%AsyncFromSyncIteratorPrototype%":Y,"%AsyncFunction%":Zr,"%AsyncGenerator%":Zr,"%AsyncGeneratorFunction%":Zr,"%AsyncIteratorPrototype%":Zr,"%Atomics%":typeof Atomics>"u"?Y:Atomics,"%BigInt%":typeof BigInt>"u"?Y:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?Y:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?Y:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?Y:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Yx,"%eval%":eval,"%EvalError%":Zx,"%Float32Array%":typeof Float32Array>"u"?Y:Float32Array,"%Float64Array%":typeof Float64Array>"u"?Y:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?Y:FinalizationRegistry,"%Function%":Lm,"%GeneratorFunction%":Zr,"%Int8Array%":typeof Int8Array>"u"?Y:Int8Array,"%Int16Array%":typeof Int16Array>"u"?Y:Int16Array,"%Int32Array%":typeof Int32Array>"u"?Y:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Wr&&ke?ke(ke([][Symbol.iterator]())):Y,"%JSON%":typeof JSON=="object"?JSON:Y,"%Map%":typeof Map>"u"?Y:Map,"%MapIteratorPrototype%":typeof Map>"u"||!Wr||!ke?Y:ke(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?Y:Promise,"%Proxy%":typeof Proxy>"u"?Y:Proxy,"%RangeError%":e2,"%ReferenceError%":t2,"%Reflect%":typeof Reflect>"u"?Y:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?Y:Set,"%SetIteratorPrototype%":typeof Set>"u"||!Wr||!ke?Y:ke(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?Y:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Wr&&ke?ke(""[Symbol.iterator]()):Y,"%Symbol%":Wr?Symbol:Y,"%SyntaxError%":mn,"%ThrowTypeError%":n2,"%TypedArray%":s2,"%TypeError%":on,"%Uint8Array%":typeof Uint8Array>"u"?Y:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?Y:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?Y:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?Y:Uint32Array,"%URIError%":r2,"%WeakMap%":typeof WeakMap>"u"?Y:WeakMap,"%WeakRef%":typeof WeakRef>"u"?Y:WeakRef,"%WeakSet%":typeof WeakSet>"u"?Y:WeakSet};if(ke)try{null.error}catch(r){var o2=ke(ke(r));Cr["%Error.prototype%"]=o2}var a2=function r(e){var t;if(e==="%AsyncFunction%")t=ga("async function () {}");else if(e==="%GeneratorFunction%")t=ga("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=ga("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var i=r("%AsyncGenerator%");i&&ke&&(t=ke(i.prototype))}return Cr[e]=t,t},Jf={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Mi=Du,Ks=Jx,c2=Mi.call(Function.call,Array.prototype.concat),u2=Mi.call(Function.apply,Array.prototype.splice),Yf=Mi.call(Function.call,String.prototype.replace),Qs=Mi.call(Function.call,String.prototype.slice),l2=Mi.call(Function.call,RegExp.prototype.exec),h2=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,f2=/\\(\\)?/g,d2=function(e){var t=Qs(e,0,1),n=Qs(e,-1);if(t==="%"&&n!=="%")throw new mn("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new mn("invalid intrinsic syntax, expected opening `%`");var i=[];return Yf(e,h2,function(s,a,c,u){i[i.length]=c?Yf(u,f2,"$1"):a||s}),i},p2=function(e,t){var n=e,i;if(Ks(Jf,n)&&(i=Jf[n],n="%"+i[0]+"%"),Ks(Cr,n)){var s=Cr[n];if(s===Zr&&(s=a2(n)),typeof s>"u"&&!t)throw new on("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:i,name:n,value:s}}throw new mn("intrinsic "+e+" does not exist!")},kn=function(e,t){if(typeof e!="string"||e.length===0)throw new on("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new on('"allowMissing" argument must be a boolean');if(l2(/^%?[^%]*%?$/,e)===null)throw new mn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=d2(e),i=n.length>0?n[0]:"",s=p2("%"+i+"%",t),a=s.name,c=s.value,u=!1,h=s.alias;h&&(i=h[0],u2(n,c2([0,1],h)));for(var d=1,m=!0;d<n.length;d+=1){var p=n[d],w=Qs(p,0,1),v=Qs(p,-1);if((w==='"'||w==="'"||w==="`"||v==='"'||v==="'"||v==="`")&&w!==v)throw new mn("property names with quotes must have matching quotes");if((p==="constructor"||!m)&&(u=!0),i+="."+p,a="%"+i+"%",Ks(Cr,a))c=Cr[a];else if(c!=null){if(!(p in c)){if(!t)throw new on("base intrinsic for "+e+" exists, but the property is not available.");return}if(Pr&&d+1>=n.length){var A=Pr(c,p);m=!!A,m&&"get"in A&&!("originalValue"in A.get)?c=A.get:c=c[p]}else m=Ks(c,p),c=c[p];m&&!u&&(Cr[a]=c)}}return c},$m={exports:{}},ya,Zf;function ku(){if(Zf)return ya;Zf=1;var r=kn,e=r("%Object.defineProperty%",!0)||!1;if(e)try{e({},"a",{value:1})}catch{e=!1}return ya=e,ya}var g2=kn,bs=g2("%Object.getOwnPropertyDescriptor%",!0);if(bs)try{bs([],"length")}catch{bs=null}var Fm=bs,ed=ku(),m2=xm,Kr=Vi,td=Fm,y2=function(e,t,n){if(!e||typeof e!="object"&&typeof e!="function")throw new Kr("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new Kr("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new Kr("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new Kr("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new Kr("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new Kr("`loose`, if provided, must be a boolean");var i=arguments.length>3?arguments[3]:null,s=arguments.length>4?arguments[4]:null,a=arguments.length>5?arguments[5]:null,c=arguments.length>6?arguments[6]:!1,u=!!td&&td(e,t);if(ed)ed(e,t,{configurable:a===null&&u?u.configurable:!a,enumerable:i===null&&u?u.enumerable:!i,value:n,writable:s===null&&u?u.writable:!s});else if(c||!i&&!s&&!a)e[t]=n;else throw new m2("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},rc=ku(),Um=function(){return!!rc};Um.hasArrayLengthDefineBug=function(){if(!rc)return null;try{return rc([],"length",{value:1}).length!==1}catch{return!0}};var _2=Um,v2=kn,rd=y2,T2=_2(),nd=Fm,id=Vi,w2=v2("%Math.floor%"),E2=function(e,t){if(typeof e!="function")throw new id("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||w2(t)!==t)throw new id("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],i=!0,s=!0;if("length"in e&&nd){var a=nd(e,"length");a&&!a.configurable&&(i=!1),a&&!a.writable&&(s=!1)}return(i||s||!n)&&(T2?rd(e,"length",t,!0,!0):rd(e,"length",t)),e};(function(r){var e=Du,t=kn,n=E2,i=Vi,s=t("%Function.prototype.apply%"),a=t("%Function.prototype.call%"),c=t("%Reflect.apply%",!0)||e.call(a,s),u=ku(),h=t("%Math.max%");r.exports=function(p){if(typeof p!="function")throw new i("a function is required");var w=c(e,a,arguments);return n(w,1+h(0,p.length-(arguments.length-1)),!0)};var d=function(){return c(e,s,arguments)};u?u(r.exports,"apply",{value:d}):r.exports.apply=d})($m);var I2=$m.exports,Bm=kn,jm=I2,b2=jm(Bm("String.prototype.indexOf")),A2=function(e,t){var n=Bm(e,!!t);return typeof n=="function"&&b2(e,".prototype.")>-1?jm(n):n};const S2={},R2=Object.freeze(Object.defineProperty({__proto__:null,default:S2},Symbol.toStringTag,{value:"Module"})),P2=V0(R2);var Nu=typeof Map=="function"&&Map.prototype,_a=Object.getOwnPropertyDescriptor&&Nu?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Xs=Nu&&_a&&typeof _a.get=="function"?_a.get:null,sd=Nu&&Map.prototype.forEach,Vu=typeof Set=="function"&&Set.prototype,va=Object.getOwnPropertyDescriptor&&Vu?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Js=Vu&&va&&typeof va.get=="function"?va.get:null,od=Vu&&Set.prototype.forEach,C2=typeof WeakMap=="function"&&WeakMap.prototype,ai=C2?WeakMap.prototype.has:null,O2=typeof WeakSet=="function"&&WeakSet.prototype,ci=O2?WeakSet.prototype.has:null,D2=typeof WeakRef=="function"&&WeakRef.prototype,ad=D2?WeakRef.prototype.deref:null,k2=Boolean.prototype.valueOf,N2=Object.prototype.toString,V2=Function.prototype.toString,M2=String.prototype.match,Mu=String.prototype.slice,nr=String.prototype.replace,x2=String.prototype.toUpperCase,cd=String.prototype.toLowerCase,qm=RegExp.prototype.test,ud=Array.prototype.concat,vt=Array.prototype.join,L2=Array.prototype.slice,ld=Math.floor,nc=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Ta=Object.getOwnPropertySymbols,ic=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,yn=typeof Symbol=="function"&&typeof Symbol.iterator=="object",We=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===yn||!0)?Symbol.toStringTag:null,zm=Object.prototype.propertyIsEnumerable,hd=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function fd(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||qm.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-ld(-r):ld(r);if(n!==r){var i=String(n),s=Mu.call(e,i.length+1);return nr.call(i,t,"$&_")+"."+nr.call(nr.call(s,/([0-9]{3})/g,"$&_"),/_$/,"")}}return nr.call(e,t,"$&_")}var sc=P2,dd=sc.custom,pd=Wm(dd)?dd:null,Hm={__proto__:null,double:'"',single:"'"},$2={__proto__:null,double:/(["\\])/g,single:/(['\\])/g},F2=function r(e,t,n,i){var s=t||{};if(Mt(s,"quoteStyle")&&!Mt(Hm,s.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(Mt(s,"maxStringLength")&&(typeof s.maxStringLength=="number"?s.maxStringLength<0&&s.maxStringLength!==1/0:s.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=Mt(s,"customInspect")?s.customInspect:!0;if(typeof a!="boolean"&&a!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Mt(s,"indent")&&s.indent!==null&&s.indent!=="	"&&!(parseInt(s.indent,10)===s.indent&&s.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Mt(s,"numericSeparator")&&typeof s.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var c=s.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Qm(e,s);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var u=String(e);return c?fd(e,u):u}if(typeof e=="bigint"){var h=String(e)+"n";return c?fd(e,h):h}var d=typeof s.depth>"u"?5:s.depth;if(typeof n>"u"&&(n=0),n>=d&&d>0&&typeof e=="object")return oc(e)?"[Array]":"[Object]";var m=nL(s,n);if(typeof i>"u")i=[];else if(Km(i,e)>=0)return"[Circular]";function p(T,J,se){if(J&&(i=L2.call(i),i.push(J)),se){var te={depth:s.depth};return Mt(s,"quoteStyle")&&(te.quoteStyle=s.quoteStyle),r(T,te,n+1,i)}return r(T,s,n+1,i)}if(typeof e=="function"&&!gd(e)){var w=K2(e),v=ls(e,p);return"[Function"+(w?": "+w:" (anonymous)")+"]"+(v.length>0?" { "+vt.call(v,", ")+" }":"")}if(Wm(e)){var A=yn?nr.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):ic.call(e);return typeof e=="object"&&!yn?Xn(A):A}if(eL(e)){for(var E="<"+cd.call(String(e.nodeName)),k=e.attributes||[],C=0;C<k.length;C++)E+=" "+k[C].name+"="+Gm(U2(k[C].value),"double",s);return E+=">",e.childNodes&&e.childNodes.length&&(E+="..."),E+="</"+cd.call(String(e.nodeName))+">",E}if(oc(e)){if(e.length===0)return"[]";var D=ls(e,p);return m&&!rL(D)?"["+ac(D,m)+"]":"[ "+vt.call(D,", ")+" ]"}if(j2(e)){var M=ls(e,p);return!("cause"in Error.prototype)&&"cause"in e&&!zm.call(e,"cause")?"{ ["+String(e)+"] "+vt.call(ud.call("[cause]: "+p(e.cause),M),", ")+" }":M.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+vt.call(M,", ")+" }"}if(typeof e=="object"&&a){if(pd&&typeof e[pd]=="function"&&sc)return sc(e,{depth:d-n});if(a!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Q2(e)){var L=[];return sd&&sd.call(e,function(T,J){L.push(p(J,e,!0)+" => "+p(T,e))}),md("Map",Xs.call(e),L,m)}if(Y2(e)){var $=[];return od&&od.call(e,function(T){$.push(p(T,e))}),md("Set",Js.call(e),$,m)}if(X2(e))return wa("WeakMap");if(Z2(e))return wa("WeakSet");if(J2(e))return wa("WeakRef");if(z2(e))return Xn(p(Number(e)));if(G2(e))return Xn(p(nc.call(e)));if(H2(e))return Xn(k2.call(e));if(q2(e))return Xn(p(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(typeof globalThis<"u"&&e===globalThis||typeof ae<"u"&&e===ae)return"{ [object globalThis] }";if(!B2(e)&&!gd(e)){var b=ls(e,p),y=hd?hd(e)===Object.prototype:e instanceof Object||e.constructor===Object,_=e instanceof Object?"":"null prototype",I=!y&&We&&Object(e)===e&&We in e?Mu.call(gr(e),8,-1):_?"Object":"",S=y||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",R=S+(I||_?"["+vt.call(ud.call([],I||[],_||[]),": ")+"] ":"");return b.length===0?R+"{}":m?R+"{"+ac(b,m)+"}":R+"{ "+vt.call(b,", ")+" }"}return String(e)};function Gm(r,e,t){var n=t.quoteStyle||e,i=Hm[n];return i+r+i}function U2(r){return nr.call(String(r),/"/g,"&quot;")}function oc(r){return gr(r)==="[object Array]"&&(!We||!(typeof r=="object"&&We in r))}function B2(r){return gr(r)==="[object Date]"&&(!We||!(typeof r=="object"&&We in r))}function gd(r){return gr(r)==="[object RegExp]"&&(!We||!(typeof r=="object"&&We in r))}function j2(r){return gr(r)==="[object Error]"&&(!We||!(typeof r=="object"&&We in r))}function q2(r){return gr(r)==="[object String]"&&(!We||!(typeof r=="object"&&We in r))}function z2(r){return gr(r)==="[object Number]"&&(!We||!(typeof r=="object"&&We in r))}function H2(r){return gr(r)==="[object Boolean]"&&(!We||!(typeof r=="object"&&We in r))}function Wm(r){if(yn)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!ic)return!1;try{return ic.call(r),!0}catch{}return!1}function G2(r){if(!r||typeof r!="object"||!nc)return!1;try{return nc.call(r),!0}catch{}return!1}var W2=Object.prototype.hasOwnProperty||function(r){return r in this};function Mt(r,e){return W2.call(r,e)}function gr(r){return N2.call(r)}function K2(r){if(r.name)return r.name;var e=M2.call(V2.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function Km(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function Q2(r){if(!Xs||!r||typeof r!="object")return!1;try{Xs.call(r);try{Js.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function X2(r){if(!ai||!r||typeof r!="object")return!1;try{ai.call(r,ai);try{ci.call(r,ci)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function J2(r){if(!ad||!r||typeof r!="object")return!1;try{return ad.call(r),!0}catch{}return!1}function Y2(r){if(!Js||!r||typeof r!="object")return!1;try{Js.call(r);try{Xs.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function Z2(r){if(!ci||!r||typeof r!="object")return!1;try{ci.call(r,ci);try{ai.call(r,ai)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function eL(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function Qm(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return Qm(Mu.call(r,0,e.maxStringLength),e)+n}var i=$2[e.quoteStyle||"single"];i.lastIndex=0;var s=nr.call(nr.call(r,i,"\\$1"),/[\x00-\x1f]/g,tL);return Gm(s,"single",e)}function tL(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+x2.call(e.toString(16))}function Xn(r){return"Object("+r+")"}function wa(r){return r+" { ? }"}function md(r,e,t,n){var i=n?ac(t,n):vt.call(t,", ");return r+" ("+e+") {"+i+"}"}function rL(r){for(var e=0;e<r.length;e++)if(Km(r[e],`
`)>=0)return!1;return!0}function nL(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=vt.call(Array(r.indent+1)," ");else return null;return{base:t,prev:vt.call(Array(e+1),t)}}function ac(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+vt.call(r,","+t)+`
`+e.prev}function ls(r,e){var t=oc(r),n=[];if(t){n.length=r.length;for(var i=0;i<r.length;i++)n[i]=Mt(r,i)?e(r[i],r):""}var s=typeof Ta=="function"?Ta(r):[],a;if(yn){a={};for(var c=0;c<s.length;c++)a["$"+s[c]]=s[c]}for(var u in r)Mt(r,u)&&(t&&String(Number(u))===u&&u<r.length||yn&&a["$"+u]instanceof Symbol||(qm.call(/[^\w$]/,u)?n.push(e(u,r)+": "+e(r[u],r)):n.push(u+": "+e(r[u],r))));if(typeof Ta=="function")for(var h=0;h<s.length;h++)zm.call(r,s[h])&&n.push("["+e(s[h])+"]: "+e(r[s[h]],r));return n}var Xm=kn,Nn=A2,iL=F2,sL=Vi,hs=Xm("%WeakMap%",!0),fs=Xm("%Map%",!0),oL=Nn("WeakMap.prototype.get",!0),aL=Nn("WeakMap.prototype.set",!0),cL=Nn("WeakMap.prototype.has",!0),uL=Nn("Map.prototype.get",!0),lL=Nn("Map.prototype.set",!0),hL=Nn("Map.prototype.has",!0),xu=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},fL=function(r,e){var t=xu(r,e);return t&&t.value},dL=function(r,e,t){var n=xu(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},pL=function(r,e){return!!xu(r,e)},gL=function(){var e,t,n,i={assert:function(s){if(!i.has(s))throw new sL("Side channel does not contain "+iL(s))},get:function(s){if(hs&&s&&(typeof s=="object"||typeof s=="function")){if(e)return oL(e,s)}else if(fs){if(t)return uL(t,s)}else if(n)return fL(n,s)},has:function(s){if(hs&&s&&(typeof s=="object"||typeof s=="function")){if(e)return cL(e,s)}else if(fs){if(t)return hL(t,s)}else if(n)return pL(n,s);return!1},set:function(s,a){hs&&s&&(typeof s=="object"||typeof s=="function")?(e||(e=new hs),aL(e,s,a)):fs?(t||(t=new fs),lL(t,s,a)):(n||(n={key:{},next:null}),dL(n,s,a))}};return i},mL=String.prototype.replace,yL=/%20/g,Ea={RFC1738:"RFC1738",RFC3986:"RFC3986"},Lu={default:Ea.RFC3986,formatters:{RFC1738:function(r){return mL.call(r,yL,"+")},RFC3986:function(r){return String(r)}},RFC1738:Ea.RFC1738,RFC3986:Ea.RFC3986},_L=Lu,Ia=Object.prototype.hasOwnProperty,Ir=Array.isArray,yt=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),vL=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(Ir(n)){for(var i=[],s=0;s<n.length;++s)typeof n[s]<"u"&&i.push(n[s]);t.obj[t.prop]=i}}},Jm=function(e,t){for(var n=t&&t.plainObjects?{__proto__:null}:{},i=0;i<e.length;++i)typeof e[i]<"u"&&(n[i]=e[i]);return n},TL=function r(e,t,n){if(!t)return e;if(typeof t!="object"&&typeof t!="function"){if(Ir(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!Ia.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var i=e;return Ir(e)&&!Ir(t)&&(i=Jm(e,n)),Ir(e)&&Ir(t)?(t.forEach(function(s,a){if(Ia.call(e,a)){var c=e[a];c&&typeof c=="object"&&s&&typeof s=="object"?e[a]=r(c,s,n):e.push(s)}else e[a]=s}),e):Object.keys(t).reduce(function(s,a){var c=t[a];return Ia.call(s,a)?s[a]=r(s[a],c,n):s[a]=c,s},i)},wL=function(e,t){return Object.keys(t).reduce(function(n,i){return n[i]=t[i],n},e)},EL=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},ba=1024,IL=function(e,t,n,i,s){if(e.length===0)return e;var a=e;if(typeof e=="symbol"?a=Symbol.prototype.toString.call(e):typeof e!="string"&&(a=String(e)),n==="iso-8859-1")return escape(a).replace(/%u[0-9a-f]{4}/gi,function(w){return"%26%23"+parseInt(w.slice(2),16)+"%3B"});for(var c="",u=0;u<a.length;u+=ba){for(var h=a.length>=ba?a.slice(u,u+ba):a,d=[],m=0;m<h.length;++m){var p=h.charCodeAt(m);if(p===45||p===46||p===95||p===126||p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122||s===_L.RFC1738&&(p===40||p===41)){d[d.length]=h.charAt(m);continue}if(p<128){d[d.length]=yt[p];continue}if(p<2048){d[d.length]=yt[192|p>>6]+yt[128|p&63];continue}if(p<55296||p>=57344){d[d.length]=yt[224|p>>12]+yt[128|p>>6&63]+yt[128|p&63];continue}m+=1,p=65536+((p&1023)<<10|h.charCodeAt(m)&1023),d[d.length]=yt[240|p>>18]+yt[128|p>>12&63]+yt[128|p>>6&63]+yt[128|p&63]}c+=d.join("")}return c},bL=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],i=0;i<t.length;++i)for(var s=t[i],a=s.obj[s.prop],c=Object.keys(a),u=0;u<c.length;++u){var h=c[u],d=a[h];typeof d=="object"&&d!==null&&n.indexOf(d)===-1&&(t.push({obj:a,prop:h}),n.push(d))}return vL(t),e},AL=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},SL=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},RL=function(e,t){return[].concat(e,t)},PL=function(e,t){if(Ir(e)){for(var n=[],i=0;i<e.length;i+=1)n.push(t(e[i]));return n}return t(e)},Ym={arrayToObject:Jm,assign:wL,combine:RL,compact:bL,decode:EL,encode:IL,isBuffer:SL,isRegExp:AL,maybeMap:PL,merge:TL},Zm=gL,As=Ym,ui=Lu,CL=Object.prototype.hasOwnProperty,ey={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},_t=Array.isArray,OL=Array.prototype.push,ty=function(r,e){OL.apply(r,_t(e)?e:[e])},DL=Date.prototype.toISOString,yd=ui.default,Re={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:As.encode,encodeValuesOnly:!1,filter:void 0,format:yd,formatter:ui.formatters[yd],indices:!1,serializeDate:function(e){return DL.call(e)},skipNulls:!1,strictNullHandling:!1},kL=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Aa={},NL=function r(e,t,n,i,s,a,c,u,h,d,m,p,w,v,A,E,k,C){for(var D=e,M=C,L=0,$=!1;(M=M.get(Aa))!==void 0&&!$;){var b=M.get(e);if(L+=1,typeof b<"u"){if(b===L)throw new RangeError("Cyclic object value");$=!0}typeof M.get(Aa)>"u"&&(L=0)}if(typeof d=="function"?D=d(t,D):D instanceof Date?D=w(D):n==="comma"&&_t(D)&&(D=As.maybeMap(D,function(U){return U instanceof Date?w(U):U})),D===null){if(a)return h&&!E?h(t,Re.encoder,k,"key",v):t;D=""}if(kL(D)||As.isBuffer(D)){if(h){var y=E?t:h(t,Re.encoder,k,"key",v);return[A(y)+"="+A(h(D,Re.encoder,k,"value",v))]}return[A(t)+"="+A(String(D))]}var _=[];if(typeof D>"u")return _;var I;if(n==="comma"&&_t(D))E&&h&&(D=As.maybeMap(D,h)),I=[{value:D.length>0?D.join(",")||null:void 0}];else if(_t(d))I=d;else{var S=Object.keys(D);I=m?S.sort(m):S}var R=u?String(t).replace(/\./g,"%2E"):String(t),T=i&&_t(D)&&D.length===1?R+"[]":R;if(s&&_t(D)&&D.length===0)return T+"[]";for(var J=0;J<I.length;++J){var se=I[J],te=typeof se=="object"&&se&&typeof se.value<"u"?se.value:D[se];if(!(c&&te===null)){var we=p&&u?String(se).replace(/\./g,"%2E"):String(se),Ye=_t(D)?typeof n=="function"?n(T,we):T:T+(p?"."+we:"["+we+"]");C.set(e,L);var nt=Zm();nt.set(Aa,C),ty(_,r(te,Ye,n,i,s,a,c,u,n==="comma"&&E&&_t(D)?null:h,d,m,p,w,v,A,E,k,nt))}}return _},VL=function(e){if(!e)return Re;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||Re.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=ui.default;if(typeof e.format<"u"){if(!CL.call(ui.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var i=ui.formatters[n],s=Re.filter;(typeof e.filter=="function"||_t(e.filter))&&(s=e.filter);var a;if(e.arrayFormat in ey?a=e.arrayFormat:"indices"in e?a=e.indices?"indices":"repeat":a=Re.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var c=typeof e.allowDots>"u"?e.encodeDotInKeys===!0?!0:Re.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:Re.addQueryPrefix,allowDots:c,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:Re.allowEmptyArrays,arrayFormat:a,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:Re.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?Re.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:Re.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:Re.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:Re.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:Re.encodeValuesOnly,filter:s,format:n,formatter:i,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:Re.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:Re.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:Re.strictNullHandling}},ML=function(r,e){var t=r,n=VL(e),i,s;typeof n.filter=="function"?(s=n.filter,t=s("",t)):_t(n.filter)&&(s=n.filter,i=s);var a=[];if(typeof t!="object"||t===null)return"";var c=ey[n.arrayFormat],u=c==="comma"&&n.commaRoundTrip;i||(i=Object.keys(t)),n.sort&&i.sort(n.sort);for(var h=Zm(),d=0;d<i.length;++d){var m=i[d],p=t[m];n.skipNulls&&p===null||ty(a,NL(p,m,c,u,n.allowEmptyArrays,n.strictNullHandling,n.skipNulls,n.encodeDotInKeys,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,h))}var w=a.join(n.delimiter),v=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),w.length>0?v+w:""},_n=Ym,cc=Object.prototype.hasOwnProperty,xL=Array.isArray,_e={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:_n.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1},LL=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},ry=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},$L="utf8=%26%2310003%3B",FL="utf8=%E2%9C%93",UL=function(e,t){var n={__proto__:null},i=t.ignoreQueryPrefix?e.replace(/^\?/,""):e;i=i.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var s=t.parameterLimit===1/0?void 0:t.parameterLimit,a=i.split(t.delimiter,s),c=-1,u,h=t.charset;if(t.charsetSentinel)for(u=0;u<a.length;++u)a[u].indexOf("utf8=")===0&&(a[u]===FL?h="utf-8":a[u]===$L&&(h="iso-8859-1"),c=u,u=a.length);for(u=0;u<a.length;++u)if(u!==c){var d=a[u],m=d.indexOf("]="),p=m===-1?d.indexOf("="):m+1,w,v;p===-1?(w=t.decoder(d,_e.decoder,h,"key"),v=t.strictNullHandling?null:""):(w=t.decoder(d.slice(0,p),_e.decoder,h,"key"),v=_n.maybeMap(ry(d.slice(p+1),t),function(E){return t.decoder(E,_e.decoder,h,"value")})),v&&t.interpretNumericEntities&&h==="iso-8859-1"&&(v=LL(String(v))),d.indexOf("[]=")>-1&&(v=xL(v)?[v]:v);var A=cc.call(n,w);A&&t.duplicates==="combine"?n[w]=_n.combine(n[w],v):(!A||t.duplicates==="last")&&(n[w]=v)}return n},BL=function(r,e,t,n){for(var i=n?e:ry(e,t),s=r.length-1;s>=0;--s){var a,c=r[s];if(c==="[]"&&t.parseArrays)a=t.allowEmptyArrays&&(i===""||t.strictNullHandling&&i===null)?[]:[].concat(i);else{a=t.plainObjects?{__proto__:null}:{};var u=c.charAt(0)==="["&&c.charAt(c.length-1)==="]"?c.slice(1,-1):c,h=t.decodeDotInKeys?u.replace(/%2E/g,"."):u,d=parseInt(h,10);!t.parseArrays&&h===""?a={0:i}:!isNaN(d)&&c!==h&&String(d)===h&&d>=0&&t.parseArrays&&d<=t.arrayLimit?(a=[],a[d]=i):h!=="__proto__"&&(a[h]=i)}i=a}return i},jL=function(e,t,n,i){if(e){var s=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,c=/(\[[^[\]]*])/g,u=n.depth>0&&a.exec(s),h=u?s.slice(0,u.index):s,d=[];if(h){if(!n.plainObjects&&cc.call(Object.prototype,h)&&!n.allowPrototypes)return;d.push(h)}for(var m=0;n.depth>0&&(u=c.exec(s))!==null&&m<n.depth;){if(m+=1,!n.plainObjects&&cc.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;d.push(u[1])}if(u){if(n.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+n.depth+" and strictDepth is true");d.push("["+s.slice(u.index)+"]")}return BL(d,t,n,i)}},qL=function(e){if(!e)return _e;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.decodeDotInKeys<"u"&&typeof e.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&typeof e.decoder<"u"&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset>"u"?_e.charset:e.charset,n=typeof e.duplicates>"u"?_e.duplicates:e.duplicates;if(n!=="combine"&&n!=="first"&&n!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var i=typeof e.allowDots>"u"?e.decodeDotInKeys===!0?!0:_e.allowDots:!!e.allowDots;return{allowDots:i,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:_e.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:_e.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:_e.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:_e.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:_e.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:_e.comma,decodeDotInKeys:typeof e.decodeDotInKeys=="boolean"?e.decodeDotInKeys:_e.decodeDotInKeys,decoder:typeof e.decoder=="function"?e.decoder:_e.decoder,delimiter:typeof e.delimiter=="string"||_n.isRegExp(e.delimiter)?e.delimiter:_e.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:_e.depth,duplicates:n,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:_e.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:_e.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:_e.plainObjects,strictDepth:typeof e.strictDepth=="boolean"?!!e.strictDepth:_e.strictDepth,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:_e.strictNullHandling}},zL=function(r,e){var t=qL(e);if(r===""||r===null||typeof r>"u")return t.plainObjects?{__proto__:null}:{};for(var n=typeof r=="string"?UL(r,t):r,i=t.plainObjects?{__proto__:null}:{},s=Object.keys(n),a=0;a<s.length;++a){var c=s[a],u=jL(c,n[c],t,typeof r=="string");i=_n.merge(i,u,t)}return t.allowSparse===!0?i:_n.compact(i)},HL=ML,GL=zL,WL=Lu,KL={formats:WL,parse:GL,stringify:HL},QL=Cx;function ft(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var XL=/^([a-z0-9.+-]+:)/i,JL=/:[0-9]*$/,YL=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,ZL=["<",">",'"',"`"," ","\r",`
`,"	"],e$=["{","}","|","\\","^","`"].concat(ZL),uc=["'"].concat(e$),_d=["%","/","?",";","#"].concat(uc),vd=["/","?","#"],t$=255,Td=/^[+a-z0-9A-Z_-]{0,63}$/,r$=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,n$={javascript:!0,"javascript:":!0},lc={javascript:!0,"javascript:":!0},an={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},hc=KL;function xi(r,e,t){if(r&&typeof r=="object"&&r instanceof ft)return r;var n=new ft;return n.parse(r,e,t),n}ft.prototype.parse=function(r,e,t){if(typeof r!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof r);var n=r.indexOf("?"),i=n!==-1&&n<r.indexOf("#")?"?":"#",s=r.split(i),a=/\\/g;s[0]=s[0].replace(a,"/"),r=s.join(i);var c=r;if(c=c.trim(),!t&&r.split("#").length===1){var u=YL.exec(c);if(u)return this.path=c,this.href=c,this.pathname=u[1],u[2]?(this.search=u[2],e?this.query=hc.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var h=XL.exec(c);if(h){h=h[0];var d=h.toLowerCase();this.protocol=d,c=c.substr(h.length)}if(t||h||c.match(/^\/\/[^@/]+@[^@/]+/)){var m=c.substr(0,2)==="//";m&&!(h&&lc[h])&&(c=c.substr(2),this.slashes=!0)}if(!lc[h]&&(m||h&&!an[h])){for(var p=-1,w=0;w<vd.length;w++){var v=c.indexOf(vd[w]);v!==-1&&(p===-1||v<p)&&(p=v)}var A,E;p===-1?E=c.lastIndexOf("@"):E=c.lastIndexOf("@",p),E!==-1&&(A=c.slice(0,E),c=c.slice(E+1),this.auth=decodeURIComponent(A)),p=-1;for(var w=0;w<_d.length;w++){var v=c.indexOf(_d[w]);v!==-1&&(p===-1||v<p)&&(p=v)}p===-1&&(p=c.length),this.host=c.slice(0,p),c=c.slice(p),this.parseHost(),this.hostname=this.hostname||"";var k=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!k)for(var C=this.hostname.split(/\./),w=0,D=C.length;w<D;w++){var M=C[w];if(M&&!M.match(Td)){for(var L="",$=0,b=M.length;$<b;$++)M.charCodeAt($)>127?L+="x":L+=M[$];if(!L.match(Td)){var y=C.slice(0,w),_=C.slice(w+1),I=M.match(r$);I&&(y.push(I[1]),_.unshift(I[2])),_.length&&(c="/"+_.join(".")+c),this.hostname=y.join(".");break}}}this.hostname.length>t$?this.hostname="":this.hostname=this.hostname.toLowerCase(),k||(this.hostname=QL.toASCII(this.hostname));var S=this.port?":"+this.port:"",R=this.hostname||"";this.host=R+S,this.href+=this.host,k&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),c[0]!=="/"&&(c="/"+c))}if(!n$[d])for(var w=0,D=uc.length;w<D;w++){var T=uc[w];if(c.indexOf(T)!==-1){var J=encodeURIComponent(T);J===T&&(J=escape(T)),c=c.split(T).join(J)}}var se=c.indexOf("#");se!==-1&&(this.hash=c.substr(se),c=c.slice(0,se));var te=c.indexOf("?");if(te!==-1?(this.search=c.substr(te),this.query=c.substr(te+1),e&&(this.query=hc.parse(this.query)),c=c.slice(0,te)):e&&(this.search="",this.query={}),c&&(this.pathname=c),an[d]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var S=this.pathname||"",we=this.search||"";this.path=S+we}return this.href=this.format(),this};function i$(r){return typeof r=="string"&&(r=xi(r)),r instanceof ft?r.format():ft.prototype.format.call(r)}ft.prototype.format=function(){var r=this.auth||"";r&&(r=encodeURIComponent(r),r=r.replace(/%3A/i,":"),r+="@");var e=this.protocol||"",t=this.pathname||"",n=this.hash||"",i=!1,s="";this.host?i=r+this.host:this.hostname&&(i=r+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(s=hc.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var a=this.search||s&&"?"+s||"";return e&&e.substr(-1)!==":"&&(e+=":"),this.slashes||(!e||an[e])&&i!==!1?(i="//"+(i||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):i||(i=""),n&&n.charAt(0)!=="#"&&(n="#"+n),a&&a.charAt(0)!=="?"&&(a="?"+a),t=t.replace(/[?#]/g,function(c){return encodeURIComponent(c)}),a=a.replace("#","%23"),e+i+t+a+n};function s$(r,e){return xi(r,!1,!0).resolve(e)}ft.prototype.resolve=function(r){return this.resolveObject(xi(r,!1,!0)).format()};function o$(r,e){return r?xi(r,!1,!0).resolveObject(e):e}ft.prototype.resolveObject=function(r){if(typeof r=="string"){var e=new ft;e.parse(r,!1,!0),r=e}for(var t=new ft,n=Object.keys(this),i=0;i<n.length;i++){var s=n[i];t[s]=this[s]}if(t.hash=r.hash,r.href==="")return t.href=t.format(),t;if(r.slashes&&!r.protocol){for(var a=Object.keys(r),c=0;c<a.length;c++){var u=a[c];u!=="protocol"&&(t[u]=r[u])}return an[t.protocol]&&t.hostname&&!t.pathname&&(t.pathname="/",t.path=t.pathname),t.href=t.format(),t}if(r.protocol&&r.protocol!==t.protocol){if(!an[r.protocol]){for(var h=Object.keys(r),d=0;d<h.length;d++){var m=h[d];t[m]=r[m]}return t.href=t.format(),t}if(t.protocol=r.protocol,!r.host&&!lc[r.protocol]){for(var D=(r.pathname||"").split("/");D.length&&!(r.host=D.shift()););r.host||(r.host=""),r.hostname||(r.hostname=""),D[0]!==""&&D.unshift(""),D.length<2&&D.unshift(""),t.pathname=D.join("/")}else t.pathname=r.pathname;if(t.search=r.search,t.query=r.query,t.host=r.host||"",t.auth=r.auth,t.hostname=r.hostname||r.host,t.port=r.port,t.pathname||t.search){var p=t.pathname||"",w=t.search||"";t.path=p+w}return t.slashes=t.slashes||r.slashes,t.href=t.format(),t}var v=t.pathname&&t.pathname.charAt(0)==="/",A=r.host||r.pathname&&r.pathname.charAt(0)==="/",E=A||v||t.host&&r.pathname,k=E,C=t.pathname&&t.pathname.split("/")||[],D=r.pathname&&r.pathname.split("/")||[],M=t.protocol&&!an[t.protocol];if(M&&(t.hostname="",t.port=null,t.host&&(C[0]===""?C[0]=t.host:C.unshift(t.host)),t.host="",r.protocol&&(r.hostname=null,r.port=null,r.host&&(D[0]===""?D[0]=r.host:D.unshift(r.host)),r.host=null),E=E&&(D[0]===""||C[0]==="")),A)t.host=r.host||r.host===""?r.host:t.host,t.hostname=r.hostname||r.hostname===""?r.hostname:t.hostname,t.search=r.search,t.query=r.query,C=D;else if(D.length)C||(C=[]),C.pop(),C=C.concat(D),t.search=r.search,t.query=r.query;else if(r.search!=null){if(M){t.host=C.shift(),t.hostname=t.host;var L=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;L&&(t.auth=L.shift(),t.hostname=L.shift(),t.host=t.hostname)}return t.search=r.search,t.query=r.query,(t.pathname!==null||t.search!==null)&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!C.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var $=C.slice(-1)[0],b=(t.host||r.host||C.length>1)&&($==="."||$==="..")||$==="",y=0,_=C.length;_>=0;_--)$=C[_],$==="."?C.splice(_,1):$===".."?(C.splice(_,1),y++):y&&(C.splice(_,1),y--);if(!E&&!k)for(;y--;y)C.unshift("..");E&&C[0]!==""&&(!C[0]||C[0].charAt(0)!=="/")&&C.unshift(""),b&&C.join("/").substr(-1)!=="/"&&C.push("");var I=C[0]===""||C[0]&&C[0].charAt(0)==="/";if(M){t.hostname=I?"":C.length?C.shift():"",t.host=t.hostname;var L=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;L&&(t.auth=L.shift(),t.hostname=L.shift(),t.host=t.hostname)}return E=E||t.host&&C.length,E&&!I&&C.unshift(""),C.length>0?t.pathname=C.join("/"):(t.pathname=null,t.path=null),(t.pathname!==null||t.search!==null)&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=r.auth||t.auth,t.slashes=t.slashes||r.slashes,t.href=t.format(),t};ft.prototype.parseHost=function(){var r=this.host,e=JL.exec(r);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),r=r.substr(0,r.length-e.length)),r&&(this.hostname=r)};Dn.parse=xi;Dn.resolve=s$;Dn.resolveObject=o$;Dn.format=i$;Dn.Url=ft;var a$=ae&&ae.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)i.hasOwnProperty(s)&&(n[s]=i[s])},r(e,t)};return function(e,t){r(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),c$=ae&&ae.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t),Object.defineProperty(r,n,{enumerable:!0,get:function(){return e[t]}})}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),u$=ae&&ae.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),l$=ae&&ae.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.hasOwnProperty.call(r,t)&&c$(e,r,t);return u$(e,r),e};Object.defineProperty(Ou,"__esModule",{value:!0});var h$=Oo,fc=l$(Dn);function f$(r){var e=fc.parse(r);return e.protocol===null&&e.host===null&&e.port===null}function d$(r,e){var t=fc.parse(r),n=fc.parse(e);return t.protocol===n.protocol&&t.hostname===n.hostname&&t.port===n.port}var p$=function(r){a$(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype._initCanvas=function(){var t=this.image,n=this._canvas=document.createElement("canvas"),i=this._context=n.getContext("2d");n.className="vibrant-canvas",n.style.display="none",this._width=n.width=t.width,this._height=n.height=t.height,i.drawImage(t,0,0),document.body.appendChild(n)},e.prototype.load=function(t){var n=this,i=null,s=null;if(typeof t=="string")i=document.createElement("img"),!f$(t)&&!d$(window.location.href,t)&&(i.crossOrigin="anonymous"),s=i.src=t;else if(t instanceof HTMLImageElement)i=t,s=t.src;else return Promise.reject(new Error("Cannot load buffer as an image in browser"));return this.image=i,new Promise(function(a,c){var u=function(){n._initCanvas(),a(n)};i.complete?u():(i.onload=u,i.onerror=function(h){return c(new Error("Fail to load image: "+s))})})},e.prototype.clear=function(){this._context.clearRect(0,0,this._width,this._height)},e.prototype.update=function(t){this._context.putImageData(t,0,0)},e.prototype.getWidth=function(){return this._width},e.prototype.getHeight=function(){return this._height},e.prototype.resize=function(t,n,i){var s=this,a=s._canvas,c=s._context,u=s.image;this._width=a.width=t,this._height=a.height=n,c.scale(i,i),c.drawImage(u,0,0)},e.prototype.getPixelCount=function(){return this._width*this._height},e.prototype.getImageData=function(){return this._context.getImageData(0,0,this._width,this._height)},e.prototype.remove=function(){this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)},e}(h$.ImageBase);Ou.default=p$;var ny=ae&&ae.__importDefault||function(r){return r&&r.__esModule?r:{default:r}},iy=ny(Mm()),g$=ny(Ou);iy.default.DefaultOpts.ImageClass=g$.default;var m$=iy.default;const dc={getBrightness:r=>(r.red*299+r.green*587+r.blue*114)/1e3,getTextColor:r=>dc.getBrightness(r)>127.5?"#000000":"#FFFFFF",colorDataToHex:r=>{let e="#";return e+=r.red.toString(16).toUpperCase().padStart(2,"0"),e+=r.green.toString(16).toUpperCase().padStart(2,"0"),e+=r.blue.toString(16).toUpperCase().padStart(2,"0"),e},colorHexToData:r=>{let e={red:0,green:0,blue:0};return e.red=parseInt(r.substring(1,3),16),e.green=parseInt(r.substring(3,5),16),e.blue=parseInt(r.substring(5,7),16),e},getPrimaryColor:async r=>{const e=await m$.from(r).getPalette();return{red:Math.floor(e.Vibrant.r),green:Math.floor(e.Vibrant.g),blue:Math.floor(e.Vibrant.b)}}},$u=Dd(N0),ie=sE($u),Sa=kI($u);D0($u);const W={item:{getImageData:async r=>{const e=["png","jpg","jpeg","gif"];for(const t of e)try{return{url:await OI(ca(Sa,`picture/${r}.${t}`)),full_name:`${r}.${t}`}}catch(n){if(n.code==="storage/object-not-found")continue;return console.error("[Error] 알 수 없는 오류!!!"),n.code}},modData:async r=>{try{const t=(await W.item.getImageData(r.file_name)).url,n=dc.getTextColor(r.color);let i=dc.colorDataToHex(r.color);const s=r.location,a=await Tr(s);if(a.exists()){const c={id:a.id,...a.data()},u={space:s.parent.id,address:s.id};return{id:r.id,location:r.location,location_data:u,color:{red:r.color.red,green:r.color.green,blue:r.color.blue},text_color_hex:n,color_hex:i,file_name:r.file_name,image_url:t,state:r.state}}else return console.error("[Error] 아이템의 위치 정보를 찾을 수 없습니다."),404}catch(e){return console.error("[Error] 알 수 없는 오류!!!"),e.code}},getOne:async r=>{try{const e=await Tr(ge(ie,"items",r));if(e.exists()){const t={id:e.id,...e.data()};return await W.item.modData(t)}else return console.error("[Error] 아이템 정보를 찾을 수 없습니다."),404}catch(e){return console.error("[Error] 알 수 없는 오류!!!"),e.code}},getAll:async()=>{try{const t=(await Hr(gt(ie,"items"))).docs.map(n=>({id:n.id,...n.data()})).map(async n=>await W.item.modData(n));return await Promise.all(t)}catch(r){return console.error("[Error] 알 수 없는 오류!!!"),r.code}},add:async(r,e,t)=>{const n=Date.now(),i=`${n}_${t.name.split(".")[0]}`,s=`${n}_${t.name}`,a=ge(ie,e.space,e.address),c={color:r,file_name:i,location:a,state:"income"};try{const u=await Wn(gt(ie,"items"),c);return await CI(ca(Sa,`picture/${s}`),t),await W.item.locationAdd(u,e,"income"),console.log("[System] 새로운 아이템이 성공적으로 등록되었습니다."),201}catch(u){return console.error("[Error] 새로운 아이템 등록에 실패하였습니다."),u.code}},update:async(r,e,t)=>{const i={location:ge(ie,e.space,e.address),state:t};try{const s=ge(ie,"items",r.id);return await W.item.locationDelete(r),await W.item.locationAdd(s,e,t),await ht(ge(ie,"items",r.id),i),console.log("[System] 아이템 정보가 성공적으로 변경되었습니다."),200}catch(s){return console.error("[Error] 아이템 정보를 변경하는데 실패하였습니다."),s.code}},delete:async r=>{try{console.log(r);const t=(await W.item.getImageData(r.file_name)).full_name;return await DI(ca(Sa,`picture/${t}`)),await Nh(ge(ie,"items",r.id)),await W.item.locationDelete(r),console.log("[System] 아이템 정보를 성공적으로 삭제하였습니다."),200}catch(e){return console.error("[Error] 아이템 정보를 삭제하는데 실패하였습니다."),e.code}},locationDelete:async r=>{try{return r.location_data.space==="incomings"?(await W.incoming.removeItem(r.location_data.address),await W.incoming.updateState(r.location_data.address,"empty")):r.location_data.space==="workspaces"?(await W.workspace.removeItem(r.location_data.address),await W.workspace.updateState(r.location_data.address,"empty")):r.location_data.space==="storages"&&await W.storage.removeItem(r.location_data.address),console.log("[System] 해당 위치 정보에서 아이템을 성공적으로 제거하였습니다."),200}catch(e){return console.error("[Error] 해당 위치 정보에서 아이템을 제거하는데 실패하였습니다."),e.code}},locationAdd:async(r,e,t)=>{try{return e.space==="incomings"?(await W.incoming.addItem(e.address,r),await W.incoming.updateState(e.address,t)):e.space==="workspaces"?(await W.workspace.addItem(e.address,r),await W.workspace.updateState(e.address,t)):e.space==="storages"&&(await W.storage.addItem(e.address,r),await W.storage.updateState(e.address,t)),console.log("[System] 해당 위치정보에 아이템을 성공적으로 추가하였습니다."),200}catch(n){return console.error("[Error] 해당 위치정보에 아이템을 추가하는데 실패하였습니다."),n.code}}},incoming:{getOne:async r=>{try{const e=await Tr(ge(ie,"incomings",r));if(e.exists()){let t={id:e.id,...e.data()};const n=t.item;if(n){const i=await W.item.getOne(n.id);return{id:t.id,state:t.state,item:t.item,item_data:i}}else return{id:t.id,state:t.state}}else return console.error("[Error] 해당 입고라인 데이터를 찾을 수 없습니다."),404}catch(e){return console.error("[Error] 알 수 없는 오류!!!"),e.code}},getAll:async()=>{try{const t=(await Hr(gt(ie,"incomings"))).docs.map(n=>({id:n.id,...n.data()})).map(async n=>{const i=n.item;if(i){const s=await W.item.getOne(i.id);return{id:n.id,state:n.state,item:n.item,item_data:s}}else return{id:n.id,state:n.state}});return await Promise.all(t)}catch(r){return console.error("[Error] 알 수 없는 오류!!!"),r.code}},updateState:async(r,e)=>{const t={state:e};try{return await ht(ge(ie,"incomings",r),t),console.log("[System] 입고라인 상태가 성공적으로 업데이트 되었습니다."),200}catch(n){return console.error("[Error] 입고라인 상태를 변경하는데 실패하였습니다."),n.code}},addItem:async(r,e)=>{const t={item:e};try{return await ht(ge(ie,"incomings",r),t),console.log("[System] 입고라인에 아이템을 성공적으로 추가하였습니다."),200}catch(n){return console.error("[Error] 입고라인에 아이템을 추가하는데 실패하였습니다."),n.code}},removeItem:async r=>{const e={item:sa()};try{return await ht(ge(ie,"incomings",r),e),console.log("[System] 입고라인의 아이템을 성공적으로 제거하였습니다."),200}catch(t){return console.error("[Error] 입고라인의 아이템을 제거하는데 실패하였습니다."),t.code}}},workspace:{getOne:async r=>{try{const e=await Tr(ge(ie,"workspaces",r));if(e.exists()){let t={id:e.id,...e.data()};const n=t.item;if(n){const i=await W.item.getOne(n.id);return{id:t.id,state:t.state,item:t.item,item_data:i}}else return{id:t.id,state:t.state}}else return console.error("[Error] 해당 작업공간 데이터를 찾을 수 없습니다."),404}catch(e){return console.error("[Error] 알 수 없는 오류!!!"),e.code}},getAll:async()=>{try{const t=(await Hr(gt(ie,"workspaces"))).docs.map(n=>({id:n.id,...n.data()})).map(async n=>{const i=n.item;if(i){const s=await W.item.getOne(i.id);return{id:n.id,state:n.state,item:n.item,item_data:s}}else return{id:n.id,state:n.state}});return await Promise.all(t)}catch(r){return console.error("[Error] 알 수 없는 오류!!!"),r.code}},updateState:async(r,e)=>{const t={state:e};try{return await ht(ge(ie,"workspaces",r),t),console.log("[System] 작업공간 상태가 성공적으로 업데이트 되었습니다."),200}catch(n){return console.error("[Error] 작업공간 상태를 변경하는데 실패하였습니다."),n.code}},addItem:async(r,e)=>{const t={item:e};try{return await ht(ge(ie,"workspaces",r),t),console.log("[System] 작업공간에 아이템을 성공적으로 추가하였습니다."),200}catch(n){return console.error("[Error] 작업공간에 아이템을 추가하는데 실패하였습니다."),n.code}},removeItem:async r=>{const e={item:sa()};try{return await ht(ge(ie,"workspaces",r),e),console.log("[System] 작업공간의 아이템을 성공적으로 제거하였습니다."),200}catch(t){return console.error("[Error] 작업공간의 아이템을 제거하는데 실패하였습니다."),t.code}}},storage:{getOne:async r=>{try{const e=await Tr(ge(ie,"storages",r));if(e.exists()){let t={id:e.id,...e.data()};const n=t.item;if(n){const i=await W.item.getOne(n.id);return{id:t.id,state:t.state,item:t.item,item_data:i}}else return{id:t.id,state:t.state}}else return console.error("[Error] 해당 저장공간 데이터를 찾을 수 없습니다."),404}catch(e){return console.error("[Error] 알 수 없는 오류!!!"),e.code}},getAll:async()=>{try{const t=(await Hr(gt(ie,"storages"))).docs.map(n=>({id:n.id,...n.data()})).map(async n=>{const i=n.item;if(i){const s=await W.item.getOne(i.id);return{id:n.id,state:n.state,item:n.item,item_data:s}}else return{id:n.id,state:n.state}});return await Promise.all(t)}catch(r){return console.error("[Error] 알 수 없는 오류!!!"),r.code}},updateState:async(r,e)=>{const t={state:e};try{return await ht(ge(ie,"storages",r),t),console.log("[System] 저장공간 상태가 성공적으로 업데이트 되었습니다."),200}catch(n){return console.error("[Error] 저장공간 상태를 변경하는데 실패하였습니다."),n.code}},addItem:async(r,e)=>{const t={item:e};try{return await ht(ge(ie,"storages",r),t),console.log("[System] 저장공간에 아이템을 성공적으로 추가하였습니다."),200}catch(n){return console.error("[Error] 저장공간에 아이템을 추가하는데 실패하였습니다."),n.code}},removeItem:async r=>{const e={item:sa()};try{return await ht(ge(ie,"storages",r),e),console.log("[System] 저장공간의 아이템을 성공적으로 제거하였습니다."),200}catch(t){return console.error("[Error] 저장공간의 아이템을 제거하는데 실패하였습니다."),t.code}}},robot:{getOne:async r=>{try{const e=await Tr(ge(ie,"robots",r));if(e.exists()){let t={id:e.id,...e.data()};return{id:t.id,state:t.state,location:t.location}}else return console.error("[Error] 해당 AGV 데이터를 찾을 수 없습니다."),404}catch(e){return console.error("[Error] 알 수 없는 오류!!!"),e.code}},getAll:async()=>{try{return(await Hr(gt(ie,"robots"))).docs.map(t=>({id:t.id,state:t.data().state,location:t.data().location}))}catch(r){return console.error("[Error] 알 수 없는 오류!!!"),r.code}},updateState:async(r,e,t)=>{const n={state:e,location:t};try{return await ht(ge(ie,"robots",r),n),console.log("[System] AGV 상태가 성공적으로 업데이트 되었습니다."),200}catch(i){return console.error("[Error] AGV 상태를 변경하는데 실패하였습니다."),i.code}}},command:{getAll:async()=>{try{const t=(await Hr(gt(ie,"commands"))).docs.map(n=>({id:n.id,...n.data()})).map(async n=>{const i=n.forward;if(i){const s=await Tr(i);if(s.exists()){const a={id:s.id,...s.data()};return{id:n.id,datetime:n.datetime,datetime_data:n.datetime.toDate(),destination:n.destination,item:n.item,robot:n.robot,forward:n.forward,forward_data:a,state:n.state}}else return console.error("[Error] 선행 명령어를 찾을 수 없습니다."),404}else return{id:n.id,datetime:n.datetime,datetime_data:n.datetime.toDate(),destination:n.destination,item:n.item,robot:n.robot,state:n.state}});return await Promise.all(t)}catch(r){return console.error("[Error] 알 수 없는 오류!!!"),r.code}},getRequested:async()=>{try{return(await W.command.getAll()).filter(e=>e.state!=="completed")}catch(r){return console.error("[Error] 알 수 없는 오류!!!"),r.code}},getTargetOne:async r=>{try{let t=(await W.command.getRequested()).filter(n=>n.robot===r);return t=t.filter(n=>n.state==="target"),t.length>0?(t.sort((n,i)=>i.datetime-n.datetime),t[0]):{state:"none"}}catch(e){return console.error("[Error] 알 수 없는 오류!!!"),e.code}},getDone:async()=>{try{return(await W.command.getAll()).filter(e=>e.state==="completed")}catch(r){return console.error("[Error] 알 수 없는 오류!!!"),r.code}},request:async(r,e)=>{try{const t=await W.workspace.getAll();t.sort((i,s)=>i.id.localeCompare(s.id));let n="-1";for(const i of t)if(i.state==="empty"){n=i.id;break}if(n==="-1")return console.error("[Error] 모든 작업공간이 점유 상태이므로 명령어를 추가할 수 없습니다."),403;if(r.location_data.space==="incomings"&&e.space==="storages"){await W.item.update(r,r.location_data,"progress"),await W.incoming.updateState(r.location_data.address,"progress"),await W.workspace.updateState(n,"progress"),await W.storage.updateState(e.address,"progress");const i={datetime:ns(),destination:{address:n,space:"workspaces",state:"progress"},item:{id:r.id,color:{red:r.color.red,green:r.color.green,blue:r.color.blue},location:{address:r.location_data.address,space:r.location_data.space,state:"progress"},state:"progress"},robot:"B",state:"request"},s=await Wn(gt(ie,"commands"),i);await new Promise(c=>setTimeout(c,1e3));const a={datetime:ns(),destination:{address:e.address,space:e.space,state:"progress"},item:{id:r.id,color:{red:r.color.red,green:r.color.green,blue:r.color.blue},location:{address:n,space:"workspaces",state:"progress"},state:"progress"},robot:"A",state:"lock",forward:s};return await Wn(gt(ie,"commands"),a),console.log("[System] 새로운 명령어가 생성되었습니다!"),201}else if(r.location_data.space==="storages"&&e.space==="incomings"){await W.item.update(r,r.location_data,"progress"),await W.storage.updateState(r.location_data.address,"progress"),await W.workspace.updateState(n,"progress"),await W.incoming.updateState(e.address,"progress");const i={datetime:ns(),destination:{address:n,space:"workspaces",state:"progress"},item:{id:r.id,color:{red:r.color.red,green:r.color.green,blue:r.color.blue},location:{address:r.location_data.address,space:r.location_data.space,state:"progress"},state:"progress"},robot:"A",state:"request"},s=await Wn(gt(ie,"commands"),i);await new Promise(c=>setTimeout(c,1e3));const a={datetime:ns(),destination:{address:e.address,space:e.space,state:"progress"},item:{id:r.id,color:{red:r.color.red,green:r.color.green,blue:r.color.blue},location:{address:n,space:"workspaces",state:"progress"},state:"progress"},robot:"B",state:"lock",forward:s};return await Wn(gt(ie,"commands"),a),console.log("[System] 새로운 명령어가 생성되었습니다!"),201}}catch(t){return console.error("[Error] 알 수 없는 오류!!!"),t.code}},complete:async r=>{if(r.state==="lock")return console.error("[Error] 잠긴 명령어를 완료할 수 없습니다!!!"),403;try{const e=await W.item.getOne(r.item.id);return r.destination.space==="workspaces"?await W.item.update(e,r.destination,"progress"):r.destination.space==="storages"?await W.item.update(e,r.destination,"stored"):r.destination.space==="incomings"&&await W.item.update(e,r.destination,"income"),await W.command.update(r.id,"completed"),console.log("[System] 명령어를 완료처리 하였습니다."),200}catch(e){return console.error("[Error] 알 수 없는 오류!!!"),e.code}},check:async()=>{try{const e=(await W.command.getRequested()).filter(t=>t.state==="lock");for(const t of e)if(t.forward_data.state==="completed")return await W.command.update(t.id,"request"),console.log("[System] 선행 명령어가 수행이 완료되어 명령어의 잠금이 해제되었습니다."),200}catch(r){return console.error("[Error] 알 수 없는 오류!!!"),r.code}},update:async(r,e)=>{const t={state:e};try{return await ht(ge(ie,"commands",r),t),console.log("[System] 명령어 상태가 성공적으로 업데이트 되었습니다."),200}catch(n){return console.error("[Error] 명령어 상태를 변경하는데 실패하였습니다."),n.code}},delete:async r=>{try{return r.state==="progress"?(console.error("[Error] 이미 수행 중인 명령어 입니다. 삭제할 수 없습니다."),403):(await Nh(ge(ie,"commands",r.id)),console.log("[System] 명령어를 성공적으로 삭제하였습니다."),200)}catch(e){return console.error("[Error] 아이템 정보를 삭제하는데 실패하였습니다."),e.code}}}};export{W as A,dc as C};
