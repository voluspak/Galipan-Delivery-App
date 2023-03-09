import React from 'react'
import '../../../styles.css'
import { Link } from 'react-router-dom'

const GeneralManagementMenu = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-10 justify-center items-center outline p-5 bg-gradient-to-tr from-orange-500 to-yellow-500'>
      <div className='bg-white backdrop-blur-sm bg-opacity-50 rounded-md p-3'>
        <h1 className='text-amber-900 text-6xl font-bold'>Configuración</h1>
      </div>

      <div className='grid grid-cols-autoFit gap-5 w-96 place-items-center'>

        <Link to='/agregarProducto' className='p-5 w-96 rounded-xl bg-white bg-opacity-50 backdrop-blur-sm text-center shadow-xl'>
          <h2 className='text-amber-700 text-4xl'>Agregar nuevo producto</h2>
        </Link>

        <Link to='/modificarProducto' className='p-5 w-96 rounded-xl bg-white text-center shadow-md bg-opacity-50 backdrop-blur-sm'>
          <h2 className='text-amber-700 text-4xl'>Modificar o eliminar un producto</h2>
        </Link>

        <Link to='/disponibilidadProducto' className='p-5 w-96 rounded-xl bg-white text-center shadow-md bg-opacity-50 backdrop-blur-sm'>
          <h2 className='text-amber-700 text-4xl '>Cambiar disponibilidad de productos</h2>
        </Link>
      </div>
    </div>
  )
}

export default GeneralManagementMenu
