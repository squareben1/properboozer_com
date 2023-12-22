import PlacePreview from './PlacePreview';
import { useContext } from 'react';
import context from "../context/context"


const PlaceList = (props) => {
    const places = useContext(context)[props.place_type]

    return (
        <div className='placesList mt-5'>
            {places.map((place) => (
                <PlacePreview place={place} place_type={props.place_type}/>
            ))}
        </div>
    )
}

export default PlaceList