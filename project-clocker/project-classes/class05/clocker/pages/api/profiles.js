import { firebaseServer } from '../../config/firebase/server'

const db = firebaseServer.firestore()
const profiles = db.collection('profiles')

export default async (req, res) => {
  const [, token] = req.headers.authorization.split(' ')
  const { user_id } = await firebaseServer.auth().verifyIdToken(token)

  //console.log('--------------------------------------')
  //console.log('body:', req.body)
  //console.log('token: ', token)
  //console.log('user_id:', user_id)
  //console.log('--------------------------------------')

  profiles.doc(req.body.username).set({
    userId: user_id,
    username: req.body.username,
  })

  res.status(200).json({ name: 'John Doe' })
}
