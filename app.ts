
require("./model/db")
const express = require("express");
const app = express();
const Routes = require("./routes")
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

Routes.getAllProductRoutes(app);

app.listen(PORT);
