import { Outlet } from "react-router-dom";
import { HeaderClient } from "../../components";

export const ClientHome = () => {
  return (
    <>
      <HeaderClient />
      <Outlet />
    </>
  );
};
