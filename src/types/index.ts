export type Props = {
  title: string;
};

export type ProductDTOProps = {
  id: number;
  price: number;
  name: string;
  description: string;
  imgUrl: string;
  categories: categoryDTOProps[];
};

export type ProductDetailsCardProps = {
  product: ProductDTOProps;
};

export type categoryDTOProps = {
  id: number;
  name: string;
};

export type CatalogCardProps = {
  product: ProductDTOProps;
};

export type SearchProps = {
  onSearch: (value: string) => void;
};

export type QueryParams = {
  page: number;
  term: string;
};

export type ContextCartCountType = {
  contextCartCount: number;
  setContextCartCount: (cartCount: number) => void;
};
