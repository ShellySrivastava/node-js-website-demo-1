const mongoose =  require('mongoose');

let Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        max: 100
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = {
    Product
}