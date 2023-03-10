import React from 'react'
import FileErrorNotification from './FileErrorNotification'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useFields } from '../../Hooks/useFields'
import { useFile } from '../../Hooks/useFile'

const AddingForm = () => {
  const { fileSizeError, resetValue, handleFile } = useFile()
  const prodName = useFields({ type: 'text' })
  const prodUnid = useFields({ type: 'text' })
  const prodCategory = useFields({ type: 'text' })
  const prodPrice = useFields({ type: 'number' })

  return (
    <main className='w-screen h-screen relative bg-gradient-to-tr from-orange-500 to-yellow-500 flex flex-col justify-center items-center gap-10'>
      <h1 className='text-amber-900 text-6xl font-bold'>Añadir nuevo producto</h1>
      <Link to='/adminlogin' className='bg-white bg-opacity-50 rounded-full flex justify-center items-center w-10 h-10 absolute top-8 left-20 text-amber-900'><BiArrowBack className='text-3xl hover:text-4xl' /></Link>
      <form className='gap-5 bg-white bg-opacity-50 backdrop-blur-sm w-1/3 h-4/5 flex flex-col justify-around items-start p-5 rounded-md shadow-lg'>

        <div className='flex flex-col gap-1 w-48'>
          <label className='text-amber-700 font-bold text-xl'>Nombre</label>
          <input placeholder='Rol de Canela' className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' {...prodName} name='name' />
        </div>

        <div className='flex flex-col'>
          <label className='text-amber-700 font-bold text-xl'>Precio</label>
          <small className='text-red-800 italic'>*Los simbolos monetarios se mostraran de forma automática cuando se cree el producto</small>
          <input placeholder='26' className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' {...prodPrice} name='price' />
        </div>

        <div className='flex flex-col'>
          <label className='text-amber-700 font-bold text-xl'>Categoria</label>
          <input placeholder='roles' className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' {...prodCategory} name='category' />
        </div>

        <div className='flex flex-col'>
          <label className='text-amber-700 font-bold text-xl'>Unidad descriptiva</label>
          <input placeholder='x 6 unid' className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' {...prodUnid} name='unid' />
        </div>

        <div className='flex flex-col'>
          <label className='text-amber-700 font-bold text-xl'>Foto o Imagen</label>
          <small className='text-red-800 italic'>*Debe ser menor a 3MB</small>
          <FileErrorNotification message={fileSizeError} />
          <input id='files' className='px-2 py-1 focus:outline-2 focus:outline-orange-400 text-red-800 rounded-md' type='file' name='img' accept='image/*' value={resetValue} onChange={handleFile} />
        </div>

        <button className='text-white bg-orange-600 rounded-md text-lg w-28 h-26 self-center'>Crear</button>
      </form>
    </main>
  )
}

export default AddingForm
