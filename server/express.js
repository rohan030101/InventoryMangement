const express = require("express");
const url = require("url");
const path = require("path")
const app = express();
const port = 8090;
const userRouter = require('./user');
const ccrgenerate = require('./generateccr');

// const pth = path.join(__dirname, '../public');   
// console.log(pth)
app.use(userRouter);
app.use(ccrgenerate)
const bodyParser = require('body-parser');
const { json } = require("express");
//for data from body

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../views')));
// console.log(pth);

// serve your css as static




app.listen(port, () => console.log(`This app is listening on port http://localhost:${port}`));


