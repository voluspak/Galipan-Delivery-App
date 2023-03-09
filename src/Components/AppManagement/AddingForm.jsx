import React, { useState } from 'react'
import FileErrorNotification from './FileErrorNotification'

const AddingForm = () => {
  const [fileSizeError, setFileSizeError] = useState('')
  const [imgFile, setImgFile] = useState()
  const [file, setFile] = useState()

  function handleFile (e) {
    const img = e.target.files[0]
    console.log(img)
  }

  return (
    <form>
      <h1>Añadir nuevo producto</h1>
      <div>
        <label>Nombre</label>
        <input type='text' name='name' />
      </div>
      <div>
        <label>Precio</label>
        <small>Los simbolos monetarios se mostraran de forma automática cuando se cree el producto</small>
        <input type='number' name='price' />
      </div>
      <div>
        <label>Categoria</label>
        <input type='text' name='category' />
      </div>
      <div>
        <label>Unidad descriptiva</label>
        <input type='text' name='unid' />
      </div>
      <div>
        <label>Foto o Imagen</label>
        <FileErrorNotification message={fileSizeError} />
        <input type='file' name='img' accept='image/*' value={file} onChange={handleFile} />
      </div>

      <button>Crear</button>
    </form>
  )
}

export default AddingForm
