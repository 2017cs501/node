var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/afzaal', function(req, res, next) {
  res.send({data:"My Name is afzaal"});
});

module.exports = router;
