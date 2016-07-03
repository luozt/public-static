var express = require('express');
var router = express.Router();

var appConfig = require('./config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../dist/'+ appConfig.media +'/index.html',{title:'test'});
  //res.sendfile(__dirname + '/index.html');
});

module.exports = router;
