import { Link } from "react-router-dom";
import cartIcon from "../../assets/img/cart.svg";
import "./styles.css";

export const CartIcon = () => {
  return (
    <>
      <img src={cartIcon} alt="carrinho de compras" />
      <div className="dsc-cart-count">25</div>
    </>
  );
};
