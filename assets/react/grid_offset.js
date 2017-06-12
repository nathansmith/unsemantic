/*global
module,
require
*/

// Dependencies.
var React = require('react');
var CreateClass = require('create-react-class');
var PropTypes = require('prop-types');


// Define class.
var GridOffset = CreateClass({
  // Validation.
  propTypes: {
    children: PropTypes.node
  },

  // Render method.
  render: function () {
    // Expose UI.
    return React.createElement(
      'div',
      {
        className: 'grid-offset'
      },
      this.props.children
    );
  }
});

// Export.
module.exports = GridOffset;
