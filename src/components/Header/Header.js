import Image from "next/image";

const Header = () => {
  return (
    <header>
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-2 col-sm-4 col-4">
                <a href="https://mdbootstrap.com/" target="_blank" className="float-start">
                  {/* <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" /> */}
                  <Image
                    src="/images/header-logo-2.png"
                    width={131}
                    height={48}
                    alt="Picture of the author"
                  />
                </a>
              </div>

              <div className="order-lg-last col-lg-3 col-sm-8 col-8">
                <div className="d-flex float-end">
                  <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-user-alt m-1 me-md-2"></i><p className="d-none d-md-block mb-0">Mi cuenta</p> </a>
                  {/* <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-heart m-1 me-md-2"></i><p className="d-none d-md-block mb-0">Wishlist</p> </a> */}
                  <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-shopping-cart m-1 me-md-2"></i><p className="d-none d-md-block mb-0">Mi carrito</p> </a>
                </div>
              </div>

              <div className="col-lg-7 col-md-12 col-12">
                <div className="input-group float-center">
                  <div className="form-outline">
                    <input type="search" id="form1" className="form-control" />
                    <label className="form-label" htmlFor="form1">Buscar</label>
                  </div>
                  <button type="button" className="btn btn-primary shadow-0">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container justify-content-center justify-content-md-between">
            <button
              className="navbar-toggler border py-2 text-dark"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarLeftAlignExample"
              aria-controls="navbarLeftAlignExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-dark" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Quienes Somos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
}
 
export default Header;