import { type ReactNode, createContext, useState, useEffect } from 'react'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  type User,
} from 'firebase/auth'
import { app } from '../services/firebase-config'
import { Navigate } from 'react-router-dom'

const provider = new GoogleAuthProvider()

interface AuthGoogleContextProps {
  signed: boolean | null
  user: User | null
  signInGoogle: () => void
  signOut: () => JSX.Element
}

interface AuthGoogleProviderProps {
  children: ReactNode
}

export const AuthGoogleContext = createContext<AuthGoogleContextProps>(
  {} as AuthGoogleContextProps
)

export function AuthGoogleProvider({ children }: AuthGoogleProviderProps) {
  const auth = getAuth(app)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    function loadStorageData() {
      const storageUser = sessionStorage.getItem('@AuthFirebase:user')
      const storageToken = sessionStorage.getItem('@AuthFirebase:token')
      if (storageToken && storageUser) {
        setUser(JSON.parse(storageUser))
      }
    }
    loadStorageData()
  }, [])

  async function signInGoogle() {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user
        setUser(user)
        sessionStorage.setItem('@AuthFirebase:token', token || '')
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
      })
      .catch(error => {
        console.error(error)
      })
  }

  function signOut() {
    sessionStorage.clear()
    setUser(null)
    return <Navigate to="/" />
  }

  return (
    <AuthGoogleContext.Provider
      value={{
        signed: !!user,
        user,
        signInGoogle,
        signOut,
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  )
}
