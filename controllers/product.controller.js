const Product = require('../models/product.model');

let test = (req, res) => {
    res.send('greetings from test controller');
}

let product_create = (req, res) => {
    let product = new Product({
            name: req.body.name,
            price: req.body.price
        });
    product.save().then((doc) => {
        res.send('Product created succesfully');
    }).catch((err) => {
        res.status(404).send(err);
    });
}

module.exports = {
    test,
    product_create
}