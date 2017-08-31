(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lexi"] = factory();
	else
		root["lexi"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(21)('wks');
var uid = __webpack_require__(22);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(38);
var toPrimitive = __webpack_require__(53);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(21)('keys');
var uid = __webpack_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(8);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(42);
var $export = __webpack_require__(36);
var redefine = __webpack_require__(48);
var hide = __webpack_require__(2);
var has = __webpack_require__(5);
var Iterators = __webpack_require__(6);
var $iterCreate = __webpack_require__(40);
var setToStringTag = __webpack_require__(20);
var getPrototypeOf = __webpack_require__(45);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(5);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(67)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  checkbox: __webpack_require__(61),
  dropdown: __webpack_require__(62)
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'checkbox',
  props: ['label', 'labelIsAfter', 'is-checked', 'id'],
  data: function data() {
    return { checked: this.isChecked };
  },
  methods: {
    onClick: function onClick() {
      this.checked = !this.checked;
      this.$emit('changed', this.checked, this.id);
    },
    check: function check() {
      this.checked = true;
    },
    unCheck: function unCheck() {
      this.checked = false;
    }
  }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dropdown',
  props: ['active-item', 'default'],
  data: function data() {
    return {
      isOpen: false,
      activeItemId: "",
      activeItemTxt: ""
    };
  },
  mounted: function mounted() {
    var $default = void 0;
    if (this.default === undefined) $default = this.$refs['content'].firstChild;else $default = this.$refs['content'].querySelectorAll('[value="' + this.default + '"]')[0];

    this.activateItem($default);
  },

  methods: {

    // ------------------------------------ Events
    onMouseDown: function onMouseDown() {
      this.openTime = Date.now();
      this.openDropDown();
      window.addEventListener('mouseup', this.onMouseUp);
      this.addItemHovers();
    },
    onMouseUp: function onMouseUp(e) {
      // Allow 1/3 of a second after the mousepress in case
      // they're single clicking to open the dropdown
      if (Date.now() - this.openTime < 325) return;

      // If mouseup occurred over a dropdown option
      if (e.target.classList.contains('option')) {
        this.activateItem(e.target);
        this.$emit('changed', this.activeItemId);
      }

      this.removeItemHovers();
      this.closeDropDown();
      window.removeEventListener('mouseup', this.onMouseUp);
    },

    // ------------------------------------ Activate an item
    activateItem: function activateItem($item) {
      // If an item is already checked, uncheck it
      var currentCheckedItem = this.$refs['content'].getElementsByClassName('checked');
      if (currentCheckedItem.length > 0) currentCheckedItem[0].classList.remove('checked');

      $item.classList.add("checked");
      this.activeItemTxt = $item.textContent;
      this.activeItemId = $item.getAttribute('value');
    },

    // ------------------------------------  Open / Close Dropdown
    openDropDown: function openDropDown() {
      this.isOpen = true;
      if (this.isOpen)
        // Slight timeout so that the dropdown element will be measurable
        setTimeout(this.sizeAndPositionDropdown, 5);
    },
    closeDropDown: function closeDropDown() {
      this.isOpen = false;
    },


    // ------------------------------------ Position the dropdown over the trigger
    sizeAndPositionDropdown: function sizeAndPositionDropdown() {
      var top = void 0;
      var $content = this.$refs['content'];
      var $trigger = this.$refs['trigger'];

      var dropdownHeight = $content.clientHeight;
      var pos = $trigger.getBoundingClientRect();
      var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      if (pos.top + dropdownHeight > winHeight) top = winHeight - dropdownHeight;else top = pos.top;

      // If page is smaller than dropdown
      if (winHeight < dropdownHeight) top = 0;
      $content.style.height = winHeight;
      $content.style.overflow = 'scroll';

      $content.style.top = top + "px";
      $content.style.left = pos.left + "px";
      $content.style.opacity = "1";
    },

    // ------------------------------------ Helpers
    addItemHovers: function addItemHovers() {
      var $els = this.$refs['content'].getElementsByClassName('option');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()($els), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var $el = _step.value;

          $el.addEventListener('mouseover', function (e) {
            return e.target.classList.add("hover");
          });
          $el.addEventListener('mouseout', function (e) {
            return e.target.classList.remove("hover");
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    removeItemHovers: function removeItemHovers() {
      var $els = this.$refs['content'].getElementsByClassName('option');
      // Hacky way to clear all events from an element
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()($els), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var $el = _step2.value;

          var newEl = $el.cloneNode(true);
          $el.parentNode.replaceChild(newEl, $el);
          newEl.classList.remove("hover");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(57);
module.exports = __webpack_require__(55);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(51);
var toAbsoluteIndex = __webpack_require__(50);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(14);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(31);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(7);
var ctx = __webpack_require__(35);
var hide = __webpack_require__(2);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(14);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(43);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(20);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(2)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(44);
var enumBugKeys = __webpack_require__(16);
var IE_PROTO = __webpack_require__(11)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(15)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(37).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(47);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(52);
var IE_PROTO = __webpack_require__(11)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(13);
var arrayIndexOf = __webpack_require__(33)(false);
var IE_PROTO = __webpack_require__(11)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(46);
var enumBugKeys = __webpack_require__(16);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(12);
var defined = __webpack_require__(8);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(12);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(12);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(34);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(6);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var get = __webpack_require__(54);
module.exports = __webpack_require__(7).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(32);
var step = __webpack_require__(41);
var Iterators = __webpack_require__(6);
var toIObject = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(18)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(49)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(18)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
var global = __webpack_require__(0);
var hide = __webpack_require__(2);
var Iterators = __webpack_require__(6);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".lexi .label[data-v-238b31a1]{position:relative;font-size:16px;font-weight:600;font-style:italic;color:#00a2ed;padding-left:6px}.lexi .label.before[data-v-238b31a1]{padding-left:0;padding-right:6px}.lexi .label[data-v-238b31a1]{display:inline-block;white-space:nowrap}.lexi-blue .label[data-v-238b31a1]{color:#186999}.lexi.drop-down .trigger[data-v-238b31a1]{position:relative;display:inline-flex;color:#00a2ed;font-style:italic;border-bottom:3px solid #00a2ed;padding-bottom:3px;cursor:pointer;font-size:16px;max-height:30px}.lexi.drop-down .trigger .txt[data-v-238b31a1]{margin-right:10px}.lexi.drop-down .trigger[data-v-238b31a1]:after{margin-top:7px;display:block;content:\"\";border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #00a2ed;margin-left:auto;transform:scaleX(.8)}.lexi.drop-down .trigger.white[data-v-238b31a1]{border-bottom:none;background:#fff;padding:8px 12px;max-height:none}.lexi.drop-down .trigger.autoscale[data-v-238b31a1]{min-width:0!important}.lexi.drop-down .drop-content[data-v-238b31a1]{user-select:none;background:#fff;position:fixed;left:20px;box-shadow:0 1px 6px 0 #aaa;z-index:1000;opacity:0}.lexi.drop-down .drop-content .checkmark[data-v-238b31a1]{display:none}.lexi.drop-down .drop-content .label[data-v-238b31a1],.lexi.drop-down .drop-content .option[data-v-238b31a1]{border-bottom:1px solid #f1efef;padding:4px 16px 4px 22px;display:relative}.lexi.drop-down .drop-content .label .checkmark[data-v-238b31a1],.lexi.drop-down .drop-content .option .checkmark[data-v-238b31a1]{display:block;position:absolute;left:6px;top:3px}.lexi.drop-down .drop-content .label[data-v-238b31a1]{color:#b5bfc7;font-size:12px;padding-left:14px}.lexi.drop-down .drop-content .option[data-v-238b31a1]{position:relative;color:#00a2ed;font-weight:600;font-size:16px;font-style:italic;cursor:pointer}.lexi.drop-down .drop-content .option.hover[data-v-238b31a1]{background:#00a2ed;color:#fff}.lexi.drop-down .drop-content .option.hover.checked[data-v-238b31a1]:before{border-color:#fff}.lexi.drop-down .drop-content .option.clicked[data-v-238b31a1]{background:#53f0ff}.lexi.drop-down .drop-content .option.checked[data-v-238b31a1]:before{position:absolute;left:9px;top:8px;content:\"\";display:block;width:5px;height:10px;border:solid #00a2ed;border-width:0 2px 2px 0;transform:rotate(45deg)}.lexi.drop-down .drop-content .option.disabled[data-v-238b31a1]{opacity:.5;pointer-events:none}.lexi-blue .lexi-ui.select-trigger[data-v-238b31a1]:not(.white){border-bottom-color:#1d8acd;color:#fff}.lexi-blue .lexi-ui.select-trigger[data-v-238b31a1]:not(.white):after{border-top-color:#fff}", "", {"version":3,"sources":["/./src/components/dropdown.vue"],"names":[],"mappings":"AACA,8BAEE,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,cAAe,AACf,gBAAkB,CACnB,AACD,qCACI,eAAgB,AAChB,iBAAmB,CACtB,AACD,8BACE,qBAAsB,AACtB,kBAAoB,CACrB,AACD,mCACE,aAAe,CAChB,AACD,0CACE,kBAAmB,AACnB,oBAAqB,AACrB,cAAe,AACf,kBAAmB,AACnB,gCAAiC,AACjC,mBAAoB,AACpB,eAAgB,AAChB,eAAgB,AAChB,eAAiB,CAClB,AACD,+CACI,iBAAmB,CACtB,AACD,gDACI,eAAgB,AAChB,cAAe,AACf,WAAY,AACZ,kCAAmC,AACnC,mCAAoC,AACpC,6BAA8B,AAC9B,iBAAkB,AAClB,oBAAuB,CAC1B,AACD,gDACI,mBAAoB,AACpB,gBAAkB,AAClB,iBAAkB,AAClB,eAAoB,CACvB,AACD,oDACI,qBAA8B,CACjC,AACD,+CACE,iBAAkB,AAClB,gBAAkB,AAClB,eAAgB,AAChB,UAAW,AAGX,4BAA+B,AAC/B,aAAc,AACd,SAAW,CACZ,AACD,0DACI,YAAc,CACjB,AACD,6GACI,gCAAiC,AACjC,0BAA2B,AAC3B,gBAAkB,CACrB,AACD,mIACM,cAAe,AACf,kBAAmB,AACnB,SAAU,AACV,OAAS,CACd,AACD,sDACI,cAAe,AACf,eAAgB,AAChB,iBAAmB,CACtB,AACD,uDACI,kBAAmB,AACnB,cAAe,AACf,gBAAiB,AACjB,eAAgB,AAChB,kBAAmB,AACnB,cAAgB,CACnB,AACD,6DACM,mBAAoB,AACpB,UAAa,CAClB,AACD,4EACQ,iBAAoB,CAC3B,AACD,+DACM,kBAAoB,CACzB,AACD,sEACM,kBAAmB,AACnB,SAAU,AACV,QAAS,AAET,WAAY,AACZ,cAAe,AAEf,UAAW,AACX,YAAa,AAEb,qBAAsB,AACtB,yBAA0B,AAE1B,uBAAyB,CAC9B,AACD,gEACM,WAAa,AACb,mBAAqB,CAC1B,AACD,gEACE,4BAA6B,AAC7B,UAAa,CACd,AACD,sEACI,qBAAwB,CAC3B","file":"dropdown.vue","sourcesContent":["\n.lexi .label[data-v-238b31a1] {\n  display: inline-block;\n  position: relative;\n  font-size: 16px;\n  font-weight: 600;\n  font-style: italic;\n  color: #00A2ED;\n  padding-left: 6px;\n}\n.lexi .label.before[data-v-238b31a1] {\n    padding-left: 0;\n    padding-right: 6px;\n}\n.lexi .label[data-v-238b31a1] {\n  display: inline-block;\n  white-space: nowrap;\n}\n.lexi-blue .label[data-v-238b31a1] {\n  color: #186999;\n}\n.lexi.drop-down .trigger[data-v-238b31a1] {\n  position: relative;\n  display: inline-flex;\n  color: #00A2ED;\n  font-style: italic;\n  border-bottom: 3px solid #00A2ED;\n  padding-bottom: 3px;\n  cursor: pointer;\n  font-size: 16px;\n  max-height: 30px;\n}\n.lexi.drop-down .trigger .txt[data-v-238b31a1] {\n    margin-right: 10px;\n}\n.lexi.drop-down .trigger[data-v-238b31a1]:after {\n    margin-top: 7px;\n    display: block;\n    content: \"\";\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-top: 7px solid #00A2ED;\n    margin-left: auto;\n    transform: scaleX(0.8);\n}\n.lexi.drop-down .trigger.white[data-v-238b31a1] {\n    border-bottom: none;\n    background: white;\n    padding: 8px 12px;\n    max-height: initial;\n}\n.lexi.drop-down .trigger.autoscale[data-v-238b31a1] {\n    min-width: initial !important;\n}\n.lexi.drop-down .drop-content[data-v-238b31a1] {\n  user-select: none;\n  background: white;\n  position: fixed;\n  left: 20px;\n  -webkit-box-shadow: 0 1px 6px 0px #AAA;\n  -moz-box-shadow: 0 1px 6px 0px #AAA;\n  box-shadow: 0 1px 6px 0px #AAA;\n  z-index: 1000;\n  opacity: 0;\n}\n.lexi.drop-down .drop-content .checkmark[data-v-238b31a1] {\n    display: none;\n}\n.lexi.drop-down .drop-content .label[data-v-238b31a1], .lexi.drop-down .drop-content .option[data-v-238b31a1] {\n    border-bottom: solid #F1EFEF 1px;\n    padding: 4px 16px 4px 22px;\n    display: relative;\n}\n.lexi.drop-down .drop-content .label .checkmark[data-v-238b31a1], .lexi.drop-down .drop-content .option .checkmark[data-v-238b31a1] {\n      display: block;\n      position: absolute;\n      left: 6px;\n      top: 3px;\n}\n.lexi.drop-down .drop-content .label[data-v-238b31a1] {\n    color: #B5BFC7;\n    font-size: 12px;\n    padding-left: 14px;\n}\n.lexi.drop-down .drop-content .option[data-v-238b31a1] {\n    position: relative;\n    color: #00A2ED;\n    font-weight: 600;\n    font-size: 16px;\n    font-style: italic;\n    cursor: pointer;\n}\n.lexi.drop-down .drop-content .option.hover[data-v-238b31a1] {\n      background: #00A2ED;\n      color: white;\n}\n.lexi.drop-down .drop-content .option.hover.checked[data-v-238b31a1]:before {\n        border-color: white;\n}\n.lexi.drop-down .drop-content .option.clicked[data-v-238b31a1] {\n      background: #53F0FF;\n}\n.lexi.drop-down .drop-content .option.checked[data-v-238b31a1]:before {\n      position: absolute;\n      left: 9px;\n      top: 8px;\n      /*Add another block-level blank space*/\n      content: '';\n      display: block;\n      /*Make it a small rectangle so the border will create an L-shape*/\n      width: 5px;\n      height: 10px;\n      /*Add a white border on the bottom and left, creating that 'L' */\n      border: solid #00A2ED;\n      border-width: 0 2px 2px 0;\n      /*Rotate the L 45 degrees to turn it into a checkmark*/\n      transform: rotate(45deg);\n}\n.lexi.drop-down .drop-content .option.disabled[data-v-238b31a1] {\n      opacity: 0.5;\n      pointer-events: none;\n}\n.lexi-blue .lexi-ui.select-trigger[data-v-238b31a1]:not(.white) {\n  border-bottom-color: #1D8ACD;\n  color: white;\n}\n.lexi-blue .lexi-ui.select-trigger[data-v-238b31a1]:not(.white):after {\n    border-top-color: white;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".lexi .label[data-v-52efe053]{position:relative;font-size:16px;font-weight:600;font-style:italic;color:#00a2ed;padding-left:6px}.lexi .label.before[data-v-52efe053]{padding-left:0;padding-right:6px}.lexi .label[data-v-52efe053]{display:inline-block;white-space:nowrap}.lexi-blue .label[data-v-52efe053]{color:#186999}.checkbox[data-v-52efe053]{display:inline-flex;cursor:pointer;align-items:center;padding:3px 0}.checkbox .checker[data-v-52efe053]{position:relative;width:16px;height:16px;background:#00a2ed;display:inline-block;border-radius:2px}.checkbox.checked .checker[data-v-52efe053]:after{content:\"\";display:block;width:7px;height:14px;border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg);position:absolute;left:7px;top:-2px}.checkbox:hover .label[data-v-52efe053]{color:#0467cd}.lexi-blue .lexi-ui.checkbox .checker[data-v-52efe053]{background:#006ead}", "", {"version":3,"sources":["/./src/components/checkbox.vue"],"names":[],"mappings":"AACA,8BAEE,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,cAAe,AACf,gBAAkB,CACnB,AACD,qCACI,eAAgB,AAChB,iBAAmB,CACtB,AACD,8BACE,qBAAsB,AACtB,kBAAoB,CACrB,AACD,mCACE,aAAe,CAChB,AACD,2BACE,oBAAqB,AAErB,eAAgB,AAChB,mBAAoB,AACpB,aAAe,CAChB,AACD,oCACI,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,qBAAsB,AACtB,iBAAmB,CACtB,AACD,kDAEI,WAAY,AACZ,cAAe,AAEf,UAAW,AACX,YAAa,AAEb,kBAAoB,AACpB,yBAA0B,AAE1B,wBAAyB,AACzB,kBAAmB,AACnB,SAAU,AACV,QAAU,CACb,AACD,wCACI,aAAe,CAClB,AACD,uDACE,kBAAoB,CACrB","file":"checkbox.vue","sourcesContent":["\n.lexi .label[data-v-52efe053] {\n  display: inline-block;\n  position: relative;\n  font-size: 16px;\n  font-weight: 600;\n  font-style: italic;\n  color: #00A2ED;\n  padding-left: 6px;\n}\n.lexi .label.before[data-v-52efe053] {\n    padding-left: 0;\n    padding-right: 6px;\n}\n.lexi .label[data-v-52efe053] {\n  display: inline-block;\n  white-space: nowrap;\n}\n.lexi-blue .label[data-v-52efe053] {\n  color: #186999;\n}\n.checkbox[data-v-52efe053] {\n  display: inline-flex;\n  cursor: pointer;\n  cursor: pointer;\n  align-items: center;\n  padding: 3px 0;\n}\n.checkbox .checker[data-v-52efe053] {\n    position: relative;\n    width: 16px;\n    height: 16px;\n    background: #00A2ED;\n    display: inline-block;\n    border-radius: 2px;\n}\n.checkbox.checked .checker[data-v-52efe053]:after {\n    /*Add another block-level blank space*/\n    content: '';\n    display: block;\n    /*Make it a small rectangle so the border will create an L-shape*/\n    width: 7px;\n    height: 14px;\n    /*Add a white border on the bottom and left, creating that 'L' */\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    /*Rotate the L 45 degrees to turn it into a checkmark*/\n    transform: rotate(45deg);\n    position: absolute;\n    left: 7px;\n    top: -2px;\n}\n.checkbox:hover .label[data-v-52efe053] {\n    color: #0467CD;\n}\n.lexi-blue .lexi-ui.checkbox .checker[data-v-52efe053] {\n  background: #006EAD;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(66)
}
var Component = __webpack_require__(24)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(64),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-52efe053",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(65)
}
var Component = __webpack_require__(24)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(63),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-238b31a1",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lexi drop-down"
  }, [_c('div', {
    ref: "trigger",
    staticClass: "trigger",
    on: {
      "mousedown": _vm.onMouseDown
    }
  }, [_c('div', {
    staticClass: "txt"
  }, [_vm._v(_vm._s(_vm.activeItemTxt))])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    ref: "content",
    staticClass: "drop-content"
  }, [_vm._t("default", [_vm._v("name=\"options\"")])], 2)])
},staticRenderFns: []}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "checkbox lexi",
    class: {
      'label-before': true, checked: _vm.checked
    },
    on: {
      "click": _vm.onClick
    }
  }, [_c('div', {
    staticClass: "checker"
  }), _c('div', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.label))])])
},staticRenderFns: []}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(25)("70011546", content, true);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(25)("58250b8e", content, true);

/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ })
/******/ ]);
});
//# sourceMappingURL=build.js.map