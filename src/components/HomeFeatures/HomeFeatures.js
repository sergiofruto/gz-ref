const HomeFeatures = () => {
  return ( 
      <section className="" style={{backgroundColor: '#f5f5f5'}}>
        <div className="container text-dark pt-3">
          <div className="row mb-4">
            <div className="col-lg-4 col-md-6">
              <figure className="d-flex align-items-center mt-4">
                <span className="rounded-circle bg-white p-3 d-flex me-3 mb-2">
                  <i className="home-feature-circle fas fa-phone fa-2x fa-fw text-primary floating"></i>
                </span>
                <figcaption className="info">
                  <h6 className="title">PRESUPUESTOS SIN CARGO</h6>
                  <p>Hacemos presupuestos sin cargo. Trabajos estándar o medidas especiales.</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure className="d-flex align-items-center mt-4">
                <span className="rounded-circle bg-white p-3 d-flex me-3 mb-2">
                  <i className="home-feature-circle fas fa-truck fa-2x fa-fw text-primary floating"></i>
                </span>
                <figcaption className="info">
                  <h6 className="title">ENVÍOS</h6>
                  <p>Realizamos envíos a todo el país. La empresa de transporte queda a elección y costo del comprador.</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure className="d-flex align-items-center mt-4">
                <span className="rounded-circle bg-white p-3 d-flex me-3 mb-2">
                  <i className="home-feature-circle fas fa-screwdriver-wrench fa-2x fa-fw text-primary floating"></i>
                </span>
                <figcaption className="info">
                  <h6 className="title">GARANTÍA</h6>
                  <p>Todos nuestros productos cuentan con garantía por 2 meses en caso de fallas en la selección de los materiales o por defectos en su fabricación.</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
   );
}
 
export default HomeFeatures;