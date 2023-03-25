import { Navigate } from "react-router-dom"

// got redirect back from 2FA email
export const VerifyPage = () => {
  return <Navigate to='/vagabond-list' />
}
