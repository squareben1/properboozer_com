import { Link } from "react-router-dom"; 

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    properboozer.com
                </Link>
                <div class="navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {/* <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li> */}
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/pubs">
                                Pubs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;





