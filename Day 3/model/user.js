const db = require("./databaseConfig.js");

const user = {
	// endpoint 1: POST user
	postUser: (user, callback) => {
		const conn = db.getConnection();
		conn.connect((error) => {
			if (error) {
				console.log("Database Error!");
			} else {
				console.log("Database Connected!");
				const { username, email, course, age, password } = user;
				const postUserQuery =
					"INSERT INTO users (username, email, course, age, password) VALUES (?, ?, ?, ?, ?);";
				conn.query(
					postUserQuery,
					[username, email, course, age, password],
					(error, result) => {
						conn.end();
						if (error) {
							console.log("Query error");
							return callback(error, null);
						} else {
							console.log("Success");
							return callback(null, result);
						}
					}
				);
			}
		});
	},

	// endpoint 2: GET all users
	getAllUsers: (callback) => {
		const conn = db.getConnection();
		conn.connect((error) => {
			if (error) {
				console.log("Database Error!");
			} else {
				console.log("Database Connected!");
				const getAllUsersQuery = "SELECT * FROM users;";
				conn.query(getAllUsersQuery, (error, result) => {
					conn.end();
					if (error) {
						console.log("Query error");
						return callback(error, null);
					} else {
						console.log("Success");
						return callback(null, result);
					}
				});
			}
		});
	},

	// endpoint 3: GET user by userID
	getUserByUserID: (userID, callback) => {
		const conn = db.getConnection();
		conn.connect((error) => {
			if (error) {
				console.log("Database Error!");
			} else {
				console.log("Database Connected!");
				const getUserByUserIDQuery = "SELECT * FROM users WHERE id = ?";
				conn.query(getUserByUserIDQuery, [userID], (error, result) => {
					conn.end();
					if (error) {
						console.log("Query error");
						return callback(error, null);
					} else {
						console.log("Success");
						return callback(null, result);
					}
				});
			}
		});
	},

	updateUser: (userID, user, callback) => {
		const conn = db.getConnection();
		conn.connect((error) => {
			if (error) {
				console.log("Database Error!");
			} else {
				console.log("Database Connected!");
				const { username, email } = user;
				const updateUserQuery =
					"UPDATE users SET username = ?, email = ? WHERE id = ?;";
				conn.query(
					updateUserQuery,
					[username, email, userID],
					(error, result) => {
						conn.end();
						if (error) {
							console.log("Query error");
							return callback(error, null);
						} else {
							console.log("Success");
							return callback(null, result);
						}
					}
				);
			}
		});
	},

	deleteUser: (userID, callback) => {
		const conn = db.getConnection();
		conn.connect((error) => {
			if (error) {
				console.log("Database Error!");
			} else {
				console.log("Database Connected!");
				const deleteUserQuery = "DELETE FROM users WHERE id = ?;";
				conn.query(deleteUserQuery, [userID], (error, result) => {
					conn.end();
					if (error) {
						console.log("Query error");
						return callback(error, null);
					} else {
						console.log("Success");
						return callback(null, result);
					}
				})
			}
		})
	},
};
module.exports = user;
