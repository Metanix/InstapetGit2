'use strict';

var UserModel = require('../../models/user');
var logger = require('../logger');

var UserLib = function(){
  var self = this;

  self.getAll = function(callback){
    UserModel.find().exec(function(error, data){
        callback(error, data);
    });
  };

  self.getById = function(id, callback){
    UserModel.findOne({_id: id}).exec(function(error, data){
      if(!data){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, data);
    });
  };

  self.create = function(userData, callback){
    var user = new UserModel({
      nickRegistro: userData.nickRegistro,
      passRegistro: userData.passRegistro,
      mailRegistro: userData.mailRegistro
    });

    user.save(function(error, result){
      if (error) callback(error);
      callback(error,result);
    });
  };

  self.update = function(id, newData, callback){
    delete newData._id;

    UserModel.findOneAndUpdate({ _id: id }, newData, function(error, result){
      if(!result){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, result);
    });
  };

  self.delete = function(id, callback){
    UserModel.remove({_id: id}, function(error){
      callback(error, id);
    });
  };
};

module.exports = new UserLib();
