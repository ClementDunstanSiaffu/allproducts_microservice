
const mongoose = require("mongoose");
mongoose.connect(process.env.mongoURI)
.then()
.catch(err=>false)

require("./schema")
