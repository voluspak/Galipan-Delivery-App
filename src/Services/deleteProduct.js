import axios from 'axios'

export async function deleteProduct (id, token) {
  const DELETE_URL = `http://localhost:3001/api/products/${id}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    }
  }

  try {
    const newProd = axios.delete(DELETE_URL, config)
    const { data } = await newProd
    return data
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo hacer la peticion correctamente')
  }
}
