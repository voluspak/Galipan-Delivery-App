import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/products'

export async function createNewProduct (productToAdd, token) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    }
  }

  try {
    const addingProd = axios.post(baseUrl, productToAdd, config)
    const { data } = await addingProd
    return data
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo hacer la peticion correctamente')
  }
}
