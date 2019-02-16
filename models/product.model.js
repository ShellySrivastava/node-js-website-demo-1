const mongoose =  require('mongoose');

// let Product = mongoose.model('Product', {
//     name: {
//         type: String,
//         required: true,
//         max: 100
//     },
//     price: {
//         type: Number,
//         required: true
//     }
// });

// module.exports = {
//     Product
// }

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

module.exports = mongoose.model('Product', ProductSchema);
