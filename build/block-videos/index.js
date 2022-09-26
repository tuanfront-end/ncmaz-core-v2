!function(){"use strict";var e,t={614:function(){var e=window.wp.element,t=window.wp.blocks,r=window.React,a=window.wp.i18n,n=window.wp.components,l=window.wp.blockEditor,o=t=>{let{className:r="bg-neutral-100 dark:bg-black dark:bg-opacity-20 "}=t;return(0,e.createElement)("div",{className:`nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${r}`})};function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}var c=t=>{let{containerClassName:r="",onClickNext:a=(()=>{}),onClickPrev:n=(()=>{}),btnClassName:l="w-10 h-10",onlyNext:o=!1,onlyPrev:s=!1}=t;return(0,e.createElement)("div",{className:`nc-NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 ${r}`,"data-nc-id":"NextPrev","data-glide-el":"controls"},!o&&(0,e.createElement)("button",{className:`${l} ${s?"":"mr-[6px]"} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,onClick:n,title:"Prev","data-glide-dir":"<"},(0,e.createElement)("i",{className:"las la-angle-left"})),!s&&(0,e.createElement)("button",{className:`${l} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,onClick:a,title:"Next","data-glide-dir":">"},(0,e.createElement)("i",{className:"las la-angle-right"})))},i=t=>{let{children:r,desc:a="Discover the most outstanding articles in all topics of life. ",className:n="mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50",isCenter:l=!1,hasNextPrev:o=!1,...i}=t;return r||a?(0,e.createElement)("div",{className:`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${n}`},(0,e.createElement)("div",{className:l?"text-center w-full max-w-2xl mx-auto ":"max-w-2xl"},(0,e.createElement)("h2",s({className:"!text-3xl md:!text-4xl !font-semibold !m-0"},i),r||"Section Heading"),a&&(0,e.createElement)("span",{className:"!mt-2 md:!mt-3 !font-normal block !text-base sm:!text-xl text-neutral-500 dark:text-neutral-400"},a)),o&&!l&&(0,e.createElement)("div",{className:"mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0"},(0,e.createElement)(c,{onClickNext:()=>{},onClickPrev:()=>{}}))):null},d=t=>{let{className:r=""}=t;return(0,e.createElement)("div",{className:`nc-NcPlayIcon bg-white bg-opacity-30 backdrop-filter backdrop-blur rounded-full w-20 h-20 p-3 lg:w-52 lg:h-52 lg:p-12 ${r}`,"data-nc-id":"NcPlayIcon"},(0,e.createElement)("div",{className:"w-full h-full bg-white rounded-full text-primary-500 relative"},(0,e.createElement)("span",{className:"absolute inset-0 flex items-center justify-center"},(0,e.createElement)("svg",{className:"w-8 h-8 md:w-12 md:h-12",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},(0,e.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"})))))},m=t=>{let{className:r="w-8 h-8 md:w-10 md:h-10",iconClass:a="w-5 h-5"}=t;return(0,e.createElement)("div",{className:`nc-NcPlayIcon2 bg-white relative rounded-full shadow-inner ${r}`,"data-nc-id":"NcPlayIcon2"},(0,e.createElement)("span",{className:"absolute inset-0 flex items-center justify-center text-primary-500"},(0,e.createElement)("svg",{className:a,width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},(0,e.createElement)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1",d:"M18.25 12L5.75 5.75V18.25L18.25 12Z"}))))},u=t=>{let{videoIds:a=[],className:n="",heading:l="",subHeading:o=""}=t;const[s,c]=(0,r.useState)(!1),[u,g]=(0,r.useState)(0);return(0,e.createElement)("div",{className:`nc-SectionVideos ${n}`},(0,e.createElement)(i,{desc:o},l),(0,e.createElement)("div",{className:"flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row"},(0,e.createElement)("div",{className:"absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"}),(0,e.createElement)("div",{className:"flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6"},(()=>{const t=a[u];return(0,e.createElement)("div",{className:"group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px]"},s?(0,e.createElement)("iframe",{src:`https://www.youtube.com/embed/${t}?autoplay=1`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{onClick:()=>c(!0),className:"cursor-pointer absolute inset-0 flex items-center justify-center z-10"},(0,e.createElement)(d,null)),(0,e.createElement)("div",{className:"absolute inset-0 "},(0,e.createElement)("img",{className:"object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 nc-will-change-transform",src:`https://img.youtube.com/vi/${t}/maxresdefault.jpg`}))))})()),(0,e.createElement)("div",{className:"flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40"},a.map(((t,r)=>r===u?null:(0,e.createElement)("div",{className:"group relative aspect-h-16 aspect-w-16 rounded-2xl cursor-pointer overflow-hidden sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9",onClick:()=>{g(r),!s&&c(!0)},key:String(r)},(0,e.createElement)("div",{className:"absolute inset-0 flex items-center justify-center z-10"},(0,e.createElement)(m,null)),(0,e.createElement)("div",{className:"absolute inset-0  w-full h-full"},(0,e.createElement)("img",{className:"object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-300 nc-will-change-transform",src:`https://img.youtube.com/vi/${t}/mqdefault.jpg`}))))))))};function g(t){const{attributes:r,setAttributes:s,clientId:c}=t,{hasBackground:i,heading:d,subHeading:m,videoIds:g}=r;return(0,e.createElement)("div",(0,l.useBlockProps)(),(0,e.createElement)(l.InspectorControls,{key:"setting"},(0,e.createElement)("div",{"data-type":"ncmaz-core/sidebar-settings"},(0,e.createElement)(n.Panel,{header:"Section settings"},(0,e.createElement)(n.PanelBody,{initialOpen:!0,title:"General settings"},(0,e.createElement)(n.PanelRow,null,(0,e.createElement)("div",null,(0,e.createElement)(n.TextControl,{label:"Heading",value:d,onChange:e=>s({heading:e})}),(0,e.createElement)(n.TextareaControl,{label:"Sub heading",value:m,onChange:e=>s({subHeading:e})}),(0,e.createElement)("div",{className:"mb-3"},(0,e.createElement)("span",{className:"block text-sm -mb-3"},"Youtube video IDs"," ",(0,e.createElement)("a",{href:"https://nghiaxchis.gitbook.io/ncmaz-wordpress/how-to/how-to-get-youtube-video-id",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline"},"(How to get video-id?)")),(0,e.createElement)(n.FormTokenField,{value:g,suggestions:[],onChange:e=>s({videoIds:e}),label:"",placeholder:(0,a.__)("Enter list Youtube ID","ncmaz-core")})),(0,e.createElement)("div",{className:"w-full space-x-3 flex "},(0,e.createElement)(n.FormToggle,{checked:i,onChange:()=>s({hasBackground:!i}),label:(0,a.__)("Enable Background","ncmaz-core")}),(0,e.createElement)("legend",null,(0,a.__)("Enable Background","ncmaz-core"))))))))),(0,e.createElement)("div",{className:i?"py-16":""},i&&(0,e.createElement)(o,null),(0,e.createElement)(u,{heading:d,subHeading:m,videoIds:g})))}var p=JSON.parse('{"u2":"ncmaz-core/block-videos"}');(0,t.registerBlockType)(p.u2,{edit:t=>(0,e.createElement)(r.Suspense,{fallback:(0,e.createElement)(n.Spinner,null)},(0,e.createElement)(g,t)),save:function(t){const{attributes:r}=t,{hasBackground:a,heading:n,videoIds:o,subHeading:c}=r,i={settings:{hasBackground:a,heading:n,subHeading:c,videoIds:o}};return(0,e.createElement)("div",s({},l.useBlockProps.save(),{"data-nc-gutenberg-section":!0,"data-nc-gutenberg-section-type":"block-videos","data-nc-gutenberg-section-api":JSON.stringify(i)}))},attributes:{hasBackground:{type:"boolean",default:!1},heading:{type:"string",default:"🎬 The Videos"},subHeading:{type:"string",default:"Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome."},videoIds:{type:"array",default:[]}}})}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=function(t,r,n,l){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],l=e[d][2];for(var s=!0,c=0;c<r.length;c++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(s=!1,l<o&&(o=l));if(s){e.splice(d--,1);var i=n();void 0!==i&&(t=i)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[r,n,l]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={667:0,179:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,l,o=r[0],s=r[1],c=r[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(c)var d=c(a)}for(t&&t(r);i<o.length;i++)l=o[i],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},r=self.webpackChunkncmaz_core=self.webpackChunkncmaz_core||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=a.O(void 0,[179],(function(){return a(614)}));n=a.O(n)}();