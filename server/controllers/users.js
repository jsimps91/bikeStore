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
                    res.json({ err: err, loggedIn: false });
                }

                else {

                    res.json({ message: "The email you entered is already in use", err: err, loggedIn: false });
                }
            }
            else {
                req.session.user = user;
                console.log(req.session.user)

                res.json({ user: user, loggedIn: true })
            }

        })
    },
    login: function (req, res) {
        User.findOne({ email: req.body.loginEmail}, function (err, user) {
            console.log("THESE ARE THE LOGIN PARAMS", req.body.loginEmail, req.body.loginPassword)
            console.log("THE USER IS", user)

            if (user === null) {
                console.log("email not found")
                res.json({ err: err, message: "Email not found!", loggedIn: false });
            }


            else if (user.password !== req.body.loginPassword) {
                console.log("Incorrect password!")
                res.json({ err: err, message: "Incorrect Password!", loggedIn: false });

            }
            else {

                console.log(res.loggedIn)
                req.session.user = user
                console.log("USER LOGGED IN")
                console.log(req.session.user)
                res.json({ user: user, loggedIn: true })
            }

        })


    },

    show: function (req, res) {
        console.log(req.session.user)
        sessionID = req.session.user._id
        User.findOne({ _id: sessionID }, function (err, user) {
            if (err) {
                console.log("Current user not found")
                res.json({ err: err, loggedIn: false })
            }
            else {
                console.log("Current user is", user.firstName)
                res.json({ currentUser: user, loggedIn: true })
            }

        })


    },

    logout: function (req, res) {
        req.session.destroy
        console.log(req.session.user)
        res.json({ loggedIn: false })
    }
}
    // success: function (req, res) {
    //     res.render('success')
    // },

