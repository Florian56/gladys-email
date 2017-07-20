module.exports = function(sails) {
	return {
		install : require('./lib/install.js'),
		uninstall : require('./lib/uninstall.js'),
		notify : require('./lib/notify.js')
	};
};