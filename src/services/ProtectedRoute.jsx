import React from 'react'
import {Navigate, Outlet, useNavigate} from 'react-router-dom'

const ProtectedRoute = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  return token ? <Outlet /> : <Navigate to="/roadmap" />
}

export default ProtectedRoute