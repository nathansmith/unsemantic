// Dependencies.
import React from 'react';
import PropTypes from 'prop-types'; // Define class.

class GridContainer extends React.Component {
  // Render method.
  render() {
    // Expose UI.
    return /*#__PURE__*/React.createElement("div", {
      className: "grid-container"
    }, this.props.children);
  }

} // Validation.


GridContainer.propTypes = {
  children: PropTypes.node
}; // Export.

export default GridContainer;