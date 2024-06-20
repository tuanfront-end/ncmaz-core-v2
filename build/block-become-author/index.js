/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block-become-author/edit.tsx":
/*!******************************************!*\
  !*** ./src/block-become-author/edit.tsx ***!
  \******************************************/
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
/* harmony import */ var _frontend_components_SectionBecomeAnAuthor_SectionBecomeAnAuthor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor */ "./src/frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor.tsx");







function Edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  //
  const {
    hasBackground,
    headingSmallText,
    heading,
    description,
    buttonText,
    buttonHref,
    mediaId,
    mediaUrl,
    mediaSrcSet
  } = attributes;
  const removeMedia = () => {
    setAttributes({
      mediaId: 0,
      mediaUrl: "",
      mediaSrcSet: undefined
    });
  };
  const onSelectMedia = media => {
    setAttributes({
      mediaId: media.id,
      mediaUrl: media.url,
      mediaSrcSet: `${media.url} ${media.width}w, ${media.sizes?.medium?.url} ${media.sizes?.medium?.width}w, ${media.sizes?.full?.url} ${media.sizes?.full?.width}w, ${media.sizes?.large?.url} ${media.sizes?.large?.width}w`
    });
  };
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
      label: "Heading small text",
      value: headingSmallText,
      onChange: headingSmallText => setAttributes({
        headingSmallText
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Heading",
      value: heading,
      onChange: heading => setAttributes({
        heading
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
      label: "Description",
      value: description,
      onChange: description => setAttributes({
        description
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Button Text",
      value: buttonText,
      onChange: buttonText => setAttributes({
        buttonText
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Button Link",
      value: buttonHref,
      onChange: buttonHref => setAttributes({
        buttonHref
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "editor-post-featured-image mb-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      onSelect: onSelectMedia,
      value: mediaId,
      allowedTypes: ["image"],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: `h-auto ${mediaId == 0 ? "editor-post-featured-image__toggle" : "editor-post-featured-image__preview"}`,
        onClick: open
      }, mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Choose an image", "ncmaz-core"), !!mediaUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: mediaUrl,
        className: "w-full block",
        sizes: "250px",
        srcSet: mediaSrcSet || undefined
      }))
    })), mediaId !== 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace image", "ncmaz-core"),
      value: mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ["image"],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        isSmall: false
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace image", "ncmaz-core"))
    })), mediaId !== 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove image", "ncmaz-core")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
    }, hasBackground && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionBecomeAnAuthor_SectionBecomeAnAuthor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      heading: heading,
      description: description,
      smallText: headingSmallText,
      buttonHref: buttonHref,
      buttonText: buttonText,
      rightImg: mediaUrl,
      rightImgMediaSrcSet: mediaSrcSet || undefined
    }));
  };

  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  }, renderSidebarSettings(), renderPreviewContent());
}

/***/ }),

/***/ "./src/block-become-author/index.js":
/*!******************************************!*\
  !*** ./src/block-become-author/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-become-author/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-become-author/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/block-become-author/save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-become-author/block.json");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "./node_modules/@glidejs/glide/dist/css/glide.core.min.css");



/**
 * Internal dependencies
 */







//------------------ TAILWINDCSS AND COMMON CSS -----------------


//-----------------------------------------
console.log("-----BECOME AUTHOR BLOCK - MAIN CSS ----------");
//
const {
  Fragment
} = wp.element;
const {
  withSelect
} = wp.data;
const {
  __
} = wp.i18n;
//

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  edit: withSelect((select, props) => {
    return {
      media: props.attributes.mediaId ? select("core").getMedia(props.attributes.mediaId) : undefined
    };
  })(props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props
  }))),
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
  // attributes: {
  // 	hasBackground: { type: "boolean", default: true },
  // 	headingSmallText: {
  // 		type: "string",
  // 		default: "supper change your planning powers",
  // 	},
  // 	heading: {
  // 		type: "string",
  // 		default: "Become an author and share your great stories",
  // 	},
  // 	description: {
  // 		type: "string",
  // 		default: `Become an author you can earn extra income by writing articles. Read
  // 	and share new perspectives on just about any topic. Everyone’s welcome.`,
  // 	},
  // 	buttonText: { type: "string", default: "Become an author" },
  // 	buttonHref: { type: "string", default: "/#" },
  // 	mediaId: { type: "number", default: 0 },
  // 	mediaUrl: { type: "string", default: "" },
  // 	mediaSrcSet: { type: "string", default: "" },
  // },
});

/***/ }),

/***/ "./src/block-become-author/save.tsx":
/*!******************************************!*\
  !*** ./src/block-become-author/save.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontend-components/BackgroundSection/BackgroundSection */ "./src/frontend-components/BackgroundSection/BackgroundSection.tsx");
/* harmony import */ var _frontend_components_SectionBecomeAnAuthor_SectionBecomeAnAuthor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor */ "./src/frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor.tsx");





function Save(props) {
  const {
    attributes
  } = props;
  const {
    hasBackground,
    headingSmallText,
    heading,
    description,
    buttonText,
    buttonHref,
    mediaUrl,
    mediaId,
    mediaSrcSet
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `relative ${hasBackground ? "py-16" : ""}`
  }, hasBackground && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_SectionBecomeAnAuthor_SectionBecomeAnAuthor__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heading: heading,
    description: description,
    smallText: headingSmallText,
    buttonHref: buttonHref,
    buttonText: buttonText,
    rightImg: mediaUrl,
    rightImgMediaSrcSet: mediaSrcSet
  })));
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

/***/ "./src/frontend-components/Button/Button.tsx":
/*!***************************************************!*\
  !*** ./src/frontend-components/Button/Button.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Button = ({
  className = "text-neutral-700 dark:text-neutral-200",
  translate = "",
  sizeClass = "px-4 py-3 sm:px-6",
  fontSize = "text-sm sm:text-base font-medium",
  disabled = false,
  href,
  children,
  targetBlank,
  type,
  loading,
  onClick = () => {}
}) => {
  const CLASSES = `nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors focus:outline-none ${fontSize} ${sizeClass} ${translate} ${className} `;
  const _renderLoading = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      className: "animate-spin -ml-1 mr-3 h-5 w-5",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
      className: "opacity-25",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "3"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      className: "opacity-75",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }));
  };
  if (!!href) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: href,
      target: targetBlank ? "_blank" : undefined,
      className: `${CLASSES} `,
      onClick: onClick,
      rel: "noopener noreferrer"
    }, children || `This is Link`);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: disabled || loading,
    className: `${CLASSES}`,
    onClick: onClick,
    type: type
  }, loading && _renderLoading(), children || `This is Button`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/frontend-components/Button/ButtonPrimary.tsx":
/*!**********************************************************!*\
  !*** ./src/frontend-components/Button/ButtonPrimary.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/frontend-components/Button/Button.tsx");



const ButtonPrimary = ({
  className = "",
  ...args
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: `ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`,
    ...args
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonPrimary);

/***/ }),

/***/ "./src/frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor.tsx":
/*!*********************************************************************************!*\
  !*** ./src/frontend-components/SectionBecomeAnAuthor/SectionBecomeAnAuthor.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_ButtonPrimary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/ButtonPrimary */ "./src/frontend-components/Button/ButtonPrimary.tsx");



const SectionBecomeAnAuthor = ({
  className = "",
  description = `Become an author you can earn extra income by writing articles. Read and share new perspectives on just about any topic. Everyone’s welcome.`,
  heading = "Become an author and share your great stories",
  smallText = "supper change your planning powers",
  buttonText = "Become an author",
  buttonHref = "/#",
  rightImg = "",
  rightImgMediaSrcSet
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`,
    "data-nc-id": "SectionBecomeAnAuthor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-xs uppercase tracking-wider font-medium text-neutral-400"
  }, smallText), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-semibold text-3xl sm:text-4xl mt-3"
  }, heading), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block mt-8 text-neutral-500 dark:text-neutral-400"
  }, description), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button_ButtonPrimary__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: buttonHref,
    className: "mt-8"
  }, buttonText)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-grow"
  }, !!rightImgMediaSrcSet ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "max-w-full",
    src: rightImg,
    alt: "become an author image",
    srcSet: rightImgMediaSrcSet,
    sizes: "(max-width: 768px) 100vw, 768px"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "max-w-full",
    src: rightImg,
    alt: "become an author image",
    sizes: "(max-width: 768px) 100vw, 768px"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionBecomeAnAuthor);

/***/ }),

/***/ "./node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-become-author/style.scss":
/*!********************************************!*\
  !*** ./src/block-become-author/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
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

/***/ "./src/block-become-author/block.json":
/*!********************************************!*\
  !*** ./src/block-become-author/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ncmaz-core/block-become-author","version":"0.1.0","title":"ncmaz block become author","category":"widgets","icon":"smiley","description":"Example static block scaffolded with Create Block tool.","supports":{"html":false},"textdomain":"ncmaz-core","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"block-become-author/index": 0,
/******/ 			"block-become-author/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-become-author/style-index"], () => (__webpack_require__("./src/block-become-author/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map