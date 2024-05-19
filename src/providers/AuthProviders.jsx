import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";





export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create  user
    const createUser = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const logOutUser = () => {
        return signOut(auth);
    }






    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('observe current user', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubsCribe;
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProviders;