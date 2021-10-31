import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import fireBaseAuthentication from '../../Pages/FireBase/FireBase.initial'
fireBaseAuthentication();
const googleProvider = new GoogleAuthProvider();
const UseFier = () => {
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth = getAuth();

    const googleSignUp = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            console.log('yes i am here');
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);
    const signOutButton = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { setUser({}) })
            .catch(error => { })
            .finally(()=>setIsLoading(false));

    }
   
    return {
        user,
        isLoading,
        googleSignUp,
        signOutButton
    }
}
export default UseFier;