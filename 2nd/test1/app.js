var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.listen(3000, function() {
  console.log("Start, express server is running...");
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//url routing
app.get("/", function(req, res) {
  //   res.send("<h1>wurrup</h1>shit");
  res.sendFile(__dirname + "/public/main.html");
});
app.get("/main", function(req, res) {
  //   res.send("<h1>wurrup</h1>shit");
  res.sendFile(__dirname + "/public/main.html");
});

app.post("/email_post", function(req, res) {
  console.log(req.body);
  res.send("<h1>Welcome!</h1>" + req.body.email);
});
