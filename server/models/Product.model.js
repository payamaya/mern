// const mongoose = require('mongoose')
// const ProductSchema = new mongoose.Schema({
//   title: String,
//   imageURL: String,
//   price: Number,
//   name: String,
// })
// // module.exports = mongoose.model('/products/items', ProductSchema)
// module.exports = mongoose.model('books', ProductSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  title: String,
  author: String,
  rating: Number,
  pages: Number,
  imageURL: String,
  price: Number,
})
// collection name products min = items /blogs or books
const Product = mongoose.model('blogs',ProductSchema)
module.exports = Product