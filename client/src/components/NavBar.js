import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link className="nav-link active fw-bold" aria-current="page" to="/">properboozer.com</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav mb-1 mb-lg-0 ">
            <li class="nav-item">
              <Link className="nav-link active" aria-current="page" to="/pubs">Pubs</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Museums</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;





