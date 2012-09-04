/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.json({
		status: 'ok'
	});
};

exports.github = function(req, res) {
	if(req.body.payload){
		runCommand('./node-blog-hook.sh');
		res.writeHead(200);
	} else {
		res.writeHead(403);
	}
	res.end();
}

var runCommand = function(commandLine) {
	var command = require('child_process').exec;
	var commandCallback = function(error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec: ' + error);
		}
	}
	var child = command(commandLine, commandCallback);
}

