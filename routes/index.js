var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'SoundSearch', phrase: 'Discover All Kinds of News Music by Artist or Genre' });
});

module.exports = router;
