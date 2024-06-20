(()=>{"use strict";var e,t={890:()=>{const e=window.React,t=window.wp.blocks,a=window.wp.i18n,n=window.wp.components,l=window.wp.blockEditor,r=({className:t="bg-neutral-100 dark:bg-black dark:bg-opacity-20 "})=>(0,e.createElement)("div",{className:`nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${t}`}),i=({className:t="text-neutral-700 dark:text-neutral-200",translate:a="",sizeClass:n="px-4 py-3 sm:px-6",fontSize:l="text-sm sm:text-base font-medium",disabled:r=!1,href:i,children:o,targetBlank:c,type:s,loading:m,onClick:d=(()=>{})})=>{const u=`nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors focus:outline-none ${l} ${n} ${a} ${t} `;return i?(0,e.createElement)("a",{href:i,target:c?"_blank":void 0,className:`${u} `,onClick:d,rel:"noopener noreferrer"},o||"This is Link"):(0,e.createElement)("button",{disabled:r||m,className:`${u}`,onClick:d,type:s},m&&(0,e.createElement)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},(0,e.createElement)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),(0,e.createElement)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})),o||"This is Button")},o=({className:t="",...a})=>(0,e.createElement)(i,{className:`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${t}`,...a}),c=({className:t="",description:a="Become an author you can earn extra income by writing articles. Read and share new perspectives on just about any topic. Everyone’s welcome.",heading:n="Become an author and share your great stories",smallText:l="supper change your planning powers",buttonText:r="Become an author",buttonHref:i="/#",rightImg:c="",rightImgMediaSrcSet:s})=>(0,e.createElement)("div",{className:`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${t}`,"data-nc-id":"SectionBecomeAnAuthor"},(0,e.createElement)("div",{className:"flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5"},(0,e.createElement)("span",{className:"text-xs uppercase tracking-wider font-medium text-neutral-400"},l),(0,e.createElement)("h2",{className:"font-semibold text-3xl sm:text-4xl mt-3"},n),(0,e.createElement)("span",{className:"block mt-8 text-neutral-500 dark:text-neutral-400"},a),(0,e.createElement)(o,{href:i,className:"mt-8"},r)),(0,e.createElement)("div",{className:"flex-grow"},s?(0,e.createElement)("img",{className:"max-w-full",src:c,alt:"become an author image",srcSet:s,sizes:"(max-width: 768px) 100vw, 768px"}):(0,e.createElement)("img",{className:"max-w-full",src:c,alt:"become an author image",sizes:"(max-width: 768px) 100vw, 768px"})));function s(t){const{attributes:i,setAttributes:o,clientId:s}=t,{hasBackground:m,headingSmallText:d,heading:u,description:g,buttonText:p,buttonHref:h,mediaId:x,mediaUrl:b,mediaSrcSet:w}=i,E=e=>{o({mediaId:e.id,mediaUrl:e.url,mediaSrcSet:`${e.url} ${e.width}w, ${e.sizes?.medium?.url} ${e.sizes?.medium?.width}w, ${e.sizes?.full?.url} ${e.sizes?.full?.width}w, ${e.sizes?.large?.url} ${e.sizes?.large?.width}w`})};return(0,e.createElement)("div",{...(0,l.useBlockProps)()},(0,e.createElement)(l.InspectorControls,{key:"setting"},(0,e.createElement)("div",{"data-type":"ncmaz-core/sidebar-settings"},(0,e.createElement)(n.Panel,{header:"Section settings"},(0,e.createElement)(n.PanelBody,{initialOpen:!0,title:"General settings"},(0,e.createElement)(n.PanelRow,null,(0,e.createElement)("div",null,(0,e.createElement)(n.TextControl,{label:"Heading small text",value:d,onChange:e=>o({headingSmallText:e})}),(0,e.createElement)(n.TextControl,{label:"Heading",value:u,onChange:e=>o({heading:e})}),(0,e.createElement)(n.TextareaControl,{label:"Description",value:g,onChange:e=>o({description:e})}),(0,e.createElement)(n.TextControl,{label:"Button Text",value:p,onChange:e=>o({buttonText:e})}),(0,e.createElement)(n.TextControl,{label:"Button Link",value:h,onChange:e=>o({buttonHref:e})}),(0,e.createElement)("div",{className:"editor-post-featured-image mb-3"},(0,e.createElement)(l.MediaUploadCheck,null,(0,e.createElement)(l.MediaUpload,{onSelect:E,value:x,allowedTypes:["image"],render:({open:t})=>(0,e.createElement)(n.Button,{className:"h-auto "+(0==x?"editor-post-featured-image__toggle":"editor-post-featured-image__preview"),onClick:t},0==x&&(0,a.__)("Choose an image","ncmaz-core"),!!b&&(0,e.createElement)("img",{src:b,className:"w-full block",sizes:"250px",srcSet:w||void 0}))})),0!==x&&(0,e.createElement)(l.MediaUploadCheck,null,(0,e.createElement)(l.MediaUpload,{title:(0,a.__)("Replace image","ncmaz-core"),value:x,onSelect:E,allowedTypes:["image"],render:({open:t})=>(0,e.createElement)(n.Button,{onClick:t,isSmall:!1},(0,a.__)("Replace image","ncmaz-core"))})),0!==x&&(0,e.createElement)(l.MediaUploadCheck,null,(0,e.createElement)(n.Button,{onClick:()=>{o({mediaId:0,mediaUrl:"",mediaSrcSet:void 0})},isLink:!0,isDestructive:!0},(0,a.__)("Remove image","ncmaz-core")))),(0,e.createElement)("div",{className:"w-full space-x-3 flex "},(0,e.createElement)(n.FormToggle,{checked:m,onChange:()=>o({hasBackground:!m}),label:(0,a.__)("Enable Background","ncmaz-core")}),(0,e.createElement)("legend",null,(0,a.__)("Enable Background","ncmaz-core"))))))))),(0,e.createElement)("div",{className:m?"py-16":""},m&&(0,e.createElement)(r,null),(0,e.createElement)(c,{heading:u,description:g,smallText:d,buttonHref:h,buttonText:p,rightImg:b,rightImgMediaSrcSet:w||void 0})))}const m=JSON.parse('{"UU":"ncmaz-core/block-become-author"}');console.log("-----BECOME AUTHOR BLOCK - MAIN CSS ----------");const{Fragment:d}=wp.element,{withSelect:u}=wp.data,{__}=wp.i18n;(0,t.registerBlockType)(m.UU,{edit:u(((e,t)=>({media:t.attributes.mediaId?e("core").getMedia(t.attributes.mediaId):void 0})))((t=>(0,e.createElement)(e.Suspense,{fallback:(0,e.createElement)(n.Spinner,null)},(0,e.createElement)(s,{...t})))),save:function(t){const{attributes:a}=t,{hasBackground:n,headingSmallText:i,heading:o,description:s,buttonText:m,buttonHref:d,mediaUrl:u,mediaId:g,mediaSrcSet:p}=a;return(0,e.createElement)("div",{...l.useBlockProps.save()},(0,e.createElement)("div",{className:"relative "+(n?"py-16":"")},n&&(0,e.createElement)(r,null),(0,e.createElement)(c,{heading:o,description:s,smallText:i,buttonHref:d,buttonText:m,rightImg:u,rightImgMediaSrcSet:p})))}})}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,l,r)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){for(var[a,l,r]=e[m],o=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(o=!1,r<i&&(i=r));if(o){e.splice(m--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[a,l,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={41:0,253:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,r,[i,o,c]=a,s=0;if(i.some((t=>0!==e[t]))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(c)var m=c(n)}for(t&&t(a);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},a=globalThis.webpackChunkncmaz_core=globalThis.webpackChunkncmaz_core||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[253],(()=>n(890)));l=n.O(l)})();