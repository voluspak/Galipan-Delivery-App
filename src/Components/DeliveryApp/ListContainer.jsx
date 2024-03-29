import React from 'react'
import ProductsList from './ProductsList'
import useProducts from '../../Hooks/useProducts'
import Loader from './Loader'

const ListContainer = () => {
  const { prods, loader } = useProducts()

  return (
    <>
      {loader && <Loader />}
      <ProductsList prods={prods} />
    </>
  )
}

export default ListContainer
