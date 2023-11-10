import { Link } from "react-router-dom";
// import { useEffect } from "react";

const PubPreview = (props) => {
    console.log("props.pub.id: ", props.pub.id)

    const pubUrl = props.pub.url
    const pubId = props.pub.id
    const pubIntro = props.pub.intro
    const pubImage = props.pub.images[0]

    const alternateFlowDirection = () => `row align-items-center g-5 py-1 ${pubId % 2 === 0 ? '' : ' flex-row-reverse'}`

    return (
        <div className="PubPreview">
            <div className="container col-8 px-4 py-1">
                <div className={alternateFlowDirection()}>
                    <div className="col-6">
                        <Link key={pubId} to={`/pubs/${pubUrl}`}>
                            <h1 className="display-5 fw-bold lh-1 mb-3">{pubUrl}</h1>
                        </Link>
                        <p className="lead">
                            {pubIntro}
                        </p>
                    </div>
                    <div className="col-6">
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





