const Hero = () => {
  return ( 
      <div className="bg-primary text-white py-5">
        <div className="container py-5">
          <h1>
            GZ REFRIGERACIÓN <br />
          </h1>
          <p>
            Trendy Products, Factory Prices, Excellent Service
          </p>
          <div className="d-flex flex-wrap hero-button-wrapper">
            <button type="button" className="btn btn-outline-light">
              Learn more
            </button>
            <button type="button" className="btn btn-light shadow-0 text-primary pt-2 border border-white">
              <span className="pt-1">Purchase now</span>
            </button>
          </div>
        </div>
      </div>
   );
}
 
export default Hero;