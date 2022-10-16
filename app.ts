
require('dotenv').config()
require("./model/db")
const express = require("express");
const app = express();
const Routes = require("./routes")
const PORT = process.env.PORT || process.env.DEV_PORT;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

console.log(process.env.mongoURI,"check mongo uri");
Routes.getAllProductRoutes(app);
app.listen(PORT);
