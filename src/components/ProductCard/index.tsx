import { ProductDetailsCardProps } from "../../types";
import { CategoryCard } from "../CategoryCard";

import "./styles.css";

export const ProductCard = ({ product }: ProductDetailsCardProps) => {
  return (
    <div className="dsc-card dsc-mb20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={product.imgUrl} alt="Computador" />
      </div>
      <div className="dsc-product-details-bottom">
        <h3>R$ {product.price.toFixed(2).replace(".", ",")}</h3>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div className="dsc-category-container">
          {product.categories.map((item) => (
            <CategoryCard key={item.id} title={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
