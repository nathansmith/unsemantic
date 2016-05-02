/*global
module,
require
*/

// Dependencies.
var React = require('react')

// Define class.
var GridClear = React.createClass({
  // Validation.
  propTypes: {
    'desktop-hide': React.PropTypes.bool,
    'mobile-hide': React.PropTypes.bool,
    'tablet-hide': React.PropTypes.bool
  },

  // Render method.
  render: function () {
    const desktop_hide = this.props['desktop-hide']
    const mobile_hide = this.props['mobile-hide']
    const tablet_hide = this.props['tablet-hide']

    // Populated later.
    var className = [
      'clear'
    ]

    /*
      ====================
      DESKTOP CLASS NAMES.
      ====================
    */

    if (desktop_hide) {
      className.push('hide-on-desktop')
    }

    /*
      ===================
      MOBILE CLASS NAMES.
      ===================
    */

    if (mobile_hide) {
      className.push('hide-on-mobile')
    }

    /*
      ===================
      TABLET CLASS NAMES.
      ===================
    */

    if (tablet_hide) {
      className.push('hide-on-tablet')
    }

    /*
      =================
      BUILD THE MARKUP.
      =================
    */

    className = className.join(' ')

    // Expose UI.
    return React.createElement(
      'span',
      {
        className: className
      }
    )
  }
})

// Export.
module.exports = GridClear
