require("dotenv").config();
const express = require("express");
const app = express();


await User.sync();
console.log("table criada com sucesso");