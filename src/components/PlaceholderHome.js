import ProductCard from "./ProductCard/ProductCard";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import HomeFeatures from "./HomeFeatures/HomeFeatures";

const productsDemo = [
  {
    name: 'Forzador de techo exhibidora 1/2 HP',
    image: '/test-prod-01.jpg',
    price: 790.50
  },
  {
    name: 'Evaporador Forzador Cúbico Techo 1 Hp',
    image: '/test-prod-02.jpg',
    price: 790.50
  },
  {
    name: 'Evaporador de aire forzado lateral (compacto) 1/2 HP',
    image: '/test-prod-03.jpg',
    price: 790.50
  },
  {
    name: 'Evaporador de aire forzado lateral (compacto) 1/2 HP',
    image: '/test-prod-04.jpg',
    price: 790.50
  }
];

const PlaceholderHome = () => {
  return (
    <>
      <Header />
      <Hero></Hero>
      <HomeFeatures></HomeFeatures>
      <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>Destacados</h3>
          </header>
          <div className="row">
            {productsDemo.map((product, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex" key={`${index}${product.name}`}>
                <ProductCard product={product} />
              </div>
            ))
            }
          </div>
        </div>
      </section>

      <section className="mt-5 mb-4">
        <div className="container text-dark">
          <header className="mb-4">
            <h3>Blog posts</h3>
          </header>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <article>
                <a href="#" className="img-fluid">
                  {/* <img className="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/1.webp" style={{objectFit: 'cover'}} height="160" /> */}
                </a>
                <div className="mt-2 text-muted small d-block mb-1">
                  <span>
                    <i className="fa fa-calendar-alt fa-sm"></i>
                    23.12.2022
                  </span>
                  <a href="#"><h6 className="text-dark">How to promote brands</h6></a>
                  <p>When you enter into any new area of science, you almost reach</p>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <article>
                <a href="#" className="img-fluid">
                  {/* <img className="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/2.webp" style={{objectFit: 'cover'}} height="160" /> */}
                </a>
                <div className="mt-2 text-muted small d-block mb-1">
                  <span>
                    <i className="fa fa-calendar-alt fa-sm"></i>
                    13.12.2022
                  </span>
                  <a href="#"><h6 className="text-dark">How we handle shipping</h6></a>
                  <p>When you enter into any new area of science, you almost reach</p>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <article>
                <a href="#" className="img-fluid">
                  {/* <img className="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/3.webp" style={{objectFit: 'cover'}} height="160" /> */}
                </a>
                <div className="mt-2 text-muted small d-block mb-1">
                  <span>
                    <i className="fa fa-calendar-alt fa-sm"></i>
                    25.11.2022
                  </span>
                  <a href="#"><h6 className="text-dark">How to promote brands</h6></a>
                  <p>When you enter into any new area of science, you almost reach</p>
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <article>
                <a href="#" className="img-fluid">
                  {/* <img className="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/4.webp" style={{objectFit: 'cover'}} height="160" /> */}
                </a>
                <div className="mt-2 text-muted small d-block mb-1">
                  <span>
                    <i className="fa fa-calendar-alt fa-sm"></i>
                    03.09.2022
                  </span>
                  <a href="#"><h6 className="text-dark">Success story of sellers</h6></a>
                  <p>When you enter into any new area of science, you almost reach</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-lg-start text-muted mt-3" style={{backgroundColor: '#f5f5f5'}}>
        <section className="">
          <div className="container text-center text-md-start pt-4 pb-4">
            <div className="row mt-3">
              <div className="col-12 col-lg-3 col-sm-12 mb-2">
                <a href="https://mdbootstrap.com/" target="_blank" className="">
                  {/* <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" /> */}
                </a>
                <p className="mt-2 text-dark">
                  © 2023 Copyright: MDBootstrap.com
                </p>
              </div>

              <div className="col-6 col-sm-4 col-lg-2">
                <h6 className="text-uppercase text-dark fw-bold mb-2">
                  Store
                </h6>
                <ul className="list-unstyled mb-4">
                  <li><a className="text-muted" href="#">About us</a></li>
                  <li><a className="text-muted" href="#">Find store</a></li>
                  <li><a className="text-muted" href="#">Categories</a></li>
                  <li><a className="text-muted" href="#">Blogs</a></li>
                </ul>
              </div>

              <div className="col-6 col-sm-4 col-lg-2">
                <h6 className="text-uppercase text-dark fw-bold mb-2">
                  Information
                </h6>
                <ul className="list-unstyled mb-4">
                  <li><a className="text-muted" href="#">Help center</a></li>
                  <li><a className="text-muted" href="#">Money refund</a></li>
                  <li><a className="text-muted" href="#">Shipping info</a></li>
                  <li><a className="text-muted" href="#">Refunds</a></li>
                </ul>
              </div>

              <div className="col-6 col-sm-4 col-lg-2">
                <h6 className="text-uppercase text-dark fw-bold mb-2">
                  Support
                </h6>
                <ul className="list-unstyled mb-4">
                  <li><a className="text-muted" href="#">Help center</a></li>
                  <li><a className="text-muted" href="#">Documents</a></li>
                  <li><a className="text-muted" href="#">Account restore</a></li>
                  <li><a className="text-muted" href="#">My orders</a></li>
                </ul>
              </div>

              <div className="col-12 col-sm-12 col-lg-3">
                <h6 className="text-uppercase text-dark fw-bold mb-2">Newsletter</h6>
                <p className="text-muted">Stay in touch with latest updates about our products and offers</p>
                <div className="input-group mb-3">
                  <input type="email" className="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                  <button className="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="">
          <div className="container">
            <div className="d-flex justify-content-between py-4 border-top">
              <div>
                <i className="fab fa-lg fa-cc-visa text-dark"></i>
                <i className="fab fa-lg fa-cc-amex text-dark"></i>
                <i className="fab fa-lg fa-cc-mastercard text-dark"></i>
                <i className="fab fa-lg fa-cc-paypal text-dark"></i>
              </div>

              <div className="dropdown dropup">
                <a className="dropdown-toggle text-dark" href="#" id="Dropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i className="flag-united-kingdom flag m-0 me-1"></i>English </a>

                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="Dropdown">
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-united-kingdom flag"></i>English <i className="fa fa-check text-success ms-2"></i></a>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-poland flag"></i>Polski</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-china flag"></i>中文</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-japan flag"></i>日本語</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-germany flag"></i>Deutsch</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-france flag"></i>Français</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-spain flag"></i>Español</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-russia flag"></i>Русский</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-portugal flag"></i>Português</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default PlaceholderHome;