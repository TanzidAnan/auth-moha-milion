import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading] =useState(true)

    const creatUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const signinUser =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser =() =>{
        setLoading(false)
        return signOut(auth)
    }

    useEffect(() =>{
        const unSuscrve =onAuthStateChanged(auth , creatUser=>{
            if(creatUser){
                setUser(creatUser)
                setLoading(false)
            }
            else{
                setUser(null)
            }

            return () =>{
                unSuscrve()
            }
        })
    },[])

    // onAuthStateChanged(auth, currentUser =>{
    //     if(currentUser){
    //         console.log('current useer ',currentUser);
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('not login')
    //         setUser(null)
    //     }
    // })

    const authInfo = {
        user,
        creatUser,
        loading,
        signinUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;