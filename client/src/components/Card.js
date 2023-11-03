const Card = (props) => {
    return (
        // <div class="container">

        //     <div class="row">
        <div class="col-lg-4 mb-3 d-flex align-items-stretch">
            <div class="card">
                <img src={props.img_link} class="card-img-top" alt="Card Image" />
                <div class="card-body d-flex flex-column justify-content-center">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text ">{props.text}</p>
                    {/* <a href="#" class="btn btn-primary mt-auto align-self-start">Book now</a> */}
                </div>
            </div>
        </div>


        // </div>
        // </div>
    )
}

export default Card