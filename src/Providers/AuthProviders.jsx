import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";


export const AuthContext = createContext(null)


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)


    const name = 'Tanzid'

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser =() =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscrice = onAuthStateChanged(auth, currentUser => {
            console.log("current User", currentUser);
            setUser(currentUser)
        })

        return () =>{
            unSubscrice()
        }
    }, [])

    const authInfo = {
        name,
        user,
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