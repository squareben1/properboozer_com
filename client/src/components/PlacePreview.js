import { Link } from "react-router-dom";
// import { useEffect } from "react";

const placePreview = (props) => {
    // if (!props || props.length === 0) {
    //     console.log("Loading...")
    //     return <div></div>;
    // }
    console.log("props.place.id: ", props.place.id)

    const placeUrl = props.place.url
    const placeName = props.place.name
    const placeId = props.place.id
    const placeIntro = props.place.intro
    const placeImage = props.place.images[0]

    const alternateFlowDirection = () => `row align-items-center mx-1  ${placeId % 2 === 0 ? '' : ' flex-row-reverse'}`

    return (
        <div className="PlacePreview ">
            <div className="container col-12 col-lg-8 px-0 px-lg-4 py-1 ">
                <div className={alternateFlowDirection()}>
                    <div className="col-sm-6 ">
                        <Link key={placeId} to={`/${props.place_type}/${placeUrl}`}>
                            <h1 className="display-5 fw-bold lh-1 mb-3" id="placepreview-name-text">{placeName}</h1>
                        </Link>
                        <p className="lead" id="placepreview-intro-text">
                            {placeIntro}
                        </p>
                    </div>
                    <div className="col-sm-6 ">
                        <Link key={placeId} to={`/${props.place_type}/${placeUrl}`}>
                            <img
                                src={placeImage ? placeImage : "image.com/loading-pic"}
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

export default placePreview;





