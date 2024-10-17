import { describe, expect, it } from 'vitest'
import { createUserWithoutGoogleId } from '../../tests/fixtures/user'
import { CreateUserUseCase } from './create-user'

describe('CreateUserUseCase', () => {
  class CreateUserRepositoryStub {
    async execute() {
      return createUserWithoutGoogleId
    }
  }

  class GetUserByEmailStub {
    async execute() {
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
})
