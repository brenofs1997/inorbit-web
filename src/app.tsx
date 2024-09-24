import { AuthGoogleProvider } from './contexts/auth-google'
import { AppRoutes } from './routes/routes'

export function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  )
}
