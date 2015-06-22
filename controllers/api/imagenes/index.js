'use strict';

var imagenesLib = require('../../../lib/imagenesLib');

module.exports = function (router) {

  router.get('/', function (req, res) {

    imagenesLib.getAll(function(error, results){

      res.setHeader('Access-Control-Allow-Origin','*');

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(200).json(results).end();

    });

  });

  router.get('/:id', function (req, res) {

    var id = req.params.id;

    imagenesLib.getById(id, function(error, imagen){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(imagen).end();

    });
  });

  router.post('/', function (req, res) {

    var newImagen = req.body;

    imagenesLib.create(newImagen, function(error){

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(201).end();

    });
  });

  router.put('/:id', function (req, res) {

    var id = req.params.id;
    var newData = req.body;

    imagenesLib.update(id, newData, function(error, imagen){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(imagen).end();

    });
  });

  router.delete('/:id', function (req, res) {

    var id = req.params.id;

    imagenesLib.delete(id, function(error, imagen){

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
