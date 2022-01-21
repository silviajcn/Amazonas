import { typesLogin } from '../types/types';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { google, facebook } from '../firebase/firebaseConfig';

//Action logout async
export const logout = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(response => {
            dispatch(logoutSync())
        })
        .catch(e => {
            console.log(e);
        })
    }
}

//Action logout sync
export const logoutSync = () => {
    return {
        type: typesLogin.logout,
        payload: {}
    }
}

//Action login email and password async
export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            dispatch(
                loginSync(user.uid, user.displayName)
            )
            console.log('Bienvenido');
        })
        .catch(e => {
            console.log(e);
            console.log('El usuario no existe');
        })
    }
}

//Action login facebook async
export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,facebook)
            .then(({ user }) => {
                //console.log(user);
                dispatch(loginSync(user.uid,user.displayName))
        })
            .catch(e => {
                console.log(e);
        })
    }
}

//Action login google async
export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => {
                //console.log(user);
                dispatch(loginSync(user.uid,user.displayName))
        })
            .catch(e => {
                console.log(e);
        })
    }
}

//Action login sync
export const loginSync = (id, displayname) => {
    return {
        type: typesLogin.login,
        payload: {
            id,
            displayname
        }
    }
}