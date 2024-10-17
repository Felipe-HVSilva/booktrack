import { faker } from '@faker-js/faker'

export const user = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password({
    length: 7,
  }),
}

export const userWithGoogleId = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password({
    length: 7,
  }),
  googleId: faker.string.uuid(),
}

export const createUserWithoutGoogleId = {
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  email: faker.internet.email(),
  googleId: undefined,
  password: faker.internet.password({
    length: 7,
  }),
  created_at: new Date(),
}
