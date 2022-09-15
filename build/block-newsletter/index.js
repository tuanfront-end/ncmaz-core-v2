!function(){"use strict";var e,t={546:function(){var e=window.wp.element,t=window.wp.blocks,a=window.React,l=window.wp.i18n,n=window.wp.components,r=window.wp.blockEditor,c=t=>{let{className:a="bg-neutral-100 dark:bg-black dark:bg-opacity-20 "}=t;return(0,e.createElement)("div",{className:`nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${a}`})},i=t=>{let{className:a="relative",name:l,color:n="pink",href:r=""}=t;const c=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];switch(n){case"pink":default:return"text-pink-800 bg-pink-100 "+(e?"hover:bg-pink-800":"");case"red":return"text-red-800 bg-red-100 "+(e?"hover:bg-red-800":"");case"gray":return"text-gray-800 bg-gray-100 "+(e?"hover:bg-gray-800":"");case"green":return"text-green-800 bg-green-100 "+(e?"hover:bg-green-800":"");case"purple":return"text-purple-800 bg-purple-100 "+(e?"hover:bg-purple-800":"");case"indigo":return"text-indigo-800 bg-indigo-100 "+(e?"hover:bg-indigo-800":"");case"yellow":return"text-yellow-800 bg-yellow-100 "+(e?"hover:bg-yellow-800":"");case"blue":return"text-blue-800 bg-blue-100 "+(e?"hover:bg-blue-800":"")}},i="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs "+a;return r?(0,e.createElement)("a",{href:r||"",className:`transition-colors hover:text-white duration-300 ${i} ${c()}`},l):(0,e.createElement)("span",{className:`${i} ${c(!1)} ${a}`},l)};function s(t){const{attributes:a,setAttributes:s,clientId:o}=t,{hasBackground:m,heading:d,subHeading:u,descLists:g,mediaUrl:p,mediaId:b,mediaSrcSet:v}=a,f=e=>{var t,a,l,n,r,c;s({mediaId:e.id,mediaUrl:e.url,mediaSrcSet:`${e.url} 1297w, ${null===(t=e.sizes)||void 0===t||null===(a=t.medium)||void 0===a?void 0:a.url} 300w, ${null===(l=e.sizes)||void 0===l||null===(n=l.full)||void 0===n?void 0:n.url} 1024w, ${null===(r=e.sizes)||void 0===r||null===(c=r.large)||void 0===c?void 0:c.url} 768w`})};return(0,e.createElement)("div",(0,r.useBlockProps)(),(0,e.createElement)(r.InspectorControls,{key:"setting"},(0,e.createElement)("div",{"data-type":"ncmaz-core/sidebar-settings"},(0,e.createElement)(n.Panel,{header:"Section settings"},(0,e.createElement)(n.PanelBody,{initialOpen:!0,title:"General settings"},(0,e.createElement)(n.PanelRow,null,(0,e.createElement)("div",null,(0,e.createElement)(n.TextControl,{label:"Heading",value:d,onChange:e=>s({heading:e})}),(0,e.createElement)(n.TextareaControl,{label:"Sub heading",value:u,onChange:e=>s({subHeading:e})}),(0,e.createElement)("div",{className:"mb-3"},(0,e.createElement)(n.FormTokenField,{value:g,suggestions:[],onChange:e=>s({descLists:e})})),(0,e.createElement)("div",{className:"editor-post-featured-image mb-3"},(0,e.createElement)(r.MediaUploadCheck,null,(0,e.createElement)(r.MediaUpload,{onSelect:f,value:b,allowedTypes:["image"],render:t=>{let{open:a}=t;return(0,e.createElement)(n.Button,{className:0==b?"editor-post-featured-image__toggle":"editor-post-featured-image__preview",onClick:a},0==b&&(0,l.__)("Choose an image","awp"),!!p&&(0,e.createElement)("img",{src:p,className:"w-full"}))}})),0!==b&&(0,e.createElement)(r.MediaUploadCheck,null,(0,e.createElement)(r.MediaUpload,{title:(0,l.__)("Replace image","awp"),value:b,onSelect:f,allowedTypes:["image"],render:t=>{let{open:a}=t;return(0,e.createElement)(n.Button,{onClick:a},(0,l.__)("Replace image","awp"))}})),0!==b&&(0,e.createElement)(r.MediaUploadCheck,null,(0,e.createElement)(n.Button,{onClick:()=>{s({mediaId:0,mediaUrl:"",mediaSrcSet:""})},isLink:!0,isDestructive:!0},(0,l.__)("Remove image","awp")))),(0,e.createElement)("div",{className:"w-full space-x-3 flex "},(0,e.createElement)(n.FormToggle,{checked:m,onChange:()=>s({hasBackground:!m}),label:(0,l.__)("Enable Background","ncmaz-core")}),(0,e.createElement)("legend",null,(0,l.__)("Enable Background","ncmaz-core"))))))))),(0,e.createElement)("div",{className:m?"py-16":""},m&&(0,e.createElement)(c,null),(0,e.createElement)("div",{className:"nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center ","data-nc-id":"SectionSubscribe2"},(0,e.createElement)("div",{className:"flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5"},(0,e.createElement)("h2",{className:"font-semibold text-4xl"},d),(0,e.createElement)("span",{className:"block mt-6 text-neutral-500 dark:text-neutral-400"},u),(0,e.createElement)("ul",{className:"space-y-5 !mt-10"},g.map(((t,a)=>(0,e.createElement)("li",{className:"flex items-center space-x-4"},(0,e.createElement)(i,{color:a%2==0?"pink":"green",name:`0${a+1}`}),(0,e.createElement)("span",{className:"font-medium text-neutral-700 dark:text-neutral-300"},t))))),(0,e.createElement)("div",{className:"mt-10 relative max-w-sm"},(0,e.createElement)(r.InnerBlocks,{template:[["core/shortcode",{}]],templateLock:"all"}))),(0,e.createElement)("div",{className:"flex-grow"},p&&(0,e.createElement)("img",{src:p,className:"w-full",alt:""})))))}var o=JSON.parse('{"u2":"ncmaz-core/block-newsletter"}');const{Fragment:m}=wp.element,{withSelect:d}=wp.data,{__:__}=wp.i18n;(0,t.registerBlockType)(o.u2,{edit:d(((e,t)=>({media:t.attributes.mediaId?e("core").getMedia(t.attributes.mediaId):void 0})))((t=>(0,e.createElement)(a.Suspense,{fallback:(0,e.createElement)(n.Spinner,null)},(0,e.createElement)(s,t)))),save:function(t){const{attributes:a}=t,{hasBackground:l,heading:n,subHeading:s,descLists:o,mediaUrl:m,mediaId:d,mediaSrcSet:u}=a;return(0,e.createElement)("div",r.useBlockProps.save(),(0,e.createElement)("div",{className:l?"relative py-16":""},l&&(0,e.createElement)(c,null),(0,e.createElement)("div",{className:"nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center ","data-nc-id":"SectionSubscribe2"},(0,e.createElement)("div",{className:"flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5"},(0,e.createElement)("h2",{className:"font-semibold text-4xl"},n),(0,e.createElement)("span",{className:"block mt-6 text-neutral-500 dark:text-neutral-400"},s),(0,e.createElement)("ul",{className:"space-y-5 !mt-10"},o.map(((t,a)=>(0,e.createElement)("li",{key:a,className:"flex items-center space-x-4"},(0,e.createElement)(i,{color:a%2==0?"pink":"green",name:`0${a+1}`}),(0,e.createElement)("span",{className:"font-medium text-neutral-700 dark:text-neutral-300"},t))))),(0,e.createElement)("div",{className:"nc-SectionSubscribe2__shortcode-wrap mt-10 relative max-w-sm"},(0,e.createElement)(r.InnerBlocks.Content,null))),(0,e.createElement)("div",{className:"flex-grow"},m?u?(0,e.createElement)("img",{srcSet:u,src:m,className:"w-full",sizes:"(max-width: 1297px) 100vw, 1297px",alt:"newsletter right image"}):(0,e.createElement)("img",{src:m,className:"w-full",alt:"newsletter right image"}):null))))},attributes:{hasBackground:{type:"boolean",default:!1},heading:{type:"string",default:"Join our newsletter 🎉"},subHeading:{type:"string",default:"Read and share new perspectives on just about any topic. Everyone’s welcome."},mediaId:{type:"number",default:0},mediaUrl:{type:"string",default:""},mediaSrcSet:{type:"string",default:""},descLists:{type:"array",default:[]}}})}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,a,n,r){if(!a){var c=1/0;for(m=0;m<e.length;m++){a=e[m][0],n=e[m][1],r=e[m][2];for(var i=!0,s=0;s<a.length;s++)(!1&r||c>=r)&&Object.keys(l.O).every((function(e){return l.O[e](a[s])}))?a.splice(s--,1):(i=!1,r<c&&(c=r));if(i){e.splice(m--,1);var o=n();void 0!==o&&(t=o)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,n,r]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={494:0,596:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,c=a[0],i=a[1],s=a[2],o=0;if(c.some((function(t){return 0!==e[t]}))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(s)var m=s(l)}for(t&&t(a);o<c.length;o++)r=c[o],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(m)},a=self.webpackChunktodo_list=self.webpackChunktodo_list||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var n=l.O(void 0,[596],(function(){return l(546)}));n=l.O(n)}();