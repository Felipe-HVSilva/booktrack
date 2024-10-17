import { describe, expect, it, vitest } from 'vitest'
import { CreateUserRepository } from './create-user'
import { prisma } from '../../../lib/prisma'

const user = {
  name: 'felipe',
  email: 'felipe@gmail.com',
  password: 'password_hash',
}

const userWithGoogleId = {
  name: 'felipe',
  email: 'felipe@gmail.com',
  password: 'password_hash',
  googleId: '#googleId',
}

describe('CreateUserRepository', () => {
  it('should create user', async () => {
    const sut = new CreateUserRepository()

    const createdUser = await sut.execute(user)

    expect(createdUser.name).toBe(user.name)
    expect(createdUser.email).toBe(user.email)
    expect(createdUser.password).toBe(user.password)
  })

  it('should create user with googleId', async () => {
    const sut = new CreateUserRepository()

    const createdUser = await sut.execute(userWithGoogleId)

    expect(createdUser.name).toBe(userWithGoogleId.name)
    expect(createdUser.email).toBe(userWithGoogleId.email)
    expect(createdUser.password).toBe(userWithGoogleId.password)
    expect(createdUser?.googleId).toBe(userWithGoogleId.googleId)
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
