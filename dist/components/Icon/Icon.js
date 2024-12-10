"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Icon = function Icon(_ref) {
  var name = _ref.name,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size;
  var iconMap = {
    'check': /*#__PURE__*/_react["default"].createElement(_fa.FaCheck, {
      size: size
    }),
    'trash': /*#__PURE__*/_react["default"].createElement(_fa.FaTrash, {
      size: size
    }),
    'spinner': /*#__PURE__*/_react["default"].createElement(_fa.FaSpinner, {
      size: size
    }),
    'info': /*#__PURE__*/_react["default"].createElement(_fa.FaInfoCircle, {
      size: size
    }),
    'warning': /*#__PURE__*/_react["default"].createElement(_fa.FaExclamationTriangle, {
      size: size
    }),
    'error': /*#__PURE__*/_react["default"].createElement(_fa.FaExclamationCircle, {
      size: size
    }),
    'plus': /*#__PURE__*/_react["default"].createElement(_fa.FaPlus, {
      size: size
    }),
    'times': /*#__PURE__*/_react["default"].createElement(_fa.FaTimes, {
      size: size
    }),
    'edit': /*#__PURE__*/_react["default"].createElement(_fa.FaEdit, {
      size: size
    }),
    'user': /*#__PURE__*/_react["default"].createElement(_fa.FaUser, {
      size: size
    }),
    'search': /*#__PURE__*/_react["default"].createElement(_fa.FaSearch, {
      size: size
    }),
    'envelope': /*#__PURE__*/_react["default"].createElement(_fa.FaEnvelope, {
      size: size
    }),
    'heart': /*#__PURE__*/_react["default"].createElement(_fa.FaHeart, {
      size: size
    }),
    'star': /*#__PURE__*/_react["default"].createElement(_fa.FaStar, {
      size: size
    }),
    'cog': /*#__PURE__*/_react["default"].createElement(_fa.FaCog, {
      size: size
    }),
    'home': /*#__PURE__*/_react["default"].createElement(_fa.FaHome, {
      size: size
    }),
    'phone': /*#__PURE__*/_react["default"].createElement(_fa.FaPhone, {
      size: size
    }),
    'github': /*#__PURE__*/_react["default"].createElement(_fa.FaGithub, {
      size: size
    }),
    'facebook': /*#__PURE__*/_react["default"].createElement(_fa.FaFacebook, {
      size: size
    }),
    'twitter': /*#__PURE__*/_react["default"].createElement(_fa.FaTwitter, {
      size: size
    }),
    'linkedin': /*#__PURE__*/_react["default"].createElement(_fa.FaLinkedin, {
      size: size
    }),
    'instagram': /*#__PURE__*/_react["default"].createElement(_fa.FaInstagram, {
      size: size
    }),
    'arrow-left': /*#__PURE__*/_react["default"].createElement(_fa.FaArrowLeft, {
      size: size
    }),
    'arrow-right': /*#__PURE__*/_react["default"].createElement(_fa.FaArrowRight, {
      size: size
    }),
    'arrow-up': /*#__PURE__*/_react["default"].createElement(_fa.FaArrowUp, {
      size: size
    }),
    'arrow-down': /*#__PURE__*/_react["default"].createElement(_fa.FaArrowDown, {
      size: size
    }),
    'angle-left': /*#__PURE__*/_react["default"].createElement(_fa.FaAngleLeft, {
      size: size
    }),
    'angle-right': /*#__PURE__*/_react["default"].createElement(_fa.FaAngleRight, {
      size: size
    }),
    'angle-up': /*#__PURE__*/_react["default"].createElement(_fa.FaAngleUp, {
      size: size
    }),
    'angle-down': /*#__PURE__*/_react["default"].createElement(_fa.FaAngleDown, {
      size: size
    }),
    'shopping-cart': /*#__PURE__*/_react["default"].createElement(_fa.FaShoppingCart, {
      size: size
    }),
    'sign-in': /*#__PURE__*/_react["default"].createElement(_fa.FaSignInAlt, {
      size: size
    }),
    'sign-out': /*#__PURE__*/_react["default"].createElement(_fa.FaSignOutAlt, {
      size: size
    }),
    'book': /*#__PURE__*/_react["default"].createElement(_fa.FaBook, {
      size: size
    }),
    'cloud-upload': /*#__PURE__*/_react["default"].createElement(_fa.FaCloudUploadAlt, {
      size: size
    }),
    'cloud-download': /*#__PURE__*/_react["default"].createElement(_fa.FaCloudDownloadAlt, {
      size: size
    }),
    'handshake': /*#__PURE__*/_react["default"].createElement(_fa.FaHandshake, {
      size: size
    }),
    'bell': /*#__PURE__*/_react["default"].createElement(_fa.FaBell, {
      size: size
    }),
    'calendar': /*#__PURE__*/_react["default"].createElement(_fa.FaCalendar, {
      size: size
    }),
    'map-marker': /*#__PURE__*/_react["default"].createElement(_fa.FaMapMarkerAlt, {
      size: size
    }),
    'lock': /*#__PURE__*/_react["default"].createElement(_fa.FaLock, {
      size: size
    }),
    'unlock': /*#__PURE__*/_react["default"].createElement(_fa.FaUnlock, {
      size: size
    }),
    'battery-full': /*#__PURE__*/_react["default"].createElement(_fa.FaBatteryFull, {
      size: size
    }),
    'battery-half': /*#__PURE__*/_react["default"].createElement(_fa.FaBatteryHalf, {
      size: size
    }),
    'battery-empty': /*#__PURE__*/_react["default"].createElement(_fa.FaBatteryEmpty, {
      size: size
    }),
    'download': /*#__PURE__*/_react["default"].createElement(_fa.FaDownload, {
      size: size
    }),
    'upload': /*#__PURE__*/_react["default"].createElement(_fa.FaUpload, {
      size: size
    }),
    'thumbs-up': /*#__PURE__*/_react["default"].createElement(_fa.FaThumbsUp, {
      size: size
    }),
    'thumbs-down': /*#__PURE__*/_react["default"].createElement(_fa.FaThumbsDown, {
      size: size
    }),
    'wifi': /*#__PURE__*/_react["default"].createElement(_fa.FaWifi, {
      size: size
    }),
    'wifi-slash': /*#__PURE__*/_react["default"].createElement(_fa.FaWifiSlash, {
      size: size
    }),
    'print': /*#__PURE__*/_react["default"].createElement(_fa.FaPrint, {
      size: size
    })
  };
  return iconMap[name] || null; // Return null if the icon name is not found
};
var _default = exports["default"] = Icon;