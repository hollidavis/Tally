import{r as e,c as a,o as t,a as o,b as s,d as l,S as d,C as n,p as r,e as c,u as i,$ as u,w as m,f as p,v as h,g,t as b,F as f,h as y,i as v,j as w,k as _,l as I,m as H,n as P,q as x,s as G,x as A,y as S,z as k,A as T,B as N,D as C}from"./vendor.065736c0.js";const j=e({user:{},account:{},activeProfile:{},games:[],gameResults:[],activeSearchGames:[],myHousehold:{},activeHousehold:{},gameNights:[],activeGameNight:{},activeGameNightProfiles:[],gameNightHouseholdId:"",householdProfiles:[],profileHouseholds:[],householdId:""});const O={name:"App",setup:()=>({appState:a((()=>j))})};O.render=function(e,a,d,n,r,c){const i=l("router-view");return t(),o("main",null,[s(i)])};class E{static async confirm(e="Are you sure?",a="You won't be able to revert this!",t="warning",o="Yes, delete it!"){try{return!!(await d.fire({title:e,text:a,icon:t,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:o})).isConfirmed}catch(s){return!1}}static toast(e="Warning!",a="warning",t="top-end",o=3e3,s=!0){d.fire({title:e,icon:a,position:t,timer:o,timerProgressBar:s,toast:!0,showConfirmButton:!1})}}const M=window.location.origin.includes("localhost"),R=M?"http://localhost:3000":"",U=n.create({baseURL:R,timeout:8e3});n.create({baseURL:"https://api.boardgameatlas.com/api",timeout:8e3});const D=new class{async createGameNight(e){const a=await U.post("api/gamenights",e);j.gameNights.push(a.data)}async endGameNight(e){await U.delete("api/gamenights/"+e.id),this.getGameNightByHouseholdId(e.householdId)}async getGameNightByHouseholdId(e){const a=await U.get("api/households/"+e+"/gamenights");j.gameNights=a.data}async getGameNightById(e){const a=await U.get("api/gamenights/"+e);j.activeGameNight=a.data,j.gameNightHouseholdId=a.data.householdId,a.data.activeProfiles.forEach((e=>{this.getGameNightProfileById(e)}))}async getGameNightProfileById(e){const a=await U.get("profile/"+e);j.activeGameNightProfiles.push(a.data)}async joinGameNight(e,a,t){await U.put("api/gamenights/"+a,t),await this.getGameNightByHouseholdId(e)}};const B={setup(){const a=i(),t=e({newGameNight:{householdId:a.params.id}});return{state:t,async createGameNight(){try{await D.createGameNight(t.newGameNight),t.newGameNight={householdId:a.params.id},u("#createGameNightModal").modal("hide")}catch(e){E.toast(e)}}}},components:{}},L=g("data-v-56d55e1e");r("data-v-56d55e1e");const z={class:"modal fade",id:"createGameNightModal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},V={class:"modal-dialog modal-lg ",role:"document"},q={class:"modal-content"},K=s("div",{class:"modal-header"},[s("h5",{class:"modal-title"}," Give us the details of your game night "),s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[s("span",{"aria-hidden":"true"},"×")])],-1),W={class:"modal-body"},Y={class:"form-group w-100"},$=s("label",{for:"name"},[s("b",null,"Name")],-1),J=s("small",{id:"nameHelpText",class:"text-muted"},"Input Game Night Name",-1),F={class:"form-group w-100"},Q=s("label",{for:"startDate"},[s("b",null,"Start Date")],-1),X=s("small",{id:"startDateHelpText",class:"text-muted"},"Input Game Night Start Date",-1),Z=s("div",{class:"modal-footer p-0 pt-3"},[s("button",{type:"submit",class:"btn btn-success"}," Submit "),s("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"}," Close ")],-1);c();const ee=L(((e,a,l,d,n,r)=>(t(),o("div",z,[s("div",V,[s("div",q,[K,s("div",W,[s("form",{onSubmit:a[3]||(a[3]=m(((...e)=>d.createGameNight&&d.createGameNight(...e)),["prevent"]))},[s("div",Y,[$,p(s("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":a[1]||(a[1]=e=>d.state.newGameNight.name=e),class:"form-control",placeholder:"Name your Game Night...","aria-describedby":"nameHelpText",required:""},null,512),[[h,d.state.newGameNight.name]]),J]),s("div",F,[Q,p(s("input",{type:"date",name:"startDate",id:"startDate","onUpdate:modelValue":a[2]||(a[2]=e=>d.state.newGameNight.startDate=e),class:"form-control","aria-describedby":"startDateHelpText",required:""},null,512),[[h,d.state.newGameNight.startDate]]),X]),Z],32)])])])]))));B.render=ee,B.__scopeId="data-v-56d55e1e";var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const te={name:"GameCabinetItem",props:{game:{type:Object,required:!0}},setup:()=>({})},oe=g("data-v-2ccc3691");r("data-v-2ccc3691");const se={class:"row m-0 my-3"},le={class:"col-md-12 col-7 p-0 d-flex align-items-center"};c();const de=oe(((e,a,d,n,r,c)=>{const i=l("GameDetailsModal");return t(),o(f,null,[s("div",se,[s("div",le,[s("img",{class:"thumbUrl p-1",src:d.game.smallImg,alt:""},null,8,["src"]),s("h6",{class:"m-0 p-3",type:"button","data-toggle":"modal","data-target":"#gameDetails"+d.game.id,title:"showGameDetails"},b(d.game.name),9,["data-target"])])]),s(i,{game:d.game},null,8,["game"])],64)}));te.render=de,te.__scopeId="data-v-2ccc3691";var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te});const re={name:"GameCabinetCard",props:{games:{type:Object,required:!0}},setup:()=>({profile:a((()=>j.activeProfile))})},ce=g("data-v-79e33235");r("data-v-79e33235");const ie={class:"col-md-12 p-0"},ue=s("div",{class:"row m-0 w-100 bg-dark-pink rounded-top shadow py-3"},[s("div",{class:"col-md-12 p-0 text-center "},[s("h1",{class:"pink-text-shadow"}," Household Game Cabinet ")])],-1),me={class:"row m-0 w-100 bg-white rounded-bottom shadow rowHeight px-2"};c();const pe=ce(((e,a,d,n,r,c)=>{const i=l("GameCabinetItem");return t(),o("div",ie,[ue,s("div",me,[(t(!0),o(f,null,y(d.games,(e=>(t(),o("div",{key:e.gameApiId,class:"col-md-12 p-0 border-bottom border-grey"},[s(i,{game:e},null,8,["game"])])))),128))])])}));re.render=pe,re.__scopeId="data-v-79e33235";var he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re});const ge={props:{game:{type:Object,required:!0}},setup:e=>(v((()=>{document.getElementById("description"+e.game.id).innerHTML=e.game.description})),{}),components:{}},be=g("data-v-64d8a323");r("data-v-64d8a323");const fe={class:"modal-dialog modal-lg",role:"document"},ye={class:"modal-content modal-height"},ve={class:"modal-header"},we={class:"modal-title"},_e=s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[s("span",{"aria-hidden":"true"},"×")],-1),Ie={class:"modal-body modal-overflow"},He={class:"row p-3 my-3 d-flex align-items-center"},Pe={class:"col-md-3 col-12 mb-3"},xe={class:"col-md-9 col-12 px-3"},Ge=s("i",{class:"fas fa-users pr-1"},null,-1),Ae={key:0},Se=s("i",{class:"far fa-clock pr-1"},null,-1),ke={key:1},Te=s("i",{class:"far fa-clock pr-1"},null,-1),Ne=s("div",{class:"modal-footer"},[s("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ")],-1);c();const Ce=be(((e,a,l,d,n,r)=>(t(),o("div",{class:"modal fade",id:"gameDetails"+l.game.id,tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},[s("div",fe,[s("div",ye,[s("div",ve,[s("h3",we,b(l.game.name),1),_e]),s("div",Ie,[s("div",He,[s("div",Pe,[s("img",{class:"modalImg",src:l.game.largeImg,alt:l.game.name},null,8,["src","alt"])]),s("div",xe,[s("p",null,[Ge,w(" "+b(l.game.minPlayers)+" - "+b(l.game.maxPlayers),1)]),l.game.minPlayTime!==l.game.maxPlayTime?(t(),o("p",Ae,[Se,w(" "+b(l.game.minPlayTime)+" to "+b(l.game.maxPlayTime)+" minutes ",1)])):(t(),o("p",ke,[Te,w(" "+b(l.game.minPlayTime)+" minutes ",1)])),s("p",null,"Age: "+b(l.game.playerAge)+" years+",1),s("p",null,[s("a",{href:l.game.websiteLink},"More Info",8,["href"])]),s("div",{class:"",id:"description"+l.game.id},null,8,["id"])])])]),Ne])])],8,["id"]))));ge.render=Ce,ge.__scopeId="data-v-64d8a323";var je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge});function Oe(e,a){if(M)console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...a);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...a)}}const Ee={log(){Oe("log",arguments)},error(){Oe("error",arguments)},warn(){Oe("warn",arguments)},assert(){Oe("assert",arguments)},trace(){Oe("trace",arguments)}};const Me=new class{async getAccount(){try{const e=await U.get("/account");j.account=e.data}catch(e){Ee.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async updateAccount(e,a){const t=await U.put("/account/"+a,e);j.account=t.data,j.activeProfile=t.data}};const Re=new class{async getMyHouseholdById(e){const a=await U.get("account/"+e+"/myhousehold");j.myHousehold=a.data,await Me.getAccount()}async getHouseholdById(e){const a=await U.get("api/households/"+e);j.activeHousehold=a.data}async getHouseholdByAccessKey(e){const a=await U.get("api/households/"+e+"/accesskey");return j.activeHousehold=a.data,j.activeHousehold}async respinAccessKey(e){const a=await U.put("api/households/"+e+"/accessKey");return j.activeHousehold.accessKey=a.data,a.data.accessKey}async updateHouseholdName(e,a){const t=await U.put("api/households/"+a,e);j.activeHousehold=t.data}};const Ue=new class{async getProfilesByHouseholdId(e){const a=await U.get("api/households/"+e+"/profiles");j.householdProfiles=a.data}async getHouseholdsByProfileId(e){const a=await U.get("account/"+e+"/households");j.profileHouseholds=a.data}async joinHousehold(e){const a=await U.post("api/householdprofiles",e);return j.householdProfiles=a.data,j.householdProfiles}};let De;const Be={},Le=function(e,a){if(!a||0===a.length)return e();if(void 0===De){const e=document.createElement("link").relList;De=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((e=>{if(e in Be)return;Be[e]=!0;const a=e.endsWith(".css"),t=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const o=document.createElement("link");return o.rel=a?"stylesheet":De,a||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),a?new Promise(((e,a)=>{o.addEventListener("load",e),o.addEventListener("error",a)})):void 0}))).then((()=>e()))};function ze(e){return()=>function(e){switch(e){case"./pages/AboutPage.vue":return Le((()=>import("./AboutPage.d2294d61.js")),["/assets/AboutPage.d2294d61.js","/assets/AboutPage.abe583b6.css","/assets/vendor.065736c0.js"]);case"./pages/GameNightPage.vue":return Le((()=>import("./GameNightPage.16fae837.js")),["/assets/GameNightPage.16fae837.js","/assets/vendor.065736c0.js"]);case"./pages/HouseholdPage.vue":return Le((()=>import("./HouseholdPage.44169634.js")),["/assets/HouseholdPage.44169634.js","/assets/HouseholdPage.175b404c.css","/assets/vendor.065736c0.js"]);case"./pages/LandingPage.vue":return Le((()=>import("./LandingPage.c9af8fef.js")),["/assets/LandingPage.c9af8fef.js","/assets/LandingPage.a48279ab.css","/assets/vendor.065736c0.js"]);case"./pages/ManageHouseholdPage.vue":return Le((()=>import("./ManageHouseholdPage.e98774b5.js")),["/assets/ManageHouseholdPage.e98774b5.js","/assets/ManageHouseholdPage.9440b537.css","/assets/vendor.065736c0.js"]);case"./pages/ProfilePage.vue":return Le((()=>import("./ProfilePage.66c72fa8.js")),["/assets/ProfilePage.66c72fa8.js","/assets/ProfilePage.7d9edb27.css","/assets/vendor.065736c0.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}(`./pages/${e}.vue`)}const Ve=[{path:"/",name:"Home",component:ze("LandingPage")},{path:"/about",name:"About",component:ze("AboutPage")},{path:"/profile/:id",name:"Profile",component:ze("ProfilePage"),beforeEnter:H},{path:"/household/:id",name:"Household",component:ze("HouseholdPage"),beforeEnter:H},{path:"/gamenight/:id",name:"GameNight",component:ze("GameNightPage"),beforeEnter:H},{path:"/manageHousehold/:id",name:"ManageHousehold",component:ze("ManageHouseholdPage"),beforeEnter:H}],qe=_({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:I(),routes:Ve});const Ke={props:{gamenight:{type:Object,required:!0}},setup(e){const t=i();return P((async()=>{try{await Ue.getProfilesByHouseholdId(t.params.id)}catch(e){E.toast(e,"error")}})),{route:t,householdId:t.params.id,householdUsers:a((()=>j.householdProfiles)),account:a((()=>j.account)),async joinGameNight(){try{await D.joinGameNight(e.gamenight.householdId,e.gamenight.id,j.account),qe.push({name:"GameNight",params:{id:e.gamenight.id}})}catch(a){E.toast(a)}}}}},We=g("data-v-c167a322");r("data-v-c167a322");const Ye={class:"col-md-12 col-12 d-flex align-items-center bg-white rounded shadow my-2 p-0 py-3"},$e={class:"row m-0 w-100"},Je={class:"col-md-9 col-12 p-0 px-3 d-flex align-items-center"},Fe={class:" m-0"},Qe={key:1,class:" m-0"},Xe={class:"col-md-3 col-12 p-0 d-flex align-items-center justify-content-end"},Ze={class:"m-0 mr-3"};c();const ea=We(((e,a,d,n,r,c)=>{const i=l("router-link");return t(),o("div",Ye,[s("div",$e,[s("div",Je,[d.gamenight.activeProfiles.find((e=>e===n.account.id))?(t(),o(i,{key:0,class:"text-dark",to:{name:"GameNight",params:{id:d.gamenight.id}}},{default:We((()=>[s("h3",Fe,b(d.gamenight.name),1)])),_:1},8,["to"])):(t(),o("h3",Qe,b(d.gamenight.name),1))]),s("div",Xe,[s("p",Ze," On: "+b(new Intl.DateTimeFormat("en-US").format(new Date(d.gamenight.startDate))),1),!d.gamenight.activeProfiles.find((e=>e===n.account.id))&&n.householdUsers.find((e=>e.accountId===n.account.id))?(t(),o("button",{key:0,type:"button",class:"btn btn-primary mr-2",onClick:a[1]||(a[1]=(...e)=>n.joinGameNight&&n.joinGameNight(...e))}," Join ")):x("",!0)])])])}));Ke.render=ea,Ke.__scopeId="data-v-c167a322";var aa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ke});const ta={props:{member:{type:Object,required:!0}},setup:e=>({account:a((()=>j.account)),household:a((()=>j.activeHousehold))})},oa=g("data-v-53b4a9fc");r("data-v-53b4a9fc");const sa={class:"d-flex align-items-center bg-white rounded shadow my-2 py-2"},la={class:"p-0 d-flex px-3"},da={class:"m-0 w-50 mr-auto text-break"};c();const na=oa(((e,a,l,d,n,r)=>(t(),o("div",sa,[s("div",la,[s("img",{class:"profile-img",src:l.member.profile.picture,alt:l.member.profile.name},null,8,["src","alt"])]),s("h5",da,b(l.member.profile.name),1)]))));ta.render=na,ta.__scopeId="data-v-53b4a9fc";var ra=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ta});const ca={name:"HouseholdMembersCard",setup:()=>({members:a((()=>j.householdProfiles))})},ia=g("data-v-9e3cc130");r("data-v-9e3cc130");const ua=s("div",{class:"row w-100 bg-dark-pink rounded-top shadow d-flex justify-content-center py-3"},[s("div",{class:"text-center pink-text-shadow"},[s("h2",null," Members ")])],-1),ma={class:"row w-100 bg-white rounded-bottom shadow members mb-3 d-flex"};c();const pa=ia(((e,a,d,n,r,c)=>{const i=l("HouseholdMemberItem");return t(),o(f,null,[ua,s("div",ma,[(t(!0),o(f,null,y(n.members,(e=>(t(),o("div",{class:"col-md-12",key:e.id},[s(i,{member:e},null,8,["member"])])))),128))])],64)}));ca.render=pa,ca.__scopeId="data-v-9e3cc130";var ha=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ca});const ga={setup(){const a=e({newHouseHoldProfile:{householdId:"",accessKey:"",accountId:""}});return{state:a,async joinHousehold(){try{const e=await Re.getHouseholdByAccessKey(a.newHouseHoldProfile.accessKey);a.newHouseHoldProfile.householdId=e.id,a.newHouseHoldProfile.accountId=j.account.id,await Ue.joinHousehold(a.newHouseHoldProfile),u("#joinHouseHoldModal").modal("hide"),qe.push({name:"Household",params:{id:e.id}}),E.toast("You Joined A Household!","success")}catch(e){E.toast(e)}}}},components:{}},ba=g("data-v-34d45327");r("data-v-34d45327");const fa={class:"modal fade",id:"joinHouseHoldModal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},ya={class:"modal-dialog modal-lg ",role:"document"},va={class:"modal-content"},wa=s("div",{class:"modal-header"},[s("h5",{class:"modal-title"}," Input Household Code "),s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[s("span",{"aria-hidden":"true"},"×")])],-1),_a={class:"modal-body"},Ia={class:"form-group w-100 m-0 my-3"},Ha=s("small",{id:"joinHouseholdhelpId",class:"text-muted"},"Input Access Key to Join Household",-1),Pa=s("div",{class:"modal-footer"},[s("button",{type:"submit",class:"btn btn-success"}," Join "),s("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"}," Close ")],-1);c();const xa=ba(((e,a,l,d,n,r)=>(t(),o("div",fa,[s("div",ya,[s("div",va,[wa,s("div",_a,[s("form",{onSubmit:a[2]||(a[2]=m(((...e)=>d.joinHousehold&&d.joinHousehold(...e)),["prevent"])),class:" "},[s("div",Ia,[p(s("input",{type:"text",name:"accessKey","onUpdate:modelValue":a[1]||(a[1]=e=>d.state.newHouseHoldProfile.accessKey=e),class:"form-control",placeholder:"Enter access key...","aria-describedby":"joinHouseholdhelpId"},null,512),[[h,d.state.newHouseHoldProfile.accessKey]]),Ha]),Pa],32)])])])]))));ga.render=xa,ga.__scopeId="data-v-34d45327";var Ga=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ga});const Aa={props:{score:{type:Object,required:!0}},setup:()=>({})},Sa=g("data-v-1e36ef52")(((e,a,s,l,d,n)=>(t(),o("li",null,b(s.score),1))));Aa.render=Sa,Aa.__scopeId="data-v-1e36ef52";var ka=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Aa});let Ta=!1,Na=[];const Ca="connected",ja="authenticate",Oa="authenticated",Ea="error";const Ma=new class extends class{constructor(e=R){this.socket=G(e||R),this.on(Ca,this.onConnected).on(Oa,this.onAuthenticated).on(Ea,this.onError)}on(e,a){return this.socket.on(e,a.bind(this)),this}onConnected(e){Ee.log("[SOCKET_CONNECTION]",e),Ta=!0}onAuthenticated(e){Ee.log("[SOCKET_AUTHENTICATED]",e);const a=[...Na];Na=[],a.forEach((e=>{this.emit(e.action,e.payload)}))}authenticate(e){this.socket.emit(ja,e)}onError(e){Ee.error("[SOCKET_ERROR]",e)}emit(e,a){if(!Ta)return Ee.log("[ENQUEING_ACTION]",{action:e,payload:a}),Na.push({action:e,payload:a});this.socket.emit(e,a)}}{constructor(){super(),this.on("error",this.onError)}onError(e){Ee.error("[SOCKET_ERROR]",e),E.toast(e.message,"error")}},Ra=A({domain:"holli-codeworks.us.auth0.com",clientId:"DvTDmLEVYRTaHp6bIeRvEouxsHdUwrKd",audience:"https://tally.com",useRefreshTokens:!0,onRedirectCallback:e=>{qe.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});async function Ua(e){if(!Ra.isAuthenticated)return e;const a=1e3*Ra.identity.exp,t=a<Date.now(),o=a<Date.now()+432e5;return t?await Ra.loginWithPopup():o&&(await Ra.getTokenSilently(),U.defaults.headers.authorization=Ra.bearer,Ma.authenticate(Ra.bearer)),e}Ra.on(Ra.AUTH_EVENTS.AUTHENTICATED,(async function(){U.defaults.headers.authorization=Ra.bearer,U.interceptors.request.use(Ua),j.user=Ra.user,await Me.getAccount(),Ma.authenticate(Ra.bearer),"Home"===qe.currentRoute.value.name.toString()&&qe.push({name:"Profile",params:{id:j.account.id}})}));var Da="/assets/tally-logo.2c6326cb.png";const Ba={setup:()=>({state:e({dropOpen:!1}),user:a((()=>j.user)),account:a((()=>j.account)),async login(){Ra.loginWithPopup()},async logout(){Ra.logout({returnTo:window.location.origin})}})},La=g("data-v-b40a1e26");r("data-v-b40a1e26");const za={class:"navbar navbar-expand-lg bg-white row p-0 px-2 navbar-light mb-3 shadow"},Va=s("div",{class:"d-flex justify-content-center"},[s("img",{alt:"logo",src:Da,height:"75"})],-1),qa=s("button",{class:"navbar-toggler ",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),Ka={class:"collapse navbar-collapse",id:"navbarText"},Wa={class:"navbar-nav mr-auto"},Ya={class:"nav-item"},$a=w(" About Us "),Ja={class:"nav-item"},Fa=w(" Profile "),Qa={class:"nav-item"},Xa=w(" Household "),Za={class:"nav-item"},et=w(" Manage Household "),at={class:"navbar-text"},tt={key:1,class:"dropdown pointer"},ot={class:"mx-3"};c();const st=La(((e,a,d,n,r,c)=>{const i=l("router-link");return t(),o("nav",za,[s(i,{class:"navbar-brand d-flex p-0",to:{name:"About"}},{default:La((()=>[Va])),_:1}),qa,s("div",Ka,[s("ul",Wa,[s("li",Ya,[s(i,{to:{name:"About"},class:"nav-link"},{default:La((()=>[$a])),_:1})]),s("li",Ja,[s(i,{to:{name:"Profile",params:{id:n.account.id}},class:"nav-link"},{default:La((()=>[Fa])),_:1},8,["to"])]),s("li",Qa,[s(i,{to:{name:"Household",params:{id:n.account.householdId}},class:"nav-link "},{default:La((()=>[Xa])),_:1},8,["to"])]),s("li",Za,[s(i,{to:{name:"ManageHousehold",params:{id:n.account.householdId}},class:"nav-link"},{default:La((()=>[et])),_:1},8,["to"])])]),s("span",at,[n.user.isAuthenticated?(t(),o("div",tt,[s("div",{class:"dropdown-toggle",onClick:a[2]||(a[2]=e=>n.state.dropOpen=!n.state.dropOpen)},[s("img",{src:n.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),s("span",ot,b(n.user.name),1)]),s("div",{class:["dropdown-menu p-0 list-group w-100",{show:n.state.dropOpen}],onClick:a[4]||(a[4]=e=>n.state.dropOpen=!1)},[s("div",{class:"list-group-item list-group-item-action hoverable",onClick:a[3]||(a[3]=(...e)=>n.logout&&n.logout(...e))}," Logout ")],2)])):(t(),o("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:a[1]||(a[1]=(...e)=>n.login&&n.login(...e))}," Login "))])])])}));Ba.render=st,Ba.__scopeId="data-v-b40a1e26";var lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ba});const dt=new class{async createResult(e){await U.post("api/results",e)}async getResultsByProfileId(e){const a=(await U.get("profile/"+e+"/results")).data,t={};a.forEach((e=>{t[e.gameApiId]||(t[e.gameApiId]={},t[e.gameApiId].score=0,t[e.gameApiId].name=e.game.name),e.win&&t[e.gameApiId].score++}));const o=[];for(const l in t)o.push([t[l].name,t[l].score]);const s=o.sort(((e,a)=>a[1]-e[1]));j.gameResults=s}async getResultsByHouseholdId(e,a){const t=(await U.get("api/households/"+e+"/results")).data.filter((e=>e.gameApiId===a)),o={};t.forEach((e=>{o[e.profileId]||(o[e.profileId]={},o[e.profileId].score=0,o[e.profileId].name=e.profile.name),e.win&&o[e.profileId].score++}));const s=[];for(const d in o)s.push([o[d].name,o[d].score]);const l=s.sort(((e,a)=>a[1]-e[1]));j.gameResults=l}};const nt={setup(){const e=i();return v((async()=>{try{await dt.getResultsByProfileId(e.params.id)}catch(a){E.toast(a)}})),{profile:a((()=>j.activeProfile)),gameScores:a((()=>j.gameResults))}}},rt=s("div",{class:"col-12 rounded-top bg-dark-pink mt-3 shadow"},[s("h1",{class:"m-0 py-3 text-center pink-text-shadow"}," Personal Leaderboard ")],-1),ct={class:"col-12 bg-white h-75 shadow p-4 leaderboard overflow-scroll"},it={key:0,class:"d-flex justify-content-between "},ut=s("h3",null,"Game",-1),mt=s("h3",null,"Wins",-1),pt={key:1,class:"ml-0"},ht={class:"text-break mr-5"};nt.render=function(e,a,l,d,n,r){return t(),o(f,null,[rt,s("div",ct,[0!==Object.entries(d.gameScores).length?(t(),o("div",it,[ut,mt])):x("",!0),0!==Object.entries(d.gameScores).length?(t(),o("div",pt,[(t(!0),o(f,null,y(d.gameScores,(e=>(t(),o("div",{class:"d-flex justify-content-between",key:e.id},[s("h5",ht,b(e[0]),1),s("h5",null,b(e[1]),1)])))),128))])):x("",!0)])],64)};var gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});const bt={props:{player:{type:Object,required:!0}},setup:()=>({})},ft=g("data-v-917e47d0");r("data-v-917e47d0");const yt={class:"col-md-11 col-12 d-flex align-items-center bg-white rounded shadow mt-2 py-3"},vt={class:"p-0 d-flex mr-3"},wt={class:"m-0 text-break"};c();const _t=ft(((e,a,l,d,n,r)=>(t(),o("div",yt,[s("div",vt,[s("img",{class:"profile-img",src:l.player.picture,alt:l.player.name},null,8,["src","alt"])]),s("h5",wt,b(l.player.name),1)]))));bt.render=_t,bt.__scopeId="data-v-917e47d0";var It=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bt});const Ht=new class{async getAccountById(e){return(await U.get("account/"+e)).data}async getProfileById(e){return(await U.get("profile/"+e)).data}};const Pt={props:{player:{type:Object,required:!0}},setup(a){const t=e({profile:{},result:{householdId:a.player.householdId,profileId:a.player.profileId,gameApiId:a.player.gameApiId}});return P((async()=>{a.player&&(t.profile=await Ht.getProfileById(a.player.profileId))})),{state:t,async submitResult(){!0===t.result.win&&await dt.createResult(t.result)}}}},xt=g("data-v-2ff7706e");r("data-v-2ff7706e");const Gt={class:"d-flex align-items-center bg-white rounded shadow mt-2 py-3"},At={class:"p-0 d-flex mx-2"},St={class:"m-0 text-break mr-auto"};c();const kt=xt(((e,a,l,d,n,r)=>(t(),o("div",Gt,[s("div",At,[s("img",{class:"profile-img",src:d.state.profile.picture,alt:d.state.profile.name},null,8,["src","alt"])]),s("h5",St,b(d.state.profile.name),1),s("form",{class:"mx-3",onSubmit:a[2]||(a[2]=m(((...e)=>d.submitResult&&d.submitResult(...e)),["prevent"]))},[p(s("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>d.state.result.win=e),class:"larger",type:"checkbox",name:"win",id:"checkbox"+d.state.profile.id},null,8,["id"]),[[S,d.state.result.win]])],32)]))));Pt.render=kt,Pt.__scopeId="data-v-2ff7706e";var Tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pt});const Nt={name:"ProfileCard",setup(){const t=i(),o=e({profileId:t.params.id});return v((async()=>{try{j.activeProfile=await Ht.getProfileById(t.params.id)}catch(e){E.toast(e)}})),{state:o,profile:a((()=>j.activeProfile))}}},Ct={class:"col-11 p-0 bg-white rounded shadow"},jt={class:"profile-card"},Ot={class:"profile-card d-flex align-items-center justify-content-between"},Et={class:"d-flex align-items-center"},Mt={class:"text-center text-break text-wrap"},Rt={key:0,class:"d-flex align-items-end mx-3"},Ut=s("button",{class:"btn btn-large btn-primary","data-toggle":"modal","data-target":"#update-account",title:"Edit Account"},[s("i",{class:"fas fa-edit fa"})],-1);Nt.render=function(e,a,d,n,r,c){const i=l("UpdateAccountModal");return t(),o(f,null,[s("div",Ct,[s("div",jt,[s("img",{class:"w-100 cover-img rounded-top",src:n.profile.coverImg,alt:"Card image cap"},null,8,["src"])]),s("div",Ot,[s("div",Et,[s("img",{class:"profile-pic mx-3",src:n.profile.picture,alt:""},null,8,["src"]),s("h5",Mt,b(n.profile.name),1)]),n.state.profileId===n.profile.id?(t(),o("div",Rt,[Ut])):x("",!0)])]),s(i)],64)};var Dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nt});const Bt={name:"ProfileHouseHoldsCard",props:{household:{type:Object,required:!0}},setup:()=>({}),components:{}},Lt=g("data-v-33241f36"),zt=Lt(((e,a,d,n,r,c)=>{const i=l("router-link");return t(),o(i,{to:{name:"Household",params:{id:d.household.household.id}},class:"nav-link "},{default:Lt((()=>[s("p",null,b(d.household.household.name),1)])),_:1},8,["to"])}));Bt.render=zt,Bt.__scopeId="data-v-33241f36";var Vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bt});const qt=new class{async searchGame(e){const a=await U.get("/api/games/search/"+e);j.activeSearchGames=a.data}async addGame(e){const a=await U.post("/api/games",e);j.games.push(a.data)}async getGamesByHouseholdId(e){const a=await U.get("/api/households/"+e+"/games");j.games=a.data}};const Kt={props:{household:{type:String,required:!0}},setup(t){const o=k([]),s=e({player:{householdId:t.household},results:[]});return P((async()=>{try{t.household&&(await qt.getGamesByHouseholdId(t.household),await Ue.getProfilesByHouseholdId(t.household))}catch(e){E.toast(e,"error")}})),T((()=>{o.value=[]})),{state:s,cards:o,games:a((()=>j.games)),householdProfiles:a((()=>j.householdProfiles)),async addPlayer(){s.player.householdId=t.household,s.results.push(s.player),s.player={householdId:t.household,win:!1}},async submitResults(){try{for(const e of o.value)e.submitResult();u("#resultsModal").modal("hide"),this.reset(),E.toast("Results Submitted","success")}catch(e){E.toast(e,"error")}},reset(){s.player={householdId:t.household,win:!1},s.results=[]}}}},Wt=g("data-v-1362df4a");r("data-v-1362df4a");const Yt={class:"modal fade",id:"resultsModal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},$t={class:"modal-dialog",role:"document"},Jt={class:"modal-content"},Ft={class:"modal-header"},Qt=s("h4",{class:"modal-title"}," Score Your Game! ",-1),Xt=s("span",{"aria-hidden":"true"},"×",-1),Zt={class:"modal-body text-center"},eo=s("h5",null,"What Game Did You Play?",-1),ao=s("option",{value:""}," --Select Game-- ",-1),to=s("h5",null,"Who Played?",-1),oo=s("option",{value:""}," --Select Player-- ",-1),so=s("b",null,"Add Player",-1),lo=s("h5",null,"Who Won?",-1),no={key:0},ro={class:"modal-footer"};c();const co=Wt(((e,a,d,n,r,c)=>{const i=l("PlayerResultsCard");return t(),o("div",Yt,[s("div",$t,[s("div",Jt,[s("div",Ft,[Qt,s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:a[1]||(a[1]=(...e)=>n.reset&&n.reset(...e))},[Xt])]),s("div",Zt,[s("form",{onSubmit:a[4]||(a[4]=m(((...e)=>n.addPlayer&&n.addPlayer(...e)),["prevent"]))},[eo,p(s("select",{"onUpdate:modelValue":a[2]||(a[2]=e=>n.state.player.gameApiId=e),class:"w-100 mb-2",required:""},[ao,(t(!0),o(f,null,y(n.games,(e=>(t(),o("option",{key:e.gameApiId,value:e.gameApiId},b(e.name),9,["value"])))),128))],512),[[N,n.state.player.gameApiId]]),to,p(s("select",{"onUpdate:modelValue":a[3]||(a[3]=e=>n.state.player.profileId=e),class:"w-100",required:""},[oo,(t(!0),o(f,null,y(n.householdProfiles,(e=>(t(),o("option",{key:e.id,value:e.profile.id},b(e.profile.name),9,["value"])))),128))],512),[[N,n.state.player.profileId]]),s("button",{type:"submit",class:"btn btn-block btn-primary my-2",disabled:!n.state.player.profileId&&!n.state.player.gameApiId},[so],8,["disabled"])],32),lo,n.state.results?(t(),o("div",no,[(t(!0),o(f,null,y(n.state.results,((e,a)=>(t(),o("div",{key:e.profileId},[s(i,{player:e,ref:e=>{n.cards[a]=e}},null,8,["player"])])))),128))])):x("",!0),s("div",ro,[s("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",onClick:a[5]||(a[5]=(...e)=>n.reset&&n.reset(...e))}," Close "),s("button",{type:"button",class:"btn btn-success",onClick:a[6]||(a[6]=(...e)=>n.submitResults&&n.submitResults(...e))}," Submit ")])])])])])}));Kt.render=co,Kt.__scopeId="data-v-1362df4a";var io=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kt});const uo={props:{searchGame:{type:Object,required:!0}},setup(t){const o=i(),s=e({newGame:{name:t.searchGame.name,description:t.searchGame.description,minPlayers:t.searchGame.minPlayers,maxPlayers:t.searchGame.maxPlayers,smallImg:t.searchGame.smallImg,largeImg:t.searchGame.largeImg,minPlayTime:t.searchGame.minPlayTime,maxPlayTime:t.searchGame.maxPlayTime,playerAge:t.searchGame.playerAge,websiteLink:t.searchGame.websiteLink,gameApiId:t.searchGame.gameApiId,householdId:o.params.id}});return v((async()=>{try{await qt.getGamesByHouseholdId(o.params.id)}catch(e){E.toast(e,"error")}})),{state:s,games:a((()=>j.games)),async addGame(){try{await qt.addGame(s.newGame),E.toast("Game Added!","success")}catch(e){E.toast(e)}}}}},mo=g("data-v-c2e9fff4");r("data-v-c2e9fff4");const po={class:"p-3 bg-light rounded shadow my-3 d-flex align-items-center"},ho={class:"ml-3 mr-auto m-0"};c();const go=mo(((e,a,l,d,n,r)=>(t(),o("div",po,[s("img",{class:"thumb-url",src:l.searchGame.smallImg,alt:l.searchGame.name},null,8,["src","alt"]),s("h3",ho,b(l.searchGame.name),1),d.games.find((e=>e.gameApiId===l.searchGame.gameApiId))?x("",!0):(t(),o("button",{key:0,type:"button",class:"btn btn-primary",onClick:a[1]||(a[1]=e=>d.addGame())}," Add "))]))));uo.render=go,uo.__scopeId="data-v-c2e9fff4";var bo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:uo});const fo={setup(){const t=e({search:""});return{state:t,activeSearchGames:a((()=>j.activeSearchGames)),async searchGame(){try{j.activeSearchGames=[],await qt.searchGame(t.search),t.search=""}catch(e){E.toast(e,"error")}}}}},yo=g("data-v-2ee87768");r("data-v-2ee87768");const vo={class:"modal fade side-bar-scroll",id:"searchGameModal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},wo={class:"modal-dialog modal-lg",role:"document"},_o={class:"modal-content"},Io=s("div",{class:"modal-header"},[s("h5",{class:"modal-title"}," Search for Games "),s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[s("span",{"aria-hidden":"true"},"×")])],-1),Ho={class:"modal-body"},Po={class:"form-group w-75 mr-auto"},xo=s("small",{id:"searchHelpId",class:"text-dark"},"Search for games to add to your game cabinet!",-1),Go=s("button",{type:"submit",class:"btn btn-primary"}," Search ",-1),Ao=s("div",{class:"modal-footer"},[s("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ")],-1);c();const So=yo(((e,a,d,n,r,c)=>{const i=l("SearchGameCard");return t(),o("div",vo,[s("div",wo,[s("div",_o,[Io,s("div",Ho,[s("form",{onSubmit:a[2]||(a[2]=m(((...e)=>n.searchGame&&n.searchGame(...e)),["prevent"])),class:"d-flex align-items-start flex-row"},[s("div",Po,[p(s("input",{type:"text",name:"search","onUpdate:modelValue":a[1]||(a[1]=e=>n.state.search=e),class:"form-control",placeholder:"Search for games...","aria-describedby":"searchHelpId",maxlength:"25"},null,512),[[h,n.state.search]]),xo]),Go],32),(t(!0),o(f,null,y(n.activeSearchGames,(e=>(t(),o("div",{key:e.id},[s(i,{"search-game":e},null,8,["search-game"])])))),128))]),Ao])])])}));fo.render=So,fo.__scopeId="data-v-2ee87768";var ko=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fo});const To={setup(){const t=e({dropOpen:!1,updatedAccount:{}});return{state:t,user:a((()=>j.user)),account:a((()=>j.account)),closeModal(){t.updatedAccount={}},async updateAccount(){try{await Me.updateAccount(t.updatedAccount,this.account.id),t.updatedAccount={},u("#update-account").modal("hide"),E.toast("Updated Account!","success")}catch(e){E.toast(e,"error")}}}}},No=g("data-v-c52c2824");r("data-v-c52c2824");const Co={class:"modal fade",id:"update-account",tabindex:"-1",role:"dialog","aria-labelledby":"update-account","aria-hidden":"true"},jo={class:"modal-dialog",role:"document"},Oo={class:"modal-content"},Eo=s("div",{class:"modal-header"},[s("h5",{class:"modal-title"}," Update Account "),s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[s("span",{"aria-hidden":"true"},"×")])],-1),Mo={class:"modal-body"},Ro={class:"form-group"},Uo=s("label",{class:"pr-2",for:"name"},"Name",-1),Do={class:"form-group"},Bo=s("label",{class:"pr-2",for:"email"},"Email",-1),Lo={class:"form-group"},zo=s("label",{class:"pr-2",for:"picture"},"Profile Picture",-1),Vo={class:"form-group"},qo=s("label",{class:"pr-2",for:"coverImg"},"Cover Image",-1),Ko={class:"modal-footer"},Wo={key:0,type:"submit",class:"btn btn-success mr-3"};c();const Yo=No(((e,a,l,d,n,r)=>(t(),o("div",Co,[s("div",jo,[s("div",Oo,[Eo,s("div",Mo,[s("form",{onSubmit:a[6]||(a[6]=m(((...e)=>d.updateAccount&&d.updateAccount(...e)),["prevent"]))},[s("div",Ro,[Uo,p(s("input",{type:"text",id:"name",class:"form-control",placeholder:"Name...",maxlength:"30","onUpdate:modelValue":a[1]||(a[1]=e=>d.state.updatedAccount.name=e)},null,512),[[h,d.state.updatedAccount.name]])]),s("div",Do,[Bo,p(s("input",{type:"text",id:"email",class:"form-control",placeholder:"Email...",maxlength:"50","onUpdate:modelValue":a[2]||(a[2]=e=>d.state.updatedAccount.email=e)},null,512),[[h,d.state.updatedAccount.email]])]),s("div",Lo,[zo,p(s("input",{type:"text",id:"picture",class:"form-control",placeholder:"Add link to profile picture...",maxlength:"200","onUpdate:modelValue":a[3]||(a[3]=e=>d.state.updatedAccount.picture=e)},null,512),[[h,d.state.updatedAccount.picture]])]),s("div",Vo,[qo,p(s("input",{type:"text",id:"coverImg",class:"form-control",placeholder:"Add link for your cover image...",maxlength:"200","onUpdate:modelValue":a[4]||(a[4]=e=>d.state.updatedAccount.coverImg=e)},null,512),[[h,d.state.updatedAccount.coverImg]])]),s("div",Ko,[d.state.updatedAccount?(t(),o("button",Wo," Save ")):x("",!0),s("button",{type:"button",class:"btn btn-danger closeModal","data-dismiss":"modal",onClick:a[5]||(a[5]=(...e)=>d.closeModal&&d.closeModal(...e))}," Close ")])],32)])])])]))));To.render=Yo,To.__scopeId="data-v-c52c2824";var $o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:To});const Jo={setup(){const t=e({dropOpen:!1,updatedHousehold:{}});return{state:t,household:a((()=>j.activeHousehold)),closeModal(){t.updatedHousehold={}},async updateHouseholdName(){try{await Re.updateHouseholdName(t.updatedHousehold,this.household.id),t.updatedHousehold={},u("#update-householdName").modal("hide"),E.toast("Updated Household Name!","success")}catch(e){E.toast(e,"error")}}}}},Fo=g("data-v-8aa234b6");r("data-v-8aa234b6");const Qo={class:"modal fade",id:"update-householdName",tabindex:"-1",role:"dialog","aria-labelledby":"update-householdName","aria-hidden":"true"},Xo={class:"modal-dialog",role:"document"},Zo={class:"modal-content"},es=s("div",{class:"modal-header"},[s("h5",{class:"modal-title"}," Update Household Name "),s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[s("span",{"aria-hidden":"true"},"×")])],-1),as={class:"modal-body"},ts={class:"form-group"},os=s("label",{class:"pr-2",for:"name"},"Name",-1),ss={class:"modal-footer"},ls={key:0,type:"submit",class:"btn btn-success mr-3"};c();const ds=Fo(((e,a,l,d,n,r)=>(t(),o("div",Qo,[s("div",Xo,[s("div",Zo,[es,s("div",as,[s("form",{onSubmit:a[3]||(a[3]=m(((...e)=>d.updateHouseholdName&&d.updateHouseholdName(...e)),["prevent"]))},[s("div",ts,[os,p(s("input",{type:"text",id:"name",class:"form-control",placeholder:"Name...",maxlength:"35","onUpdate:modelValue":a[1]||(a[1]=e=>d.state.updatedHousehold.name=e)},null,512),[[h,d.state.updatedHousehold.name]])]),s("div",ss,[d.state.updatedHousehold?(t(),o("button",ls," Save ")):x("",!0),s("button",{type:"button",class:"btn btn-danger closeModal","data-dismiss":"modal",onClick:a[2]||(a[2]=(...e)=>d.closeModal&&d.closeModal(...e))}," Close ")])],32)])])])]))));Jo.render=ds,Jo.__scopeId="data-v-8aa234b6";var ns=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jo});const rs=C(O);!function(e){const a={"./components/CreateGameNightModal.vue":ae,"./components/GameCabinetCard.vue":he,"./components/GameCabinetItem.vue":ne,"./components/GameDetailsModal.vue":je,"./components/GameNightCard.vue":aa,"./components/HouseholdMemberItem.vue":ra,"./components/HouseholdMembersCard.vue":ha,"./components/JoinHouseholdModal.vue":Ga,"./components/LeaderboardItem.vue":ka,"./components/Navbar.vue":lt,"./components/PersonalLeaderboardCard.vue":gt,"./components/PlayerCard.vue":It,"./components/PlayerResultsCard.vue":Tt,"./components/ProfileCard.vue":Dt,"./components/ProfileHouseHoldsCard.vue":Vt,"./components/ResultsModal.vue":io,"./components/SearchGameCard.vue":bo,"./components/SearchGameModal.vue":ko,"./components/UpdateAccountModal.vue":$o,"./components/UpdateHouseholdNameModal.vue":ns};Object.entries(a).forEach((([a,t])=>{const o=t.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(o,t.default)}))}(rs),rs.use(qe).mount("#app");export{j as A,E as P,Da as _,dt as a,qt as b,Ra as c,Me as d,Re as e,D as g,Ue as h,Ht as p,qe as r};
