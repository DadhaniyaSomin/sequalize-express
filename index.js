const express = require('express')
var bodyParser = require('body-parser')
const app = express();
require('./models');

// const User = require("./models/user")
// const Contact = require("./models/contacts");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// User.sync({ force : true });
// Contact.sync({ force : true });
app.get('/', function(req, res) {
       res.send("Hello world")
})

app.listen(8080, () =>{
     console.log("Server is running on port 8080");
})