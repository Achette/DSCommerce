import "./styles.css";
import { ButtonInverse, ButtonPrimary, ProductCard } from "../../../components";
import { ProductDTOProps } from "../../../types";
import { products } from "../../../services/product-service";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  // Lê o parametro de rota
  const params = useParams();

  const findById = (id: number): ProductDTOProps | undefined => {
    return products.find((x) => x.id === id);
  };
                                  //apelido DEFINIDO NA ROTA
  const product = findById(Number(params.productId));

  return (
    <div>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <ProductCard product={product} />}
          <div className="dsc-btn-page-container">
            <ButtonPrimary title={"Comprar"} />
            <ButtonInverse title={"Início"}/>
          </div>
        </section>
      </main>
    </div>
  );
};
