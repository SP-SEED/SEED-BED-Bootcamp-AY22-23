const mysql = require("mysql");

const dbConnect = {
	getConnection: () => {
		const conn = mysql.createConnection({
			host: "localhost", // name of host
			user: "root", // username of your mysql
			password: "root", // password of your mysql
			database: "user_database", // name of database
		});

		return conn;
	},
};

module.exports = dbConnect;
