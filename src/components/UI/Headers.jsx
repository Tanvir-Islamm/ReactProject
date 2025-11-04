import { NavLink} from "react-router-dom";

export const Headers = () => {
 
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container">
    <NavLink to="/" className="navbar-brand">WorldAtlas</NavLink >
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
       
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink >
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" >About</NavLink >
          </li>
          <li className="nav-item">
            <NavLink to="/country" className="nav-link" >Country</NavLink >
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" >Contact</NavLink >
          </li>
          
        </ul>

       
      </div>
    </div>
  </div>
</nav>

    </header>
  );
};
