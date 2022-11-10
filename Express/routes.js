var express = require("express");
var port = 8081; // use another port 8081 for this exercise
var hostname = "localhost";

var app = express();

var urlencodedParser = express.urlencoded({ extended: false });
app.use(urlencodedParser); // attach body-parser middleware
app.use(express.json()); // parse json data
// VERB + URL

app.get("/api/user", function (req, res) {
  res.status(200);
  res.type(".html");
  res.end("Data of all users sent!");
});

app.post("/api/user", function (req, res) {
  res.end(
    `Received new user data:\nUsername ${req.body.username}\nEmail ${req.body.email}\nRole ${req.body.role}\nPassword ${req.body.password}`
  );
});

app.post("/login", function (req, res) {
  if (req.body.username == "admin@abc.com" && req.body.password == "1234567") {
    res.send("'message' : 'Welcome admin!'");
  } else {
    res.send("Invalid credentials!");
  }
});

app.listen(port, hostname, () => {
  console.log(`Server started and accessible via http://${hostname}:${port}/`);
});
