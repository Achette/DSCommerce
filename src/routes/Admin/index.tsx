import { Outlet } from 'react-router-dom'
import { HeaderAdmin } from '../../components'

export const Admin = () => {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
    </>
  )
}
