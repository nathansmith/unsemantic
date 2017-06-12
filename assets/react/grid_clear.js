/*global
module,
require
*/

// Dependencies.
var React = require('react');
var PropTypes = require('prop-types');
var CreateClass = require('create-react-class');

// Define class.
var GridClear = CreateClass({
  // Validation.
  propTypes: {
    'desktop-hide': PropTypes.bool,
    'mobile-hide': PropTypes.bool,
    'tablet-hide': PropTypes.bool
  },

  // Render method.
  render: function () {
    const desktopHide = this.props['desktop-hide'];
    const mobileHide = this.props['mobile-hide'];
    const tabletHide = this.props['tablet-hide'];

    // Populated later.
    var className = [
      'clear'
    ];

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
    return React.createElement(
      'span',
      {
        className: className
      }
    );
  }
});

// Export.
module.exports = GridClear;
