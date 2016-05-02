/*global
module,
require
*/

// Dependencies.
var React = require('react')

// Define class.
var Grid = React.createClass({
  // Validation
  propTypes: {
    children: React.PropTypes.node,

    parent: React.PropTypes.bool,

    desktop: React.PropTypes.string,
    'desktop-hide': React.PropTypes.bool,
    'desktop-push': React.PropTypes.string,
    'desktop-pull': React.PropTypes.string,
    'desktop-prefix': React.PropTypes.string,
    'desktop-suffix': React.PropTypes.string,

    mobile: React.PropTypes.string,
    'mobile-hide': React.PropTypes.bool,
    'mobile-push': React.PropTypes.string,
    'mobile-pull': React.PropTypes.string,
    'mobile-prefix': React.PropTypes.string,
    'mobile-suffix': React.PropTypes.string,

    tablet: React.PropTypes.string,
    'tablet-hide': React.PropTypes.bool,
    'tablet-push': React.PropTypes.string,
    'tablet-pull': React.PropTypes.string,
    'tablet-prefix': React.PropTypes.string,
    'tablet-suffix': React.PropTypes.string
  },

  // Render method.
  render: function () {
    const parent = this.props.parent

    const desktop = this.props.desktop
    const desktop_hide = this.props['desktop-hide']
    const desktop_push = this.props['desktop-push']
    const desktop_pull = this.props['desktop-pull']
    const desktop_prefix = this.props['desktop-prefix']
    const desktop_suffix = this.props['desktop-suffix']

    const mobile = this.props.mobile
    const mobile_hide = this.props['mobile-hide']
    const mobile_push = this.props['mobile-push']
    const mobile_pull = this.props['mobile-pull']
    const mobile_prefix = this.props['mobile-prefix']
    const mobile_suffix = this.props['mobile-suffix']

    const tablet = this.props.tablet
    const tablet_hide = this.props['tablet-hide']
    const tablet_push = this.props['tablet-push']
    const tablet_pull = this.props['tablet-pull']
    const tablet_prefix = this.props['tablet-prefix']
    const tablet_suffix = this.props['tablet-suffix']

    // Populated later.
    var className = []

    /*
      ===================
      PARENT CLASS NAMES.
      ===================
    */

    if (parent) {
      className.push('grid-parent')
    }

    /*
      ====================
      DESKTOP CLASS NAMES.
      ====================
    */

    if (desktop) {
      className.push('grid-' + desktop)
    }

    if (desktop_hide) {
      className.push('hide-on-desktop')
    }

    if (desktop_push) {
      className.push('push-' + desktop_push)
    }

    if (desktop_pull) {
      className.push('pull-' + desktop_pull)
    }

    if (desktop_prefix) {
      className.push('prefix-' + desktop_prefix)
    }

    if (desktop_suffix) {
      className.push('suffix-' + desktop_suffix)
    }

    /*
      ===================
      MOBILE CLASS NAMES.
      ===================
    */

    if (mobile) {
      className.push('mobile-grid-' + mobile)
    }

    if (mobile_hide) {
      className.push('hide-on-mobile')
    }

    if (mobile_push) {
      className.push('mobile-push-' + mobile_push)
    }

    if (mobile_pull) {
      className.push('mobile-pull-' + mobile_pull)
    }

    if (mobile_prefix) {
      className.push('mobile-prefix-' + mobile_prefix)
    }

    if (mobile_suffix) {
      className.push('mobile-suffix-' + mobile_suffix)
    }

    /*
      ===================
      TABLET CLASS NAMES.
      ===================
    */

    if (tablet) {
      className.push('tablet-grid-' + tablet)
    }

    if (tablet_hide) {
      className.push('hide-on-tablet')
    }

    if (tablet_push) {
      className.push('tablet-push-' + tablet_push)
    }

    if (tablet_pull) {
      className.push('tablet-pull-' + tablet_pull)
    }

    if (tablet_prefix) {
      className.push('tablet-prefix-' + tablet_prefix)
    }

    if (tablet_suffix) {
      className.push('tablet-suffix-' + tablet_suffix)
    }

    /*
      =================
      BUILD THE MARKUP.
      =================
    */

    className = className.join(' ')

    // Expose UI.
    return React.createElement(
      'div',
      {
        className: className
      },
      this.props.children
    )
  }
})

// Export.
module.exports = Grid
