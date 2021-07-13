/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"examples/multirangeAdd": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/multirangeAdd.js":
/*!***********************************!*\
  !*** ./examples/multirangeAdd.js ***!
  \***********************************/
/*! exports provided: CustomHandle, AddHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHandle", function() { return CustomHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHandle", function() { return AddHandle; });
/* harmony import */ var _logicsoftware_slider_assets_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @logicsoftware/slider/assets/index.less */ "./assets/index.less");
/* harmony import */ var _logicsoftware_slider_assets_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logicsoftware_slider_assets_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @logicsoftware/slider */ "./index.js");
/* harmony import */ var _logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3__);
var _excluded = ["value", "index", "disabledHandle"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint react/no-multi-comp: 0, no-console: 0 */




var Handle = _logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a.Handle;
var Range = _logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a.Range;
var style = {
  width: 800,
  margin: "0 auto"
};
var handleWrapperStyles = {
  position: "absolute",
  width: 24,
  top: 3,
  marginLeft: -12,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  outline: "none",
  cursor: "pointer",
  WebkitTouchCallout: "none",
  WebkitUserSelect: "none",
  KhtmlUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  OUserSelect: "none",
  userSelect: "none"
};
var handleStyles = {
  height: 24,
  width: 24,
  borderRadius: 3,
  boxSizing: "border-box",
  border: "1px solid rgba(17,34,51,.15)",
  display: "inline-block",
  cursor: "pointer",
  boxShadow: "0px 0px 5px 0px rgba(17,34,51,.33)",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  pointerEvents: "none"
};
var handleValueStyle = {
  top: "100%",
  textAlign: "center",
  fontWeight: 600,
  fontSize: 15,
  pointerEvents: "none",
  marginTop: 3
};
var addHandleWrapperStyle = {
  position: "absolute",
  width: 22,
  top: 4,
  marginLeft: -11,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  outline: "none",
  cursor: "pointer",
  WebkitTouchCallout: "none",
  WebkitUserSelect: "none",
  KhtmlUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  OUserSelect: "none",
  userSelect: "none"
};
var addHandleStyle = {
  height: 22,
  width: 22,
  borderRadius: 3,
  boxSizing: "border-box",
  border: "1px solid rgba(17,34,51,.15)",
  display: "inline-block",
  cursor: "pointer",
  boxShadow: "0px 0px 5px 0px rgba(17,34,51,.33)",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  pointerEvents: "none"
};
var CustomHandle = function CustomHandle(_ref) {
  var value = _ref.value,
      index = _ref.index,
      disabledHandle = _ref.disabledHandle,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Handle, _extends({}, restProps, {
    key: index,
    value: value,
    style: _objectSpread(_objectSpread({}, handleWrapperStyles), {}, {
      cursor: disabledHandle ? "default" : "pointer"
    }),
    className: undefined,
    untabbable: true,
    disabledKeyboard: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: handleStyles
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: handleValueStyle
  }, value, "%")));
};
var AddHandle = function AddHandle(_ref2) {
  var offset = _ref2.offset;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: _objectSpread(_objectSpread({}, addHandleWrapperStyle), {}, {
      left: "".concat(offset, "%")
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: addHandleStyle
  }, "+"));
};

var PureRenderRange = /*#__PURE__*/function (_React$Component) {
  _inherits(PureRenderRange, _React$Component);

  var _super = _createSuper(PureRenderRange);

  function PureRenderRange(props) {
    var _this;

    _classCallCheck(this, PureRenderRange);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (values) {
      var currentValues = _toConsumableArray(_this.state.items);

      var items = currentValues.map(function (v, i) {
        return _objectSpread(_objectSpread({}, v), {}, {
          Value: values[i]
        });
      });

      _this.setState({
        items: items
      });
    });

    _defineProperty(_assertThisInitialized(_this), "processItems", function () {
      return _this.state.items.map(function (i) {
        return i.Value;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generateTracks", function () {
      return _this.state.items.map(function (item, index, items) {
        var baseStyles = {
          borderRadius: 0,
          height: 20
        };

        if (index === 0) {
          baseStyles.borderRadius = "3px 0 0 3px";
        }

        if (index === items.length - 1) {
          baseStyles.borderRadius = "3px 0 0 3px";
        }

        return _objectSpread(_objectSpread({}, baseStyles), {}, {
          backgroundColor: item.Color
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function (val) {
      var items = _toConsumableArray(_this.state.items);

      var Id = items[items.length - 1].Id + 1;
      var backSortedItems = items.sort(function (a, b) {
        if (a.Value > b.Value) return -1;
        if (a.Value < b.Value) return 1;
        return 0;
      });
      var Color = backSortedItems.find(function (i) {
        return i.Value < val;
      }).Color;
      items.push({
        Id: Id,
        Color: Color,
        Value: val
      });
      var sortedItems = items.sort(function (a, b) {
        if (a.Value < b.Value) return -1;
        if (a.Value > b.Value) return 1;
        return 0;
      });

      _this.setState({
        items: sortedItems
      });
    });

    _this.state = {
      items: [{
        Id: 1,
        Color: "lightgreen",
        Value: 0
      }, {
        Id: 2,
        Color: "#8af046",
        Value: 20
      }, {
        Id: 3,
        Color: "green",
        Value: 50
      }, {
        Id: 4,
        Color: "#f5d711",
        Value: 80
      }, {
        Id: 5,
        Color: "red",
        Value: 100
      }]
    };
    return _this;
  }

  _createClass(PureRenderRange, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Range, {
        allowCross: false,
        step: 5,
        value: this.processItems(),
        max: 105,
        trackStyle: this.generateTracks(),
        handle: CustomHandle,
        addHandle: AddHandle,
        railStyle: {
          height: 20,
          backgroundColor: this.state.items[this.state.items.length - 1].Color
        },
        pushable: 5,
        onChange: this.handleChange,
        isTrackDisabled: true,
        onAfterChange: this.onChange2,
        disabledHandles: [0, 100],
        maxAddBound: 100,
        onAdd: this.onAdd
      });
    }
  }]);

  return PureRenderRange;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PureRenderRange, null))), document.getElementById('__react-content'));

/***/ }),

/***/ 2:
/*!*****************************************!*\
  !*** multi ./examples/multirangeAdd.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/multirangeAdd.js */"./examples/multirangeAdd.js");


/***/ })

/******/ });
//# sourceMappingURL=multirangeAdd.js.map