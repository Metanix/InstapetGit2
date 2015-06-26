'use strict';

var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({

//Comentarios y otros
  	comments: {type: String, required:false},
  	like: {type: String, required:false},  
  



});

module.exports = mongoose.model('Comment', commentSchema );
