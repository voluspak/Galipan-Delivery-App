import { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
// import products from '../Mocks/productsData.json'
import { getProducts } from '../Services/getProducts'

export default function useProducts () {
  const [prods, setProds] = useState()
  const { category } = useParams()

  useMemo(async () => {
    const data = await getProducts()
    console.log('memo render')
    setProds(data)
  }, [])
  useEffect(() => {
    async function filterCategories () {
      const products = await getProducts()
      console.log(category)
      if (category) {
        const filteredProd = products.filter(prod => prod.category === category)
        console.log(filteredProd)
        setProds(filteredProd)
      } else {
        setProds(products)
      }
    }

    filterCategories()
  }, [category])
  return { prods }
}
