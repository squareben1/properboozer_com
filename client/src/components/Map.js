import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = (props) => {
    const api_key = "AIzaSyD2tbVQs9_PxZg9WpqrDJGu_nVA45JJanE";

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: api_key,
    });

    const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

    return (
        <div className="Map map-container">
            <h1>{props.data}</h1>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
                    <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
                </GoogleMap>
            )}
        </div>
    );
};

export default Map;
