'use strict';

var http    = require('http');
var express = require('express');
var kraken = require('kraken-js');
var mongoose = require('mongoose');
var logger = require('./lib/logger');
var options, app;

options = {
    onconfig: function (config, next) {

      var dbData = config.get('databaseConfig');

      var dbConnectionString = dbData.mongoDbUrl + dbData.dbName;

      mongoose.connect(dbConnectionString);

      var database = mongoose.connection;

      database.on('error', function(error){
        logger.error(error);
      });

      database.once('open', function callback() {
        logger.info('db connection open');
      });

      next(null, config);
    }
};

app = module.exports = express();
app.use(kraken(options));
app.on('start', function () {
  logger.info('Application ready to serve requests.');
  logger.info('Environment: %s', app.kraken.get('env:env'));
});

/**
 * Create and start HTTP server.
 */
if (!module.parent) {
  var server = http.createServer(app);
  var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
  var port = process.env.OPENSHIFT_NODEJS_PORT || 8000;
  logger.info('ipaddress: ' + ipaddress);
  logger.info('port: ' + port);
  server.listen( port, ipaddress, function() {
    logger.info((new Date()) + ' Server is listening...');
  });
}
