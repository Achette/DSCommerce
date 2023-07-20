import { Link } from 'react-router-dom'
import { CatalogCardProps } from '../../types'
import './styles.css'

export const CatalogCard = ({ product }: CatalogCardProps) => {
  return (
    <Link to={`/product-details/${product.id}`}>
      <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3>{product.price.toFixed(2).replace('.', ',')}</h3>
          <h4>{product.name}</h4>
        </div>
      </div>
    </Link>
  )
}
