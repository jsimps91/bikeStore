var mongoose = require('mongoose');

var User = mongoose.model('User')

var Bike = mongoose.model('Bike');

module.exports =
    {
        create: function (req, res) {
            console.log("BIKE MADE IT TO SERVER:", req.body);
            User.findOne({ _id: req.session.user._id }, function (err, user) {
                var bike = new Bike({ title: req.body.title, description: req.body.description, price: req.body.price, location: req.body.location, })
                bike._user = user._id;
                user.bikes.push(bike);
                console.log(user.bikes)
                user.save(function (err) {
                    if (err) {
                        res.json({ message: "Could not save bike to user bike list" })
                    }
                    else {
                        bike.save(function (err, bike) {
                            if (err) {
                                res.json({ err: err, message: "Sorry, there was a problem saving the bike", newBike: false });
                            } else {
                                console.log("BIKE SAVED:", bike);
                                res.json({ bike: bike, message: "Bike saved!", newBike: true })
                            }
                        })

                    }
                })

            })
        },

        showAll: function (req, res) {
            console.log("SHOW ALL BIKES MADE IT TO CONTROLLER")
            Bike.find({}, function (err, bikes) {
                if (err) {
                    res.json({ err: err })
                }
                else {
                    console.log("BIKES FOUND", bikes)
                    res.json({ bikes: bikes })
                }
            })
        },

        delete: function (req, res) {
            console.log("BIKE TO DELETE MADE IT TO CONTROLLER")
            Bike.findOne({ _id: req.params.id }).remove(function (err, removed) {
                if (err) {
                    console.log(err);
                    res.json([])
                }
                else {
                    console.log("BIKE REMOVED", removed)
                    res.json(removed)
                }
            })
        },

        update: function (req, res) {
            console.log("BIKE UPDATE MADE IT TO CONTROLLER", req.body, req.params.id)
            Bike.findById(req.params.id, function(err, bike){
                if (err) {
                    res.json({error: "could not find bike with id"})
                }
                else{
                    bike._user = bike._user; 
                    bike.title = req.body.title;
                    bike.description = req.body.description;
                    bike.price = req.body.price;
                    bike.location = req.body.location

                    bike.save(function(err, updatedBike){
                        console.log(updatedBike);   
                        if(err){
                            res.json({err: "bike could not be saved"})
                        }
                        else{
                            console.log("BIKE SAVED", updatedBike)
                            res.json(updatedBike)
                        }
                    })
                }
            })

        },

        showUserBikes: function (req, res) {
            console.log("SHOW USER BIKES MADE IT TO CONTROLLER")
            User.findOne({ _id: req.session.user._id })
                .populate('bikes')

                .exec(function (err, user) {
                    if (err) {
                        console.log(err);
                        res.json([])
                    }
                    else {
                        console.log("USER FOUND", user, "BIKES:", user.bikes)
                        res.json(user)
                    }
                })
        }


    }
