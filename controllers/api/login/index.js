'use strict';

var usersLib = require('../../../lib/loginLib');

module.exports = function (router) {  

  
    router.post('/', function (req, res) {

        var userData = req.body;    

        usersLib.findOne(userData.nickRegistro, userData.passRegistro, function(error, user){

            if (error && error.message === 'NOT_FOUND'){
                return res.status(401).json({message: 'USER_OR_PASSWORD_NOT_FOUND'}).end();
            }

                      usersLib.getToken(user.id, function(error, token){
                return res.status(201).json({'token': token}).end();  
            });      

        });

    });
};