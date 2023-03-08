import React from 'react'
import list from '../../Mocks/productsData.json'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { useCart } from '../Hooks/useCart'
import { useModal } from '../Hooks/useModal'

const ModalCart = () => {
  const { cart, addToCart, deleteFromCart, removeOneFromCart, clearCart } = useCart()
  const { show, setShow } = useModal()
  return (
    <div className='bg-white min-w-modal w-2/4 min-h-modal max-h-96 rounded p-5 shadow-md relative'>
      <header className=' mb-3 flex items-center justify-between'>
        <h1 className='text-xl font-bold text-orange-500'>Carrito de compra</h1>
      </header>
      <button onClick={() => setShow(!show)} className='absolute p-1 rounded-full top-5 right-5 hover:bg-slate-100'><GrClose /></button>
      <hr />
      <table className='w-full md:table-auto table-fixed text-center'>
        <thead>
          <tr>
            <th> </th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {/* {cart.map(list[0] => ( */}
          <tr key={list[0].id} className=' border-y'>
            <td>
              <img src={list[0].img} className='mx-auto border-2 border-opacity-50 border-orange-500 rounded-full w-32 h-32 object-cover' />
            </td>
            <td>
              <span>{list[0].name}</span>
            </td>
            <td>
              COP{list[0].price}K
            </td>
            <td>
              <button onClick={removeOneFromCart} className='p-2 font-bold text-2xl text-red-700 active:text-red-500'>-</button>
              <span>{list[0].cant}</span>
              <button onClick={addToCart} className='p-2 font-bold text-green-700 active:text-green-500 text-lg'>+</button>
            </td>
            <td>
              <span>COP{list[0].price}K</span>
            </td>
            <td>
              <button onClick={deleteFromCart} className='p-2 text-2xl text-red-700 active:text-red-500'><RiDeleteBin5Line /></button>
            </td>
          </tr>
          {/* ))} */}
        </tbody>
        <tfoot>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td><strong>CANT TOTAL</strong></td>
            <td><strong>TOTAL</strong></td>
            <td> </td>
          </tr>
        </tfoot>
      </table>
      <hr />
      <footer className='flex justify-around items-center h-10 p-5'>
        <button className='p-5 rounded-md' clearCart={() => clearCart()}>Vaciar</button>
        <button className='p-5 rounded-md'>Comprar</button>
        <button className='p-5 rounded-md' clearCart={() => setShow(!show)}>Cancelar</button>
      </footer>
    </div>
  )
}

export default ModalCart
