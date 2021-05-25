import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDB-g1W6NOdFp90sxlz_7ajEoJ4V9stp5I',
  authDomain: 'clocker-jlggross.firebaseapp.com',
  projectId: 'clocker-jlggross',
  storageBucket: 'clocker-jlggross.appspot.com',
  messagingSenderId: '871205503291',
  appId: '1:871205503291:web:50620fedf3d33ef04bf71e',
  measurementId: 'G-RWXE98Z25F',
}

export default firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)
