var express = require('express')
var router = express.Router();

// const authenication=require('../Middle/authenication')
router.get('/', function(req, res, next) {
    res.render('Home');
  });

router.get('/Classify', function(req, res, next) {
    res.redirect('/Classify')
  });
  router.get('/Product', function(req, res, next) {
    res.redirect('/Product')
  });
  module.exports = router;