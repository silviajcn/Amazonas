import { typesComents } from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where,doc,deleteDoc} from "@firebase/firestore";


//DELETE COMENT---------------------------------------------

//Action Delete Coment Async
export const deleteComentAsync = (email) => {
    return async (dispatch) => {

        const comCollection = collection(db, "coments");
        const q = query(comCollection, where("emailuser", "==", email))
        //console.log(q);

        const datos = await getDocs(q);
        console.log(datos);

        datos.forEach((docu) => {
            //console.log(docu);
            console.log(docu.id);

            deleteDoc(doc(db, "coments", docu.id));
        })
        dispatch(deleteComentSync(email));
    }
}

//Action Delete Coment Sync
export const deleteComentSync = (email) => {
    return {
        type: typesComents.delete,
        payload: email
    }
}







//LIST COMENTS ---------------------------------------------

//Action List Coments Async
export const listComentsAsync = () => {

    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "coments"));
        //console.log(querySnapshot);

        const comentarios = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc);
            console.log(doc.data());

            comentarios.push({
                ...doc.data()
            })
        });
        console.log(comentarios);
        dispatch(listComentsSync(comentarios));
    }
}

//Action List Coments Sync
export const listComentsSync = (coments) => {
    return {
        type: typesComents.list,
        payload: coments
    }
}

//CREATE COMENT

//Action Create Coment Async
export const registerComentAsync = (newComent) => {

    return (dispatch) => {
        
        addDoc(collection(db, "coments"), newComent)
        .then(resp => {
            dispatch(registerComentSync(newComent))
            dispatch(listComentsAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
}

//Action Create Coment Sync
export const registerComentSync = (coment) => {
    return {
        type: typesComents.register,
        payload: coment
    }
}