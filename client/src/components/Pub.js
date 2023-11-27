import { useContext } from 'react';
import context from "../context/context"
import { IconContext } from "react-icons";
import { TbBeerFilled, TbBeerOff } from "react-icons/tb";
import { IoLocationOutline } from 'react-icons/io5'
import { SiTransportforlondon } from 'react-icons/si'
import { MdMuseum } from 'react-icons/md'
import Map from './Map'

import ImageCarousel from './ImageCarousel';

// import { Link } from "react-scroll";





const Pub = () => {
    const pubs = useContext(context)

    if (!pubs || pubs.length === 0) {
        console.log("Loading...")
        return <div></div>;
    }

    const setCurrentPub = (pubs) => {
        const currentPubPath = window.location.pathname.replace("/pubs/", "")
        const currentPub = pubs.find((pubs) => pubs.url === currentPubPath)
        console.log("currentPub", currentPub)
        return currentPub
    }

    const currentPub = setCurrentPub(pubs)

    const guinnessLogo = currentPub.guinness ? <TbBeerFilled /> : <TbBeerOff />


    return (
        <div className="Pub col-lg-8 col-12 align-self-center mt-4 text-start">
            <div className="container-fluid">
                <img className="img-fluid" src={currentPub.images[0]} alt="Pub" />
                <h1 className="display-5 my-3">{currentPub.name}</h1>
                <div className="text-justify" style={{ textAlign: "justify" }}>

                    <IconContext.Provider value={{ color: "black", className: "global-class-name", size: '1.5em' }}>
                        <div className="row pt-2" style={{ border: '1px solid #dadada', margin: '0px 1px' }}>
                            <div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                                <div className='col-2 me-2'>{guinnessLogo} </div>
                                Guinness?
                            </div>
                            <div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                                <div className='col-2 me-2'>{<IoLocationOutline />}</div>
                                {currentPub.area}
                            </div>
                            <div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                                <div className='col-2 me-2'>{<SiTransportforlondon />}</div>
                                {currentPub.tube_station_nearest}</div>
                            <div className='col-6 col-lg-3 mb-2 d-flex flex-row'>
                                <div className='col-2 me-2'>{<MdMuseum />}</div>
                                {currentPub.museums_nearby}</div>
                        </div>
                    </IconContext.Provider>
                    <div className='PubTopBulletPoints mt-3'>
                        <ul>
                            {currentPub.top_points.map((point) => (
                                <div key={point} className="point">
                                    <li>{point}</li>
                                </div>
                            ))}
                        </ul>
                    </div>

                    {/* facts and map */}
                    <div className="row">
                        <div className="col-12">
                            <p>{currentPub.body}</p>
                        </div>
                        <div className="col-12">
                            <div>
                                {/* <img className="img-fluid" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1920,c_limit/GoogleMapTA.jpg" alt="Map Image" /> */}
                                <Map location={{lat: 51.51794091710391, lng: -0.1215879}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {<ImageCarousel images={currentPub.images}/>}
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Pub
