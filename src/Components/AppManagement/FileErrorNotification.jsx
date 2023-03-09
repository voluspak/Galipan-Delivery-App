import React from 'react'

const FileErrorNotification = ({ message }) => {
  if (message) {
    return (
      <small>{message}</small>
    )
  }
}

export default FileErrorNotification
