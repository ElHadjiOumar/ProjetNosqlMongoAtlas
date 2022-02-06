// import mongoose
const mongoose = require('mongoose');
//Extraction du schema à parir de l'objet mongoose
const Schema = mongoose.Schema;
//Creation d'un nouveau schema supermarche
const supermarcheSchema = new Schema({
  _id:mongoose.Schema.Types.ObjectId,
  Invoice_ID: {
        type:String,
        required:true
    },
    Branch: {
        type:Number,
        required:true
    },
    City:{
        type:Number,
        required:true
    },
    Customer_type:{
        type:Number,
        required:true
    },
    Gender:{
        type:Number,
        required:true
    },
    Product_line:{
        type:Number,
        required:true
    },
    Unit_price:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Tax: {
        type:Number,
        required:true
    },
    Total: {
        type:Number,
        required:true
    },
    Date: {
        type:Number,
        required:true
    },
    Time: {
        type:Number,
        required:true
    },
    Payment: {
        type:Number,
        required:true
    },
    cogs: {
        type:Number,
        required:true
    },
    gross_margin_p: {
        type:Number,
        required:true
    },
    gross_income: {
        type:Number,
        required:true
    },
    Rating: {
        type:Number,
        required:true
    }
});
// export the model
module.exports = mongoose.model('Supermarche', supermarcheSchema);