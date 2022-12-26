import "./styles.css";
import { ButtonInverse, ButtonPrimary, ProductCard } from "../../../components";
import { ProductDTOProps } from "../../../types";
import { useParams } from "react-router-dom";
import React from "react";
import { ApiProducts } from "../../../services/api";

export const ProductDetails = () => {
  // Lê o parametro de rota
  const params = useParams();

  /*   const findById = (id: number): ProductDTOProps | undefined => {
    return products.find((x) => x.id === id);
  }; */

  const [product, setProduct] = React.useState<ProductDTOProps>();

  React.useEffect(() => {
    const fetchData = async () => {
      const prod = await ApiProducts.getById(Number(params.productId));

      setProduct(prod);
    };

    fetchData();
  }, [params.productId]);

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
