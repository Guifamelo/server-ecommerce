const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: String,
        required: true
    },
    productImage: {
        type: String
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requided: true
    }
})

module.exports = mongoose.model('Product', Schema)