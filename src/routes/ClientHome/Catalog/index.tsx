import { SearchBar } from "../../../components/SearchBar";
import { CatalogCard } from "../../../components/CatalogCard";
import { ButtonNextPage } from "../../../components/ButtonNextPage";
import "./styles.css";
import { products as Products } from "../../../services/product-service";

export const Catalog = () => {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {Products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>

        <ButtonNextPage title={"Carregar mais"} />
      </section>
    </main>
  );
};
