import { GoogleAuthProvider,getAuth, signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import fireBaseInitialization from "../FireBase/FireBase.initialize";

fireBaseInitialization()
const useFireBase=()=>{
    const[user,setUser]=useState('');
    // for data load redirect log in page issue
    const[isloading,setloading]=useState(true);

    
    

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle=()=>{
      setloading(true);
      return  signInWithPopup(auth, provider)
  
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
            setloading(false)
          });
    },[auth])

    const signout =()=>{
        signOut(auth).then(() => {
            setUser({})
          }).finally(()=>setloading(false))
    }


    return{
        user,
        signInUsingGoogle,
        signout,
        setloading,
        isloading
       

        
    }
}

export default useFireBase;