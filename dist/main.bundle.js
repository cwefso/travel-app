/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../node_modules/node-fetch/browser.js":
/*!********************************************************!*\
  !*** /Users/cwefso/node_modules/node-fetch/browser.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  background-color: #c4cef4;\n  font-family: 'Open Sans', sans-serif; }\n\n.login-page {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%; }\n\nbutton {\n  background-color: #5c7ad4;\n  color: #fffeec;\n  border-radius: 15px;\n  padding: 2%;\n  margin-top: 5%;\n  cursor: pointer; }\n\n.login-card {\n  all: unset;\n  background-color: #fffae4;\n  border: 5px solid #fffeec;\n  border-radius: 15px;\n  color: #5c7ad4;\n  font-weight: bold;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 400px;\n  width: 400px; }\n\ninput {\n  width: 40%;\n  height: 5vh;\n  font-size: 3vh;\n  border-radius: 15px; }\n\n.hide {\n  display: none; }\n\nul {\n  text-align: left; }\n\nheader {\n  background-color: #fffae4;\n  color: #5c4a24;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  border: 5px solid #fffeec;\n  font-size: xxx-large;\n  height: 20%;\n  margin: 0;\n  text-align: center;\n  border-radius: 15px; }\n\n.card {\n  all: unset;\n  background-color: #fffae4;\n  border: 5px solid #fffeec;\n  border-radius: 15px;\n  color: #5c4a24;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: fit-content;\n  width: 100%;\n  margin: 5%; }\n\n.main-page {\n  display: grid;\n  grid-template-areas: \"side header\" \"side main\";\n  grid-template-columns: 1.5r 4fr;\n  grid-template-rows: 1fr 8fr; }\n\n.main-header {\n  grid-area: header;\n  background-color: #c4cef4;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  height: fit-content; }\n\n.sidebar {\n  grid-area: side;\n  background-color: #5c7ad4;\n  border-radius: 15px;\n  height: 100%;\n  width: 100%; }\n\n.user-card {\n  border-radius: 15px; }\n\n.new-trip {\n  background-color: #5c7ad4;\n  color: #fffae4;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: inherit; }\n\n.cards-area {\n  grid-area: main;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(auto, 1fr);\n  background-color: #c4cef4;\n  height: fit-content;\n  width: 100%; }\n\n.user-card {\n  background-color: #fffae4; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/agent.js":
/*!**********************!*\
  !*** ./src/agent.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");



class Agent extends _user__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(id) {
    super(id);
    this.username = 'agency'
    this.trip = {}
    this.revenue = 0
    this.todaysTravelers = []
  }

  async getData() {
    this.trips = await _fetch__WEBPACK_IMPORTED_MODULE_1__["default"].getTripsData()
    this.destinatationData = await _fetch__WEBPACK_IMPORTED_MODULE_1__["default"].getDestinationsData()
    this.getDestinations()
    this.getDestinationsIDs()
    this.todaysTravel()
    this.totalRevenue()
    this.showAgentPage()
  }

  totalRevenue() {
    let total = 0
    let costs = this.trips.forEach(trip => {
      total += trip.cost
    })
    let revenue = total + (total / 10)

    this.revenue = revenue
    return costs
  }

  todaysTravel() {
    let travelers = this.trips.filter(trip => trip.date === "2020/06/29")
    let allTravelersToday = 0
    let todays = travelers.forEach(traveler => {
      allTravelersToday += traveler.travelers
      this.todaysTravelers.push(traveler)
    })
    return allTravelersToday
  }

  getPending() {
    let pendingTrips = this.trips.filter(trip => trip.status === "pending")
    this.pendingTrips = pendingTrips
    return pendingTrips
  }

  showAgentPage() {
    this.showRevenue()
    this.getPending()
    this.showPending()
    this.dom.toggleLogin()
    const cardsArea = document.querySelector('.cards-area')
    let builtData = this.todaysTravelers.forEach(trip =>{
      cardsArea.insertAdjacentHTML('beforeend', 
      ` <section class="card">
        <p>UserID: ${trip.userID}</p>
        <p>Trip Data: ${trip.date}</p>
        <p>DestinationID ${trip.destinationID}</p>
        <p>Duration ${trip.duration}</p>
        <p>TripID ${trip.id}</p>
        <p>Status ${trip.status}</p>
        <p>Suggested Activities ${trip.suggestActivities}</p>
        <p>Travelers ${trip.travelers}</p>
        <p>Locale ${trip.locale}</p>
      </section>`)
    })
    return builtData
  }
  
  showRevenue() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.insertAdjacentHTML('beforeend', 
    `<section class="user-card">
      <section class="user-name">
        <p>Agent</p>
      </section> 
    <section class="total-revenue">
      <p>Total Revenue: $${this.revenue}</p>
    </section>
    </section>`)
  }

  showPending() {
    const mainHeader = document.querySelector('.main-header')
    let pending = this.pendingTrips.forEach(trip => {
      mainHeader.insertAdjacentHTML('beforeend', 
      `<section class="pending">${trip.locale}-${trip.date}</section>`
      )
    })
  }

  // New trip requests (a user’s “pending” trips)
  // Total income generated this year (should be 10% of user trip cost)
  // Travelers on trips for today’s date (number, names, however you want to display this!)
}

/* harmony default export */ __webpack_exports__["default"] = (Agent);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agent */ "./src/agent.js");
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./traveler */ "./src/traveler.js");






class DomUpdates {
  constructor() {
    this.tripsData;
    this.loginData = {};
    this.traveler = {};
    this.agent = {};
    this.nameBox = document.querySelector('.username');
    this.passwordBox = document.querySelector('.password')
  }

  makeProfile() {
    let userinput = this.nameBox.value
    let passwordinput = this.passwordBox.value
    this.loginData = {username : userinput, password : passwordinput}
    if (this.loginData.username.toLowerCase().includes('agency') && this.loginData.password === 'travel2020') {
      this.makeAgency()
    } else if (this.loginData.username.toLowerCase().includes('traveler') && this.loginData.password === 'travel2020') {
      this.makeTraveler()
    } else {
      alert('Invalid Login')
    }
  }
  
  makeAgency(){
    this.agent = new _agent__WEBPACK_IMPORTED_MODULE_2__["default"]()
    this.agent.getData()
  }
  
  makeTraveler() {
    var id = this.loginData.username.match(/(\d+)/);
    id = parseInt(id[0])
    this.traveler = new _traveler__WEBPACK_IMPORTED_MODULE_3__["default"](id)
    this.setTravelerData(id)
  }
  
  async setTravelerData(id) {
    await this.traveler.getData(id)
    await this.traveler.getTrips(id, this.tripsData)
    this.traveler.showTravelerPage(this.traveler.id)
  }

  toggleLogin() {
    const sidebar = document.querySelector('.sidebar')
    const cardsArea = document.querySelector('.cards-area')
    const mainHeader = document.querySelector('.main-header')
    const loginPage = document.querySelector('.login-page')    
    loginPage.classList.add('hide')
    sidebar.classList.remove('hide')
    mainHeader.classList.remove('hide')
    cardsArea.classList.remove('hide')
  }

  showUserSidebar(name, total) {
    const sidebar = document.querySelector('.sidebar')
    sidebar.insertAdjacentHTML('beforeend', 
    ` <section class="user-card">
        <section class="user-name">
          <p>Hello ${name}</p>
        </section> 
        <section class="total-spent">
          <p>Total Spent on Travel: $${total}</p>
        </section>
      </section>
      <section class="new-trip">
        <p>Destination</p>
      <select aria-label='Destination' class="destination-select" name="destination-select" id="destination-select">
      </select>
        <p>Date</p>
      <input aria-label='Date' id='new-date-input' class='date-input'>
      </input>
      <p>Duration</p>
      <input aria-label='Duration' id='duration-input' class='duration-input'>
      </input>
      <p>Number of Travelers</p>
      <input aria-label='Number of Travelers' id='travelers-number-input' class='travelers-number-input'>
      </input>
      <button aria-label="submit" id='submit' class='submit-trip'>
      Submit   
    </button>
    </section>`
    )
  }

  showUserCards(trips) {
    const cardsArea = document.querySelector('.cards-area')
    let builtData = trips.forEach(trip => { 
      cardsArea.insertAdjacentHTML('beforeend', 
      `<section class="card">
        <article class="card-header">
          <h1>Location: ${trip.locale}</h1>
          <h2>Trip Date: ${trip.date}</h2>
        </article>
          <ul>
            <li>Duration ${trip.duration}</li>
            <li>Status ${trip.status}</li>
            <li>Suggested Activities ${trip.suggestActivities}</li>
            <li>Travelers ${trip.travelers}</li>
            <li>Cost ${trip.cost}</li>
          </ul>
      </section>`)
    })
    return builtData
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DomUpdates);

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetch = __webpack_require__(/*! node-fetch */ "../../../../node_modules/node-fetch/browser.js")

var travelersUrl = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'
var tripsUrl = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'
var destinationsUrl = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations'



let data = {

  getTravelersData() {
    return fetch(travelersUrl)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data.travelers
      })
      .catch(err => {
        alert(err.message)
      })
  },

  getSpecificTravelerData(id) {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data
      })
      .catch(err => {
        alert(err.message)
      })
  },

  getTripsData() {
    return fetch(tripsUrl)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data.trips
      })
      .catch(err => {
        alert(err.message)
      })
  },

  getSpecificTravelerTrips(id) {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips/${id}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data
      })
      .catch(err => {
        alert(err.message)
      })
  },

  getDestinationsData() {
    return fetch(destinationsUrl)
      .then(res => {
        return res.json()
      })
      .then(data => {
        return data.destinations
      })
      .catch(err => {
        alert(err.message)
      })
  },

  requestTrip(id, userID, destinationID, travelers, date, duration, status, suggestedActivities) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'), {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: `${id}`, userID: `${userID}`, destinationID: `${destinationID}`, travelers: `${travelers}`, date: `${date}`, duration: `${duration}`, status: `${status}`, suggestedActivities: `${suggestedActivities}`})
      .then(response => response.json())
      .then(data => {
        return data.trips
      })
      .catch(err => {
        alert(err.message)
      })
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file



// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'



let travelersData
let tripsData
let destinationsData

let domUpdates = new _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"]()

const login = document.querySelector('.submit-login');

login.addEventListener('click', (event) => {
  event.preventDefault()
  domUpdates.makeProfile()
});

async function getData() {
  travelersData = await _fetch__WEBPACK_IMPORTED_MODULE_1__["default"].getTravelersData()
  tripsData = await _fetch__WEBPACK_IMPORTED_MODULE_1__["default"].getTripsData()
  destinationsData = await _fetch__WEBPACK_IMPORTED_MODULE_1__["default"].getDestinationsData()
  return () => {}
}


window.onload = getData()


/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/user.js");



class Traveler extends _user__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(id) {
    super(id);
  }

  async getData(id) {
    this.travelersData = await _fetch__WEBPACK_IMPORTED_MODULE_0__["default"].getSpecificTravelerData(id)
    let userTrips = await _fetch__WEBPACK_IMPORTED_MODULE_0__["default"].getTripsData()
    this.destinatationData = await _fetch__WEBPACK_IMPORTED_MODULE_0__["default"].getDestinationsData()
    this.name = this.travelersData.name
    this.travlerType = this.travelersData.travelerType
    this.trips = userTrips
    this.getTrips(this.id, this.trips)
    this.getDestinations()
    this.getDestinationsIDs()
    this.calcCost()
    this.showTravelerPage()
  }

  getTrips(id, trips) {
    let theseTrips = trips.filter(trip => trip.userID === id) 
    return this.trips = theseTrips
  }

  showTravelerPage() {
    this.dom.showUserSidebar(this.name, this.total)
    this.dom.toggleLogin()
    this.dom.showUserCards(this.trips)
    this.populateDestinationList()
    this.submitButton()
 }

  calcCost() {
    let total = 0
    let costs = this.trips.forEach(trip => {
      total += trip.cost + (trip.cost * .1)
    })
    this.total = total
    return costs
  }

  populateDestinationList() {
    const destinationList = document.querySelector('.destination-select')
    const locales = []
    let destinationNames = this.destinations.forEach(destination => {
      locales.push(destination.destination)
    })
    let sortedLocales = locales.sort()
    this.estimateNewTripCost()
    return sortedLocales.forEach(locale => {
      destinationList.insertAdjacentHTML('beforeend',
      `<option value="${locale}">${locale}</option>`
      )
    })
  }

  submitButton() {
    const submitButton = document.querySelector('.submit-trip')
    submitButton.addEventListener('click', (event) => {
      event.preventDefault()
      this.check()
    });
  }

  submitSelections() {
    const destinationSelection = document.getElementById('.destination-select').value
    const dateSelection = document.getElementById('.date-input').value
    const durationSelection = document.getElementById('.duration-input').value
    const numberOfTravelers = document.getElementById('.travelers-number-input').value
  }

  check() {
    console.log("hey")
  }

  estimateNewTripCost() {
    const destinationCosts = this.destinations.forEach(destination => {
      let cost = destination
    })
    return destinationCosts
  }


//     I will select a date, duration, number of travelers and choose from a list of destinations
// After making these selections, I should see an estimated cost (with a 10% travel agent fee) for the trip.
// Once I submit the trip request, it will show on my dashboard as “pending” so that the travel agency can approve or deny it.
//   
// flight cost =  destination.estimatedFlightCostPerPerson * (number of travelers input)
// lodging cost = destination.estimatedLodgingCostPerDay * (number of duration input)
//

}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");


class User {
  constructor(id){
    id !== undefined ? this.id = id : this.id = null
    this.username = 'traveler' + id
    this.password = 'travel2020'
    this.today = new Date();
    this.date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    this.destinations = []
    this.dom = new _domUpdates__WEBPACK_IMPORTED_MODULE_0__["default"]()
  }

  getDestinations() {
    let entries = Object.entries(this.destinatationData)
    return entries.forEach(entry => {
      this.destinations.push(entry[1])
    })
  }

  getDestinationsIDs() {
    let locales =  this.trips.forEach(trip => {
      let id = trip.destinationID
      let thisTrip = trip
      this.setDestinationNames(id, thisTrip)
      this.setCost(id, thisTrip)
    })
    return locales
  }

  setDestinationNames(id, thisTrip) {
    let setNames = this.destinations.forEach(destination => {
      if (destination.id === id) {
        thisTrip.locale = destination.destination
      }
    })
    return setNames
  }

  setCost(id, thisTrip) {
    let cost = this.destinations.forEach(destination => {
      if (destination.id === id) {
        thisTrip.cost = ((destination.estimatedLodgingCostPerDay + destination.estimatedFlightCostPerPerson) * thisTrip.travelers)
      }
    })
    return cost
  }

}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jd2Vmc28vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9iYTg5Iiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYXZlbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hELHFDQUFxQyxlQUFlO0FBQ3BELHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7O0FDdEJBLDJCQUEyQixtQkFBTyxDQUFDLHdHQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxTQUFTLDhCQUE4Qix5Q0FBeUMsRUFBRSxpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGtDQUFrQyxnQkFBZ0IsRUFBRSxZQUFZLDhCQUE4QixtQkFBbUIsd0JBQXdCLGdCQUFnQixtQkFBbUIsb0JBQW9CLEVBQUUsaUJBQWlCLGVBQWUsOEJBQThCLDhCQUE4Qix3QkFBd0IsbUJBQW1CLHNCQUFzQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsa0JBQWtCLGlCQUFpQixFQUFFLFdBQVcsZUFBZSxnQkFBZ0IsbUJBQW1CLHdCQUF3QixFQUFFLFdBQVcsa0JBQWtCLEVBQUUsUUFBUSxxQkFBcUIsRUFBRSxZQUFZLDhCQUE4QixtQkFBbUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsOEJBQThCLHlCQUF5QixnQkFBZ0IsY0FBYyx1QkFBdUIsd0JBQXdCLEVBQUUsV0FBVyxlQUFlLDhCQUE4Qiw4QkFBOEIsd0JBQXdCLG1CQUFtQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLGdCQUFnQixlQUFlLEVBQUUsZ0JBQWdCLGtCQUFrQix1REFBdUQsb0NBQW9DLGdDQUFnQyxFQUFFLGtCQUFrQixzQkFBc0IsOEJBQThCLGdCQUFnQixrQkFBa0Isd0JBQXdCLG9CQUFvQixrQ0FBa0Msd0JBQXdCLEVBQUUsY0FBYyxvQkFBb0IsOEJBQThCLHdCQUF3QixpQkFBaUIsZ0JBQWdCLEVBQUUsZ0JBQWdCLHdCQUF3QixFQUFFLGVBQWUsOEJBQThCLG1CQUFtQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix5QkFBeUIsRUFBRSxpQkFBaUIsb0JBQW9CLGtCQUFrQiwwQ0FBMEMsMENBQTBDLDhCQUE4Qix3QkFBd0IsZ0JBQWdCLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFOzs7Ozs7Ozs7Ozs7OztBQ0Y3eEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxvQkFBb0I7QUFDbkMsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7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QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBVTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVlLG1FIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWxcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIHRoZSBvbmx5IHJlbGlhYmxlIG1lYW5zIHRvIGdldCB0aGUgZ2xvYmFsIG9iamVjdCBpc1xuXHQvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcblx0Ly8gSG93ZXZlciwgdGhpcyBjYXVzZXMgQ1NQIHZpb2xhdGlvbnMgaW4gQ2hyb21lIGFwcHMuXG5cdGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH1cblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH1cblx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH1cblx0dGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QnKTtcbn1cblxudmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBnbG9iYWwuZmV0Y2g7XG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBhbmQgV2VicGFjay5cbmV4cG9ydHMuZGVmYXVsdCA9IGdsb2JhbC5mZXRjaC5iaW5kKGdsb2JhbCk7XG5cbmV4cG9ydHMuSGVhZGVycyA9IGdsb2JhbC5IZWFkZXJzO1xuZXhwb3J0cy5SZXF1ZXN0ID0gZ2xvYmFsLlJlcXVlc3Q7XG5leHBvcnRzLlJlc3BvbnNlID0gZ2xvYmFsLlJlc3BvbnNlOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjZWY0O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XFxuXFxuLmxvZ2luLXBhZ2Uge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjN2FkNDtcXG4gIGNvbG9yOiAjZmZmZWVjO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubG9naW4tY2FyZCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFlNDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmZlZWM7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY29sb3I6ICM1YzdhZDQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiA0MDBweDsgfVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgfVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG51bCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZTQ7XFxuICBjb2xvcjogIzVjNGEyNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZWVjO1xcbiAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7IH1cXG5cXG4uY2FyZCB7XFxuICBhbGw6IHVuc2V0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFlNDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmZlZWM7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY29sb3I6ICM1YzRhMjQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogNSU7IH1cXG5cXG4ubWFpbi1wYWdlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwic2lkZSBoZWFkZXJcXFwiIFxcXCJzaWRlIG1haW5cXFwiO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjsgfVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGNlZjQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50OyB9XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiBzaWRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjN2FkNDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi51c2VyLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgfVxcblxcbi5uZXctdHJpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM3YWQ0O1xcbiAgY29sb3I6ICNmZmZhZTQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGluaGVyaXQ7IH1cXG5cXG4uY2FyZHMtYXJlYSB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIDFmcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjZWY0O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnVzZXItY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWU0OyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2ZldGNoJztcblxuY2xhc3MgQWdlbnQgZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICBzdXBlcihpZCk7XG4gICAgdGhpcy51c2VybmFtZSA9ICdhZ2VuY3knXG4gICAgdGhpcy50cmlwID0ge31cbiAgICB0aGlzLnJldmVudWUgPSAwXG4gICAgdGhpcy50b2RheXNUcmF2ZWxlcnMgPSBbXVxuICB9XG5cbiAgYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICB0aGlzLnRyaXBzID0gYXdhaXQgZGF0YS5nZXRUcmlwc0RhdGEoKVxuICAgIHRoaXMuZGVzdGluYXRhdGlvbkRhdGEgPSBhd2FpdCBkYXRhLmdldERlc3RpbmF0aW9uc0RhdGEoKVxuICAgIHRoaXMuZ2V0RGVzdGluYXRpb25zKClcbiAgICB0aGlzLmdldERlc3RpbmF0aW9uc0lEcygpXG4gICAgdGhpcy50b2RheXNUcmF2ZWwoKVxuICAgIHRoaXMudG90YWxSZXZlbnVlKClcbiAgICB0aGlzLnNob3dBZ2VudFBhZ2UoKVxuICB9XG5cbiAgdG90YWxSZXZlbnVlKCkge1xuICAgIGxldCB0b3RhbCA9IDBcbiAgICBsZXQgY29zdHMgPSB0aGlzLnRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICB0b3RhbCArPSB0cmlwLmNvc3RcbiAgICB9KVxuICAgIGxldCByZXZlbnVlID0gdG90YWwgKyAodG90YWwgLyAxMClcblxuICAgIHRoaXMucmV2ZW51ZSA9IHJldmVudWVcbiAgICByZXR1cm4gY29zdHNcbiAgfVxuXG4gIHRvZGF5c1RyYXZlbCgpIHtcbiAgICBsZXQgdHJhdmVsZXJzID0gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLmRhdGUgPT09IFwiMjAyMC8wNi8yOVwiKVxuICAgIGxldCBhbGxUcmF2ZWxlcnNUb2RheSA9IDBcbiAgICBsZXQgdG9kYXlzID0gdHJhdmVsZXJzLmZvckVhY2godHJhdmVsZXIgPT4ge1xuICAgICAgYWxsVHJhdmVsZXJzVG9kYXkgKz0gdHJhdmVsZXIudHJhdmVsZXJzXG4gICAgICB0aGlzLnRvZGF5c1RyYXZlbGVycy5wdXNoKHRyYXZlbGVyKVxuICAgIH0pXG4gICAgcmV0dXJuIGFsbFRyYXZlbGVyc1RvZGF5XG4gIH1cblxuICBnZXRQZW5kaW5nKCkge1xuICAgIGxldCBwZW5kaW5nVHJpcHMgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuc3RhdHVzID09PSBcInBlbmRpbmdcIilcbiAgICB0aGlzLnBlbmRpbmdUcmlwcyA9IHBlbmRpbmdUcmlwc1xuICAgIHJldHVybiBwZW5kaW5nVHJpcHNcbiAgfVxuXG4gIHNob3dBZ2VudFBhZ2UoKSB7XG4gICAgdGhpcy5zaG93UmV2ZW51ZSgpXG4gICAgdGhpcy5nZXRQZW5kaW5nKClcbiAgICB0aGlzLnNob3dQZW5kaW5nKClcbiAgICB0aGlzLmRvbS50b2dnbGVMb2dpbigpXG4gICAgY29uc3QgY2FyZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWFyZWEnKVxuICAgIGxldCBidWlsdERhdGEgPSB0aGlzLnRvZGF5c1RyYXZlbGVycy5mb3JFYWNoKHRyaXAgPT57XG4gICAgICBjYXJkc0FyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBcbiAgICAgIGAgPHNlY3Rpb24gY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxwPlVzZXJJRDogJHt0cmlwLnVzZXJJRH08L3A+XG4gICAgICAgIDxwPlRyaXAgRGF0YTogJHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICA8cD5EZXN0aW5hdGlvbklEICR7dHJpcC5kZXN0aW5hdGlvbklEfTwvcD5cbiAgICAgICAgPHA+RHVyYXRpb24gJHt0cmlwLmR1cmF0aW9ufTwvcD5cbiAgICAgICAgPHA+VHJpcElEICR7dHJpcC5pZH08L3A+XG4gICAgICAgIDxwPlN0YXR1cyAke3RyaXAuc3RhdHVzfTwvcD5cbiAgICAgICAgPHA+U3VnZ2VzdGVkIEFjdGl2aXRpZXMgJHt0cmlwLnN1Z2dlc3RBY3Rpdml0aWVzfTwvcD5cbiAgICAgICAgPHA+VHJhdmVsZXJzICR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICA8cD5Mb2NhbGUgJHt0cmlwLmxvY2FsZX08L3A+XG4gICAgICA8L3NlY3Rpb24+YClcbiAgICB9KVxuICAgIHJldHVybiBidWlsdERhdGFcbiAgfVxuICBcbiAgc2hvd1JldmVudWUoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgICBzaWRlYmFyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgXG4gICAgYDxzZWN0aW9uIGNsYXNzPVwidXNlci1jYXJkXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cInVzZXItbmFtZVwiPlxuICAgICAgICA8cD5BZ2VudDwvcD5cbiAgICAgIDwvc2VjdGlvbj4gXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ0b3RhbC1yZXZlbnVlXCI+XG4gICAgICA8cD5Ub3RhbCBSZXZlbnVlOiAkJHt0aGlzLnJldmVudWV9PC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8L3NlY3Rpb24+YClcbiAgfVxuXG4gIHNob3dQZW5kaW5nKCkge1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXInKVxuICAgIGxldCBwZW5kaW5nID0gdGhpcy5wZW5kaW5nVHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIG1haW5IZWFkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBcbiAgICAgIGA8c2VjdGlvbiBjbGFzcz1cInBlbmRpbmdcIj4ke3RyaXAubG9jYWxlfS0ke3RyaXAuZGF0ZX08L3NlY3Rpb24+YFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICAvLyBOZXcgdHJpcCByZXF1ZXN0cyAoYSB1c2Vy4oCZcyDigJxwZW5kaW5n4oCdIHRyaXBzKVxuICAvLyBUb3RhbCBpbmNvbWUgZ2VuZXJhdGVkIHRoaXMgeWVhciAoc2hvdWxkIGJlIDEwJSBvZiB1c2VyIHRyaXAgY29zdClcbiAgLy8gVHJhdmVsZXJzIG9uIHRyaXBzIGZvciB0b2RheeKAmXMgZGF0ZSAobnVtYmVyLCBuYW1lcywgaG93ZXZlciB5b3Ugd2FudCB0byBkaXNwbGF5IHRoaXMhKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZ2VudCIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBkYXRhIGZyb20gJy4vZmV0Y2gnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBBZ2VudCBmcm9tICcuL2FnZW50JztcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL3RyYXZlbGVyJztcblxuXG5jbGFzcyBEb21VcGRhdGVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50cmlwc0RhdGE7XG4gICAgdGhpcy5sb2dpbkRhdGEgPSB7fTtcbiAgICB0aGlzLnRyYXZlbGVyID0ge307XG4gICAgdGhpcy5hZ2VudCA9IHt9O1xuICAgIHRoaXMubmFtZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybmFtZScpO1xuICAgIHRoaXMucGFzc3dvcmRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQnKVxuICB9XG5cbiAgbWFrZVByb2ZpbGUoKSB7XG4gICAgbGV0IHVzZXJpbnB1dCA9IHRoaXMubmFtZUJveC52YWx1ZVxuICAgIGxldCBwYXNzd29yZGlucHV0ID0gdGhpcy5wYXNzd29yZEJveC52YWx1ZVxuICAgIHRoaXMubG9naW5EYXRhID0ge3VzZXJuYW1lIDogdXNlcmlucHV0LCBwYXNzd29yZCA6IHBhc3N3b3JkaW5wdXR9XG4gICAgaWYgKHRoaXMubG9naW5EYXRhLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2FnZW5jeScpICYmIHRoaXMubG9naW5EYXRhLnBhc3N3b3JkID09PSAndHJhdmVsMjAyMCcpIHtcbiAgICAgIHRoaXMubWFrZUFnZW5jeSgpXG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2luRGF0YS51c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd0cmF2ZWxlcicpICYmIHRoaXMubG9naW5EYXRhLnBhc3N3b3JkID09PSAndHJhdmVsMjAyMCcpIHtcbiAgICAgIHRoaXMubWFrZVRyYXZlbGVyKClcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0ludmFsaWQgTG9naW4nKVxuICAgIH1cbiAgfVxuICBcbiAgbWFrZUFnZW5jeSgpe1xuICAgIHRoaXMuYWdlbnQgPSBuZXcgQWdlbnQoKVxuICAgIHRoaXMuYWdlbnQuZ2V0RGF0YSgpXG4gIH1cbiAgXG4gIG1ha2VUcmF2ZWxlcigpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmxvZ2luRGF0YS51c2VybmFtZS5tYXRjaCgvKFxcZCspLyk7XG4gICAgaWQgPSBwYXJzZUludChpZFswXSlcbiAgICB0aGlzLnRyYXZlbGVyID0gbmV3IFRyYXZlbGVyKGlkKVxuICAgIHRoaXMuc2V0VHJhdmVsZXJEYXRhKGlkKVxuICB9XG4gIFxuICBhc3luYyBzZXRUcmF2ZWxlckRhdGEoaWQpIHtcbiAgICBhd2FpdCB0aGlzLnRyYXZlbGVyLmdldERhdGEoaWQpXG4gICAgYXdhaXQgdGhpcy50cmF2ZWxlci5nZXRUcmlwcyhpZCwgdGhpcy50cmlwc0RhdGEpXG4gICAgdGhpcy50cmF2ZWxlci5zaG93VHJhdmVsZXJQYWdlKHRoaXMudHJhdmVsZXIuaWQpXG4gIH1cblxuICB0b2dnbGVMb2dpbigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAgIGNvbnN0IGNhcmRzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1hcmVhJylcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyJylcbiAgICBjb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tcGFnZScpICAgIFxuICAgIGxvZ2luUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIG1haW5IZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgY2FyZHNBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICB9XG5cbiAgc2hvd1VzZXJTaWRlYmFyKG5hbWUsIHRvdGFsKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgICBzaWRlYmFyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgXG4gICAgYCA8c2VjdGlvbiBjbGFzcz1cInVzZXItY2FyZFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInVzZXItbmFtZVwiPlxuICAgICAgICAgIDxwPkhlbGxvICR7bmFtZX08L3A+XG4gICAgICAgIDwvc2VjdGlvbj4gXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwidG90YWwtc3BlbnRcIj5cbiAgICAgICAgICA8cD5Ub3RhbCBTcGVudCBvbiBUcmF2ZWw6ICQke3RvdGFsfTwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJuZXctdHJpcFwiPlxuICAgICAgICA8cD5EZXN0aW5hdGlvbjwvcD5cbiAgICAgIDxzZWxlY3QgYXJpYS1sYWJlbD0nRGVzdGluYXRpb24nIGNsYXNzPVwiZGVzdGluYXRpb24tc2VsZWN0XCIgbmFtZT1cImRlc3RpbmF0aW9uLXNlbGVjdFwiIGlkPVwiZGVzdGluYXRpb24tc2VsZWN0XCI+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgICAgPHA+RGF0ZTwvcD5cbiAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPSdEYXRlJyBpZD0nbmV3LWRhdGUtaW5wdXQnIGNsYXNzPSdkYXRlLWlucHV0Jz5cbiAgICAgIDwvaW5wdXQ+XG4gICAgICA8cD5EdXJhdGlvbjwvcD5cbiAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPSdEdXJhdGlvbicgaWQ9J2R1cmF0aW9uLWlucHV0JyBjbGFzcz0nZHVyYXRpb24taW5wdXQnPlxuICAgICAgPC9pbnB1dD5cbiAgICAgIDxwPk51bWJlciBvZiBUcmF2ZWxlcnM8L3A+XG4gICAgICA8aW5wdXQgYXJpYS1sYWJlbD0nTnVtYmVyIG9mIFRyYXZlbGVycycgaWQ9J3RyYXZlbGVycy1udW1iZXItaW5wdXQnIGNsYXNzPSd0cmF2ZWxlcnMtbnVtYmVyLWlucHV0Jz5cbiAgICAgIDwvaW5wdXQ+XG4gICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJzdWJtaXRcIiBpZD0nc3VibWl0JyBjbGFzcz0nc3VibWl0LXRyaXAnPlxuICAgICAgU3VibWl0ICAgXG4gICAgPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPmBcbiAgICApXG4gIH1cblxuICBzaG93VXNlckNhcmRzKHRyaXBzKSB7XG4gICAgY29uc3QgY2FyZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLWFyZWEnKVxuICAgIGxldCBidWlsdERhdGEgPSB0cmlwcy5mb3JFYWNoKHRyaXAgPT4geyBcbiAgICAgIGNhcmRzQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIFxuICAgICAgYDxzZWN0aW9uIGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPkxvY2F0aW9uOiAke3RyaXAubG9jYWxlfTwvaDE+XG4gICAgICAgICAgPGgyPlRyaXAgRGF0ZTogJHt0cmlwLmRhdGV9PC9oMj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5EdXJhdGlvbiAke3RyaXAuZHVyYXRpb259PC9saT5cbiAgICAgICAgICAgIDxsaT5TdGF0dXMgJHt0cmlwLnN0YXR1c308L2xpPlxuICAgICAgICAgICAgPGxpPlN1Z2dlc3RlZCBBY3Rpdml0aWVzICR7dHJpcC5zdWdnZXN0QWN0aXZpdGllc308L2xpPlxuICAgICAgICAgICAgPGxpPlRyYXZlbGVycyAke3RyaXAudHJhdmVsZXJzfTwvbGk+XG4gICAgICAgICAgICA8bGk+Q29zdCAke3RyaXAuY29zdH08L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+YClcbiAgICB9KVxuICAgIHJldHVybiBidWlsdERhdGFcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvbVVwZGF0ZXMiLCJjb25zdCBmZXRjaCA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpXG5cbnZhciB0cmF2ZWxlcnNVcmwgPSAnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvdHJhdmVsZXJzL3RyYXZlbGVycydcbnZhciB0cmlwc1VybCA9ICdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS90cmlwcy90cmlwcydcbnZhciBkZXN0aW5hdGlvbnNVcmwgPSAnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvZGVzdGluYXRpb25zL2Rlc3RpbmF0aW9ucydcblxuXG5cbmxldCBkYXRhID0ge1xuXG4gIGdldFRyYXZlbGVyc0RhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKHRyYXZlbGVyc1VybClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLnRyYXZlbGVyc1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBhbGVydChlcnIubWVzc2FnZSlcbiAgICAgIH0pXG4gIH0sXG5cbiAgZ2V0U3BlY2lmaWNUcmF2ZWxlckRhdGEoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyYXZlbGVycy90cmF2ZWxlcnMvJHtpZH1gKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpXG4gICAgICB9KVxuICB9LFxuXG4gIGdldFRyaXBzRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2godHJpcHNVcmwpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS50cmlwc1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBhbGVydChlcnIubWVzc2FnZSlcbiAgICAgIH0pXG4gIH0sXG5cbiAgZ2V0U3BlY2lmaWNUcmF2ZWxlclRyaXBzKGlkKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS90cmlwcy90cmlwcy8ke2lkfWApXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBhbGVydChlcnIubWVzc2FnZSlcbiAgICAgIH0pXG4gIH0sXG5cbiAgZ2V0RGVzdGluYXRpb25zRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goZGVzdGluYXRpb25zVXJsKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGVzdGluYXRpb25zXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKVxuICAgICAgfSlcbiAgfSxcblxuICByZXF1ZXN0VHJpcChpZCwgdXNlcklELCBkZXN0aW5hdGlvbklELCB0cmF2ZWxlcnMsIGRhdGUsIGR1cmF0aW9uLCBzdGF0dXMsIHN1Z2dlc3RlZEFjdGl2aXRpZXMpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyaXBzL3RyaXBzJyksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtpZDogYCR7aWR9YCwgdXNlcklEOiBgJHt1c2VySUR9YCwgZGVzdGluYXRpb25JRDogYCR7ZGVzdGluYXRpb25JRH1gLCB0cmF2ZWxlcnM6IGAke3RyYXZlbGVyc31gLCBkYXRlOiBgJHtkYXRlfWAsIGR1cmF0aW9uOiBgJHtkdXJhdGlvbn1gLCBzdGF0dXM6IGAke3N0YXR1c31gLCBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBgJHtzdWdnZXN0ZWRBY3Rpdml0aWVzfWB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLnRyaXBzXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF0YSIsIi8vIFRoaXMgaXMgdGhlIEphdmFTY3JpcHQgZW50cnkgZmlsZSAtIHlvdXIgY29kZSBiZWdpbnMgaGVyZVxuLy8gRG8gbm90IGRlbGV0ZSBvciByZW5hbWUgdGhpcyBmaWxlICoqKioqKioqXG5cbi8vIEFuIGV4YW1wbGUgb2YgaG93IHlvdSB0ZWxsIHdlYnBhY2sgdG8gdXNlIGEgQ1NTIChTQ1NTKSBmaWxlXG5cbmltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcblxuLy8gQW4gZXhhbXBsZSBvZiBob3cgeW91IHRlbGwgd2VicGFjayB0byB1c2UgYW4gaW1hZ2UgKGFsc28gbmVlZCB0byBsaW5rIHRvIGl0IGluIHRoZSBpbmRleC5odG1sKVxuLy8gaW1wb3J0ICcuL2ltYWdlcy90dXJpbmctbG9nby5wbmcnXG5pbXBvcnQgZGF0YSBmcm9tICcuL2ZldGNoJztcbmltcG9ydCBEb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcydcblxubGV0IHRyYXZlbGVyc0RhdGFcbmxldCB0cmlwc0RhdGFcbmxldCBkZXN0aW5hdGlvbnNEYXRhXG5cbmxldCBkb21VcGRhdGVzID0gbmV3IERvbVVwZGF0ZXMoKVxuXG5jb25zdCBsb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtbG9naW4nKTtcblxubG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBkb21VcGRhdGVzLm1ha2VQcm9maWxlKClcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xuICB0cmF2ZWxlcnNEYXRhID0gYXdhaXQgZGF0YS5nZXRUcmF2ZWxlcnNEYXRhKClcbiAgdHJpcHNEYXRhID0gYXdhaXQgZGF0YS5nZXRUcmlwc0RhdGEoKVxuICBkZXN0aW5hdGlvbnNEYXRhID0gYXdhaXQgZGF0YS5nZXREZXN0aW5hdGlvbnNEYXRhKClcbiAgcmV0dXJuICgpID0+IHt9XG59XG5cblxud2luZG93Lm9ubG9hZCA9IGdldERhdGEoKVxuIiwiaW1wb3J0IGRhdGEgZnJvbSAnLi9mZXRjaCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuXG5jbGFzcyBUcmF2ZWxlciBleHRlbmRzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihpZCkge1xuICAgIHN1cGVyKGlkKTtcbiAgfVxuXG4gIGFzeW5jIGdldERhdGEoaWQpIHtcbiAgICB0aGlzLnRyYXZlbGVyc0RhdGEgPSBhd2FpdCBkYXRhLmdldFNwZWNpZmljVHJhdmVsZXJEYXRhKGlkKVxuICAgIGxldCB1c2VyVHJpcHMgPSBhd2FpdCBkYXRhLmdldFRyaXBzRGF0YSgpXG4gICAgdGhpcy5kZXN0aW5hdGF0aW9uRGF0YSA9IGF3YWl0IGRhdGEuZ2V0RGVzdGluYXRpb25zRGF0YSgpXG4gICAgdGhpcy5uYW1lID0gdGhpcy50cmF2ZWxlcnNEYXRhLm5hbWVcbiAgICB0aGlzLnRyYXZsZXJUeXBlID0gdGhpcy50cmF2ZWxlcnNEYXRhLnRyYXZlbGVyVHlwZVxuICAgIHRoaXMudHJpcHMgPSB1c2VyVHJpcHNcbiAgICB0aGlzLmdldFRyaXBzKHRoaXMuaWQsIHRoaXMudHJpcHMpXG4gICAgdGhpcy5nZXREZXN0aW5hdGlvbnMoKVxuICAgIHRoaXMuZ2V0RGVzdGluYXRpb25zSURzKClcbiAgICB0aGlzLmNhbGNDb3N0KClcbiAgICB0aGlzLnNob3dUcmF2ZWxlclBhZ2UoKVxuICB9XG5cbiAgZ2V0VHJpcHMoaWQsIHRyaXBzKSB7XG4gICAgbGV0IHRoZXNlVHJpcHMgPSB0cmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gaWQpIFxuICAgIHJldHVybiB0aGlzLnRyaXBzID0gdGhlc2VUcmlwc1xuICB9XG5cbiAgc2hvd1RyYXZlbGVyUGFnZSgpIHtcbiAgICB0aGlzLmRvbS5zaG93VXNlclNpZGViYXIodGhpcy5uYW1lLCB0aGlzLnRvdGFsKVxuICAgIHRoaXMuZG9tLnRvZ2dsZUxvZ2luKClcbiAgICB0aGlzLmRvbS5zaG93VXNlckNhcmRzKHRoaXMudHJpcHMpXG4gICAgdGhpcy5wb3B1bGF0ZURlc3RpbmF0aW9uTGlzdCgpXG4gICAgdGhpcy5zdWJtaXRCdXR0b24oKVxuIH1cblxuICBjYWxjQ29zdCgpIHtcbiAgICBsZXQgdG90YWwgPSAwXG4gICAgbGV0IGNvc3RzID0gdGhpcy50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgdG90YWwgKz0gdHJpcC5jb3N0ICsgKHRyaXAuY29zdCAqIC4xKVxuICAgIH0pXG4gICAgdGhpcy50b3RhbCA9IHRvdGFsXG4gICAgcmV0dXJuIGNvc3RzXG4gIH1cblxuICBwb3B1bGF0ZURlc3RpbmF0aW9uTGlzdCgpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24tc2VsZWN0JylcbiAgICBjb25zdCBsb2NhbGVzID0gW11cbiAgICBsZXQgZGVzdGluYXRpb25OYW1lcyA9IHRoaXMuZGVzdGluYXRpb25zLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgbG9jYWxlcy5wdXNoKGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uKVxuICAgIH0pXG4gICAgbGV0IHNvcnRlZExvY2FsZXMgPSBsb2NhbGVzLnNvcnQoKVxuICAgIHRoaXMuZXN0aW1hdGVOZXdUcmlwQ29zdCgpXG4gICAgcmV0dXJuIHNvcnRlZExvY2FsZXMuZm9yRWFjaChsb2NhbGUgPT4ge1xuICAgICAgZGVzdGluYXRpb25MaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgICAgIGA8b3B0aW9uIHZhbHVlPVwiJHtsb2NhbGV9XCI+JHtsb2NhbGV9PC9vcHRpb24+YFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBzdWJtaXRCdXR0b24oKSB7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC10cmlwJylcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuY2hlY2soKVxuICAgIH0pO1xuICB9XG5cbiAgc3VibWl0U2VsZWN0aW9ucygpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvblNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcuZGVzdGluYXRpb24tc2VsZWN0JykudmFsdWVcbiAgICBjb25zdCBkYXRlU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJy5kYXRlLWlucHV0JykudmFsdWVcbiAgICBjb25zdCBkdXJhdGlvblNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcuZHVyYXRpb24taW5wdXQnKS52YWx1ZVxuICAgIGNvbnN0IG51bWJlck9mVHJhdmVsZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJy50cmF2ZWxlcnMtbnVtYmVyLWlucHV0JykudmFsdWVcbiAgfVxuXG4gIGNoZWNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGV5XCIpXG4gIH1cblxuICBlc3RpbWF0ZU5ld1RyaXBDb3N0KCkge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uQ29zdHMgPSB0aGlzLmRlc3RpbmF0aW9ucy5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgIGxldCBjb3N0ID0gZGVzdGluYXRpb25cbiAgICB9KVxuICAgIHJldHVybiBkZXN0aW5hdGlvbkNvc3RzXG4gIH1cblxuXG4vLyAgICAgSSB3aWxsIHNlbGVjdCBhIGRhdGUsIGR1cmF0aW9uLCBudW1iZXIgb2YgdHJhdmVsZXJzIGFuZCBjaG9vc2UgZnJvbSBhIGxpc3Qgb2YgZGVzdGluYXRpb25zXG4vLyBBZnRlciBtYWtpbmcgdGhlc2Ugc2VsZWN0aW9ucywgSSBzaG91bGQgc2VlIGFuIGVzdGltYXRlZCBjb3N0ICh3aXRoIGEgMTAlIHRyYXZlbCBhZ2VudCBmZWUpIGZvciB0aGUgdHJpcC5cbi8vIE9uY2UgSSBzdWJtaXQgdGhlIHRyaXAgcmVxdWVzdCwgaXQgd2lsbCBzaG93IG9uIG15IGRhc2hib2FyZCBhcyDigJxwZW5kaW5n4oCdIHNvIHRoYXQgdGhlIHRyYXZlbCBhZ2VuY3kgY2FuIGFwcHJvdmUgb3IgZGVueSBpdC5cbi8vICAgXG4vLyBmbGlnaHQgY29zdCA9ICBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogKG51bWJlciBvZiB0cmF2ZWxlcnMgaW5wdXQpXG4vLyBsb2RnaW5nIGNvc3QgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIChudW1iZXIgb2YgZHVyYXRpb24gaW5wdXQpXG4vL1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyIiwiaW1wb3J0IERvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJztcblxuY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGlkKXtcbiAgICBpZCAhPT0gdW5kZWZpbmVkID8gdGhpcy5pZCA9IGlkIDogdGhpcy5pZCA9IG51bGxcbiAgICB0aGlzLnVzZXJuYW1lID0gJ3RyYXZlbGVyJyArIGlkXG4gICAgdGhpcy5wYXNzd29yZCA9ICd0cmF2ZWwyMDIwJ1xuICAgIHRoaXMudG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuZGF0ZSA9IHRoaXMudG9kYXkuZ2V0RnVsbFllYXIoKSsnLScrKHRoaXMudG9kYXkuZ2V0TW9udGgoKSsxKSsnLScrdGhpcy50b2RheS5nZXREYXRlKCk7XG4gICAgdGhpcy5kZXN0aW5hdGlvbnMgPSBbXVxuICAgIHRoaXMuZG9tID0gbmV3IERvbVVwZGF0ZXMoKVxuICB9XG5cbiAgZ2V0RGVzdGluYXRpb25zKCkge1xuICAgIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXModGhpcy5kZXN0aW5hdGF0aW9uRGF0YSlcbiAgICByZXR1cm4gZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb25zLnB1c2goZW50cnlbMV0pXG4gICAgfSlcbiAgfVxuXG4gIGdldERlc3RpbmF0aW9uc0lEcygpIHtcbiAgICBsZXQgbG9jYWxlcyA9ICB0aGlzLnRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBsZXQgaWQgPSB0cmlwLmRlc3RpbmF0aW9uSURcbiAgICAgIGxldCB0aGlzVHJpcCA9IHRyaXBcbiAgICAgIHRoaXMuc2V0RGVzdGluYXRpb25OYW1lcyhpZCwgdGhpc1RyaXApXG4gICAgICB0aGlzLnNldENvc3QoaWQsIHRoaXNUcmlwKVxuICAgIH0pXG4gICAgcmV0dXJuIGxvY2FsZXNcbiAgfVxuXG4gIHNldERlc3RpbmF0aW9uTmFtZXMoaWQsIHRoaXNUcmlwKSB7XG4gICAgbGV0IHNldE5hbWVzID0gdGhpcy5kZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICBpZiAoZGVzdGluYXRpb24uaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXNUcmlwLmxvY2FsZSA9IGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gc2V0TmFtZXNcbiAgfVxuXG4gIHNldENvc3QoaWQsIHRoaXNUcmlwKSB7XG4gICAgbGV0IGNvc3QgPSB0aGlzLmRlc3RpbmF0aW9ucy5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgIGlmIChkZXN0aW5hdGlvbi5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpc1RyaXAuY29zdCA9ICgoZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKyBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uKSAqIHRoaXNUcmlwLnRyYXZlbGVycylcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBjb3N0XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==