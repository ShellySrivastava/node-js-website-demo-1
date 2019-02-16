const Product = require('../models/product.model');

let test = (req, res) => {
    res.send('greetings from test controller');
}

let product_create = (req, res) => {
    let product = new Product({
        _id: req.body.id,
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
    Product.findOne({_id: req.params.id}).then((product) => {
        res.send(product);
    }).catch((err) => {
        res.send('Unable to fetch the product');
    })
}

let product_update = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, {
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

let product_delete = (req, res) => {
    Product.findOneAndRemove({_id: req.params.id}).then((result) => {
        res.send('Product deleted successfully');
    }).catch((err) => {
        res.send('Unable to delete the product');
    });
}

module.exports = {
    test,
    product_create,
    product_details, 
    product_update,
    product_delete
}