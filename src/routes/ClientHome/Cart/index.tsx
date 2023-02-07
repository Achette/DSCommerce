import "./styles.css";
import { cart } from "./mock";

export const Cart = () => {
  const { items } = cart;

  return (
    <main>
      <section id="cart-container-section" className="dsc-container">
        <div className="dsc-card dsc-mb20">
          {items.map((item) => (
            <div
              key={item.productId}
              className="dsc-cart-item-container dsc-line-bottom"
            >
              <div className="dsc-cart-item-left">
                <img src={item.imgUrl} alt={item.name} />
                <div className="dsc-cart-item-description">
                  <h3>{item.name}</h3>
                  <div className="dsc-cart-item-quantity-container">
                    <div className="dsc-cart-item-quantity-btn">-</div>
                    <p>{item.quantity}</p>
                    <div className="dsc-cart-item-quantity-btn">+</div>
                  </div>
                </div>
              </div>
              <div className="dsc-cart-item-right">
                R$ {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="dsc-cart-total-container">
            <h3>R$ 15000,00</h3>
          </div>
        </div>
        <div className="dsc-btn-page-container">
          <div className="dsc-btn dsc-btn-blue">Finalizar pedido</div>
          <div className="dsc-btn dsc-btn-white">Continuar comprando</div>
        </div>
      </section>
    </main>
  );
};
