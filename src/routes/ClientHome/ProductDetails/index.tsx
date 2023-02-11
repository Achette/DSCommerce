import "./styles.css";
import { ButtonInverse, ButtonPrimary, ProductCard } from "../../../components";
import { ProductDTOProps } from "../../../types";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { ApiProducts } from "../../../services/api";
import * as cartService from "../../../services/cart-services";

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

  const handleBuyClick = () => {
    if (product) {
      cartService.addProduct(product);
      navigate("/cart");
    }
  };

  return (
    <div>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <ProductCard product={product} />}
          <div className="dsc-btn-page-container">
            <div onClick={handleBuyClick}>
              <ButtonPrimary title={"Comprar"} />
            </div>
            <ButtonInverse title={"Início"} />
          </div>
        </section>
      </main>
    </div>
  );
};
