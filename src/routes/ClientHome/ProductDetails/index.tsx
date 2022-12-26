import "./styles.css";
import { ButtonInverse, ButtonPrimary, ProductCard } from "../../../components";
import { ProductDTOProps } from "../../../types";
import { products } from "../../../services/product-service";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";

export const ProductDetails = () => {
  // Lê o parametro de rota
  const params = useParams();

  const findById = (id: number): ProductDTOProps | undefined => {
    return products.find((x) => x.id === id);
  };

  const [product, setProduct] = React.useState<ProductDTOProps>()

  React.useEffect(() => {
    const fetchData = async () => {
      const prod = await axios
        .get<ProductDTOProps>(
          `http://localhost:8080/products/${Number(params.productId)}`
        )
        .then((response) => response.data);

        console.log(prod)
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
