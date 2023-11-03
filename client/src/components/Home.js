import { Link } from "react-router-dom";

import Card from './Card'

const Home = () => {
    return (
        <>
            <div className='Home col-8 align-self-center mt-4'>
                <h1 className='display-3 '>properboozer.com</h1>
                <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='CardList col-10 align-self-center'>
                <div class="row pt-5">
                    <h3 class="mb-4 pt-2">Equal height Bootstrap 5 cards example</h3>
                    <Link to="/pubs" >
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