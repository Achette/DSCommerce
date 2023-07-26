import React from 'react'
import { CartIcon } from '../CartIcon'
import { Link } from 'react-router-dom'
import AdminIcon from '../../assets/img/admin.svg'
import * as authService from '../../services/auth-service'
import './styles.css'

export const HeaderClient = () => {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to={`/`}>
          <h1>DSCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            {authService.hasAnyRoles(['ROLE_ADMIN']) && (
              <Link to="/admin">
                <div className="dsc-menu-item">
                  <img src={AdminIcon} alt="Admin" />
                </div>
              </Link>
            )}
            <Link to="/cart">
              <div className="dsc-menu-item">
                <CartIcon />
              </div>
            </Link>
          </div>
          <Link to={`/login`}>Entrar</Link>
        </div>
      </nav>
    </header>
  )
}
