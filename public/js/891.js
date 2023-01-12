"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[891],{9812:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".player{position:relative}.controls{background-color:rgba(43,51,63,.4);bottom:0;left:0;position:absolute;right:0;width:100%}.player:focus-within .controls,.player:hover .controls{opacity:1}.ivu-dropdown-menu{min-width:40px}.ivu-dropdown-item{padding:5px;text-align:center}",""]);const l=r},5768:(e,t,n)=>{n.d(t,{Z:()=>E});var o=n(821),r={class:"player"},l={ref:"player",class:"w-full",tabindex:"-1"},a=["src"],i={class:"controls p-2 pt-0"},c={class:"flex justify-between items-center"},s={class:"flex items-center"},d=(0,o.createTextVNode)("15 sec"),u=(0,o.createTextVNode)("10 sec"),p=(0,o.createTextVNode)("5 sec"),m=(0,o.createTextVNode)("3 sec"),f=(0,o.createTextVNode)("1 sec"),h={style:{width:"100px"}},v={class:"text-white"},V=(0,o.createElementVNode)("span",null," / ",-1);const g={name:"VideoPlayer",props:["src"],data:function(){return{player:{},isPlaying:!1,isFullscreen:!1,step:3,percent:0,current:"00:00",duration:"00:00",volume:100,wind:null}},mounted:function(){this.init()},methods:{init:function(){var e=this,t=this.$refs.player;t.onloadeddata=function(){console.log("hi");var n=Math.floor(t.duration/60),o=Math.floor(t.duration-60*n),r=n.toString().padStart(2,"0"),l=o.toString().padStart(2,"0"),a="".concat(r,":").concat(l);e.duration=a},t.addEventListener("timeupdate",(function(){var n=Math.floor(t.currentTime/60),o=Math.floor(t.currentTime-60*n),r=n.toString().padStart(2,"0"),l=o.toString().padStart(2,"0"),a="".concat(r,":").concat(l);e.current=a,e.percent=t.currentTime/t.duration*100})),t.onended=function(){e.isPlaying=!1,e.percent=0,e.current="00:00"}},togglePlayStop:function(){var e=this.$refs.player;this.isPlaying=!this.isPlaying,e.paused?e.play():e.pause()},toggleFullscreen:function(){var e=document.querySelector(".player");document.fullscreenElement?document.exitFullscreen&&(document.exitFullscreen(),this.isFullscreen=!1):(e.requestFullscreen(),this.isFullscreen=!0)},skip:function(e){var t=this.$refs.player,n=e?this.step:-this.step,o=t.currentTime+n;0<o&&o<t.duration&&(t.currentTime=o)},changeTime:function(e){var t=this.$refs.player;t.currentTime=Math.floor(t.duration*e/100)},setStep:function(e){this.step=e},changeVol:function(){this.$refs.player.volume=this.volume/100},mediaWind:function(e){var t=this;this.wind=setInterval((function(){var n=t.$refs.player,o=e?t.step:-t.step,r=n.currentTime+o;0<r&&r<n.duration&&(n.currentTime=r)}),300)},cancelWind:function(){clearInterval(this.wind)}},watch:{src:function(){this.$refs.player.src=this.src,this.init(),this.isPlaying=!1,this.percent=0,this.current="00:00"}}};var y=n(3379),N=n.n(y),x=n(9812),k={insert:"head",singleton:!1};N()(x.Z,k);x.Z.locals;const E=(0,n(3744).Z)(g,[["render",function(e,t,n,g,y,N){var x=(0,o.resolveComponent)("Slider"),k=(0,o.resolveComponent)("Button"),E=(0,o.resolveComponent)("DropdownItem"),w=(0,o.resolveComponent)("DropdownMenu"),C=(0,o.resolveComponent)("Dropdown");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("video",l,[(0,o.createElementVNode)("source",{src:n.src,type:"video/mp4"},null,8,a)],512),(0,o.createElementVNode)("div",i,[(0,o.createVNode)(x,{modelValue:y.percent,"onUpdate:modelValue":t[0]||(t[0]=function(e){return y.percent=e}),step:.1,onOnChange:N.changeTime},null,8,["modelValue","step","onOnChange"]),(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",s,[(0,o.createVNode)(k,{type:"text",onClick:N.togglePlayStop,class:"mr-2",size:"small",icon:y.isPlaying?"md-pause":"md-play",ghost:""},null,8,["onClick","icon"]),(0,o.createVNode)(k,{type:"text",onMousedown:t[1]||(t[1]=function(e){return N.mediaWind(!1)}),onMouseout:N.cancelWind,onMouseup:N.cancelWind,onClick:t[2]||(t[2]=function(e){return N.skip(!1)}),class:"mr-2",size:"small",icon:"md-skip-backward",ghost:""},null,8,["onMouseout","onMouseup"]),(0,o.createVNode)(k,{type:"text",onMousedown:t[3]||(t[3]=function(e){return N.mediaWind(!0)}),onMouseout:N.cancelWind,onMouseup:N.cancelWind,onClick:t[4]||(t[4]=function(e){return N.skip(!0)}),class:"mr-2",size:"small",icon:"md-skip-forward",ghost:""},null,8,["onMouseout","onMouseup"]),(0,o.createVNode)(C,{placement:"top","events-enabled":!0,onOnClick:N.setStep,class:"mr-2"},{list:(0,o.withCtx)((function(){return[(0,o.createVNode)(w,null,{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(E,{name:15},{default:(0,o.withCtx)((function(){return[d]})),_:1}),(0,o.createVNode)(E,{name:10},{default:(0,o.withCtx)((function(){return[u]})),_:1}),(0,o.createVNode)(E,{name:5},{default:(0,o.withCtx)((function(){return[p]})),_:1}),(0,o.createVNode)(E,{name:3},{default:(0,o.withCtx)((function(){return[m]})),_:1}),(0,o.createVNode)(E,{name:1},{default:(0,o.withCtx)((function(){return[f]})),_:1})]})),_:1})]})),default:(0,o.withCtx)((function(){return[(0,o.createVNode)(k,{type:"text",size:"small",icon:"md-menu",ghost:""})]})),_:1},8,["onOnClick"]),(0,o.createVNode)(k,{type:"text",onClick:t[5]||(t[5]=function(e){return N.skip(!0)}),class:"mr-2",size:"small",icon:"md-volume-up",ghost:""}),(0,o.createElementVNode)("div",h,[(0,o.createVNode)(x,{modelValue:y.volume,"onUpdate:modelValue":t[6]||(t[6]=function(e){return y.volume=e}),onOnChange:N.changeVol},null,8,["modelValue","onOnChange"])])]),(0,o.createElementVNode)("div",v,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(y.current),1),V,(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(y.duration),1)]),(0,o.createElementVNode)("div",null,[(0,o.createVNode)(k,{type:"text",onClick:N.toggleFullscreen,size:"small",icon:y.isFullscreen?"md-contract":"md-expand",ghost:""},null,8,["onClick","icon"])])])])])}]])},891:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var o=n(821),r={class:"py-4 shadow"},l={class:"container m-auto flex justify-between"},a=(0,o.createElementVNode)("div",{class:"text-2xl font-bold text-gray-800"},"Travel Videos",-1),i={class:"flex container m-auto pt-8"},c={class:"flex-1"},s={key:0},d={key:1,class:"flex justify-center items-center border bg-black",style:{height:"500px"}},u=[(0,o.createElementVNode)("h5",{class:"text-gray-100 text-2xl font-bold"},"There is no video.",-1)],p={class:"pl-3"},m={style:{width:"400px"},class:"px-4 ml-4 h-full border rounded overflow-auto"},f={class:"flex py-6"},h={class:"pl-3 py-2"},v={class:"text-lg font-bold"},V={class:""},g={class:""},y={class:"border-t"},N=["onClick"],x={class:"w-36"},k=["src"],E={class:"py-2 pl-4"};const w={name:"VideoExample",components:{VideoPlayer:n(5768).Z},data:function(){return{client:{pictures:[],videos:[],data:[]},videos:[],src:"",videoOptions:{autoplay:!0,controls:!0,src:""}}},computed:{},mounted:function(){var e=this;axios.get("/api/clients/".concat(this.$route.params.id)).then((function(t){e.client=t.data,e.data=t.data.videos;var n=t.data.videos.map((function(e){return"/media/"+e.Location}));e.videos=n,e.src=n[0]}))},updated:function(){},methods:{playVideo:function(e){this.src=e},getName:function(e){var t=e.Location.split("/");return t[t.length-1]}}};const C=(0,n(3744).Z)(w,[["render",function(e,t,n,w,C,b){var S=(0,o.resolveComponent)("router-link"),T=(0,o.resolveComponent)("video-player"),M=(0,o.resolveComponent)("Avatar");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",l,[(0,o.createVNode)(S,{to:"/"},{default:(0,o.withCtx)((function(){return[a]})),_:1})])]),(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",c,[C.videos.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",s,[(0,o.createVNode)(T,{src:C.src},null,8,["src"])])):((0,o.openBlock)(),(0,o.createElementBlock)("div",d,u))]),(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("div",null,[(0,o.createVNode)(M,{src:"/media/"+(C.client.pictures.length?C.client.pictures[0].Picture_Location.substring(11):"a.png"),size:"120"},null,8,["src"])]),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("p",v,(0,o.toDisplayString)(C.client.Client_Name),1),(0,o.createElementVNode)("p",V,(0,o.toDisplayString)(C.client.Script),1),(0,o.createElementVNode)("p",g,(0,o.toDisplayString)(C.client.Timestamp),1)])]),(0,o.createElementVNode)("div",y,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(C.videos,(function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{onClick:function(e){return b.playVideo(t)},class:"border-b py-1 flex hover:bg-blue-50",key:n},[(0,o.createElementVNode)("div",x,[(0,o.createElementVNode)("img",{src:e.data[n].Thumbnail?"/media/".concat(e.data[n].Thumbnail):"/assets/img/thumb_video.jpg"},null,8,k)]),(0,o.createElementVNode)("div",E,[(0,o.createElementVNode)("p",null,"Video "+(0,o.toDisplayString)(n),1),(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(e.data[n].Timestamp),1)])],8,N)})),128))])])])])])}]])}}]);