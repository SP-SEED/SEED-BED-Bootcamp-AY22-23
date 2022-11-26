const express = require("express");
const user = require("../model/user.js");

const app = express();

app.use(express.json()); // used to parse JSON objects
app.use(express.urlencoded({ extended: true })); // used to parse URL-encoded bodies

// endpoints

// endpoint 1: POST user
app.post("/api/user", (req, res) => {
	user.postUser(req.body, (error, result) => {
		if (error) {
			res.status(500).json("Internal Server Error");
		} else {
			res.status(200).json("Number of rows affected: " + result.affectedRows);
		}
	});
});

// endpoint 2: GET all users
app.get("/api/users", (req, res) => {
	user.getAllUsers((error, result) => {
		if (error) {
			res.status(500).json("Internal Server Error");
		} else {
			res.status(200).json(result);
		}
	});
});

// endpoint 3: GET user by userID
app.get("/api/user/:userID", (req, res) => {
	const userID = parseInt(req.params.userID);

	user.getUserByUserID(userID, (error, result) => {
		if (error) {
			res.status(500).json("Internal Server Error");
		} else {
			res.status(200).json(result);
		}
	});
});

// endpoint 4: PUT update a single user using their userid
app.put("/api/user/:userID", (req, res) => {
	const userID = parseInt(req.params.userID);

	user.updateUser(userID, req.body, (error, result) => {
		if (error) {
			res.status(500).json("Internal Server Error");
		} else {
			res.status(200).json("Number of rows affected: " + result.affectedRows);
		}
	});
});

// endpoint 5: DELETE a single user using the userid
app.delete("/api/user/:userID", (req, res) => {
	const userID = parseInt(req.params.userID);

	user.deleteUser(userID, (error, result) => {
		if (error) {
			res.status(500).json("Internal Server Error");
		} else {
			res.status(200).json("Number of rows affected: " + result.affectedRows);
		}
	});
});

module.exports = app;
