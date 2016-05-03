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
    const desktopHide = this.props['desktop-hide']
    const desktopPush = this.props['desktop-push']
    const desktopPull = this.props['desktop-pull']
    const desktopPrefix = this.props['desktop-prefix']
    const desktopSuffix = this.props['desktop-suffix']

    const mobile = this.props.mobile
    const mobileHide = this.props['mobile-hide']
    const mobilePush = this.props['mobile-push']
    const mobilePull = this.props['mobile-pull']
    const mobilePrefix = this.props['mobile-prefix']
    const mobileSuffix = this.props['mobile-suffix']

    const tablet = this.props.tablet
    const tabletHide = this.props['tablet-hide']
    const tabletPush = this.props['tablet-push']
    const tabletPull = this.props['tablet-pull']
    const tabletPrefix = this.props['tablet-prefix']
    const tabletSuffix = this.props['tablet-suffix']

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

    if (desktopHide) {
      className.push('hide-on-desktop')
    }

    if (desktopPush) {
      className.push('push-' + desktopPush)
    }

    if (desktopPull) {
      className.push('pull-' + desktopPull)
    }

    if (desktopPrefix) {
      className.push('prefix-' + desktopPrefix)
    }

    if (desktopSuffix) {
      className.push('suffix-' + desktopSuffix)
    }

    /*
      ===================
      MOBILE CLASS NAMES.
      ===================
    */

    if (mobile) {
      className.push('mobile-grid-' + mobile)
    }

    if (mobileHide) {
      className.push('hide-on-mobile')
    }

    if (mobilePush) {
      className.push('mobile-push-' + mobilePush)
    }

    if (mobilePull) {
      className.push('mobile-pull-' + mobilePull)
    }

    if (mobilePrefix) {
      className.push('mobile-prefix-' + mobilePrefix)
    }

    if (mobileSuffix) {
      className.push('mobile-suffix-' + mobileSuffix)
    }

    /*
      ===================
      TABLET CLASS NAMES.
      ===================
    */

    if (tablet) {
      className.push('tablet-grid-' + tablet)
    }

    if (tabletHide) {
      className.push('hide-on-tablet')
    }

    if (tabletPush) {
      className.push('tablet-push-' + tabletPush)
    }

    if (tabletPull) {
      className.push('tablet-pull-' + tabletPull)
    }

    if (tabletPrefix) {
      className.push('tablet-prefix-' + tabletPrefix)
    }

    if (tabletSuffix) {
      className.push('tablet-suffix-' + tabletSuffix)
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
