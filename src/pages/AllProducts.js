import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { listProductsAsync, deleteProductAsync, showDetailProductAsync } from '../actions/actionProducts';
import { ContainerBack, PBack, ContainerPrincipal, BtnShowDetail, ContainerImg, ImgProduct, ContainerSecond, TitleProduct, ContainerTres, PUno, PDos, ContainerBtn, BtnDelete } from '../styles/AllProducts.elements';
import { RiArrowLeftSLine } from "react-icons/ri";

const AllProducts = () => {

    let history = useNavigate();

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);
    console.log(products)

    useEffect(() => {
        dispatch(listProductsAsync());
        dispatch(showDetailProductAsync())
    }, []);
    
    return (
        <>

            <Link to="/" className="links-two">
                <ContainerBack>
                    <RiArrowLeftSLine />
                    <PBack>Volver a la página de inicio</PBack>
                </ContainerBack>
            </Link>

            {
                products.map((e, i) => (
                    <ContainerPrincipal key={i}>
                        <BtnShowDetail
                            onClick={() => {
                                dispatch(showDetailProductAsync(e.codeproduct))
                                history("/details")
                            }}>
                            
                            <ContainerImg>
                                <ImgProduct src={e.oneimage} alt="producto" />
                            </ContainerImg>

                            <ContainerSecond>
                                <TitleProduct><strong>{e.nameproduct}</strong></TitleProduct>

                                <ContainerTres>
                                    <PUno>US$</PUno>
                                    <PDos><strong>{e.priceproduct}</strong></PDos>
                                </ContainerTres>

                                <ContainerTres>
                                    <p>Envío gratis a</p>
                                    <PDos><strong>Colombia</strong></PDos>
                                </ContainerTres>
                            </ContainerSecond>
                        </BtnShowDetail>
                        

                        {/* <ContainerBtn>
                            <BtnDelete
                                type="button"
                                value="Delete"
                                onClick={() => dispatch(deleteProductAsync(e.codeproduct))}>
                                <strong>Borrar producto</strong>
                            </BtnDelete>
                        </ContainerBtn> */}
                    </ContainerPrincipal>
                ))
            }
        </>
    )
}

export default AllProducts
