var mongoose = require('mongoose');

var Bike = mongoose.model('Bike');

module.exports = {
    create: function (req, res) {
        console.log("BIKE MADE IT TO SERVER:", req.body);
        var bike = new Bike({ title: req.body.title, description: req.body.description, price: req.body.price, location: req.body.location,})

        bike.save(function (err, bike) {
            if (err) {
                res.json({ err: err, message: "Error" });
            } else {
                console.log("BIKE SAVED:", bike);
                res.json({ bike: bike, message: "Success" })
            }
        });
    },

    show: function (req, res) {
        Bike.find({}, function (err, bikes) {
            if (err) {
                console.log(err);
                res.json([])
            }
            else {
                res.json(bikes);
            }
        });
    },    
    



    delete: function (req, res) {
        Bike.findOne({ _id: req.params.id }).remove(function (err, removed) {
            if (err) {
                console.log(err);
                res.json([])
            }
            else {
                console.log("BIKE REMOVED", removed);
                res.json(removed)
            }
        })
    },

    update: function (req, res) {
        Bike.findOne({ _id: req.params.id }, function (err, found) {
            if (err) {
                console.log(err);
                res.json([])
            }
            else {
                console.log("BIKE FOUND" + found.title , req.body)
                found.title = req.body.title;
                found.description = req.body.description;
                found.price = req.body.price;
                found.location = req.body.location;
                found.save(function (err) {
                    if (err) {
                        res.json(err)
                    }
                    else {
                        Bike.find({}, function (err, bikes) {
                            if (err) {
                                console.log(err);
                                res.json([])
                            }
                            else {
                                res.json(bikes);
                            }
                        });
                    }
                })
            }
        })
    },


};