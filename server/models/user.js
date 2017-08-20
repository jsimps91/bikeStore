var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email required"],
        unique: true,
        validate: {
            validator: function(e){
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test (e);
            },
            message: "Please enter a valid email!"
        }
    },
    firstName: {
        type: String,
        required: [true, "First name required"],
        minlength: [2, "First name must be at least 2 characters"]
    },
    lastName: {
        type: String, 
        required: [true, "Last name required"],
        minlength: [2, "Last name must be at least 2 characters"]
    },
    password: {
        type: String,
        required: [true, "Password required"],
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength: [12, "Password must be less than 13 characters long"]
    },
      bikes : [{ type: Schema.Types.ObjectId, ref: 'Bike' }]
});


UserSchema.plugin(uniqueValidator, { message: 'The email you entered is already in use' });

var User = mongoose.model('User', UserSchema)