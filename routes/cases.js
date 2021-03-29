var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Covid = require('../models/Covid');
var Statistics = require('../models/Statistics');

server.listen(4000)

// socket io
io.on('connection', function (socket) {
    socket.on('updatedata', function (data) {
        io.emit('update-data', { data: data });
    });
});

// list data
router.get('/', function(req, res) {
    Covid.find(function (err, cases) {
        if (err) return next(err);
        res.json(cases);
    });
});

// covid cases report
router.get('/daily/Positive', function(req, res, next) {
    Covid.countDocuments({status: 'Positive'}, function (err, cases) {
        if (err) {
            console.log(err);
            return next(err);
        }
        // Statistics.create(cases, function (err, c) {
        //     if (err) {
        //         return next(err);
        //     }
            res.json([{"_id":'abc',"count":cases}]);
        // });
        
    });
});

router.get('/daily/Recovered', function(req, res, next) {
    Covid.countDocuments({status: 'Recovered'}, function (err, cases) {
        if (err) {
            console.log(err);
            return next(err);
        }
        // Statistics.create(cases, function (err, c) {
        //     if (err) {
        //         return next(err);
        //     }
            res.json([{"_id":'abc',"count":cases}]);
        // });
        
    });
});

router.get('/daily/Dead', function(req, res, next) {
    Covid.countDocuments({status: 'Dead'}, function (err, cases) {
        if (err) {
            console.log(err);
            return next(err);
        }
        // Statistics.create(cases, function (err, c) {
        //     if (err) {
        //         return next(err);
        //     }
            res.json([{"_id":'abc',"count":cases}]);
        // });
        
    });
});

// get data by id
router.get('/:id', function(req, res, next) {
    Covid.findById(req.params.id, function (err, cases) {
        if (err) return next(err);
        res.json(cases);
    });
});

// post data
router.post('/', function(req, res, next) {
    Covid.create(req.body, function (err, cases) {
        console.log(req.body);
        if (err) {
            return next(err);
        }
        res.json(cases);
    });
});

// put data
router.put('/:id', function(req, res, next) {
    Covid.findByIdAndUpdate(req.params.id, req.body, function (err, cases) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(cases);
    });
});

// delete data by id
router.delete('/:id', function(req, res, next) {
    Covid.findByIdAndRemove(req.params.id, req.body, function (err, cases) {
        if (err) return next(err);
        res.json(cases);
    });
});

module.exports = router;
