import { SearchBar } from "../../../components/SearchBar";
import { CatalogCard } from "../../../components/CatalogCard";
import { ButtonNextPage } from "../../../components/ButtonNextPage";
import "./styles.css";
import React from "react";
import { ProductDTOProps } from "../../../types";
import { ApiProducts } from "../../../services/api";

export const Catalog = () => {
  const [products, setProducts] = React.useState<ProductDTOProps[]>([]);

  const fetchData = React.useCallback(async () => {
    try {
      const prods = await ApiProducts.getAll();

      setProducts(prods);
    } catch (e) {
      alert("Erro ao fazer requisição");
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>

        <ButtonNextPage title={"Carregar mais"} />
      </section>
    </main>
  );
};
