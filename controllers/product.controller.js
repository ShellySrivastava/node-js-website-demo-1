const Product = require('../models/product.model');

let test = (req, res) => {
    res.send('greetings from test controller');
}

let product_create = (req, res) => {
    let product = new Product({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    });
    product.save().then((doc) => {
        res.send('Product created succesfully');
    }).catch((err) => {
        res.status(404).send(err);
    });
}

let product_details = (req, res) => {
    Product.findOne({id: req.body.id}).then((product) => {
        res.send(product);
    }).catch((err) => {
        res.send('Unable to fetch the product');
    })
}

let product_update = (req, res) => {
    Product.findOneAndUpdate({id: req.body.id}, {
        $set: {
            name: req.body.name,
            price: req.body.price
        },
        $inc: {
            __v: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        res.send('Product Updated successfully');
    }).catch((err) => {
        res.send('Unable to update the product');
    });
}

module.exports = {
    test,
    product_create,
    product_details, 
    product_update
}