var express = require('express');
var app = express();

var port = process.env.PORT || 8080

app.use(express.static(__dirname));

app.get("/", function(req, res) {
	res.render("index.html");
})

app.get("/features", function(req, res) {
	res.render("features");
})

app.get("/about", function(req, res) {
	res.render("about");
})

app.listen(port, function() {
	console.log("app running");
})