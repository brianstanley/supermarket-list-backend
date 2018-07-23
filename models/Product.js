var mongoose = require("mongoose")


let ProductSchema = new mongoose.Schema({
    name: String
})

var Product = mongoose.model('Product', ProductSchema)

module.exports = {
    Product
}
