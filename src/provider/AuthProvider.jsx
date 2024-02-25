import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";

const auth = getAuth(app); 
export const AuthContext = createContext()
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user ,setUser]= useState(null)
  const [loading ,setLoading] = useState(true)


  const createSingUp =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth ,email,password)
  }
  const signInGoogle= ()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }
  const logOut =()=>{
    signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth ,(currentUser)=>{
      console.log("user is login now",currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unsubscribe()
    }
  },[])

    const authInfo ={
        user ,
        loading,
        createSingUp,
        signInUser,
        signInGoogle,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;