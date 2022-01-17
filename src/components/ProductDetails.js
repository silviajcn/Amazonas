import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { RiShoppingCartLine, RiPlayFill } from "react-icons/ri";
import { ContainerPrincipal, ContainerBack, PBack, Containers, ContainerOne, ImgsProduct, ContainerTwo, ContainerThree, DivOne, NameProduct, MarcaProduct, DivTwo, PriceInfo, PriceProduct, Price, Envio, LinksBlue, PagoInfo, PagoCuotas, TitleCaracteristicas, Caracteristicas, ContainerFour, ImgProduct, Buttons, BtnOne, BtnTwo, ContainerIcon, Transaccion, PlusContainer, ContainerBanner, ImgBanner } from '../styles/ProductDetails.elements';
import { RiArrowLeftSLine } from "react-icons/ri";
import ReactImageMagnify from 'react-image-magnify';
import { showDetailProductAsync } from '../actions/actionProducts';

const ProductDetails = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);
    //console.log(products);

    useEffect(() => {
        dispatch(showDetailProductAsync())
    }, []);

    // cambio de imagenes
    const [imagen, setImagen] = useState();

    const cambiarImagen =(element) => {
        setImagen(element)
    }

    return (
        <div>

            <Link to="/" className="links-two">
                <ContainerBack>
                    <RiArrowLeftSLine />
                    <PBack>Volver a la página de inicio</PBack>
                </ContainerBack>
            </Link>

            {
                products.map((e, i) => (
                    <>
            <ContainerPrincipal key={i}>
            <Containers>
                <ContainerOne>
                    <ImgsProduct src={e.oneimage} alt="product" onClick={()=>cambiarImagen(e.oneimage)}/>
                    <ImgsProduct src={e.twoimage} alt="product" onClick={()=>cambiarImagen(e.twoimage)}/>
                    <ImgsProduct src={e.threeimage} alt="product" onClick={()=>cambiarImagen(e.threeimage)}/>
                </ContainerOne>

                <ContainerTwo>
                    
                    <ImgProduct style={{resize: "none", height: "200px"}}>
                        {imagen!==undefined?
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'producto',
                                isFluidWidth: true,
                                src: imagen
                            },
                            largeImage: {
                                src: imagen,
                                width: 1000,
                                height: 1600
                            },
                            shouldUsePositiveSpaceLens: true
                        }} />:<ReactImageMagnify {...{
                            smallImage: {
                                alt: 'producto',
                                isFluidWidth: true,
                                src: e.oneimage,
                            },
                            largeImage: {
                                src: e.oneimage,
                                width: 1000,
                                height: 1600
                            },
                            shouldUsePositiveSpaceLens: true,
                            enlargedImageContainerDimensions: {
                                width: '120%',
                                height: '80%'
                            }
                        }} />}

                    </ImgProduct>
                </ContainerTwo>

                    <ContainerThree>
                        <DivOne>
                            <NameProduct><strong>{e.nameproduct}</strong></NameProduct>
                            <MarcaProduct><strong>Marca: {e.marcaproduct}</strong></MarcaProduct>
                        </DivOne>

                        <DivTwo>
                            <PriceInfo>
                                <PriceProduct>Precio:</PriceProduct>
                                <Price><strong>${e.priceproduct}</strong></Price>
                                <Envio><strong>Envío GRATIS.</strong></Envio>
                                <LinksBlue><strong>Detalles</strong></LinksBlue>
                            </PriceInfo>

                            <PagoInfo>
                                <PagoCuotas>Hasta <strong>18 meses sin intereses</strong> de $5,592</PagoCuotas>
                                <LinksBlue><strong>Ver mensualidades</strong></LinksBlue>
                            </PagoInfo>

                            <PagoInfo>
                                <LinksBlue><strong>Solicita tu tarjeta Amazon Recargable</strong></LinksBlue>
                                <PagoCuotas>y obtén $100 de descuento en tu primera compra mayor a $500</PagoCuotas>
                            </PagoInfo>

                            <PlusContainer>
                                <PagoCuotas>Color: <strong>{e.colorproduct}</strong></PagoCuotas>
                            </PlusContainer>

                            <PlusContainer>
                                <PagoCuotas>Estilo: <strong>{e.styleproduct}</strong></PagoCuotas>
                            </PlusContainer>
                        </DivTwo>

                        <TitleCaracteristicas><strong>Acerca de este artículo</strong></TitleCaracteristicas>

                        <div>
                            <Caracteristicas>{e.descripcionproduct}</Caracteristicas>
                        </div>
                </ContainerThree>

                <ContainerFour>
                    <Price><strong>${e.priceproduct}</strong></Price>

                    <PriceInfo>
                        <Envio><strong>Envío GRATIS.</strong></Envio>
                        <LinksBlue><strong>Detalles</strong></LinksBlue>
                    </PriceInfo>

                    <PriceInfo>
                        <Caracteristicas>Llega:</Caracteristicas>
                        <Envio><strong>dic 15 - 28</strong></Envio>
                    </PriceInfo>

                    <Buttons>
                        <BtnOne
                           id={e.codeproduct}
                           type="button"
                        //    onClick={addItemToCar}
                        >
                            <ContainerIcon>
                                <RiShoppingCartLine />
                            </ContainerIcon>
                            <strong>Agregar al Carrito</strong>
                        </BtnOne>

                        <BtnTwo
                            id={e.codeproduct}
                            type="button"
                        >
                            <ContainerIcon>
                                <RiPlayFill />
                            </ContainerIcon>
                            <strong>Comprar ahora</strong>
                        </BtnTwo>
                    </Buttons>

                    <Transaccion><strong>Transacción segura</strong></Transaccion>
                </ContainerFour>
            </Containers>
            </ContainerPrincipal>

            <ContainerBanner>
                <ImgBanner src={e.banner} alt="banner" />
            </ContainerBanner>
                    </>
                ))
            }
            
                
            
        </div>
    )
}

export default ProductDetails