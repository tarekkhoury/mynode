var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// just a test api with id param
router.get('/api/v1.0/test/:id', function(req, res, next) {
	res.json([{
		"test": "OK",
		"id": req.params.id
	}, {
		"test": "OK2",
		"id": req.params.id
	}]);
});


module.exports = router;
