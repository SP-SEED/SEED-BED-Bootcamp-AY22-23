const app = require("./controller/app.js");

// set port to 8081
const port = 8081;

// define server
const server = app.listen(port, () => {
	console.log("Server is running at port: " + port);
});
