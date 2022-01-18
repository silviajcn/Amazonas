import React from 'react';
import { Link } from "react-router-dom";
import { ContainerBack, PBack, ContainerPrincipal, ContainerSecond, ContainerCar, ContainerSubtotal, ContainerTitulo } from '../styles/Car.elements';
import { RiArrowLeftSLine } from "react-icons/ri";

const Car = () => {
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
                <ContainerTitulo>
                    <h2>Carrito</h2>
                    <p>Anular la seleccion de todos los elementos</p>
                    <p>Precio</p>
                </ContainerTitulo>
                
                <div>
                    <div>
                        <img src="" alt="..."></img>
                    </div>

                    <div>
                        <h3>Titulo articulo</h3>
                        <p></p>
                        <p></p>
                        <p>Disponible</p>
                        <p>Envio gratis a Colombia cuando gastes mas de <strong>US$35.00</strong> en articulos aptos.</p>
                        <select>

                        </select>
                        <p>Eliminar</p>
                    </div>

                    <div>
                        <h2>US$9.08</h2>
                    </div>
                </div>
            </ContainerCar>

            <ContainerSubtotal>
                <div>
                    <h3>Subtotal (1 producto): US$9.08</h3>
                </div>
            </ContainerSubtotal>
                </ContainerSecond>
        </ContainerPrincipal>
    )
}

export default Car