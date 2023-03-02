import React from 'react'
import App from '../src/App'
import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'

describe('App overall testing', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<App />)
  })
})
