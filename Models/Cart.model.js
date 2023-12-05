const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CartSchema = new Schema({    
    userId:{
        type:Number,  
    },
    products:{type:Array,default:[]}
},{ timestamps:true} )

module.exports = mongoose.model('Cart',CartSchema);