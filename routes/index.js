var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index.hbs');
});

module.exports = router;