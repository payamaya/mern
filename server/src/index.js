// a framework to create our API to serve our frontend
import express from 'express'
// library allows us to set up the rules between the communication between frontend and backend simultaneously to avoid error when makin api request from your react application to your own server
import cors from 'cors'
// mongoose is an arm for mongodb that will allow us to write community like queries and communications to our database
import mongoose from 'mongoose'

import { userRouter } from '../Routes/users.js'

import dotenv from 'dotenv'
dotenv.config()


const app = express()
// middleware and converted into json that we get from the frontend
app.use(express.json())
// to solve issues when trying to make api request from the frontend
app.use(
  cors()
  //   {
  //   origin: [PORT],
  //   methods: ['GET', 'POST'],
  //   credentials: true,
  // }
)
app.post('/checkou', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        // price: '{{PRICE_ID}}',
        price: 50000,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  })

  res.redirect(303, session.url)
})

// end points that are related to authentication
app.use('/auth', userRouter)
// MONGOOSE SETUP

const PORT = process.env.PORT || 6001

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVRER PORT: ${PORT}`)
    })
  })
  .catch((error) => console.log(`${error} did not connect`))

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''
// app.use(cookieParser())
// app.use(express.json())
// app.use('/', authRoutes)
