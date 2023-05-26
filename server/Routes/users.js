// import express from 'express'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
// import { UserModel } from '../models/Users.js'

const express = require('express')
const mongoose= require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const UserSchema = require('../models/Users')
const router = express.Router()

// we sen information to the frontend
router.post('/register', async (req, res) => {
  const { username, password } = req.body
  // username can be shorten to {(username})
  // can use dot then notation otherweise { username: username }
  const user = await UserSchema.findOne({ username })
  if (user) {
    return res.json({ data: 'User already exists!', user })
  }
  // Generat a salt
  // we hash password
  const hashedPassword = await bcrypt.hash(password, 10)
  // add data to database
  const newUser = new UserSchema({ username, password: hashedPassword })
  // make chages by adding newUser
  await newUser.save()
  // if successful return a message
  res.json({ message: 'User Registered Successfully' })
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  // can use dot then notation otherweise { username: username }
  const user = await UserSchema.findOne({ username })
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
router.post('/checkout', async (req, res) => {
  // req.boy.items

  const items = req.body.items
  let lineItems = []
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    })
  })

  // CREATE A SESSION TO SEND THE URL BACK TO THE FRONFTEND
  const session = await stripe.checkout.session.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:5174/succes',
    cancel_url: 'http://localhost:5173/products',
  })

  res.send(
    JSON.stringify({
      url: session.url,
    })
  )
})

// Ite can be any port 8081 for signup/login
// app.listen(8081, () => console.log('Listening on port 8081!'))
// // Ite can be any port 3500 for stripe
// app.listen(4000, () => console.log('Listening on port 4000!'))
// we change router name since we will have many router

// export { router as userRouter }
module.exports= router
// module.exports = mongoose.model('users', UserSchema)
