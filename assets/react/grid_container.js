// Dependencies.
import React from 'react'
import PropTypes from 'prop-types'

// Define class.
class GridContainer extends React.Component {
  // Render method.
  render () {
    // Expose UI.
    return (
      <div className='grid-container'>
        {this.props.children}
      </div>
    )
  }
}

// Validation.
GridContainer.propTypes = {
  children: PropTypes.node
}

// Export.
export default GridContainer
