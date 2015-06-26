'use strict';

var commentsLib = require('../../../lib/commentsLib');

module.exports = function (router) {

  router.get('/', function (req, res) {

    commentsLib.getAll(function(error, results){

      res.setHeader('Access-Control-Allow-Origin','*');

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(200).json(results).end();

    });

  });

  router.get('/:id', function (req, res) {

    var id = req.params.id;

    commentsLib.getById(id, function(error, comment){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(comment).end();

    });
  });

  router.post('/', function (req, res) {

    var newComment = req.body;

    commentsLib.create(newComment, function(error){

      if (error){
        return res.status(500).json(error).end();
      }

      res.status(201).end();

    });
  });

  router.put('/:id', function (req, res) {

    var id = req.params.id;
    var newData = req.body;

    commentsLib.update(id, newData, function(error, comment){

      if (error){
        if (error.message === 'NOT_FOUND'){
          return res.status(404).end();
        }
        return res.status(500).json(error).end();
      }

      res.status(200).json(comment).end();

    });
  });

  router.delete('/:id', function (req, res) {

    var id = req.params.id;

    commentsLib.delete(id, function(error, comment){

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
