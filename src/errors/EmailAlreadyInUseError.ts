export class EmailAlreadyInUseError extends Error {
  constructor(message: string) {
    super(`This email ${message} already exists`)
    this.name = 'EmailAlreadyInUseError'
  }
}
