import React from 'react'

const Notification = ({ message }) => {
  if (message) {
    return (
      <small className='text-red-500 italic'>*{message}</small>
    )
  }
}

export default Notification
