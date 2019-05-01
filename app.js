const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const {mongoose} = require('./db/mongoose');
const product = require('./routes/product.route');

let app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {title: "Demo Website", body: "Welcome to the party"})
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use(express.static(__dirname+ '/public'));

let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});