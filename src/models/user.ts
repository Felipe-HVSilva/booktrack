export interface User {
  id: string
  name?: string | null
  email: string
  password?: string | null
  googleId?: string | null
  created_at: Date
}
