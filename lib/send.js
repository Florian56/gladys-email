var emailjs = require('emailjs');

module.exports = function(user, password, smtpHost, ssl, subject, message, emailFrom, emailTo) {
	// Create server with configuration.
	var server = emailjs.server.connect({
		host : smtpHost
	});
	
	// Send email.
	server.send({
		from : emailFrom,
		to : emailTo,
		subject : subject,
		text : message
	},
	function(error, response) {
		if(error) {
			return Promise.reject(error);
		}
		else {
			return Promise.resolve(response);
		}
	});
};