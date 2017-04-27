var moment = require("moment");

var now = moment();



var currentTime = 1493291351;

var time = moment.unix(currentTime);
var formated = time.format("MMMM Mo, YYYY @ hh:mm A");
console.log(formated);
