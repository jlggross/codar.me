import { firebaseServer } from '../../config/firebase/server'

const db = firebaseServer.firestore()
const profiles = db.collection('profiles')

export default async (req, res) => {
  const [, token] = req.headers.authorization.split(' ')

  // user_id is the variable returned by firebase
  const { user_id: userId } = await firebaseServer.auth().verifyIdToken(token)
  const username = req.body.username.toLowerCase()
  const email = req.body.email

  console.log('-------- NEW USER -------')
  console.log('token: ', token)
  console.log('username:', username)
  console.log('email:', email)
  console.log('user_id:', userId)
  console.log('------------------------')

  profiles.doc(username).set({
    userId,
    username,
    email,
  })

  res.status(200).json({ message: `User '${username}' has been registered.` })
}
