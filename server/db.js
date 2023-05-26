const { MongoClient } = require('mongodb')

let dbConnection
// mongodb://localhost:27017/
let URI =
  'mongodb+srv://product:RnEDe19xl8gd3Pfk@product.jawfz2n.mongodb.net/product?retryWrites=true&w=majority'
module.exports = {
  // cb standsfor callback
  connectToDb: (cb) => {
    MongoClient.connect(URI)
      .then((client) => {
        dbConnection = client.db()
        return cb()
      })
      .catch((err) => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection,
}
