/*global
module,
require
*/

// Dependencies.
var React = require('react');
var CreateClass = require('create-react-class');
var PropTypes = require('prop-types');

// Define class.
var GridContainer = CreateClass({
  // Validation.
  propTypes: {
    children: PropTypes.node,

    /*Custom classes*/
    customClass: PropTypes.string
  },

  // Render method.
  render: function () {

    var customClass = this.props.customClass;
    // Populated later.
    var className = [];

    className.push('grid-container');

    if(customClass) {
      className.push(' ' + customClass);
    }

    className = className.join(' ');

    // Expose UI.
    return React.createElement(
      'div',
      {
        className: className
      },
      this.props.children
    );
  }
});

// Export.
module.exports = GridContainer;
