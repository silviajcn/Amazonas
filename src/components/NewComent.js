import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { fileUpload } from '../helpers/FileUpload';
//import { useDispatch } from 'react-redux';

const Input = styled.input`
    background-color: #db7093;
`

const NewComent = () => {

    const formik = useFormik({
        initialValues: {
            url: "",
            nombre: "",
            correo: "",
            descripcion: ""
        },
        onSubmit: (data) => {
            console.log(data);
        },

    })

    //que funcione el click del boton que cambio por el input
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                formik.initialValues.url = response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <div className="container mt-5">

                <hr />
                <div className="row">

                    <div className="col-12">
                        <form className="form-group" onSubmit={formik.handleSubmit}>
                            <input
                                id="fileSelector"
                                type="file"
                                className="form-control "
                                placeholder="url image"
                                name="url"
                                style={{ display: 'none' }}
                                onChange={handleFileChanged}
                                 />

                            <button
                                className="btn btn-dark"
                                onClick={() => handlePictureClick()}
                                type="button">Imagen</button>

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="nombre"
                                autoComplete="off"
                                placeholder="user name"
                                onChange={formik.handleChange}
                                required />

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="correo"
                                autoComplete="off"
                                placeholder="email"
                                onChange={formik.handleChange}
                                required />

                            <textarea
                                className="form-control mt-2"
                                autoComplete="off"
                                name="descripcion"
                                placeholder="description"
                                onChange={formik.handleChange}
                                required
                            ></textarea>

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <Input
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
























            {/* <div className="container mt-5">

                <hr />
                <div className="row">

                    <div className="col-12">

                        <form className="form-group">

                            <div>
                                <input
                                type="text"
                                className="form-control mt-2"
                                name="email"
                                autoComplete="off"
                                placeholder="Correo electronico"
                                required />
                            </div>
                            
                            <div>
                                <input
                                type="text"
                                className="form-control mt-2"
                                name="name"
                                autoComplete="off"
                                placeholder="Nombre de usuario"
                                required />
                            </div>
                            
                            <div>
                                <input
                                type="text"
                                className="form-control mt-2"
                                name="title"
                                autoComplete="off"
                                placeholder="Título para su opinión"
                                required />
                            </div>
                            
                            <div>
                                <textarea
                                className="form-control mt-2"
                                autoComplete="off"
                                name="descripcion"
                                placeholder="¿Por qué le gusta o disgusta este producto?"
                                required
                            ></textarea>
                            </div>
                            

                            

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <input
                                    value="Publicar opinion"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default NewComent