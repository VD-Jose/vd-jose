var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var port = 5000;

// Handlebars
var hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res) {
  res.render("home", {
    title: "Home Page",
    content: "This is an example of Express with Handlebars"
  });
});

app.get("/about", function(req, res) {
    res.render("about", {
      title: "About Us",
      content: "This is an example of Express with Handlebars"
    });

    app.get('/profile', function (req, res) {
      res.render ('profile', {
        title:" Employee Profile",
        name: "Joseph",
        Lname:"Priyan",
        DOB:'10-6-1998'
        
      })
    })
  });

var server = app.listen(port, function() {
  console.log("Listening on port %d", server.address().port);
});

