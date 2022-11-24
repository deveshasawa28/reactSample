import { Navigate, useLocation } from 'react-router-dom'
import { storageActions } from '../actions'
export default function CheckAuth({ children }) {
  let location = useLocation()
  const isAuthenticated = storageActions.getItem('isAuthenticated')
  const role = storageActions.getItem('role')
  if (!isAuthenticated) {
    return children
  } else {
    if (['admin', 'superAdmin'].indexOf(role) >= 0) {
      return <Navigate to='/home' state={{ from: location }} replace />
    } else {
      return <Navigate to='/shared-user/home' state={{ from: location }} replace />
    }
  }
}
