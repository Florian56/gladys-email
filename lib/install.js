var Constants = require('./constants.js');
var constants = Constants.constants;

module.exports = function() {
	return gladys.notification.install({service : constants.Service, name : constants.Name});
};