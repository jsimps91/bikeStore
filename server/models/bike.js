var mongoose = require('mongoose');


var BikeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title required"],
    },
    description: {
        type: String, 
        required: [true, "Description required"],
        maxlength: [200, "Description must be less than 200 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price required"],
        min: [1, "Price must be at least 1 dollar"],
        
      },
    location: {
        type: String,
        required: [true, "Location required"]
    }
})

var Bike = mongoose.model('Bike', BikeSchema)