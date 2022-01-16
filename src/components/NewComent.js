import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerComentAsync, listComentsAsync } from '../actions/actionComents';

const NewComent = () => {

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
        </div>
    )
}

export default NewComent




// {/* <div className="container mt-5">

//                 <hr />
//                 <div className="row">

//                     <div className="col-12">
//                         <form className="form-group" onSubmit={formik.handleSubmit}>
//                             <input
//                                 id="fileSelector"
//                                 type="file"
//                                 className="form-control "
//                                 placeholder="url image"
//                                 name="url"
//                                 style={{ display: 'none' }}
//                                 onChange={handleFileChanged}
//                                  />

//                             <button
//                                 className="btn btn-dark"
//                                 onClick={() => handlePictureClick()}
//                                 type="button">Imagen</button>

//                             <input
//                                 type="text"
//                                 className="form-control mt-2"
//                                 name="nombre"
//                                 autoComplete="off"
//                                 placeholder="user name"
//                                 onChange={formik.handleChange}
//                                 required />

//                             <input
//                                 type="text"
//                                 className="form-control mt-2"
//                                 name="correo"
//                                 autoComplete="off"
//                                 placeholder="email"
//                                 onChange={formik.handleChange}
//                                 required />

//                             <textarea
//                                 className="form-control mt-2"
//                                 autoComplete="off"
//                                 name="descripcion"
//                                 placeholder="description"
//                                 onChange={formik.handleChange}
//                                 required
//                             ></textarea>

//                             <div className="d-grid gap-2 mx-auto mt-2">
//                                 <Input
//                                     value="Save"
//                                     type="submit"
//                                     className="btn btn-outline-dark"
//                                 />
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div> */}