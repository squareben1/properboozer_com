import { Link } from "react-router-dom";

const hyphenateString = (string) => {
    string.replaceAll(" ", "-").lower();
}

const PubPreview = (props) => {
    console.log(props)
    return (
        <div className="PubPreview">
            <div class="container col-8 px-4 py-5">
                <div class="row align-items-center g-5 py-5">
                    <div class="col-6">
                        <Link key={props.pub.id} to={`/pubs/${props.pub.url}`}>
                            <h1 class="display-5 fw-bold lh-1 mb-3 text-white">{props.pub.url}</h1>
                        </Link>
                        <p class="lead text-white">
                            {props.pub.intro}
                        </p>
                    </div>
                    <div class="col-6">
                        <Link key={props.pub.id} to={`/pubs/${props.pub.url}`}>
                            <img
                                src={props.pub.image ? props.pub.image : "image.com/loading-pic"}
                                class="d-block mx-auto img-fluid"
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





