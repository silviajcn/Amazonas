import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateComentAsync } from '../actions/actionComents';

const EditComent = () => {

    // traer data del comentario desde redux
    const dispatch = useDispatch();

    const { coments } = useSelector((store) => store.coments);
    console.log(coments);

    useEffect(() => {
        dispatch(updateComentAsync())
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default EditComent
