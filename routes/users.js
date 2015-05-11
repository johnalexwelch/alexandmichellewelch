var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
 * POST to adduser.
 */
router.post('/guestMessage', function(req, res) {
	var db = req.db;
	db.collection('messages').insert(req.body, function(err, result){
		res.send(
			(err === null) ? { msg: '' } : { msg: err }
		);
    	});
});

module.exports = router;

