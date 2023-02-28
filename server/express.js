const express = require("express");
const url = require("url");
const path = require("path")
const app = express();
const database = require('./database.js');
const port = 8090;
// const pth = path.join(__dirname, '../public');
// console.log(pth)
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../views')));
// console.log(pth);

const bodyParser = require('body-parser');
const { json } = require("express");
//for data from body

app.use(bodyParser.urlencoded({ extended: false }));
// serve your css as static

//this will be our homepage.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/loginpage.html"));
    // console.log("done");

});


app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/dashboard.html"));

});


app.post('/generateccr', (req, res) => {
    const data = req.body;
    output = JSON.stringify(data);
    console.log(output);
    res.redirect('/dashboard');

});



app.listen(port, () => console.log(`This app is listening on port http://localhost:${port}`));


