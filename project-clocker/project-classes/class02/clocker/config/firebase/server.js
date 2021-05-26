import firebase from 'firebase/app'
import firebaseServer from 'firebase-admin'

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp({
      credential: firebaseServer.credential.cert({
        type: 'service_account',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url:
          'https://www.googleapis.com/oauth2/v1/certs',
        firebase_project_id: process.env.FIREBASE_PROJECT_ID,
        firebase_private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        firebase_private_key: process.env.FIREBASE_PRIVATE_KEY,
        firebase_client_email: process.env.FIREBASE_CLIENT_EMAIL,
        firebase_client_id: process.env.FIREBASE_CLIENT_ID,
        firebase_client_cert: process.env.FIREBASE_CLIENT_CERT,
      }),
    })

export { firebaseServer }
