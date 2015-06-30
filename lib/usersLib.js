'use strict';
var _   = require('underscore');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var UsersLib = function(){
    var self = this;
    var users = []; 


        var usersList = _.filter(users, function(item){
        });

        if (usersList.length > 0){
            callback(null, usersList[0]);
        } else {
            callback(new Error('NOT_FOUND'));
        }
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

