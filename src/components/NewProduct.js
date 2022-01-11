import React, {useEffect} from 'react';
import { useFormik } from 'formik';
import { fileUpload } from '../helpers/FileUpload';
import { useDispatch } from 'react-redux';
import { registerProductAsync, listProductsAsync } from '../actions/actionProducts';

const NewProduct = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsAsync())
    }, [])

    const formik = useFormik({
        initialValues: {
            username: "",
            useremail: "",
            categoryproduct: "",
            nameproduct: "",
            marcaproduct: "",
            priceproduct: "",
            colorproduct: "",
            styleproduct: "",
            descripcionproduct: "",
            oneimage: "",
            twoimage: "",
            threeimage: "",
            fourimage: "",
            fiveimage: "",
            banner: ""
        },
        onSubmit: (data) => {
            console.log(data);
            dispatch(registerProductAsync(data))
        },
    })

    //que funcione el click del boton que intercambio por el input
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    //Capturar el evento de guardar la url de la imagen
    const handleFileChanged = (e) => {
        //console.log(e);
        //console.log(e.target.files);
        //console.log(e.target.files[0]);
        const file = e.target.files[0];
        //console.log(file);
            fileUpload(file)
            .then(response => {
                formik.initialValues.oneimage = response
                console.log(response);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    return (
        <div>

            <h2>Agregar un nuevo producto</h2>
            <div className="container mt-5">

                <hr />
                <div className="row">

                    <div className="col-12">

                        <form className="form-group"
                               onSubmit={formik.handleSubmit}>

                            <div>
                                <p><strong>Datos del vendedor</strong></p>

                                <div>
                                <input
                                type="text"
                                className="form-control mt-2"
                                name="username"
                                autoComplete="off"
                                placeholder="Nombre del vendedor"
                                onChange={formik.handleChange}
                                required />
                                </div>
                            
                                <div>
                                <input
                                type="text"
                                className="form-control mt-2"
                                name="useremail"
                                autoComplete="off"
                                placeholder="Correo electronico"
                                onChange={formik.handleChange}
                                required />
                                </div>
                            </div>

                            <div>
                                <p><strong>Datos del producto</strong></p>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="categoryproduct"
                                        autoComplete="off"
                                        placeholder="Categoría del producto"
                                        onChange={formik.handleChange}
                                        required />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="nameproduct"
                                        autoComplete="off"
                                        placeholder="Nombre del producto"
                                        onChange={formik.handleChange}
                                        required />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="marcaproduct"
                                        autoComplete="off"
                                        placeholder="Marca del producto"
                                        onChange={formik.handleChange}
                                        required />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="priceproduct"
                                        autoComplete="off"
                                        placeholder="Precio del producto"
                                        onChange={formik.handleChange}
                                        required />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="colorproduct"
                                        autoComplete="off"
                                        placeholder="Color del producto"
                                        onChange={formik.handleChange}
                                        required />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="styleproduct"
                                        autoComplete="off"
                                        placeholder="Estilo del producto"
                                        onChange={formik.handleChange}
                                        required />
                                </div>

                                <div>
                                    <textarea
                                        className="form-control mt-2"
                                        autoComplete="off"
                                        name="descripcionproduct"
                                        placeholder="Descripcion del producto"
                                        onChange={formik.handleChange}
                                        required>   
                                    </textarea>
                                </div>
                            </div>

                            <div>
                                <p><strong>Imagenes del producto</strong></p>

                                <div>
                                    <input
                                        id="fileSelector"
                                        type="file"
                                        className="form-control"
                                        placeholder="Imagen 1"
                                        name="oneimage"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChanged}
                                        required />

                                    <button
                                        onClick={() => handlePictureClick()}
                                        type="button">
                                    Imagen 1
                                    </button>
                                </div>

                                <div>
                                    <input
                                        id="fileSelector"
                                        type="file"
                                        className="form-control "
                                        placeholder="Imagen 2"
                                        name="twoimage"
                                        style={{ display: 'none' }}
                                        />

                                    <button
                                        className="btn btn-dark"
                                        type="button">
                                    Imagen 2
                                    </button>
                                </div>

                                <div>
                                    <input
                                        id="fileSelector"
                                        type="file"
                                        className="form-control "
                                        placeholder="Imagen 3"
                                        name="threeimage"
                                        style={{ display: 'none' }}
                                         />

                                    <button
                                        className="btn btn-dark"
                                        type="button">
                                    Imagen 3
                                    </button>
                                </div>

                                <div>
                                    <input
                                        id="fileSelector"
                                        type="file"
                                        className="form-control "
                                        placeholder="Imagen 4"
                                        name="fourimage"
                                        style={{ display: 'none' }}
                                        />

                                    <button
                                        className="btn btn-dark"
                                        type="button">
                                    Imagen 4
                                    </button>
                                </div>

                                <div>
                                    <input
                                        id="fileSelector"
                                        type="file"
                                        className="form-control "
                                        placeholder="Imagen 5"
                                        name="fiveimage"
                                        style={{ display: 'none' }} />

                                    <button
                                        className="btn btn-dark"
                                        type="button">
                                    Imagen 5
                                    </button>
                                </div>

                                <div>
                                    <input
                                        id="fileSelector"
                                        type="file"
                                        className="form-control "
                                        placeholder="Banner publicitario del producto"
                                        name="banner"
                                        style={{ display: 'none' }} />

                                    <button>
                                    Banner del producto
                                    </button>
                                </div>
                            </div>

                            

                            

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <input
                                    value="Agregar producto"
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

export default NewProduct
