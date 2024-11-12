import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase.init";


export const AuthContext = createContext(null)


const AuthProviders = ({ children }) => {

    const authInfo = {
        name: 'Tanzid anan'
    }
    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;