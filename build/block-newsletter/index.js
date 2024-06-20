/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block-newsletter/edit.tsx":
/*!***************************************!*\
  !*** ./src/block-newsletter/edit.tsx ***!
  \***************************************/
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
/* harmony import */ var _frontend_components_Badge_Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontend-components/Badge/Badge */ "./src/frontend-components/Badge/Badge.tsx");







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
    descLists,
    mediaUrl,
    mediaId,
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
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormTokenField, {
      value: descLists,
      suggestions: [],
      onChange: descLists => setAttributes({
        descLists
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
      }, mediaId == 0 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Choose an image", "awp"), !!mediaUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: mediaUrl,
        className: "w-full block",
        sizes: "250px",
        srcSet: mediaSrcSet || undefined
      }))
    })), mediaId !== 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace image", "awp"),
      value: mediaId,
      onSelect: onSelectMedia,
      allowedTypes: ["image"],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Replace image", "awp"))
    })), mediaId !== 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: removeMedia,
      isLink: true,
      isDestructive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove image", "awp")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
    }, hasBackground && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center `,
      "data-nc-id": "SectionSubscribe2"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "font-semibold text-4xl"
    }, heading), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "block mt-6 text-neutral-500 dark:text-neutral-400"
    }, subHeading), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "space-y-5 !mt-10"
    }, descLists.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "flex items-center space-x-4"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_Badge_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: index % 2 === 0 ? "pink" : "green",
      name: `0${index + 1}`
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "font-medium text-neutral-700 dark:text-neutral-300"
    }, item)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mt-10 relative max-w-sm"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      template: [["core/shortcode", {}]],
      templateLock: "all"
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-grow"
    }, mediaUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: mediaUrl,
      className: "w-full block",
      sizes: "(max-width: 768px) 100vw, 768px",
      srcSet: mediaSrcSet || undefined,
      alt: ""
    }))));
  };

  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()
  }, renderSidebarSettings(), renderPreviewContent());
}

/***/ }),

/***/ "./src/block-newsletter/index.js":
/*!***************************************!*\
  !*** ./src/block-newsletter/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-newsletter/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-newsletter/edit.tsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/block-newsletter/save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-newsletter/block.json");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);



/**
 * Internal dependencies
 */







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
  // 	hasBackground: { type: "boolean", default: false },
  // 	heading: {
  // 		type: "string",
  // 		default: "Join our newsletter 🎉",
  // 	},
  // 	subHeading: {
  // 		type: "string",
  // 		default:
  // 			"Read and share new perspectives on just about any topic. Everyone’s welcome.",
  // 	},
  // 	mediaId: { type: "number", default: 0 },
  // 	mediaUrl: { type: "string", default: "" },
  // 	mediaSrcSet: { type: "string", default: "" },
  // 	descLists: { type: "array", default: [] },
  // },
});

/***/ }),

/***/ "./src/block-newsletter/save.tsx":
/*!***************************************!*\
  !*** ./src/block-newsletter/save.tsx ***!
  \***************************************/
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
/* harmony import */ var _frontend_components_Badge_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontend-components/Badge/Badge */ "./src/frontend-components/Badge/Badge.tsx");





function Save(props) {
  const {
    attributes
  } = props;
  const {
    hasBackground,
    heading,
    subHeading,
    descLists,
    mediaUrl,
    mediaId,
    mediaSrcSet
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: hasBackground ? "relative py-16" : ""
  }, hasBackground && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_BackgroundSection_BackgroundSection__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center `,
    "data-nc-id": "SectionSubscribe2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-semibold text-4xl"
  }, heading), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block mt-6 text-neutral-500 dark:text-neutral-400"
  }, subHeading), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "space-y-5 !mt-10"
  }, descLists.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: index,
    className: "flex items-center space-x-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_frontend_components_Badge_Badge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: index % 2 === 0 ? "pink" : "green",
    name: `0${index + 1}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "font-medium text-neutral-700 dark:text-neutral-300"
  }, item)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nc-SectionSubscribe2__shortcode-wrap mt-10 relative max-w-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-grow"
  }, mediaUrl ? !!mediaSrcSet ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    srcSet: mediaSrcSet,
    src: mediaUrl,
    className: "w-full",
    sizes: "(max-width: 768px) 100vw, 768px",
    alt: "newsletter right image"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: mediaUrl,
    className: "w-full",
    sizes: "(max-width: 768px) 100vw, 768px",
    alt: "newsletter right image"
  }) : null))));
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

/***/ "./src/frontend-components/Badge/Badge.tsx":
/*!*************************************************!*\
  !*** ./src/frontend-components/Badge/Badge.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Badge = ({
  className = "relative",
  name,
  color = "pink",
  href = ""
}) => {
  const getColorClass = (hasHover = true) => {
    switch (color) {
      case "pink":
        return `text-pink-800 bg-pink-100 ${hasHover ? "hover:bg-pink-800" : ""}`;
      case "red":
        return `text-red-800 bg-red-100 ${hasHover ? "hover:bg-red-800" : ""}`;
      case "gray":
        return `text-gray-800 bg-gray-100 ${hasHover ? "hover:bg-gray-800" : ""}`;
      case "green":
        return `text-green-800 bg-green-100 ${hasHover ? "hover:bg-green-800" : ""}`;
      case "purple":
        return `text-purple-800 bg-purple-100 ${hasHover ? "hover:bg-purple-800" : ""}`;
      case "indigo":
        return `text-indigo-800 bg-indigo-100 ${hasHover ? "hover:bg-indigo-800" : ""}`;
      case "yellow":
        return `text-yellow-800 bg-yellow-100 ${hasHover ? "hover:bg-yellow-800" : ""}`;
      case "blue":
        return `text-blue-800 bg-blue-100 ${hasHover ? "hover:bg-blue-800" : ""}`;
      default:
        return `text-pink-800 bg-pink-100 ${hasHover ? "hover:bg-pink-800" : ""}`;
    }
  };
  const CLASSES = "nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs " + className;
  return !!href ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: href || "",
    className: `transition-colors hover:text-white duration-300 ${CLASSES} ${getColorClass()}`
  }, name) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${CLASSES} ${getColorClass(false)} ${className}`
  }, name);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);

/***/ }),

/***/ "./src/block-newsletter/style.scss":
/*!*****************************************!*\
  !*** ./src/block-newsletter/style.scss ***!
  \*****************************************/
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

/***/ "./src/block-newsletter/block.json":
/*!*****************************************!*\
  !*** ./src/block-newsletter/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ncmaz-core/block-newsletter","version":"0.1.0","title":"ncmaz block newsletter","category":"widgets","icon":"smiley","description":"Example static block scaffolded with Create Block tool.","supports":{"html":false},"textdomain":"ncmaz-core","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"block-newsletter/index": 0,
/******/ 			"block-newsletter/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block-newsletter/style-index"], () => (__webpack_require__("./src/block-newsletter/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map