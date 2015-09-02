var express = require('express'),
    bodyParser = require('body-parser'),
    db = require("./models"),
    app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/signup", function (req, res) {
  res.send("Coming soon");
});

// where the user submits the sign-up form
app.post(["/users", "/signup"], function signup(req, res) {
  // grab the user from the params
  var user = req.body.user;
  // pull out their email & password
  var email = user.email;
  var password = user.password;
  // create the new user
  db.User.createSecure(email, password, function() {
    res.send(email + " is registered!\n");
  });
});

// where the user submits the login form
app.post(["/sessions", "/login"], function login(req, res) {
  var user = req.body.user;
  var email = user.email;
  var password = user.password;
  db.User.authenticate(email, password, function (err, user) {
    res.send(email + " is logged in\n");
  });
});

var listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port);
});