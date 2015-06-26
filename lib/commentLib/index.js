'use strict';

var CommentModel = require('../../models/comment');
var logger = require('../logger');

var CommentLib = function(){
  var self = this;

  self.getAll = function(callback){
    CommentModel.find().exec(function(error, data){
        callback(error, data);
    });
  };

  self.getById = function(id, callback){
    CommentModel.findOne({_id: id}).exec(function(error, data){
      if(!data){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, data);
    });
  };

  self.create = function(commentdata, callback){
    var newComment = new CommentModel(commentdata);

    newComment.save(function(error, comment, numAffected){
        callback(error, comment);
    });
  };

  self.update = function(id, newData, callback){
    delete newData._id;

    CommentModel.findOneAndUpdate({ _id: id }, newData, function(error, result){
      if(!result){
        return callback(new Error('NOT_FOUND'));
      }
      callback(error, result);
    });
  };

  self.delete = function(id, callback){
    CommentModel.remove({_id: id}, function(error){
      callback(error, id);
    });
  };
};

module.exports = new CommentLib();
