import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ContainerLocation, BtnLocation, ContainerIcon, ContainerGeolocation, TextEnviar, Location } from '../styles/NavBar.elements';

const GeoLocation = () => {
    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        )
            .then(response => response.json())
            .then((data) => {
                setDetails(data)
                console.log(data)
            });
    };
    
    //USER
    const { name } = useSelector(state => state.login)
    //console.log(name);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    React.useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (name) => {
            if (name?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, [setIsLoggedIn]);

    return (
        <>
            <ContainerLocation>
                <BtnLocation onClick={getUserGeolocationDetails}>
                    <ContainerIcon>
                        <FaMapMarkerAlt />
                    </ContainerIcon>

                    <ContainerGeolocation>
                        {
                            isLoggedIn ? (
                                <div>
                                    <TextEnviar>
                                        Enviar a { name }
                                    </TextEnviar>
                                    {details && (
                                        <Location>
                                            <strong>
                                                {`${details.country_name}  (${details.country_code})`}
                                            </strong>    
                                        </Location>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <TextEnviar>
                                        Elige
                                    </TextEnviar>
                                    <Location>
                                        <strong>
                                            tu ubicacion
                                        </strong>    
                                    </Location>
                                </div>   
                            )       
                        }  
                    </ContainerGeolocation>
                </BtnLocation>
            </ContainerLocation>
        </>
    );
};

export default GeoLocation;