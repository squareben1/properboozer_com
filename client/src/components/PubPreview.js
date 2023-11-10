import { Link } from "react-router-dom";
// import { useEffect } from "react";

const PubPreview = (props) => {
    console.log("props.pub.id: ", props.pub.id)

    const pubUrl = props.pub.url
    const pubName = props.pub.name
    const pubId = props.pub.id
    const pubIntro = props.pub.intro
    const pubImage = props.pub.images[0]

    const alternateFlowDirection = () => `row align-items-center mx-1  ${pubId % 2 === 0 ? '' : ' flex-row-reverse'}`

    return (
        <div className="PubPreview ">
            <div className="container col-12 col-lg-8 col-md-12 px-0 px-lg-4 py-1 ">
                <div className={alternateFlowDirection()}>
                    <div className="col-sm-6 ">
                        <Link key={pubId} to={`/pubs/${pubUrl}`}>
                            <h1 className="display-5 fw-bold lh-1 mb-3" id="pubpreview-name-text">{pubName}</h1>
                        </Link>
                        <p className="lead" id="pubpreview-intro-text">
                            {pubIntro}
                        </p>
                    </div>
                    <div className="col-sm-6 ">
                        <Link key={pubId} to={`/pubs/${pubUrl}`}>
                            <img
                                src={pubImage ? pubImage : "image.com/loading-pic"}
                                className="d-block mx-auto img-fluid"
                                alt="Bootstrap Themes"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PubPreview;





