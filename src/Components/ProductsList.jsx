import React, { useEffect, useState } from 'react'
import Counter from './Counter'
import products from '../../Mocks/productsData.json'
import { useParams } from 'react-router-dom'
// import ModalItemDetail from './ModalItemDetail'

const ProductsList = () => {
  const [prods, setProds] = useState([])
  const { category } = useParams()

  function getProducts () {
    if (category) {
      const filteredProd = products.filter(prod => prod.category === category)
      setProds(filteredProd)
    } else {
      setProds(products)
    }
  }

  useEffect(() => getProducts(), [])
  useEffect(() => getProducts(), [category])
  return (
    <section className=' w-4/5 grid grid-cols-autoFit gap-5 place-items-center'>
      {
      prods.map(prod => (
        <div key={prod.id} className=' bg-orange-100 rounded w-64 h-96 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform'>
          <figure>
            <img src={prod.img} title={prod.name} className='h-60 w-64 object-cover rounded' />
          </figure>
          <figcaption className='flex flex-col justify-around items-center'>
            <h3 className=' text-orange-500 text-xl'>{prod.name}</h3>
            <span className='italic'>COP{prod.price}k
              <span> {prod.unid}</span>
            </span>
            <span className='font-bold'>+ Delivery</span>
            <Counter prod={prod} />
          </figcaption>
        </div>
      ))
    }
    </section>
  )
}

export default ProductsList
