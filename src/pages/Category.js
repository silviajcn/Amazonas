import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link,  useNavigate } from "react-router-dom";
import { categoryProductAsync, showDetailProductAsync } from '../actions/actionProducts';
import { ContainerPrincipal, BtnShowDetail, ContainerImg, ImgProduct, ContainerSecond, TitleProduct, ContainerTres, PUno, PDos } from '../styles/AllProducts.elements';
import { ContainerBack, PBack } from '../styles/ProductDetails.elements';
import { RiArrowLeftSLine } from "react-icons/ri";

const Category = () => {

    const dispatch = useDispatch();

    let history = useNavigate();

    const { products } = useSelector((store) => store.products);
    //console.log(products)

    useEffect(() => {
        dispatch(categoryProductAsync());
    }, []);

    return (
        <div>

            <Link to="/" className="links-two">
                <ContainerBack>
                    <RiArrowLeftSLine />
                    <PBack>Volver a la página de inicio</PBack>
                </ContainerBack>
            </Link>

            <>
            {
                products.map((e, i) => (
                    <ContainerPrincipal key={i}>
                        <BtnShowDetail
                            onClick={() => {
                                dispatch(showDetailProductAsync(e.codeproduct))
                                localStorage.setItem('codeProduct', e.codeproduct)
                                history("/details/" + e.codeproduct)
                            }}
                        >
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
                    </ContainerPrincipal>
                ))
            }
        </>
        </div>
    )
}

export default Category
