import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/Users.js'

const router = express.Router()

// we sen information to the frontend
router.post('/register', async (req, res) => {
  const { username, password } = req.body
  // username can be shorten to {(username})
  // can use dot then notation otherweise { username: username }
  const user = await UserModel.findOne({ username })
  if (user) {
    return res.json({ data: 'User already exists!', user })
  }
  // we hash password
  const hashedPassword = await bcrypt.hash(password, 10)
  // add data to database
  const newUser = new UserModel({ username, password: hashedPassword })
  // make chages by adding newUser
  await newUser.save()
  // if successful return a message
  res.json({ message: 'User Registered Successfully' })
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  // can use dot then notation otherweise { username: username }
  const user = await UserModel.findOne({ username })
  if (!user) {
    return res.json({ message: 'User Doesnt Exist!' })
  }
  // when you hash something you can't unhashed that's why we use bcrypt
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return res.json({ message: 'Username Or Password Is Incorrect!' })
  }
  // if the passowrd is valid we start processing for loggin
  //  we create a token and sing in some data
  // the secret code is to verify if the user is really authenticated
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
  res.json({ token, userID: user._id })
})

// we change router name since we will have many router

export { router as userRouter }
