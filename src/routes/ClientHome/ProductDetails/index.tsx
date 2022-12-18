import "./styles.css";
import { ButtonInverse, ButtonPrimary, ProductCard } from "../../../components";
import { ProductDTOProps } from "../../../types";

export const product: ProductDTOProps = {
  id: 2,
  name: "Smart TV FHD",
  description: "Eleita a melhor TV do ano!",
  price: 3000.0,
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  categories: [
    { id: 2, name: "Eletrônicos" },
    { id: 3, name: "Smart Tvs" },
    { id: 4, name: "Importados" },
  ],
};

export const ProductDetails = () => {
  return (
    <div>
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary title={"Comprar"} />
            <ButtonInverse title={"Início"} />
          </div>
        </section>
      </main>
    </div>
  );
};
