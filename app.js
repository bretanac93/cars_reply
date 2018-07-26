require('dotenv').config();

const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    port = process.env.APP_PORT || 3000,
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    cors = require('cors'),
    nofavicon = require("express-no-favicons");

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, (err) => {
    (!err) ? 
        console.log("Successfully connected to the db"):
        console.log(`ERR: ${err.message}`);
});

app.use(nofavicon());
app.use(bodyParser.urlencoded({extended: true, limit: '100mb'}));
app.use(bodyParser.json({limit: '100mb'}));

app.use(morgan('combined'));
app.use(cors());

require('./src/routes')(app);

// 404
app.use((req, res) => {
    res.status(404).send({
        url: req.originalUrl + ' not found'
    })
});

app.listen(port, () => console.log(`Lengoo Website API server started on: ${port}`));