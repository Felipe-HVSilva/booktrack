import { describe, expect, it, vitest } from 'vitest'
import { CreateUserRepository } from './create-user'
import { prisma } from '../../../lib/prisma'

const user = {
  name: 'felipe',
  email: 'felipe@gmail.com',
  password: 'password_hash',
}

describe('CreateUserRepository', () => {
  it('should create user', async () => {
    const sut = new CreateUserRepository()

    const createdUser = await sut.execute(user)

    expect(createdUser.name).toBe(user.name)
    expect(createdUser.email).toBe(user.email)
    expect(createdUser.password).toBe(user.password)
  })

  it('should Prisma is call with correct parameters', async () => {
    const sut = new CreateUserRepository()
    const prismaSpy = vitest.spyOn(prisma.user, 'create')

    await sut.execute(user)

    expect(prismaSpy).toHaveBeenCalledWith({
      data: user,
    })
  })
})
