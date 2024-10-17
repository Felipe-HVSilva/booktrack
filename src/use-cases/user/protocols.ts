import { User } from '../../models/user'
import { CreateUserParams } from '../../repositories/user/create-user/protocols'

export interface ICreateUserUseCase {
  execute(user: CreateUserParams): Promise<User>
}
