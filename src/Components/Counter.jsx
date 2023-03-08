import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import useCounter from '../Hooks/useCounter'

const Counter = ({ prod }) => {
  const { contador, sumHandle, minusHandle } = useCounter(prod)
  if (contador === 0) {
    return (<button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' onClick={() => sumHandle(prod)} /></button>)
  } else {
    return (
      <div className='flex gap-1'>
        <input type='text' readOnly value={contador} className='rounded text-center w-8 h-8 self-center' />
        <div className='flex flex-col'>
          <button><AiOutlinePlusCircle className='h-auto w-6 hover:text-gray-700' onClick={() => sumHandle(prod)} /></button>
          <button><AiOutlineMinusCircle className='h-auto w-6 hover:text-gray-700' onClick={() => minusHandle(prod)} /></button>
        </div>
      </div>
    )
  }
}

export default Counter
