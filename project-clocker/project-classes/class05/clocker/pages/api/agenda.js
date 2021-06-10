import { firebaseServer } from './../../config/firebase/server'

const db = firebaseServer.firestore()
const agenda = db.collection('agenda')

export default async (req, res) => {
  const [, token] = req.headers.authorization.split(' ')

  // Check if user is authorized
  if (token === 'undefined') {
    console.log('Error: token undefined')
    return res.status(401)
  }

  try {
    // Return has to be user_id
    const { user_id: userId } = await firebaseServer.auth().verifyIdToken(token)
    console.log('userId: ', userId)
    console.log('Date:', req.query.date)

    const snapshot = await agenda
      .where('userId', '==', userId)
      .where('date', '==', req.query.date)
      .get()

    const docs = snapshot.docs.map((doc) => doc.data())

    console.log('------------------------')
    console.log('userId: ', userId)
    console.log('date:', req.query.date)
    console.log('docs:', docs)
    console.log('------------------------')

    return res.status(200).json(docs)
  } catch (error) {
    console.log('API Agenda - Firebase Error:', error)
    return res.status(401)
  }
}
