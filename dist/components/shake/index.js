/*!
 * Vux v0.1.3-rc7 (https://vux.li)
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxShake=e():t.vuxShake=e()}(this,function(){return function(t){function e(s){if(o[s])return o[s].exports;var i=o[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(2),n=s(i);e["default"]={props:{stop:Boolean,threshold:{type:Number,"default":15},timeout:{type:Number,"default":1e3}},ready:function(){var t=this;this._shake=new n["default"]({threshold:t.threshold,timeout:t.timeout}),this._handler=function(){t.stop||t.$emit("on-shake")},window.addEventListener("shake",this._handler,!1),this._shake.start()},beforeDestroy:function(){window.removeEventListener("shake",this._handler,!1)}}},function(t,e,o){var s;!function(i,n){s=function(){return n(i,i.document)}.call(e,o,e,t),!(void 0!==s&&(t.exports=s))}("undefined"!=typeof window?window:this,function(t,e){"use strict";function o(o){if(this.hasDeviceMotion="ondevicemotion"in t,this.options={threshold:15,timeout:1e3},"object"==typeof o)for(var s in o)o.hasOwnProperty(s)&&(this.options[s]=o[s]);if(this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof e.CustomEvent)this.event=new e.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof e.createEvent)return!1;this.event=e.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}return o.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},o.prototype.start=function(){this.reset(),this.hasDeviceMotion&&t.addEventListener("devicemotion",this,!1)},o.prototype.stop=function(){this.hasDeviceMotion&&t.removeEventListener("devicemotion",this,!1),this.reset()},o.prototype.devicemotion=function(e){var o,s,i=e.accelerationIncludingGravity,n=0,r=0,h=0;return null===this.lastX&&null===this.lastY&&null===this.lastZ?(this.lastX=i.x,this.lastY=i.y,void(this.lastZ=i.z)):(n=Math.abs(this.lastX-i.x),r=Math.abs(this.lastY-i.y),h=Math.abs(this.lastZ-i.z),(n>this.options.threshold&&r>this.options.threshold||n>this.options.threshold&&h>this.options.threshold||r>this.options.threshold&&h>this.options.threshold)&&(o=new Date,s=o.getTime()-this.lastTime.getTime(),s>this.options.timeout&&(t.dispatchEvent(this.event),this.lastTime=new Date)),this.lastX=i.x,this.lastY=i.y,void(this.lastZ=i.z))},o.prototype.handleEvent=function(t){return"function"==typeof this[t.type]?this[t.type](t):void 0},o})},function(t,e){t.exports="<div style=display:none></div>"},function(t,e,o){var s,i;s=o(1),i=o(3),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});