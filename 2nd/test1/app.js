var express = require("express");
var app = express();

app.listen(3000, function() {
  console.log("Start, express server is running...");
});

app.use(express.static("public"));

//url routing
app.get("/", function(req, res) {
  //   res.send("<h1>wurrup</h1>shit");
  res.sendFile(__dirname + "/public/main.html");
});
app.get("/main", function(req, res) {
  //   res.send("<h1>wurrup</h1>shit");
  res.sendFile(__dirname + "/public/main.html");
});
