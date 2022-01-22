import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteCartSync, clearCartSync, addCartSync } from '../actions/actionAddCart';
import { ContainerBack, PBack, ContainerPrincipal, ContainerSecond, ContainerCar, ContainerSubtotal, ContainerTitulo, ContainerTitleCart, RemoveAllLink, MarginTitlePrice, ContainerProductInCart, BtnShowDetail, ContainerImgProduct, ImgProduct, ContainerSecondary, TitleProduct, ContainerTres, PUno, PDos, BtnAgregarMas, ContainerBtnMas, ContainerBtn, ContainerEnvioGratis, TitleSubTotal, EnvioGratisP, BtnComprar, ContainerBtnsItems, ImgLogo } from '../styles/Cart.elements';
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaCheckCircle, FaPlus, FaMinus, FaTimes } from "react-icons/fa";

const Carrito = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.products);
    //console.log(products);
  
    const { cart } = useSelector((store) => store.shopping);

    //Total PAGAR
    const totalPrice = () => {
      const reducer = (counter, currentValue) => counter + (currentValue.priceproduct * currentValue.quantity)
      const add = cart.reduce(reducer,0)
      return add
    }

    const totalItems = () => {
        const reducer = (counter, currentValue) => counter + currentValue.quantity
        const add = cart.reduce(reducer,0)
        return add
    }
    
    return (
        <ContainerPrincipal>

            <Link to="/" className="links-two">
                <ContainerBack>
                    <RiArrowLeftSLine />
                    <PBack>Volver a la página de inicio</PBack>
                </ContainerBack>
            </Link>

            <ContainerSecond>
                <ContainerCar>
                    {cart.length === 0 ?
                        <ContainerTitulo>
                             <h2>Tu carrito de Amazon está vacío.</h2> 
                        </ContainerTitulo>
                        :
                        <ContainerTitulo>
                            <ContainerTitleCart>
                                <h2>Carrito</h2>
                                <RemoveAllLink onClick={() => dispatch(clearCartSync())}><strong>Anular la seleccion de todos los elementos</strong></RemoveAllLink>
                            </ContainerTitleCart>
                        
                        
                            <MarginTitlePrice>Precio</MarginTitlePrice>
                        </ContainerTitulo>
                    }
                
                    

                {
                    cart.map((prod) => (
                        <ContainerProductInCart key={prod.codeproduct}>
                            <BtnShowDetail>
                                <ContainerImgProduct>
                                    <ImgProduct src={prod.oneimage} alt="producto" />
                                </ContainerImgProduct>

                                <ContainerSecondary>
                                    <TitleProduct>
                                        <strong>{prod.nameproduct}</strong>
                                    </TitleProduct>

                                    <ContainerTres>
                                        <p>Envío gratis a</p>
                                        <PDos><strong>Colombia</strong></PDos>
                                    </ContainerTres>

                                    <ContainerBtnsItems>
                                    {/* {
                                        products.map((e, i) => (
                                            <ContainerTres key={i}>
                                                <BtnAgregarMas onClick={() =>
                                                    dispatch(addCartSync(e))
                                                }>
                                                    <ContainerBtnMas><FaPlus /></ContainerBtnMas>
                                                    Aumentar cantidad
                                                </BtnAgregarMas>
                                            </ContainerTres>
                                        ))
                                    } */}

                                    
                                    <p>Precio por cantidad: {prod.priceproduct} x {prod.quantity} = <strong>{prod.priceproduct * prod.quantity }</strong>.00 $</p>
                                    

                                    <ContainerTres>
                                            <BtnAgregarMas onClick={() => dispatch(deleteCartSync(prod.codeproduct))}>
                                            <ContainerBtnMas><FaMinus /></ContainerBtnMas>
                                            Disminuir cantidad
                                        </BtnAgregarMas>
                                    </ContainerTres>

                                    <ContainerTres>
                                        <BtnAgregarMas onClick={()=> dispatch(deleteCartSync(prod.codeproduct, true))}>
                                            <ContainerBtnMas><FaTimes /></ContainerBtnMas>
                                            Eliminar
                                        </BtnAgregarMas>
                                    </ContainerTres>
                                    </ContainerBtnsItems>
                                </ContainerSecondary>
                            </BtnShowDetail>


                                <ContainerBtn>
                                    <ContainerTres>
                                        <PUno>US$</PUno>
                                        <PDos><strong>{prod.priceproduct}.00</strong></PDos>
                                    </ContainerTres>
                                </ContainerBtn>
                            </ContainerProductInCart>
                    ))
                }
                </ContainerCar>  
                
                {cart.length === 0 ?
                    <ContainerSubtotal>
                        <ImgLogo src="https://res.cloudinary.com/silviajcn/image/upload/v1641583841/SPRING-3/logo-footer_zysgvs.png" alt="logo" />
                    </ContainerSubtotal>
                        :
                    <ContainerSubtotal>
                        <ContainerEnvioGratis>
                            <FaCheckCircle />
                            <EnvioGratisP><strong>¡Tu pedido es elegible para envío GRATIS!</strong></EnvioGratisP>
                        </ContainerEnvioGratis>

                        <TitleSubTotal>Subtotal ({totalItems()} producto(s)): <strong>{totalPrice()}.00</strong> $</TitleSubTotal>

                        <Link to="/pay" className="links">
                            <BtnComprar>Proceder al pago</BtnComprar>
                        </Link>
                    </ContainerSubtotal>
                }
                
                </ContainerSecond>
        </ContainerPrincipal>
    )
}

export default Carrito