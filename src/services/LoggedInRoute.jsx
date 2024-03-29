import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const LoggedInRoute = () => {
    const token = localStorage.getItem('token')
  return token? <Navigate to={'/'} /> : <Outlet />
}

export default LoggedInRoute