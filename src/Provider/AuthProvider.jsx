import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { auth } from '../firbase/firbase.config';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const  [userProfile, setUserProfile] = useState({});
    const [user, setUser] = useState(null);
    console.log("user tt", user)
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updatUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        });
        
    }
    const singOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured hhg', currentUser)
            setLoading(false)
        })
        return() => {
            unsubscribe();
        }
    }, [])

   useEffect(() => {
  if (user?.email) {
    const encodedEmail = encodeURIComponent(user.email);

    axios
      .get(`http://localhost:3000/user-profile?email=${encodedEmail}`)
      .then((res) => {
        setUserProfile(res.data);
      })
      .catch((err) => {
        console.error("User profile fetch error:", err);
      });
  }
}, [user]);



    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        singIn,
        logOut,
        updatUserProfile,
        singOutUser,
        userProfile
       


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
    
};
export const useAuth = () => {
    return useContext(AuthContext);
    
  };
  

export default AuthProvider;