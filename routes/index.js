var express = require('express');
var router = express.Router();
var keys = require('../keys');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    APIKey: keys.APIKey,
    access_token: keys.access_token,
  });
});
router.get('/media', function(req, res, next) {
  res.render('searchMedia', { 
  });
});
router.get('/media/:id', function(req, res, next) {
  res.render('media', { 
    locationID: req.params.id,
    access_token: keys.access_token,
  });
});

module.exports = router;
