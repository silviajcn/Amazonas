import React, { useState } from "react";
import UserData from '../hooks/dataUser';
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
    
    const useUser = UserData();

    return (
        <>
            <ContainerLocation>
                <BtnLocation onClick={getUserGeolocationDetails}>
                    <ContainerIcon>
                        <FaMapMarkerAlt />
                    </ContainerIcon>

                    <ContainerGeolocation>
                        <TextEnviar>
                            Enviar a {
                              useUser.name!==undefined?useUser.name:" "
                              }
                        </TextEnviar>
                        {details && (
                            <Location>
                                <strong>
                                    {`${details.country_name}  (${details.country_code})`}
                                </strong>
                            </Location>
                        )}
                    </ContainerGeolocation>
                </BtnLocation>
            </ContainerLocation>
        </>
    );
};

export default GeoLocation;