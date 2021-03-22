import React, { useState, } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useRouter } from 'next/router';


const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const redirectProtectedRoute = (href, user) => {
    if (user) {
        router.push({
          pathname: href,
          query: { uid: user.uid },
        })
    }
}
  const checkAuthenticatedUser = () => {
    if (!user) {
      router.push('/authentication/register')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        redirectProtectedRoute,
        checkAuthenticatedUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider};