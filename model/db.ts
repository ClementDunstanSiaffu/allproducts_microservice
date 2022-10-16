
const mongoose = require("mongoose");
mongoose.connect(process.env.mongoURI)
.then()
.catch(err=>console.log(err,"cheking error type"))

require("./schema")
