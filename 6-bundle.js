(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{201:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),r=d(o),n=d(a(9)),l=a(8),s=a(15),u=a(6),i=d(a(202));function d(e){return e&&e.__esModule?e:{default:e}}!function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).enterModule;t&&t(e)}();var c=function(){var e=(0,n.default)().width>l.maxWidthDevice,t=(0,o.useRef)(null),a=(0,o.useRef)(null),d=(0,o.useRef)(null),c=(0,o.useRef)(null),f=(0,o.useRef)(null),b=(0,o.useRef)(null),_=(0,o.useRef)(null),m=(0,o.useRef)(null),h=(0,o.useRef)(null);return(0,o.useEffect)(function(){var o=new SplitText(a.current,{type:"words"}),r=new SplitText(d.current,{type:"words"}),n=new SplitText(c.current,{type:"chars"}),s=new SplitText(f.current,{type:"chars"}),p=null,v=null,g=null;return e&&(p=new TimelineMax,v=new i.default(m.current,l.widthBubblesCanvas,l.heightBubblesCanvas,"down",0),g=new i.default(h.current,l.widthBubblesCanvas,l.heightBubblesCanvas,"up",0),p.timeScale(1.3).set(t.current,{autoAlpha:1}).staggerFrom(o.words,.5,{autoAlpha:0,color:u.white,cycle:{scale:function(e){return e%2?2:.5},rotation:function(e){return e%2?-180:0}},transformOrigin:"50%",ease:Power2.easeOut},.05,"+=1").staggerFrom(r.words,.55,{autoAlpha:0,color:u.white,cycle:{y:function(e){return e%2?50:-20}},transformOrigin:"80% 50% 20",ease:Back.easeOut},.06,"-=.2").staggerFrom(n.chars,.5,{autoAlpha:0,color:u.white,scaleY:2.2,y:5,rotationX:90,transformOrigin:"80% 50% 20",ease:Back.easeOut},.06,"-=0.1").staggerFrom(s.chars,.5,{autoAlpha:0,color:u.white,rotationY:90,transformOrigin:"50% 0 -20",ease:Power2.easeOut},.05,"-=0.1").from(b.current,.5,{autoAlpha:0,x:15,color:u.green,ease:Power3.easeOut},"+=0").from(_.current,.5,{autoAlpha:0,x:-15,color:u.green,ease:Power3.easeOut},"-=0.4")),function(){p&&p.kill(),v&&v.destroy(),g&&g.destroy()}},[e]),r.default.createElement("div",{className:"row home-intro"},r.default.createElement("div",{className:"block-bubbles offset-xl-1 col-xl-2 d-none d-xl-block"},r.default.createElement("canvas",{ref:m})),r.default.createElement("div",{ref:t,className:"block-txt offset-xl-0 col-xl-6 offset-lg-3 col-lg-6 offset-sm-2 col-sm-8 col-xs-12"},r.default.createElement("ul",null,r.default.createElement("li",{ref:a},s.home.txt1),r.default.createElement("li",{ref:d},s.home.txt2),r.default.createElement("li",{ref:c},s.home.txt3),r.default.createElement("li",{ref:f},s.home.txt4),r.default.createElement("li",{ref:b},s.home.txt5),r.default.createElement("li",{ref:_},s.home.txt6))),r.default.createElement("div",{className:"block-bubbles col-xl-2 d-none d-xl-block"},r.default.createElement("canvas",{ref:h})))},f=c;t.default=f,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).default;e&&(e.register(c,"Intro","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/components/sections/home/intro.js"),e.register(f,"default","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/components/sections/home/intro.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).leaveModule;t&&t(e)}()}).call(this,a(3)(e))},202:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),_canvasBase=__webpack_require__(203),_canvasBase2=_interopRequireDefault(_canvasBase),_random=__webpack_require__(204),_colors=__webpack_require__(6),_measures=__webpack_require__(8),_bubble=__webpack_require__(205),_bubble2=_interopRequireDefault(_bubble);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;e&&e(module)}();var BubblesAnim=function(_CanvasBase){function BubblesAnim(e,t,a,o,r){_classCallCheck(this,BubblesAnim);var n=_possibleConstructorReturn(this,(BubblesAnim.__proto__||Object.getPrototypeOf(BubblesAnim)).call(this,e,t,a,o,r));return n.direction=o,n.delay=r,n.objPosY={begin:0,end:0},n.tl=null,n.setDirection(),n.setBubbles(),n.setTimeline(),n}return _inherits(BubblesAnim,_CanvasBase),_createClass(BubblesAnim,[{key:"setDirection",value:function(){"up"===this.direction?(this.objPosY.begin=_measures.heightBubblesCanvas,this.objPosY.end=-(_measures.heightBubblesCanvas+_measures.offsetHeightBubbles)):(this.objPosY.begin=-_measures.offsetHeightBubbles,this.objPosY.end=_measures.heightBubblesCanvas+_measures.offsetHeightBubbles)}},{key:"setBubbles",value:function(){this.arrayColors=[_colors.grey,_colors.green,_colors.black],this.arrayBubbles=[];for(var e=1;e<_measures.totalBubbles;e+=1){var t=new _bubble2.default(this.arrayColors[(0,_random.getRandomInt)(0,2)],(0,_random.getRandom)(2,12),(0,_random.getRandom)(50,115),this.objPosY.begin,0);this.container.addChild(t.getBubble()),this.arrayBubbles.push(t.getBubble())}}},{key:"setTimeline",value:function(){this.tl=new TimelineMax({repeat:-1,delay:this.delay,yoyo:!0,repeatDelay:0}),this.tl.staggerTo(this.arrayBubbles,(0,_random.getRandom)(8,12),{bezier:{type:"Cubic",values:[{x:(0,_random.getRandom)(-10,10),alpha:0},{x:(0,_random.getRandom)(-5,0),alpha:(0,_random.getRandom)(0,.1)},{x:(0,_random.getRandom)(10,15),alpha:(0,_random.getRandom)(.2,.1)},{x:(0,_random.getRandom)(20,30),alpha:(0,_random.getRandom)(.2,.4)},{x:(0,_random.getRandom)(20,12),alpha:(0,_random.getRandom)(.4,.6)},{x:(0,_random.getRandom)(10,15),alpha:(0,_random.getRandom)(.6,.8)},{x:(0,_random.getRandom)(5,10),alpha:(0,_random.getRandom)(.8,1)},{x:(0,_random.getRandom)(0,5),alpha:(0,_random.getRandom)(.6,.8)},{x:(0,_random.getRandom)(-5,-10),alpha:(0,_random.getRandom)(.8,1)},{x:(0,_random.getRandom)(-15,-20),alpha:(0,_random.getRandom)(.6,.8)},{x:(0,_random.getRandom)(-10,-7),alpha:(0,_random.getRandom)(.4,.6)},{x:(0,_random.getRandom)(-5,0),alpha:(0,_random.getRandom)(.2,.4)},{x:(0,_random.getRandom)(0,2),alpha:(0,_random.getRandom)(.1,.2)},{x:(0,_random.getRandom)(5,10),alpha:(0,_random.getRandom)(0,.1)},{x:(0,_random.getRandom)(15,20),alpha:0}],autoRotate:!0},y:this.objPosY.end,ease:Power1.easeInOut},.15)}},{key:"destroy",value:function(){this.tl.kill(),this.stage.removeChild(this.container)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),BubblesAnim}(_canvasBase2.default),_default=BubblesAnim;exports.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;e&&(e.register(BubblesAnim,"BubblesAnim","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/utils/animations/home/bubbles/animation.js"),e.register(_default,"default","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/utils/animations/home/bubbles/animation.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;e&&e(module)}()}).call(this,__webpack_require__(3)(module))},203:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;e&&e(module)}();var CanvasBase=function(){function CanvasBase(e,t,a){_classCallCheck(this,CanvasBase),this.canvas=e,this.canvasw=t,this.canvash=a,this.setCanvasAndContext(),this.setStageAndContainer()}return _createClass(CanvasBase,[{key:"setCanvasAndContext",value:function(){this.canvas.width=this.canvasw,this.canvas.height=this.canvash,this.context=this.canvas.getContext("2d")}},{key:"setStageAndContainer",value:function(){this.stage=new createjs.Stage(this.canvas),this.stage.enableMouseOver(30),createjs.Ticker.setFPS(30),createjs.Ticker.addEventListener("tick",this.stage),this.container=new createjs.Container,this.stage.addChild(this.container)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),CanvasBase}(),_default=CanvasBase;exports.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;e&&(e.register(CanvasBase,"CanvasBase","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/utils/animations/canvasBase.js"),e.register(_default,"default","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/utils/animations/canvasBase.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;e&&e(module)}()}).call(this,__webpack_require__(3)(module))},204:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).enterModule;t&&t(e)}();var o=t.getRandom=function(e,t){return Math.random()*(t-e)+e},r=t.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)};!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).default;e&&(e.register(o,"getRandom","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/utils/random.js"),e.register(r,"getRandomInt","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/utils/random.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).leaveModule;t&&t(e)}()}).call(this,a(3)(e))},205:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;e&&e(module)}();var Bubble=function(){function Bubble(e,t,a,o,r){_classCallCheck(this,Bubble),this.color=e,this.size=t,this.posX=a,this.posY=o,this.alpha=r,this.setBubble()}return _createClass(Bubble,[{key:"setBubble",value:function(){this.shape=new createjs.Shape,this.shape.graphics.beginFill(this.color).drawCircle(this.posX,this.posY,this.size).endFill(),this.shape.alpha=this.alpha}},{key:"getBubble",value:function(){return this.shape}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Bubble}(),_default=Bubble;exports.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;e&&(e.register(Bubble,"Bubble","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/utils/animations/home/bubbles/bubble.js"),e.register(_default,"default","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/utils/animations/home/bubbles/bubble.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;e&&e(module)}()}).call(this,__webpack_require__(3)(module))},50:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],o=!0,r=!1,n=void 0;try{for(var l,s=e[Symbol.iterator]();!(o=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);o=!0);}catch(e){r=!0,n=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=a(2),n=c(r),l=c(a(0)),s=c(a(201)),u=c(a(9)),i=a(66),d=a(8);function c(e){return e&&e.__esModule?e:{default:e}}!function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).enterModule;t&&t(e)}();var f=function(e){var t=e.onMount,a=e.onUnmount,l=(0,u.default)().width<=d.maxWidthDevice,c=(0,r.useState)(["home-wrapper container"]),f=o(c,2),b=f[0],_=f[1];return(0,r.useEffect)(function(){if((0,i.setZeroScrollTop)(),l){var e=b.concat("visible");_(e)}return t(),function(){a()}},[l]),n.default.createElement("div",{className:b.join(" ")},n.default.createElement(s.default,null))};f.propTypes={onMount:l.default.func,onUnmount:l.default.func};var b=f;t.default=b,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).default;e&&(e.register(f,"Home","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/components/sections/home/index.js"),e.register(b,"default","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/components/sections/home/index.js"))}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).leaveModule;t&&t(e)}()}).call(this,a(3)(e))},66:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).enterModule;t&&t(e)}();var o=t.setZeroScrollTop=function(){window.scrollTo(0,0)};!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).default;e&&e.register(o,"setZeroScrollTop","/Users/deepmoradia/Downloads/good/jcoder-master/jcoder/src/utils/index.js")}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:a(1)).leaveModule;t&&t(e)}()}).call(this,a(3)(e))}}]);