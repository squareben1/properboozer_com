import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = (props) => {
    const api_key = "AIzaSyD2tbVQs9_PxZg9WpqrDJGu_nVA45JJanE";

    const libraries = ["places"];

    const mapContainerStyle = {
        width: "100%",
        height: "700px",
    };

    const center = props.location;

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: api_key,
        libraries,
    });
    if (loadError) { return <div>Error loading maps</div>; }
    if (!isLoaded) { return <div>Loading maps</div>; }

    return (
        <div className="Map">
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={17} center={center}>
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};

export default Map;
