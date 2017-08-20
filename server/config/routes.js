var users = require('../controllers/users.js');
var bikes = require('../controllers/bikes.js');
var path = require('path');

module.exports = function (app) {
    app.get('/api/show', function (req, res) {
        console.log("GOIING INTO USERS CONTROLLER")
        users.show(req, res);
    });
    app.post('/api/create', function (req, res) {
        console.log("ABOUT TO CREATE USER", req.body)
        users.register(req, res);
    });

    app.post('/api/login', function(req, res){
        console.log("LOGIN REQUEST GOING INTO THE CONTROLLER", req.body)
        users.login(req, res)
    })


    app.post('/api/create/bike', function(req, res){
        console.log("NEW BIKE REQUEST GOING INTO THE CONTROLLER", req.body)
        bikes.create(req, res)
    })

    app.get('/api/show/bikes', function(req, res){
        console.log("GET BIKES REQUEST GOING INTO THE CONTROLLER")
        bikes.showAll(req, res)
    })

    app.delete('/api/delete/bikes/:id', function(req, res){
        bikes.delete(req, res)
    })
    // app.delete('/api/delete/:id', function(req, res){
    //     users.delete(req, res)
    // });
  

    app.post('/api/update/bikes/:id', function(req, res){
        console.log(req.body)
        bikes.update(req, res)
    });

    app.get('/api/show/user/bikes', function(req, res){
        bikes.showUserBikes(req, res)
    })

    app.get('/api/logout', function(req, res){
        console.log("LOGOUT GOING INTO CONTOLLER")
        users.logout(req, res)
    })

    app.all('*', function(req, res){
        res.sendFile(path.resolve('./public/dist/index.html'));
    });

};