import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthGoogleContext } from '../../contexts/auth-google'

export function Login() {
  const { signInGoogle, signed } = useContext(AuthGoogleContext)

  async function handleLoginFromGoogle() {
    await signInGoogle()
  }

  if (!signed) {
    return (
      <button type="button" onClick={handleLoginFromGoogle}>
        Logar com o Google
      </button>
    )
  }

  return <Navigate to="/Home" />
}
