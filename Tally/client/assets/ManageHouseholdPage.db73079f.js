import{j as e,c as s,p as a,e as t,u as d,d as o,o as l,a as c,b as n,k as i,t as r,g as m}from"./vendor.ad09ada7.js";import{e as p,h as u,b as h,P as f,A as g}from"./index.7a2bda3c.js";const y={name:"ManageHouseholdPage",setup(){const a=d();return e((async()=>{const e=a.params.id;try{await p.getHouseholdById(e),await u.getProfilesByHouseholdId(e),await h.getGamesByHouseholdId(e)}catch(s){f.toast(s,"error")}})),{account:s((()=>g.account)),household:s((()=>g.activeHousehold)),profile:s((()=>g.activeProfile)),games:s((()=>g.games)),members:s((()=>g.householdProfiles)),async respinAccessKey(){try{await p.respinAccessKey(a.params.id),document.getElementById("spinner").classList.add("spinner"),setTimeout((()=>{document.getElementById("spinner").classList.remove("spinner")}),1e3)}catch(e){f.toast(e,"error")}}}}},v=m();a("data-v-e337581a");const b={class:"container-fluid overflow"},x={id:"houseHold-name",class:"row d-flex justify-content-center"},w={class:"col-md-11 d-flex justify-content-center"},k={class:"w-100 py-2 my-2 bg-dark-pink rounded shadow"},A={class:"m-0 text-center pink-text-shadow"},H=n("span",{class:"fas fa-edit fa-xs text-primary ml-2 pointer",title:"Rename Household","data-toggle":"modal","data-target":"#update-householdName"},null,-1),j={id:"members and access code",class:"row d-flex"},C={class:"col-md-6"},G={class:"row m-0 w-100 bg-dark-pink rounded d-flex justify-content-center mb-3 py-3"},I=n("div",{class:"col-md-12 d-flex justify-content-center pink-text-shadow"},[n("h2",null," Access Code ")],-1),B={class:"col-12"},K={class:"row d-flex justify-content-center"},M={class:"col-md-8 bg-light rounded p-0 pt-2 text-center "},P={class:"col-md-10 p-0 text-center mt-2"},N=n("p",{class:"m-0 p-0"},[i(" Respin Access Code "),n("i",{id:"spinner",class:"fas fa-redo-alt hoverSpin text-light"})],-1),E={class:"col-md-12 p-0 d-flex flex-column align-items-center"},L={class:"col-md-6 d-flex flex-column align-items-center"},R=n("div",{class:"w-100"},[n("button",{class:"btn btn-light btn-lg btn-block mb-3","data-toggle":"modal","data-target":"#searchGameModal",title:"Add Game to Cabinet"},[n("p",{class:"m-0 p-0"},[n("span",{class:"fas fa-plus fa-md text-primary"}),i(" Add Game ")])])],-1);t();const S=v(((e,s,a,t,d,m)=>{const p=o("Navbar"),u=o("HouseholdMembersCard"),h=o("GameCabinetCard"),f=o("SearchGameModal"),g=o("UpdateHouseholdNameModal");return l(),c("div",b,[n(p),n("div",x,[n("div",w,[n("div",k,[n("h1",A,[i(r(t.household.name)+" ",1),H])])])]),n("div",j,[n("div",C,[n("div",G,[I,n("div",B,[n("div",K,[n("div",M,[n("h3",null,r(t.household.accessKey),1)])])]),n("div",P,[n("button",{class:"btn btn-primary",onClick:s[1]||(s[1]=(...e)=>t.respinAccessKey&&t.respinAccessKey(...e))},[N])])]),n("div",E,[n(u)])]),n("div",L,[R,n(h,{games:t.games},null,8,["games"])])]),n(f),n(g)])}));y.render=S,y.__scopeId="data-v-e337581a";export default y;