import { typesLogin } from '../types/types';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

//action reister async
export const registerEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName: name})

           dispatch(registerSync(user.email,user.uid,user.displayName))
            console.log(user);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

//action register sync
export const registerSync = (email, password, name) => {
    return {
        type: typesLogin.register,
        payload: {
            email,
            password,
            name
        }
    }
}