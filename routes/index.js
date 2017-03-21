'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Basejump: Timestamp Microservice' });
});

router.get('/:date', function (req, res) {
  var date = req.params.date;
  var unix = null;
  var natural = null;

  if (Number(date)) {
    date = Number(date) * 1000;
  }
  date = new Date(date);

  if (date instanceof Date && isFinite(date)) {
    unix = date.valueOf() / 1000;
    natural = date.toDateString();
  }

  res.json({
    unix: unix,
    natural: natural
  });
});

module.exports = router;
