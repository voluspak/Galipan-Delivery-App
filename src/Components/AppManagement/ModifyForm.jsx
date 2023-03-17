import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaPowerOff } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import useProducts from '../../Hooks/useProducts'
import Loader from '../DeliveryApp/Loader'
import ProductSettings from './ProductSettings'
import { deleteProduct } from '../../Services/deleteProduct'
import { modifyProduct } from '../../Services/modifyProducts'

const ModifyForm = () => {
  const { prods } = useProducts()
  const [showSetting, setShowSetting] = useState(false)
  const [product, setProduct] = useState(null)
  const [displayProd, setDisplayProd] = useState()
  const [textColorDisplay, setTextColorDisplay] = useState('text-green-500')
  const [borderColorDisplay, setBorderColorDisplay] = useState('border-green-500')

  const toggleSettings = () => setShowSetting(!showSetting)

  const setCurrentProduct = item => {
    setProduct(item)
    toggleSettings()
  }

  function handleDelete (product) {
    const { id, name, unid, price } = product
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGIwM2YyOGM3ZDRkYmU4MjUxMWI1MiIsInVzZXJuYW1lIjoiYWRtaW4uZ2FsaXBhbi5jbyIsImlhdCI6MTY3ODY0OTkwNCwiZXhwIjoxNjgxMjQxOTA0fQ.xRxmyWMLpbK5iicy7DumEfRrDeDJRkN00GjnIxMsB0w'

    const removeOk = window.confirm(`
      ¿Estas seguro de querer eliminar este producto? \n
      ${name} \n
      COP${price}k \n
      ${unid}
      ID: ${id}
      `)

    if (removeOk) {
      try {
        window.alert(`${name}(ID: ${id}) \n Eliminado con éxito`)
        const removeProduct = deleteProduct(id, token)
        return removeProduct
      } catch (error) {
        console.error(error)
        throw new Error('Hubo problemas al eliminar el producto')
      }
    }
  }

  function handleDisplay (product) {
    setDisplayProd(product.display)
    setDisplayProd(!displayProd)
    product.display = displayProd

    console.log(product.name, product.display)

    if (displayProd) {
      setBorderColorDisplay('border-green-500')
      setTextColorDisplay('text-green-500')
    } else {
      setBorderColorDisplay('border-red-500')
      setTextColorDisplay('text-red-500')
    }

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGIwM2YyOGM3ZDRkYmU4MjUxMWI1MiIsInVzZXJuYW1lIjoiYWRtaW4uZ2FsaXBhbi5jbyIsImlhdCI6MTY3ODY0OTkwNCwiZXhwIjoxNjgxMjQxOTA0fQ.xRxmyWMLpbK5iicy7DumEfRrDeDJRkN00GjnIxMsB0w'

    try {
      const newProd = modifyProduct(product.id, product, token)
      return newProd
    } catch (error) {
      console.log(error)
      throw new Error('Hubo un problema al modificar el producto')
    }
  }

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

                    <button onClick={() => handleDisplay(item)} className={`bg-white border ${borderColorDisplay} w-7 py-1 rounded-md`}>
                      <FaPowerOff className={` text-sm mx-auto  ${textColorDisplay}`} />
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
