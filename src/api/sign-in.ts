import { api } from '@/lib/axios'

// Esta pasta serve para tipar o input e o output das rotas do backend
export interface SignInBody {
  email: string
}

export async function signIn({ email }: SignInBody) {
  await api.post('/authenticate', { email })
}
