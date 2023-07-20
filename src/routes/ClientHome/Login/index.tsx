/* eslint-disable */
import React from 'react'
import { CredentialsDTO } from '../../../models/auth'
import * as authService from '../../../services/auth-service'
import './styles.css'

export const Login = () => {
  const [formData, setFormData] = React.useState<CredentialsDTO>({
    username: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const { value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    authService
      .loginRequest(formData)
      .then((res) => console.log(res.data))
      .catch((error) => console.error('erro no login ', error))
  }

  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={(e) => handleSubmit(e)}>
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input
                  name="username"
                  className="dsc-form-control"
                  type="text"
                  placeholder="Email"
                  value={formData.username}
                  onChange={(event) => handleInputChange(event)}
                />
                <div className="dsc-form-error"></div>
              </div>
              <div>
                <input
                  name="password"
                  className="dsc-form-control"
                  type="password"
                  placeholder="Senha"
                  value={formData.password}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
            </div>

            <div className="dsc-login-form-buttons dsc-mt20">
              <button type="submit" className="dsc-btn dsc-btn-blue">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
