import { firebaseServer } from './../../config/firebase/server'

const db = firebaseServer.firestore()
const agenda = db.collection('agenda')

export default async (req, res) => {
  const [, token] = req.headers.authorization.split(' ')
  console.log(req.query)

  // Check if user is authorized
  if (token === 'undefined') {
    console.log('Error: token undefined')
    return res.status(401)
  }

  try {
    const { user_id } = await firebaseServer.auth().verifyIdToken(token)
    console.log(user_id)

    const snapshot = await agenda
      .where('userId', '==', user_id)
      .where('when', '==', req.query.when)
      .get()

    return res.status(200).json(snapshot.docs)
  } catch (error) {
    console.log('Firebase Error:', error)
    return res.status(401)
  }
}
