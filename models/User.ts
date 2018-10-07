export default class User {
  _id?: string
  name?: string

  constructor(user?: any) {
    this._id = user._id
    this.name = user.name
  }
}