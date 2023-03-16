import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoMdSettings } from 'react-icons/io'
import useProducts from '../../Hooks/useProducts'
import Loader from '../DeliveryApp/Loader'
import ProductSettings from './ProductSettings'

const ModifyForm = () => {
  const { prods } = useProducts()
  const [showSetting, setShowSetting] = useState(false)

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
                <div key={item.id} className='flex h-30 w-60 justify-evenly items-center bg-white rounded-lg shadow-lg'>
                  <img src={item.img} alt={item.name} className='rounded-md w-24 h-24 object-cover shadow-md' />
                  <div className='flex flex-col items-center justify-center gap-3'>

                    <span className=' w-28 text-sm text-center font-bold'>{item.name}</span>
                    <label htmlFor={item.id} className='bg-gray-400 cursor-pointer w-10 py-1 rounded-md'><IoMdSettings className='mx-auto' /></label>
                    <input onChange={() => setShowSetting(!showSetting)} id={item.id} type='checkbox' hidden />

                    <button className='bg-red-500 w-10 py-1 rounded-md'><RiDeleteBin5Line className='mx-auto text-white' /></button>
                  </div>
                  <ProductSettings {...item} show={showSetting} setShow={setShowSetting} />
                </div>
              ))}
            </div>

          </section>
        </main>
      </>
    )
  }
}

export default ModifyForm
