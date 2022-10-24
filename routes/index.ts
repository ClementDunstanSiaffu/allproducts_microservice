
import mongoose from "mongoose";
import { AppType } from "../types";
import helper from "../helper/helper";
import { Request,Response } from "express";


const AllProductsDbInstance = mongoose.model("ALL_PRODUCT_SCHEMA");

class Routes{

    getAllProductRoutes(app:AppType){
        
        app.post("/postAllProducts",(req:Request,res:Response)=>{
            const date = Date.now()
            const allProductsDbInstance = new AllProductsDbInstance({id:date,...req.body.where});
            allProductsDbInstance.save((err,docs)=>{
                if(!err){
                    res.status(200).json({"status":true});
                }else{
                    res.status(400).json({"status":false});
                }
            })
        })
        
        app.post("/getAllProducts",(req:Request,res:Response)=>{
            AllProductsDbInstance.find((err,docs)=>{
                if(!err){
                    res.status(200).json(docs);
                }else{
                    res.status(400).json({"status":false});
                }
            })
        })

        app.post("/searchProduct",async(req:Request,res:Response)=>{
            const {searchedKey} = req.body.where;
            AllProductsDbInstance.find((err,docs)=>{
                if (!err){
                    let searchedContents = helper.getSearchedItems(searchedKey??" ",docs);
                    res.status(200).json(searchedContents);
                }else{
                    res.status(200).json({"status":false});
                }
            })
            
            
        })
    }
}

module.exports = new Routes();