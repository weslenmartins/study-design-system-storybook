import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest';
import { rest } from 'msw'

import { SignIn } from './SignIn'

export default {
  title: "Pages/Sign In",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }))
        })
      ],
    }
  }
} as Meta

export const Default: StoryObj = { }


export const LoginTest: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite o seu e-mail'), 'weslenmartins@outlook.com')
    userEvent.type(canvas.getByPlaceholderText('Digite a sua senha'), '123456')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Usuário logado com sucesso!')).toBeInTheDocument()
    })

  }
}
