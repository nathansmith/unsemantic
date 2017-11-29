'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Dependencies.


// Define class.
var GridClear = function (_React$Component) {
  _inherits(GridClear, _React$Component);

  function GridClear() {
    _classCallCheck(this, GridClear);

    return _possibleConstructorReturn(this, (GridClear.__proto__ || Object.getPrototypeOf(GridClear)).apply(this, arguments));
  }

  _createClass(GridClear, [{
    key: 'render',

    // Render method.
    value: function render() {
      var desktopHide = this.props['desktop-hide'];
      var mobileHide = this.props['mobile-hide'];
      var tabletHide = this.props['tablet-hide'];

      // Populated later.
      var className = ['clear'];

      /*
        ====================
        DESKTOP CLASS NAMES.
        ====================
      */

      if (desktopHide) {
        className.push('hide-on-desktop');
      }

      /*
        ===================
        MOBILE CLASS NAMES.
        ===================
      */

      if (mobileHide) {
        className.push('hide-on-mobile');
      }

      /*
        ===================
        TABLET CLASS NAMES.
        ===================
      */

      if (tabletHide) {
        className.push('hide-on-tablet');
      }

      /*
        =================
        BUILD THE MARKUP.
        =================
      */

      className = className.join(' ');

      // Expose UI.
      return _react2.default.createElement('span', { className: className });
    }
  }]);

  return GridClear;
}(_react2.default.Component);

// Validation.


GridClear.propTypes = {
  'desktop-hide': _propTypes2.default.bool,
  'mobile-hide': _propTypes2.default.bool,
  'tablet-hide': _propTypes2.default.bool

  // Export.
};exports.default = GridClear;