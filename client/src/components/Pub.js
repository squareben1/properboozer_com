import { useContext } from 'react';
import context from "../context/context"



const Pub = () => {
    const pubs = useContext(context)

    console.log(pubs)
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

    return (
        <div className="Pub col-8 align-self-center mt-4 text-start">
            <div className="container-fluid">
            <img className="img-fluid" src={currentPub.image} alt="Pub" />
                <h1 className="display-5 text-light">{currentPub.name}</h1>
                <body className="text-justify" style={{textAlign: "justify"}}>
                    {currentPub.body}
                    <div className="row">
                        <div className="col-6">                            
                        </div>
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