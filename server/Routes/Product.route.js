// app.get('/books', (req, res) => {
//   // username can be shorten to {(username})
//   // can use dot then notation otherweise { username: username }
//   Products.find((err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send(data)
//     }
//   })

// })
// // get product

// app.listen(5174, () => {
//   console.log('app listening on port 5174')
// })
// app.get('/books', (req, res) => {
//   res.json({ message: 'wlc to the api' })
// })
const express = require('express')
const router = express.Router()

const Product = require('../models/Product.model')
router.get('/', async (req, res, next) => {
  try {
    const results = await Product.find()
    res.send(results)
  } catch (error) {
    console.log(error.message)
  }
})
