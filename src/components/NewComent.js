import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerComentAsync, listComentsAsync } from '../actions/actionComents';
import { ContainerNewOp, NewOpTitle, NewOpText } from '../styles/Opinions.elements';
import Opinions from './Opinions';

//material ui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NewComent = () => {

    //register form----------------------------------------
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listComentsAsync())
     }, [])

    const formik = useFormik({
        initialValues: {
            emailuser: "",
            nameuser: "",
            title: "",
            descripcion: ""
        },
        validationSchema: Yup.object({
            emailuser: Yup.string().required(),
            nameuser: Yup.string().required(),
            title: Yup.string().required(),
            descripcion: Yup.string().required()
        }),
        onSubmit: (data) => {
            console.log(data);
            dispatch(registerComentAsync(data))
        },

    })


    return (
        <div>

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
                        
                        <div className="container">

                <hr />
                <div className="row">

                    <div className="col-12">

                        <form className="form-group" onSubmit={formik.handleSubmit}>

                            <div>
                                <input
                                type="text"
                                className="form-control mt-2"
                                name="emailuser"
                                autoComplete="off"
                                placeholder="Correo electrónico"
                                onChange={formik.handleChange}
                                />
                            </div>
                            
                            <div>
                                <input
                                type="text"
                                className="form-control mt-2"
                                name="nameuser"
                                autoComplete="off"
                                placeholder="Nombre de usuario"
                                onChange={formik.handleChange}
                                />
                            </div>
                            
                            <div>
                                <input
                                type="text"
                                className="form-control mt-2"
                                name="title"
                                autoComplete="off"
                                placeholder="Título para su opinión"
                                onChange={formik.handleChange} />
                            </div>
                            
                            <div>
                                <textarea
                                style={{resize: "none", height: "200px"}}
                                className="form-control mt-2"
                                autoComplete="off"
                                name="descripcion"
                                placeholder="¿Por qué le gustan o disgustan nuestros productos?"
                                onChange={formik.handleChange}
                            ></textarea>
                            </div>
                            

                            

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <input
                                    value="Publicar opinión"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                />
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                    </AccordionDetails>
                </Accordion>
            </ContainerNewOp>

            <div>
                <Opinions />
            </div>
        </div>
    )
}

export default NewComent