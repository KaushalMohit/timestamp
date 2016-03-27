use 'strict';
var moment = require('moment');
module.exports = function(app){
	app.get('/:query', function(req, res){
	var date = req.params.query;
	var unixDate;
	var naturalDate;
	if(+date >= 0)
	{
		unixDate = +date;
		naturalDate = convertToNaturalDate(unixDate);
	}
	else if(moment(date, 'MMMM DD, YYYY').isValid())
	{
		unixDate = moment(date, 'MMMM DD, YYYY').format('X');
		naturalDate = convertToNaturalDate(unixDate);
	}

	var obj = {'unix' : unixDate, 'natural' : naturalDate};
	res.send(JSON.stringify(obj));
	});
	function convertToNaturalDate(uDate)
	{
		return moment.unix(uDate).format('MMMM DD, YYYY');
	}
};


