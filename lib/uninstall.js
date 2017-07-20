var queries = require('./queries.js');
var Constants = require('./constants.js');
var constants = Constants.constants;

module.exports = function() {
	return gladys.utils.sql(queries.uninstallNotificationUser, [constants.Service, constants.Name])
		.then(() => {
			return gladys.utils.sql(queries.uninstallNotificationType, [constants.Service, constants.Name])
		});
};