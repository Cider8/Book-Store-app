import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () =>{
    return useContext(AuthContext)
}

const googleProvider = new GoogleAuthProvider();

//authProvider
export const AuthProvide = ({children}) =>{
    const [currentUser,setcurrentUser] = useState(null);
    const [loading,setLoading] = useState(true);

    //register
    const registerUser = async (email,password) =>{
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    //login the user
    const loginUser = async(email,password) =>{
        return await signInWithEmailAndPassword(auth, email, password)
    }

    //sign in with google 
    const signInWithGoogle = async(email,password) =>{
        return await signInWithPopup(auth, googleProvider)
    }

    //logout the user
    const logout = () =>{
        return signOut(auth)
    }

    //manage User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setcurrentUser(user);
            setLoading(false);

            if(user)
            {
                const {email, displayName, photoURL} = user;
                const userData = {
                    email, 
                    username: displayName, 
                    photo: photoURL
                };
            }
        })
        return () => unsubscribe();
    }, [])

    const value = {
        currentUser,
        loading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}