import { User } from '../../models/user'
import bcrypt from 'bcrypt'
import {
  CreateUserParams,
  ICreateUserRepository,
} from '../../repositories/user/create-user/protocols'
import { IGetUserByEmailRepository } from '../../repositories/user/get-user-by-email/protocols'

export class CreateUserUseCase implements ICreateUserRepository {
  constructor(
    private getUserByEmailRepository: IGetUserByEmailRepository,
    private createUserRepository: ICreateUserRepository,
  ) {}
  async execute(user: CreateUserParams): Promise<User> {
    let createUser = { ...user }
    const emailAlreadyInUse = await this.getUserByEmailRepository.execute(
      user.email,
    )

    if (emailAlreadyInUse) {
      throw new Error('Error')
    }

    if (user.password) {
      const passwordHash = bcrypt.hash(user.password, 10)

      createUser = {
        ...user,
        password: passwordHash,
      }
    }

    const result = await this.createUserRepository.execute(createUser)

    return result
  }
}
