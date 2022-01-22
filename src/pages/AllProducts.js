import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { listProductsAsync, showDetailProductAsync } from '../actions/actionProducts';
import { ContainerBack, PBack, ContainerPrincipal, BtnShowDetail, ContainerImg, ImgProduct, ContainerSecond, TitleProduct, ContainerTres, PUno, PDos, ContainerRate } from '../styles/AllProducts.elements';
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import '../styles/index.css';

const AllProducts = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);
    //console.log(products);

    useEffect(() => {
        dispatch(listProductsAsync());
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
                        <Link to={"/details/" + e.codeproduct} className="links">
                        <BtnShowDetail
                            // onClick={() => {
                            //     localStorage.setItem('codeProduct', e.codeproduct)
                            //     history("/details")
                            // }}
                            
                            onClick={() => {
                                dispatch(showDetailProductAsync(e.codeproduct))
                                //history("/details")
                            }}
                        >

                            <ContainerImg>
                                <ImgProduct src={e.oneimage} alt="producto" />
                            </ContainerImg>

                            <ContainerSecond>
                                <TitleProduct><strong>{e.nameproduct}</strong></TitleProduct>

                                <ContainerTres>
                                    <PUno>US$</PUno>
                                    <PDos><strong>{e.priceproduct}.00</strong></PDos>
                                </ContainerTres>

                                <ContainerRate>
                                    <p className={e.rate > 1 ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.rate > 2 ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.rate > 3 ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.rate > 4 ? 'good' : 'bad'}><FaStar /></p>
                                    <p className={e.rate >= 5 ? 'good' : 'bad'}><FaStar /></p>
                                </ContainerRate>

                                <ContainerTres>
                                    <p>Envío gratis a</p>
                                    <PDos><strong>Colombia</strong></PDos>
                                </ContainerTres>
                            </ContainerSecond>
                        </BtnShowDetail>
                        </Link>
                    </ContainerPrincipal>
                ))
            }
        </>
    )
}

export default AllProducts
