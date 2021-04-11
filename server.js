  
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes');
const path = require("path");
const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));




mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/learning',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(routes);


app.listen(PORT, () => {
  console.log(`Now Listening on Port ${PORT}!`);
});