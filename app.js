const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.get('/', (req, res) => {
    res.send("server is running");
});

let port = 8080;
app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});