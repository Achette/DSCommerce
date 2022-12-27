import "./styles.css";
import { ButtonInverse, ButtonPrimary, ProductCard } from "../../../components";
import { ProductDTOProps } from "../../../types";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { ApiProducts } from "../../../services/api";

export const ProductDetails = () => {
  // Lê o parametro de rota
  const params = useParams();
  const navigate = useNavigate();

  /*   const findById = (id: number): ProductDTOProps | undefined => {
    return products.find((x) => x.id === id);
  }; */

  const [product, setProduct] = React.useState<ProductDTOProps>();

  React.useEffect(() => {
    ApiProducts.getById(Number(params.productId))
      .then((response) => setProduct(response))
      .catch((error) => {
        navigate(`/`);
      });
  }, [navigate, params.productId]);

  return (
    <div>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <ProductCard product={product} />}
          <div className="dsc-btn-page-container">
            <ButtonPrimary title={"Comprar"} />
            <ButtonInverse title={"Início"} />
          </div>
        </section>
      </main>
    </div>
  );
};
