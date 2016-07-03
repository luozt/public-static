var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var httpProxy = require('http-proxy');

var fs = require('fs');
var ejs = require('ejs');

var routes = require('./index');

var appConfig = require('./config');

var app = express();

var apiProxy = httpProxy.createProxyServer();

var distPath = 'dist/'+appConfig.media;


/**
 * 接口代理配置
 */
var proxyTarget;

switch(appConfig.media){
  case 'lc':
    proxyTarget = 'http://10.2.122.117:48080';
    break;
  default:
    proxyTarget = 'http://10.2.122.117:48080';
}

app.all("/userright/*", function(req, res) {
  apiProxy.web(req, res, {target: proxyTarget});
});

app.all("/operator/*", function(req, res) {
  apiProxy.web(req, res, {target: proxyTarget});
});


/**
 * express配置
 */
app.set('views', path.join(__dirname, '../dist/', appConfig.media, 'src'));
app.use(favicon(path.join(__dirname, '../favicon.ico')));
app.use(express.static(path.join(__dirname, '..', distPath)));

// view engine setup
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development' || app.get('env') === 'dev') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
