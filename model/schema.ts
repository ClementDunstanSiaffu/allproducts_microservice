
import mongoose from "mongoose";

const allProductsSchema = new mongoose.Schema({
    id:{type:String},
    productImage:{type:String},
    productName:{type:String},
    productDescription:{type:String},
    productPrice:{type:Number},
    available:{type:String},
    categoryId:{type:String}
})

mongoose.model("ALL_PRODUCT_SCHEMA",allProductsSchema);