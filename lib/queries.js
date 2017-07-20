module.exports = {
	uninstall : `
		DELETE
		FROM notificationtype
		WHERE service = ?
		AND name = ?`
};