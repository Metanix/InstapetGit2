'use strict';

var usersLib = require('../../../lib/usersLib');

module.exports = function (router) {  

    router.get('/', function(req, res){

        //If access token was not sent in the query string ej: api/login?who=google&access_token=wrwerwqer
        //Then return a 401
        if(!req.query || !req.query.thirdparty || !req.query.userid || !req.query.accesstoken){
            return res.status(401).end();
        }

        //Validate the access token with the third party (ej: google)
        usersLib.validateThirdPartyAccessToken(req.query.who, req.query.accesstoken, function(error){
            if (error){
                return res.status(401).end();
            }
            
            //Get the JWToken
            usersLib.getToken(req.query.userid, function(error, token){
                return res.status(200).json({'token': token}).end();  
            });             
        });
        

    });

    router.post('/', function (req, res) {

        var userData = req.body;    


            if (error && error.message === 'NOT_FOUND'){
                return res.status(401).json({message: 'USER_OR_PASSWORD_NOT_FOUND'}).end();
            }

            if (error){
                return res.status(500).json(error).end();
            }
            console.log(user);
            usersLib.getToken(user.id, function(error, token){
                return res.status(201).json({'token': token}).end();  
            });      

        });

    });


};

