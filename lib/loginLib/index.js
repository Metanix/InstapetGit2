'use strict';
var _   = require('underscore');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var UserModel = require('../../models/user');
var logger = require('../logger');

var UsersLib = function(){
    var self = this;

    users.push({id: 1, nickRegistro: 'ccarrasco', passRegistro: 'clave1234'});

    self.findOne = function(nickRegistro, passRegistro, callback){
        //TODO: refactor. It should been gotten from db and passRegistro with a hash md5
        UserModel.findOne({nickRegistro: nickRegistro}, function(error, user){

        if (error){
            callback(error);
        } 
        if(user.passRegistro == passRegistro){
            callback(error,user);
        }
        else {
            return callback(error);
        }
    });
    };

    self.getToken = function(userId, callback){
        //TODO: refactor. get secret string from a configuration file
        var secret = 'secretpass';
        var token = jwt.sign(userId, secret, {
            expiresInMinutes: 1440 // expires in 24 hours
        });

        callback(null,token);
    };

    self.validateThirdPartyAccessToken = function(thirdParty, accessToken, callback){
        
        //You will earn +0.5 point if you figure out how to validate the access token with
        //google api
        
        callback(null);

    };

};

module.exports = new UsersLib();
