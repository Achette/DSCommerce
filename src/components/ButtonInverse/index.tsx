import { Link } from 'react-router-dom'
import { Props } from '../../types'
import './styles.css'

export const ButtonInverse = ({ title }: Props) => {
  return (
    <Link to={`/`}>
      <button className="dsc-btn dsc-btn-white">{title}</button>
    </Link>
  )
}
