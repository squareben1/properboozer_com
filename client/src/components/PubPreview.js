const PubPreview = (props) => {
    console.log(props)
    return (
        <div className="PubPreview">
            <div class="container col-8 px-4 py-5">
                <div class="row align-items-center g-5 py-5">
                    <div class="col-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3 text-white">{props.pub.name}</h1>
                        <p class="lead text-white">
                            {props.pub.intro}
                        </p>
                    </div>
                    <div class="col-6">
                        <img
                            src={props.pub.image ? props.pub.image : "image.com/loading-pic"}
                            class="d-block mx-auto img-fluid"
                            alt="Bootstrap Themes"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PubPreview;





