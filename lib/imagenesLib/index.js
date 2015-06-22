'use strict';

var ImagenModel = require('../../models/imagen');
var logger = require('../logger');

var ImagenLib = function(){
  var self = this;

  self.getAll = function(callback){
    ImagenModel.find().exec(function(error, data){
        callback(error, data);
    });
  };

  self.getById = function(id, callback){
    ImagenModel.findOne({_id: id}).exec(function(error, data){
      if(!data){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, data);
    });
  };

  self.create = function(imagenData, callback){
    var newImagen = new ImagenModel(imagenData);

    newImagen.save(function(error, imagen, numAffected){
        callback(error, imagen);
    });
  };

  self.update = function(id, newData, callback){
    delete newData._id;

    ImagenModel.findOneAndUpdate({ _id: id }, newData, function(error, result){
      if(!result){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, result);
    });
  };

  self.delete = function(id, callback){
    ImagenModel.remove({_id: id}, function(error){
      callback(error, id);
    });
  };
};

module.exports = new ImagenLib();
