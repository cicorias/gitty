/*
 * Gitty - execute.js
 * Author: Gordon Hall
 * 
 * Handles the execution of Git commands
 */

var exec = require('child_process').exec
  , Command;
  
Command = function(repo_path, operation, flags, options) {
	this.repo = repo_path;
	// assemble command
	this.command = 'git ' + operation;
	// add flags
	for (var flag = 0; flag < flags.length; flag ++) {
		this.command += ' ' + flags[flag];
	}
	// add options
	this.command +=  ' ' + options;	
};

Command.prototype.exec = function(callback) {
	if (fs.existsSync(this.repo + '/.git')) {
		exec(this.command, { cwd : this.repo }, callback);
	} else {
		throw new Error(this.repo + ' is not a valid Git repository.');
	}
};

module.exports = Command;