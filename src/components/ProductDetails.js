import React from 'react';
import { useSelector } from 'react-redux';
import { RiShoppingCartLine, RiPlayFill } from "react-icons/ri";
import { ContainerPrincipal, ContainerBack, Containers, ContainerOne, ImgsProduct, ContainerTwo, ContainerThree, DivOne, NameProduct, MarcaProduct, DivTwo, PriceInfo, PriceProduct, Price, Envio, LinksBlue, PagoInfo, PagoCuotas, TitleCaracteristicas, Caracteristicas, ContainerFour, ImgProduct, Buttons, BtnOne, BtnTwo, ContainerIcon, Transaccion, PlusContainer } from '../styles/ProductDetails.elements';
import { RiArrowLeftSLine } from "react-icons/ri";
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = () => {

    const { products } = useSelector(store => store.products);
    console.log(products)

    return (
        <div>

            <ContainerBack>
                <RiArrowLeftSLine />
                <p>Volver a los resultados</p>
            </ContainerBack>

            <ContainerPrincipal>
            <Containers>
                <ContainerOne>
                    <ImgsProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1641654716/SPRING-3/productos/camara/Rectangle_36_fvehjl.png" alt="product" />
                    <ImgsProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1641654752/SPRING-3/productos/camara/Frame_61_pgrtcp.png" alt="product" />
                    <ImgsProduct src="https://res.cloudinary.com/silviajcn/image/upload/v1641654746/SPRING-3/productos/camara/Frame_61_1_f2tmgp.png" alt="product" />
                </ContainerOne>

                <ContainerTwo>
                    
                    <ImgProduct>
                        <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'product',
                            isFluidWidth: true,
                            src: "https://res.cloudinary.com/silviajcn/image/upload/v1641654716/SPRING-3/productos/camara/Rectangle_36_fvehjl.png",
                        },
                        largeImage: {
                            src: "https://res.cloudinary.com/silviajcn/image/upload/v1641654716/SPRING-3/productos/camara/Rectangle_36_fvehjl.png",
                            width: 1200,
                            height: 1800
                        },
                        shouldUsePositiveSpaceLens: true,
                        enlargedImageContainerDimensions: {
                            width: '120%',
                            height: '80%'
                        }
                        }} />
                    </ImgProduct>
               
                </ContainerTwo>

                    <ContainerThree>
                        <DivOne>
                            <NameProduct><strong>Canon EOS R6 - Cámara sin Espejo de Marco Completo + Lente RF24-105mm F4 L IS USM</strong></NameProduct>
                            <MarcaProduct><strong>Marca: Canon</strong></MarcaProduct>
                        </DivOne>

                        <DivTwo>
                            <PriceInfo>
                                <PriceProduct>Precio:</PriceProduct>
                                <Price><strong>$100,669.00</strong></Price>
                                <Envio><strong>Envío GRATIS.</strong></Envio>
                                <LinksBlue><strong>Detalles</strong></LinksBlue>
                            </PriceInfo>

                            <PagoInfo>
                                <PagoCuotas>Hasta <strong>18 meses sin intereses</strong> de $5,592.76.</PagoCuotas>
                                <LinksBlue><strong>Ver mensualidades</strong></LinksBlue>
                            </PagoInfo>

                            <PagoInfo>
                                <LinksBlue><strong>Solicita tu tarjeta Amazon Recargable</strong></LinksBlue>
                                <PagoCuotas>y obtén $100 de descuento en tu primera compra mayor a $500</PagoCuotas>
                            </PagoInfo>

                            <PlusContainer>
                                <PagoCuotas>Color: <strong>Negro</strong></PagoCuotas>
                            </PlusContainer>

                            <PlusContainer>
                                <PagoCuotas>Estilo: <strong>24-105mm USM Kit</strong></PagoCuotas>
                            </PlusContainer>
                        </DivTwo>

                        <TitleCaracteristicas><strong>Acerca de este artículo</strong></TitleCaracteristicas>

                        <div>
                            <Caracteristicas>- Alta calidad de imagen con un nuevo sensor CMOS de marco completo de 20 megapíxeles.</Caracteristicas>
                            <Caracteristicas>- Procesador de imagen DIGIC X con una gama ISO de 100-102400; ampliable a 204800.</Caracteristicas>
                            <Caracteristicas>- Disparo continuo de alta velocidad de hasta 12 fps con obturador mecánico y obturador electrónico (silencioso) de hasta 20 fps.</Caracteristicas>
                            <Caracteristicas>- CMOS AF de doble pixel, cubre aproximadamente Área 100% con 1.053 AF.</Caracteristicas>
                            <Caracteristicas>- Seguimiento de asuntos de personas y animales* utilizando tecnología de aprendizaje profundo.</Caracteristicas>
                        </div>
                </ContainerThree>

                <ContainerFour>
                    <Price><strong>$100,669.00</strong></Price>

                    <PriceInfo>
                        <Envio><strong>Envío GRATIS.</strong></Envio>
                        <LinksBlue><strong>Detalles</strong></LinksBlue>
                    </PriceInfo>

                    <PriceInfo>
                        <Caracteristicas>Llega:</Caracteristicas>
                        <Envio><strong>dic 15 - 28</strong></Envio>
                    </PriceInfo>

                    <Buttons>
                        <BtnOne type="button">
                            <ContainerIcon>
                                <RiShoppingCartLine />
                            </ContainerIcon>
                            <strong>Agregar al Carrito</strong>
                        </BtnOne>

                        <BtnTwo type="button">
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

            
            
        </div>
    )
}

export default ProductDetails
