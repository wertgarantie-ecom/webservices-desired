'use strict';

var utils = require('../utils/writer.js');
var ProductOffer = require('../service/ProductOfferService');

module.exports.getProductOffers = function getProductOffers (req, res, next) {
  var body = req.swagger.params['body'].value;
  ProductOffer.addPet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePet = function deletePet (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  var api_key = req.swagger.params['api_key'].value;
  ProductOffer.deletePet(petId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findPetsByStatus = function findPetsByStatus (req, res, next) {
  var status = req.swagger.params['status'].value;
  ProductOffer.findPetsByStatus(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findPetsByTags = function findPetsByTags (req, res, next) {
  var tags = req.swagger.params['tags'].value;
  ProductOffer.findPetsByTags(tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPetById = function getPetById (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  ProductOffer.getPetById(petId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePet = function updatePet (req, res, next) {
  var body = req.swagger.params['body'].value;
  ProductOffer.updatePet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePetWithForm = function updatePetWithForm (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  ProductOffer.updatePetWithForm(petId,name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadFile = function uploadFile (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  var additionalMetadata = req.swagger.params['additionalMetadata'].value;
  var file = req.swagger.params['file'].value;
  ProductOffer.uploadFile(petId,additionalMetadata,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
