import React from 'react'
import cartIcon from '../../assets/img/cart.svg'
import { ContextCartCount } from '../../utils/context-cart'
import './styles.css'

export const CartIcon = () => {
  const { contextCartCount } = React.useContext(ContextCartCount)

  return (
    <>
      <img src={cartIcon} alt="carrinho de compras" />
      {contextCartCount > 0 && (
        <div className="dsc-cart-count">{contextCartCount}</div>
      )}
    </>
  )
}
