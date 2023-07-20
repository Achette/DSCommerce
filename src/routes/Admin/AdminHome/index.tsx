import React from 'react'
import { UserDTO } from '../../../types'
import * as userService from '../../../services/user-service'
import './styles.css'

export const AdminHome = () => {
  const [user, setUser] = React.useState<UserDTO>()

  React.useEffect(() => {
    userService
      .findMe()
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <main>
      <section id="admin-home-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">
          Bem-vindo à área administrativa {user?.name}
        </h2>
      </section>
    </main>
  )
}
