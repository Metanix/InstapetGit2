'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

//Login
  	userLogin: {type: String, required:false},
  	passLogin: {type: String, required:false},  
  
//Registro
 	  nameRegistro:  {type: String, required:false},
  	apeRegistro:  {type: String, required:false},
  	mailRegistro: {type: String, required:false},
  	passRegistro: {type: String, required:false},
  	nickRegistro: {type: String, required:false},


});

module.exports = mongoose.model('User', userSchema );
