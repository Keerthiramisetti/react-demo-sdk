"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.VerticalBars = exports.SteadySpinner = exports.Spinner = exports.SciFiLoader = exports.NewtonsCradle = exports.HorizontalBarLoader = exports.FadeLoader = exports.DotGridLoader = exports.ClassicDots = exports.CatchUpSpinner = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Loaders.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Make sure to import the correct CSS file

// Vertical Bars Loader
var VerticalBars = exports.VerticalBars = function VerticalBars(_ref) {
  var color = _ref.color,
    size = _ref.size,
    speed = _ref.speed;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "vertical-loading-bars",
    style: {
      width: size || '2em'
    }
  }, _toConsumableArray(Array(4)).map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index,
      style: {
        backgroundColor: color || '#789',
        animationDuration: speed || '1s'
      }
    });
  }));
};

// Newton's Cradle Loader
var NewtonsCradle = exports.NewtonsCradle = function NewtonsCradle(_ref2) {
  var color = _ref2.color,
    size = _ref2.size,
    speed = _ref2.speed;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "newtons-cradle",
    style: {
      width: size || '4em'
    }
  }, _toConsumableArray(Array(3)).map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      style: {
        backgroundColor: color || '#fc2f70',
        animationDuration: speed || '0.5s'
      }
    });
  }));
};

// Steady Spinner Loader
var SteadySpinner = exports.SteadySpinner = function SteadySpinner(_ref3) {
  var color = _ref3.color,
    size = _ref3.size,
    speed = _ref3.speed;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "steady-spinner",
    style: {
      borderTopColor: color || '#09e',
      width: size || '3em',
      height: size || '3em',
      animationDuration: speed || '1s'
    }
  });
};

// Classic Dots Loader
var ClassicDots = exports.ClassicDots = function ClassicDots(_ref4) {
  var color = _ref4.color,
    size = _ref4.size,
    speed = _ref4.speed;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "classic-dots",
    style: {
      width: size || '3.5em'
    }
  }, _toConsumableArray(Array(3)).map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      style: {
        backgroundColor: color || '#666',
        animationDuration: speed || '0.8s',
        animationDelay: "".concat(-0.2 * index, "s")
      }
    });
  }));
};

// Catch-Up Spinner Loader
var CatchUpSpinner = exports.CatchUpSpinner = function CatchUpSpinner(_ref5) {
  var color = _ref5.color,
    size = _ref5.size,
    speed = _ref5.speed;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    id: "catchup-spinner",
    viewBox: "25 25 50 50",
    style: {
      width: size || '3.75em'
    }
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    style: {
      stroke: color || '#7c7',
      strokeWidth: '2',
      animationDuration: speed || '1.5s'
    }
  }));
};

// Dot Grid Loader
var DotGridLoader = exports.DotGridLoader = function DotGridLoader(_ref6) {
  var color = _ref6.color,
    size = _ref6.size,
    speed = _ref6.speed;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dot-grid-loader",
    style: {
      width: size || '3em',
      height: size || '3em'
    }
  }, _toConsumableArray(Array(9)).map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      style: {
        backgroundColor: color || 'purple',
        animationDuration: speed || '1.5s',
        animationDelay: "".concat(0.25 * index, "s")
      }
    });
  }));
};

// Sci-Fi Loader
var SciFiLoader = exports.SciFiLoader = function SciFiLoader(_ref7) {
  var color = _ref7.color,
    size = _ref7.size,
    speed = _ref7.speed;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sci-fi-loader",
    style: {
      maxWidth: size || '3em'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "outer",
    style: {
      borderTopColor: color || '#17c',
      borderRightColor: color || '#17c',
      animationDuration: speed || '2s'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "middle",
    style: {
      borderTopColor: color || '#17c',
      borderRightColor: color || '#17c',
      animationDuration: speed || '1.75s'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "inner",
    style: {
      borderTopColor: color || '#17c',
      borderRightColor: color || '#17c',
      animationDuration: speed || '1.5s'
    }
  }));
};

// horizontal bar loader
var HorizontalBarLoader = exports.HorizontalBarLoader = function HorizontalBarLoader(_ref8) {
  var color = _ref8.color;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "horizontal-bar"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      backgroundColor: color || '#4caf50'
    }
  }));
};
var FadeLoader = exports.FadeLoader = function FadeLoader(_ref9) {
  var _ref9$color = _ref9.color,
    color = _ref9$color === void 0 ? '#4caf50' : _ref9$color,
    _ref9$size = _ref9.size,
    size = _ref9$size === void 0 ? '50px' : _ref9$size;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "circle-loader",
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bars-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bar",
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bar",
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bar",
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bar",
    style: {
      backgroundColor: color
    }
  })));
};
var Spinner = exports.Spinner = function Spinner(_ref10) {
  var _ref10$text = _ref10.text,
    text = _ref10$text === void 0 ? 'Loading' : _ref10$text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "spinner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "spinner-text"
  }, text), " ", /*#__PURE__*/_react["default"].createElement("div", {
    className: "spinner-sector spinner-sector-red"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "spinner-sector spinner-sector-blue"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "spinner-sector spinner-sector-green"
  }));
};

/* PropTypes validation for each loader component (optional but recommended) */
VerticalBars.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  speed: _propTypes["default"].string
};
NewtonsCradle.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  speed: _propTypes["default"].string
};
SteadySpinner.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  speed: _propTypes["default"].string
};
ClassicDots.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  speed: _propTypes["default"].string
};
CatchUpSpinner.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  speed: _propTypes["default"].string
};
DotGridLoader.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  speed: _propTypes["default"].string
};
SciFiLoader.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  speed: _propTypes["default"].string
};
HorizontalBarLoader.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  speed: _propTypes["default"].string
};
FadeLoader.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  speed: _propTypes["default"].string
};
Spinner.PropTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  speed: _propTypes["default"].string
};

/* Exporting all loaders in one object for easy import */
var Loaders = {
  VerticalBars: VerticalBars,
  NewtonsCradle: NewtonsCradle,
  SteadySpinner: SteadySpinner,
  ClassicDots: ClassicDots,
  CatchUpSpinner: CatchUpSpinner,
  DotGridLoader: DotGridLoader,
  SciFiLoader: SciFiLoader,
  HorizontalBarLoader: HorizontalBarLoader,
  FadeLoader: FadeLoader,
  Spinner: Spinner
};
var _default = exports["default"] = Loaders;