import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";


export const AuthContext = createContext(null)


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] =useState(true)
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser =() =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscrice = onAuthStateChanged(auth, currentUser => {
            console.log("current User", currentUser);
            setUser(currentUser);
            setLoading(false)
        })

        return () =>{
            unSubscrice()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;