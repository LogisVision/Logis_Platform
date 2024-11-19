import{_ as h}from"./empty-Ds8-ZYcy.js";import{_ as w}from"./loadingImage-D5gBfIFy.js";import{r as l,c as s,a as t,b,F as C,d as S,e as f,o,t as n,n as I,u as N,f as V}from"./index-Bl139ScP.js";import{_ as B,h as j,c as A}from"./heaaderBox-Bna1lh5W.js";import{A as c}from"./firebaseAPI-DmnIUue1.js";const E={class:"total-layout"},L={class:"header-layout"},D={class:"main-layout"},F={class:"container mt-3"},R={class:"row"},q={class:"card storage-card-box"},z={class:"card-body"},P={class:"storage-card-content pb-2"},T={key:0,class:"storage-item-id text-truncate"},U={key:1,class:"storage-item-id text-truncate"},$={class:"storage-label"},G={class:"col mb-2 d-flex flex-column justify-content-center align-items-center"},H=["src"],J={key:1,src:h,alt:"Empty",class:"img-fluid storage-item-image"},K={key:2,src:h,alt:"Empty",class:"img-fluid storage-item-image"},M={key:1,class:"text-center storage-item-color-info mb-2"},O={class:"text-center storage-state mb-3"},Q={key:2,class:"row mt-2 justify-content-center"},W={class:"col-12 align-self-end"},X=["onClick"],Y={key:3,class:"row mt-2 justify-content-center"},Z={class:"col-6 align-self-end"},tt=["onClick"],et={key:4,class:"row mt-2 justify-content-center"},st={key:0,class:"loading-box"},ot={class:"footer-layout"},at={__name:"StorageView",setup(it){N();const p=V(),d=l([]),r=l(!1),m=l(!1);(async()=>{const i=await c.storage.getAll();console.log(i),d.value=i,r.value=!0})();const x=i=>{p.push({name:"waitlist",query:{option:"select",storageID:i}})},k=async(i,a)=>{await c.storage.removeItem(i),await c.item.delete(a),await c.storage.updateState(i,"empty")};return(i,a)=>(o(),s("div",E,[t("header",L,[b(j)]),t("main",D,[t("div",F,[t("div",R,[(o(!0),s(C,null,S(d.value,e=>{var _,u,g,y,v;return o(),s("div",{class:"col-12 col-md-6 col-lg-4 mb-4",key:e.id},[t("div",q,[t("div",z,[t("div",P,[e.item?(o(),s("div",T,n((_=e.item_data)==null?void 0:_.id),1)):(o(),s("div",U,"None")),t("div",$,n(e.id),1)]),t("div",G,[e.item?(o(),s("img",{key:0,src:(u=e.item_data)==null?void 0:u.image_url,onLoad:a[0]||(a[0]=ct=>m.value=!0),alt:"Item Image",class:"img-fluid storage-item-image"},null,40,H)):(o(),s("img",J)),e.item&&!m.value?(o(),s("img",K)):f("",!0)]),e.item?(o(),s("div",{key:0,class:"text-center storage-item-color-info mb-2",style:I({backgroundColor:(g=e.item_data)==null?void 0:g.color_hex,color:(y=e.item_data)==null?void 0:y.text_color_hex})},n((v=e.item_data)==null?void 0:v.color_hex),5)):(o(),s("div",M," None ")),t("div",O,n(e.state.toUpperCase()),1),e.state==="empty"?(o(),s("div",Q,[t("div",W,[t("button",{class:"btn btn-success w-100 text-truncate rounded-btn",onClick:()=>{x(e.id)}}," New ",8,X)])])):e.state==="stored"?(o(),s("div",Y,[a[1]||(a[1]=t("div",{class:"col-6 align-self-end"},[t("button",{class:"btn btn-warning w-100 text-truncate rounded-btn",disabled:""},"Change")],-1)),t("div",Z,[t("button",{class:"btn btn-danger w-100 text-truncate rounded-btn",onClick:()=>{k(e.id,e.item_data)}}," Empty ",8,tt)])])):(o(),s("div",et,a[2]||(a[2]=[t("div",{class:"col-12 align-self-end"},[t("button",{class:"btn btn-dark w-100 text-truncate rounded-btn",disabled:""},"...")],-1)])))])])])}),128)),r.value?f("",!0):(o(),s("div",st,a[3]||(a[3]=[t("img",{src:w,alt:"Loading"},null,-1)])))])])]),t("footer",ot,[b(A)])]))}},ut=B(at,[["__scopeId","data-v-ef6b8d2c"]]);export{ut as default};
