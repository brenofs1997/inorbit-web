import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthGoogleContext } from '../contexts/auth-google'

export function PrivateRoutes() {
  const { signed } = useContext(AuthGoogleContext)
  return signed ? <Outlet /> : <Navigate to="/" />
}
