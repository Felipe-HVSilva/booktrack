import { User } from '../../../models/user'

export interface IGetUserByEmailRepository {
  execute(userEmail: string): Promise<User | null>
}
