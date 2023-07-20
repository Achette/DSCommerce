import { Props } from '../../types'
import './styles.css'

export const CategoryCard = ({ title }: Props) => {
  return <div className="dsc-category">{title}</div>
}
