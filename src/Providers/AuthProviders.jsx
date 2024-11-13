import { createContext } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const creatUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);

    }

    const authInfo = {
        creatUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;