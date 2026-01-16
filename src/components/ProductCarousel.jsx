import "./ProductCarousel.css";
import Card from "./Card";

function ProductCarousel({ title, products }) {
  return (
    <section className="product-carousel">
      <div className="product-carousel__header">
        <h2 className="product-carousel__title">{title}</h2>
      </div>

      <div className="product-carousel__scroll">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductCarousel;
