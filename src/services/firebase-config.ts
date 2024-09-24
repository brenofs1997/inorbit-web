import { initializeApp } from 'firebase/app'
const {
  VITE_API_KEY_FIREBASE,
  VITE_AUTH_DOMAIN_FIREBASE,
  VITE_PROJECT_ID_FIREBASE,
  VITE_STORAGE_BUCKET_FIREBASE,
  VITE_MESSAGING_SENDER_ID_FIREBASE,
  VITE_APP_ID_FIREBASE,
} = import.meta.env

const firebaseConfig = {
  apiKey: API_KEY_FIREBASE || '',
  authDomain: AUTH_DOMAIN_FIREBASE || '',
  projectId: PROJECT_ID_FIREBASE || '',
  storageBucket: STORAGE_BUCKET_FIREBASE || '',
  messagingSenderId: MESSAGING_SENDER_ID_FIREBASE || '',
  appId: APP_ID_FIREBASE || '',
}

export const app = initializeApp(firebaseConfig)
