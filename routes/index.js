var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    APIKey: 'AIzaSyC6ymEzCR5_Lvj1xSon7EAADZN901Td0bQ'
  });
});

module.exports = router;
