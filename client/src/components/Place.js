import { useContext } from 'react';
import context from "../context/context"
import { IconContext } from "react-icons";
import { TbBeerFilled, TbBeerOff } from "react-icons/tb";
import { IoLocationOutline } from 'react-icons/io5'
import { SiTransportforlondon } from 'react-icons/si'
import { MdMuseum } from 'react-icons/md'
import { IoIosBeer } from "react-icons/io";
import ImageCarousel from './ImageCarousel';
import Map from './Map';

// import { Link } from "react-scroll";

const Place = (props) => {
    const places = useContext(context)[props.place_type]
    console.log("Place places: ", places)

    if (!places || places.length === 0) {
        console.log("Loading...")
        return <div></div>;
    }

    const setCurrentPlace = (places) => {
        const currentPlacePath = window.location.pathname.replace(`/${props.place_type}/`, "")
        const currentPlace = places.find((places) => places.url === currentPlacePath)
        console.log("currentPlace", currentPlace)
        return currentPlace
    }

    const currentPlace = setCurrentPlace(places)

    const isGuinness = () => {
        if (currentPlace.guinness) {
            const guinnessLogo = currentPlace.guinness ? <TbBeerFilled /> : <TbBeerOff />
            return (<div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                <div className='col-2 me-2'>{guinnessLogo} </div>
                Guinness?
            </div>)
        } else {
            return <></>
        }
    }

    const isPubOrMuseumNearby = () => {
        if (currentPlace.museums_nearby) {
            console.log("currentPlace.museums_nearby", currentPlace.museums_nearby)
            const museumsArray = JSON.parse(currentPlace.museums_nearby);
            return (
                <div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                    <div className='col-2 me-2'>{<MdMuseum />}</div>
                    {museumsArray.map((museum) => (
                        <ul>{museum}</ul>
                    ))}
                </div>
            )
        } else if (currentPlace.pubs_nearby) {
            const pubsArray = JSON.parse(currentPlace.pubs_nearby);
            console.log("pubsArray", pubsArray)
            return (
                <div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                    <div className='col-2 me-2'>{<IoIosBeer />}</div>
                    {pubsArray.map((pub) => (
                        <ul>{pub}</ul>
                    ))}

                </div>
            )
        }
    }

    return (
        <div className="Place col-lg-8 col-12 align-self-center mt-4 text-start">
            <div className="container-fluid">
                <img className="img-fluid" src={currentPlace.images[0]} alt="Place" />
                <h1 className="display-5 my-3">{currentPlace.name}</h1>
                <body className="text-justify" style={{ textAlign: "justify" }}>

                    <IconContext.Provider value={{ color: "black", className: "global-class-name", size: '1.5em' }}>
                        <div className="row pt-2" style={{ border: '1px solid #dadada', margin: '0px 1px' }}>
                            {isGuinness()}
                            {/* <div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                                <div className='col-2 me-2'>{guinnessLogo} </div>
                                Guinness?
                            </div> */}
                            <div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                                <div className='col-2 me-2'>{<IoLocationOutline />}</div>
                                {currentPlace.area}
                            </div>
                            <div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                                <div className='col-2 me-2'>{<SiTransportforlondon />}</div>
                                {currentPlace.tube_station_nearest}
                            </div>
                            {isPubOrMuseumNearby()}
                            {/* <div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                                <div className='col-2 me-2'>{<MdMuseum />}</div>
                                {currentPlace.museums_nearby}
                            </div> */}
                        </div>
                    </IconContext.Provider>
                    <div className='PlaceTopBulletPoints mt-3'>
                        <ul>
                            {currentPlace.top_points.map((point) => (
                                <div className="point">
                                    <li>{point}</li>
                                </div>
                            ))}
                        </ul>
                    </div>

                    {/* facts and map */}
                    <div className="row">
                        <div className="col-12">
                            <p>{currentPlace.body}</p>
                        </div>
                        <div className="col-12">
                            <Map location={{ lat: 51.51794091710391, lng: -0.1215879 }} />
                            {/* <div>
                                <img className="img-fluid" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1920,c_limit/GoogleMapTA.jpg" alt="Map Image" />
                            </div> */}
                        </div>
                    </div>
                    <div className="row my-3">
                        {<ImageCarousel images={currentPlace.images} />}
                    </div>
                </body>

            </div>

        </div>
    )
}
export default Place