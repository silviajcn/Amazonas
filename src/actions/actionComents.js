import { typesComents } from '../types/types';


//DELETE COMENT---------------------------------------------

//Action Delete Coment Async

//Action Delete Coment Sync
export const deleteComentSync = (email) => {
    return {
        type: typesComents.delete,
        payload: email
    }
}





//LIST COMENTS ---------------------------------------------

//Action List Coments Async

//Action List Coments Sync
export const listComentsSync = (coments) => {
    return {
        type: typesComents.list,
        payload: coments
    }
}

//CREATE COMENT

//Action Create Coment Async

//Action Create Coment Sync
export const registerComentSync = (coment) => {
    return {
        type: typesComents.register,
        payload: coment
    }
}