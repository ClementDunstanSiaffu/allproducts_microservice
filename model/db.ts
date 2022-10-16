
const mongoose = require("mongoose");
console.log(process.env.mongoURI,"from db");
mongoose.connect(process.env.mongoURI)
.then()
.catch(err=>console.log(err,"cheking error type"))

require("./schema")
