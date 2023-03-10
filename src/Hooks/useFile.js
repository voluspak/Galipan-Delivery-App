import { useState } from 'react'

export function useFile () {
  const [fileSizeError, setFileSizeError] = useState('')
  const [imgFile, setImgFile] = useState()
  const [resetValue, setResetValue] = useState('')

  function handleFile (e) {
    const img = e.target.files[0]
    console.log(img.size)
    if (img?.size > 3000000) {
      setFileSizeError('La imagen debe tener un tamaño menor a 3MB')
      setResetValue('')
      setTimeout(() => {
        setFileSizeError('')
      }, 5000)
    } else {
      setImgFile(img)
      console.log(imgFile)
    }
  }

  return { fileSizeError, resetValue, handleFile }
}
