/*global
module,
require
*/

// Dependencies.
var React = require('react')

// Define class.
var GridContainer = React.createClass({
  // Validation.
  propTypes: {
    children: React.PropTypes.node
  },

  // Render method.
  render: function () {
    // Expose UI.
    return React.createElement(
      'div',
      {
        className: 'grid-container'
      },
      this.props.children
    )
  }
})

// Export.
module.exports = GridContainer
