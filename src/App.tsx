import "./App.css";
import {
  ButtonInverse,
  ButtonPrimary,
  HeaderClient,
  ProductCard,
} from "./components";

export default function App() {
  return (
    <div>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductCard
            price={5000.0}
            name={"Computador Gamer XT"}
            category1={"Eletrônicos"}
            category2={"Computadores"}
          />
          <div className="dsc-btn-page-container">
            <ButtonPrimary title={"Comprar"} />
            <ButtonInverse title={"Início"} />
          </div>
        </section>
      </main>
    </div>
  );
}
