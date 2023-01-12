"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[958],{9812:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".player{position:relative}.controls{background-color:rgba(43,51,63,.4);bottom:0;left:0;position:absolute;right:0;width:100%}.player:focus-within .controls,.player:hover .controls{opacity:1}.ivu-dropdown-menu{min-width:40px}.ivu-dropdown-item{padding:5px;text-align:center}",""]);const l=r},5768:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(821),r={class:"player"},l={ref:"player",class:"w-full",tabindex:"-1"},i=["src"],c={class:"controls p-2 pt-0"},a={class:"flex justify-between items-center"},s={class:"flex items-center"},u=(0,o.createTextVNode)("15 sec"),d=(0,o.createTextVNode)("10 sec"),p=(0,o.createTextVNode)("5 sec"),m=(0,o.createTextVNode)("3 sec"),f=(0,o.createTextVNode)("1 sec"),v={style:{width:"100px"}},h={class:"text-white"},y=(0,o.createElementVNode)("span",null," / ",-1);const g={name:"VideoPlayer",props:["src"],data:function(){return{player:{},isPlaying:!1,isFullscreen:!1,step:3,percent:0,current:"00:00",duration:"00:00",volume:100,wind:null}},mounted:function(){this.init()},methods:{init:function(){var e=this,t=this.$refs.player;t.onloadeddata=function(){console.log("hi");var n=Math.floor(t.duration/60),o=Math.floor(t.duration-60*n),r=n.toString().padStart(2,"0"),l=o.toString().padStart(2,"0"),i="".concat(r,":").concat(l);e.duration=i},t.addEventListener("timeupdate",(function(){var n=Math.floor(t.currentTime/60),o=Math.floor(t.currentTime-60*n),r=n.toString().padStart(2,"0"),l=o.toString().padStart(2,"0"),i="".concat(r,":").concat(l);e.current=i,e.percent=t.currentTime/t.duration*100})),t.onended=function(){e.isPlaying=!1,e.percent=0,e.current="00:00"}},togglePlayStop:function(){var e=this.$refs.player;this.isPlaying=!this.isPlaying,e.paused?e.play():e.pause()},toggleFullscreen:function(){var e=document.querySelector(".player");document.fullscreenElement?document.exitFullscreen&&(document.exitFullscreen(),this.isFullscreen=!1):(e.requestFullscreen(),this.isFullscreen=!0)},skip:function(e){var t=this.$refs.player,n=e?this.step:-this.step,o=t.currentTime+n;0<o&&o<t.duration&&(t.currentTime=o)},changeTime:function(e){var t=this.$refs.player;t.currentTime=Math.floor(t.duration*e/100)},setStep:function(e){this.step=e},changeVol:function(){this.$refs.player.volume=this.volume/100},mediaWind:function(e){var t=this;this.wind=setInterval((function(){var n=t.$refs.player,o=e?t.step:-t.step,r=n.currentTime+o;0<r&&r<n.duration&&(n.currentTime=r)}),300)},cancelWind:function(){clearInterval(this.wind)}},watch:{src:function(){this.$refs.player.src=this.src,this.init(),this.isPlaying=!1,this.percent=0,this.current="00:00"}}};var V=n(3379),N=n.n(V),x=n(9812),E={insert:"head",singleton:!1};N()(x.Z,E);x.Z.locals;const w=(0,n(3744).Z)(g,[["render",function(e,t,n,g,V,N){var x=(0,o.resolveComponent)("Slider"),E=(0,o.resolveComponent)("Button"),w=(0,o.resolveComponent)("DropdownItem"),b=(0,o.resolveComponent)("DropdownMenu"),k=(0,o.resolveComponent)("Dropdown");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("video",l,[(0,o.createElementVNode)("source",{src:n.src,type:"video/mp4"},null,8,i)],512),(0,o.createElementVNode)("div",c,[(0,o.createVNode)(x,{modelValue:V.percent,"onUpdate:modelValue":t[0]||(t[0]=function(e){return V.percent=e}),step:.1,onOnChange:N.changeTime},null,8,["modelValue","step","onOnChange"]),(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",s,[(0,o.createVNode)(E,{type:"text",onClick:N.togglePlayStop,class:"mr-2",size:"small",icon:V.isPlaying?"md-pause":"md-play",ghost:""},null,8,["onClick","icon"]),(0,o.createVNode)(E,{type:"text",onMousedown:t[1]||(t[1]=function(e){return N.mediaWind(!1)}),onMouseout:N.cancelWind,onMouseup:N.cancelWind,onClick:t[2]||(t[2]=function(e){return N.skip(!1)}),class:"mr-2",size:"small",icon:"md-skip-backward",ghost:""},null,8,["onMouseout","onMouseup"]),(0,o.createVNode)(E,{type:"text",onMousedown:t[3]||(t[3]=function(e){return N.mediaWind(!0)}),onMouseout:N.cancelWind,onMouseup:N.cancelWind,onClick:t[4]||(t[4]=function(e){return N.skip(!0)}),class:"mr-2",size:"small",icon:"md-skip-forward",ghost:""},null,8,["onMouseout","onMouseup"]),(0,o.createVNode)(k,{placement:"top","events-enabled":!0,onOnClick:N.setStep,class:"mr-2"},{list:(0,o.withCtx)((function(){return[(0,o.createVNode)(b,null,{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(w,{name:15},{default:(0,o.withCtx)((function(){return[u]})),_:1}),(0,o.createVNode)(w,{name:10},{default:(0,o.withCtx)((function(){return[d]})),_:1}),(0,o.createVNode)(w,{name:5},{default:(0,o.withCtx)((function(){return[p]})),_:1}),(0,o.createVNode)(w,{name:3},{default:(0,o.withCtx)((function(){return[m]})),_:1}),(0,o.createVNode)(w,{name:1},{default:(0,o.withCtx)((function(){return[f]})),_:1})]})),_:1})]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(E,{type:"text",size:"small",icon:"md-menu",ghost:""})]})),_:1},8,["onOnClick"]),(0,o.createVNode)(E,{type:"text",onClick:t[5]||(t[5]=function(e){return N.skip(!0)}),class:"mr-2",size:"small",icon:"md-volume-up",ghost:""}),(0,o.createElementVNode)("div",v,[(0,o.createVNode)(x,{modelValue:V.volume,"onUpdate:modelValue":t[6]||(t[6]=function(e){return V.volume=e}),onOnChange:N.changeVol},null,8,["modelValue","onOnChange"])])]),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(V.current),1),y,(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(V.duration),1)]),(0,o.createElementVNode)("div",null,[(0,o.createVNode)(E,{type:"text",onClick:N.toggleFullscreen,size:"small",icon:V.isFullscreen?"md-contract":"md-expand",ghost:""},null,8,["onClick","icon"])])])])])}]])},7958:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var o=n(821),r={class:"py-4 shadow"},l={class:"container m-auto flex justify-between"},i=(0,o.createElementVNode)("div",{class:"text-2xl font-bold text-gray-800"},"Travel Videos",-1),c=(0,o.createTextVNode)("Logout"),a={class:"flex container m-auto pt-8"},s={class:"flex-1"},u={key:0},d={key:1,class:"flex justify-center items-center border bg-black",style:{height:"500px"}},p=[(0,o.createElementVNode)("h5",{class:"text-gray-100 text-2xl font-bold"},"There is no video.",-1)],m={class:"pl-3"},f={style:{width:"400px"},class:"px-4 ml-4 h-full border rounded overflow-auto"},v={class:"flex py-6"},h={class:"flex flex-col justify-between pl-3 py-2"},y={class:"text-lg font-bold"},g={class:""},V={class:""},N={class:"border-t"},x=["onClick"],E={class:"w-36"},w={class:"py-2 pl-4"};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const O={name:"VideoExample",components:{VideoPlayer:n(5768).Z},data:function(){return{client:{pictures:[],videos:[]},videos:[],videoOptions:{autoplay:!0,controls:!0,src:""}}},computed:{user:function(){return this.$store.state.auth.user}},mounted:function(){var e=this;axios.get("/api/user").then((function(t){e.client=t.data;var n=t.data.videos.map((function(e){return e.src="/media/"+e.Location,e.type="video/mp4",e}));e.videos=n,e.videoOptions=k(k({},e.videoOptions),{},{sources:n[0]})}))},updated:function(){},methods:{playVideo:function(e){this.videoOptions=k(k({},this.videoOptions),{},{sources:[e]})},getName:function(e){var t=e.Location.split("/");return t[t.length-1]},logout:function(){this.$store.dispatch("auth/logout")}}};const S=(0,n(3744).Z)(O,[["render",function(e,t,n,b,k,C){var O=(0,o.resolveComponent)("Button"),S=(0,o.resolveComponent)("video-player"),P=(0,o.resolveComponent)("Avatar");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",l,[i,(0,o.createVNode)(O,{onClick:C.logout},{default:(0,o.withCtx)((function(){return[c]})),_:1},8,["onClick"])])]),(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",s,[k.videos.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[(0,o.createVNode)(S,{options:k.videoOptions},null,8,["options"])])):((0,o.openBlock)(),(0,o.createElementBlock)("div",d,p))]),(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("div",v,[(0,o.createElementVNode)("div",null,[(0,o.createVNode)(P,{src:"/media/"+(k.client.pictures.length?k.client.pictures[0].Picture_Location.substring(11):"a.png"),size:"120"},null,8,["src"])]),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("p",y,(0,o.toDisplayString)(k.client.Client_Name),1),(0,o.createElementVNode)("p",g,(0,o.toDisplayString)(k.client.Script),1),(0,o.createElementVNode)("p",V,(0,o.toDisplayString)(k.client.Timestamp),1)]),(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(k.client.videos.length)+" videos",1)])])]),(0,o.createElementVNode)("div",N,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(k.videos,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{onClick:function(t){return C.playVideo(e)},class:"border-b py-1 flex hover:bg-blue-50",key:t},[(0,o.createElementVNode)("div",E,[(0,o.createVNode)(S,{options:{sources:e}},null,8,["options"])]),(0,o.createElementVNode)("div",w,[(0,o.createElementVNode)("p",null,"Video "+(0,o.toDisplayString)(t),1),(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(C.getName(e)),1),(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(e.Timestamp),1)])],8,x)})),128))])])])])])}]])}}]);