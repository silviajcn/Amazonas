import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { searchProductAsync } from '../actions/actionProducts';
import { FaSearch } from "react-icons/fa";
import { ContainerBuscador, FormContainer, InputSearch, BtnSearch, SelectOption } from '../styles/NavBar.elements';

const SearchWords = () => {

    let history = useNavigate();

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: ({ search }) => {
            dispatch(searchProductAsync(search))
            console.log(search);
        }
    })

    useEffect(() => {
        dispatch(searchProductAsync());
    }, []);

    return (
        <div>
            <ContainerBuscador>
                <FormContainer onSubmit={formik.handleSubmit}>
                  <SelectOption>
                       <option>Todos</option>
                       <option>Arte y artesanías</option>
                       <option>Automotríz</option>
                       <option>Bebé</option>
                       <option>Belleza y cuidado personal</option>
                       <option>Computadoras</option>
                       <option>Deportes y actividades al aire libre</option>
                       <option>Electrónicos</option>
                       <option>Equipaje</option>
                       <option>Herramientas y mejoramiento del hogar</option>
                       <option>Hogar y cocina</option>
                       <option>Industrial y científico</option>
                       <option>Insumos para mascotas</option>
                       <option>Juguetes y juegos</option>
                       <option>Libros</option>
                       <option>Moda de niñas</option>
                       <option>Moda de niños</option>
                       <option>Moda para hombre</option>
                       <option>Moda para mujer</option>
                       <option>Movies-tv</option>
                       <option>Música MP3</option>
                       <option>Música, CD y Vinilos</option>
                       <option>Ofertas</option>
                       <option>Prime video</option>
                       <option>Salud y productos para el hogar</option>
                       <option>Software</option>
                       <option>Tienda Kindle</option>
                       <option>Videojuegos</option>
                    </SelectOption>
                <InputSearch
                    id="search"
                    name="search"
                    type="text"
                    aria-label="Search Products"
                    placeholder="Buscar producto por categoría"
                    onChange={formik.handleChange}
                />
                <BtnSearch
                    bg="warning"
                    variant="warning"
                    className="me-5"
                    type="submit"
                    onClick={() => history("/searching")}
                >
                    <FaSearch />
                </BtnSearch>
                
            </FormContainer>
            </ContainerBuscador>
        </div>
    )
}

export default SearchWords