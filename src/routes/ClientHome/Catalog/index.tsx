import { SearchBar } from "../../../components/SearchBar";
import { CatalogCard } from "../../../components/CatalogCard";
import { ButtonNextPage } from "../../../components/ButtonNextPage";
import "./styles.css";

export const Catalog = () => {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard price={5000.0} name={"Computador Gamer XT"} />
          <CatalogCard price={5000.0} name={"Computador Gamer XT"} />
          <CatalogCard price={5000.0} name={"Computador Gamer XT"} />
          <CatalogCard price={5000.0} name={"Computador Gamer XT"} />
          <CatalogCard price={5000.0} name={"Computador Gamer XT"} />
          <CatalogCard price={5000.0} name={"Computador Gamer XT"} />
          <CatalogCard price={5000.0} name={"Computador Gamer XT"} />
          <CatalogCard price={5000.0} name={"Computador Gamer XT"} />
          <CatalogCard price={5000.0} name={"Computador Gamer XT"} />
        </div>

        <ButtonNextPage title={"Carregar mais"} />
      </section>
    </main>
  );
};
