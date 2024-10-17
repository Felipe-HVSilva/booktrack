import { prisma } from '../../../lib/prisma'
import { User } from '../../../models/user'
import { IGetUserByEmailRepository } from './protocols'

export class GetUserByEmailRepository implements IGetUserByEmailRepository {
  async execute(userEmail: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    })

    return user
  }
}
