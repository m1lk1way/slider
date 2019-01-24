webpackJsonp([4],{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(188);


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHandle", function() { return CustomHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHandle", function() { return AddHandle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logicsoftware_slider_assets_index_less__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logicsoftware_slider_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__logicsoftware_slider_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logicsoftware_slider__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logicsoftware_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__logicsoftware_slider__);







/* eslint react/no-multi-comp: 0, no-console: 0 */






var Handle = __WEBPACK_IMPORTED_MODULE_10__logicsoftware_slider___default.a.Handle;
var Range = __WEBPACK_IMPORTED_MODULE_10__logicsoftware_slider___default.a.Range;

var style = { width: 800, margin: "0 auto" };

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
      restProps = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['value', 'index', 'disabledHandle']);

  return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
    Handle,
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, restProps, {
      key: index,
      value: value,
      style: __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, handleWrapperStyles, { cursor: disabledHandle ? "default" : "pointer" }),
      className: undefined,
      untabbable: true,
      disabledKeyboard: true
    }),
    __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_8_react___default.a.Fragment,
      null,
      __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement('div', { style: handleStyles }),
      __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        'div',
        { style: handleValueStyle },
        value,
        '%'
      )
    )
  );
};


var AddHandle = function AddHandle(_ref2) {
  var offset = _ref2.offset;
  return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
    'div',
    { style: __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, addHandleWrapperStyle, { left: offset + '%' }) },
    __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
      'div',
      { style: addHandleStyle },
      '+'
    )
  );
};

var PureRenderRange = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(PureRenderRange, _React$Component);

  function PureRenderRange(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PureRenderRange);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PureRenderRange.__proto__ || Object.getPrototypeOf(PureRenderRange)).call(this, props));

    _this.handleChange = function (values) {
      var currentValues = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this.state.items));
      var items = currentValues.map(function (v, i) {
        return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, v, { Value: values[i] });
      });
      _this.setState({ items: items });
    };

    _this.processItems = function () {
      return _this.state.items.map(function (i) {
        return i.Value;
      });
    };

    _this.generateTracks = function () {
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

        return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, baseStyles, { backgroundColor: item.Color });
      });
    };

    _this.onAdd = function (val) {
      var items = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this.state.items));

      var Id = items[items.length - 1].Id + 1;

      var backSortedItems = items.sort(function (a, b) {
        if (a.Value > b.Value) return -1;
        if (a.Value < b.Value) return 1;
        return 0;
      });

      var Color = backSortedItems.find(function (i) {
        return i.Value < val;
      }).Color;

      items.push({ Id: Id, Color: Color, Value: val });
      var sortedItems = items.sort(function (a, b) {
        if (a.Value < b.Value) return -1;
        if (a.Value > b.Value) return 1;
        return 0;
      });
      _this.setState({ items: sortedItems });
    };

    _this.state = {
      items: [{ Id: 1, Color: "lightgreen", Value: 0 }, { Id: 2, Color: "#8af046", Value: 20 }, { Id: 3, Color: "green", Value: 50 }, { Id: 4, Color: "#f5d711", Value: 80 }, { Id: 5, Color: "red", Value: 100 }]
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(PureRenderRange, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(Range, {
        allowCross: false,
        step: 5,
        value: this.processItems(),
        max: 105,
        trackStyle: this.generateTracks(),
        handle: CustomHandle,
        addHandle: AddHandle,
        railStyle: { height: 20, backgroundColor: this.state.items[this.state.items.length - 1].Color },
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
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(PureRenderRange, null)
  )
), document.getElementById('__react-content'));

/***/ })

},[187]);
//# sourceMappingURL=multirangeAdd.js.map