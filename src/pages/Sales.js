import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listComprasAsync } from '../actions/actionCompras';

const Sales = () => {

    const dispatch = useDispatch();

    const { compras } = useSelector((store) => store.compras);
    //console.log(compras);

    useEffect(() => {
        dispatch(listComprasAsync());
    }, []);
    
    return (
        <div>
            <h1>Registro de compradores</h1>

            {
                compras.map((e, i) => (
                    <div key={i}>
                        <h5>{e.name}</h5>
                        <p>Desde: {e.direccion}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default Sales