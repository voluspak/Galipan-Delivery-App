import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import ErrorFieldsNotificacion from './ErrorFieldsNotificacion'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useAddigForm from '../../Hooks/useAddingForm'

const AddingForm = () => {
  const { handleAddingNewProd, handleImage, preview, imgUrl, errorFields } = useAddigForm()

  return (
    <>
      <main className='w-screen h-screen relative bg-gradient-to-tr from-orange-500 to-yellow-500 flex flex-col justify-center items-center gap-10'>
        <h1 className='text-amber-900 text-6xl font-bold'>Añadir nuevo producto</h1>
        <Link to='/adminlogin' className='bg-white bg-opacity-50 rounded-full flex justify-center items-center w-10 h-10 absolute top-8 left-20 text-amber-900'><BiArrowBack className='text-3xl hover:text-4xl' /></Link>
        <form encType='multipart/form-data' onSubmit={handleAddingNewProd} className='gap-5 bg-white bg-opacity-50 backdrop-blur-sm w-1/3 h-4/5 flex flex-col justify-around items-start p-5 rounded-md shadow-lg'>

          <div className='flex flex-col gap-1 w-48'>
            <label className='text-amber-700 font-bold text-xl'>Nombre</label>
            <input required placeholder='Rol de Canela' className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' type='text' name='name' />
          </div>

          <div className='flex flex-col'>
            <label className='text-amber-700 font-bold text-xl'>Precio</label>
            <small className='text-red-800 italic'>*Los simbolos monetarios se mostraran de forma automática cuando se cree el producto</small>
            <input required placeholder='26' className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' type='number' name='price' />
          </div>

          <div className='flex flex-col'>
            <label className='text-amber-700 font-bold text-xl'>Categoria</label>
            <select required className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' name='category'>
              <option disabled>Escoge una categoria</option>
              <option value='roles'>Roles</option>
              <option value='panaderia'>Panaderia</option>
              <option value='tortasYCupcakes'>Tortas y Cupcakes</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label className='text-amber-700 font-bold text-xl'>Unidad descriptiva</label>
            <input required placeholder='x 6 unid' className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' type='text' name='unid' />
          </div>

          <div className='flex flex-col'>
            <label className='text-amber-700 font-bold text-xl'>Url de la foto</label>
            <input required className='italic relative px-2 py-1 focus:outline-2 focus:outline-orange-400' type='text' name='img' placeholder='https://www.galipan-pan.com/' onChange={handleImage} />
            {imgUrl && <img src={preview} className='absolute bottom-12 right-5 w-24 h-24 object-cover' />}
          </div>

          <ErrorFieldsNotificacion message={errorFields} />
          <button type='submit' className='text-white bg-orange-600 rounded-md text-lg w-28 h-26 self-center'>Crear</button>
        </form>
      </main>
      <ToastContainer />
    </>
  )
}

export default AddingForm
