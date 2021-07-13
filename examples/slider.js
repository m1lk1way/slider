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
/******/ 		"examples/slider": 0
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
/******/ 	deferredModules.push([4,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/slider.js":
/*!****************************!*\
  !*** ./examples/slider.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logicsoftware_slider_assets_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @logicsoftware/slider/assets/index.less */ "./assets/index.less");
/* harmony import */ var _logicsoftware_slider_assets_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logicsoftware_slider_assets_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @logicsoftware/slider */ "./index.js");
/* harmony import */ var _logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3__);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/no-multi-comp: 0, max-len: 0 */




var style = {
  width: 600,
  margin: 50
};

function log(value) {
  console.log(value); //eslint-disable-line
}

function percentFormatter(v) {
  return "".concat(v, " %");
}

var SliderWithTooltip = Object(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3__["createSliderWithTooltip"])(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a);

var NullableSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(NullableSlider, _React$Component);

  var _super = _createSuper(NullableSlider);

  function NullableSlider(props) {
    var _this;

    _classCallCheck(this, NullableSlider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onSliderChange", function (value) {
      log(value);

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAfterChange", function (value) {
      console.log(value); //eslint-disable-line
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      console.log('reset value'); // eslint-disable-line

      _this.setState({
        value: null
      });
    });

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(NullableSlider, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: this.state.value,
        onChange: this.onSliderChange,
        onAfterChange: this.onAfterChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.reset
      }, "Reset"));
    }
  }]);

  return NullableSlider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var CustomizedSlider = /*#__PURE__*/function (_React$Component2) {
  _inherits(CustomizedSlider, _React$Component2);

  var _super2 = _createSuper(CustomizedSlider);

  function CustomizedSlider(props) {
    var _this2;

    _classCallCheck(this, CustomizedSlider);

    _this2 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this2), "onSliderChange", function (value) {
      log(value);

      _this2.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "onAfterChange", function (value) {
      console.log(value); //eslint-disable-line
    });

    _this2.state = {
      value: 50
    };
    return _this2;
  }

  _createClass(CustomizedSlider, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: this.state.value,
        onChange: this.onSliderChange,
        onAfterChange: this.onAfterChange
      });
    }
  }]);

  return CustomizedSlider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var DynamicBounds = /*#__PURE__*/function (_React$Component3) {
  _inherits(DynamicBounds, _React$Component3);

  var _super3 = _createSuper(DynamicBounds);

  function DynamicBounds(props) {
    var _this3;

    _classCallCheck(this, DynamicBounds);

    _this3 = _super3.call(this, props);

    _defineProperty(_assertThisInitialized(_this3), "onSliderChange", function (value) {
      log(value);
    });

    _defineProperty(_assertThisInitialized(_this3), "onMinChange", function (e) {
      _this3.setState({
        min: +e.target.value || 0
      });
    });

    _defineProperty(_assertThisInitialized(_this3), "onMaxChange", function (e) {
      _this3.setState({
        max: +e.target.value || 100
      });
    });

    _this3.state = {
      min: 0,
      max: 100
    };
    return _this3;
  }

  _createClass(DynamicBounds, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Min: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "number",
        value: this.state.min,
        onChange: this.onMinChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Max: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "number",
        value: this.state.max,
        onChange: this.onMaxChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
        defaultValue: 50,
        min: this.state.min,
        max: this.state.max,
        onChange: this.onSliderChange
      }));
    }
  }]);

  return DynamicBounds;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Basic Slider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
  onChange: log
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Basic Slider\uFF0C`step=20`"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
  step: 20,
  defaultValue: 50,
  onBeforeChange: log
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Basic Slider\uFF0C`step=20, dots`"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
  dots: true,
  step: 20,
  defaultValue: 100,
  onAfterChange: log
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Basic Slider\uFF0C`step=20, dots, dotStyle=", "{borderColor: 'orange'}", ", activeDotStyle=", "{borderColor: 'yellow'}", "`"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
  dots: true,
  step: 20,
  defaultValue: 100,
  onAfterChange: log,
  dotStyle: {
    borderColor: 'orange'
  },
  activeDotStyle: {
    borderColor: 'yellow'
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Slider with tooltip, with custom `tipFormatter`"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SliderWithTooltip, {
  tipFormatter: percentFormatter,
  tipProps: {
    overlayClassName: 'foo'
  },
  onChange: log
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Slider with custom handle and track style.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "(old api, will be deprecated)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
  defaultValue: 30,
  maximumTrackStyle: {
    backgroundColor: 'red',
    height: 10
  },
  minimumTrackStyle: {
    backgroundColor: 'blue',
    height: 10
  },
  handleStyle: {
    borderColor: 'blue',
    height: 28,
    width: 28,
    marginLeft: -14,
    marginTop: -9,
    backgroundColor: 'black'
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Slider with custom handle and track style.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "(The recommended new api)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
  defaultValue: 30,
  trackStyle: {
    backgroundColor: 'blue',
    height: 10
  },
  handleStyle: {
    borderColor: 'blue',
    height: 28,
    width: 28,
    marginLeft: -14,
    marginTop: -9,
    backgroundColor: 'black'
  },
  railStyle: {
    backgroundColor: 'red',
    height: 10
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Basic Slider, disabled"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
  onChange: log,
  disabled: true
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Controlled Slider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logicsoftware_slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: 50
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Customized Slider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomizedSlider, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Slider with null value and reset button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NullableSlider, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: style
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Slider with dynamic `min` `max`"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DynamicBounds, null))), document.getElementById('__react-content'));

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./examples/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/slider.js */"./examples/slider.js");


/***/ })

/******/ });
//# sourceMappingURL=slider.js.map