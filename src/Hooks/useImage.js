import { useState, useEffect } from 'react'

export function useImage (e) {
  const [imgUrl, setImgUrl] = useState('')
  const [preview, setPreview] = useState('')

  function handleImage (e) {
    if (!e.target.value) {
      setImgUrl(undefined)
      return
    }
    setImgUrl(e.target.value)
  }

  useEffect(() => {
    if (!imgUrl) {
      setPreview(undefined)
    } else {
      setPreview(imgUrl)
    }
  }, [imgUrl])

  return { handleImage, preview, imgUrl }
}
