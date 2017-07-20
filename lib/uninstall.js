var queries = require('./queries.js');
var Constants = require('./constants.js');
var constants = Constants.constants;

module.exports = function() {
	return gladys.utils.sql(queries.uninstall, [constants.Service, constants.Name]);
};