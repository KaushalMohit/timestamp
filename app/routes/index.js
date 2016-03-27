use 'strict';
module.exports = function(app){
	app.route('/').get(function(req, res){
		app.sendFile(process.cwd() + 'public/index.html');
	});
};
