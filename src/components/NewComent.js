import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { registerComentAsync, updateComentAsync, updateComentSync } from '../actions/actionComents';
import { Container,  ContainerNewOp, NewOpTitle, NewOpText } from '../styles/Opinions.elements';
import Opinions from './Opinions';
import { Form, FloatingLabel } from 'react-bootstrap';

//material ui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NewComent = () => {

    const dispatch = useDispatch()

    const [ values, handleInputChange, reset, setValues ] = useForm({
        nameuser: '',
        emailuser: '',
        title: '',
        opinion: '',
    })

    const { nameuser, emailuser, title, opinion } = values

    

    // const handlePictureClick = () => {
    //     document.getElementById('fileSelector').click()
    // }
    // const handleFileChanged = (e) => {
    //     console.log(e.target.files[0])
    //     console.log(image)
    //     const file = e.target.files[0];
    //     fileUpload(file)
    //         .then(response => {
    //             values.image = response
    //             console.log(values.image)
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    const [updateForm, setUpdateForm] = useState(false)

    const handleUpdate = (coments) => {
        dispatch(updateComentSync(coments.id, coments))
        setUpdateForm(true)
        setValues({
            ...coments
        })
    }
    const handlePut = (e) => {
        e.preventDefault()
        dispatch(updateComentAsync(values))
        console.log(values)
        reset()
        setUpdateForm(false)
    }
    const handlePost = (e) => {
        e.preventDefault()
        console.log(values)
        //console.log(image)
        dispatch(registerComentAsync(nameuser, emailuser, title, opinion))
        reset()
    }



    return (
        <Container>

            <ContainerNewOp>
                <NewOpTitle><strong>Escribir opinión de nuestros productos</strong></NewOpTitle>

                <NewOpText>Comparte tu opinión con otros clientes</NewOpText>

                <Accordion style={{width: "320px"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Escribir mi opinión</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Form>

                    <Form.Group>
                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="nameuser">Nombre de usuario</Form.Label>
                            <Form.Control
                                type="text"
                                name="nameuser"
                                
                                value={nameuser}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="emailuser">Correo electrónico</Form.Label>
                            <Form.Control

                                type="text"
                                name="emailuser"
                                
                                value={emailuser}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="title">Título para su opinión</Form.Label>
                            <Form.Control

                                type="text"
                                name="title"
                                
                                value={title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="opinion">¿Por qué le gustan o disgustan nuestros productos?</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="">
                                <Form.Control
                                    as="textarea"
                                    name="opinion"
                                    
                                    value={opinion}
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    onChange={handleInputChange}
                                />
                            </FloatingLabel>
                        </div>

                        <br />

                        <div>


                            <div className="d-flex gap-2 my-3">

                                {
                                    !updateForm
                                        ?
                                        <button
                                            className="btn2 btn-light"
                                            type="submit" onClick={handlePost}>Publicar opinión <i className="fas fa-upload"></i></button>
                                        :
                                        <button
                                            className="btn2 btn-light"
                                            type="submit" onClick={handlePut}>Editar Comentario <i className="fas fa-edit"></i></button>

                                }
                            </div>
                        </div>


                    </Form.Group>
                </Form>
                    </AccordionDetails>
                </Accordion>
            </ContainerNewOp>

            <div>
                <Opinions handleUpdate={handleUpdate} />
            </div>
        </Container>
    )
}

export default NewComent