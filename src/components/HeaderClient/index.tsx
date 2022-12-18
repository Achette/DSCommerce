import "./styles.css";
import cart from "../../assets/img/cart.svg";
import { Link } from "react-router-dom";

export const HeaderClient = () => {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to={`/`}>
          <h1>DSCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <Link to={`/cart`}>
                <img src={cart} alt="Carrinho de compras" />
              </Link>
            </div>
          </div>
          <Link to={`/login`}>Entrar</Link>
        </div>
      </nav>
    </header>
  );
};
