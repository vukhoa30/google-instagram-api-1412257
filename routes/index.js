var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    APIKey: 'AIzaSyC6ymEzCR5_Lvj1xSon7EAADZN901Td0bQ',
    access_token: '6250944971.c954949.e4e34c3dc3414491b55f677a2f580545'
  });
});

module.exports = router;
