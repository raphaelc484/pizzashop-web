import { api } from '@/lib/axios'

export async function signOut() {
  await api.post('/signout')
}
