
const mongoose = require("mongoose");
const uri = "mongodb+srv://Clement:Cle*1995@cluster0-my6sq.mongodb.net/All_products?retryWrites=true&w=majority"

mongoose.connect(uri);

require("./schema");