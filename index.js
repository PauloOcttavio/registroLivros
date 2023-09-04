require("dotenv").config();
const express = require("express");
const app = express();


await User.sync();
console.log("table criada com sucesso");
console.log(process.env.DB_USERNAME)