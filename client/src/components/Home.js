import { Link } from "react-router-dom";

import Card from './Card'
import PubBanner from '../images/princess_louise_crop.jpeg'

const Home = () => {
    return (
        <>
            <div className='Home  col-12 align-self-center mt-4'>
                <div className="home-img col-md-10 mx-auto">
                    <img className="img-fluid" src={PubBanner} alt="Pub" />
                </div>
                <h1 className='display-5 m-3'>properboozer.com</h1>
                <p className='col-10 mx-auto col-md-10' id='homePageText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='CardList col-8 col-lg-10 align-self-center'>
                <div className="row pt-3">
                    <Link className="col-lg-4 mb-3 d-flex align-items-stretch" to="/pubs" >
                        <Card img_link={"https://i.postimg.cc/28PqLLQC/dotonburi-canal-osaka-japan-700.jpg"} title={"title"} text={"textetststststst"} />
                    </Link>
                    <Link className="col-lg-4 mb-3 d-flex align-items-stretch" to="/pubs" >
                        <Card img_link={"https://i.postimg.cc/28PqLLQC/dotonburi-canal-osaka-japan-700.jpg"} title={"title"} text={"textetststststst"} />
                    </Link>
                    <Link className="col-lg-4 mb-3 d-flex align-items-stretch" to="/pubs" >
                        <Card img_link={"https://i.postimg.cc/28PqLLQC/dotonburi-canal-osaka-japan-700.jpg"} title={"title"} text={"textetststststst"} />
                    </Link>
                    {/* <Card img_link={"https://i.postimg.cc/28PqLLQC/dotonburi-canal-osaka-japan-700.jpg"} title={"title"} text={"textetstststststtextetstststststtextetstststststtextetstststststtextetstststststtextetstststststtextetstststststtextetststststst"} />
                    <Card img_link={"https://i.postimg.cc/28PqLLQC/dotonburi-canal-osaka-japan-700.jpg"} title={"title"} text={"textetstststststtextetstststststtextetstststststtextetstststststtextetstststststtextetstststststtextetstststststtextetststststst"} /> */}
                </div>
            </div>
        </>
    )
}

export default Home