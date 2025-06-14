import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config";



export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {

        return signInWithPopup(auth, googleProvider);
    }


    const logInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {

        return signOut(auth)
    }

    const updateUser = (updateData) => {

        return updateProfile(auth.currentUser, updateData)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {


            setUser(currentUser);
            console.log('Current User :', currentUser?.email);
            setLoading(false);

        });

        return () => {
            return unsubscribe()
        }

    }, [])



    const authInfo = {

        user,
        setUser,
        loading,
        setLoading,
        createUser,
        logInUser,
        userLogOut,
        updateUser,
        googleSignIn

    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;