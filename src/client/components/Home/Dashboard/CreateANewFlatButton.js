import React from 'react'

const CreateANewFlat = (props) => {
  return (
    <div className='row'>
      <button onClick={props.open} className='btn btn-default glyphicon glyphicon-plus'> create a new flat</button>
    </div>
  )
}

export default CreateANewFlat
