/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block-videos/edit.tsx":
/*!***********************************!*\
  !*** ./src/block-videos/edit.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frontend-components/BackgroundSection/BackgroundSection */ "./src/frontend-components/BackgroundSection/BackgroundSection.tsx");
/* harmony import */ var _frontend_components_SectionVideos_SectionVideos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontend-components/SectionVideos/SectionVideos */ "./src/frontend-components/SectionVideos/SectionVideos.tsx");







function Edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  //
  const {
    hasBackground,
    heading,
    subHeading,
    videoIds
  } = attributes;
  const renderSidebarSettings = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      key: "setting"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "data-type": "ncmaz-core/sidebar-settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, {
      header: "Section settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      initialOpen: true,
      title: "General settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Heading",
      value: heading,
      onChange: heading => setAttributes({
        heading
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
      label: "Sub heading",
      value: subHeading,
      onChange: subHeading => setAttributes({
        subHeading
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mb-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "block text-sm -mb-3"
    }, "Youtube video IDs", " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://nghiaxchis.gitbook.io/ncmaz-wordpress/how-to/how-to-get-youtube-video-id",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-blue-500 underline"
    }, "(How to get video-id?)")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormTokenField, {
      value: videoIds,
      suggestions: [],
      onChange: videoIds => setAttributes({
        videoIds
      }),
      label: "",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter list Youtube ID", "ncmaz-core")
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full space-x-3 flex "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormToggle, {
      checked: hasBackground,
      onChange: () => setAttributes({
        hasBackground: !hasBackground
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Background", "ncmaz-core")
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Background", "ncmaz-core")))))))));
  };
  const renderPreviewContent = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: hasBackground ? "py-16" : ""
    }, hasBackground && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionVideos_SectionVideos__WEBPACK_IMPORTED_MODULE_5__["default"], {
      heading: heading,
      subHeading: subHeading,
      videoIds: videoIds
    }));
  };

  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  }, renderSidebarSettings(), renderPreviewContent());
}

/***/ }),

/***/ "./src/block-videos/index.js":
/*!***********************************!*\
  !*** ./src/block-videos/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-videos/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-videos/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/block-videos/save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-videos/block.json");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);



/**
 * Internal dependencies
 */






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  edit: props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props
  })),
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  attributes: {
    hasBackground: {
      type: "boolean",
      default: false
    },
    heading: {
      type: "string",
      default: "🎬 The Videos"
    },
    subHeading: {
      type: "string",
      default: `Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome.`
    },
    videoIds: {
      type: "array",
      default: []
    }
  }
});

/***/ }),

/***/ "./src/block-videos/save.tsx":
/*!***********************************!*\
  !*** ./src/block-videos/save.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



function Save(props) {
  const {
    attributes
  } = props;
  const {
    hasBackground,
    heading,
    videoIds,
    subHeading
  } = attributes;
  const variable = {
    settings: {
      hasBackground,
      heading,
      subHeading,
      videoIds
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    "data-nc-gutenberg-section": true,
    "data-nc-gutenberg-section-type": "block-videos",
    "data-nc-gutenberg-section-api": JSON.stringify(variable)
  });
}

/***/ }),

/***/ "./src/frontend-components/BackgroundSection/BackgroundSection.tsx":
/*!*************************************************************************!*\
  !*** ./src/frontend-components/BackgroundSection/BackgroundSection.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const BackgroundSection = ({
  className = "bg-neutral-100 dark:bg-black dark:bg-opacity-20 "
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${className}`
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundSection);

/***/ }),

/***/ "./src/frontend-components/Heading/Heading.tsx":
/*!*****************************************************!*\
  !*** ./src/frontend-components/Heading/Heading.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NextPrev_NextPrev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NextPrev/NextPrev */ "./src/frontend-components/NextPrev/NextPrev.tsx");



const Heading = ({
  children,
  desc = "Discover the most outstanding articles in all topics of life. ",
  className = "mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  hasNextPrev = false,
  ...args
}) => {
  if (!children && !desc) return null;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: isCenter ? "text-center w-full max-w-2xl mx-auto " : "max-w-2xl"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `!text-3xl md:!text-4xl !font-semibold !m-0`,
    ...args
  }, children || `Section Heading`), desc && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "!mt-2 md:!mt-3 !font-normal block !text-base sm:!text-xl text-neutral-500 dark:text-neutral-400"
  }, desc)), hasNextPrev && !isCenter && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NextPrev_NextPrev__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClickNext: () => {},
    onClickPrev: () => {}
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);

/***/ }),

/***/ "./src/frontend-components/NcPlayIcon/NcPlayIcon.tsx":
/*!***********************************************************!*\
  !*** ./src/frontend-components/NcPlayIcon/NcPlayIcon.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const NcPlayIcon = ({
  className = ""
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-NcPlayIcon bg-white bg-opacity-30 backdrop-filter backdrop-blur rounded-full w-20 h-20 p-3 lg:w-52 lg:h-52 lg:p-12 ${className}`,
    "data-nc-id": "NcPlayIcon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full h-full bg-white rounded-full text-primary-500 relative"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "absolute inset-0 flex items-center justify-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-8 h-8 md:w-12 md:h-12",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M18.25 12L5.75 5.75V18.25L18.25 12Z"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NcPlayIcon);

/***/ }),

/***/ "./src/frontend-components/NcPlayIcon2/NcPlayIcon2.tsx":
/*!*************************************************************!*\
  !*** ./src/frontend-components/NcPlayIcon2/NcPlayIcon2.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const NcPlayIcon2 = ({
  className = "w-8 h-8 md:w-10 md:h-10",
  iconClass = "w-5 h-5"
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-NcPlayIcon2 bg-white relative rounded-full shadow-inner ${className}`,
    "data-nc-id": "NcPlayIcon2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "absolute inset-0 flex items-center justify-center text-primary-500"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: iconClass,
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1",
    d: "M18.25 12L5.75 5.75V18.25L18.25 12Z"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NcPlayIcon2);

/***/ }),

/***/ "./src/frontend-components/NextPrev/NextPrev.tsx":
/*!*******************************************************!*\
  !*** ./src/frontend-components/NextPrev/NextPrev.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const NextPrev = ({
  containerClassName = "",
  onClickNext = () => {},
  onClickPrev = () => {},
  btnClassName = "w-10 h-10",
  onlyNext = false,
  onlyPrev = false
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-NextPrev relative flex items-center text-neutral-900 dark:text-neutral-300 ${containerClassName}`,
    "data-nc-id": "NextPrev",
    "data-glide-el": "controls"
  }, !onlyNext && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${btnClassName} ${!onlyPrev ? "mr-[6px]" : ""} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,
    onClick: onClickPrev,
    title: "Prev",
    "data-glide-dir": "<"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "las la-angle-left"
  })), !onlyPrev && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${btnClassName} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none`,
    onClick: onClickNext,
    title: "Next",
    "data-glide-dir": ">"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "las la-angle-right"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextPrev);

/***/ }),

/***/ "./src/frontend-components/SectionVideos/SectionVideos.tsx":
/*!*****************************************************************!*\
  !*** ./src/frontend-components/SectionVideos/SectionVideos.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Heading/Heading */ "./src/frontend-components/Heading/Heading.tsx");
/* harmony import */ var _NcPlayIcon_NcPlayIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NcPlayIcon/NcPlayIcon */ "./src/frontend-components/NcPlayIcon/NcPlayIcon.tsx");
/* harmony import */ var _NcPlayIcon2_NcPlayIcon2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NcPlayIcon2/NcPlayIcon2 */ "./src/frontend-components/NcPlayIcon2/NcPlayIcon2.tsx");





const SectionVideos = ({
  videoIds = [],
  className = "",
  heading = "",
  subHeading = ""
}) => {
  const [isPlay, setIsPlay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [currentVideo, setCurrentVideo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const renderMainVideo = () => {
    const videoId = videoIds[currentVideo];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px]"
    }, isPlay ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
      src: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      onClick: () => setIsPlay(true),
      className: "cursor-pointer absolute inset-0 flex items-center justify-center z-10"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcPlayIcon_NcPlayIcon__WEBPACK_IMPORTED_MODULE_2__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0 "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 nc-will-change-transform",
      src: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    }))));
  };
  const renderSubVideo = (videoId, index) => {
    if (index === currentVideo) return null;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "group relative aspect-h-16 aspect-w-16 rounded-2xl cursor-pointer overflow-hidden sm:aspect-h-12 sm:rounded-3xl lg:aspect-h-9",
      onClick: () => {
        setCurrentVideo(index);
        !isPlay && setIsPlay(true);
      },
      key: String(index)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0 flex items-center justify-center z-10"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NcPlayIcon2_NcPlayIcon2__WEBPACK_IMPORTED_MODULE_3__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0  w-full h-full"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-300 nc-will-change-transform",
      src: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    })));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-SectionVideos ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Heading_Heading__WEBPACK_IMPORTED_MODULE_1__["default"], {
    desc: subHeading
  }, heading), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col relative sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute -top-4 -bottom-4 -right-4 w-2/3 rounded-3xl bg-primary-100 bg-opacity-40 z-0 sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0 xl:w-1/2 dark:bg-neutral-800 dark:bg-opacity-40"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6"
  }, renderMainVideo()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40"
  }, videoIds.map(renderSubVideo))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionVideos);

/***/ }),

/***/ "./src/block-videos/style.scss":
/*!*************************************!*\
  !*** ./src/block-videos/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block-videos/block.json":
/*!*************************************!*\
  !*** ./src/block-videos/block.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ncmaz-core/block-videos","version":"0.1.0","title":"ncmaz block videos","category":"widgets","icon":"smiley","description":"Example static block scaffolded with Create Block tool.","supports":{"html":false},"textdomain":"ncmaz-core","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block-videos/index": 0,
/******/ 			"block-videos/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkncmaz_core"] = globalThis["webpackChunkncmaz_core"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-videos/style-index"], () => (__webpack_require__("./src/block-videos/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map