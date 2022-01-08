import React from 'react';
import { ContainerPrincipal, ContainerTitle, Title, SecondTitle, ContainerBtns, Btns, ImgBtn, TextItems, ContainerInput, ContainerTextInput, TitleInput, InputContainer, ContainerIcon, Input } from '../styles/CustomerService.elements';
import { RiSearchLine } from "react-icons/ri";

const CustomerService = () => {
    return (
        <ContainerPrincipal>
            <ContainerTitle>
                <Title>Hola. ¿Cómo podemos ayudarte?</Title>
            </ContainerTitle>

            <SecondTitle>Algunas cosas que puedes hacer aquí</SecondTitle>

            <ContainerBtns>
                <Btns>
                    <ImgBtn src="https://res.cloudinary.com/silviajcn/image/upload/v1641659689/SPRING-3/botones%20ayuda/boton1_b9f1td.png" alt="..." />
                    <div>
                        <h4>Tus pedidos</h4>
                        <TextItems>Rastrear paquetes</TextItems>
                        <TextItems>Editar o cancelar pedidos</TextItems>
                    </div>
                </Btns>

                <Btns>
                    <ImgBtn src="https://res.cloudinary.com/silviajcn/image/upload/v1641659694/SPRING-3/botones%20ayuda/boton2_mjso0v.png" alt="..." />
                    <div>
                        <h4>Devoluciones y reembolsos</h4>
                        <TextItems>Devuelve o cambia artículos</TextItems>
                        <TextItems>Imprimir etiquetas de envío de devolución</TextItems>
                    </div>
                </Btns>

                <Btns>
                    <ImgBtn src="https://res.cloudinary.com/silviajcn/image/upload/v1641659699/SPRING-3/botones%20ayuda/boton3_w723pm.png" alt="..." />
                    <div>
                        <h4>Servicios digitales y soporte para dispositivos</h4>
                        <TextItems>Solución de problemas con dispositivos</TextItems>
                    </div>
                </Btns>

                <Btns>
                    <ImgBtn src="https://res.cloudinary.com/silviajcn/image/upload/v1641659702/SPRING-3/botones%20ayuda/boton4_zifbhc.png" alt="..." />
                    <div>
                        <h4>Administrar Prime</h4>
                        <TextItems>Más información sobre los beneficios de Prime</TextItems>
                        <TextItems>Cancelar menbresía Prime</TextItems>
                    </div>
                </Btns>

                <Btns>
                    <ImgBtn src="https://res.cloudinary.com/silviajcn/image/upload/v1641659705/SPRING-3/botones%20ayuda/boton5_q83hyb.png" alt="..." />
                    <div>
                        <h4>Pagos y tarjetas de regalo</h4>
                        <TextItems>Agregar o editar métodos de pago</TextItems>
                        <TextItems>Ver y recargar saldo de tarjetas de regalo</TextItems>
                    </div>
                </Btns>

                <Btns>
                    <ImgBtn src="https://res.cloudinary.com/silviajcn/image/upload/v1641659707/SPRING-3/botones%20ayuda/boton6_mv2fwe.png" alt="..." />
                    <div>
                        <h4>Tu cuenta</h4>
                        <TextItems>Administrar las preferencias de tu cuenta</TextItems>
                    </div>
                </Btns>

                <Btns>
                    <ImgBtn src="https://res.cloudinary.com/silviajcn/image/upload/v1641659710/SPRING-3/botones%20ayuda/boton7_k6ikqi.png" alt="..." />
                    <div>
                        <h4>Amazonas y COVID-19</h4>
                        <TextItems>Impactos en pedidos y entregas</TextItems>
                        <TextItems>Amazonas COVID-19 Test Collection Kit DTC</TextItems>
                    </div>
                </Btns>

                <Btns>
                    <ImgBtn src="https://res.cloudinary.com/silviajcn/image/upload/v1641659713/SPRING-3/botones%20ayuda/boton8_kpl5ug.png" alt="..." />
                    <div>
                        <h4>Compras en Línea seguras</h4>
                        <TextItems>Descubre cómo proteger tu cuenta</TextItems>
                        <TextItems>Denunciar algo sospechoso</TextItems>
                    </div>
                </Btns>
            </ContainerBtns>

            <ContainerInput>
                <ContainerTextInput>
                    <TitleInput>Buscar en la biblioteca de ayuda</TitleInput>
                    <TextItems>Escribe algo como "pregunta sobre un cargo"</TextItems>
                </ContainerTextInput>

                <InputContainer>
                    <ContainerIcon>
                        <RiSearchLine />
                    </ContainerIcon>
                
                    <Input placeholder="Buscar"/>
                </InputContainer>
                
            </ContainerInput>

        </ContainerPrincipal>
    )
}

export default CustomerService
