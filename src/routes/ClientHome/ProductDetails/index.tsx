import React from "react";
import { ProductDTOProps } from "../../../types";
import { useNavigate, useParams } from "react-router-dom";
import { ApiProducts } from "../../../services/api-products";
import { ContextCartCount } from "../../../utils/context-cart";
import { ButtonInverse, ButtonPrimary, ProductCard } from "../../../components";
import * as cartService from "../../../services/cart-services";
import "./styles.css";

export const ProductDetails = () => {
  // Lê o parametro de rota
  const params = useParams();
  const navigate = useNavigate();
  const { productId } = params;

  const { setContextCartCount } = React.useContext(ContextCartCount);

  /*   const findById = (id: number): ProductDTOProps | undefined => {
    return products.find((x) => x.id === id);
  }; */

  const [product, setProduct] = React.useState<ProductDTOProps>();

  React.useEffect(() => {
    ApiProducts.getById(Number(productId))
      .then((response) => setProduct(response.data))
      .catch((error) => {
        window.alert("Produto não encontrado!");
        navigate(`/`);
      });
  }, [navigate, productId]);

  const handleBuyClick = () => {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
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
