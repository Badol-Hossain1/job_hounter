import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'
import auth from '../firebase/firebase'

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log('🚀 ~ AuthProvider ~ user:', user)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
