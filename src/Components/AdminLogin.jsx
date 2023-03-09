import React from 'react'

const AdminLogin = () => {
  return (
    <div className='bg-black backdrop-blur-sm fixed z-10 top-0 left-0 w-full h-full grid place-items-center bg-opacity-50'>
      <div className='bg-white rounded-md w-1/4 h-3/5 flex flex-col gap-5 items-center justify-center shadow-xl'>
        <img src='./assets/Logo.jpg' className=' w-52 h-32' />
        <form className='flex flex-col gap-3 items-center '>
          <label className='font-bold text-orange-500 '>Username</label>
          <input required type='text' className='rounded-md w-3/4 peer/user border-2 px-2 py-1 focus:outline-2 focus:outline-orange-400' />

          <label className='font-bold text-orange-500 '>Contraseña</label>
          <input required type='password' className='rounded-md w-3/4 peer/password border-2 px-2 py-1 focus:outline-2 focus:outline-orange-400' />

          <button className='rounded-md shadow-md active:shadow-lg w-2/4 bg-orange-500 text-gray-100 active:bg-orange-400 active:text-white '>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
