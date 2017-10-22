var express = require('express');
var router = express.Router();
var keys = require('../keys');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    APIKey: keys.APIKey,
    access_token: keys.access_token,
    //APIKey: 'AIzaSyC6ymEzCR5_Lvj1xSon7EAADZN901Td0bQ',
    //access_token: '6250944971.c954949.e4e34c3dc3414491b55f677a2f580545'
  });
});
router.get('/media', function(req, res, next) {
  res.render('searchMedia', { 
  });
});
router.get('/media/:id', function(req, res, next) {
  res.render('media', { 
    title: req.params.id,
  });
});

module.exports = router;
