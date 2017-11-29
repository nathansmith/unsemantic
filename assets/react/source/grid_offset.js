// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Define class.
class GridOffset extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <div className='grid-offset'>
        {this.props.children}
      </div>
    )
  }
}

// Validation.
GridOffset.propTypes = {
  children: PropTypes.node
}

// Export.
export default GridOffset
