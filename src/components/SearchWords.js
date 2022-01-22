import React from 'react';
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
            //console.log(search);
        }
    })



    return (
        <div>
            <ContainerBuscador>
                <FormContainer onSubmit={formik.handleSubmit}>
                  <SelectOption>
                       <option>Todos</option>
                       <option>Computadoras</option>
                       <option>Tablets</option>
                       <option>Celulares</option>
                       <option>Camaras</option>
                       <option>Audifonos</option>
                       <option>Accesorios</option>
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