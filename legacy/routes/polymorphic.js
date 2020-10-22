var express = require('express');
var router = express.Router();
var utils = require('../util/utils')

var bodyPolymorphic = function(coverage) {
    coverage['GetAnalyzedPassport'] = 0;
    coverage['GetAnalyzedBusinessCard'] = 0;

    router.get('/form', function (req, res, next) {
        var analyzedForm = {
            "docType": "",
            'fields': {
                "merchantName": {
                    "propertyType": "string",
                    "value": "Contoso"
                },
                "price": {
                    "propertyType": "number",
                    "value": 12.3
                },
                "purchaseDate": {
                    "propertyType": "date",
                    "value": "2020-10-05"
                }
            }
        };
        res.status(200).json(analyzedForm);
    });

    router.get('/passport', function (req, res, next) {
        var analyzedPassport = {
            "docType": "passport",
            'fields': {
                "issuingCountry": {
                    "propertyType": "string",
                    "value": "USA"
                },
                "firstName": {
                    "propertyType": "string",
                    "value": "Contoso"
                },
                "passportNumber": {
                    "propertyType": "number",
                    "value": 12345678,
                    "precision": 1.0
                },
                "expirationDate": {
                    "propertyType": "date",
                    "value": "2030-10-10"
                }
            }
        };
        res.status(200).json(analyzedPassport);
    });

    router.get('/businessCard', function (req, res, next) {
        var analyzedBusinessCard = {
            "docType": "form:businesscard",
            'fields': {
                "companyName": {
                    "propertyType": "string",
                    "value": "Contoso"
                },
                "phoneNumber": {
                    "propertyType": "string",
                    "value": "123-456-7890"
                }
            }
        };
        res.status(200).json(analyzedBusinessCard);
    });


}

bodyPolymorphic.prototype.router = router;

module.exports = bodyPolymorphic;
