import { User } from '../../../models/user'

export interface CreateUserParams {
  name?: string
  email: string
  password?: string
  googleId?: string
}

export interface ICreateUserRepository {
  execute(user: CreateUserParams): Promise<User>
}
