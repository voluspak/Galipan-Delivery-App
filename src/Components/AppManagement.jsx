import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './AdminLogin'

const AppManagement = () => {
  return (
    <Routes>
      <Route index element={<AdminLogin />} />
    </Routes>
  )
}

export default AppManagement
