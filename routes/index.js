var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.json({ "unix": '', "natural": "" });
});

router.get('/:unixtime', function(req,res,next){
    var unixOrNat = req.params.unixtime.split(' ').length;
    if (unixOrNat > 1) {
        res.json({ "unix": new Date(req.params.unixtime).getTime() / 1000, "natural": req.params.unixtime});
    }
    
    res.json({ "unix": req.params.unixtime, "natural": timeConverter(req.params.unixtime)});
    
});


function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + ' ' + date + ',' + ' '+  year;
  return time;
}

module.exports = router;
