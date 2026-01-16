import ProductCarousel from "../components/ProductCarousel";
import products from "../db/product";

function Produtos() {
  const frutas = products.filter(
    product => product.categoria === "Frutas"
  );

  return (
    <>
      <ProductCarousel
        title="Frutas"
        products={frutas}
      />

      <ProductCarousel
        title="Todos os Produtos"
        products={products}
      />
    </>
  );
}

export default Produtos;
