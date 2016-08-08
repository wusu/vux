/*!
 * Vux v0.1.3-rc7 (https://vux.li)
 * Licensed under the MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxSwitch=t():e.vuxSwitch=t()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(6),s=i(n);t["default"]={components:{InlineDesc:s["default"]},computed:{labelStyle:function(){var e=/<\/?[^>]*>/.test(this.title),t=Math.min(e?5:this.title.length+1,14)+"em";return{width:t}}},props:{title:{type:String,required:!0},disabled:{type:Boolean,"default":!1},value:{type:Boolean},inlineDesc:String},ready:function(){},watch:{value:function(e){this.$emit("on-change",e)}}}},function(e,t){},function(e,t){},function(e,t){e.exports="<span class=vux-label-desc><slot></slot></span>"},function(e,t){e.exports='<div class="weui_cell weui_cell_switch"> <div class="weui_cell_hd weui_cell_primary"> <label class=weui_label :style=labelStyle v-html=title></label> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class=weui_cell_ft> <input class=weui_switch type=checkbox :disabled=disabled v-model=value /> </div> </div>'},function(e,t,o){var i,n;o(3),n=o(4),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,o){var i,n;o(2),i=o(1),n=o(5),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}])});