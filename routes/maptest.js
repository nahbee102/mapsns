var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('maptest', { title: '회원가입폼~' });
});

router.post('/',function(req,res,next){
	console.log('req.body(change againg) : '+req.body);
	res.json(req.body);
});

module.exports = router;