// Connect module
// npm i connect
let connect = require("connect");
let http = require("http");

let app = connect();

function about(req, res) {
  console.log("User request ABOUT Page");
}

function email(req, res) {
  console.log("User request EMAIL Page");
}

app.use("/about", about);
app.use("/email", email);

http.createServer(app).listen(5500);
console.log("Server is running...");
