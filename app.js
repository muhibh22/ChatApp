const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

//database Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Was Successful");
  })
  .catch((err) => console.log(err));

//request parsers

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
