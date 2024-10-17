import { describe, expect, it, vitest } from 'vitest'
import { createUserWithoutGoogleId, user } from '../../tests/fixtures/user'
import { CreateUserUseCase } from './create-user'

import { EmailAlreadyInUseError } from '../../errors/EmailAlreadyInUseError'
import { User } from '../../models/user'

describe('CreateUserUseCase', () => {
  class CreateUserRepositoryStub {
    async execute(): Promise<User> {
      return createUserWithoutGoogleId
    }
  }

  class GetUserByEmailStub {
    async execute(): Promise<User | null> {
      return null
    }
  }

  const makeSut = () => {
    const getUserByEmailRepository = new GetUserByEmailStub()
    const createUserRepository = new CreateUserRepositoryStub()

    const sut = new CreateUserUseCase(
      getUserByEmailRepository,
      createUserRepository,
    )

    return { sut, getUserByEmailRepository, createUserRepository }
  }

  it('should successfully create a user', async () => {
    const { sut } = makeSut()

    const result = await sut.execute(createUserWithoutGoogleId)

    expect(result).toEqual(createUserWithoutGoogleId)
  })

  it('should throw  an EmailAlreadyInUseError if GetUserByEmailRepository returns a user', async () => {
    const { sut, getUserByEmailRepository } = makeSut()
    vitest
      .spyOn(getUserByEmailRepository, 'execute')
      .mockResolvedValueOnce(createUserWithoutGoogleId)

    const result = sut.execute(user)

    expect(result).rejects.toThrow(new EmailAlreadyInUseError(user.email))
  })
})
