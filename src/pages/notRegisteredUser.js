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
              (register) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }

                return <UserForm title='Registrarse' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>

          <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
        </Fragment>
      }
    }
  </Context.Consumer>
)
