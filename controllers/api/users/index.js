'use strict';

var usersLib = require('../../../lib/usersLib');

module.exports = function (router) {

  router.get('/', function (req, res) {

    usersLib.getAll(function(error, results){

      res.setHeader('Access-Control-Allow-Origin','*');

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(200).json(results).end();

    });

  });

  router.get('/:id', function (req, res) {

    var id = req.params.id;

    usersLib.getById(id, function(error, user){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(user).end();

    });
  });

  router.post('/', function (req, res) {

    var newUsers = req.body;

    usersLib.create(newUsers, function(error){

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(201).end();

    });
  });

  router.put('/:id', function (req, res) {

    var id = req.params.id;
    var newData = req.body;

    usersLib.update(id, newData, function(error, user){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(user).end();

    });
  });

  router.delete('/:id', function (req, res) {

    var id = req.params.id;

    usersLib.delete(id, function(error, user){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(204).end();

    });
  });


};
