import React from 'react'
import { Admin } from './routes/Admin'
import { history } from './utils/history'
import { PrivateRoute } from './components'
import { Cart } from './routes/ClientHome/Cart'
import { ClientHome } from './routes/ClientHome'
import { Login } from './routes/ClientHome/Login'
import { Catalog } from './routes/ClientHome/Catalog'
import { ContextCartCount } from './utils/context-cart'
import { ProductDetails } from './routes/ClientHome/ProductDetails'
import {
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom'

import { AdminHome } from './routes/Admin/AdminHome'

export default function App() {
  const [contextCartCount, setContextCartCount] = React.useState<number>(0)

  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount }}
    >
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route
            path="/admin/"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          >
            <Route index element={<AdminHome />} />
          </Route>
          <Route path="*" element={<Navigate to={`/`} />} />
        </Routes>
      </HistoryRouter>
    </ContextCartCount.Provider>
  )
}
