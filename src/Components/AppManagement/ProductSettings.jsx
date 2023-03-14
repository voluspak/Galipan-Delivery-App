import React from 'react'
import { GrClose } from 'react-icons/gr'

const ProductSettings = ({ name, price, unid, id, img, show, setShow }) => {
  console.log('estas abriendo la configuracion de ' + name + id)
  return (
    <div className='fixed bg-opacity-10 backdrop-blur-sm bg-black  w-full h-full top-0 left-0 z-20 flex items-center justify-center'>
      <div className='bg-white w-4/5 h-4/5 rounded p-3 shadow-md relative'>
        <h4 className='text-2xl font-bold text-orange-500'>Ajustes</h4>
        <button onClick={() => setShow(!show)} className='absolute p-1 rounded-full top-5 right-5 hover:bg-slate-100 text-gray-500'><GrClose /></button>
        <form encType='multipart/form-data' className='gap-5 w-4/8 grid grid-cols-autoFit p-5'>

          <div className='flex flex-col gap-1 w-48'>
            <label className='text-amber-700 font-bold text-xl'>Nombre</label>
            <input required placeholder={name} className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' type='text' name='name' />
          </div>

          <div className='flex flex-col'>
            <label className='text-amber-700 font-bold text-xl'>Precio</label>
            <small className='text-red-800 italic'>*Los simbolos monetarios se mostraran de forma automática cuando se cree el producto</small>
            <input required placeholder={price} className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' type='number' name='price' />
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
            <input required placeholder={unid} className='px-2 py-1 focus:outline-2 focus:outline-orange-400 w-48 rounded-md' type='text' name='unid' />
          </div>

          <div className='flex flex-col'>
            <label className='text-amber-700 font-bold text-xl'>Url de la foto</label>
            <input required className='italic relative px-2 py-1 focus:outline-2 focus:outline-orange-400' type='text' name='img' placeholder={img} />
            {/* {imgUrl && <img src={preview} className='absolute bottom-12 right-5 w-24 h-24 object-cover' />} */}
          </div>

          <button type='submit' className='text-white bg-orange-600 rounded-md text-lg w-28 h-26 self-center'>Crear</button>
        </form>
      </div>
    </div>
  )
}

export default ProductSettings
