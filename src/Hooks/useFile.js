import { useState } from 'react'

export function useFile (e) {
  const [fileSizeError, setFileSizeError] = useState('')
  const [resetValue, setResetValue] = useState()
  let imgFile
  function handleFile (e) {
    imgFile = e.target.files[0]
    if (imgFile?.size > 3000000) {
      setFileSizeError('La imagen debe tener un tamaño menor a 3MB')
      setResetValue({})
      setTimeout(() => {
        setFileSizeError('')
      }, 5000)
    } else {
      return imgFile
    }
  }

  return { fileSizeError, resetValue, handleFile, imgFile }
}
