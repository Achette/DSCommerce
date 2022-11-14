import { HeaderClient } from "../../components";
import { SearchBar } from "../../components/SearchBar";
import { CatalogCard } from "../../components/CatalogCard";
import { ButtonNextPage } from "../../components/ButtonNextPage";

export const Catalog = () => {
  return (
    <>
      <HeaderClient />
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
    </>
  );
};
