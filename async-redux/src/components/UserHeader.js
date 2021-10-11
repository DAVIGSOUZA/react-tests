import React from 'react'
import { connect } from 'react-redux'

const UserHeader = ({user}) => {

  return (
    <div>
      <h3>
        Author: { user ? user.name : null }
      </h3>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader)