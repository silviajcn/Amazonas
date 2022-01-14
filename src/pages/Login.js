import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { loginEmailPassword, loginGoogle, loginFacebook } from '../actions/actionLogin';
import { Link } from "react-router-dom";
import { ContainerPrincipal, LogoContainer, Logo, ContainerForm, ContainerInputs, Labels, Inputs, BtnContinue, Pconditions, BtnOtherAcount, LogoOtherAcount, RegisterRedirect, Predirect, BtnRegister, BtnOtherAcountP } from '../styles/Login.elements';

const Login = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassword(email, password))
    }

    const handleGoogle = () => {
        dispatch(loginGoogle());
    }

    const handleFacebook = () => {
        dispatch(loginFacebook());
    }

    return (
        <ContainerPrincipal>
            <LogoContainer>
                <Logo src="https://res.cloudinary.com/silviajcn/image/upload/v1640300505/SPRING-3/logo-amazon_d38j67.png" />
            </LogoContainer>
            <ContainerForm>
                <form onSubmit={handleLogin}>
                    <div>
                        <h2>Iniciar sesión</h2>
                    </div>

                    <ContainerInputs>
                        <Labels>
                            Dirección de correo electrónico
                        </Labels>
                        <Inputs
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>

                    <ContainerInputs>
                        <Labels>
                            Contraseña
                        </Labels>
                        <Inputs
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>

                    <div>
                        <BtnContinue type="submit">
                            Continuar
                        </BtnContinue>
                    </div>

                    <div>
                        <div>
                            <BtnOtherAcount onClick={() => handleGoogle()}>
                                <LogoOtherAcount src="https://res.cloudinary.com/silviajcn/image/upload/v1641572950/SPRING-3/kisspng-scalable-vector-graphics-g-suite-computer-icons-go-5bf7e7dcea2093.503845701542973404959_daquwm.jpg" />
                                <BtnOtherAcountP>Continuar con mi cuenta de Google</BtnOtherAcountP>
                            </BtnOtherAcount>
                        </div>

                        <div>
                            <BtnOtherAcount onClick={() => handleFacebook()}>
                                <LogoOtherAcount src="https://res.cloudinary.com/silviajcn/image/upload/v1641573711/SPRING-3/facebook-logo_etvlmw.png" />
                                <BtnOtherAcountP>Continuar con mi cuenta de Facebook</BtnOtherAcountP>
                            </BtnOtherAcount>
                        </div>
                    </div>

                    <div>
                        <Pconditions>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazonas.</Pconditions>
                    </div>

                </form>
            </ContainerForm>

            <RegisterRedirect>
                <Predirect>
                    ¿Eres nuevo en Amazonas?
                </Predirect>

                <Link to="/register" className="links">
                        <BtnRegister>Crea tu cuenta en Amazonas</BtnRegister>
                </Link>
            </RegisterRedirect>
        </ContainerPrincipal>
    )
}

export default Login
