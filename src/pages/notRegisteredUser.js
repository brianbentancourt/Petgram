import React, { Fragment } from 'react'
import Context from '../context'
import { UserForm } from '../components/userForm'
import { RegisterMutation } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <Fragment>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }

                const errorMsg = error && 'Error de registro'

                return <UserForm error={errorMsg} disabled={loading} title='Registrarse' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>

          <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
        </Fragment>
      }
    }
  </Context.Consumer>
)
