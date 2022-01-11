import React, { useState } from "react";

const GeoLocation = () => {
    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        )
            .then(response => response.json())
            .then(data => setDetails(data));
    };

    return (
        <>

            <div className="row">
                <div className="col text-center">
                    <h2>Geolocalizacion</h2>
                    <p className="mt-3">
                        <button
                            className="btn btn-primary"
                            onClick={getUserGeolocationDetails}
                        >
                            Find my location
                        </button>

                        <div className="row justify-content-center mt-3">
                            <div className="col-lg-6 text-center text-dark">
                                {details && (
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            Location :{" "}
                                            {`${details.country_name}(${details.country_code})`}
                                        </li>
                                        <li className="list-group-item">
                                            IP: {details.IPv4}
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
};

export default GeoLocation;