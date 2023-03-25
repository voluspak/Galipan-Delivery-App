import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaPowerOff } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import useProducts from '../../Hooks/useProducts'
import Loader from '../DeliveryApp/Loader'
import ProductSettings from './ProductSettings'
import { deleteProduct, updateProduct } from '../../Services/products'
import useUser from '../../Hooks/useUser'

const ModifyForm = () => {
  const { prods } = useProducts()
  const { user } = useUser()
  const [showSetting, setShowSetting] = useState(false)
  const [product, setProduct] = useState(null)
  const [displayProd, setDisplayProd] = useState()

  const enableColor = {
    text: 'text-green-500',
    border: 'border-green-500'
  }
  const disableColor = {
    text: 'text-red-500',
    border: 'border-red-500'
  }

  const toggleSettings = () => setShowSetting(!showSetting)

  const setCurrentProduct = item => {
    setProduct(item)
    toggleSettings()
  }

  function handleDelete (product) {
    const { id, name, unid, price } = product
    const { token } = user

    const removeOk = window.confirm(`
      ¿Estas seguro de querer eliminar este producto? \n
      ${name} \n
      COP${price}k \n
      ${unid}
      ID: ${id}
      `)

    if (removeOk) {
      try {
        const removeProduct = deleteProduct(id, token)
        window.alert(`${name}(ID: ${id}) \n Eliminado con éxito`)
        return removeProduct
      } catch (error) {
        console.error(error)
        throw new Error('Hubo problemas al eliminar el producto')
      }
    }
  }

  function changeDisplay (product) {
    const updatedDisplayState = {
      ...product,
      display: displayProd
    }
    console.log(updatedDisplayState)
    const { token } = user

    try {
      const newProd = updateProduct(product.id, updatedDisplayState, token)
      console.log('Change setted')
      return newProd
    } catch (error) {
      console.log(error)
      throw new Error('Hubo un problema al modificar el producto')
    }
  }

  useEffect(() => {
    console.log('effect ejecutado')
  }, [changeDisplay])

  if (!prods) {
    return (<Loader />)
  } else {
    return (
      <>
        <main className='w-screen h-screen relative bg-gradient-to-tr from-orange-500 to-yellow-500 flex flex-col justify-center items-center gap-10'>
          <h1 className='text-amber-900 text-6xl font-bold'>Modificar/Eliminar Productos</h1>
          <Link to='/adminlogin' className='bg-white bg-opacity-50 rounded-full flex justify-center items-center w-10 h-10 absolute top-8 left-20 text-amber-900'><BiArrowBack className='text-3xl hover:text-4xl' /></Link>

          <section className='gap-5 bg-white bg-opacity-50 backdrop-blur-sm w-4/5 h-4/5 flex flex-col justify-around items-center p-5 rounded-md shadow-lg'>
            <h2 className='text-amber-900 text-2xl font-bold'>Escoge un producto</h2>

            <div className=' w-full h-full grid grid-cols-autoFit place-items-center'>
              {prods.map(item => (
                <div key={item.id} className='flex h-30 w-64 justify-evenly items-center bg-white rounded-lg shadow-lg'>
                  <img src={item.img} alt={item.name} className='rounded-md w-24 h-24 object-cover shadow-md' />
                  <div className='flex flex-col items-center justify-center gap-3'>

                    <span className=' w-28 text-sm text-center font-bold'>{item.name}</span>
                    <div className='flex gap-2'>
                      <label htmlFor={item.id} role='button' className='bg-gray-400 cursor-pointer w-7 py-1 rounded-md'>
                        <IoMdSettings className=' text-sm mx-auto' />
                      </label>
                      <input onChange={() => setCurrentProduct(item)} id={item.id} type='checkbox' hidden />

                      <button onClick={() => handleDelete(item)} className='bg-red-500 w-7 py-1 rounded-md'>
                        <RiDeleteBin5Line className=' text-sm mx-auto text-white' />
                      </button>
                    </div>

                    <button
                      onChange={() => setDisplayProd(!item.display)}
                      onClick={() => changeDisplay(item)}
                      className={`bg-white border ${item.display ? enableColor.border : disableColor.border} w-7 py-1 rounded-md`}
                    >
                      <FaPowerOff className={` text-sm mx-auto  ${item.display ? enableColor.text : disableColor.text}`} />
                    </button>
                  </div>
                </div>
              ))}
              {showSetting && (
                <ProductSettings
                  {...product}
                  setShow={toggleSettings}
                />
              )}
            </div>
          </section>
        </main>
      </>
    )
  }
}

export default ModifyForm
