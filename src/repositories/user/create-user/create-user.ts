import { prisma } from '../../../lib/prisma'
import { User } from '../../../models/user'
import { CreateUserParams, ICreateUserRepository } from './protocols'

export class CreateUserRepository implements ICreateUserRepository {
  async execute(createUser: CreateUserParams): Promise<User> {
    const user = await prisma.user.create({ data: createUser })

    return user
  }
}
