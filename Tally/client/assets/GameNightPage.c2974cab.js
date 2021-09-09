import{r as a,j as t,c as e,p as s,e as i,u as d,d as l,o,a as n,b as c,t as r,i as m,F as h,h as g,g as u}from"./vendor.ad09ada7.js";import{A as v,g as p,P as N,r as b}from"./index.b1bea39a.js";const G={name:"GameNight",setup(){const s=d(),i=a({});return t((async()=>{try{v.activeGameNightProfiles=[],await p.getGameNightById(s.params.id)}catch(a){N.toast(a,"error")}})),{route:s,state:i,activeGameNight:e((()=>v.activeGameNight)),activeGameNightProfiles:e((()=>v.activeGameNightProfiles)),gameNightHouseholdId:e((()=>v.gameNightHouseholdId)),async endGameNight(){try{await N.confirm()&&(await p.endGameNight(this.activeGameNight),b.push({name:"Household",params:{id:this.activeGameNight.householdId}}))}catch(a){N.toast(a,"error")}}}}},y=u();s("data-v-6d5e0a0c");const f={class:"container-fluid"},k={class:"row"},w={class:"col-md-12"},x={key:0,class:"bg-dark-pink rounded shadow text-center py-2 mb-3"},I={class:"m-0 pink-text-shadow"},P={class:"m-0 lead pink-text-shadow"},j={class:"row justify-content-around"},D=c("div",{class:"col-md-5 m-2"},[c("button",{type:"button",class:"btn btn-light btn-block","data-toggle":"modal","data-target":"#resultsModal"},[c("b",null,[c("p",{class:"m-0"},"Input Score")])])],-1),H={class:"col-md-5 m-2"},S=c("b",null,[c("p",{class:"m-0"},"End Game Night")],-1),C={class:"col-md-12"},F=c("h2",{class:"text-center bg-dark-pink rounded shadow m-0 py-2 pink-text-shadow"}," Players ",-1);i();const M=y(((a,t,e,s,i,d)=>{const u=l("Navbar"),v=l("PlayerCard"),p=l("ResultsModal");return o(),n(h,null,[c("div",f,[c(u),c("div",k,[c("div",w,[s.activeGameNight.id?(o(),n("div",x,[c("h1",I,r(s.activeGameNight.name),1),c("p",P," Start Date: "+r(new Intl.DateTimeFormat("en-US").format(new Date(s.activeGameNight.startDate))),1),c("div",j,[D,c("div",H,[c("button",{type:"button",class:"btn btn-light btn-block",onClick:t[1]||(t[1]=(...a)=>s.endGameNight&&s.endGameNight(...a))},[S])])])])):m("",!0)]),c("div",C,[F,c("div",null,[(o(!0),n(h,null,g(s.activeGameNightProfiles,(a=>(o(),n("div",{class:"d-flex flex-column align-items-center",key:a.id},[c(v,{player:a},null,8,["player"])])))),128))])])])]),c(p,{household:s.gameNightHouseholdId},null,8,["household"])],64)}));G.render=M,G.__scopeId="data-v-6d5e0a0c";export default G;
