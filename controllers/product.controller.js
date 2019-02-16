const Product = require('../models/product.model');

let test = (req, res) => {
    res.send('greetings from test controller');
}

module.exports = {
    test
}