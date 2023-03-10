import { useState } from 'react'

export function useFields ({ type }) {
  const [value, setValue] = useState()

  const handleOnChange = (e) => {
    setValue(e.target.value)
  }

  return { type, value, handleOnChange }
}
