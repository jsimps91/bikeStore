var mongoose = require('mongoose');

var User = mongoose.model('User');

var session = require('express-session')

module.exports = {
    // registration: function (req, res) {
    //     res.render('registration', { 'errors': req.session.errors })
    // },
    // loginPage: function (req, res) {
    //     res.render('login', { 'errors': req.session.errors })
    // },
    register: function (req, res) {

        var user = new User({ email: req.body.email, firstName: req.body.firstName, lastName: req.body.lastName, password: req.body.password, })

        user.save(function (err, user) {
            if (err) {
                if (req.body.password !== req.body.passwordConfirmation) {
                    console.log("Passwords must match!")
                    res.json({ err: err, message: "Error" });
                }

                else {

                    res.json({ err: err, message: "Error" });
                }
            }
            else {
                req.session.user = user;
                localStorage.setItem("user", user);
                console.log(req.session.user)
  
                res.json({ user: user, message: "Success" })
            }

        })
    },
    loginAction: function(req, res){
       User.findOne({email: req.body.email}, function(err, user){
        if(user === null){
            console.log("email not found")
            res.json({ err: err, message: "Error" });
       }     
       else if(user.password !== req.body.password){
            console.log ("Incorrect password!")
            res.json({ err: err, message: "Error" });
       }
        else {
            req.session.user = user
            res.json(user)
        }

       })
 

    },

    show: function(req, res){
        user = req.session.user
        if(user === null){

        }
    }
    // success: function (req, res) {
    //     res.render('success')
    // },
    // logout: function (req, res) {
    //     req.session.destroy();
    //     res.redirect('/')
    // }
}