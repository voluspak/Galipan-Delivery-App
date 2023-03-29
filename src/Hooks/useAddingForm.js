import { useState } from 'react'
import useUser from './useUser'
import { useImage } from './useImage'
import { toast } from 'react-toastify/dist/components'
import { createProduct } from '../Services/products'

export default function useAddigForm () {
  const { user } = useUser()
  const { handleImage, preview, imgUrl } = useImage()
  const [errorFields, setErrorFields] = useState('')

  function notify (message) {
    toast(message, {
      autoClose: 5000,
      position: 'bottom-right',
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
      role: 'alert'
    })
  }

  function handleAddingNewProd (e) {
    e.preventDefault()
    const prodToAdd = Object.fromEntries(new window.FormData(e.target))
    const { token } = user
    prodToAdd.img = imgUrl

    if (prodToAdd.length < 5) {
      setErrorFields('No pueden haber campos vacíos')

      setTimeout(() => setErrorFields(''), 5000)
      return
    }

    try {
      const createProdReq = createProduct(prodToAdd, token)
      notify('¡Producto creado exitosamente!')
      return createProdReq
    } catch (error) {
      notify('Error al Crear el producto')
      console.log(error)
      throw new Error('Hubo un problema al crear el producto')
    }
  }

  return { handleAddingNewProd, handleImage, preview, errorFields, imgUrl }
}
