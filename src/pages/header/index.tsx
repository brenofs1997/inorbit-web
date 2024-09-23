import { useContext } from 'react'
import { AuthGoogleContext } from '../../contexts/auth-google'
import notFoundPhotoUser from '../../assets/not-user-photo.svg'
import { Button } from '../../components/ui/button'
import { LogOut } from 'lucide-react'
export function Header() {
  const { user, signOut } = useContext(AuthGoogleContext)
  const avatar = user?.photoURL
  return (
    <header className="flex items-center justify-end p-8">
      <div className="flex items-center space-x-4">
        <img
          src={avatar ? avatar : notFoundPhotoUser}
          alt="useravatar"
          className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
        />

        <Button onClick={signOut}>
          <LogOut className="size-12" />
          Log out
        </Button>
      </div>
    </header>
  )
}
