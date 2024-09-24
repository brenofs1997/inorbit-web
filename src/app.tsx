import { AuthGoogleProvider } from './contexts/auth-google'
import { AppRoutes } from './routes/routes'

export function App() {
  console.log('env')
  console.log(process.env.STORAGE_BUCKET_FIREBASE)
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  )
}
