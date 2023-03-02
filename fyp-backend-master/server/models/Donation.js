const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt =require('bcrypt');
const DonationSchema=new mongoose.Schema({
    did:{
        type:String,
        required:true
    },
    donorName:{
        type:String,
        required:true
    },
    medname:{
        type:String,
        required:true, 
    },
    mg:{
        type:Number,
        required:true,
    } ,
    quantity:{
        type:Number,
        required:true
    } ,
    expiryDate:{
        type: String,
        required:true
    } ,   
    donationDate:{
        type: Date,
        required:true
    }         
});


//we will create a new collection
const Donation = new mongoose.model('Donation',DonationSchema);
module.exports = Donation;