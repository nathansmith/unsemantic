// Dependencies.
import React from 'react';
import PropTypes from 'prop-types'; // Define class.

class GridClear extends React.Component {
  // Render method.
  render() {
    const desktopHide = this.props['desktop-hide'];
    const mobileHide = this.props['mobile-hide'];
    const tabletHide = this.props['tablet-hide']; // Populated later.

    let className = ['clear'];
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


    className = className.join(' '); // Expose UI.

    return /*#__PURE__*/React.createElement("span", {
      className: className
    });
  }

} // Validation.


GridClear.propTypes = {
  'desktop-hide': PropTypes.bool,
  'mobile-hide': PropTypes.bool,
  'tablet-hide': PropTypes.bool
}; // Export.

export default GridClear;