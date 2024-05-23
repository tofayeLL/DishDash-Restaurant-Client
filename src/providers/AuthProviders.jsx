import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";





export const AuthContext = createContext(null);

const auth = getAuth(app);
// google auth provide
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const axiosPublic = useAxiosPublic();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create  user
    const createUser = (email, password) => {
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


    // update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // Google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    // observe current user
    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('observe current user', currentUser);
            setUser(currentUser);


            // jwt
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                // get token and store client
                axiosPublic.post('/jwt', userInfo)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.token) {
                            localStorage.setItem('access-token', data.data.token)
                        }

                    })
            }
            else {
                // remove token (if token stored to the client side: Local storage or caching or memory ) 
                localStorage.removeItem('access-token')
            }

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
        logOutUser,
        updateUserProfile,
        googleSignIn
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