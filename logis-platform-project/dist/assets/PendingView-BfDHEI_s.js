import{r as u,c as i,a as t,b as m,F as f,d as g,o as a,t as o,e as h,n as v,g as l,u as y,f as C}from"./index-Bl139ScP.js";import{_ as k,h as w,c as j}from"./heaaderBox-Bna1lh5W.js";import{A as c,C as d}from"./firebaseAPI-DmnIUue1.js";const B={class:"total-layout"},P={class:"header-layout"},V={class:"main-layout"},A={class:"container mt-4"},D={class:"ms-2 command-state-box"},R={class:"d-flex justify-content-start align-items-center command-state-box"},N={key:0,class:"d-flex justify-content-center align-items-center pt-4 pb-4 ps-4 pe-4 command-robot-id"},S={key:1,class:"d-flex justify-content-center align-items-center pt-4 pb-4 ps-4 pe-4 command-robot-id",style:{"background-color":"var(--main-right-color)"}},T={class:"flex justify-content-center align-items-center command-state-text text-truncate ps-3 pe-3"},q={class:"text-truncate command-state-id"},F={class:"text-truncate command-state-time"},H={class:"text-truncate mt-1"},I={class:"ms-4 item-box"},L={class:"d-flex flex-between align-content-center align-items-center"},z={class:"pt-2 pb-2 ms-3 me-3 item-info-box"},E={class:"item-id text-truncate"},G={class:"ms-2 flex align-content-center location-box-container"},J={class:"d-flex justify-content-center align-items-stretch mb-2"},K={class:"location-box d-flex justify-content-between align-items-center w-100"},M={class:"location-box space text-truncate"},O={class:"location-box address text-truncate"},Q={class:"d-flex justify-content-center align-items-stretch"},U={class:"location-box location-box-destination d-flex justify-content-between align-items-center w-100"},W={class:"location-box space-destination text-truncate"},X={class:"location-box address-destination text-truncate"},Y={class:"d-flex flex-column"},Z=["disabled","onClick"],$=["disabled","onClick"],tt={class:"footer-layout"},et={__name:"PendingView",setup(st){y();const r=C(),x=u(!1),_=u([]);(async()=>{let n=await c.command.getRequested();n.length>0&&n.sort((s,e)=>s.datetime-e.datetime),console.log(n),_.value=n,x.value=!0})();const b=async n=>{const s=await c.command.complete(n);console.log(s),await c.command.check(),r.go(0)},p=async n=>{const s=await c.command.delete(n);console.log(s),r.go(0)};return(n,s)=>(a(),i("div",B,[t("header",P,[m(w)]),t("main",V,[s[4]||(s[4]=t("div",{class:"text-start mt-4 ms-4 title-box"}," Requested Commands ",-1)),t("div",A,[(a(!0),i(f,null,g(_.value,e=>(a(),i("div",{key:e.id,class:"d-flex justify-content-center align-items-center overflow-auto no-scrollbar pt-2 pb-2 command-box mb-3"},[t("div",D,[t("div",R,[e.robot==="A"?(a(),i("div",N,o(e.robot),1)):e.robot==="B"?(a(),i("div",S,o(e.robot),1)):h("",!0),t("div",T,[t("div",q,o(e.id),1),t("div",F,o(e.datetime_data.toLocaleString()),1),t("div",H,o(e.state),1)])])]),t("div",I,[t("div",L,[t("div",z,[t("div",E,o(e.item.id),1),t("div",{class:"mt-2 text-center ps-4 pe-4 item-color-info text-truncate",style:v({backgroundColor:l(d).colorDataToHex(e.item.color),color:l(d).getTextColor(e.item.color)})},o(l(d).colorDataToHex(e.item.color)),5)])])]),t("div",G,[t("div",J,[t("div",K,[s[0]||(s[0]=t("div",{class:"location-box location text-truncate"},"Current",-1)),t("div",M,o(e.item.location.space),1),t("div",O,o(e.item.location.address),1)])]),t("div",Q,[t("div",U,[s[1]||(s[1]=t("div",{class:"location-box location-box-destination location text-truncate"},"Destination",-1)),t("div",W,o(e.destination.space),1),t("div",X,o(e.destination.address),1)])])]),t("div",Y,[t("button",{class:"mb-2 btn rounded-btn btn-primary",disabled:e.state==="lock"||e.state==="progress",onClick:()=>{b(e)}},s[2]||(s[2]=[t("span",{class:"ps-2 pe-2 material-symbols-sharp done-icon"}," published_with_changes ",-1)]),8,Z),t("button",{class:"btn rounded-btn btn-danger",disabled:e.state==="progress",onClick:()=>{p(e)}},s[3]||(s[3]=[t("span",{class:"ps-2 pe-2 material-symbols-sharp delete-icon"}," delete ",-1)]),8,$)])]))),128))])]),t("footer",tt,[m(j)])]))}},ct=k(et,[["__scopeId","data-v-3b0c5661"]]);export{ct as default};
