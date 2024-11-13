import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user,setUser] =useState(null)

    const creatUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const signinUser =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser =() =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unSuscrve =onAuthStateChanged(auth , creatUser=>{
            if(creatUser){
                setUser(creatUser)
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