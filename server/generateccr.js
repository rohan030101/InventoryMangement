const express = require("express");
const path = require("path")
const ccr = new express.Router();
const bodyParser = require('body-parser');
const { json } = require("express");
//for data from body

ccr.use(bodyParser.urlencoded({ extended: false }));

ccr.post('/generatecrr', (req, res) => {
    let data = req.body;
    console.log(JSON.stringify(data));

});

module.exports = crr;