import React from "react";
import { Cart } from "./routes/ClientHome/Cart";
import { ClientHome } from "./routes/ClientHome";
import { Login } from "./routes/ClientHome/Login";
import { Catalog } from "./routes/ClientHome/Catalog";
import { ContextCartCount } from "./utils/context-cart";
import { ProductDetails } from "./routes/ClientHome/ProductDetails";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  const [contextCartCount, setContextCartCount] = React.useState<number>(0);
  

  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount }}
    >
      <BrowserRouter>
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
          <Route path="*" element={<Navigate to={`/`} />} />
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}
