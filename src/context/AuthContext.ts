import { ref } from 'vue'

interface User {
  email: string
  token: string
}

const user = ref<User | null>(
  JSON.parse(localStorage.getItem('ticketapp_session') || 'null')
)

export function useAuth() {
  const login = (credentials: { email: string; password: string }) => {
    const mockUser = { email: credentials.email, token: 'mock-token' }
    localStorage.setItem('ticketapp_session', JSON.stringify(mockUser))
    user.value = mockUser
  }

  const logout = () => {
    localStorage.removeItem('ticketapp_session')
    user.value = null
  }

  return { user, login, logout }
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem('ticketapp_session')
}
