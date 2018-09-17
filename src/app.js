const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');


const app = express();

app.use(express.static('public'));

app.listen(config.server.port, () => {
    console.log(`app started at port ${config.server.port}`);
});