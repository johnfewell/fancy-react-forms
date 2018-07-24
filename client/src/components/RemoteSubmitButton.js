import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

const RemoteSubmitButton = ({ dispatch }) => (
  <button
    type="button"
    className='ui huge green button'
    onClick={() => dispatch(submit('remoteSubmit'))}
  >
    Submit
  </button>
)

export default connect()(RemoteSubmitButton)
