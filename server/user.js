const express = require("express");
const path = require("path")
const user = new express.Router();
const bodyParser = require('body-parser');
const { json } = require("express");
//for data from body

user.use(bodyParser.urlencoded({ extended: false }));

user.get('/', (req, res) => {
    res.redirect('/userroute/login');
})

user.get('/userroute/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../views/loginpage.html"));
    console.log("Homepage")

});

user.post('/userroute/loginuser', (req, res) => {
    let userName = req.body.username;
    let password = req.body.loginpassword;
    console.log(userName, password);
    if (userName == 'rohanjanrao' && password == "123") {
        res.redirect('userroute/dashboard');
    }
    else {
        res.send('LoginFailed');
    }
    res.end();
});

user.post('/userroute/ccr', (req, res) => {
    console.log('Hello')
})

user.get('/userroute/dashboard', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../views/dashboard.html'));
});








module.exports = user;