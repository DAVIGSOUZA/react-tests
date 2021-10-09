import React from 'react'
import { connect } from 'react-redux'

const DataDetail = ({data}) => {
  return (
    <div>
      <h2> Data Details</h2>
      { data !== null ? (
        <>
          <h3> {data.name} </h3>
          <span>ID: {data.id}</span>
          <h4>Description:</h4>
          <p> {data.detail} </p>
        </>
      ) : null }
    </div>
  )
}

const mapStateToProps = (state) => ({ data: state.selectedData })

export default connect(mapStateToProps)(DataDetail)