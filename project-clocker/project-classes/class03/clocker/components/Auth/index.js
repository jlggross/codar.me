import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import { firebaseClient, persistenceMode } from './../../config/firebase/client'
import axios from 'axios'

const AuthContext = React.createContext([{}, () => {}])

export const logout = () => firebaseClient.auth().signOut()

export const login = async ({ email, password }) => {
  firebaseClient.auth().setPersistence(persistenceMode)

  try {
    await firebaseClient.auth().signInWithEmailAndPassword(email, password)
    return firebaseClient.auth().currentUser
  } catch (error) {
    console.log('Login Error:', error)
  }
}

export const signup = async ({ email, password, username }) => {
  try {
    //await firebaseClient.auth().createUserWithEmailAndPassword(email, password)
    const user = await login({ email, password })
    const token = await user.getIdToken()

    const { data } = await axios({
      method: 'post',
      url: '/api/profile',
      data: { username },
      headers: { Authorization: `Bearer ${token}` },
    })

    //console.log(data)
  } catch (error) {
    console.log('Signup Error:', error)
  }
}

export const useAuth = () => {
  const [auth] = useContext(AuthContext)
  return [auth, { login, logout, signup }]
}

// Get local state and pass to the context
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loading: true,
    user: false,
  })

  useEffect(() => {
    const unsubscribe = firebaseClient.auth().onAuthStateChanged((user) => {
      setAuth({
        loading: false,
        user,
      })
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}