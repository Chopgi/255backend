//setup | this is similar to when we use our detailt tags in html
const express = require("express");
//activates or tellss this app variable to  be an express server
const app = express();
const router = express.Router();

//start the web server | app.lsiten(portnumber, fucntion)
app.listen(3000, function () {
  console.log("Listening on port 3000");
});

//making an api using routes
// routes are used to handle browser requests. they look like URLS. The difference is that when a browser requsts a route, it is dynamically handled by using a function.

//GET  or a "regular" request when someone visits http://localhost:3000/hello . When using a function in a route, we almost always have a parameter or handle a response and request
app.get("/hello", function (req, res) {
  res.send("<h1>Hello Express</h1>");
});

app.get("/goodbye", function (req, res) {
  res.send("<h1>Goodbye, Express</h1>");
});
