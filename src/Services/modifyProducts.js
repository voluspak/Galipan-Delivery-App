import axios from 'axios'

export async function modifyProduct (id, modifications, token) {
  const PUT_URL = `http://localhost:3001/api/products/${id}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    }
  }

  try {
    const newProd = axios.put(PUT_URL, modifications, config)
    const { data } = await newProd
    return data
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo hacer la peticion correctamente')
  }
}
