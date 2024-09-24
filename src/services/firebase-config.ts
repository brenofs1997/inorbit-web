import { initializeApp } from 'firebase/app'
const {
  API_KEY_FIREBASE,
  AUTH_DOMAIN_FIREBASE,
  PROJECT_ID_FIREBASE,
  STORAGE_BUCKET_FIREBASE,
  MESSAGING_SENDER_ID_FIREBASE,
  APP_ID_FIREBASE,
} = process.env

const firebaseConfig = {
  apiKey: API_KEY_FIREBASE || '',
  authDomain: AUTH_DOMAIN_FIREBASE || '',
  projectId: PROJECT_ID_FIREBASE || '',
  storageBucket: STORAGE_BUCKET_FIREBASE || '',
  messagingSenderId: MESSAGING_SENDER_ID_FIREBASE || '',
  appId: APP_ID_FIREBASE || '',
}

export const app = initializeApp(firebaseConfig)
