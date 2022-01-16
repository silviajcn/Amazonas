import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewComent from './NewComent';
import Rating from './Rating';
import { ContainerPrincipal, ContainerTitle, Title, ContainerUser, ImgUser, NameUser, ContainerComent, TitleComent, Coment, Options, ContainerComentario, ContainerNewOp, NewOpTitle, NewOpText, BtnBorrar } from '../styles/Opinions.elements';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { listComentsAsync, deleteComentAsync } from '../actions/actionComents';

const Opinions = () => {

    const dispatch = useDispatch();

    const { coments } = useSelector((store) => store.coments);
    //console.log(coments)

    useEffect(() => {
        dispatch(listComentsAsync());
    }, []);

    return (
        <ContainerPrincipal>

            <ContainerNewOp>
                <NewOpTitle><strong>Escribir opinión de nuestros productos</strong></NewOpTitle>

                <NewOpText>Comparte tu opinión con otros clientes</NewOpText>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Escribir mi opinión</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NewComent />
                    </AccordionDetails>
                </Accordion>

            </ContainerNewOp>

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
                    <BtnBorrar type="button"
                               value="Delete"
                               onClick={() => dispatch(deleteComentAsync(e.emailuser))}
                    >
                        Borrar comentario
                    </BtnBorrar>
                </div>
                    </ContainerComentario>
                ))
            }
            </div>
        </ContainerPrincipal>
    )
}

export default Opinions
