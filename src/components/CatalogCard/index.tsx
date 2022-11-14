import computer from '../../assets/img/computer.png'
import { CatalogCardProps } from '../../types'
import './styles.css'

export const CatalogCard = ({ price, name }: CatalogCardProps) => {

    return (
        <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
          <img src={computer} alt="Computer" />
        </div>
        <div className="dsc-catalog-card-bottom">
          <h3>{price.toFixed(2).replace('.', ',')}</h3>
          <h4>{name}</h4>
        </div>
      </div>
    )
}