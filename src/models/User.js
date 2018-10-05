import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String
})

UserSchema.sayHi = () => {
  console.log(`Hi, I'm ${name}.`)
}

const User = mongoose.model('User', UserSchema)

export default User