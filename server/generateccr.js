const express = require("express");
const ccr = new express.Router();
const path = require("path")
const bodyParser = require('body-parser');
const { json } = require("express");
//for data from body

ccr.use(bodyParser.urlencoded({ extended: false }));

ccr.post('/ccr', (req, res) => {
    let data = req.body;
    console.log(JSON.stringify(data));
    res.redirect('userroute/dahsboard');
});

module.exports = ccr;