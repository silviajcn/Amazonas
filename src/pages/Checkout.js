import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { clearCartSync } from '../actions/actionAddCart';
import { registerCompraAsync } from '../actions/actionCompras';
import { ContainerBack, PBack, ContainerPrincipal, ContainerSecond, ContainerCar, ContainerTitulo, ContainerTitleCart, RemoveAllLink, BtnAddProduct, Logo, Delivery, BtnOne } from '../styles/Cart.elements';
import { RiArrowLeftSLine } from "react-icons/ri";
import '../styles/index.css';

//MUI
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "#fff",
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3
};

const Checkout = () => {

    const dispatch = useDispatch();

    const { cart } = useSelector((store) => store.shopping);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            direccion: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            email: Yup.string().required(),
            direccion: Yup.string().required(),

        }),
        onSubmit: (data) => {
            //console.log(data);
            dispatch(registerCompraAsync(data))
        },
    })




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


    //MUI
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    //Delivery Date
    const today = new Date();
    function deliveryDate(date, format,days) {
        const map = {
            dd: date.getDate() + days,
            mm: date.getMonth() + 1,
            yy: date.getFullYear().toString().slice(-2),
            yyyy: date.getFullYear()
        }
        return format.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
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
                             <h2>No haz seleccionado ningun producto.</h2> 
                        </ContainerTitulo>
                        :
                        <div>
                            <ContainerTitulo>
                                <ContainerTitleCart>
                                    <h3>Procesar el pago de: {totalItems()} producto(s) por <strong>{totalPrice()}</strong>.00 $</h3>
                                    <RemoveAllLink onClick={() => dispatch(clearCartSync())}><strong>Cancelar compra</strong></RemoveAllLink>
                                </ContainerTitleCart>
                           </ContainerTitulo>

                            <form onSubmit={formik.handleSubmit}>

                                {/* <p><strong>Datos de la compra</strong></p>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="preciototal"
                                        autoComplete="off"
                                        value={totalPrice()}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="cantidad"
                                        autoComplete="off"
                                        value={totalItems()}
                                        onChange={formik.handleChange}
                                    />
                                </div> */}

                                <p><strong>Datos del comprador</strong></p>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="name"
                                        autoComplete="off"
                                        placeholder="Nombre completo"
                                        onChange={formik.handleChange}
                                        autoFocus
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="email"
                                        autoComplete="off"
                                        placeholder="Correo electronico"
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="direccion"
                                        autoComplete="off"
                                        placeholder="Direccion"
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="d-grid gap-2 mx-auto mt-2">
                                    <BtnAddProduct
                                        value="COMPRAR"
                                        type="submit"
                                        className="btn"
                                        onClick={handleOpen}
                                    />
                                </div>
                            </form>





                            {/* MUI */}
        <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">¡Compra exitosa!</h2>
          <Delivery><strong>Tu pedido llegara entre el {deliveryDate(today, 'dd/mm/yy',5)} y el {deliveryDate(today, 'dd/mm/yy',10)}</strong></Delivery>
          <Link to="/gift">
            <Logo src="https://res.cloudinary.com/silviajcn/image/upload/v1641583841/SPRING-3/logo-footer_zysgvs.png" alt="logo" />
            <BtnOne onClick={() => dispatch(clearCartSync())}><strong>FINALIZAR COMPRA</strong></BtnOne>
          </Link>
          
        </Box>
      </StyledModal>
                        </div>
                        

                        
                    }
                </ContainerCar>
            </ContainerSecond>
        </ContainerPrincipal>
    )
}

export default Checkout