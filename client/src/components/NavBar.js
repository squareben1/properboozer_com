import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="nav-link active fw-bold" aria-current="page" to="/">properboozer.com</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-1 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/pubs">Pubs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Museums</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;





