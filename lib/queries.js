module.exports = {
	uninstallNotificationUser : `
		DELETE
		FROM notificationuser
		WHERE notificationtype =
		(
			SELECT id
			FROM notificationtype
			WHERE service = ?
			AND name = ?
		)`,
		
	uninstallNotificationType : `
		DELETE
		FROM notificationtype
		WHERE service = ?
		AND name = ?`
};