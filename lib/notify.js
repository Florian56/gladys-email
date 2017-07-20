var send = require('./send.js');

module.exports = function(notification) {
	return gladys.user.getById({id : notification.user})
		.then((resultat) => {
			return [
				resultat.email,
				gladys.paramUser.getValues([
					{name : 'email_smtpHost', user : notification.user},
					{name : 'email_ssl', user : notification.user}])];
		})
		.spread((address, parametresUtilisateur) => {
			return send(
				null,
				null,
				parametresUtilisateur[0],
				parametresUtilisateur[1],
				notification.title,
				notification.text,
				address,
				address);
		});
};