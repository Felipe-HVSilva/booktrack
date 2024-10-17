import { describe, expect, it } from 'vitest'
import { CreateUserRepository } from './create-user'

const user = {
  name: 'felipe',
  email: 'felipe@gmail.com',
  password: 'password_hash',
}

describe('CreateUserRepository', () => {
  it('should create user', async () => {
    const sut = new CreateUserRepository()

    const createdUser = await sut.execute(user)

    console.log(createdUser)

    expect(createdUser.name).toBe(user.name)
    expect(createdUser.email).toBe(user.email)
    expect(createdUser.password).toBe(user.password)
  })
})
