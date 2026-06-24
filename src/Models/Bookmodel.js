
const Mongoose = require("mongoose")
const BookScima = new Mongoose.Schema({
   title:String,
   author: String,
   Conuntry : String,
   name  : String ,
   Country : String,
   Wilaya : String,
  

})


const Model = Mongoose.model('HoussinBook' ,BookScima)
module.exports =  Model;