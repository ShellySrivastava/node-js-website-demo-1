const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const product = require('./routes/product.route');

let app = express();

app.get('/', (req, res) => {
    res.send("server is running");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 8080;
app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});