import React from 'react';
import { FileUpload } from '../helpers/FileUpload';

const NewProduct = () => {

    //que funcione el click del boton que intercambio por el input
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    //Capturar el evento de guaradar la imagen
    const handleFileChanged = (e) => {
        //console.log(e);
        //console.log(e.target.files);
        //console.log(e.target.files[0]);
        const file = e.target.files[0];
        //console.log(file);
            FileUpload(file)
            .then(response => {
        //         formik.initialValues.url = response
                console.log(response);
            })
            .catch(error => {
        //         console.log(error.message);
            })
    }

    return (
        <div>

            <h2>Agregar opinion</h2>
            <div className="container mt-5">

                <hr />
                <div className="row">

                    <div className="col-12">

                        <form className="form-group">

                            <div>
                                <p><strong>Datos del vendedor</strong></p>

                                <div>
                                <input
                                type="text"
                                className="form-control mt-2"
                                name="name"
                                autoComplete="off"
                                placeholder="Nombre del vendedor"
                                required />
                                </div>
                            
                                <div>
                                <input
                                type="text"
                                className="form-control mt-2"
                                name="email"
                                autoComplete="off"
                                placeholder="Correo electronico"
                                required />
                                </div>
                            </div>

                            <div>
                                <p><strong>Datos del producto</strong></p>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="nameproduct"
                                        autoComplete="off"
                                        placeholder="Nombre del producto"
                                        required />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="marcaproduct"
                                        autoComplete="off"
                                        placeholder="Marca del producto"
                                        required />
                                </div>

                                <div>
                                    <input
                                        type="number"
                                        className="form-control mt-2"
                                        name="priceproduct"
                                        autoComplete="off"
                                        placeholder="Precio del producto"
                                        required />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="colorproduct"
                                        autoComplete="off"
                                        placeholder="Color del producto"
                                        required />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="styleproduct"
                                        autoComplete="off"
                                        placeholder="Estilo del producto"
                                        required />
                                </div>

                                <div>
                                    <textarea
                                        className="form-control mt-2"
                                        autoComplete="off"
                                        name="descripcion"
                                        placeholder="Descripcion del producto"
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
                                        className="form-control "
                                        placeholder="url image"
                                        name="url"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChanged}
                                        required />

                                    <button
                                        className="btn btn-dark"
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
                                        placeholder="url image"
                                        name="url"
                                        style={{ display: 'none' }}
                                        required />

                                    <button
                                        className="btn btn-dark"
                                        onClick={() => handlePictureClick()}
                                        type="button">
                                    Imagen 2
                                    </button>
                                </div>

                                <div>
                                    <input
                                        id="fileSelector"
                                        type="file"
                                        className="form-control "
                                        placeholder="url image"
                                        name="url"
                                        style={{ display: 'none' }}
                                        required />

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
                                        placeholder="url image"
                                        name="url"
                                        style={{ display: 'none' }}
                                        required />

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
                                        placeholder="url image"
                                        name="url"
                                        style={{ display: 'none' }} />

                                    <button
                                        className="btn btn-dark"
                                        type="button">
                                    Imagen 5
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
