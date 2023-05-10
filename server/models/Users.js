// Users collection also known as tables we're gonna have inside of the database
// we tel mongodb how our collection will look like
import mongoose from 'mongoose'

// Schema is an object to define the structure of our data
const UserSchema = new mongoose.Schema({
  // this is the definition of our schema
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})
// mongoose.model is going to be generated based on the schema
// we are setting our schema to be a collection and we give it a name that is gonna be called inside our database (collection name: users)
export const UserModel = mongoose.model('users', UserSchema)
