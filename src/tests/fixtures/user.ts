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
