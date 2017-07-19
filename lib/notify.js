var send = require('./send.js');

module.exports = function(notification) {
	return gladys.user.getById({id : notification.user})
		.then((resultat) => {
			return [
				resultat.email,
				gladys.paramUser.getValues([
					{name : 'email_user', user : notification.user},
					{name : 'email_password', user : notification.user},
					{name : 'email_smtpHost', user : notification.user},
					{name : 'email_ssl', user : notification.user}])];
		})
		.spread((address, user, password, smtpHost, ssl) => {
			return send(user, password, smtpHost, ssl, notification.title, notification.text, address, address);
		});
};