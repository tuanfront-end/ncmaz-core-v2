!function(){"use strict";var e,r={914:function(){var e=window.wp.blocks,r=window.wp.element,n=window.wp.i18n,o=window.wp.blockEditor,t=JSON.parse('{"u2":"create-block/ncmaz-core"}');(0,e.registerBlockType)(t.u2,{edit:function(){return(0,r.createElement)("p",(0,o.useBlockProps)(),(0,n.__)("Todo List – hello from the editor!","ncmaz-core"))},save:function(){return(0,r.createElement)("p",o.useBlockProps.save(),"Todo List – hello from the saved content!")}})}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,e=[],o.O=function(r,n,t,i){if(!n){var c=1/0;for(f=0;f<e.length;f++){n=e[f][0],t=e[f][1],i=e[f][2];for(var u=!0,l=0;l<n.length;l++)(!1&i||c>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(u=!1,i<c&&(c=i));if(u){e.splice(f--,1);var s=t();void 0!==s&&(r=s)}}return r}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[n,t,i]},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={225:0,631:0};o.O.j=function(r){return 0===e[r]};var r=function(r,n){var t,i,c=n[0],u=n[1],l=n[2],s=0;if(c.some((function(r){return 0!==e[r]}))){for(t in u)o.o(u,t)&&(o.m[t]=u[t]);if(l)var f=l(o)}for(r&&r(n);s<c.length;s++)i=c[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(f)},n=self.webpackChunktodo_list=self.webpackChunktodo_list||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var t=o.O(void 0,[631],(function(){return o(914)}));t=o.O(t)}();