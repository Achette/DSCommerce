import React from 'react'
import { SearchBar } from '../../../components/SearchBar'
import { ApiProducts } from '../../../services/api-products'
import { ProductDTOProps, QueryParams } from '../../../types'
import { CatalogCard } from '../../../components/CatalogCard'
import { ButtonNextPage } from '../../../components/ButtonNextPage'
import './styles.css'

export const Catalog = () => {
  const [products, setProducts] = React.useState<ProductDTOProps[]>([])
  const [queryParams, setQueryParams] = React.useState<QueryParams>({
    page: 0,
    term: '',
  })
  const [isLastPage, setIsLastPage] = React.useState(false)

  const fetchData = React.useCallback(async () => {
    try {
      const response = await ApiProducts.getAll(
        queryParams.page,
        queryParams.term,
      )

      const loadMoreProducts = response.data.content

      setProducts(products.concat(loadMoreProducts))
      setIsLastPage(response.data.last)
    } catch (e) {
      alert('Erro ao fazer requisição')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams.page, queryParams.term, setProducts, setIsLastPage])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleSearchProduct = (SearchTerm: string) => {
    setProducts([])
    setQueryParams({ ...queryParams, page: 0, term: SearchTerm })
  }

  const handleLoadMore = () => {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 })
  }

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearchProduct} />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>

        {!isLastPage && (
          <div onClick={handleLoadMore}>
            <ButtonNextPage title={'Carregar mais'} />
          </div>
        )}
      </section>
    </main>
  )
}
