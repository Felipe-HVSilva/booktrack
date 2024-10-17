import { describe, expect, it } from 'vitest'
import { user } from '../../../tests/fixtures/user'
import { GetUserByEmailRepository } from './get-user-by-email'
import { prisma } from '../../../lib/prisma'

describe('GetUserByEmailRepository', () => {
  it('should get user by email on db', async () => {
    await prisma.user.create({ data: user })
    const sut = new GetUserByEmailRepository()

    const response = await sut.execute(user.email)

    expect(response?.name).toBe(user.name)
    expect(response).toBeTruthy()
  })
})
