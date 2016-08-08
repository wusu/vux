/*!
 * Vux v0.1.3-rc7 (https://vux.li)
 * Licensed under the MIT license
 */
!function(e,s){"object"==typeof exports&&"object"==typeof module?module.exports=s():"function"==typeof define&&define.amd?define([],s):"object"==typeof exports?exports.vuxSearch=s():e.vuxSearch=s()}(this,function(){return function(e){function s(t){if(i[t])return i[t].exports;var c=i[t]={exports:{},id:t,loaded:!1};return e[t].call(c.exports,c,c.exports,s),c.loaded=!0,c.exports}var i={};return s.m=e,s.c=i,s.p="",s(0)}([function(e,s,i){e.exports=i(4)},function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s["default"]={props:{placeholder:{type:String,"default":"Search"},cancelText:{type:String,"default":"cancel"},value:{type:String,twoWay:!0,"default":""},results:{type:Array,"default":function(){return[]}},autoFixed:{type:Boolean,"default":!0}},methods:{clear:function(){this.value="",this.isFocus=!0,this.setFocus()},cancel:function(){this.value="",this.isCancel=!0,this.isFixed=!1,this.$emit("on-cancel")},handleResultClick:function(e){this.$emit("result-click",e),this.isCancel=!0,this.isFixed=!1},touch:function(){this.isCancel=!1,this.autoFixed&&(this.isFixed=!0)},setFocus:function(){this.$els.input.focus()}},data:function(){return{isCancel:!0,isFocus:!1,isFixed:!1}},watch:{isFixed:function(e){e===!0?(this.$el.classList.add("vux-search-fixed"),this.setFocus(),this.isFocus=!0):this.$el.classList.remove("vux-search-fixed")},value:function(e){this.$emit("on-change",this.value)}}}},function(e,s){},function(e,s){e.exports='<div class=vux-search-box> <div class=weui_search_bar id=search_bar :class="{weui_search_focusing: !isCancel}"> <form class=weui_search_outer @submit.prevent="$emit(\'on-submit\', value)"> <div class=vux-search-mask @click=touch v-show=!isFixed></div> <div class=weui_search_inner> <i class=weui_icon_search></i> <input type=text class=weui_search_input id=search_input placeholder={{placeholder}} autocomplete=off required v-model=value v-el:input/> <a href=javascript: class=weui_icon_clear id=search_clear @click=clear></a> </div> <label for=search_input class=weui_search_text id=search_text> <i class=weui_icon_search></i> <span>{{placeholder}}</span> </label> </form> <a href=javascript: class=weui_search_cancel id=search_cancel @click=cancel>{{cancelText}}</a> </div> <div class="weui_cells weui_cells_access vux-search_show" id=search_show v-show="isFixed && results.length && value"> <div class=weui_cell v-for="item in results" @click=handleResultClick(item)> <div class="weui_cell_bd weui_cell_primary"> <p>{{item.title}}</p> </div> </div> </div> </div>'},function(e,s,i){var t,c;i(2),t=i(1),c=i(3),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports["default"]),c&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=c)}])});