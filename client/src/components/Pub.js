


const Pub = (props) => {
    return (
        <div className="Pub col-8 align-self-center mt-4 text-start">
            <div className="container-fluid">
            <img className="img-fluid" src="https://images.squarespace-cdn.com/content/v1/5e1cc8619d563e681552127e/1613921148496-7MBR4791BS8HX1Q4ZBXI/IMG_5835_crop.jpg" alt="Pub Image" />
                <h1 className='mt-3'>The Princess Louise</h1>
                <body className="text-justify" style={{textAlign: "justify"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <div className="row">
                        <div className="col-6">                            
                            <h1 className="display-3 text-light">{props.name}</h1>
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