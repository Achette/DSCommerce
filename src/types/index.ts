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
 product: ProductDTOProps
};
