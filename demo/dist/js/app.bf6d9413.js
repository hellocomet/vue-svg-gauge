(function(e){function t(t){for(var r,i,o=t[0],l=t[1],u=t[2],p=0,d=[];p<o.length;p++)i=o[p],n[i]&&d.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="demo/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("vue-svg-gauge")]),a("h3",[e._v("Customizable gauge component with gradients and animations for VueJs")]),a("a",{staticClass:"button",attrs:{href:"https://github.com/hellocomet/vue-svg-gauge"}},[e._v("\n    Source on GitHub\n  ")]),a("div",{staticClass:"content"},[a("div",{staticClass:"mutliple-examples"},[a("VueSvgGauge",{staticClass:"mini-gauge",attrs:{"start-angle":-300,"end-angle":-60,value:e.random,"separator-step":10,"gauge-color":"#de3a21","scale-interval":10,"separator-thickness":2,"inner-radius":55,easing:e.easing,"base-color":"#d0cdcd"}},[a("div",{staticClass:"inner-text inner-text--1"},[a("span",[e._v("Single color")])])]),a("VueSvgGauge",{staticClass:"mini-gauge",attrs:{"start-angle":-90,"end-angle":270,value:e.random,"separator-step":0,"gauge-color":[{offset:0,color:"#de3a21"},{offset:100,color:"#f4c009"}],"scale-interval":0,"inner-radius":65,easing:e.easing,"base-color":"#d0cdcd"}},[a("div",{staticClass:"inner-text inner-text--2"},[a("span",[e._v("Circle")])])]),a("VueSvgGauge",{staticClass:"mini-gauge",attrs:{"start-angle":-110,"end-angle":110,value:e.random,"separator-step":25,"gauge-color":[{offset:0,color:"#de3a21"},{offset:50,color:"#f4c009"},{offset:100,color:"#0b8c5a"}],"scale-interval":2,"inner-radius":80,easing:e.easing,"base-color":"#d0cdcd"}},[a("div",{staticClass:"inner-text inner-text--3"},[a("span",[e._v(e._s(e.text))])])])],1),a("div",{staticClass:"lets-play"},[a("h2",[e._v("Wanna try ?")]),a("VueSvgGauge",{staticClass:"customizable-gauge",attrs:{"start-angle":parseInt(e.startAngle||110),"end-angle":parseInt(e.endAngle||-110),value:parseInt(e.value),"separator-step":parseInt(e.separatorStep),min:parseInt(e.min||0),max:parseInt(e.max||100),"scale-interval":parseInt(e.scale),"inner-radius":parseInt(e.innerRadius),"separator-thickness":parseInt(e.separatorThickness),"base-color":e.baseColor,"gauge-color":[{offset:0,color:"#64bf8a"},{offset:100,color:"#347AB0"}],easing:e.easing}}),a("h3",{staticClass:"customizer-title"},[e._v("Let's play 👇")]),a("div",{staticClass:"customizer"},[a("div",{staticClass:"property"},[a("label",{attrs:{for:"value"}},[e._v("Value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{id:"value",type:"number"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"startAngle"}},[e._v("Start angle")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.startAngle,expression:"startAngle"}],attrs:{id:"startAngle",type:"number"},domProps:{value:e.startAngle},on:{input:function(t){t.target.composing||(e.startAngle=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"endAngle"}},[e._v("End angle")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.endAngle,expression:"endAngle"}],attrs:{id:"endAngle",type:"number"},domProps:{value:e.endAngle},on:{input:function(t){t.target.composing||(e.endAngle=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"min"}},[e._v("Minimum value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.min,expression:"min"}],attrs:{id:"min",type:"number"},domProps:{value:e.min},on:{input:function(t){t.target.composing||(e.min=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"max"}},[e._v("Maximum value")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.max,expression:"max"}],attrs:{id:"max",type:"number"},domProps:{value:e.max},on:{input:function(t){t.target.composing||(e.max=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"separatorStep"}},[e._v("Separators Step")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.separatorStep,expression:"separatorStep"}],attrs:{id:"separatorStep",type:"number"},domProps:{value:e.separatorStep},on:{input:function(t){t.target.composing||(e.separatorStep=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Separators thickness")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.separatorThickness,expression:"separatorThickness"}],attrs:{id:"scale",type:"number"},domProps:{value:e.separatorThickness},on:{input:function(t){t.target.composing||(e.separatorThickness=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Scale step")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.scale,expression:"scale"}],attrs:{id:"scale",type:"number"},domProps:{value:e.scale},on:{input:function(t){t.target.composing||(e.scale=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Inner radius")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.innerRadius,expression:"innerRadius"}],attrs:{id:"scale",type:"number"},domProps:{value:e.innerRadius},on:{input:function(t){t.target.composing||(e.innerRadius=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Base color")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.baseColor,expression:"baseColor"}],attrs:{id:"scale",type:"text"},domProps:{value:e.baseColor},on:{input:function(t){t.target.composing||(e.baseColor=t.target.value)}}})]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Easing function")]),a("div",{staticClass:"select-container"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.easingFct,expression:"easingFct"}],attrs:{id:"scale"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.easingFct=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:" "}},[e._v("Choisissez")]),a("option",{attrs:{value:"Linear"}},[e._v("Linear")]),a("option",{attrs:{value:"Quadratic"}},[e._v("Quadratic")]),a("option",{attrs:{value:"Cubic"}},[e._v("Cubic")]),a("option",{attrs:{value:"Quartic"}},[e._v("Quartic")]),a("option",{attrs:{value:"Quintic"}},[e._v("Quintic")]),a("option",{attrs:{value:"Sinusoidal"}},[e._v("Sinusoidal")]),a("option",{attrs:{value:"Exponential"}},[e._v("Exponential")]),a("option",{attrs:{value:"Circular"}},[e._v("Circular")]),a("option",{attrs:{value:"Elastic"}},[e._v("Elastic")]),a("option",{attrs:{value:"Back"}},[e._v("Back")]),a("option",{attrs:{value:"Bounce"}},[e._v("Bounce")])])])]),a("div",{staticClass:"property"},[a("label",{attrs:{for:"scale"}},[e._v("Easing type")]),a("div",{staticClass:"select-container"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.easingType,expression:"easingType"}],attrs:{id:"scale"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.easingType=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:" "}},[e._v("Choisissez")]),a("option",{attrs:{value:"In"}},[e._v("In")]),a("option",{attrs:{value:"Out"}},[e._v("Out")]),a("option",{attrs:{value:"InOut"}},[e._v("InOut")])])])])])],1)]),e._m(0)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom"},[e._v("Made with ❤️ at "),a("a",{attrs:{href:"https://comet.co/"}},[e._v("comet")])])}],i={name:"app",data:function(){return{startAngle:-110,endAngle:110,value:75,separatorStep:25,min:0,max:100,scale:5,innerRadius:60,separatorThickness:4,baseColor:"#d0cdcd",easingFct:"Circular",easingType:"Out",random:30}},computed:{easing:function(){var e=this.easingFct,t=this.easingType;return[e,t].join(".")},text:function(){var e=this.random;return e<25?"Very Bad 🙁":e<50?"Pretty ok 😶":e<75?"Gets nice 🙂":"Super good 😄"}},mounted:function(){var e=this;setInterval(function(){var t=0,a=100;e.random=Math.random()*(+a-+t)+ +t},4e3)}},o=i,l=(a("7faf"),a("2877")),u=Object(l["a"])(o,n,s,!1,null,null,null),c=u.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gauge"},[e.height?a("svg",{attrs:{viewBox:"0 0 "+2*e.RADIUS+" "+e.height,height:"100%",width:"100%",xmlns:"http://www.w3.org/2000/svg"}},[a("defs",[a("filter",{attrs:{id:"innershadow-"+e._uid}},[a("feFlood",{attrs:{"flood-color":"#c7c6c6"}}),a("feComposite",{attrs:{in2:"SourceAlpha",operator:"out"}}),a("feGaussianBlur",{attrs:{stdDeviation:"2",result:"blur"}}),a("feComposite",{attrs:{operator:"atop",in2:"SourceGraphic"}})],1),e.hasGradient?a("linearGradient",{attrs:{id:"gaugeGradient-"+e._uid}},e._l(e.gaugeColor,function(e,t){return a("stop",{key:e.color+"-"+t,attrs:{offset:e.offset+"%","stop-color":e.color}})}),1):e._e(),a("mask",{attrs:{id:"innerCircle-"+e._uid}},[a("circle",{attrs:{r:e.RADIUS-.5,cx:e.X_CENTER,cy:e.Y_CENTER,fill:"white"}}),a("circle",{attrs:{r:e.innerRadius,cx:e.X_CENTER,cy:e.Y_CENTER,fill:"black"}}),e.separatorPaths?e._l(e.separatorPaths,function(e,t){return a("path",{key:t,attrs:{d:e,fill:"black"}})}):e._e()],2)],1),a("g",{attrs:{mask:"url(#innerCircle-"+e._uid+")"}},[e.isCircle?a("circle",{attrs:{r:e.RADIUS,cx:e.X_CENTER,cy:e.Y_CENTER,fill:e.hasGradient?"url(#gaugeGradient-"+e._uid+")":e.gaugeColor}}):a("path",{attrs:{d:e.basePath,fill:e.hasGradient?"url(#gaugeGradient-"+e._uid+")":e.gaugeColor}}),e.value===e.min&&e.isCircle?a("circle",{attrs:{r:e.RADIUS,cx:e.X_CENTER,cy:e.Y_CENTER,fill:e.baseColor}}):a("path",{attrs:{d:e.gaugePath,fill:e.baseColor,filter:"url(#innershadow-"+e._uid+")"}})]),e.scaleLines?e._l(e.scaleLines,function(t,r){return a("line",{key:t.xE+"-"+r,attrs:{x1:t.xS,y1:t.yS,x2:t.xE,y2:t.yE,"stroke-width":"1",stroke:e.baseColor}})}):e._e(),a("foreignObject",{attrs:{x:"0",y:"0",width:"100%",height:e.height}},[e._t("default")],2)],2):e._e()])},d=[],v=a("a745"),g=a.n(v),m=(a("7b62"),a("9e41")),f=a.n(m),h=a("79d4"),b=a.n(h),y=100,_=100,C=100;function x(e,t){var a=(t-90)*Math.PI/180;return{x:_+e*Math.cos(a),y:C+e*Math.sin(a)}}function w(e,t,a){var r=x(e,a),n=x(e,t),s=a-t<=180?"0":"1",i=["M",r.x,r.y,"A",e,e,0,s,0,n.x,n.y,"L",_,C].join(" ");return i}var A={name:"Gauge",props:{value:{type:Number,default:70},min:{type:Number,default:0},max:{type:Number,default:100},startAngle:{type:Number,default:-90,validator:function(e){return(e<-360||e>360)&&console.warn('GaugeChart - props "startAngle" must be between -360 and 360'),!0}},endAngle:{type:Number,default:90,validator:function(e){return(e<-360||e>360)&&console.warn('GaugeChart - props "endAngle" must be between -360 and 360'),!0}},innerRadius:{type:Number,default:60,validator:function(e){return(e<0||e>100)&&console.warn('GaugeChart - props "innerRadius" must be between 0 and '.concat(y)),!0}},separatorStep:{type:Number,default:10,validator:function(e){return null!==e&&e<0&&console.warn('GaugeChart - props "separatorStep" must be null or >= 0'),!0}},separatorThickness:{type:Number,default:4},gaugeColor:{type:[Array,String],default:function(){return[{offset:0,color:"#347AB0"},{offset:100,color:"#8CDFAD"}]}},baseColor:{type:String,default:"#DDDDDD"},easing:{type:String,default:"Circular.Out"},scaleInterval:{type:Number,default:5,validator:function(e){return null!==e&&e<0&&console.warn('GaugeChart - props "scaleInterval" must be null or >= 0'),!0}}},data:function(){return{X_CENTER:_,Y_CENTER:C,RADIUS:y,tweenedValue:this.min}},computed:{height:function(){var e=this.endAngle,t=this.startAngle,a=x(y,t),r=a.y,n=x(y,e),s=n.y;return Math.abs(e)<=180&&Math.abs(t)<=180?Math.max(C,r,s):2*y},basePath:function(){var e=this.startAngle,t=this.endAngle;return w(y,e,t)},gaugePath:function(){var e=this.endAngle,t=this.getAngle,a=this.tweenedValue;return w(y,t(a),e)},totalAngle:function(){var e=this.startAngle,t=this.endAngle;return Math.abs(t-e)},isCircle:function(){return 360===Math.abs(this.totalAngle)},hasGradient:function(){return g()(this.gaugeColor)},separatorPaths:function(){var e=this.separatorStep,t=this.getAngle,a=this.min,r=this.max,n=this.separatorThickness,s=this.isCircle;if(e>0){var i=[],o=s?a:a+e;for(o;o<r;o+=e){var l=t(o),u=n/2;i.push(w(y+2,l-u,l+u))}return i}return null},scaleLines:function(){var e=this.scaleInterval,t=this.isCircle,a=this.min,r=this.max,n=this.getAngle,s=this.innerRadius;if(e>0){var i=[],o=t?a+e:a;for(o;o<r+e;o+=e){var l=n(o),u=x(s-4,l),c=x(s-8,l);i.push({xS:u.x,yS:u.y,xE:c.x,yE:c.y})}return i}return null}},watch:{value:{immediate:!0,handler:function(e){var t=this,a=this.easing,r=this.tweenedValue,n=this.min,s=this.max,i=e;function o(){f.a.update()&&requestAnimationFrame(o)}e<n&&(i=n),e>s&&(i=s),new f.a.Tween({tweeningValue:r}).to({tweeningValue:i},1500).easing(b()(f.a.Easing,a)).onUpdate(function(e){t.tweenedValue=e.tweeningValue}).start(),o()}}},methods:{getAngle:function(e){var t=this.min,a=this.max,r=this.startAngle,n=this.totalAngle,s=a-t||1;return e*n/s+r}}},S=A,E=(a("f611"),Object(l["a"])(S,p,d,!1,null,null,null)),N=E.exports,T={install:function(e,t){e.component("vue-svg-gauge",N),e.component("VueSvgGauge",N)}},k=T;r["a"].config.productionTip=!1,r["a"].use(k),new r["a"]({render:function(e){return e(c)}}).$mount("#app")},"7faf":function(e,t,a){"use strict";var r=a("8fba"),n=a.n(r);n.a},"8fba":function(e,t,a){},d9b6:function(e,t,a){},f611:function(e,t,a){"use strict";var r=a("d9b6"),n=a.n(r);n.a}});
//# sourceMappingURL=app.bf6d9413.js.map