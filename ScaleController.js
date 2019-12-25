//Scale controller
Scale = require('./ScaleModel');

// Handle index actions
exports.index = function (req, res) {
    // Scale.get(function (err, scale) {
    //     if (err) {
    //         res.json({
    //             status: "error",
    //             message: err,
    //         });
    //     }
    //     res.json({
    //         status: "success",
    //         message: "Scale data retrieved successfully",
    //         data: scale
    //     });
    // });
    try{
        var ApiParameters = req.params,
            ApiBody = req.body,
            ApiQuery = req.query;  
        console.log(ApiParameters);
        if (ApiParameters.action_code == "GetAll"){
            console.log("Initiate GetAll");
            Scale.get(function (err, scale) {
                if (err) {
                    res.json({
                        status: "error",
                        message: err,
                    });
                }
                res.json({
                    status: "success",
                    message: "Scale data retrieved successfully",
                    data: scale
                });
            });
        } else {
            res.status(400).json({
                status: "Fail to find correct code",
                message: "Incorrect action code"
            });
        }
        console.log(req.body)
        console.log("query: ",req.query);
    } catch(err){
        next(err);
    } 
};

// Handle view scale info
exports.view = function (req, res) {
    Scale.findById(req.params.scale_id, function (err, scale) {
        if (err)
            res.send(err);
        res.json({
            message: 'Scale details loading..',
            data: scale
        });
    });    
};

var scaleStatus = {
     weight: 0.001,
     statusReturn: "",
     status: {
         zero: "zero",
         stable: "stable",
         weighting: "weighting"
     }
 }

/**
 * Serial Port Function
 * depending on port : /dev/ttyUSB1
 */
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/ttyUSB1');

const parser = port.pipe(new Readline({ delimiter: '\r' }))
parser.on('data', function (data) {
    // console.log('data received: ' + data)
    var pattern = /([0-9]+\.+[0-9]{2})/g
    var pattern2 = /([A-F]{1})/g
    scaleStatus.weight = data.match(pattern);
    scaleStatus.statusReturn = data.match(pattern2);
    //43"C"=zero,41"A" or 40"@"=scaling,42"B"=stable
    if (status == 'B'){
        console.log(weight)
    }
})
