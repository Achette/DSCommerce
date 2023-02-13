import { SearchBar } from "../../../components/SearchBar";
import { CatalogCard } from "../../../components/CatalogCard";
import { ButtonNextPage } from "../../../components/ButtonNextPage";
import "./styles.css";
import React from "react";
import { ProductDTOProps, QueryParams } from "../../../types";
import { ApiProducts } from "../../../services/api";

export const Catalog = () => {
  const [products, setProducts] = React.useState<ProductDTOProps[]>([]);
  const [queryParams, setQueryParams] = React.useState<QueryParams>({page: 0, term: ""});


  const fetchData = React.useCallback(async () => {
    try {
      const prods = await ApiProducts.getAll(queryParams.page, queryParams.term);

      setProducts(prods.data.content);
    } catch (e) {
      alert("Erro ao fazer requisição");
    }
  }, [queryParams, setProducts]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearchProduct = (SearchTerm: string) => {
    setQueryParams({ ...queryParams, term: SearchTerm });
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
