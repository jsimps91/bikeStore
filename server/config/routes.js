var users = require('../controllers/users.js');
var path = require('path');

module.exports = function (app) {
    app.get('/api/show', function (req, res) {
        users.show(req, res);
    });
    app.post('/api/create', function (req, res) {
        console.log("ABOUT TO CREATE USER", req.body)
        users.register(req, res);
    });
    app.delete('/api/delete/:id', function(req, res){
        users.delete(req, res)
    });

    app.post('/api/update/:id', function(req, res){
        console.log(req.body)
        players.update(req, res)
    });

    app.all('*', function(req, res){
        res.sendFile(path.resolve('./public/dist/index.html'));
    });

};