var express = require('express');
var path = require('path');
const mongoose = require("mongoose");

mongoose
   .connect("mongodb+srv://Sebastien:Skywalker@cluster0.eydly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log('connection ok'))
   .catch((err) => console.log(err));

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client-build')));

app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, '../client-build/index.html'));
});

module.exports = app;
