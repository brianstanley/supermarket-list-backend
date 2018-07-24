var mongoose = require("mongoose")


let ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

var Product = mongoose.model('Product', ProductSchema)

module.exports = {
    Product
}
