//Payment controller
Payments = require('./PaymentModel');
TCPServicePayloadResponse = require('./PaymentModel');

// Handle index actions
exports.index = function (req, res) {
    Payments.get(function (err, payment) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Locker data retrieved successfully",
            data: payment
        });
    });
};

// Handle view locker info
exports.view = function (req, res) {
    Payments.findById(req.params.payment_id, function (err, payment) {
        if (err)
            res.send(err);
        res.json({
            message: 'Locker details loading..',
            data: payment
        });
    });
};

exports.command = function (req, res){
    var key = req.query;
    console.log(key);
    console.log("body is ", req.body);
    if (err)
        res.send(err);
    res.json({
        message: 'Locker details loading..',
        data: payment
    });
}

// Handle create contact actions
exports.new = function (req, res) {
    var payments = new Payments();
    payments.name = req.body.name ? req.body.name : contact.name;
    // payments.gender = req.body.gender;
    // payments.email = req.body.email;
    // payments.phone = req.body.phone;// save the payments and check for errors
    payments.save(function (err) {
        res.json({
            message: 'New payments created!',
            data: payments
        }); 
    });   
};

var SaleRequest = {
    "ActionCode": { },
    "ReferenceNo": { },
    "DeveloperID": {},
    "Amount": {},
    "Description": {},
    "PaymentType": {},
    "ProductType": {},
    "CouponCode": {},
    "NetworkSelection": {},
  }

var SalesResponse = {
    "ActionCode": {},
    "ResponseCode": {},
    "TransactionID": {},
    "ApprovalCode": {},
    "CardType": {},
    "ApplicationLabel": {},
    "CardNo": {},
    "CardHolderName": {},
    "TraceNo": {},
    "TC": {},
    "AID": {},
    "CVM_Type": {},
    "TransactionDate": {},
    "TransactionTime": {},
    "TID": {},
    "MID": {},
    "BatchNo": {},
    "InvoiceNo": {},
    "RREF_No": {},
    "TSI": {},
    "TVR": {},
    "EntType": {},
    "AmountAuthorised": {},
    "PrivateField": {},
    "EntryType": {}
}

var VoidRequest = {
    "ActionCode": {}, 
    "ReferenceNo": {},
    "DeveloperID": {}, 
    "TransactionID": {}, 
    "VoidType": {}, 
    "NetworkSelection": {}
}


var VoidResponse = {
    "ActionCode": {},
    "ResponseCode": {},
    "ReferenceNo": {}
}
var CancelResquest = {
    "ActionCode": {}
}


var CancelResponse = {
    "ActionCode": {}, 
    "ResponseCode": {}
}


var QRPaymentRequest = {
    "ActionCode": { },
    "ReferenceNo": { },
    "DeveloperID": {},
    "Amount": {},
    "Description": {},
    "QRType": {},
    "PrivateField": {},
    "NetworkSelection": {},
  }

var QRPaymentResponse = {
    "ActionCode": { },
    "ResponseCode": { },
    "ReferenceNo": {},
    "PrivateField": {},
}

var InquiryQRPaymentRequest = {
    "ActionCode": { },
    "ReferenceNo": { },
    "DeveloperID": {},
    "TransactionID": {},
    "QRType": {},
    "PrivateField": {},
    "NetworkSelection": {},
}

var InquiryQRPaymentResponse = {
    "ActionCode": { },
    "ResponseCode": { },
    "ReferenceNo": {},
    "PrivateField": {},
    "TransactionID": {},
    "QRType": {},    
    "AmountAuthorised": {},
}

var TerminalStatusRequest = {
    "ActionCode": { }
}
var TerminalStatusResponse = {
    "ActionCode": { },
    "ResponseCode": {}
}
var SettlementInfoRequest = {
    "ActionCode": { },
    "DeveloperID": {},
    "NetworkSelection": {}
}
var SettlementInfoResponse = {
    "ActionCode": { },
    "ResponseCode": {},
    "TotalTransactionAmount": {},
    "TotalTransactionCount": {}
}

var SettlementRequest = {
    "ActionCode": { },
    "DeveloperID": {},
    "NetworkSelection": {}
}
var SettlementResponse = {
    "ActionCode": { },
    "ResponseCode": {},
}

var SuperksCouponValidationRequest = {
    "ActionCode": { },
    "DeveloperID": {},
    "Amount": {},
    "CouponCode": {},
    "NetworkSelection": {}
}
var SuperksCouponValidationResponse = {
    "ActionCode": { },
    "ResponseCode": {},
    "CouponCode": {},
    "FinalAmount": {},
    "DiscountAmount": {},
    "CouponType": {},
    "CouponValue": {}
}

var TCPServicePayloadResponse = {
    "ActionCode":{},
    "Address":{},
    "Port": {},
    "Payload": {},
    "Timeout": {},
    "RequestType": {}
}

var TCPServicePayloadRequest = {
    "ActionCode": {},
    "Payload":{},
    "NetworkSelection": {}
}