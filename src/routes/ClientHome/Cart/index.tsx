import "./styles.css";
import React from "react";
import { OrderDTO } from "../../../models/order";
import * as cartService from "../../../services/cart-services";
import { Link } from "react-router-dom";
import { ContextCartCount } from "../../../utils/context-cart";

export const Cart = () => {
  const [cart, setCart] = React.useState<OrderDTO>(cartService.getCart());

  const { setContextCartCount } = React.useContext(ContextCartCount);

  const handleIncreaseItem = (id: number) => {
    cartService.increaseItem(id);
    updateCart();
  };

  const handleDecreaseItem = (id: number) => {
    cartService.decreaseItem(id);
    updateCart();
  };

  const updateCart = () => {
    const newCart = cartService.getCart();
    setCart(newCart);
    setContextCartCount(newCart.items.length);
  };

  return (
    <main>
      <section id="cart-container-section" className="dsc-container">
        {cart.items.length > 0 ? (
          <div className="dsc-card dsc-mb20">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="dsc-cart-item-container dsc-line-bottom"
              >
                <div className="dsc-cart-item-left">
                  <img src={item.imgUrl} alt={item.name} />
                  <div className="dsc-cart-item-description">
                    <h3>{item.name}</h3>
                    <div className="dsc-cart-item-quantity-container">
                      <div
                        onClick={() => handleDecreaseItem(item.productId)}
                        className="dsc-cart-item-quantity-btn"
                      >
                        -
                      </div>
                      <p>{item.quantity}</p>
                      <div
                        onClick={() => handleIncreaseItem(item.productId)}
                        className="dsc-cart-item-quantity-btn"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dsc-cart-item-right">
                  R$ {item.subTotal.toFixed(2)}
                </div>
              </div>
            ))}
            <div className="dsc-cart-total-container">
              <h3>{cart.total.toFixed(2)}</h3>
            </div>
          </div>
        ) : (
          <div className="dsc-section-title dsc-mb20">
            <h2>Seu carrinho vazio está vazio!</h2>
          </div>
        )}

        <div className="dsc-btn-page-container">
          <div className="dsc-btn dsc-btn-blue">Finalizar pedido</div>
          <Link to={`/catalog`}>
            <div className="dsc-btn dsc-btn-white">Continuar comprando</div>
          </Link>
        </div>
      </section>
    </main>
  );
};
