import { SearchBar } from "../../../components/SearchBar";
import { CatalogCard } from "../../../components/CatalogCard";
import { ButtonNextPage } from "../../../components/ButtonNextPage";
import "./styles.css";
import React from "react";
import { ProductDTOProps } from "../../../types";
import { ApiProducts } from "../../../services/api";

export const Catalog = () => {
  const [products, setProducts] = React.useState<ProductDTOProps[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  console.log("term:", searchTerm);

  const fetchData = React.useCallback(async () => {
    try {
      const prods = await ApiProducts.getAll(0, searchTerm);

      setProducts(prods.data.content);
    } catch (e) {
      alert("Erro ao fazer requisição");
    }
  }, [searchTerm, setProducts]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearchProduct = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearchProduct} />

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
