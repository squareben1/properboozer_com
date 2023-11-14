import { useContext } from 'react';
import context from "../context/context"
import { IconContext } from "react-icons";
import { TbBeerFilled, TbBeerOff } from "react-icons/tb";
import { IoLocationOutline } from 'react-icons/io5'
import { SiTransportforlondon } from 'react-icons/si'
import { MdMuseum } from 'react-icons/md'



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
                <body className="text-justify" style={{ textAlign: "justify" }}>

                    <IconContext.Provider value={{ color: "black", className: "global-class-name", size: '1.5em' }}>
                        <div className="row mb-2" style={{boxShadow: '1px 1px 1px black', margin: '0px 1px'}}> 
                            <div className='col-6 col-lg-3 mb-3 d-flex flex-row'>
                                <div className='col-2'>{guinnessLogo} </div>
                                Guinness?
                            </div>
                            <div className='col-6 col-lg-3 mb-3 d-flex flex-row'>
                                <div className='col-2'>{<IoLocationOutline />}</div>
                                {currentPub.area}
                            </div>
                            <div className='col-6 col-lg-3 mb-3 d-flex flex-row'>
                                <div className='col-2'>{<SiTransportforlondon />}</div>
                                {currentPub.tube_station_nearest}</div>
                            <div className='col-6 col-lg-3 mb-3 d-flex flex-row'>
                                <div className='col-2'>{<MdMuseum />}</div>
                                {currentPub.museums_nearby}</div>
                        </div>
                    </IconContext.Provider>
                    <div className='PubTopBulletPoints'>
                        <ul>
                            {currentPub.top_points.map((point) => (
                                <div className="point">
                                    <li>{point}</li>
                                </div>
                            ))}
                        </ul>
                    </div>

                    {/* facts and map */}
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Beautiful Victorian interior featuring privacy screens ('snob screens') to afford the well-heeled some privacy from the rabble in the main sections of the bar (the men's loos are cool and have the original urinals).</li>
                                <li>A Sam Smiths pub - an English brewery that owns pubs all over London & serves their own drinks- so no Guinness, but often in beautiful buildings and usually less expensive than elsewhere.</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <div>
                                <img className="img-fluid" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1920,c_limit/GoogleMapTA.jpg" alt="Map Image" />
                            </div>
                        </div>
                    </div>
                    {currentPub.body}
                    {/* footer text and images */}
                    <div className="row">
                        <p>additional text</p>
                        <img src="" alt="carousel" />
                    </div>
                </body>

            </div>

        </div>
    )
}
export default Pub