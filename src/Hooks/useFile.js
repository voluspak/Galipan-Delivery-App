import { useState, useEffect } from 'react'

export function useFile (e) {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  function handleFile (e) {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
    } else {
      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
    }
  }, [selectedFile])

  return { handleFile, preview, selectedFile }
}
