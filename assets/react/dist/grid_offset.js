// Dependencies.
import React from 'react';
import PropTypes from 'prop-types'; // Define class.

class GridOffset extends React.Component {
  // Render method.
  render() {
    // Expose UI.
    return /*#__PURE__*/React.createElement("div", {
      className: "grid-offset"
    }, this.props.children);
  }

} // Validation.


GridOffset.propTypes = {
  children: PropTypes.node
}; // Export.

export default GridOffset;