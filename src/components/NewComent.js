import React from 'react';

const NewComent = () => {
    return (
        <div>

            <h2>Agregar Producto</h2>
            <div className="container mt-5">

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
            </div>
        </div>
    )
}

export default NewComent