var emailjs = require('emailjs');

module.exports = function(user, password, smtpHost, ssl, subject, message, emailFrom, emailTo) {
	var server = emailjs.server.connect({
		user : user, 
		password : password, 
		host : smtpHost, 
		ssl : ssl
	});
	
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