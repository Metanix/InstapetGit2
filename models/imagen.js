'use strict';

var mongoose = require('mongoose');

var imagenSchema = mongoose.Schema({

//Login
  	userLogin: {type: String, required:false},
  	passLogin: {type: String, required:false},  
  
//Registro
 	nameReg:  {type: String, required:false},
  	apeReg:  {type: String, required:false},
  	mailReg: {type: String, required:false},
  	passReg: {type: String, required:false},
  	nickReg: {type: String, required:false},

//Mascotas
	nameMascota:  {type: String, required:false},
	amigosMascota:  {type: String, required:false},
});

module.exports = mongoose.model('Imagen', imagenSchema );
