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
var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',

    // Render method.
    value: function render() {
      var parent = this.props.parent;

      var desktop = this.props.desktop;
      var desktopHide = this.props['desktop-hide'];
      var desktopPush = this.props['desktop-push'];
      var desktopPull = this.props['desktop-pull'];
      var desktopPrefix = this.props['desktop-prefix'];
      var desktopSuffix = this.props['desktop-suffix'];

      var mobile = this.props.mobile;
      var mobileHide = this.props['mobile-hide'];
      var mobilePush = this.props['mobile-push'];
      var mobilePull = this.props['mobile-pull'];
      var mobilePrefix = this.props['mobile-prefix'];
      var mobileSuffix = this.props['mobile-suffix'];

      var tablet = this.props.tablet;
      var tabletHide = this.props['tablet-hide'];
      var tabletPush = this.props['tablet-push'];
      var tabletPull = this.props['tablet-pull'];
      var tabletPrefix = this.props['tablet-prefix'];
      var tabletSuffix = this.props['tablet-suffix'];

      // Populated later.
      var className = [this.props.className];

      /*
        ===================
        PARENT CLASS NAMES.
        ===================
      */

      if (parent) {
        className.push('grid-parent');
      }

      /*
        ====================
        DESKTOP CLASS NAMES.
        ====================
      */

      if (desktop) {
        className.push('grid-' + desktop);
      }

      if (desktopHide) {
        className.push('hide-on-desktop');
      }

      if (desktopPush) {
        className.push('push-' + desktopPush);
      }

      if (desktopPull) {
        className.push('pull-' + desktopPull);
      }

      if (desktopPrefix) {
        className.push('prefix-' + desktopPrefix);
      }

      if (desktopSuffix) {
        className.push('suffix-' + desktopSuffix);
      }

      /*
        ===================
        MOBILE CLASS NAMES.
        ===================
      */

      if (mobile) {
        className.push('mobile-grid-' + mobile);
      }

      if (mobileHide) {
        className.push('hide-on-mobile');
      }

      if (mobilePush) {
        className.push('mobile-push-' + mobilePush);
      }

      if (mobilePull) {
        className.push('mobile-pull-' + mobilePull);
      }

      if (mobilePrefix) {
        className.push('mobile-prefix-' + mobilePrefix);
      }

      if (mobileSuffix) {
        className.push('mobile-suffix-' + mobileSuffix);
      }

      /*
        ===================
        TABLET CLASS NAMES.
        ===================
      */

      if (tablet) {
        className.push('tablet-grid-' + tablet);
      }

      if (tabletHide) {
        className.push('hide-on-tablet');
      }

      if (tabletPush) {
        className.push('tablet-push-' + tabletPush);
      }

      if (tabletPull) {
        className.push('tablet-pull-' + tabletPull);
      }

      if (tabletPrefix) {
        className.push('tablet-prefix-' + tabletPrefix);
      }

      if (tabletSuffix) {
        className.push('tablet-suffix-' + tabletSuffix);
      }

      /*
        =================
        BUILD THE MARKUP.
        =================
      */

      className = className.join(' ').trim().replace(/\s+/g, ' ');

      // Expose UI.
      return _react2.default.createElement(
        'div',
        { className: className },
        this.props.children
      );
    }
  }]);

  return Grid;
}(_react2.default.Component);

// Validation


Grid.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  parent: _propTypes2.default.bool,

  desktop: _propTypes2.default.string,
  'desktop-hide': _propTypes2.default.bool,
  'desktop-push': _propTypes2.default.string,
  'desktop-pull': _propTypes2.default.string,
  'desktop-prefix': _propTypes2.default.string,
  'desktop-suffix': _propTypes2.default.string,

  mobile: _propTypes2.default.string,
  'mobile-hide': _propTypes2.default.bool,
  'mobile-push': _propTypes2.default.string,
  'mobile-pull': _propTypes2.default.string,
  'mobile-prefix': _propTypes2.default.string,
  'mobile-suffix': _propTypes2.default.string,

  tablet: _propTypes2.default.string,
  'tablet-hide': _propTypes2.default.bool,
  'tablet-push': _propTypes2.default.string,
  'tablet-pull': _propTypes2.default.string,
  'tablet-prefix': _propTypes2.default.string,
  'tablet-suffix': _propTypes2.default.string

  // Export.
};exports.default = Grid;