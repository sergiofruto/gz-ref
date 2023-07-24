import Image from "next/image";

// const ProductCard = ({name, image, price }) => {

const ProductCard = ({product}) => {
  return (
    <div class="card w-100 my-2 shadow-2-strong">
      <div className="product-card__image-wrapper">
        <Image
          src={`/images${product.image}`}
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
      {/* <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp" class="card-img-top" style={{aspectRatio: '1 / 1'}} /> */}
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">$790.50</p>
        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
          <a href="#!" class="btn btn-primary shadow-0 me-1">MercadoLibre</a>
          <a href="#!" class="btn btn-secondary shadow-0 me-1">Consultar</a>
        </div>
      </div>
    </div>
  );
}
 
export default ProductCard;