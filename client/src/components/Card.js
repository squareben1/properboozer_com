const Card = (props) => {
    return (
        // <div className="container">

        //     <div className="row">
        // <div className="col-lg-4 mb-3 d-flex align-items-stretch">
            <div className="card">
                <img src={props.img_link} className="card-img-top" alt="Card Image" />
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text ">{props.text}</p>
                    {/* <a href="#" className="btn btn-primary mt-auto align-self-start">Book now</a> */}
                </div>
            </div>
        // </div>


        // </div>
        // </div>
    )
}

export default Card