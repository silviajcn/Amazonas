import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Rating from './Rating';
import { ContainerPrincipal, ContainerTitle, Title, ContainerUser, ImgUser, NameUser, ContainerComent, TitleComent, Coment, Options, ContainerComentario, BtnBorrar, BtnEdit } from '../styles/Opinions.elements';
import { listComentsAsync, deleteComentAsync, updateComentAsync } from '../actions/actionComents';

const Opinions = () => {

    let history = useNavigate();

    //show coments
    const dispatch = useDispatch();

    const { coments } = useSelector((store) => store.coments);
    //console.log(coments)

    useEffect(() => {
        dispatch(listComentsAsync());
    }, []);

    return (
        <ContainerPrincipal>

            <div>
            <ContainerTitle>
                <Title>Opiniones de clientes</Title>
            </ContainerTitle>
            
            {
                coments.map((e, i) => (
                    <ContainerComentario key={i}>
                <ContainerUser>
                    <ImgUser src="https://res.cloudinary.com/silviajcn/image/upload/v1641498305/Perfil%20Usuarios/default-user-image_lhg8yd.png" alt="user" />
                    <NameUser>{e.nameuser}</NameUser>
                </ContainerUser>

                <ContainerComent>
                    <TitleComent><strong>{e.title}</strong></TitleComent>
                    <Coment>{e.descripcion}</Coment>
                </ContainerComent>

                <div>
                    <Rating />
                    <Options>A 45 personas les resultó útil</Options>
                    <Options>Informar de un abuso</Options>
                    
                    <div>
                        <BtnEdit type="button"
                            value="update"
                            onClick={() => {
                                dispatch(updateComentAsync(e.nameuser))
                                history("/editco")
                            }}
                        >
                            Editar comentario
                        </BtnEdit>
                        
                        <BtnBorrar type="button"
                            value="delete"
                            onClick={() => dispatch(deleteComentAsync(e.emailuser))}
                        >
                            Borrar comentario
                        </BtnBorrar>
                    </div>
                    
                </div>
                    </ContainerComentario>
                ))
            }
            </div>
        </ContainerPrincipal>
    )
}

export default Opinions
