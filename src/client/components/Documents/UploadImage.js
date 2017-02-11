import React, { PropTypes } from 'react'

const UploadImage = props => {
  return (
    <form
      action={`/v1/flats/${props.flatId}/documents`}
      encType='multipart/form-data'
      method='post'>
      <input name='image' type='file' />
      <input type='submit' />
    </form>
  )
}

UploadImage.propTypes = {
  flatId: PropTypes.number.isRequired
}

export default UploadImage
