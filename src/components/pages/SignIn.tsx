import { FormEvent, useState } from "react";
import axios from 'axios'
import { Envelope, Lock } from "phosphor-react";
import { Logo } from "../../Logo";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { TextInput } from "../TextInput";

export function SignIn(){
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'teste@teste.com.br',
      password: '123456'
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size="lg" className='mt-4'>Ignite Lab</Heading>
        <Text size="lg" className='text-gray-400 mt-1'>Faça login e comece a usar</Text>

        {isUserSignedIn && <Text>Usuário logado com sucesso!</Text>}
      </header>

      <form
        onSubmit={handleSignIn}
        className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'
      >
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" type='email' placeholder='Digite o seu e-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder='Digite a sua senha' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id="remember" />
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
      </form>

      <footer className='flex flex-col align-center text-center gap-2 mt-8'>
        <Text asChild>
          <a href="" className="text-gray-400 underline transition hover:text-cyan-300">Esqueceu a sua senha?</a>
          </Text>
        <Text asChild>
          <a href="" className="text-gray-400 underline transition hover:text-cyan-300">Não possui conta? Crie uma agora</a>
          </Text>
      </footer>
    </div>
  )
}