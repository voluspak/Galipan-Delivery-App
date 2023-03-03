import React, { useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

const Counter = () => {
  const [contador, setContador] = useState(0)

  if (contador === 0) {
    return (<button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' onClick={() => setContador(contador + 1)} /></button>)
  } else {
    return (
      <div className='flex gap-1'>
        <input type='text' readOnly value={contador} className='rounded text-center w-8 h-8 self-center' />
        <div className='flex flex-col'>
          <button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' onClick={() => setContador(contador + 1)} /></button>
          <button><AiOutlineMinusCircle className='h-auto w-6 hover:text-gray-700' onClick={() => setContador(contador - 1)} /></button>
        </div>
      </div>
    )
  }
}

export default Counter
