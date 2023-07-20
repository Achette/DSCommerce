import './styles.css'
import home from '../../assets/img/home.svg'
import products from '../../assets/img/products.svg'

export const HeaderAdmin = () => {
  return (
    <header className="dsc-header-admin">
      <nav className="dsc-container">
        <h1>DSC Admin</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={home} alt="Início" />
              <p>Início</p>
            </div>
            <div className="dsc-menu-item">
              <img src={products} alt="Cadastro de produtos" />
              <p className="dsc-menu-item-active">Produtos</p>
            </div>
          </div>
          <div className="dsc-logged-user">
            <p>Maria Silva</p>
            <a href="#">Sair</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
